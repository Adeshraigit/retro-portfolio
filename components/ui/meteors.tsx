"use client"

import { useEffect, useState, type CSSProperties } from "react"
import { cn } from "@/lib/utils"

interface MeteorsProps {
  number?: number
  className?: string
}

export const Meteors = ({ number = 20, className }: MeteorsProps) => {
  const [meteorStyles, setMeteorStyles] = useState<CSSProperties[]>([])

  useEffect(() => {
    const styles = Array.from({ length: Math.max(0, number) }, () => {
      const left = `${Math.floor(Math.random() * window.innerWidth)}px`
      const duration = 7 + Math.random() * 6
      return {
        top: "-5px",
        left,
        "--meteor-left": left,
        // Negative delays distribute the meteors across their path on first paint,
        // avoiding a burst of dots entering together at the top of the page.
        animationDelay: `${-Math.random() * duration}s`,
        animationDuration: `${duration.toFixed(2)}s`,
      } as CSSProperties
    })

    setMeteorStyles(styles)
  }, [number])

  return (
    <>
      {meteorStyles.map((style, index) => (
        <span
          key={`meteor-${index}`}
          aria-hidden="true"
          className={cn(
            "meteor-head pointer-events-none absolute left-1/2 top-1/2 z-[2] size-1 rotate-[215deg] animate-meteor rounded-full",
            className,
          )}
          style={style}
        >
          <span className="meteor-tail pointer-events-none absolute top-1/2 left-[-72px] z-[-1] h-px w-[72px] -translate-y-1/2" />
        </span>
      ))}
    </>
  )
}

export default Meteors
