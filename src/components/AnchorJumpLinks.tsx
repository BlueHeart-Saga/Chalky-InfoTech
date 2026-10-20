'use client';

import React from 'react';
import { Compass } from 'lucide-react';

interface LinkItem {
  label: string;
  id: string;
}

interface AnchorJumpLinksProps {
  links: LinkItem[];
  title?: string;
}

export default function AnchorJumpLinks({ links, title = 'On this page' }: AnchorJumpLinksProps) {
  if (!links || links.length === 0) return null;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -120; // Account for the sticky header
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8 relative z-10">
      <div className="bg-white/80 backdrop-blur-md rounded-[32px] p-6 md:p-8 border border-white/60 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-xl bg-[#7A1F5C]/10 flex items-center justify-center text-[#7A1F5C]">
            <Compass size={16} />
          </div>
          <span className="text-[#1A1A1A] font-bold text-xs uppercase tracking-widest">{title}</span>
        </div>
        <div className="flex flex-wrap gap-2 md:gap-3">
          {links.map((link, idx) => (
            <button
              key={idx}
              onClick={(e) => handleClick(e, link.id)}
              className="px-5 py-2.5 rounded-full bg-[#F5F0E8] hover:bg-[#7A1F5C] text-[#7A1F5C] hover:text-white text-xs md:text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer border border-[#7A1F5C]/5"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
