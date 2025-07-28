"use client";

import { useState, useEffect } from "react";
import { Award } from "lucide-react";
import type { Instructor } from "@/types/product";

interface InstructorHeroCardProps {
  instructor: Instructor;
  lang: "en" | "bn";
}

export function InstructorHeroCard({
  instructor,
  lang,
}: InstructorHeroCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const parseQualifications = (htmlDescription: string) => {
    if (typeof window !== "undefined") {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = htmlDescription;
      const text = tempDiv.textContent || tempDiv.innerText || "";
      return text
        .split(";")
        .filter((qual) => qual.trim().length > 0)
        .slice(0, 2);
    }
    return htmlDescription
      .replace(/<[^>]*>/g, "")
      .split(";")
      .filter((qual) => qual.trim().length > 0)
      .slice(0, 2);
  };

  if (!mounted) {
    return (
      <section className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
        <div className="flex items-center gap-2 mb-4">
          <Award className="w-5 h-5 text-emerald-600" />
          <h2 className="text-xl font-bold text-slate-800">
            {lang === "bn" ? "আপনার ইন্সট্রাক্টর" : "Your Instructor"}
          </h2>
        </div>
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 bg-slate-200 rounded-xl animate-pulse"></div>
          <div className="flex-1 space-y-2">
            <div className="h-6 bg-slate-200 rounded animate-pulse"></div>
            <div className="h-4 bg-slate-200 rounded animate-pulse w-3/4"></div>
            <div className="h-4 bg-slate-200 rounded animate-pulse w-1/2"></div>
          </div>
        </div>
      </section>
    );
  }

  const qualifications = parseQualifications(instructor.description);
  const ieltsScore = instructor.description.includes("IELTS: 8.5")
    ? "8.5"
    : "8.5";

  return (
    <section className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
      <div className="flex items-center gap-2 mb-4">
        <Award className="w-5 h-5 text-emerald-600" />
        <h2 className="text-xl font-bold text-slate-800">
          {lang === "bn" ? "আপনার ইন্সট্রাক্টর" : "Your Instructor"}
        </h2>
      </div>

      <div
        className="flex items-center gap-6"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative flex-shrink-0">
          <div
            className={`relative overflow-hidden rounded-xl transition-all duration-500 ease-out ${
              isHovered ? "shadow-lg" : "shadow-md"
            }`}
          >
            <img
              src={instructor.image || "/placeholder.svg"}
              alt={instructor.name}
              className="w-20 h-20 object-cover transition-transform duration-700 ease-out"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-t from-emerald-600/20 to-transparent transition-opacity duration-500 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>

          <div className="absolute -top-1 -right-1 bg-emerald-500 text-white px-2 py-1 rounded-full text-xs font-bold transition-all duration-300">
            {ieltsScore}
          </div>
        </div>

        <div className="flex-1">
          <h3
            className={`text-lg font-bold mb-2 transition-colors duration-300 ${
              isHovered ? "text-emerald-700" : "text-slate-800"
            }`}
          >
            {instructor.name}
          </h3>
          <div className="space-y-1">
            {qualifications.map((qualification, index) => (
              <p
                key={index}
                className={`text-sm text-slate-600 transition-all duration-300 ${
                  isHovered ? "translate-x-1" : "translate-x-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {qualification.trim()}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
