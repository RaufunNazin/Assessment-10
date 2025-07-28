"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"
import type { FAQ } from "@/types/product"

interface FAQSectionProps {
  faqs: FAQ[]
  lang: "en" | "bn"
}

export function FAQSection({ faqs, lang }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
      <div className="flex items-center gap-3 mb-8">
        <HelpCircle className="w-6 h-6 text-emerald-600" />
        <h2 className="text-2xl font-bold text-slate-800">
          {lang === "bn" ? "সচরাচর জিজ্ঞাসা" : "Frequently Ask Questions"}
        </h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={faq.id}
            className="border border-slate-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md"
          >
            <button
              className="w-full p-4 text-left flex items-center justify-between hover:bg-slate-50 transition-colors duration-200"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-medium text-slate-800 pr-4">{faq.question}</span>
              <div className="flex-shrink-0">
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-emerald-600 transition-transform duration-200" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-500 transition-transform duration-200" />
                )}
              </div>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-4 pb-4 border-t border-slate-100">
                <div
                  className="text-slate-600 mt-3 leading-relaxed prose max-w-none"
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
