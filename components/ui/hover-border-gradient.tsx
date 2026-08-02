"use client"

import React, { useEffect, useState } from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT"

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  duration = 1,
  clockwise = true,
  ...props
}: React.PropsWithChildren<
  {
    as?: React.ElementType
    containerClassName?: string
    className?: string
    duration?: number
    clockwise?: boolean
  } & React.HTMLAttributes<HTMLElement>
>) {
  const [hovered, setHovered] = useState(false)
  const [direction, setDirection] = useState<Direction>("TOP")

  const rotateDirection = (currentDirection: Direction): Direction => {
    const directions: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"]
    const currentIndex = directions.indexOf(currentDirection)
    const nextIndex = clockwise
      ? (currentIndex - 1 + directions.length) % directions.length
      : (currentIndex + 1) % directions.length
    return directions[nextIndex]
  }

  // Keep the effect in sync with the active light/dark theme instead of
  // introducing a separate white/blue palette for the component.
  const movingMap: Record<Direction, string> = {
    TOP: "radial-gradient(20.7% 50% at 50% 0%, var(--accent) 0%, transparent 100%)",
    LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, var(--accent) 0%, transparent 100%)",
    BOTTOM: "radial-gradient(20.7% 50% at 50% 100%, var(--accent) 0%, transparent 100%)",
    RIGHT: "radial-gradient(16.2% 41.2% at 100% 50%, var(--accent) 0%, transparent 100%)",
  }

  const highlight = "radial-gradient(75% 181.16% at 50% 50%, var(--accent) 0%, transparent 100%)"

  useEffect(() => {
    if (hovered) return

    const interval = setInterval(() => {
      setDirection((previous) => rotateDirection(previous))
    }, duration * 1000)

    return () => clearInterval(interval)
  }, [duration, hovered, clockwise])

  return (
    <Tag
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex h-min w-fit flex-col flex-nowrap items-center justify-center gap-10 overflow-visible rounded-full border border-transparent bg-transparent p-px content-center transition duration-500",
        containerClassName,
      )}
      {...props}
    >
      <div className={cn("relative z-10 w-auto rounded-[inherit] bg-[var(--surface-solid)] px-4 py-2 text-[var(--text)]", className)}>
        {children}
      </div>
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 flex-none overflow-hidden rounded-[inherit]"
        style={{
          width: "100%",
          height: "100%",
          padding: "2px",
          boxSizing: "border-box",
          filter: "blur(0.75px)",
          willChange: "background",
          // Keep the animated color in the border ring; it must not wash over
          // the contribution cells or the card surface.
          WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
        initial={{ background: movingMap[direction] }}
        animate={{ background: hovered ? [movingMap[direction], highlight] : movingMap[direction] }}
        transition={{ ease: "linear", duration }}
      />
    </Tag>
  )
}
