import type { Metadata } from 'next';
import { Suspense } from 'react';
import { unstable_cache } from 'next/cache';
import api, { isPublishedPost } from '@/services/api';
import { buildPageMetadataWithImage } from '@/lib/seo-images';
import { extractPostId, getPostSlug, slugify } from '@/lib/seo-slug';
import InsightDetailClient from '@/sections/insights/InsightDetailClient';
import Link from 'next/link';
import CTASection from '@/components/CTASection';

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

async function findPostByMultiTier(rawParam: string, categorySlug?: string) {
  const realPostId = extractPostId(rawParam);
  let backendPost: any = null;

  // Extract base slug prefix if rawParam is "slug-24hexid"
  let slugPrefix = rawParam;
  if (/^[a-fA-F0-9]{24}$/.test(realPostId) && rawParam.endsWith(realPostId)) {
    slugPrefix = rawParam.substring(0, rawParam.length - realPostId.length).replace(/-+$/, '');
  }

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

  if (backendPost && isPublishedPost(backendPost)) {
    const post = api.transformContent(backendPost);
    const blocks = backendPost.blocks || [];
    return { post, blocks };
  }

  // Tier 4: Search in category posts if categorySlug is given
  if (categorySlug) {
    try {
      const catRes = await api.getContent({ category_slug: categorySlug, limit: 50 }).catch(() => null);
      const items = catRes?.items || [];
      const found = items.find((item: any) => {
        if (!isPublishedPost(item)) return false;
        const postSlug = getPostSlug(item);
        const titleSlug = slugify(item.title || '');
        return (
          item.id === realPostId ||
          item.id === rawParam ||
          postSlug === rawParam ||
          titleSlug === rawParam ||
          (slugPrefix && titleSlug === slugPrefix) ||
          (slugPrefix && titleSlug.includes(slugPrefix)) ||
          (slugPrefix && slugPrefix.includes(titleSlug))
        );
      });
      if (found) {
        const post = api.transformContent(found);
        return { post, blocks: found.blocks || [] };
      }
    } catch {}
  }

  // Tier 5: Fallback search in getAllPosts list
  try {
    const allPosts = await api.getAllPosts(200).catch(() => []);
    const found = allPosts.find((p: any) => {
      const postSlug = getPostSlug(p);
      const titleSlug = slugify(p.title || '');
      return (
        p.id === realPostId ||
        p.id === rawParam ||
        postSlug === rawParam ||
        titleSlug === rawParam ||
        rawParam.endsWith(p.id) ||
        (slugPrefix && titleSlug === slugPrefix) ||
        (slugPrefix && titleSlug.includes(slugPrefix)) ||
        (slugPrefix && slugPrefix.includes(titleSlug))
      );
    });
    if (found) {
      return { 
        post: found, 
        blocks: found.rawBlocks || found.blocks || [] 
      };
    }
  } catch {}

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
    const result = await findPostByMultiTier(rawParam, categorySlug);
    if (!result || !result.post) return { title: 'Post Not Found | Chalky' };

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
      title: 'Post Not Found | Chalky',
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
  const result = await findPostByMultiTier(rawParam, categorySlug);

  if (!result || !result.post) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
        <div className="max-w-4xl mx-auto px-4 py-28 text-center flex-1 flex flex-col justify-center items-center">
          <div className="w-16 h-16 bg-[#7A1F5C]/10 text-[#7A1F5C] rounded-2xl flex items-center justify-center mb-6">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 mb-4">
            Article Unavailable
          </h1>
          <p className="text-slate-600 max-w-md mb-8 leading-relaxed text-sm sm:text-base">
            The article you are trying to view might have been updated or moved. Discover our latest publications and insights below.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/insights"
              className="px-6 py-3 bg-[#7A1F5C] hover:bg-[#601849] text-white font-medium rounded-xl transition-all shadow-md text-sm"
            >
              Explore Insights Center
            </Link>
            <Link
              href="/"
              className="px-6 py-3 bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 font-medium rounded-xl transition-all text-sm shadow-sm"
            >
              Return Home
            </Link>
          </div>
        </div>
        <CTASection
          title="Explore Chalky Insights"
          subtitle="Stay updated with our latest industry frameworks and recruitment intelligence."
          primaryLabel="View All Insights"
          primaryHref="/insights"
          secondaryLabel="Contact Us"
          secondaryHref="/contact"
        />
      </div>
    );
  }

  const { post, blocks } = result;
  const realPostId = post.id;

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
