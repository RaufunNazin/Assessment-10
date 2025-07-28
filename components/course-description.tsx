"use client"

import { useState } from "react"
import { BookOpen, Target, Users, Award, Clock, Globe } from "lucide-react"

interface CourseDescriptionProps {
  description: string
  lang: "en" | "bn"
}

export function CourseDescription({ description, lang }: CourseDescriptionProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const descriptionItems = [
    {
      icon: BookOpen,
      title: lang === "bn" ? "সম্পূর্ণ IELTS প্রস্তুতি" : "Complete IELTS Preparation",
      text:
        lang === "bn"
          ? "Academic এবং General Training উভয় মডিউলের জন্য"
          : "For both Academic and General Training modules",
    },
    {
      icon: Target,
      title: lang === "bn" ? "লক্ষ্য অর্জন" : "Target Achievement",
      text: lang === "bn" ? "৭+ ব্যান্ড স্কোর অর্জনের কৌশল" : "Strategies to achieve 7+ band score",
    },
    {
      icon: Users,
      title: lang === "bn" ? "বিশেষজ্ঞ গাইডেন্স" : "Expert Guidance",
      text: lang === "bn" ? "অভিজ্ঞ ইন্সট্রাক্টরের সাথে শিখুন" : "Learn with experienced instructor",
    },
    {
      icon: Clock,
      title: lang === "bn" ? "নমনীয় সময়সূচী" : "Flexible Schedule",
      text: lang === "bn" ? "নিজের সুবিধামতো সময়ে কোর্স করুন" : "Study at your own convenient time",
    },
    {
      icon: Award,
      title: lang === "bn" ? "প্রমাণিত ফলাফল" : "Proven Results",
      text: lang === "bn" ? "হাজারো শিক্ষার্থীর সফলতার গল্প" : "Success stories of thousands of students",
    },
    {
      icon: Globe,
      title: lang === "bn" ? "আন্তর্জাতিক মান" : "International Standard",
      text: lang === "bn" ? "বিশ্বমানের শিক্ষা পদ্ধতি" : "World-class education methodology",
    },
  ]

  return (
    <section className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
      <div className="flex items-center gap-3 mb-8">
        <BookOpen className="w-6 h-6 text-emerald-600" />
        <h2 className="text-2xl font-bold text-slate-800">{lang === "bn" ? "কোর্স সম্পর্কে" : "About This Course"}</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {descriptionItems.map((item, index) => (
          <div
            key={index}
            className={`flex items-start gap-4 p-4 rounded-lg transition-colors duration-300 ${
              hoveredIndex === index ? "bg-emerald-50" : "bg-slate-50"
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="bg-emerald-100 rounded-lg p-3 flex-shrink-0">
              <item.icon className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-slate-50 rounded-lg p-6">
        <div
          className="prose max-w-none text-slate-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </section>
  )
}
