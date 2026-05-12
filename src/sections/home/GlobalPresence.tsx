'use client';

import React, { useEffect, useRef, useState } from "react";
import { MapPin, Globe, Users } from "lucide-react";

const LOCATIONS = [
  {
    name: "London",
    country: "UK",
    region: "Europe",
    type: "Head Office",
    employees: "50+",
    top: 16.8,
    left: 46.7,
  },
  {
    name: "Chennai",
    country: "India",
    region: "India",
    type: "Development Center",
    employees: "75+",
    top: 40,
    left: 68.8,
  },
  {
    name: "Thoothukudi",
    country: "India",
    region: "India",
    type: "Regional Office",
    employees: "100+",
    top: 41.2,
    left: 68.4,
  },
];

export default function GlobalPresence() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeLocation, setActiveLocation] = useState<string | null>(null);

  const activeLocData = LOCATIONS.find(l => l.name === activeLocation) || null;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (rect) {
        canvas.width = rect.width;
        canvas.height = rect.height;
        drawCanvas();
      }
    };

    const drawCanvas = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (activeLocData) {
        const x = (activeLocData.left / 100) * canvas.width;
        const y = (activeLocData.top / 100) * canvas.height;

        ctx.beginPath();
        ctx.arc(x, y, 40, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, 40);
        gradient.addColorStop(0, "rgba(122, 31, 92, 0.4)"); // #7A1F5C with opacity
        gradient.addColorStop(1, "rgba(122, 31, 92, 0)");
        ctx.fillStyle = gradient;
        ctx.fill();
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [activeLocData]);

  const mapStyle = activeLocData
    ? { scale: 2.4, origin: `${activeLocData.left}% ${activeLocData.top}%` }
    : { scale: 1, origin: "center" };

  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-semibold uppercase tracking-widest mb-4">
              <Globe size={16} /> Global Reach
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-[#1A1A1A] leading-tight">
              Our Global <span className="text-[#7A1F5C]">Presence</span>
            </h2>
          </div>
          <div>
            <button
              className={`px-8 py-3 rounded-full border-2 font-medium transition-all ${!activeLocation ? 'bg-[#7A1F5C] text-white border-[#7A1F5C] shadow-lg' : 'border-gray-200 text-gray-600 hover:border-[#7A1F5C] hover:text-[#7A1F5C]'}`}
              onClick={() => setActiveLocation(null)}
            >
              View All Locations
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col gap-6">

          {/* Top Panel: Map (Full Width) */}
          <div className="w-full bg-[#F8F9FA] rounded-[2rem] border-2 border-gray-100 relative overflow-hidden h-[350px] md:h-[450px] shadow-inner">
            <div
              className="absolute inset-0 w-full h-full transition-all duration-[1200ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
              style={{
                transform: `scale(${mapStyle.scale})`,
                transformOrigin: mapStyle.origin,
              }}
            >
              {/* SVG Mask Background */}
              <div
                className="absolute inset-0 w-full h-full bg-[#E9ECEF]"
                style={{
                  maskImage: "url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')",
                  maskSize: "100% 100%",
                  maskRepeat: "no-repeat",
                  maskPosition: "center center",
                  WebkitMaskImage: "url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')",
                  WebkitMaskSize: "100% 100%",
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskPosition: "center center",
                }}
              />

              {/* Highlight Canvas */}
              <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

              {/* Pins */}
              {LOCATIONS.map((loc) => (
                <div
                  key={loc.name}
                  className="absolute z-10 group"
                  style={{
                    top: `${loc.top}%`,
                    left: `${loc.left}%`,
                    transform: `translate(-50%, -50%)`,
                    transition: "transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)"
                  }}
                >
                  <button
                    className="relative p-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveLocation(loc.name);
                    }}
                  >
                    <MapPin
                      size={24}
                      className={`transition-all duration-300 ${activeLocation === loc.name ? 'text-[#C2185B] scale-110 drop-shadow-xl' : 'text-[#7A1F5C] hover:scale-110 drop-shadow-md'} ${activeLocation && activeLocation !== loc.name ? 'opacity-50 grayscale' : 'opacity-100'}`}
                      strokeWidth={2.5}
                    />
                    {/* Pulse effect if active */}
                    {activeLocation === loc.name && (
                      <span className="absolute inset-0 flex items-center justify-center -z-10">
                        <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-[#D14D72] opacity-40"></span>
                      </span>
                    )}
                  </button>

                  {/* Tooltip */}
                  <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white rounded-xl shadow-xl border border-gray-100 p-4 w-48 transition-all duration-300 pointer-events-none origin-bottom ${activeLocation === loc.name ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'}`}>
                    <div className="flex justify-between items-start mb-2 pb-2 border-b border-gray-100">
                      <strong className="text-[#1A1A1A] font-semibold">{loc.name}</strong>
                      <span className="text-[#8A8A8A] text-[10px] font-semibold uppercase">{loc.country}</span>
                    </div>
                    <span className="block text-[#7A1F5C] text-xs font-semibold mb-1.5">{loc.type}</span>
                    <span className="flex items-center gap-1.5 text-[#555555] text-xs font-medium">
                      <Users size={12} /> {loc.employees} experts
                    </span>
                    {/* Tooltip Arrow */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-white" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Panel: Locations List (Inline) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {LOCATIONS.map((loc) => (
              <button
                key={loc.name}
                onClick={() => setActiveLocation(loc.name)}
                className={`flex items-center justify-between p-4 rounded-2xl border-2 transition-all text-left ${activeLocation === loc.name ? 'border-[#7A1F5C] bg-[#7A1F5C]/5 shadow-md' : 'border-gray-100 hover:border-gray-300 bg-white'}`}
              >
                <div>
                  <h4 className="font-semibold text-[#1A1A1A] text-lg">{loc.name}</h4>
                  <p className="text-[#8A8A8A] text-xs font-medium">{loc.country} • {loc.region}</p>
                </div>
                <MapPin size={22} className={activeLocation === loc.name ? "text-[#7A1F5C]" : "text-gray-300"} />
              </button>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
