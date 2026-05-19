'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight, Activity } from 'lucide-react';
import api from '@/services/api';

export default function InsightsGrid({ categorySlug }: { categorySlug?: string }) {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        // We fetch all posts and then filter by category if needed
        const allPosts = await api.getAllPosts(100);
        
        if (categorySlug) {
          setPosts(allPosts.filter(p => p.category?.slug === categorySlug));
        } else {
          setPosts(allPosts);
        }
      } catch (err) {
        console.error("Failed to fetch posts:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, [categorySlug]);

  if (loading) {
    return (
      <div className="py-24 flex justify-center items-center">
        <div className="w-12 h-12 border-4 border-[#7A1F5C]/20 border-t-[#7A1F5C] rounded-full animate-spin"></div>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="py-24 flex flex-col items-center justify-center text-center">
        <Activity className="w-16 h-16 text-gray-300 mb-4" />
        <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">Check Back Soon</h3>
        <p className="text-gray-500">We are crafting new content for this section.</p>
      </div>
    );
  }

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post: any, index: number) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={post.image || "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200"}
                  alt={post.title}
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-[#7A1F5C] text-[10px] font-bold uppercase tracking-wider">
                    {post.category?.name || 'Featured'}
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} className="text-[#7A1F5C]" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} className="text-[#7A1F5C]" />
                    {post.readTime} min read
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 group-hover:text-[#7A1F5C] transition-colors leading-tight line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-1 line-clamp-3">
                  {post.excerpt}
                </p>

                <Link 
                  href={`/insights/${post.category?.slug}/${post.id}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#7A1F5C] group/link"
                >
                  Read Full Post 
                  <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
