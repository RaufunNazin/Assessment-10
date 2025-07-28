"use client";

import { useState } from "react";
import { Play, Clock, Lock, Eye } from "lucide-react";
import type { Medium } from "@/types/product";

interface ContentPreviewProps {
  media: Medium[];
  lang: "en" | "bn";
}

export function ContentPreview({ media, lang }: ContentPreviewProps) {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const texts = {
    en: {
      title: "Content Preview",
      subtitle: "Get a glimpse of what you'll learn",
      watchPreview: "Watch Preview",
      duration: "Duration",
      free: "Free",
      premium: "Premium",
    },
    bn: {
      title: "কন্টেন্ট প্রিভিউ",
      subtitle: "দেখুন আপনি কী শিখবেন",
      watchPreview: "প্রিভিউ দেখুন",
      duration: "সময়কাল",
      free: "ফ্রি",
      premium: "প্রিমিয়াম",
    },
  };

  const t = texts[lang];

  const previewVideos = media.filter(
    (item) => item.name === "preview_gallery" && item.resource_type === "video"
  );

  const mockLessons = [
    {
      id: "1",
      title: lang === "bn" ? "IELTS পরিচিতি" : "IELTS Introduction",
      duration: "15:30",
      isFree: true,
      videoId: previewVideos[0]?.resource_value || "zrlYnaZftEQ",
    },
    {
      id: "2",
      title: lang === "bn" ? "রিডিং কৌশল" : "Reading Strategies",
      duration: "22:45",
      isFree: true,
      videoId: previewVideos[1]?.resource_value || "30y-wlDtIIQ",
    },
    {
      id: "3",
      title:
        lang === "bn" ? "রাইটিং টাস্ক ১ ওভারভিউ" : "Writing Task 1 Overview",
      duration: "18:20",
      isFree: false,
      videoId: previewVideos[2]?.resource_value || "QBz8FX4GE_w",
    },
    {
      id: "4",
      title: lang === "bn" ? "লিসেনিং কৌশল" : "Listening Techniques",
      duration: "25:10",
      isFree: false,
      videoId: previewVideos[3]?.resource_value || "AvB2ibYd1z4",
    },
  ];

  return (
    <section className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Eye className="w-6 h-6 text-emerald-600" />
          <h2 className="text-2xl font-bold text-slate-800">{t.title}</h2>
        </div>
        <p className="text-slate-600">{t.subtitle}</p>
      </div>

      {selectedVideo && (
        <div className="mb-8">
          <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black">
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              title="Course Preview"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-4">
        {mockLessons.map((lesson, index) => (
          <div
            key={lesson.id}
            className="border border-slate-200 rounded-lg p-4 hover:border-emerald-200 hover:shadow-md transition-all duration-300"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-start gap-4">
              <div className="relative flex-shrink-0">
                <div className="w-16 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                  {lesson.isFree ? (
                    <Play className="w-6 h-6 text-emerald-600" />
                  ) : (
                    <Lock className="w-6 h-6 text-slate-400" />
                  )}
                </div>
                <span
                  className={`absolute -top-2 -right-2 px-2 py-1 text-xs font-medium rounded-full ${
                    lesson.isFree
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {lesson.isFree ? t.free : t.premium}
                </span>
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-slate-800 mb-2 line-clamp-2">
                  {lesson.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                  <Clock className="w-4 h-4" />
                  <span>{lesson.duration}</span>
                </div>

                {lesson.isFree && (
                  <button
                    onClick={() => setSelectedVideo(lesson.videoId)}
                    className="text-emerald-600 hover:text-emerald-700 text-sm font-medium transition-colors duration-200"
                  >
                    {t.watchPreview}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
