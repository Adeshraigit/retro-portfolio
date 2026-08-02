import type React from "react"
import { cn } from "@/lib/utils"

export interface CTAProps {
  /** Optional icon displayed beside the CTA copy. */
  icon?: React.ReactNode
  /** Main CTA heading. */
  title: string
  /** Supporting CTA copy. */
  description?: string
  /** Action label. */
  buttonText: string
  /** Optional destination for the action link. */
  buttonLink?: string
  /** Optional icon displayed inside the action. */
  buttonIcon?: React.ReactNode
  /** Optional click handler when no link is provided. */
  onButtonClick?: () => void
  /** Section eyebrow, styled with the portfolio's existing label system. */
  eyebrow?: string
  /** Section id used for navigation and accessibility. */
  id?: string
  className?: string
}

export function Cta1({
  icon,
  title,
  description,
  buttonText,
  buttonLink,
  buttonIcon,
  onButtonClick,
  eyebrow,
  id,
  className,
}: CTAProps) {
  const titleId = id ? `${id}-title` : undefined

  const action = buttonLink ? (
    <a className="cta-button" href={buttonLink}>
      {buttonText}
      {buttonIcon ? <span aria-hidden="true">{buttonIcon}</span> : null}
    </a>
  ) : (
    <button className="cta-button" type="button" onClick={onButtonClick}>
      {buttonText}
      {buttonIcon ? <span aria-hidden="true">{buttonIcon}</span> : null}
    </button>
  )

  return (
    <section id={id} className={cn("cta-section", className)} aria-labelledby={titleId}>
      <div className="cta-glow cta-glow-left" aria-hidden="true" />
      <div className="cta-glow cta-glow-right" aria-hidden="true" />

      <div className="cta-copy">
        {icon ? <span className="cta-icon" aria-hidden="true">{icon}</span> : null}
        <div>
          {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
          <h2 id={titleId}>{title}</h2>
          {description ? <p>{description}</p> : null}
        </div>
      </div>

      <div className="cta-action">{action}</div>
    </section>
  )
}
