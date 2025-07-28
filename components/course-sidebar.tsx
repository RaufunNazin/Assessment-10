"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import type { ChecklistItem, Medium } from "@/types/product"

interface CourseSidebarProps {
  ctaText: string
  checklist: ChecklistItem[]
  media: Medium[]
  lang: "en" | "bn"
}

export function CourseSidebar({ ctaText, checklist, media, lang }: CourseSidebarProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Filter images from media
  const courseImages = media
    .filter((item) => item.resource_type === "image" && item.name === "preview_gallery")
    .map((item) => item.resource_value)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % courseImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + courseImages.length) % courseImages.length)
  }

  return (
    <Card className="shadow-lg border-slate-200">
      <CardContent className="p-0">
        {/* Image Slider */}
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

        {/* Price Section */}
        <div className="p-6">
          <div className="text-center mb-6">
            <div className="mb-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-lg text-slate-500 line-through">৳২০০০</span>
                <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">50% OFF</span>
              </div>
              <div className="text-3xl font-bold text-slate-800">৳১০০০</div>
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
              {lang === "bn" ? "এই কোর্সে যা থাকছে:" : "What you'll get:"}
            </h3>
            {checklist.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-2 md:gap-3 text-xs md:text-sm text-slate-600 hover:text-slate-800 transition-colors duration-200"
              >
                <img src={item.icon || "/placeholder.svg"} alt="" className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                <span className="leading-relaxed">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
