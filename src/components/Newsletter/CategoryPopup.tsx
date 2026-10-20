'use client';

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Loader2 } from "lucide-react";
import api from "@/services/api";

interface CategoryPopupProps {
  email: string;
  closePopup: () => void;
  onSubmit: (categories: string[]) => void;
  loading?: boolean;
}

export default function CategoryPopup({ email, closePopup, onSubmit, loading = false }: CategoryPopupProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sections, setSections] = useState<any[]>([]);
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        setDataLoading(true);
        const data = await api.getSections();
        const sectionsData = data?.sections || data || [];

        const sectionsWithCategories = await Promise.all(
          sectionsData.map(async (section: any) => {
            const categoriesRes = await api.getCategories(section.slug);
            return {
              ...section,
              categories: categoriesRes?.categories || [],
            };
          })
        );
        
        // Filter out sections with no categories
        setSections(sectionsWithCategories.filter(s => s.categories.length > 0));
      } catch (error) {
        console.error("Failed to load categories for popup:", error);
      } finally {
        setDataLoading(false);
      }
    };
    loadCategories();
  }, []);

  const toggleCategory = (catName: string) => {
    setSelectedCategories((prev) =>
      prev.includes(catName) ? prev.filter((c) => c !== catName) : [...prev, catName]
    );
  };

  const handleSubmit = () => {
    onSubmit(selectedCategories);
  };

  return (
    <div className="fixed inset-0 z-[100000] flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={closePopup}
      />

      {/* Modal Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-xl bg-white rounded-3xl overflow-hidden shadow-2xl"
      >
        {/* Header */}
        <div className="bg-[#1A1A1A] p-6 sm:p-8 text-center relative border-b border-[#7A1F5C]/30">
          <button
            onClick={closePopup}
            className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
          <span className="inline-block px-3 py-1 rounded-full bg-[#7A1F5C]/20 text-[#D14D72] text-[10px] font-bold uppercase tracking-widest mb-3 border border-[#7A1F5C]/30">
            Preferences
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Personalize Your Feed
          </h3>
          <p className="text-white/70 text-sm">
            Select the topics you're most interested in to receive tailored
            updates.
          </p>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 bg-[#F5F0E8]">
          {dataLoading ? (
            <div className="flex flex-col items-center justify-center py-12 text-[#7A1F5C]">
              <Loader2 size={32} className="animate-spin mb-4" />
              <p className="text-sm font-medium">Curating topics...</p>
            </div>
          ) : sections.length > 0 ? (
            <div className="max-h-[50vh] overflow-y-auto pr-2 custom-scrollbar space-y-8">
              {sections.map((section, sIdx) => (
                <div key={section.slug || sIdx}>
                  <h4 className="text-[#1A1A1A] font-bold mb-4 text-sm uppercase tracking-wide">
                    {section.name}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {section.categories.map((cat: any) => {
                      const isSelected = selectedCategories.includes(cat.name);
                      return (
                        <button
                          key={cat.slug}
                          type="button"
                          onClick={() => toggleCategory(cat.name)}
                          className={`flex items-center gap-3 p-3 rounded-xl border text-left transition-all duration-200 ${
                            isSelected
                              ? "bg-[#7A1F5C] border-[#7A1F5C] text-white shadow-md"
                              : "bg-white border-gray-200 text-gray-700 hover:border-[#7A1F5C]/50 hover:bg-[#7A1F5C]/5"
                          }`}
                        >
                          <div
                            className={`w-5 h-5 rounded flex items-center justify-center border flex-shrink-0 transition-colors ${
                              isSelected
                                ? "border-white bg-white/20"
                                : "border-gray-300 bg-white"
                            }`}
                          >
                            {isSelected && <Check size={14} className="text-white" />}
                          </div>
                          <span className="text-sm font-medium leading-tight line-clamp-2">
                            {cat.name}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              <p>No topics available at the moment.</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 bg-white border-t border-gray-100 flex flex-col sm:flex-row justify-end gap-3">
          <button
            onClick={closePopup}
            className="px-6 py-2.5 rounded-full text-gray-500 font-semibold text-sm hover:bg-gray-100 transition-colors"
          >
            Maybe Later
          </button>
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="px-6 py-2.5 rounded-full bg-[#7A1F5C] text-white font-bold text-sm hover:bg-[#4A1238] transition-all shadow-lg shadow-[#7A1F5C]/20 disabled:opacity-70 flex items-center justify-center"
          >
            {loading ? "Saving..." : "Save Preferences"}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
