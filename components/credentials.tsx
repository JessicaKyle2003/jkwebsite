import type { CSSProperties } from 'react'
import { Award, GraduationCap } from 'lucide-react'
import { certifications, education } from '@/lib/content'
import { pillarStyles } from '@/lib/pillar-styles'
import { SectionHeading } from './section-heading'

export function Credentials() {
  return (
    <section id="credentials" aria-labelledby="credentials-title" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeading id="credentials-title" eyebrow="Credentials" title="Education & certifications" />

      <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
        <div>
          <h3 className="flex items-center gap-3 text-lg font-semibold">
            <GraduationCap className="size-5 text-primary" aria-hidden="true" />
            Education
          </h3>
          <ol className="relative mt-8 flex flex-col gap-8 border-l border-border pl-8">
            {education.map((item) => {
              const inProgress = item.status === 'In Progress'
              return (
                <li key={item.degree} className="relative">
                  <span
                    aria-hidden="true"
                    className={`absolute -left-[37px] top-1.5 size-2.5 rounded-full ring-4 ring-background ${inProgress ? 'border border-primary bg-background' : 'glow-dot bg-primary text-primary'}`}
                  />
                  <p className="text-sm text-muted-foreground">{item.degree}</p>
                  <p className="mt-1 text-xl font-semibold tracking-tight">{item.field}</p>
                  <span
                    className={`mt-3 inline-flex rounded-full px-3 py-1 font-mono text-xs ${
                      inProgress ? 'border border-accent/40 bg-accent/10 text-accent' : 'border border-border text-muted-foreground'
                    }`}
                  >
                    {item.status}
                  </span>
                </li>
              )
            })}
          </ol>
        </div>

        <div>
          <h3 className="flex items-center gap-3 text-lg font-semibold">
            <Award className="size-5 text-primary" aria-hidden="true" />
            Certifications
          </h3>
          <ul className="mt-8 flex flex-col gap-4">
            {certifications.map((cert) => {
              const style = pillarStyles[cert.pillar]
              return (
                <li
                  key={cert.name}
                  className="edge group flex items-center gap-6 rounded-2xl bg-card/40 p-5 backdrop-blur-sm transition-colors hover:bg-card/70"
                  style={{ '--edge': style.color } as CSSProperties}
                >
                  <span className={`font-mono text-2xl font-light tabular-nums ${style.text}`}>{cert.year}</span>
                  <span className="h-10 w-px bg-border" aria-hidden="true" />
                  <div className="min-w-0">
                    <p className="font-medium leading-snug">{cert.name}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{`Earned ${cert.year}`}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
