import type React from "react"
import type { Metadata } from "next"
import "@/styles/globals.css"

export const metadata: Metadata = {
  title: "10 Minute School - IELTS Course",
  description: "Best IELTS preparation course in Bangladesh",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
