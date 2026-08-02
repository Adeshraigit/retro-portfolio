"use client"

import { useEffect, useState } from "react"
import { ArrowUpRight, Github } from "lucide-react"
import { DATA } from "@/lib/data"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"

type ContributionCell = {
  date: string
  level: number
}

type ContributionMonth = {
  label: string
  span: number
}

type ContributionData = {
  username: string
  profileUrl: string
  total: number | null
  weeks: ContributionCell[][]
  months: ContributionMonth[]
}

const FALLBACK_MONTHS = [
  { label: "Aug", span: 5 },
  { label: "Sep", span: 4 },
  { label: "Oct", span: 4 },
  { label: "Nov", span: 5 },
  { label: "Dec", span: 4 },
  { label: "Jan", span: 4 },
  { label: "Feb", span: 4 },
  { label: "Mar", span: 5 },
  { label: "Apr", span: 4 },
  { label: "May", span: 5 },
  { label: "Jun", span: 4 },
  { label: "Jul", span: 4 },
]

const FALLBACK_WEEKS = Array.from({ length: 53 }, (_, week) =>
  Array.from({ length: 7 }, (_, day) => {
    const seed = Math.sin((week * 7 + day) * 12.9898 + 78.233) * 43758.5453
    const value = seed - Math.floor(seed)
    const level = value > 0.94 ? 4 : value > 0.79 ? 3 : value > 0.56 ? 2 : value > 0.3 ? 1 : 0
    return { date: "", level }
  }),
)

export function GithubContributions() {
  const [liveData, setLiveData] = useState<ContributionData | null>(null)
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading")

  useEffect(() => {
    let isActive = true

    fetch("/api/github-contributions", { cache: "no-store" })
      .then((response) => {
        if (!response.ok) throw new Error("Unable to load GitHub activity")
        return response.json() as Promise<ContributionData>
      })
      .then((payload) => {
        if (!isActive) return
        setLiveData(payload)
        setStatus("ready")
      })
      .catch(() => {
        if (isActive) setStatus("error")
      })

    return () => {
      isActive = false
    }
  }, [])

  const weeks = liveData?.weeks?.length ? liveData.weeks : FALLBACK_WEEKS
  const months = liveData?.months?.length ? liveData.months : FALLBACK_MONTHS
  const profileUrl = liveData?.profileUrl ?? DATA.contact.social.GitHub.url
  const contributionSummary =
    status === "ready" && liveData?.total !== null
      ? `${liveData?.total?.toLocaleString()} contributions in the last year`
      : status === "loading"
        ? "Loading live contributions…"
        : "GitHub activity is temporarily unavailable"

  return (
    <section className="contributions-section" aria-labelledby="contributions-title">
      <div className="contribution-section-heading">
        <div>
          <p className="section-eyebrow">Open source</p>
          <h2 id="contributions-title">GitHub Contributions</h2>
        </div>
        <a className="contribution-link" href={profileUrl} target="_blank" rel="noreferrer">
          <Github size={15} />
          View profile
          <ArrowUpRight size={14} />
        </a>
      </div>

      <HoverBorderGradient
        as="div"
        duration={1.15}
        containerClassName="contribution-border-gradient"
        className="contribution-panel"
      >
        <div className="contribution-scroll" role="img" aria-label={`GitHub contribution activity for ${liveData?.username ?? "Adesh Rai"}`}>
          <div className="contribution-months" aria-hidden="true">
            {months.map((month, index) => (
              <span key={`${month.label}-${index}`} style={{ gridColumn: `span ${month.span}` }}>{month.label}</span>
            ))}
          </div>

          <div className="contribution-grid" aria-hidden="true">
            {weeks.map((week, weekIndex) => (
              <div className="contribution-week" key={`week-${weekIndex}`}>
                {week.map((cell, dayIndex) => (
                  <span
                    className={`contribution-cell contribution-level-${cell.level}`}
                    key={`day-${dayIndex}`}
                    title={cell.date ? `${cell.date} · contribution level ${cell.level}` : undefined}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="contribution-footer">
          <span>{contributionSummary}</span>
          <span className="contribution-legend" aria-label="Contribution intensity legend">
            <span>Less</span>
            {[0, 1, 2, 3, 4].map((level) => <i className={`contribution-cell contribution-level-${level}`} key={`legend-${level}`} />)}
            <span>More</span>
          </span>
        </div>
      </HoverBorderGradient>
    </section>
  )
}
