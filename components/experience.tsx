import { Briefcase } from 'lucide-react'
import { experience } from '@/lib/content'
import { SectionHeading } from './section-heading'

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeading id="experience-title" eyebrow="Experience" title="Work history" />

      <h3 className="mt-16 flex items-center gap-3 text-lg font-semibold">
        <Briefcase className="size-5 text-primary" aria-hidden="true" />
        Experience
      </h3>
      <ol className="relative mt-8 flex max-w-3xl flex-col gap-10 border-l border-border pl-8">
        {experience.map((item, index) => (
          <li key={`${item.company}-${item.role}`} className="relative">
            <span
              aria-hidden="true"
              className={`absolute -left-[37px] top-1.5 size-2.5 rounded-full ring-4 ring-background ${index === 0 ? 'glow-dot bg-primary text-primary' : 'border border-primary bg-background'}`}
            />
            <p className="font-mono text-xs text-muted-foreground">{item.period}</p>
            <p className="mt-1 text-xl font-semibold tracking-tight">{item.role}</p>
            <p className="mt-1 text-sm text-primary">{item.company}</p>
            <ul className="mt-4 flex flex-col gap-2 text-sm leading-relaxed text-muted-foreground">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span className="mt-2.5 h-px w-3 shrink-0 bg-primary" aria-hidden="true" />
                  {bullet}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  )
}
