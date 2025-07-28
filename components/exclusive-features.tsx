"use client";

import { useState } from "react";
import { Star, Award, Users, Clock, Video, FileText } from "lucide-react";

interface ExclusiveFeaturesProps {
  lang: "en" | "bn";
}

export function ExclusiveFeatures({ lang }: ExclusiveFeaturesProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const texts = {
    en: {
      title: "Course Exclusive Features",
      subtitle: "What makes this course special",
      features: [
        {
          icon: Video,
          title: "50+ HD Video Lectures",
          description: "High-quality video content with clear explanations",
        },
        {
          icon: FileText,
          title: "38 Lecture Sheets",
          description: "Comprehensive study materials and practice sheets",
        },
        {
          icon: Users,
          title: "Live Doubt Solving",
          description: "Weekly live sessions with expert instructors",
        },
        {
          icon: Clock,
          title: "Lifetime Access",
          description: "Learn at your own pace with unlimited access",
        },
        {
          icon: Award,
          title: "Mock Tests",
          description: "10 Reading & 10 Listening practice tests",
        },
        {
          icon: Star,
          title: "Free Hardcopy Book",
          description: "Premium study book delivered to your doorstep",
        },
      ],
    },
    bn: {
      title: "কোর্স এক্সক্লুসিভ ফিচার",
      subtitle: "এই কোর্সটিকে বিশেষ করে তোলে যা",
      features: [
        {
          icon: Video,
          title: "৫০+ HD ভিডিও লেকচার",
          description: "উচ্চ মানের ভিডিও কন্টেন্ট স্পষ্ট ব্যাখ্যা সহ",
        },
        {
          icon: FileText,
          title: "৩৮টি লেকচার শিট",
          description: "বিস্তৃত স্টাডি ম্যাটেরিয়াল এবং প্র্যাকটিস শিট",
        },
        {
          icon: Users,
          title: "লাইভ ডাউট সলভিং",
          description: "বিশেষজ্ঞ ইন্সট্রাক্টরদের সাথে সাপ্তাহিক লাইভ সেশন",
        },
        {
          icon: Clock,
          title: "লাইফটাইম এক্সেস",
          description: "নিজের গতিতে শিখুন সীমাহীন এক্সেসের সাথে",
        },
        {
          icon: Award,
          title: "মক টেস্ট",
          description: "১০টি রিডিং এবং ১০টি লিসেনিং প্র্যাকটিস টেস্ট",
        },
        {
          icon: Star,
          title: "ফ্রি হার্ডকপি বই",
          description: "প্রিমিয়াম স্টাডি বই আপনার দোরগোড়ায় পৌঁছে দেওয়া",
        },
      ],
    },
  };

  const t = texts[lang];

  return (
    <section className="bg-gradient-to-br from-emerald-50 to-white rounded-lg p-8 shadow-sm border border-emerald-100">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Star className="w-6 h-6 text-emerald-600" />
          <h2 className="text-2xl font-bold text-slate-800">{t.title}</h2>
        </div>
        <p className="text-slate-600">{t.subtitle}</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {t.features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-6 border border-slate-100 hover:border-emerald-200 hover:shadow-lg transition-all duration-300"
            style={{ animationDelay: `${index * 100}ms` }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="flex flex-col items-center text-center">
              <div
                className={`p-4 rounded-full mb-4 transition-all duration-300 ${
                  hoveredIndex === index
                    ? "bg-emerald-500 shadow-lg"
                    : "bg-emerald-100"
                }`}
              >
                <feature.icon
                  className={`w-8 h-8 transition-colors duration-300 ${
                    hoveredIndex === index ? "text-white" : "text-emerald-600"
                  }`}
                />
              </div>
              <h3
                className={`font-semibold mb-3 transition-colors duration-300 ${
                  hoveredIndex === index ? "text-emerald-700" : "text-slate-800"
                }`}
              >
                {feature.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
