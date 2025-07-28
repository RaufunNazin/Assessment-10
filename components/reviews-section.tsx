"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import type { Testimonial } from "@/types/product";

interface ReviewsSectionProps {
  testimonials: Testimonial[];
  lang: "en" | "bn";
}

export function ReviewsSection({ testimonials, lang }: ReviewsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [expandedReviews, setExpandedReviews] = useState<Set<string>>(
    new Set()
  );

  const nextReview = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 2) % testimonials.length);
      setIsTransitioning(false);
    }, 300);
  };

  const prevReview = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(
        (prev) => (prev - 2 + testimonials.length) % testimonials.length
      );
      setIsTransitioning(false);
    }, 300);
  };

  const toggleExpanded = (reviewId: string) => {
    const newExpanded = new Set(expandedReviews);
    if (newExpanded.has(reviewId)) {
      newExpanded.delete(reviewId);
    } else {
      newExpanded.add(reviewId);
    }
    setExpandedReviews(newExpanded);
  };

  const truncateText = (text: string, maxLength = 150) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  const currentReviews = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
  ];

  const texts = {
    en: {
      title: "Student Success Stories",
      subtitle: "See what our students achieved",
      readMore: "Read more",
      readLess: "Read less",
      noVideo: "Student Review",
    },
    bn: {
      title: "শিক্ষার্থীদের সাফল্যের গল্প",
      subtitle: "দেখুন আমাদের শিক্ষার্থীরা কী অর্জন করেছেন",
      readMore: "আরও পড়ুন",
      readLess: "কম পড়ুন",
      noVideo: "শিক্ষার্থীর মতামত",
    },
  };

  const t = texts[lang];

  return (
    <section className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">{t.title}</h2>
        <p className="text-slate-600">{t.subtitle}</p>
      </div>

      <div className="relative overflow-hidden">
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={prevReview}
            disabled={isTransitioning}
            className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 transition-all duration-200 disabled:opacity-50 hover:shadow-md"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-2">
            {Array.from({ length: Math.ceil(testimonials.length / 2) }).map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isTransitioning) {
                      setIsTransitioning(true);
                      setTimeout(() => {
                        setCurrentIndex(index * 2);
                        setIsTransitioning(false);
                      }, 300);
                    }
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    Math.floor(currentIndex / 2) === index
                      ? "bg-emerald-600 shadow-md"
                      : "bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              )
            )}
          </div>

          <button
            onClick={nextReview}
            disabled={isTransitioning}
            className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 transition-all duration-200 disabled:opacity-50 hover:shadow-md"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="relative h-auto">
          <div
            className={`grid md:grid-cols-2 gap-8 transition-all duration-300 ease-in-out ${
              isTransitioning
                ? "opacity-0 transform translate-x-4"
                : "opacity-100 transform translate-x-0"
            }`}
          >
            {currentReviews.map((review, index) => (
              <div
                key={review.id}
                className="space-y-6"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {review.video_url && review.thumb && (
                  <div className="relative aspect-video rounded-lg overflow-hidden bg-slate-200 group cursor-pointer hover:shadow-lg transition-all duration-300">
                    <img
                      src={review.thumb || "/placeholder.svg"}
                      alt="Review video"
                      className="w-full h-full object-cover transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-40 transition-all duration-300">
                      <div className="bg-white rounded-full p-4 transition-all duration-300 group-hover:shadow-xl">
                        <svg
                          className="w-6 h-6 text-slate-800 ml-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-4">
                  <img
                    src={review.profile_image || "/placeholder.svg"}
                    alt={review.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-slate-100 transition-all duration-300 hover:border-emerald-200"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-slate-800 transition-colors duration-200 hover:text-emerald-700">
                        {review.name}
                      </h3>
                      <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 hover:bg-emerald-200">
                        {review.description}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-emerald-400 text-emerald-400 transition-all duration-200 hover:fill-emerald-500"
                        />
                      ))}
                    </div>
                    <div className="text-slate-600 leading-relaxed">
                      {expandedReviews.has(review.id) ? (
                        <div>
                          <p>{review.testimonial}</p>
                          <button
                            onClick={() => toggleExpanded(review.id)}
                            className="text-emerald-600 hover:text-emerald-700 text-sm font-medium mt-2 transition-colors duration-200"
                          >
                            {t.readLess}
                          </button>
                        </div>
                      ) : (
                        <div>
                          <p>{truncateText(review.testimonial)}</p>
                          {review.testimonial.length > 150 && (
                            <button
                              onClick={() => toggleExpanded(review.id)}
                              className="text-emerald-600 hover:text-emerald-700 text-sm font-medium mt-2 transition-colors duration-200"
                            >
                              {t.readMore}
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
