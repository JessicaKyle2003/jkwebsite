import type { CSSProperties } from 'react'

function seeded(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const random = seeded(1337)
const stars = Array.from({ length: 140 }, () => ({
  x: (random() * 100).toFixed(2),
  y: (random() * 100).toFixed(2),
  size: random() < 0.88 ? 1 : 2,
  opacity: (0.25 + random() * 0.6).toFixed(2),
  duration: (3 + random() * 5).toFixed(1),
  delay: (random() * 6).toFixed(1),
}))

export function Starfield() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_15%_0%,oklch(0.3_0.12_285/45%),transparent_60%),radial-gradient(ellipse_60%_50%_at_95%_25%,oklch(0.32_0.14_315/28%),transparent_60%),radial-gradient(ellipse_70%_50%_at_50%_110%,oklch(0.3_0.1_245/35%),transparent_60%)]" />
      {stars.map((star, i) => (
        <span
          key={i}
          className="animate-twinkle absolute rounded-full bg-foreground"
          style={
            {
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size,
              height: star.size,
              opacity: star.opacity,
              '--o': star.opacity,
              '--t': `${star.duration}s`,
              '--d': `${star.delay}s`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  )
}
