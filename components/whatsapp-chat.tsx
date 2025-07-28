"use client"

import { MessageCircle } from "lucide-react"

interface WhatsAppChatProps {
  lang: "en" | "bn"
}

export function WhatsAppChat({ lang }: WhatsAppChatProps) {
  return (
    <button
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl z-50"
      onClick={(e) => e.preventDefault()}
      aria-label={lang === "bn" ? "হোয়াটসঅ্যাপে চ্যাট করুন" : "Chat on WhatsApp"}
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  )
}
