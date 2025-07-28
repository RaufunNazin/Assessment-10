"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ChecklistItem, Medium } from "@/types/product";

interface CourseSidebarProps {
  ctaText: string;
  checklist: ChecklistItem[];
  media: Medium[];
  lang: "en" | "bn";
}

export function CourseSidebar({
  ctaText,
  checklist,
  media,
  lang,
}: CourseSidebarProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const courseImages = media
    .filter(
      (item) =>
        item.resource_type === "image" && item.name === "preview_gallery"
    )
    .map((item) => item.resource_value);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % courseImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + courseImages.length) % courseImages.length
    );
  };

  // Price localization
  const priceTexts = {
    en: {
      originalPrice: "৳2000",
      currentPrice: "৳1000",
      discount: "50% OFF",
      whatYouGet: "What you'll get:",
    },
    bn: {
      originalPrice: "৳২০০০",
      currentPrice: "৳১০০০",
      discount: "৫০% ছাড়",
      whatYouGet: "এই কোর্সে যা থাকছে:",
    },
  };

  // Checklist item translations
  const checklistTranslations = {
    en: {
      "কোর্সটি করেছেন ৩০০০+ জন": "Course for 3000+ students",
      "সময় লাগবে ৫০ ঘন্টা": "Lifetime access",
      "৫০টি ভিডিও লেকচার": "50+ video lectures",
      "১০টি লিখিত এবং ১০টি শিলনীর মক টেস্ট":
        "10+ assignments and practice tests",
      "২০টি লেকচার শিট": "20+ certificates",
      "১টি ফ্রি হ্যান্ডনোট বই": "Mobile app access",
      "ফেসবুক সাপোর্ট গ্রুপ": "Expert support",
      "লাইফটাইম এক্সেস": "Community access",
    },
    bn: {
      "Course for 3000+ students": "কোর্সটি করেছেন ৩০০০+ জন",
      "Lifetime access": "সময় লাগবে ৫০ ঘন্টা",
      "50+ video lectures": "৫০টি ভিডিও লেকচার",
      "10+ assignments and practice tests":
        "১০টি লিখিত এবং ১০টি শিলনীর মক টেস্ট",
      "20+ certificates": "২০টি লেকচার শিট",
      "Mobile app access": "১টি ফ্রি হ্যান্ডনোট বই",
      "Expert support": "ফেসবুক সাপোর্ট গ্রুপ",
      "Community access": "লাইফটাইম এক্সেস",
    },
  };

  const translateChecklistItem = (text: string) => {
    return checklistTranslations[lang][text] || text;
  };

  const prices = priceTexts[lang];

  return (
    <Card className="shadow-lg border-slate-200">
      <CardContent className="p-0">
        {courseImages.length > 0 && (
          <div className="relative">
            <img
              src={courseImages[currentImageIndex] || "/placeholder.svg"}
              alt="Course preview"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            {courseImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70 transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                  {courseImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentImageIndex ? "bg-white" : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        <div className="p-6">
          <div className="text-center mb-6">
            <div className="mb-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-lg text-slate-500 line-through">
                  {prices.originalPrice}
                </span>
                <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                  {prices.discount}
                </span>
              </div>
              <div className="text-3xl font-bold text-slate-800">
                {prices.currentPrice}
              </div>
            </div>
            <Button
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 transition-colors duration-200"
              onClick={(e) => e.preventDefault()}
            >
              {ctaText}
            </Button>
          </div>

          <div className="space-y-3 md:space-y-4">
            <h3 className="font-semibold text-slate-800 text-sm md:text-base">
              {prices.whatYouGet}
            </h3>
            {checklist.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-2 md:gap-3 text-xs md:text-sm text-slate-600 hover:text-slate-800 transition-colors duration-200"
              >
                <img
                  src={item.icon || "/placeholder.svg"}
                  alt=""
                  className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0"
                />
                <span className="leading-relaxed">
                  {translateChecklistItem(item.text)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
