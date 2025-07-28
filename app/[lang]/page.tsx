"use client"

import { useState, useEffect } from "react"
import { fetchProductData } from "@/lib/api"
import { VideoPlayer } from "@/components/video-player"
import { InstructorHeroCard } from "@/components/instructor-hero-card"
import { CourseSidebar } from "@/components/course-sidebar"
import { CourseBanner } from "@/components/course-banner"
import { CourseFeatures } from "@/components/course-features"
import { WhatYouLearn } from "@/components/what-you-learn"
import { CourseDetails } from "@/components/course-details"
import { FAQSection } from "@/components/faq-section"
import { ReviewsSection } from "@/components/reviews-section"
import { LoadingScreen } from "@/components/loading-screen"
import { Star } from "lucide-react"
import type { ProductData, Section, Instructor, Feature, Pointer, AboutItem, Testimonial, FAQ } from "@/types/product"
import { ContentPreview } from "@/components/content-preview"
import { ExclusiveFeatures } from "@/components/exclusive-features"

interface PageProps {
  params: Promise<{ lang: "en" | "bn" }>
}

export default function ProductPage({ params }: PageProps) {
  const [lang, setLang] = useState<"en" | "bn">("en")
  const [product, setProduct] = useState<ProductData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadData = async () => {
      try {
        const resolvedParams = await params
        setLang(resolvedParams.lang)

        const response = await fetchProductData(resolvedParams.lang)
        if (response.status_code !== 200) {
          throw new Error("Failed to fetch product data")
        }
        setProduct(response.data)
      } catch (err) {
        console.error("Error loading product:", err)
        setError("Failed to load course data")
      } finally {
        setIsLoading(false)
      }
    }

    loadData()
  }, [params])

  if (isLoading) {
    return <LoadingScreen />
  }

  if (error || !product) {
    return (
      <div className="container mx-auto px-6 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Error Loading Course</h1>
          <p className="text-slate-600">Please try again later.</p>
        </div>
      </div>
    )
  }

  const instructorSection = product.sections.find((s: Section) => s.type === "instructors")
  const featuresSection = product.sections.find((s: Section) => s.type === "features")
  const pointersSection = product.sections.find((s: Section) => s.type === "pointers")
  const aboutSection = product.sections.find((s: Section) => s.type === "about")
  const testimonialsSection = product.sections.find((s: Section) => s.type === "testimonials")
  const faqSection = product.sections.find((s: Section) => s.type === "faq")

  const trailerVideo = product.media.find((m) => m.name === "preview_gallery" && m.resource_type === "video")

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section with Lottie Animation */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white relative overflow-hidden">
        {/* Lottie Animation Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-20 right-20 w-24 h-24 bg-emerald-300 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-emerald-200 rounded-full animate-ping"></div>
          <div className="absolute bottom-10 right-1/3 w-20 h-20 bg-white rounded-full animate-pulse"></div>
        </div>

        <div className="container mx-auto px-6 py-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-6">{product.title}</h1>
              <div className="flex items-center gap-2 mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < 4 ? "fill-white text-white" : "fill-slate-400 text-slate-400"}`}
                    />
                  ))}
                </div>
                <span className="text-sm opacity-90">(4.0/5 - 81.8% positive reviews)</span>
              </div>
              <div
                className="text-lg opacity-90 mb-8 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            </div>
            <div>
              {trailerVideo && (
                <VideoPlayer
                  videoId={trailerVideo.resource_value}
                  thumbnail={trailerVideo.thumbnail_url}
                  title="Course Trailer"
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-10">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            {/* Instructor Hero Card */}
            {instructorSection && instructorSection.values.length > 0 && (
              <InstructorHeroCard instructor={instructorSection.values[0] as Instructor} lang={lang} />
            )}

            {/* Course Banner */}
            <CourseBanner lang={lang} />

            {/* What You'll Learn */}
            {pointersSection && pointersSection.values.length > 0 && (
              <WhatYouLearn pointers={pointersSection.values as Pointer[]} lang={lang} />
            )}

            {/* Course Features */}
            {featuresSection && featuresSection.values.length > 0 && (
              <CourseFeatures features={featuresSection.values as Feature[]} lang={lang} />
            )}

            {/* Content Preview */}
            <ContentPreview media={product.media} lang={lang} />

            {/* Exclusive Features */}
            <ExclusiveFeatures lang={lang} />

            {/* Course Details */}
            {aboutSection && aboutSection.values.length > 0 && (
              <CourseDetails aboutItems={aboutSection.values as AboutItem[]} lang={lang} />
            )}

            {/* Reviews Section */}
            {testimonialsSection && testimonialsSection.values.length > 0 && (
              <ReviewsSection testimonials={testimonialsSection.values as Testimonial[]} lang={lang} />
            )}

            {/* FAQ Section */}
            {faqSection && faqSection.values.length > 0 && <FAQSection faqs={faqSection.values as FAQ[]} lang={lang} />}
          </div>

          {/* Sidebar - Proper sticky positioning */}
          <div className="lg:sticky lg:top-20 lg:h-fit">
            <CourseSidebar
              ctaText={product.cta_text.name}
              checklist={product.checklist}
              media={product.media}
              lang={lang}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
