import type React from "react";
import { Inter } from "next/font/google";
import "../globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { WhatsAppChat } from "@/components/whatsapp-chat";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "bn" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: "en" | "bn" }>;
}): Promise<Metadata> {
  const { lang } = await params;

  return {
    title: "Best IELTS Preparation Course by Munzereen Shahid [2025]",
    description:
      "Take Best IELTS preparation with us, This Course is one of the Best IELTS Course in Bangladesh, which includes mock tests, and a premium study book.",
    keywords: [
      "IELTS Course",
      "IELTS Course in BD",
      "IELTS Preparation",
      "IELTS Bangladesh",
    ],
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: "en" | "bn" }>;
}) {
  const { lang } = await params;

  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <Navigation lang={lang} />
        <main>{children}</main>
        <Footer lang={lang} />
        <WhatsAppChat lang={lang} />
      </body>
    </html>
  );
}
