import { Meteors } from "@/components/ui/meteors"
import { StarsBackground } from "@/components/ui/stars-background"

export function MeteorsBackground() {
  return (
    <div className="background-effect meteors-background" aria-hidden="true">
      <div className="meteors-background-wash" />
      <StarsBackground
        className="background-stars"
        starDensity={0.00012}
        twinkleProbability={0.62}
        minTwinkleSpeed={0.7}
        maxTwinkleSpeed={1.4}
      />
      <div className="meteor-layer">
        <Meteors number={40} />
      </div>
    </div>
  )
}
