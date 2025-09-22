import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { ThemeToggle } from "@/components/theme-toggle"

export const metadata: Metadata = {
  title: "Adesh Rai - Retro Portfolio",
  description: "A retro 8-bit style portfolio showcasing web development skills",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>
          {children}
          <ThemeToggle />
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
