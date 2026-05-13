'use client';
import { MapPin, Globe2, Laptop } from 'lucide-react';

export default function GlobalWorkforce() {
  return (
    <section className="relative py-20 md:py-28 bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-5">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-bold uppercase tracking-widest mb-6">Global Reach</span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-[#1A1A1A] mb-6 leading-tight tracking-tight">
              Borderless Talent for <br/>
              <span className="text-[#7A1F5C]">Global Enterprises</span>
            </h2>
            <p className="text-[#8A8A8A] text-lg leading-relaxed mb-8">
              Whether you are scaling a local HQ or building distributed engineering centers across continents, our dual-shore operations model provides seamless access to elite talent pools.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-5 p-5 rounded-2xl bg-[#F5F0E8] border border-[#E5E7EB] hover:border-[#7A1F5C]/30 transition-colors duration-300">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                  <Globe2 className="w-6 h-6 text-[#7A1F5C]" />
                </div>
                <div>
                  <p className="font-bold text-[#1A1A1A] text-lg">UK Operations Hub</p>
                  <p className="text-sm text-[#8A8A8A]">Strategic enterprise partnerships & European talent.</p>
                </div>
              </div>
              <div className="flex items-center gap-5 p-5 rounded-2xl bg-[#F5F0E8] border border-[#E5E7EB] hover:border-[#7A1F5C]/30 transition-colors duration-300">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                  <MapPin className="w-6 h-6 text-[#C2185B]" />
                </div>
                <div>
                  <p className="font-bold text-[#1A1A1A] text-lg">India Delivery Center</p>
                  <p className="text-sm text-[#8A8A8A]">High-volume engineering scale & APAC coverage.</p>
                </div>
              </div>
              <div className="flex items-center gap-5 p-5 rounded-2xl bg-[#F5F0E8] border border-[#E5E7EB] hover:border-[#7A1F5C]/30 transition-colors duration-300">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                  <Laptop className="w-6 h-6 text-[#4A1238]" />
                </div>
                <div>
                  <p className="font-bold text-[#1A1A1A] text-lg">Remote Workforce</p>
                  <p className="text-sm text-[#8A8A8A]">EOR integration & borderless hiring compliance.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 relative">
            <div className="aspect-[4/3] rounded-3xl bg-[#F5F0E8] border border-[#E5E7EB] shadow-lg overflow-hidden relative flex items-center justify-center p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#7A1F5C_1.5px,transparent_1px)] bg-[size:24px_24px] opacity-[0.05]" />
              <div className="relative w-full h-full border-2 border-dashed border-[#7A1F5C]/20 rounded-2xl flex flex-col items-center justify-center bg-white/50 backdrop-blur-sm">
                 <Globe2 className="w-16 h-16 text-[#7A1F5C]/20 mb-4" />
                 <p className="text-[#1A1A1A] font-bold tracking-widest uppercase text-sm">Global Hiring Infrastructure</p>
                 
                 {/* Map Points Simulation */}
                 <div className="absolute w-4 h-4 bg-[#C2185B] rounded-full top-[30%] left-[30%] shadow-[0_0_20px_#C2185B]">
                   <div className="absolute inset-0 rounded-full border-2 border-[#C2185B] animate-ping" />
                 </div>
                 <div className="absolute w-4 h-4 bg-[#7A1F5C] rounded-full bottom-[40%] right-[30%] shadow-[0_0_20px_#7A1F5C]">
                   <div className="absolute inset-0 rounded-full border-2 border-[#7A1F5C] animate-ping" style={{ animationDelay: '1s' }} />
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    
      {/* Unique Wave Divider: Stepped Blocks */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0 pointer-events-none">
        <svg className="relative block w-full h-[60px] md:h-[100px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,120 L200,120 L200,80 L400,80 L400,40 L600,40 L600,80 L800,80 L800,120 L1000,120 L1000,60 L1200,60 L1200,120 L0,120 Z" fill="#F5F0E8"></path>
        </svg>
      </div>
    </section>
  );
}
