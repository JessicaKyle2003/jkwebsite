import type { CSSProperties } from 'react'
import { ArrowDown, FileText, MapPin, ShieldCheck } from 'lucide-react'
import { pillars, profile } from '@/lib/content'
import { pillarStyles } from '@/lib/pillar-styles'

const orbits = [
  { inset: '6%', duration: '60s', pillar: 'grc' as const, reverse: false },
  { inset: '18%', duration: '42s', pillar: 'human' as const, reverse: true },
  { inset: '30%', duration: '28s', pillar: 'secops' as const, reverse: false },
]

function OrbitVisual() {
  return (
    <div aria-hidden="true" className="animate-drift relative mx-auto aspect-square w-full max-w-[26rem]">
      <div className="absolute inset-[10%] rounded-full bg-[radial-gradient(circle,oklch(0.45_0.16_285/45%),transparent_65%)] blur-2xl" />
      {orbits.map((orbit) => (
        <div
          key={orbit.pillar}
          className={`absolute rounded-full border border-foreground/10 ${orbit.reverse ? 'animate-orbit-reverse' : 'animate-orbit'}`}
          style={{ inset: orbit.inset, '--duration': orbit.duration } as CSSProperties}
        >
          <span
            className={`glow-dot absolute left-1/2 top-0 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full ${pillarStyles[orbit.pillar].bg} ${pillarStyles[orbit.pillar].text}`}
          />
        </div>
      ))}
      <div className="absolute inset-[40%] flex items-center justify-center rounded-full border border-primary/40 bg-background/60 shadow-[0_0_60px_-10px] shadow-primary/70 backdrop-blur">
        <ShieldCheck className="size-1/2 text-primary" strokeWidth={1.5} />
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden">
      <div className="bg-grid-fade absolute inset-0 -z-10" aria-hidden="true" />
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 pb-24 pt-16 md:pt-24 lg:grid-cols-[1.2fr_1fr]">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 font-mono text-xs text-muted-foreground backdrop-blur">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-secops opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex size-2 rounded-full bg-secops" />
            </span>
            {profile.availability}
          </p>

          <h1 id="hero-title" className="mt-8 text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl">
            <span className="text-gradient">{profile.name}</span>
          </h1>
          <p className="mt-4 text-xl font-medium text-foreground/90 md:text-2xl">{profile.title}</p>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">{profile.summary}</p>

          <ul className="mt-8 flex flex-wrap gap-2" aria-label="Core focus areas">
            {pillars.map((p) => (
              <li
                key={p.id}
                className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm ${pillarStyles[p.id].border} ${pillarStyles[p.id].soft}`}
              >
                <span className={`size-1.5 rounded-full ${pillarStyles[p.id].bg}`} aria-hidden="true" />
                {p.short}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
            >
              View projects
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>
            <a
              href="mailto:hirejessicakyle@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/10 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/20"
            >
              <FileText className="size-4" aria-hidden="true" />
              Résumé
            </a>
            <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="size-4" aria-hidden="true" />
              {profile.location}
            </span>
          </div>
        </div>

        <div className="hidden sm:block">
          <OrbitVisual />
        </div>
      </div>
    </section>
  )
}
