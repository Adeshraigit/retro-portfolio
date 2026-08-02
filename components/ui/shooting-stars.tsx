"use client"

import React, { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface ShootingStar {
  id: number
  x: number
  y: number
  angle: number
  scale: number
  speed: number
  distance: number
}

interface ShootingStarsProps {
  minSpeed?: number
  maxSpeed?: number
  minDelay?: number
  maxDelay?: number
  starColor?: string
  trailColor?: string
  starWidth?: number
  starHeight?: number
  className?: string
}

const getRandomStartPoint = () => {
  const side = Math.floor(Math.random() * 4)
  const offset = Math.random() * (side % 2 === 0 ? window.innerWidth : window.innerHeight)

  switch (side) {
    case 0:
      return { x: offset, y: 0, angle: 45 }
    case 1:
      return { x: window.innerWidth, y: offset, angle: 135 }
    case 2:
      return { x: offset, y: window.innerHeight, angle: 225 }
    default:
      return { x: 0, y: offset, angle: 315 }
  }
}

export const ShootingStars: React.FC<ShootingStarsProps> = ({
  minSpeed = 10,
  maxSpeed = 30,
  minDelay = 1200,
  maxDelay = 4200,
  starColor = "#9e00ff",
  trailColor = "#2eb9df",
  starWidth = 10,
  starHeight = 1,
  className,
}) => {
  const [star, setStar] = useState<ShootingStar | null>(null)
  const timeoutRef = useRef<number | null>(null)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    let cancelled = false

    const createStar = () => {
      if (cancelled) return

      const { x, y, angle } = getRandomStartPoint()
      setStar({
        id: Date.now(),
        x,
        y,
        angle,
        scale: 1,
        speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
        distance: 0,
      })

      const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay
      timeoutRef.current = window.setTimeout(createStar, randomDelay)
    }

    createStar()

    return () => {
      cancelled = true
      if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current)
    }
  }, [minSpeed, maxSpeed, minDelay, maxDelay])

  useEffect(() => {
    if (!star || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const animationFrame = window.requestAnimationFrame(() => {
      setStar((previousStar) => {
        if (!previousStar) return null

        const radians = (previousStar.angle * Math.PI) / 180
        const newX = previousStar.x + previousStar.speed * Math.cos(radians)
        const newY = previousStar.y + previousStar.speed * Math.sin(radians)
        const newDistance = previousStar.distance + previousStar.speed

        if (
          newX < -20 ||
          newX > window.innerWidth + 20 ||
          newY < -20 ||
          newY > window.innerHeight + 20
        ) {
          return null
        }

        return {
          ...previousStar,
          x: newX,
          y: newY,
          distance: newDistance,
          scale: 1 + newDistance / 100,
        }
      })
    })

    return () => window.cancelAnimationFrame(animationFrame)
  }, [star])

  return (
    <svg
      aria-hidden="true"
      className={cn("absolute inset-0 h-full w-full", className)}
    >
      {star ? (
        <rect
          key={star.id}
          x={star.x}
          y={star.y}
          width={starWidth * star.scale}
          height={starHeight}
          fill="url(#portfolio-shooting-stars-gradient)"
          transform={`rotate(${star.angle}, ${
            star.x + (starWidth * star.scale) / 2
          }, ${star.y + starHeight / 2})`}
        />
      ) : null}
      <defs>
        <linearGradient
          id="portfolio-shooting-stars-gradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor={trailColor} stopOpacity={0} />
          <stop offset="100%" stopColor={starColor} stopOpacity={1} />
        </linearGradient>
      </defs>
    </svg>
  )
}
