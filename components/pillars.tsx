import type { CSSProperties } from 'react'
import { Activity, Brain, Scale, type LucideIcon } from 'lucide-react'
import { pillars, type PillarId } from '@/lib/content'
import { pillarStyles } from '@/lib/pillar-styles'
import { SectionHeading } from './section-heading'

const icons: Record<PillarId, LucideIcon> = { grc: Scale, human: Brain, secops: Activity }

export function Pillars() {
  return (
    <section id="pillars" aria-labelledby="pillars-title" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeading
        id="pillars-title"
        eyebrow="Three perspectives"
        title="Security is a system of policies, people, and technology."
        description="Each pillar asks a different question. Together they form a complete picture of how organizations stay secure."
      />

      <ol className="mt-16 flex flex-col gap-6">
        {pillars.map((pillar, index) => {
          const style = pillarStyles[pillar.id]
          const Icon = icons[pillar.id]
          return (
            <li
              key={pillar.id}
              className="edge group relative overflow-hidden rounded-3xl bg-card/40 p-8 backdrop-blur-sm transition-colors hover:bg-card/70 md:p-10"
              style={{ '--edge': style.color } as CSSProperties}
            >
              <div
                aria-hidden="true"
                className={`pointer-events-none absolute -top-24 size-72 rounded-full opacity-25 blur-3xl transition-opacity group-hover:opacity-40 ${style.bg} ${index % 2 === 0 ? '-right-24' : '-left-24'}`}
              />
              <div className="relative grid gap-8 md:grid-cols-[auto_1fr_1fr] md:gap-12">
                <div className="flex items-start gap-4 md:flex-col">
                  <span className={`font-mono text-5xl font-light md:text-6xl ${style.text}`}>{style.number}</span>
                  <span
                    className={`flex size-12 items-center justify-center rounded-2xl border ${style.border} ${style.soft}`}
                  >
                    <Icon className={`size-6 ${style.text}`} aria-hidden="true" />
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">{pillar.label}</h3>
                  <p className={`mt-3 text-lg italic ${style.text}`}>{`"${pillar.question}"`}</p>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{pillar.description}</p>
                </div>

                <ul className="flex flex-col gap-3 self-center" aria-label={`${pillar.short} focus areas`}>
                  {pillar.focus.map((item) => (
                    <li key={item} className="flex items-center gap-3 border-b border-border/60 pb-3 text-sm last:border-0">
                      <span className={`size-1.5 shrink-0 rounded-full ${style.bg}`} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
