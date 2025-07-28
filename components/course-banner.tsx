"use client";

import { useState, useEffect } from "react";
import { getTranslation } from "@/lib/localization";

interface CourseBannerProps {
  lang: "en" | "bn";
}

export function CourseBanner({ lang }: CourseBannerProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg p-6 shadow-lg">
        <div className="text-center">
          <div className="bg-white text-emerald-600 px-4 py-2 rounded-full text-sm font-medium inline-block mb-4">
            🎁 Free PDF
          </div>
          <div className="h-8 bg-emerald-400/30 rounded animate-pulse mb-3 mx-auto max-w-md"></div>
          <div className="h-4 bg-emerald-400/30 rounded animate-pulse mb-6 mx-auto max-w-2xl"></div>
          <div className="h-12 bg-white/20 rounded-lg animate-pulse mx-auto max-w-48"></div>
        </div>
      </div>
    );
  }

  const t = getTranslation(lang);

  return (
    <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg p-6 shadow-lg">
      <div className="text-center">
        <div className="bg-white text-emerald-600 px-4 py-2 rounded-full text-sm font-medium inline-block mb-4">
          🎁 {t.banner.freePdf}
        </div>
        <h2 className="text-2xl font-bold mb-3">{t.banner.title}</h2>
        <p className="text-emerald-100 mb-6 leading-relaxed max-w-2xl mx-auto">
          {t.banner.description}
        </p>
        <button
          className="bg-white text-emerald-600 hover:bg-slate-50 px-6 py-3 rounded-lg font-medium transition-colors duration-200"
          onClick={(e) => e.preventDefault()}
        >
          {t.banner.downloadBtn}
        </button>
      </div>
    </div>
  );
}
