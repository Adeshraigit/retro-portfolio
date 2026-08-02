"use client"

import { usePathname } from "next/navigation"
import { MeteorsBackground } from "@/components/meteors-background"

export function PageBackground() {
  const pathname = usePathname()

  // Keep reading-focused routes visually quiet when they are added later.
  if (pathname?.includes("/blog")) return null
  if (pathname?.includes("/gadgets")) return null

  return <MeteorsBackground />
}
