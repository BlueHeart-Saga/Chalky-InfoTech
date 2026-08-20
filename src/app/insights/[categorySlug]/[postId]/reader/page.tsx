'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, BookOpen, AlertCircle, X, Download, Share2, ExternalLink, Check, FileText } from 'lucide-react';
import api from '@/services/api';

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  'https://mediahub-backend-docker-hgh6hzgacraqbhb2.southindia-01.azurewebsites.net';

interface ReaderPageProps {
  params: Promise<{
    categorySlug: string;
    postId: string;
  }>;
}

export default function InsightsDocumentReaderPage({ params }: ReaderPageProps) {
  const resolvedParams = React.use(params);
  const categorySlug = resolvedParams.categorySlug;
  const postId = resolvedParams.postId;

  const [post, setPost] = useState<any | null>(null);
  const [docUrl, setDocUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    async function loadPostDoc() {
      try {
        setLoading(true);
        const raw = await api.getContentById(postId);
        const data = raw?.item ?? raw;
        if (data && data.id) {
          const transformed = api.transformContent(data);
          setPost(transformed);
          
          if (transformed.rawBlocks && Array.isArray(transformed.rawBlocks)) {
            const docBlock = transformed.rawBlocks.find((b: any) => b.type === 'document');
            if (docBlock?.data) {
              const url = docBlock.data.file_id
                ? `${API_BASE_URL}/api/documents/${docBlock.data.file_id}`
                : docBlock.data.url || null;
              setDocUrl(url);
            }
          }
        }
      } catch (err) {
        console.error('Failed to load publication for PDF reader:', err);
      } finally {
        setLoading(false);
      }
    }
    loadPostDoc();
  }, [postId]);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined' && docUrl) {
      const fullUrl = docUrl.startsWith('http')
        ? docUrl
        : `${window.location.origin}${docUrl}`;
      navigator.clipboard.writeText(fullUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <main className="fixed inset-0 z-50 bg-[#0D0D0D] flex flex-col text-white">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#171717] border-b border-white/10 shadow-lg">
        <div className="flex items-center gap-3 min-w-0">
          <Link
            href={`/insights/${categorySlug}/${postId}`}
            className="p-2 rounded-xl bg-white/5 hover:bg-[#7A1F5C] text-white/70 hover:text-white transition-all border border-white/10"
            title="Back to Article"
          >
            <ArrowLeft size={18} />
          </Link>
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-[#7A1F5C] text-white flex items-center justify-center shrink-0">
              <FileText size={18} />
            </div>
            <div className="min-w-0">
              <span className="text-xs md:text-sm font-extrabold text-white block truncate max-w-xs sm:max-w-md md:max-w-xl">
                {post ? post.title : 'Loading document...'}
              </span>
              <span className="text-[10px] text-purple-300 font-mono uppercase tracking-widest block">
                Fullscreen PDF Reader • Chalky Insights
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {docUrl && (
            <>
              <a
                href={docUrl}
                download
                className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 text-white/80 hover:text-white rounded-lg transition-colors"
                title="Download PDF"
              >
                <Download size={16} />
              </a>

              <button
                onClick={handleCopyLink}
                className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 text-white/80 hover:text-white rounded-lg transition-colors relative"
                title="Copy Link"
              >
                {copied ? <Check size={16} className="text-emerald-400" /> : <Share2 size={16} />}
                {copied && (
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[#7A1F5C] text-[10px] font-bold px-2 py-0.5 rounded text-white shadow-lg whitespace-nowrap">
                    Copied!
                  </span>
                )}
              </button>

              <a
                href={docUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 text-white/80 hover:text-white rounded-lg transition-colors"
                title="Open in new tab"
              >
                <ExternalLink size={16} />
              </a>

              <span className="text-white/20 px-0.5">|</span>
            </>
          )}

          <Link
            href={`/insights/${categorySlug}/${postId}`}
            className="p-2 rounded-xl bg-[#7A1F5C]/30 hover:bg-[#7A1F5C] border border-[#7A1F5C]/50 text-white transition-all"
            title="Close Reader"
          >
            <X size={18} />
          </Link>
        </div>
      </div>

      {/* Reader Body */}
      <div className="flex-1 bg-[#090909] p-3 sm:p-4">
        {loading ? (
          <div className="w-full h-full flex flex-col items-center justify-center text-gray-400">
            <div className="w-8 h-8 rounded-full border-2 border-white/10 border-t-[#7A1F5C] animate-spin mb-4" />
            <span className="text-xs font-mono uppercase tracking-widest text-purple-300">Opening PDF Document...</span>
          </div>
        ) : !docUrl ? (
          <div className="w-full h-full flex flex-col items-center justify-center border border-dashed border-white/10 rounded-2xl max-w-md mx-auto my-auto p-8 text-center bg-[#141414]">
            <AlertCircle className="text-amber-500 mb-4" size={40} />
            <h3 className="text-base font-extrabold text-white mb-2">No Document Attachment</h3>
            <p className="text-xs text-gray-400 mb-6 leading-relaxed">
              This publication does not have a downloadable PDF file attachment.
            </p>
            <Link
              href={`/insights/${categorySlug}/${postId}`}
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-xs font-bold tracking-wider uppercase bg-[#7A1F5C] hover:bg-[#9D2877] text-white transition-all shadow-lg"
            >
              Return to Publication
            </Link>
          </div>
        ) : (
          <iframe
            src={`${docUrl}#toolbar=0`}
            className="w-full h-full border border-white/10 rounded-xl bg-black"
            title="Fullscreen PDF Document Viewer"
          />
        )}
      </div>
    </main>
  );
}
