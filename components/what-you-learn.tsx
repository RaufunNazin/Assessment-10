"use client";

import { useState } from "react";
import { Check, BookOpen } from "lucide-react";
import type { Pointer } from "@/types/product";

interface WhatYouLearnProps {
  pointers: Pointer[];
  lang: "en" | "bn";
}

export function WhatYouLearn({ pointers, lang }: WhatYouLearnProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
      <div className="flex items-center gap-3 mb-8">
        <BookOpen className="w-6 h-6 text-emerald-600" />
        <h2 className="text-2xl font-bold text-slate-800">
          {lang === "bn"
            ? "কোর্সটি করে যা শিখবেন"
            : "What you will learn by doing the course"}
        </h2>
      </div>

      <div className="space-y-6">
        {pointers.map((pointer, index) => (
          <div
            key={pointer.id}
            className={`flex items-start gap-5 p-4 rounded-lg transition-colors duration-300 ${
              hoveredIndex === index ? "bg-emerald-50" : "bg-slate-50"
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="bg-emerald-100 rounded-full p-3 mt-1 flex-shrink-0">
              <Check className="w-5 h-5 text-emerald-600" />
            </div>
            <div className="flex-1">
              <p className="text-slate-800 leading-relaxed">{pointer.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
