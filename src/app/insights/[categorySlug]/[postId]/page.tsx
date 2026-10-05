import { notFound, permanentRedirect } from 'next/navigation';
import type { Metadata } from 'next';
import { Suspense } from 'react';
import { unstable_cache } from 'next/cache';
import api, { isPublishedPost } from '@/services/api';
import { buildPageMetadataWithImage } from '@/lib/seo-images';
import { extractPostId, getPostSlug } from '@/lib/seo-slug';
import InsightDetailClient from '@/sections/insights/InsightDetailClient';

export const dynamicParams = true;
export const revalidate = 60;

const getCachedPost = (postId: string) =>
  unstable_cache(
    async () => {
      const res = await api.getContentById(postId);
      const backendPost = res?.item || (res?.id || res?._id ? res : null);
      if (!backendPost || !isPublishedPost(backendPost)) {
        throw new Error(`Post ${postId} unavailable`);
      }
      return res;
    },
    ['post-detail', postId],
    { revalidate: 60, tags: [`post-${postId}`] }
  )();

const getCachedSectionPosts = (sectionSlug: string) =>
  unstable_cache(
    async () => {
      const posts = await api.getSectionPosts(sectionSlug, 6);
      if (!posts || posts.length === 0) {
        throw new Error(`Section posts for ${sectionSlug} empty`);
      }
      return posts;
    },
    ['section-posts', sectionSlug],
    { revalidate: 60, tags: [`section-${sectionSlug}`] }
  )();

type Props = {
  params: Promise<{ categorySlug: string; postId: string }>;
};

async function findPostByMultiTier(rawParam: string) {
  const realPostId = extractPostId(rawParam);
  let backendPost: any = null;

  // Tier 1: Cached lookup by realPostId
  try {
    const res = await getCachedPost(realPostId).catch(() => null);
    backendPost = res?.item || (res?.id || res?._id ? res : null);
  } catch {}

  // Tier 2: Direct uncached API lookup by realPostId
  if (!backendPost || !isPublishedPost(backendPost)) {
    try {
      const res = await api.getContentById(realPostId).catch(() => null);
      backendPost = res?.item || (res?.id || res?._id ? res : null);
    } catch {}
  }

  // Tier 3: Direct uncached API lookup by rawParam (if different from realPostId)
  if ((!backendPost || !isPublishedPost(backendPost)) && rawParam !== realPostId) {
    try {
      const res = await api.getContentById(rawParam).catch(() => null);
      backendPost = res?.item || (res?.id || res?._id ? res : null);
    } catch {}
  }

  // Tier 4: Fallback search in getAllPosts list
  if (!backendPost || !isPublishedPost(backendPost)) {
    try {
      const allPosts = await api.getAllPosts(500).catch(() => []);
      const found = allPosts.find((p: any) => 
        p.id === realPostId || 
        p.id === rawParam || 
        getPostSlug(p) === rawParam ||
        rawParam.endsWith(p.id)
      );
      if (found) {
        return { 
          post: found, 
          blocks: found.rawBlocks || found.blocks || [] 
        };
      }
    } catch {}
  }

  if (backendPost && isPublishedPost(backendPost)) {
    const post = api.transformContent(backendPost);
    const blocks = backendPost.blocks || [];
    return { post, blocks };
  }

  return null;
}

export async function generateStaticParams() {
  try {
    const posts = await api.getAllPosts(50);
    const staticParams: { categorySlug: string; postId: string }[] = [];

    (posts ?? []).forEach((post: any) => {
      const catSlug = post.category?.slug || 'blogs';
      const postSlug = getPostSlug(post);
      if (catSlug && postSlug) {
        staticParams.push({
          categorySlug: catSlug,
          postId: postSlug,
        });
      }
    });

    if (staticParams.length > 0) {
      return staticParams;
    }
  } catch (err) {
    console.error('Error generating static params for posts:', err);
  }

  return [];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categorySlug, postId: rawParam } = await params;

  try {
    const result = await findPostByMultiTier(rawParam);
    if (!result || !result.post) return { title: 'Post Not Found' };

    const { post } = result;
    const seoSlug = getPostSlug(post);

    const fullTitle = `${post.title} | Chalky`;
    const finalTitle =
      fullTitle.length > 65
        ? post.title.length > 62
          ? `${post.title.substring(0, 62)}...`
          : post.title
        : fullTitle;

    return buildPageMetadataWithImage({
      title: finalTitle,
      description:
        post.excerpt ||
        'Expert perspective on strategic developments, hiring frameworks, and corporate transitions.',
      keywords: [post.category?.name || 'insights', 'trends', 'recruitment', 'Chalky Infotech'],
      url: `/insights/${categorySlug}/${seoSlug}`,
      path: post.image || '/og-image.png',
      alt: post.title,
    });
  } catch (err) {
    return {
      title: 'Post Not Found',
      alternates: {
        canonical: `/insights/${categorySlug}/${rawParam}`,
      },
    };
  }
}

async function InsightDetailPageContent({
  params,
}: {
  params: Promise<{ categorySlug: string; postId: string }>;
}) {
  const { categorySlug, postId: rawParam } = await params;
  const result = await findPostByMultiTier(rawParam);

  if (!result || !result.post) {
    notFound();
  }

  const { post, blocks } = result;
  const realPostId = post.id;

  // Check if requested slug differs from current canonical seoSlug, and issue HTTP 301 permanent redirect
  const seoSlug = getPostSlug(post);
  if (rawParam !== seoSlug && !rawParam.endsWith(post.id)) {
    permanentRedirect(`/insights/${categorySlug}/${seoSlug}`);
  }

  let relatedPosts: any[] = [];
  try {
    const sectionPosts = await getCachedSectionPosts(post.category?.slug || 'insights').catch(() => []);
    relatedPosts = sectionPosts.filter((p: any) => p.id !== realPostId).slice(0, 3);
  } catch (err) {
    console.error('Error fetching related posts:', err);
  }

  return (
    <InsightDetailClient
      post={post}
      blocks={blocks}
      relatedPosts={relatedPosts}
      categorySlug={categorySlug}
      postId={realPostId}
    />
  );
}

export default function InsightDetailPage({ params }: Props) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white py-24 flex justify-center items-center">
          <div className="w-10 h-10 border-4 border-[#7A1F5C]/20 border-t-[#7A1F5C] rounded-full animate-spin" />
        </div>
      }
    >
      <InsightDetailPageContent params={params} />
    </Suspense>
  );
}
