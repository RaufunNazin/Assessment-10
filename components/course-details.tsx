"use client";

import { BookOpen } from "lucide-react";
import type { AboutItem } from "@/types/product";

interface CourseDetailsProps {
  aboutItems: AboutItem[];
  lang: "en" | "bn";
}

export function CourseDetails({ aboutItems, lang }: CourseDetailsProps) {
  return (
    <section className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
      <div className="flex items-center gap-3 mb-8">
        <BookOpen className="w-6 h-6 text-emerald-600" />
        <h2 className="text-2xl font-bold text-slate-800">
          {lang === "bn" ? "কোর্স সম্পর্কে বিস্তারিত" : "Course details"}
        </h2>
      </div>

      <div className="space-y-8">
        {aboutItems.map((item) => (
          <div key={item.id}>
            <div
              className="mb-4"
              dangerouslySetInnerHTML={{ __html: item.title }}
            />
            <div
              className="prose max-w-none text-slate-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: item.description }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
