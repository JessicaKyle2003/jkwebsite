import { pillars, skills } from '@/lib/content'
import { pillarStyles } from '@/lib/pillar-styles'
import { SectionHeading } from './section-heading'

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeading
        id="skills-title"
        eyebrow="Knowledge areas"
        title="Frameworks, concepts & tools"
        align="center"
      />

      <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-0 md:divide-x md:divide-border/60">
        {skills.map((group) => {
          const pillar = pillars.find((p) => p.id === group.pillar)!
          const style = pillarStyles[group.pillar]
          return (
            <div key={group.pillar} className="md:px-8 first:md:pl-0 last:md:pr-0">
              <div className="flex items-center gap-3">
                <span className={`glow-dot size-2 rounded-full ${style.bg} ${style.text}`} aria-hidden="true" />
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{pillar.short}</h3>
              </div>
              <p className="mt-3 text-lg font-medium">{pillar.label}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className={`rounded-full border px-3.5 py-1.5 text-sm text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground ${style.border}`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </section>
  )
}
