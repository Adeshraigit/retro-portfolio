import { NextResponse } from "next/server"

const USERNAME = "Adeshraigit"
const CONTRIBUTIONS_URL = `https://github.com/users/${USERNAME}/contributions`

type ContributionCell = {
  date: string
  level: number
}

function parseContributionCells(html: string) {
  const cells = [...html.matchAll(/<td\b[^>]*id="contribution-day-component-([^\"]+)"[^>]*>/g)]
    .map((match) => {
      const tag = match[0]
      const coordinates = match[1].split("-").map(Number)
      const date = tag.match(/data-date="([^\"]+)"/)?.[1]
      const level = Number(tag.match(/data-level="([^\"]+)"/)?.[1] ?? 0)

      if (coordinates.length !== 2 || !date || !Number.isFinite(level)) return null

      return {
        day: coordinates[0],
        week: coordinates[1],
        cell: { date, level: Math.max(0, Math.min(4, level)) },
      }
    })
    .filter((entry): entry is { day: number; week: number; cell: ContributionCell } => entry !== null)

  if (!cells.length) throw new Error("GitHub returned no contribution cells")

  const lastWeek = Math.max(...cells.map(({ week }) => week))
  const weeks = Array.from({ length: lastWeek + 1 }, (_, week) =>
    Array.from({ length: 7 }, (_, day) => cells.find((entry) => entry.week === week && entry.day === day)?.cell ?? {
      date: "",
      level: 0,
    }),
  )

  return weeks
}

function parseMonths(html: string) {
  const header = html.match(/<thead>([\s\S]*?)<\/thead>/)?.[1] ?? ""
  return [...header.matchAll(/<td class="ContributionCalendar-label" colspan="(\d+)"[^>]*>[\s\S]*?<span aria-hidden="true"[^>]*>([^<]+)<\/span>/g)]
    .map((match) => ({ label: match[2].trim(), span: Number(match[1]) }))
    .filter(({ label, span }) => label && Number.isFinite(span))
}

function parseTotal(html: string) {
  const summary = html.match(/<h2[^>]*>[\s\S]*?<\/h2>/)?.[0] ?? ""
  const total = summary.match(/>\s*([\d,]+)\s*[\s\S]*?contributions?\s+in the last year/i)?.[1]
  return total ? Number(total.replaceAll(",", "")) : null
}

export async function GET() {
  try {
    const response = await fetch(CONTRIBUTIONS_URL, {
      headers: {
        Accept: "text/html",
        "User-Agent": "Adesh-Rai-Portfolio",
      },
      next: { revalidate: 3600 },
    })

    if (!response.ok) throw new Error(`GitHub responded with ${response.status}`)

    const html = await response.text()
    const weeks = parseContributionCells(html)
    const months = parseMonths(html)

    return NextResponse.json({
      username: USERNAME,
      profileUrl: `https://github.com/${USERNAME}`,
      total: parseTotal(html),
      weeks,
      months,
      fetchedAt: new Date().toISOString(),
    })
  } catch {
    return NextResponse.json(
      { error: "Unable to load GitHub contribution activity" },
      { status: 502 },
    )
  }
}
