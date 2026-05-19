'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import api from '@/services/api';

export default function LatestInsights() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatest = async () => {
      try {
        setLoading(true);
        const latestPosts = await api.getAllPosts(3);
        setPosts(latestPosts || []);
      } catch (err) {
        console.error("Failed to fetch latest insights:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchLatest();
  }, []);

  return (
    <section className="py-24 bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-semibold mb-6">
              <span className="text-[#7A1F5C]">Latest</span> <span className="text-[#1A1A1A]">Insights</span>
            </h2>
            <p className="text-[#8A8A8A] text-lg">Stay ahead with the latest trends in technology and talent acquisition.</p>
          </div>
          <Link href="/insights" className="text-[#7A1F5C] font-semibold flex items-center gap-2 hover:gap-3 transition-all">
            View All Insights <ArrowRight size={20} />
          </Link>
        </div>

        {loading ? (
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((n) => (
              <div key={n} className="bg-white/50 animate-pulse rounded-3xl h-[500px] border border-[#EFE7DD]"></div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <motion.div 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden border border-[#EFE7DD] hover:shadow-2xl transition-all duration-300 group flex flex-col h-full"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image 
                    src={post.image || "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200"} 
                    alt={post.title}
                    fill
                    unoptimized
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-[#7A1F5C] text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm">
                      {post.category?.name || 'Knowledge'}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 mb-6 text-[#8A8A8A] text-[11px] font-semibold">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-[#7A1F5C]" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} className="text-[#7A1F5C]" />
                      {post.readTime} min read
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 group-hover:text-[#7A1F5C] transition-colors line-clamp-2 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-[#8A8A8A] text-sm leading-relaxed mb-8 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link 
                    href={`/insights/${post.category?.slug}/${post.id}`} 
                    className="inline-flex items-center gap-2 text-[#7A1F5C] font-bold text-sm mt-auto group/link"
                  >
                    Read Article 
                    <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
