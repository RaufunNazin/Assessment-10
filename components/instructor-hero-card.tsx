"use client"

import { useState } from "react"
import { Award } from "lucide-react"
import type { Instructor } from "@/types/product"

interface InstructorHeroCardProps {
  instructor: Instructor
  lang: "en" | "bn"
}

export function InstructorHeroCard({ instructor, lang }: InstructorHeroCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Parse qualifications from HTML description
  const parseQualifications = (htmlDescription: string) => {
    const tempDiv = document.createElement("div")
    tempDiv.innerHTML = htmlDescription
    const text = tempDiv.textContent || tempDiv.innerText || ""
    return text
      .split(";")
      .filter((qual) => qual.trim().length > 0)
      .slice(0, 2)
  }

  const qualifications = parseQualifications(instructor.description)
  const ieltsScore = instructor.description.includes("IELTS: 8.5") ? "8.5" : "8.5"

  return (
    <section className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
      <div className="flex items-center gap-2 mb-4">
        <Award className="w-5 h-5 text-emerald-600" />
        <h2 className="text-xl font-bold text-slate-800">{lang === "bn" ? "আপনার ইন্সট্রাক্টর" : "Your Instructor"}</h2>
      </div>

      <div
        className="flex items-center gap-6"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Instructor Image */}
        <div className="relative flex-shrink-0">
          <div
            className={`relative overflow-hidden rounded-xl transition-all duration-500 ease-out ${
              isHovered ? "scale-105 shadow-lg" : "scale-100 shadow-md"
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

          {/* Floating IELTS Badge */}
          <div
            className={`absolute -top-1 -right-1 bg-emerald-500 text-white px-2 py-1 rounded-full text-xs font-bold transition-all duration-300 ${
              isHovered ? "scale-110 rotate-3" : "scale-100 rotate-0"
            }`}
          >
            {ieltsScore}
          </div>
        </div>

        {/* Instructor Details */}
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
  )
}
