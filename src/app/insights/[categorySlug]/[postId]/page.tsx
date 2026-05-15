import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ChevronLeft, Share2, ArrowRight } from 'lucide-react';
import CTASection from '@/components/CTASection';
import api from '@/services/api';

type Props = {
  params: Promise<{ categorySlug: string; postId: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { postId } = await params;
  try {
    const backendPost = await api.getContentById(postId);
    if (!backendPost) return { title: 'Post Not Found' };
    
    const post = api.transformContent(backendPost);

    return {
      title: `${post.title} | Chalky Infotech Insights`,
      description: post.excerpt,
      openGraph: {
        title: post.title,
        description: post.excerpt,
        images: post.image ? [post.image] : [],
      },
    };
  } catch (err) {
    return { title: 'Post Not Found' };
  }
}

export default async function InsightDetailPage({ params }: Props) {
  const { categorySlug, postId } = await params;
  
  let post: any = null;
  let relatedPosts: any[] = [];
  
  try {
    const backendPost = await api.getContentById(postId);
    if (backendPost) {
      post = api.transformContent(backendPost);
      
      // Fetch some related posts from the same category
      relatedPosts = await api.getSectionPosts(backendPost.section_slug || 'insights-knowledge', 4);
      relatedPosts = relatedPosts.filter((p: any) => p.id !== postId).slice(0, 3);
    }
  } catch (err) {
    console.error(err);
  }

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Article Header */}
      <div className="relative h-[60vh] min-h-[400px] w-full">
        <Image
          src={post.image || 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200'}
          alt={post.title}
          fill
          unoptimized
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <Link 
              href={`/insights/${categorySlug}`} 
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white/80 hover:text-white transition-colors mb-8"
            >
              <ChevronLeft size={16} /> Back to {post.category?.name || 'Category'}
            </Link>
            <div className="flex justify-center gap-4 text-xs font-bold uppercase tracking-widest mb-6">
              <span className="px-4 py-1.5 rounded-full bg-[#7A1F5C]">{post.category?.name || 'Featured'}</span>
              <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
              <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime} min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Main Content */}
          <article className="lg:w-2/3">
            <div 
              className="prose prose-lg prose-plum max-w-none prose-img:rounded-3xl prose-img:shadow-2xl"
              dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }}
            />
          </article>

          {/* Sidebar */}
          <aside className="lg:w-1/3">
            <div className="sticky top-24 space-y-12">
              {/* Author */}
              <div className="bg-[#F8F5F0] rounded-3xl p-8 border border-[#EFE7DD]">
                <h4 className="text-sm font-bold uppercase tracking-widest text-[#7A1F5C] mb-6">About the Author</h4>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden relative border-2 border-white shadow-sm bg-[#1A1A1A] flex items-center justify-center text-white font-bold text-xl">
                    {post.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-[#1A1A1A]">{post.author}</p>
                    <p className="text-xs text-gray-500">Chalky Infotech Contributor</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed italic">
                  Sharing insights on recruitment trends, industry transformations, and the future of work.
                </p>
              </div>

              {/* Related */}
              {relatedPosts.length > 0 && (
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-[#7A1F5C] mb-6">Related Posts</h4>
                  <div className="space-y-6">
                    {relatedPosts.map((related: any) => (
                      <Link 
                        key={related.id} 
                        href={`/insights/${related.category?.slug}/${related.id}`}
                        className="group flex gap-4 items-center"
                      >
                        <div className="relative w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 bg-gray-100">
                          {related.image && (
                            <Image src={related.image} alt={related.title} fill unoptimized className="object-cover group-hover:scale-110 transition-transform duration-500" />
                          )}
                        </div>
                        <div>
                          <h5 className="font-bold text-sm text-[#1A1A1A] group-hover:text-[#7A1F5C] transition-colors leading-snug line-clamp-2">
                            {related.title}
                          </h5>
                          <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-wider">{related.date}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Share */}
              <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-[#1A1A1A]">Share Post:</span>
                <div className="flex gap-2">
                  {[Share2, Share2, Share2].map((Icon, i) => (
                    <button key={i} className="w-10 h-10 rounded-full bg-white border border-[#EFE7DD] flex items-center justify-center text-[#7A1F5C] hover:bg-[#7A1F5C] hover:text-white transition-all">
                      <Icon size={16} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <section id="cta">
        <CTASection 
          title="Stay Ahead of the Curve"
          subtitle="Get our latest insights and sector trends delivered to your inbox every month."
          primaryLabel="Subscribe Now"
          primaryHref="/contact"
          secondaryLabel="View More Insights"
          secondaryHref="/insights"
        />
      </section>
    </div>
  );
}
