'use client';

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  Target, 
  Users, 
  CheckCircle2, 
  FileText, 
  Calendar, 
  Shield, 
  ArrowUpCircle,
  Handshake
} from "lucide-react";

const STEPS = [
  {
    title: "Needs Analysis",
    icon: <Search className="w-6 h-6" />,
    points: [
      "Assess company background, culture, and goals",
      "Define role requirements and success criteria"
    ]
  },
  {
    title: "Market Intelligence",
    icon: <Target className="w-6 h-6" />,
    points: [
      "Analyze talent market and competitors",
      "Identify target companies and skill availability",
      "Share insights on salary trends and hiring landscape"
    ]
  },
  {
    title: "Talent Sourcing",
    icon: <Users className="w-6 h-6" />,
    points: [
      "Identify and approach qualified candidates",
      "Engage passive talent",
      "Maintain confidentiality and relevance"
    ]
  },
  {
    title: "Candidate Assessment",
    icon: <CheckCircle2 className="w-6 h-6" />,
    points: [
      "Evaluate experience and skills",
      "Conduct competency-based screening",
      "Shortlist suitable candidates"
    ]
  },
  {
    title: "Candidate Presentation",
    icon: <FileText className="w-6 h-6" />,
    points: [
      "Present shortlisted candidates",
      "Highlight skills, strengths, and potential risks",
      "Support client decision-making"
    ]
  },
  {
    title: "Interview Management",
    icon: <Calendar className="w-6 h-6" />,
    points: [
      "Schedule and coordinate interviews",
      "Prepare candidates",
      "Collect and share feedback"
    ]
  },
  {
    title: "Verification & Due Diligence",
    icon: <Shield className="w-6 h-6" />,
    points: [
      "Verify employment and credentials",
      "Conduct reference checks",
      "Ensure candidate reliability"
    ]
  },
  {
    title: "Offer & Negotiation",
    icon: <Handshake className="w-6 h-6" />,
    points: [
      "Advise on compensation and structure",
      "Manage negotiations",
      "Ensure successful closure"
    ]
  },
  {
    title: "Onboarding Support",
    icon: <ArrowUpCircle className="w-6 h-6" />,
    points: [
      "Assist onboarding process",
      "Follow up at 30/60/90 days",
      "Support retention and long-term success"
    ]
  }
];

