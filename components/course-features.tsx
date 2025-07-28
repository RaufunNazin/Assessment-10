"use client"

import { Award } from "lucide-react"
import type { Feature } from "@/types/product"

interface CourseFeaturesProps {
  features: Feature[]
  lang: "en" | "bn"
}

export function CourseFeatures({ features, lang }: CourseFeaturesProps) {
  const texts = {
    en: {
      title: "How the course is laid out",
    },
    bn: {
      title: "কোর্স কীভাবে সাজানো হয়েছে",
    },
  }

  const t = texts[lang]

  return (
    <section className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
      <div className="flex items-center gap-3 mb-8 animate-in slide-in-from-left-1 duration-500">
        <Award className="w-6 h-6 text-emerald-600" />
        <h2 className="text-2xl font-bold text-slate-800">{t.title}</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div
            key={feature.id}
            className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 hover:bg-emerald-50 transition-all duration-300 hover:shadow-md animate-in slide-in-from-bottom-1 duration-500"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="bg-emerald-100 rounded-lg p-3 flex-shrink-0 transition-all duration-300 hover:bg-emerald-200">
              <img src={feature.icon || "/placeholder.svg"} alt="" className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-2 transition-colors duration-200 hover:text-emerald-700">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">{feature.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
