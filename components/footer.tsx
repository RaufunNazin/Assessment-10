"use client"

import { useState, useEffect } from "react"
import { Facebook, Youtube, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react"
import { getTranslation } from "@/lib/localization"

interface FooterProps {
  lang: "en" | "bn"
}

export function Footer({ lang }: FooterProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <footer className="bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">10</span>
                </div>
                <span className="text-xl font-bold text-slate-800">Minute School</span>
              </div>
              <div className="h-4 bg-slate-200 rounded animate-pulse mb-6"></div>
              <div className="space-y-3">
                <div className="h-4 bg-slate-200 rounded animate-pulse w-32"></div>
                <div className="space-y-2">
                  <div className="h-10 bg-slate-200 rounded animate-pulse"></div>
                  <div className="h-10 bg-slate-200 rounded animate-pulse"></div>
                </div>
              </div>
            </div>
            {[...Array(4)].map((_, i) => (
              <div key={i}>
                <div className="h-6 bg-slate-200 rounded animate-pulse mb-4 w-24"></div>
                <div className="space-y-2">
                  {[...Array(5)].map((_, j) => (
                    <div key={j} className="h-4 bg-slate-200 rounded animate-pulse"></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </footer>
    )
  }

  const t = getTranslation(lang)

  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">10</span>
              </div>
              <span className="text-xl font-bold text-slate-800">Minute School</span>
            </div>
            <p className="text-slate-600 text-sm mb-6">{t.footer.social.description}</p>

            <div className="space-y-3">
              <p className="text-sm font-semibold text-slate-800">
                {lang === "bn" ? "অ্যাপ ডাউনলোড করুন" : "Download Our App"}
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href="https://play.google.com/store/apps/details?id=com.tenminuteschool.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <img
                    src="/images/google-play-badge.png"
                    alt="Get it on Google Play"
                    className="h-10 w-auto hover:opacity-80 transition-opacity"
                  />
                </a>
                <a
                  href="https://apps.apple.com/app/10-minute-school/id1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <img
                    src="/images/app-store-badge.png"
                    alt="Download on the App Store"
                    className="h-10 w-auto hover:opacity-80 transition-opacity"
                  />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-slate-800">{t.footer.company.title}</h3>
            <ul className="space-y-2">
              {t.footer.company.links.map((link, index) => (
                <li key={index}>
                  <button
                    className="text-slate-600 hover:text-emerald-600 text-sm transition-colors duration-200 text-left"
                    onClick={(e) => e.preventDefault()}
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-slate-800">{t.footer.courses.title}</h3>
            <ul className="space-y-2">
              {t.footer.courses.links.map((link, index) => (
                <li key={index}>
                  <button
                    className="text-slate-600 hover:text-emerald-600 text-sm transition-colors duration-200 text-left"
                    onClick={(e) => e.preventDefault()}
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-slate-800">{t.footer.support.title}</h3>
            <ul className="space-y-2">
              {t.footer.support.links.map((link, index) => (
                <li key={index}>
                  <button
                    className="text-slate-600 hover:text-emerald-600 text-sm transition-colors duration-200 text-left"
                    onClick={(e) => e.preventDefault()}
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-slate-800">{t.footer.contact.title}</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-emerald-600" />
                <span className="text-slate-600">{t.footer.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-emerald-600" />
                <span className="text-slate-600">{t.footer.contact.email}</span>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 text-emerald-600 mt-0.5" />
                <span className="text-slate-600">{t.footer.contact.address}</span>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-slate-800">{t.footer.social.title}</h4>
              <div className="flex gap-3">
                <button
                  className="bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  onClick={(e) => e.preventDefault()}
                >
                  <Facebook className="w-4 h-4 text-white" />
                </button>
                <button
                  className="bg-red-600 p-2 rounded-lg hover:bg-red-700 transition-colors duration-200"
                  onClick={(e) => e.preventDefault()}
                >
                  <Youtube className="w-4 h-4 text-white" />
                </button>
                <button
                  className="bg-pink-600 p-2 rounded-lg hover:bg-pink-700 transition-colors duration-200"
                  onClick={(e) => e.preventDefault()}
                >
                  <Instagram className="w-4 h-4 text-white" />
                </button>
                <button
                  className="bg-blue-400 p-2 rounded-lg hover:bg-blue-500 transition-colors duration-200"
                  onClick={(e) => e.preventDefault()}
                >
                  <Twitter className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-600 text-sm">{t.footer.social.copyright}</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            {t.footer.legal.links.map((link, index) => (
              <button
                key={index}
                className="text-slate-600 hover:text-emerald-600 text-sm transition-colors duration-200"
                onClick={(e) => e.preventDefault()}
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
