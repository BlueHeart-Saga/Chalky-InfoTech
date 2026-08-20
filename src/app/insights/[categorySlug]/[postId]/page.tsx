import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Suspense } from 'react';
import { unstable_cache } from 'next/cache';
import api from '@/services/api';
import { buildPageMetadataWithImage } from '@/lib/seo-images';
import InsightDetailClient from '@/sections/insights/InsightDetailClient';

const getCachedPost = (postId: string) =>
  unstable_cache(
    async () => await api.getContentById(postId),
    ['post-detail', postId],
    { revalidate: 60, tags: [`post-${postId}`] }
  )();

const getCachedSectionPosts = (sectionSlug: string) =>
  unstable_cache(
    async () => await api.getSectionPosts(sectionSlug, 4),
    ['section-posts', sectionSlug],
    { revalidate: 60, tags: [`section-${sectionSlug}`] }
  )();

type Props = {
  params: Promise<{ categorySlug: string; postId: string }>;
};

export async function generateStaticParams() {
  try {
    const posts = await api.getAllPosts();
    return posts
      .filter((post: any) => post.category?.slug)
      .map((post: any) => ({
        categorySlug: post.category.slug,
        postId: post.id,
      }));
  } catch (err) {
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categorySlug, postId } = await params;
  try {
    const response = await getCachedPost(postId);
    const backendPost = response?.item;
    if (!backendPost) return { title: 'Post Not Found' };

    const post = api.transformContent(backendPost);

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
      url: `/insights/${categorySlug}/${postId}`,
      path: post.image || '/og-image.png',
      alt: post.title,
    });
  } catch (err) {
    return {
      title: 'Post Not Found',
      alternates: {
        canonical: `/insights/${categorySlug}/${postId}`,
      },
    };
  }
}

async function InsightDetailPageContent({
  params,
}: {
  params: Promise<{ categorySlug: string; postId: string }>;
}) {
  const { categorySlug, postId } = await params;
  let post: any = null;
  let relatedPosts: any[] = [];
  let blocks: any[] = [];

  try {
    const response = await getCachedPost(postId);
    const backendPost = response?.item;
    if (backendPost) {
      post = api.transformContent(backendPost);
      blocks = backendPost.blocks || [];

      // Fetch some related posts from the same section
      const sectionPosts = await getCachedSectionPosts(backendPost.section_slug || 'insights');
      relatedPosts = sectionPosts.filter((p: any) => p.id !== postId).slice(0, 3);
    }
  } catch (err) {
    console.error(err);
  }

  if (!post) {
    notFound();
  }

  return (
    <InsightDetailClient
      post={post}
      blocks={blocks}
      relatedPosts={relatedPosts}
      categorySlug={categorySlug}
      postId={postId}
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
