import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://adeshrai.me"),
  title: "Adesh Rai — Full-Stack Developer",
  description: "Portfolio of Adesh Rai, a full-stack developer building fast, thoughtful web products with Next.js, React, Node.js, and AI.",
  openGraph: {
    title: "Adesh Rai — Full-Stack Developer",
    description: "Fast, thoughtful web products built with Next.js, React, Node.js, and AI.",
    type: "website",
    url: "/",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Adesh Rai — Full-Stack Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adesh Rai — Full-Stack Developer",
    description: "Fast, thoughtful web products built with Next.js, React, Node.js, and AI.",
    images: ["/og.png"],
  },
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
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
