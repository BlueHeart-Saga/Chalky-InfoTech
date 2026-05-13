import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 bg-gradient-to-b from-[#FFF5F8] to-white text-center">
      <h1 className="text-8xl md:text-9xl font-extrabold text-[#7A1F5C] mb-6 tracking-tighter">
        404
      </h1>
      <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
        Page Not Found
      </h2>
      <p className="text-[#555555] text-lg max-w-lg mx-auto mb-10 leading-relaxed">
        We could not locate the page you are looking for. It may have been moved, renamed, or is temporarily unavailable.
      </p>
      <Link 
        href="/" 
        className="inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-[#7A1F5C] rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 hover:bg-[#63184A] transition-all duration-300"
      >
        Return to Homepage
      </Link>
    </div>
  );
}
