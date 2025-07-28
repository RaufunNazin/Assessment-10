"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Play, FileText, Clock } from "lucide-react"
import { AnimatedHeader } from "@/components/animated-header"
import { getTranslation } from "@/lib/localization"

interface CourseContentsProps {
  lang: "en" | "bn"
}

export function CourseContents({ lang }: CourseContentsProps) {
  const [openModules, setOpenModules] = useState<number[]>([0])
  const [hoveredModule, setHoveredModule] = useState<number | null>(null)
  const t = getTranslation(lang)

  const toggleModule = (index: number) => {
    setOpenModules((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <section className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
      <AnimatedHeader
        title={lang === "bn" ? "কোর্স কন্টেন্ট" : "Course Contents"}
        subtitle={lang === "bn" ? "বিস্তারিত সিলেবাস দেখুন" : "Explore the detailed curriculum"}
        icon={<Play className="w-6 h-6" />}
      />

      <div className="mb-6 p-4 bg-slate-50 rounded-lg">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="transition-transform duration-300 hover:scale-105">
            <div className="text-2xl font-bold text-emerald-600">5</div>
            <div className="text-sm text-slate-600">{lang === "bn" ? "সেকশন" : "Sections"}</div>
          </div>
          <div className="transition-transform duration-300 hover:scale-105">
            <div className="text-2xl font-bold text-emerald-600">50+</div>
            <div className="text-sm text-slate-600">{lang === "bn" ? "লেকচার" : "Lectures"}</div>
          </div>
          <div className="transition-transform duration-300 hover:scale-105">
            <div className="text-2xl font-bold text-emerald-600">20h</div>
            <div className="text-sm text-slate-600">{lang === "bn" ? "মোট সময়" : "Total Duration"}</div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {t.details.modules.map((module, index) => (
          <div
            key={index}
            className={`border border-slate-200 rounded-lg overflow-hidden transition-all duration-300 ${
              hoveredModule === index ? "shadow-lg border-emerald-200" : "hover:shadow-md"
            }`}
            onMouseEnter={() => setHoveredModule(index)}
            onMouseLeave={() => setHoveredModule(null)}
          >
            <button
              onClick={() => toggleModule(index)}
              className={`w-full p-6 text-left flex items-center justify-between transition-all duration-200 ${
                hoveredModule === index ? "bg-emerald-50" : "hover:bg-slate-50"
              }`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    hoveredModule === index
                      ? "bg-emerald-500 scale-110 shadow-lg"
                      : "bg-emerald-100 hover:bg-emerald-200"
                  }`}
                >
                  <span
                    className={`font-semibold transition-colors duration-300 ${
                      hoveredModule === index ? "text-white" : "text-emerald-600"
                    }`}
                  >
                    {index + 1}
                  </span>
                </div>
                <div>
                  <h3
                    className={`font-semibold text-lg transition-colors duration-300 ${
                      hoveredModule === index ? "text-emerald-700" : "text-slate-800"
                    }`}
                  >
                    {module.title}
                  </h3>
                  <p className="text-sm text-slate-500">{module.lessons.length} lessons</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {openModules.includes(index) ? (
                  <ChevronUp
                    className={`w-5 h-5 transition-all duration-200 ${
                      hoveredModule === index ? "text-emerald-600 scale-110" : "text-emerald-600"
                    }`}
                  />
                ) : (
                  <ChevronDown
                    className={`w-5 h-5 transition-all duration-200 ${
                      hoveredModule === index ? "text-emerald-600 scale-110" : "text-slate-500"
                    }`}
                  />
                )}
              </div>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openModules.includes(index) ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 pb-6 border-t border-slate-100">
                <ul className="space-y-3 mt-4">
                  {module.lessons.map((lesson, lessonIndex) => (
                    <li
                      key={lessonIndex}
                      className="flex items-center gap-4 text-slate-600 hover:text-slate-800 transition-all duration-200 hover:translate-x-2 animate-in slide-in-from-left-2"
                      style={{ animationDelay: `${lessonIndex * 50}ms` }}
                    >
                      <div className="flex items-center gap-2">
                        {lesson.includes("Video") ? (
                          <Play className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <FileText className="w-4 h-4 text-emerald-600" />
                        )}
                        <Clock className="w-3 h-3 text-slate-400" />
                        <span className="text-xs text-slate-400">5 min</span>
                      </div>
                      <span className="flex-1">{lesson}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
