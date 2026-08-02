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
      return {
        top: "-5px",
        left,
        "--meteor-left": left,
        animationDelay: `${Math.random() * 1 + 0.2}s`,
        animationDuration: `${Math.floor(Math.random() * 8 + 2)}s`,
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
            "pointer-events-none absolute left-1/2 top-1/2 z-[2] size-1 rotate-[215deg] animate-meteor rounded-full bg-slate-300 shadow-[0_0_0_1px_#ffffff30]",
            className,
          )}
          style={style}
        >
          <span className="pointer-events-none absolute top-1/2 left-[-72px] z-[-1] h-px w-[72px] -translate-y-1/2 bg-gradient-to-r from-transparent to-slate-300/90" />
        </span>
      ))}
    </>
  )
}

export default Meteors
