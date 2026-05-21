'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Bell, 
  FileText, 
  Rocket, 
  Mail,
  CheckCircle2
} from "lucide-react";
import CategoryPopup from "./CategoryPopup";
import { sendEmail } from "@/services/sendmail";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInitialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setShowPopup(true);
  };

  const handleFinalSubscribe = async (categories: string[]) => {
    setIsSubscribing(true);
    setSubscribeStatus('idle');

    try {
      await sendEmail({
        email,
        subject: 'Newsletter Subscription',
        message: `Please add me to the Chalky Infotech newsletter.\n\nSelected Topics of Interest: ${categories.length > 0 ? categories.join(', ') : 'All Updates'}`,
        fullName: 'Newsletter Subscriber',
      });
      setSubscribeStatus('success');
      setShowPopup(false);
      setTimeout(() => setEmail(''), 3000);
    } catch (error) {
      console.error('Subscription error:', error);
      setSubscribeStatus('error');
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <>
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#7A1F5C]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C2185B]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-[#1A1A1A] rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            
            {/* Left Content Area */}
            <div className="p-8 lg:p-12 lg:w-1/2 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10 relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#7A1F5C] to-[#C2185B]" />
              
              <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-bold uppercase tracking-widest mb-6 self-start border border-white/20">
                Stay Updated
              </span>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
                Never Miss an <span className="text-[#C2185B]">Insight</span>
              </h2>
              
              <p className="text-white/70 text-lg mb-10 max-w-md">
                Join 10,000+ enterprise leaders and professionals who get our latest articles, workforce research, and industry trends delivered weekly.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Bell, text: "Weekly Industry Digest" },
                  { icon: FileText, text: "Exclusive whitepapers & reports" },
                  { icon: Rocket, text: "Early access to talent trends" }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-4 text-white/80"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#7A1F5C]/20 flex items-center justify-center text-[#C2185B]">
                      <item.icon size={18} />
                    </div>
                    <span className="font-medium text-sm sm:text-base">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Subscription Area */}
            <div className="p-8 lg:p-12 lg:w-1/2 bg-[#141414] flex flex-col justify-center">
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-8">
                Subscribe to our newsletter
              </h3>

              <form onSubmit={handleInitialSubmit} className="flex flex-col gap-4 max-w-md w-full">
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40">
                    <Mail size={20} />
                  </div>
                  <input
                    type="email"
                    placeholder="Enter your work email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if(subscribeStatus !== 'idle') setSubscribeStatus('idle');
                    }}
                    disabled={subscribeStatus === 'success'}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#7A1F5C] focus:bg-white/10 transition-all"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubscribing || subscribeStatus === 'success'}
                  className={`w-full py-4 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 shadow-lg flex items-center justify-center gap-2 ${
                    subscribeStatus === 'success'
                      ? 'bg-[#25D366] text-white shadow-[#25D366]/20'
                      : subscribeStatus === 'error'
                      ? 'bg-red-500 text-white'
                      : 'bg-gradient-to-r from-[#7A1F5C] to-[#C2185B] text-white shadow-[#7A1F5C]/25 hover:shadow-[#7A1F5C]/40 hover:-translate-y-0.5'
                  }`}
                >
                  {subscribeStatus === 'success' ? (
                    <>
                      <CheckCircle2 size={20} /> Successfully Subscribed!
                    </>
                  ) : (
                    "Subscribe Now"
                  )}
                </button>
              </form>

              {subscribeStatus === 'error' && (
                <p className="text-red-400 mt-4 text-sm">
                  Failed to subscribe. Please try again later.
                </p>
              )}

              <p className="text-white/40 text-xs mt-6 leading-relaxed max-w-md">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from Chalky Infotech. You can unsubscribe at any time.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Popup for category selection */}
      <AnimatePresence>
        {showPopup && (
          <CategoryPopup
            email={email}
            closePopup={() => setShowPopup(false)}
            onSubmit={handleFinalSubscribe}
            loading={isSubscribing}
          />
        )}
      </AnimatePresence>
    </>
  );
}
