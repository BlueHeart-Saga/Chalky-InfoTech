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
    <section className="pt-2 pb-24 bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-semibold mb-6">
              <span className="text-[#7A1F5C]">Latest</span> <span className="text-[#1A1A1A]">Insights</span>
            </h2>
            <p className="text-[#8A8A8A] text-lg">
              Stay ahead with the latest trends in technology and{' '}
              <Link href="/services" className="text-[#7A1F5C] font-medium hover:underline transition-all">
                talent acquisition
              </Link>
              .
            </p>
          </div>
          <Link href="/insights" className="text-[#7A1F5C] font-semibold flex items-center gap-2 hover:gap-3 transition-all">
            View All Insights <ArrowRight size={20} />
          </Link>
        </div>

        {posts.length > 0 ? (
          <LatestInsightsClient initialPosts={posts} />
        ) : (
          <div className="text-center py-12 text-[#8A8A8A]">No insights articles available at the moment.</div>
        )}
      </div>
    </section>
  );
}
