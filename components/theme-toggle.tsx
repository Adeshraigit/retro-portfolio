"use client"

import { useEffect } from "react"
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"

export function ThemeToggle() {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "light" || savedTheme === "dark") {
      document.documentElement.classList.toggle("dark", savedTheme === "dark")
    }
  }, [])

  return <AnimatedThemeToggler className="theme-button" duration={460} variant="circle" />
}