export default function SearchMethodology() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const handleStepClick = (index: number) => {
    setCurrentIndex(index);
    setRotation(-(index * 360 / STEPS.length));
    setIsAutoPlaying(false); 
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        const nextIndex = (currentIndex + 1) % STEPS.length;
        setCurrentIndex(nextIndex);
        setRotation(-(nextIndex * 360 / STEPS.length));
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const activeStep = STEPS[currentIndex];
  const stepAngle = 360 / STEPS.length;

  return (
    <section className="py-24 bg-gradient-to-br from-[#7A1F5C] to-[#4A1237] text-white overflow-hidden relative">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-widest mb-4 border border-white/5">
              Methodology
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
              Our Search <span className="text-white/80">Methodology</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed">
              A comprehensive 9-step process designed to deliver exceptional talent
            </p>
          </motion.div>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 min-h-[400px]">
          {/* Left Side: Circular Navigation */}
          <div className="flex-1 flex justify-center items-center relative h-[340px] md:h-[400px] w-full">
            <motion.div 
              className="w-[260px] h-[260px] md:w-[340px] md:h-[340px] border-2 border-dashed border-white/20 rounded-full absolute flex justify-center items-center"
              animate={{ rotate: rotation }}
              transition={{ type: "spring", stiffness: 60, damping: 15 }}
            >
              {/* Outer faint border */}
              <div className="absolute w-[110%] h-[110%] border border-white/5 rounded-full" />
              
              {STEPS.map((step, index) => {
                const angle = index * stepAngle;
                const isActive = index === currentIndex;
                
                return (
                  <div 
                    key={index} 
                    className={`absolute top-1/2 left-1/2 -mt-[25px] -ml-[25px] md:-mt-[30px] md:-ml-[30px] z-10 transition-all duration-300 ${isActive ? 'z-20' : ''}`}
                    style={{ 
                      transform: `rotate(${angle}deg) translate(clamp(130px, 16vw, 170px)) rotate(-${angle}deg)` 
                    }}
                  >
                    <motion.div 
                      className={`w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full flex items-center justify-center cursor-pointer transition-all duration-400 border-2 ${
                        isActive 
                          ? 'bg-white text-[#7A1F5C] border-white shadow-[0_0_30px_rgba(255,255,255,0.5)] scale-125' 
                          : 'bg-white/10 backdrop-blur-md border-white/30 text-white hover:scale-110'
                      }`}
                      onClick={() => handleStepClick(index)}
                      animate={{ rotate: -rotation }} // Keep icons upright
                      transition={{ type: "spring", stiffness: 60, damping: 15 }}
                    >
                      <div className={isActive ? "scale-110" : ""}>{step.icon}</div>
                      
                      {/* Number Badge */}
                      <div className="absolute -top-1 -right-1 w-5 h-5 md:w-6 md:h-6 bg-white text-[#7A1F5C] rounded-full flex items-center justify-center text-[10px] md:text-xs font-black shadow-md border border-[#7A1F5C]/10">
                        {index + 1}
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>
            
            {/* Central decorative element */}
            <div className="w-[90px] h-[90px] md:w-[110px] md:h-[110px] bg-white/5 border border-white/20 rounded-full flex items-center justify-center absolute z-0">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl md:text-5xl font-black leading-none">{currentIndex + 1}</span>
                <span className="text-sm md:text-lg font-semibold opacity-60">/ {STEPS.length}</span>
              </div>
            </div>
            
            {/* Visual connecting line to content */}
            <div className="hidden lg:block absolute right-[-40px] top-1/2 w-[100px] h-[2px] bg-gradient-to-r from-white/50 to-transparent z-0" />
          </div>

          {/* Right Side: Content Details */}
          <div className="flex-1 max-w-full lg:max-w-[580px] w-full">
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentIndex}
                className="bg-white/10 backdrop-blur-lg p-6 md:p-10 rounded-3xl border border-white/20 shadow-2xl min-h-[340px] flex flex-col"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-16 h-16 md:w-[90px] md:h-[90px] bg-white text-[#7A1F5C] rounded-2xl flex items-center justify-center shadow-lg shrink-0">
                    {React.cloneElement(activeStep.icon as React.ReactElement, { className: "w-8 h-8 md:w-10 md:h-10" })}
                  </div>
                  <div>
                    <span className="block text-xs md:text-sm font-extrabold tracking-widest text-white/60 mb-1">STEP 0{currentIndex + 1}</span>
                    <h3 className="text-2xl md:text-3xl font-extrabold leading-tight">{activeStep.title}</h3>
                  </div>
                </div>

                <div className="flex-1">
                  <ul className="space-y-4">
                    {activeStep.points.map((point, pIdx) => (
                      <motion.li 
                        key={pIdx}
                        className="flex items-start gap-4 text-white/90 text-sm md:text-base leading-relaxed"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + (pIdx * 0.1) }}
                      >
                        <CheckCircle2 className="text-white w-5 h-5 mt-0.5 shrink-0" />
                        <span>{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10 pt-8 border-t border-white/10 flex items-center justify-between">
                  <button 
                    onClick={() => handleStepClick((currentIndex - 1 + STEPS.length) % STEPS.length)}
                    className="text-white/60 hover:text-white font-bold text-xs md:text-sm uppercase tracking-wider transition-colors"
                  >
                    Previous
                  </button>
                  <div className="flex gap-2">
                    {STEPS.map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${i === currentIndex ? 'bg-white scale-150 shadow-[0_0_10px_white]' : 'bg-white/20'}`}
                        onClick={() => handleStepClick(i)}
                      />
                    ))}
                  </div>
                  <button 
                    onClick={() => handleStepClick((currentIndex + 1) % STEPS.length)}
                    className="text-white/60 hover:text-white font-bold text-xs md:text-sm uppercase tracking-wider transition-colors"
                  >
                    Next
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
