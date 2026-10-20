'use client';

import { Download } from 'lucide-react';

interface Props {
  documentName: string;
  variant?: 'light' | 'dark';
  className?: string;
}

export default function DownloadPdfButton({ documentName, variant = 'light', className = '' }: Props) {
  const handleDownload = () => {
    // Store original title
    const originalTitle = document.title;
    // Set title for the PDF file name
    document.title = `${documentName} - Chalky InfoTech`;
    
    // Open print dialog to save as PDF
    window.print();
    
    // Restore original title
    setTimeout(() => {
      document.title = originalTitle;
    }, 1000);
  };

  const baseStyles = "inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm backdrop-blur-sm transition-all hover:scale-105 active:scale-95 shadow-lg";
  
  const variantStyles = variant === 'light' 
    ? "bg-white/10 hover:bg-white/25 border border-white/20 text-white shadow-black/10"
    : "bg-[#7A1F5C] hover:bg-[#9D2877] text-white border border-[#7A1F5C]/20 shadow-[#7A1F5C]/20";

  return (
    <button 
      onClick={handleDownload}
      className={`${baseStyles} ${variantStyles} ${className}`}
      aria-label={`Download ${documentName} as PDF`}
    >
      <Download size={16} />
      <span>Download PDF</span>
    </button>
  );
}
