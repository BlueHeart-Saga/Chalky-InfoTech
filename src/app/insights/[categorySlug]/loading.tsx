export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAF8F5]">
      <div className="w-12 h-12 rounded-full border-4 border-[#7A1F5C]/15 border-t-[#7A1F5C] animate-spin mb-4"></div>
      <p className="text-xs uppercase tracking-[0.2em] font-bold text-[#7A1F5C]/60">Loading sector intelligence...</p>
    </div>
  );
}
