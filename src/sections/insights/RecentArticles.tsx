'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import * as LucideIcons from 'lucide-react';

interface Post {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category?: { name: string; slug: string };
  tags?: string[];
  date: string;
  readTime: number;
}

interface Props {
  posts: Post[];
  displayFeatured: Post[];
  loading: boolean;
}

export default function RecentArticles({ posts, displayFeatured, loading }: Props) {
  // Filter 3 recent posts excluding those in the featured highlight carousel
  const recentPosts = posts.filter(p => !displayFeatured.some(f => f.id === p.id)).slice(0, 3);

  if (loading) {
    return (
      <div className="py-12 flex justify-center items-center">
        <div className="w-8 h-8 border-4 border-[#7A1F5C]/20 border-t-[#7A1F5C] rounded-full animate-spin"></div>
      </div>
    );
  }

  if (recentPosts.length === 0) {
    return (
      <div className="text-center py-12 text-gray-400">Check back soon for new articles.</div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {recentPosts.map((post, idx) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1, duration: 0.5 }}
          className="bg-white border border-[#EFE7DD] rounded-[2rem] overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group"
        >
          <div className="relative h-56 overflow-hidden">
            <Image
              src={post.image || "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200"}
              alt={post.title}
              fill
              unoptimized
              className="object-cover group-hover:scale-105 transition-transform duration-700"
             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            <div className="absolute top-4 left-4">
              <span className="px-3.5 py-1.5 rounded-xl bg-white/90 backdrop-blur-sm text-[#7A1F5C] text-[9px] font-black uppercase tracking-wider select-none">
                {post.category?.name}
              </span>
            </div>
          </div>

          <div className="p-8 flex flex-col flex-grow justify-between">
            <div>
              {/* Post metadata info */}
              <div className="flex items-center gap-4 text-[10px] text-gray-400 font-extrabold uppercase tracking-wider mb-4">
                <span className="flex items-center gap-1.5">
                  <LucideIcons.Clock size={12} className="text-[#7A1F5C]" />
                  {post.readTime} min read
                </span>
                <span className="flex items-center gap-1.5">
                  <LucideIcons.Calendar size={12} className="text-[#7A1F5C]" />
                  {post.date}
                </span>
              </div>

              {/* Title */}
              <h4 className="text-lg font-bold text-[#1A1A1A] group-hover:text-[#7A1F5C] transition-colors leading-tight mb-3 line-clamp-2">
                {post.title}
              </h4>

              {/* Excerpt description */}
              <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                {post.excerpt}
              </p>
            </div>

            <Link 
              href={`/insights/${post.category?.slug}/${post.id}`}
              className="inline-flex items-center gap-1.5 text-xs font-black text-[#7A1F5C] uppercase tracking-wider w-fit group/link pt-2 border-b border-transparent hover:border-[#7A1F5C] transition-all"
            >
              Read Post <LucideIcons.ArrowRight size={14} className="group-hover/link:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
