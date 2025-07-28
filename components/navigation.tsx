"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"
import { getTranslation } from "@/lib/localization"

interface NavigationProps {
  lang: "en" | "bn"
}

const dropdownItems = {
  courses: {
    en: [
      "IELTS Course",
      "Spoken English",
      "Email Marketing",
      "Complete Grammar",
      "Academic Writing",
      "Business English",
    ],
    bn: ["IELTS কোর্স", "স্পোকেন ইংলিশ", "ইমেইল মার্কেটিং", "কমপ্লিট গ্রামার", "একাডেমিক রাইটিং", "বিজনেস ইংলিশ"],
  },
  skills: {
    en: [
      "Programming",
      "Web Development",
      "Digital Marketing",
      "Graphic Design",
      "Data Science",
      "Mobile App Development",
    ],
    bn: ["প্রোগ্রামিং", "ওয়েব ডেভেলপমেন্ট", "ডিজিটাল মার্কেটিং", "গ্রাফিক ডিজাইন", "ডেটা সাইন্স", "মোবাইল অ্যাপ ডেভেলপমেন্ট"],
  },
  more: {
    en: ["About Us", "Blog", "Success Stories", "Help Center", "Contact", "Community"],
    bn: ["আমাদের সম্পর্কে", "ব্লগ", "সাফল্যের গল্প", "হেল্প সেন্টার", "যোগাযোগ", "কমিউনিটি"],
  },
}

export function Navigation({ lang }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const t = getTranslation(lang)

  const menuItems = [
    { label: t.nav.courses, href: `/${lang}/courses`, hasDropdown: true, key: "courses" },
    { label: t.nav.skills, href: `/${lang}/skills`, hasDropdown: true, key: "skills" },
    { label: t.nav.admissions, href: `/${lang}/admissions`, hasDropdown: false, key: "admissions" },
    { label: t.nav.jobs, href: `/${lang}/jobs`, hasDropdown: false, key: "jobs" },
    { label: t.nav.more, href: `/${lang}/more`, hasDropdown: true, key: "more" },
  ]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        {/* Single Navigation Bar */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-8">
            <Link href={`/${lang}`} className="flex items-center gap-2">
              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">10</span>
              </div>
              <span className="text-lg font-bold text-slate-800">10MS</span>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-6" ref={dropdownRef}>
              {menuItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.key)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className="flex items-center gap-1 text-slate-700 hover:text-emerald-600 font-medium transition-colors py-2"
                    onClick={(e) => e.preventDefault()}
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.key ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>

                  {/* Dropdown Menu */}
                  {item.hasDropdown && activeDropdown === item.key && (
                    <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-slate-200 py-2 animate-in slide-in-from-top-2 duration-200">
                      {dropdownItems[item.key as keyof typeof dropdownItems][lang]?.map((dropdownItem, index) => (
                        <button
                          key={index}
                          onClick={(e) => e.preventDefault()}
                          className="block w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-emerald-600 transition-colors"
                        >
                          {dropdownItem}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center bg-slate-100 rounded-lg px-3 py-2">
              <Search className="w-4 h-4 text-slate-400 mr-2" />
              <input
                type="text"
                placeholder={lang === "bn" ? "কোর্স খুঁজুন..." : "Search courses..."}
                className="bg-transparent outline-none text-sm w-48 text-slate-700 placeholder-slate-500"
              />
            </div>

            <LanguageSwitcher currentLang={lang} />

            <Button
              size="sm"
              className="bg-emerald-500 hover:bg-emerald-600 text-white"
              onClick={(e) => e.preventDefault()}
            >
              {t.nav.login}
            </Button>

            <button
              className="lg:hidden p-2 text-slate-600 hover:text-slate-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 py-4 animate-in slide-in-from-top-2 duration-200">
            <nav className="space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={(e) => e.preventDefault()}
                  className="block w-full text-left text-slate-700 hover:text-emerald-600 font-medium py-2"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
