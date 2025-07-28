"use client";

import { Award } from "lucide-react";
import type { Feature } from "@/types/product";

interface CourseFeaturesProps {
  features: Feature[];
  lang: "en" | "bn";
}

export function CourseFeatures({ features, lang }: CourseFeaturesProps) {
  const texts = {
    en: {
      title: "How the course is laid out",
    },
    bn: {
      title: "কোর্স কীভাবে সাজানো হয়েছে",
    },
  };

  // Fallback translations for common feature titles
  const featureTranslations = {
    en: {
      "কোর্সটি করেছেন ৩০০০+ জন": "3000+ students have taken this course",
      "সময় লাগবে ৫০ ঘন্টা": "Duration: 50 hours",
      "৫০টি ভিডিও লেকচার": "50 video lectures",
      "১০টি লিখিত এবং ১০টি শিলনীর মক টেস্ট":
        "10 written and 10 listening mock tests",
      "২০টি লেকচার শিট": "20 lecture sheets",
      "১টি ফ্রি হ্যান্ডনোট বই": "1 free handnote book",
      "ফেসবুক সাপোর্ট গ্রুপ": "Facebook support group",
      "লাইফটাইম এক্সেস": "Lifetime access",
    },
    bn: {
      "3000+ students have taken this course": "কোর্সটি করেছেন ৩০০০+ জন",
      "Duration: 50 hours": "সময় লাগবে ৫০ ঘন্টা",
      "50 video lectures": "৫০টি ভিডিও লেকচার",
      "10 written and 10 listening mock tests":
        "১০টি লিখিত এবং ১০টি শিলনীর মক টেস্ট",
      "20 lecture sheets": "২০টি লেকচার শিট",
      "1 free handnote book": "১টি ফ্রি হ্যান্ডনোট বই",
      "Facebook support group": "ফেসবুক সাপোর্ট গ্রুপ",
      "Lifetime access": "লাইফটাইম এক্সেস",
    },
  };

  const translateText = (text: string) => {
    return featureTranslations[lang][text] || text;
  };

  const t = texts[lang];

  return (
    <section className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
      <div className="flex items-center gap-3 mb-8">
        <Award className="w-6 h-6 text-emerald-600" />
        <h2 className="text-2xl font-bold text-slate-800">{t.title}</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div
            key={feature.id}
            className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 hover:bg-emerald-50 transition-all duration-300 hover:shadow-md"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="bg-emerald-100 rounded-lg p-3 flex-shrink-0 transition-all duration-300 hover:bg-emerald-200">
              <img
                src={feature.icon || "/placeholder.svg"}
                alt=""
                className="w-6 h-6"
              />
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-2 transition-colors duration-200 hover:text-emerald-700">
                {translateText(feature.title)}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {translateText(feature.subtitle)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
