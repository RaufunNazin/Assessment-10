"use client"

import { getTranslation } from "@/lib/localization"

interface CourseBannerProps {
  lang: "en" | "bn"
}

export function CourseBanner({ lang }: CourseBannerProps) {
  const t = getTranslation(lang)

  return (
    <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg p-8 shadow-lg">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="bg-white text-emerald-600 px-4 py-2 rounded-full text-sm font-medium inline-block mb-6">
            🎁 {t.banner.freePdf}
          </div>
          <h2 className="text-2xl font-bold mb-4">{t.banner.title}</h2>
          <p className="text-emerald-100 mb-6 leading-relaxed">{t.banner.description}</p>
          <button
            className="bg-white text-emerald-600 hover:bg-slate-50 px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            onClick={(e) => e.preventDefault()}
          >
            {t.banner.downloadBtn}
          </button>
        </div>
        <div className="relative">
          <img
            src="/placeholder.svg?height=300&width=400"
            alt="IELTS Success Strategies"
            className="rounded-lg shadow-lg w-full"
          />
          <div className="absolute -top-4 -right-4 bg-emerald-700 text-white px-3 py-2 rounded-full text-sm font-bold">
            7+ Score
          </div>
        </div>
      </div>
    </div>
  )
}
