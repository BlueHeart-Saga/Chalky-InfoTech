import { notFound, redirect } from 'next/navigation';
import type { Metadata } from 'next';
import { Suspense } from 'react';
import { unstable_cache } from 'next/cache';
import api from '@/services/api';
import { buildPageMetadataWithImage } from '@/lib/seo-images';
import { extractPostId, getPostSlug } from '@/lib/seo-slug';
import InsightDetailClient from '@/sections/insights/InsightDetailClient';

const getCachedPost = (postId: string) =>
  unstable_cache(
    async () => await api.getContentById(postId),
    ['post-detail', postId],
    { revalidate: 3600, tags: [`post-${postId}`] }
  )();

const getCachedSectionPosts = (sectionSlug: string) =>
  unstable_cache(
    async () => await api.getSectionPosts(sectionSlug, 4),
    ['section-posts', sectionSlug],
    { revalidate: 3600, tags: [`section-${sectionSlug}`] }
  )();

type Props = {
  params: Promise<{ categorySlug: string; postId: string }>;
};

export async function generateStaticParams() {
  try {
    const posts = await api.getAllPosts(20);
    const staticParams: { categorySlug: string; postId: string }[] = [];

    posts.forEach((post: any) => {
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

  return [
    {
      categorySlug: 'blogs',
      postId: 'it-staffing-solutions-how-to-build-the-right-tech-team-without-the-guesswork-6a23a71cb9074df556d032f1',
    },
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categorySlug, postId: rawParam } = await params;
  const realPostId = extractPostId(rawParam);

  try {
    const response = await getCachedPost(realPostId);
    const backendPost = response?.item;
    if (!backendPost) return { title: 'Post Not Found' };

    const post = api.transformContent(backendPost);
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
  const realPostId = extractPostId(rawParam);
  let post: any = null;
  let relatedPosts: any[] = [];
  let blocks: any[] = [];

  try {
    const response = await getCachedPost(realPostId);
    const backendPost = response?.item;
    if (backendPost) {
      post = api.transformContent(backendPost);
      blocks = backendPost.blocks || [];
    }
  } catch (err) {
    console.error('Error fetching post details:', err);
  }

  if (!post) {
    notFound();
  }

  // Check if requested slug differs from current canonical seoSlug, and issue HTTP 301 permanent redirect
  const seoSlug = getPostSlug(post);
  if (rawParam !== seoSlug) {
    redirect(`/insights/${categorySlug}/${seoSlug}`, 'permanent' as any);
  }

  try {
    const sectionPosts = await getCachedSectionPosts(post.category?.slug || 'insights');
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
