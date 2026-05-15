'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const POSTS = [
  { 
    title: "The Future of AI Recruitment in 2025", 
    category: "Technology", 
    date: "May 10, 2024",
    desc: "How generative AI is reshaping how we source and vet top engineering talent.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop"
  },
  { 
    title: "Scaling Cloud Teams at Enterprise Speed", 
    category: "Cloud", 
    date: "May 08, 2024",
    desc: "A guide for CTOs on maintaining quality while scaling rapidly in a competitive market.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop"
  },
  { 
    title: "Remote vs Hybrid: The Talent Perspective", 
    category: "Strategy", 
    date: "May 05, 2024",
    desc: "Why flexible working models remain the top priority for tech professionals.",
    image: "https://images.unsplash.com/photo-1522071823991-b5ae72647c46?q=80&w=800&auto=format&fit=crop"
  }
];

export default function LatestInsights() {
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

        <div className="grid md:grid-cols-3 gap-8">
          {POSTS.map((post, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden border border-[#EFE7DD] hover:shadow-2xl transition-all duration-300 group flex flex-col h-full"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 mb-6">
                  <span className="bg-[#F5F0E8] text-[#7A1F5C] text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-[#8A8A8A] text-xs font-semibold">{post.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4 group-hover:text-[#7A1F5C] transition-colors">
                  {post.title}
                </h3>
                <p className="text-[#8A8A8A] text-sm leading-relaxed mb-8 flex-grow">
                  {post.desc}
                </p>
                <Link href="#" className="inline-flex items-center gap-2 text-[#C2185B] font-semibold text-sm mt-auto">
                  Read Article <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
