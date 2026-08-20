'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ChevronLeft, ArrowRight, BookOpen, Download, ExternalLink, FileText, Maximize2, Share2 } from 'lucide-react';
import CTASection from '@/components/CTASection';
import PageHero from '@/components/PageHero';
import EngagementHub from '@/sections/insights/EngagementHub';
import { PdfReaderModal } from '@/components/PdfReaderModal';
import postHeroImg from '@/assets/Insights/posthero.png';

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  'https://mediahub-backend-docker-hgh6hzgacraqbhb2.southindia-01.azurewebsites.net';

interface InsightDetailClientProps {
  post: any;
  blocks: any[];
  relatedPosts: any[];
  categorySlug: string;
  postId: string;
}

export default function InsightDetailClient({
  post,
  blocks,
  relatedPosts,
  categorySlug,
  postId,
}: InsightDetailClientProps) {
  const [readerModal, setReaderModal] = useState<{
    isOpen: boolean;
    title: string;
    url: string;
  }>({
    isOpen: false,
    title: '',
    url: '',
  });

  // Find if there's any document block in the post
  const docBlock = (blocks || []).find((b: any) => b.type === 'document');
  const mainDocUrl = docBlock?.data
    ? docBlock.data.file_id
      ? `${API_BASE_URL}/api/documents/${docBlock.data.file_id}`
      : docBlock.data.url
    : null;

  const isPdfCategory = [
    'white-paper',
    'white-papers',
    'whitepaper',
    'whitepapers',
    'case-studies',
    'case-study',
    'case_studies',
    'case_study',
    'newsletter',
    'newsletters',
    'reports',
    'brochures',
  ].includes(categorySlug.toLowerCase());

  const handleOpenPdf = (url: string, title?: string) => {
    setReaderModal({
      isOpen: true,
      title: title || post.title || 'PDF Document',
      url: url,
    });
  };

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
                {block.data.author}
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
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
        const docUrl = block.data.file_id
          ? `${API_BASE_URL}/api/documents/${block.data.file_id}`
          : block.data.url;
        const docTitle = block.data.title || 'Download Intelligence Brief';

        return (
          <div key={index} className="my-10">
            <div className="bg-[#FAF5FF] rounded-3xl p-6 sm:p-8 border border-[#7A1F5C]/20 shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-14 h-14 rounded-2xl bg-[#7A1F5C] text-white flex items-center justify-center shrink-0 shadow-md">
                  <FileText size={26} />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#7A1F5C] bg-[#7A1F5C]/10 px-2.5 py-1 rounded-md mb-1.5 inline-block">
                    PDF Document Attachment
                  </span>
                  <h4 className="font-extrabold text-base sm:text-lg text-[#1A1A1A] truncate">
                    {docTitle}
                  </h4>
                  <p className="text-xs text-gray-500 font-medium mt-0.5">
                    High-resolution PDF brief ready for reading or download.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto shrink-0">
                <button
                  onClick={() => handleOpenPdf(docUrl, docTitle)}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#7A1F5C] hover:bg-[#9D2877] text-white text-xs font-extrabold uppercase tracking-wider transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  <BookOpen size={16} />
                  Open PDF Reader
                </button>

                <Link
                  href={`/insights/${categorySlug}/${postId}/reader`}
                  className="inline-flex items-center justify-center p-3 rounded-xl bg-white border border-[#EFE7DD] hover:border-[#7A1F5C] text-[#1A1A1A] hover:text-[#7A1F5C] transition-all shadow-sm"
                  title="Fullscreen Reader Page"
                >
                  <Maximize2 size={16} />
                </Link>

                <a
                  href={docUrl}
                  download
                  className="inline-flex items-center justify-center p-3 rounded-xl bg-white border border-[#EFE7DD] hover:border-[#7A1F5C] text-[#1A1A1A] hover:text-[#7A1F5C] transition-all shadow-sm"
                  title="Download PDF"
                >
                  <Download size={16} />
                </a>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Page Hero */}
      <PageHero
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Insights', href: '/insights' },
          { label: post.category?.name || 'Category', href: `/insights/${categorySlug}` },
          { label: 'Publication Details' },
        ]}
        badge="Chalky Thought Leadership"
        title="Research & Insights"
        titleHighlight={post.category?.name || 'Featured Publication'}
        subtitle="Exploring global B2B recruitment audits, technology frameworks, and strategic organizational design."
        imageSrc={postHeroImg}
        imageAlt="Chalky Research Banner"
        ctaLabel="Explore Publications"
        ctaHref="#publication"
        secondaryLabel="Insights Center"
        secondaryHref="/insights"
      />

      {/* Main Content Body */}
      <div id="publication" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* LEFT COLUMN: Main Post Content */}
          <article className="lg:w-2/3 w-full">
            {/* Header / Meta */}
            <div className="mb-10">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#7A1F5C] bg-[#7A1F5C]/10 px-3 py-1.5 rounded-md">
                  {post.category?.name || 'Publication'}
                </span>

                {mainDocUrl && (
                  <button
                    onClick={() => handleOpenPdf(mainDocUrl, post.title)}
                    className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-[#7A1F5C] bg-[#FAF5FF] border border-[#7A1F5C]/30 px-3 py-1.5 rounded-md hover:bg-[#7A1F5C] hover:text-white transition-all shadow-sm"
                  >
                    <BookOpen size={14} /> PDF Reader Available
                  </button>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1A1A1A] leading-tight tracking-tight mt-2 mb-6">
                {post.title}
              </h1>
              <p className="text-gray-500 italic text-lg leading-relaxed pl-4 border-l-4 border-[#7A1F5C]/40">
                {post.excerpt || 'Expert perspective on strategic developments, hiring frameworks, and corporate transitions.'}
              </p>
            </div>

            {/* Quick Interactive PDF Banner if doc exists */}
            {mainDocUrl && (
              <div className="mb-10 p-5 rounded-2xl bg-[#FAF5FF] border border-[#7A1F5C]/20 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#7A1F5C] text-white">
                    <FileText size={20} />
                  </div>
                  <div>
                    <h5 className="text-xs sm:text-sm font-extrabold text-[#1A1A1A]">
                      Full Document PDF Included
                    </h5>
                    <p className="text-[11px] text-gray-500 font-medium">
                      View or download the full document directly inside our PDF reader.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleOpenPdf(mainDocUrl, post.title)}
                    className="px-4 py-2 rounded-xl bg-[#7A1F5C] hover:bg-[#9D2877] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md"
                  >
                    Read PDF
                  </button>
                  <Link
                    href={`/insights/${categorySlug}/${postId}/reader`}
                    className="p-2 rounded-xl bg-white border border-[#EFE7DD] text-[#1A1A1A] hover:text-[#7A1F5C] transition-all"
                    title="Fullscreen Mode"
                  >
                    <Maximize2 size={16} />
                  </Link>
                </div>
              </div>
            )}

            {/* Featured Image */}
            {post.image && (
              <div className="relative aspect-[16/10] w-full rounded-[2rem] overflow-hidden border border-[#EFE7DD] mb-12 shadow-xl bg-gray-50">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  unoptimized
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            )}

            {/* Content Renderer */}
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

            {/* Engagement Hub */}
            <EngagementHub
              postId={postId}
              postTitle={post.title}
              readTime={post.readTime || 5}
              date={post.date || 'May 18, 2026'}
              categoryName={post.category?.name || 'Insights'}
              authorName={post.author || 'Chalky Executive'}
            />
          </article>

          {/* RIGHT COLUMN: Sidebar */}
          <aside className="lg:w-1/3 w-full lg:sticky lg:top-24 space-y-12">
            {/* PDF Reader Quick Access Sidebar Widget if mainDocUrl exists */}
            {mainDocUrl && (
              <div className="bg-[#FAF5FF] rounded-3xl p-8 border border-[#7A1F5C]/25 text-left shadow-md">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#7A1F5C] mb-3 block">
                  Document Hub
                </span>
                <h4 className="text-base font-extrabold text-[#1A1A1A] mb-2">
                  Interactive PDF Brief
                </h4>
                <p className="text-xs text-gray-600 mb-6 leading-relaxed">
                  Open our built-in PDF Reader to preview or download the publication PDF document.
                </p>
                <div className="flex flex-col gap-2.5">
                  <button
                    onClick={() => handleOpenPdf(mainDocUrl, post.title)}
                    className="w-full py-3 px-4 rounded-xl bg-[#7A1F5C] hover:bg-[#9D2877] text-white font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md"
                  >
                    <BookOpen size={16} /> Open PDF Reader
                  </button>
                  <Link
                    href={`/insights/${categorySlug}/${postId}/reader`}
                    className="w-full py-3 px-4 rounded-xl bg-white border border-[#EFE7DD] hover:border-[#7A1F5C] text-[#1A1A1A] hover:text-[#7A1F5C] font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 text-center"
                  >
                    <Maximize2 size={16} /> Fullscreen Reader
                  </Link>
                </div>
              </div>
            )}

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
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                </a>
                <a href="https://www.facebook.com/people/Chalkyinfotech/61584513646137/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-[#EFE7DD] flex items-center justify-center text-gray-500 hover:bg-[#7A1F5C] hover:text-white hover:border-[#7A1F5C] transition-all">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                </a>
              </div>
            </div>

            {/* Related Posts */}
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
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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

      {/* PDF Reader Modal */}
      <PdfReaderModal
        isOpen={readerModal.isOpen}
        onClose={() => setReaderModal({ ...readerModal, isOpen: false })}
        title={readerModal.title}
        pdfUrl={readerModal.url}
        categorySlug={categorySlug}
        postId={postId}
      />
    </div>
  );
}
