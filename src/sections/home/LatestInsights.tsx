import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import api from '@/services/api';
import LatestInsightsClient from './LatestInsightsClient';

export default async function LatestInsights() {
  let posts: any[] = [];
  try {
    posts = await api.getAllPosts(3);
  } catch (err) {
    console.error("Failed to fetch latest insights on server:", err);
  }

  return (
    <section className="pt-20 pb-6 bg-[#F5F0E8] relative overflow-hidden">
      {/* Subtle Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#7A1F5C]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-[11px] font-semibold uppercase tracking-widest mb-4">
              THOUGHT LEADERSHIP
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight">
              <span className="text-[#7A1F5C]">Latest</span> Insights & Market Intelligence
            </h2>
            <p className="text-[#666] text-base md:text-lg mt-3 max-w-2xl leading-relaxed">
              Stay ahead with expert perspectives on global recruitment, tech trends, and{' '}
              <Link href="/services" className="text-[#7A1F5C] font-semibold hover:underline transition-all">
                workforce solutions
              </Link>
              .
            </p>
          </div>
          <Link href="/insights" className="text-[#7A1F5C] font-bold flex items-center gap-2 hover:gap-3 transition-all text-sm uppercase tracking-wider">
            View All Insights <ArrowRight size={18} />
          </Link>
        </div>

        {posts.length > 0 ? (
          <LatestInsightsClient initialPosts={posts} />
        ) : (
          <div className="text-center py-12 text-[#8A8A8A]">No insights articles available at the moment.</div>
        )}
      </div>

      {/* Bottom Wave Divider */}
      {/* <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 translate-y-[1px]">
        <svg className="relative block w-full h-[40px] sm:h-[70px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#ffffff" transform="scale(1, -1) translate(0, -120)"></path>
        </svg>
      </div> */}
    </section>
  );
}
