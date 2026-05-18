import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ChevronLeft, ArrowRight } from 'lucide-react';
import CTASection from '@/components/CTASection';
import PageHero from '@/components/PageHero';
import EngagementHub from '@/sections/insights/EngagementHub';
import api from '@/services/api';
import { Suspense } from 'react';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://mediahub-backend-docker-hgh6hzgacraqbhb2.southindia-01.azurewebsites.net";

// Next.js 16 high-performance Component Caching helpers
async function getCachedPost(postId: string) {
  "use cache";
  return await api.getContentById(postId);
}

async function getCachedSectionPosts(sectionSlug: string) {
  "use cache";
  return await api.getSectionPosts(sectionSlug, 4);
}

type Props = {
  params: Promise<{ categorySlug: string; postId: string }>;
};

export async function generateStaticParams() {
  try {
    const posts = await api.getAllPosts();
    return posts.map((post: any) => ({
      categorySlug: post.category?.slug || 'insights-knowledge',
      postId: post.id,
    }));
  } catch (err) {
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { postId } = await params;
  try {
    const response = await getCachedPost(postId);
    const backendPost = response?.item;
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

async function InsightDetailPageContent({ params }: { params: Promise<{ categorySlug: string; postId: string }> }) {
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
      const sectionPosts = await getCachedSectionPosts(backendPost.section_slug || 'insights-knowledge');
      relatedPosts = sectionPosts.filter((p: any) => p.id !== postId).slice(0, 3);
    }
  } catch (err) {
    console.error(err);
  }

  if (!post) {
    notFound();
  }

  // Render function for different backend block types
  const renderBlock = (block: any, index: number) => {
    switch (block.type) {
      case 'heading':
        return (
          <h2 key={index} className="text-2xl md:text-3xl font-extrabold text-[#1A1A1A] mt-10 mb-4 leading-tight">
            {block.data.value}
          </h2>
        );

      case 'subheading':
        return (
          <h3 key={index} className="text-xl md:text-2xl font-bold text-[#7A1F5C] mt-8 mb-3">
            {block.data.value}
          </h3>
        );

      case 'text':
        return (
          <p key={index} className="text-gray-600 leading-relaxed text-base md:text-lg mb-6 whitespace-pre-wrap">
            {block.data.value}
          </p>
        );

      case 'quote':
      case 'pull-quote':
        return (
          <blockquote key={index} className="relative pl-6 border-l-4 border-[#7A1F5C] bg-[#FAF8F5] p-6 rounded-r-2xl my-8 italic text-lg text-gray-700 leading-relaxed">
            "{block.data.value}"
            {block.data.author && (
              <cite className="block text-xs font-bold uppercase tracking-wider text-gray-400 not-italic mt-3">
                — {block.data.author}
              </cite>
            )}
          </blockquote>
        );

      case 'bullet-list':
      case 'list':
        return (
          <ul key={index} className="space-y-2.5 my-6 pl-4 list-disc list-inside text-gray-600 text-base md:text-lg leading-relaxed">
            {block.data.items?.map((item: string, i: number) => (
              <li key={i} className="pl-1">
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        );

      case 'numbered-list':
        return (
          <ol key={index} className="space-y-2.5 my-6 pl-4 list-decimal list-inside text-gray-600 text-base md:text-lg leading-relaxed">
            {block.data.items?.map((item: string, i: number) => (
              <li key={i} className="pl-1">
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ol>
        );

      case 'image':
        return (
          <figure key={index} className="my-10 space-y-3">
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-[#EFE7DD] shadow-lg bg-gray-50">
              <Image
                src={block.data.file_id ? `${API_BASE_URL}/api/images/${block.data.file_id}` : block.data.url}
                alt={block.data.alt || block.data.caption || 'Publication visual'}
                fill
                unoptimized
                className="object-cover"
              />
            </div>
            {block.data.caption && (
              <figcaption className="text-center text-xs text-gray-400 italic">
                {block.data.caption}
              </figcaption>
            )}
          </figure>
        );

      case 'document':
        return (
          <div key={index} className="my-8">
            <a
              href={block.data.file_id ? `${API_BASE_URL}/api/documents/${block.data.file_id}` : block.data.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="bg-[#FAF8F5] rounded-2xl p-6 border border-[#EFE7DD] hover:border-[#7A1F5C] transition-all hover:shadow-md flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="bg-[#7A1F5C] rounded-xl p-3 text-white flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-[#1A1A1A] group-hover:text-[#7A1F5C] transition-colors">
                      {block.data.title || 'Download Intelligence Brief'}
                    </h4>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mt-0.5">PDF DOCUMENT</p>
                  </div>
                </div>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </a>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* ── Page Hero: Consistent, Stunning diagonal banner matching standard pages ── */}
      <PageHero
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Insights', href: '/insights' },
          { label: post.category?.name || 'Category', href: `/insights/${categorySlug}` },
          { label: 'Publication Details' }
        ]}
        badge="Chalky Thought Leadership"
        title="Research & Insights"
        titleHighlight={post.category?.name || 'Featured Publication'}
        subtitle="Exploring global B2B recruitment audits, technology frameworks, and strategic organizational design."
        imageSrc="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200"
        imageAlt="Chalky Research Banner"
        ctaLabel="Explore Publications"
        ctaHref="#publication"
        secondaryLabel="Insights Center"
        secondaryHref="/insights"
      />

      {/* ── Main Layout Body ── */}
      <div id="publication" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* ════ LEFT COLUMN: Main Post Text ════ */}
          <article className="lg:w-2/3 w-full">
            
            {/* dynamic Editorial Main Heading */}
            <div className="mb-10">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#7A1F5C] bg-[#7A1F5C]/10 px-3 py-1.5 rounded-md mb-6 inline-block">
                {post.category?.name || 'Publication'}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1A1A1A] leading-tight tracking-tight mt-2 mb-6">
                {post.title}
              </h1>
              <p className="text-gray-500 italic text-lg leading-relaxed pl-4 border-l-4 border-[#7A1F5C]/40">
                {post.excerpt || "Expert perspective on strategic developments, hiring frameworks, and corporate transitions."}
              </p>
            </div>

            {/* Coverage Graphic */}
            {post.image && (
              <div className="relative aspect-[16/10] w-full rounded-[2rem] overflow-hidden border border-[#EFE7DD] mb-12 shadow-xl bg-gray-50">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  unoptimized
                  className="object-cover"
                  priority
                />
              </div>
            )}

            {/* High-Fidelity Rich Content Renderer */}
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-12">
              {blocks.length > 0 ? (
                blocks.map((block, idx) => renderBlock(block, idx))
              ) : (
                <div 
                  className="prose prose-lg prose-plum max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }}
                />
              )}
            </div>

            {/* Interactive Engagement Hub */}
            <EngagementHub 
              postId={postId}
              postTitle={post.title}
              readTime={post.readTime || 5}
              date={post.date || "May 18, 2026"}
              categoryName={post.category?.name || "Insights"}
              authorName={post.author || "Chalky Executive"}
            />

          </article>

          {/* ════ RIGHT COLUMN: Sticky Sidebar ════ */}
          <aside className="lg:w-1/3 w-full lg:sticky lg:top-24 space-y-12">
            
            {/* Author Profile Card */}
            <div className="bg-[#FAF8F5] rounded-3xl p-8 border border-[#EFE7DD]">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#7A1F5C] mb-6 block">
                Lead Contributor
              </span>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl overflow-hidden relative border-2 border-white shadow-md bg-gradient-to-br from-[#7A1F5C] to-[#4A1238] flex items-center justify-center text-white font-extrabold text-2xl uppercase tracking-tighter">
                  {post.author ? post.author.charAt(0) : 'C'}
                </div>
                <div>
                  <p className="font-extrabold text-[#1A1A1A] text-base">{post.author || 'Chalky Executive'}</p>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mt-0.5">Managing Consultant</p>
                </div>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed italic border-l-2 border-[#7A1F5C]/20 pl-3 mb-6">
                "We synthesize global talent parameters, providing key recruitment audits and corporate placement advice to accelerate enterprise transitions."
              </p>

              <div className="flex items-center gap-2.5 pt-2">
                <span className="text-[10px] font-black uppercase tracking-wider text-gray-400">CONNECT:</span>
                <a href="https://www.linkedin.com/company/chalky-infotech-recruitment/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-[#EFE7DD] flex items-center justify-center text-gray-500 hover:bg-[#7A1F5C] hover:text-white hover:border-[#7A1F5C] transition-all">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="https://www.facebook.com/people/Chalkyinfotech/61584513646137/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-[#EFE7DD] flex items-center justify-center text-gray-500 hover:bg-[#7A1F5C] hover:text-white hover:border-[#7A1F5C] transition-all">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
              </div>
            </div>

            {/* Related Posts Card */}
            {relatedPosts.length > 0 && (
              <div className="bg-white rounded-3xl p-8 border border-[#EFE7DD] shadow-sm">
                <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#7A1F5C] mb-8">
                  Related Publications
                </h4>
                <div className="space-y-6">
                  {relatedPosts.map((related: any) => (
                    <Link 
                      key={related.id} 
                      href={`/insights/${related.category?.slug}/${related.id}`}
                      className="group flex gap-4 items-center"
                    >
                      <div className="relative w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 bg-[#FAF8F5] border border-[#EFE7DD]">
                        {related.image && (
                          <Image
                            src={related.image}
                            alt={related.title}
                            fill
                            unoptimized
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="font-extrabold text-sm text-[#1A1A1A] group-hover:text-[#7A1F5C] transition-colors leading-snug line-clamp-2">
                          {related.title}
                        </h5>
                        <p className="text-[9px] text-gray-400 mt-1 uppercase font-extrabold tracking-widest">{related.date}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Follow Us Sidebar Card */}
            <div className="bg-[#FAF8F5] rounded-3xl p-8 border border-[#EFE7DD] text-left">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#7A1F5C] mb-6 block">
                Follow Us
              </span>
              <div className="flex gap-6 text-gray-500 font-extrabold text-xs uppercase tracking-wider">
                <a href="https://www.linkedin.com/company/chalky-infotech-recruitment/" target="_blank" rel="noopener noreferrer" className="hover:text-[#7A1F5C] transition-colors">LinkedIn</a>
                <a href="https://www.instagram.com/chalkyinfotech_ltd/" target="_blank" rel="noopener noreferrer" className="hover:text-[#7A1F5C] transition-colors">Instagram</a>
                <a href="https://www.facebook.com/people/Chalkyinfotech/61584513646137/" target="_blank" rel="noopener noreferrer" className="hover:text-[#7A1F5C] transition-colors">Facebook</a>
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

export default function InsightDetailPage({ params }: Props) {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAF8F5]">
        <div className="w-12 h-12 rounded-full border-4 border-[#7A1F5C]/15 border-t-[#7A1F5C] animate-spin mb-4"></div>
        <p className="text-xs uppercase tracking-[0.2em] font-bold text-[#7A1F5C]/60">Retrieving article publication...</p>
      </div>
    }>
      <InsightDetailPageContent params={params} />
    </Suspense>
  );
}
