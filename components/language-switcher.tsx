"use client"

import { useRouter, usePathname } from "next/navigation"

interface LanguageSwitcherProps {
  currentLang: "en" | "bn"
}

export function LanguageSwitcher({ currentLang }: LanguageSwitcherProps) {
  const router = useRouter()
  const pathname = usePathname()

  const switchLanguage = (lang: "en" | "bn") => {
    if (lang === currentLang) return

    const newPath = pathname.replace(/^\/(en|bn)/, `/${lang}`)
    router.push(newPath)
  }

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-slate-600">EN</span>
      <div className="relative">
        <input
          type="checkbox"
          checked={currentLang === "bn"}
          onChange={(e) => switchLanguage(e.target.checked ? "bn" : "en")}
          className="sr-only"
          id="language-switch"
        />
        <label
          htmlFor="language-switch"
          className="flex items-center cursor-pointer w-12 h-6 bg-slate-200 rounded-full p-1 transition-colors duration-300 ease-in-out hover:bg-slate-300"
        >
          <div
            className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
              currentLang === "bn" ? "translate-x-6" : "translate-x-0"
            }`}
          />
        </label>
      </div>
      <span className="text-sm text-slate-600">বাং</span>
    </div>
  )
}
