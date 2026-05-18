'use client';

import { useState, useEffect } from 'react';
import { Heart, Share2, Link2, Check, Eye, Clock, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface EngagementHubProps {
  postId: string;
  postTitle: string;
  readTime: number;
  date: string;
  categoryName: string;
  authorName: string;
}

export default function EngagementHub({
  postId,
  postTitle,
  readTime,
  date,
  categoryName,
  authorName,
}: EngagementHubProps) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(12);
  const [viewsCount, setViewsCount] = useState(148);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copied, setCopied] = useState(false);

  // Initialize unique mock counters based on postId to look extremely professional
  useEffect(() => {
    // Generate simple deterministic hashes for stable mock counters
    let hash = 0;
    for (let i = 0; i < postId.length; i++) {
      hash = postId.charCodeAt(i) + ((hash << 5) - hash);
    }
    const seedLikes = Math.abs(hash % 35) + 12;
    const seedViews = Math.abs(hash % 450) + 180;
    
    // Check local storage for likes
    const hasLiked = localStorage.getItem(`like_${postId}`) === 'true';
    setLiked(hasLiked);
    setLikeCount(hasLiked ? seedLikes + 1 : seedLikes);
    setViewsCount(seedViews);
  }, [postId]);

  const handleLike = () => {
    const nextState = !liked;
    setLiked(nextState);
    localStorage.setItem(`like_${postId}`, String(nextState));
    setLikeCount(prev => (nextState ? prev + 1 : prev - 1));
  };

  const handleShare = (platform: string) => {
    const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
    const text = `Check out this strategic publication: "${postTitle}" on Chalky InfoTech`;

    let url = '';
    switch (platform) {
      case 'linkedin':
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
        break;
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case 'twitter':
        url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(text)}`;
        break;
      case 'copy':
        if (typeof navigator !== 'undefined') {
          navigator.clipboard.writeText(shareUrl).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          });
        }
        return;
    }

    if (url) {
      window.open(url, '_blank', 'width=600,height=400,resizable=yes');
    }
    setShowShareMenu(false);
  };

  return (
    <div className="flex flex-col gap-6 w-full py-8 border-y border-[#EFE7DD] my-10 select-none">
      
      {/* Upper Meta Indicators */}
      <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-bold uppercase tracking-widest text-[#7A1F5C]/70">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5">
            <Clock size={14} className="text-[#7A1F5C]" />
            {readTime} min read
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar size={14} className="text-[#7A1F5C]" />
            {date}
          </span>
        </div>
        <div className="flex items-center gap-1.5 bg-[#FAF8F5] px-3 py-1.5 rounded-full border border-[#EFE7DD]">
          <Eye size={14} className="text-gray-400" />
          <span className="text-gray-500">{viewsCount.toLocaleString()} views</span>
        </div>
      </div>

      {/* Engagement Buttons */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
        
        {/* Left Side: Like & Share Trigger */}
        <div className="flex items-center gap-4 relative">
          
          {/* Like Button */}
          <button
            onClick={handleLike}
            className={`group inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl border transition-all duration-300 font-extrabold text-xs uppercase tracking-widest cursor-pointer ${
              liked
                ? 'bg-[#7A1F5C] border-[#7A1F5C] text-white shadow-lg shadow-[#7A1F5C]/15 scale-102'
                : 'bg-white border-[#EFE7DD] text-gray-700 hover:border-[#7A1F5C] hover:text-[#7A1F5C]'
            }`}
          >
            <Heart
              size={16}
              className={`transition-transform duration-300 ${
                liked ? 'fill-white scale-110 text-white' : 'text-gray-400 group-hover:scale-110 group-hover:text-[#7A1F5C]'
              }`}
            />
            <span>{likeCount} Likes</span>
          </button>

          {/* Share Trigger */}
          <div className="relative">
            <button
              onClick={() => setShowShareMenu(prev => !prev)}
              className={`inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl border transition-all duration-300 font-extrabold text-xs uppercase tracking-widest cursor-pointer ${
                showShareMenu
                  ? 'bg-gray-900 border-gray-900 text-white shadow-lg'
                  : 'bg-white border-[#EFE7DD] text-gray-700 hover:border-[#7A1F5C] hover:text-[#7A1F5C]'
              }`}
            >
              <Share2 size={16} className={showShareMenu ? 'text-white' : 'text-gray-400'} />
              <span>Share</span>
            </button>

            {/* Share Dropdown */}
            <AnimatePresence>
              {showShareMenu && (
                <>
                  {/* Backdrop */}
                  <div className="fixed inset-0 z-40" onClick={() => setShowShareMenu(false)} />
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute bottom-full left-0 mb-3 bg-white border border-[#EFE7DD] rounded-2xl shadow-2xl p-2 z-50 min-w-[220px]"
                  >
                    <button
                      onClick={() => handleShare('linkedin')}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-[#FAF8F5] rounded-xl w-full text-left font-bold text-xs uppercase tracking-wider text-gray-700 transition-colors"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#0077B5]"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                      <span>LinkedIn</span>
                    </button>
                    <button
                      onClick={() => handleShare('twitter')}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-[#FAF8F5] rounded-xl w-full text-left font-bold text-xs uppercase tracking-wider text-gray-700 transition-colors"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#1A1A1A]"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                      <span>Twitter</span>
                    </button>
                    <button
                      onClick={() => handleShare('facebook')}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-[#FAF8F5] rounded-xl w-full text-left font-bold text-xs uppercase tracking-wider text-gray-700 transition-colors"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#1877F2]"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                      <span>Facebook</span>
                    </button>
                    <div className="border-t border-[#EFE7DD] my-1.5" />
                    <button
                      onClick={() => handleShare('copy')}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-[#FAF8F5] rounded-xl w-full text-left font-bold text-xs uppercase tracking-wider text-gray-700 transition-colors"
                    >
                      {copied ? (
                        <>
                          <Check size={16} className="text-green-600 animate-pulse" />
                          <span className="text-green-600">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Link2 size={16} className="text-gray-400" />
                          <span>Copy Publication Link</span>
                        </>
                      )}
                    </button>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Right Side: Back to category anchor */}
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#7A1F5C] bg-[#7A1F5C]/10 px-3 py-1.5 rounded-md">
          {categoryName} publication
        </span>

      </div>
    </div>
  );
}
