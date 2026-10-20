'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { BookOpen, Download, Share2, ExternalLink, X, Check, FileText } from 'lucide-react';

interface PdfReaderModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  pdfUrl: string;
  categorySlug?: string;
  postId?: string;
}

export function PdfReaderModal({
  isOpen,
  onClose,
  title,
  pdfUrl,
  categorySlug,
  postId,
}: PdfReaderModalProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      const fullUrl = pdfUrl.startsWith('http')
        ? pdfUrl
        : `${window.location.origin}${pdfUrl}`;
      navigator.clipboard.writeText(fullUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-md p-3 sm:p-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-5xl h-[85vh] md:h-[90vh] bg-[#1A1A1A] border border-[#7A1F5C]/30 rounded-2xl flex flex-col overflow-hidden shadow-[0_0_80px_rgba(122,31,92,0.3)]"
          >
            {/* Header Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-4 md:px-6 py-3.5 bg-[#121212] border-b border-white/10 text-white">
              <div className="flex items-center gap-3 min-w-0 flex-1">
                <div className="w-8 h-8 rounded-lg bg-[#7A1F5C] text-white flex items-center justify-center shrink-0 shadow-md">
                  <FileText size={18} />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs md:text-sm font-extrabold text-white truncate max-w-xs sm:max-w-md md:max-w-xl">
                    {title || 'Document Publication'}
                  </h4>
                  <span className="text-[10px] font-mono text-purple-300 uppercase tracking-widest block">
                    Interactive PDF Reader
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {categorySlug && postId && (
                  <Link
                    href={`/insights/${categorySlug}/${postId}`}
                    className="hidden sm:inline-flex items-center px-3 py-1.5 border border-[#7A1F5C]/60 hover:border-[#7A1F5C] bg-[#7A1F5C]/20 hover:bg-[#7A1F5C] text-purple-200 hover:text-white transition-all text-xs font-bold uppercase tracking-wider rounded-lg"
                  >
                    Article
                  </Link>
                )}

                <a
                  href={pdfUrl}
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
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 text-white/80 hover:text-white rounded-lg transition-colors"
                  title="Open in new tab"
                >
                  <ExternalLink size={16} />
                </a>

                <span className="text-white/20 px-0.5">|</span>

                <button
                  onClick={onClose}
                  className="p-2 bg-[#7A1F5C]/30 hover:bg-[#7A1F5C] border border-[#7A1F5C]/50 text-white rounded-lg transition-all"
                  title="Close Reader"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Viewer Body */}
            <div className="flex-1 bg-[#0D0D0D] relative">
              <iframe
                src={`${pdfUrl}#toolbar=0`}
                className="w-full h-full border-0 bg-[#0D0D0D]"
                title={title || 'PDF Document Viewer'}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
