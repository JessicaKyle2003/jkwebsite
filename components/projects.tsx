'use client'

import { useState, type CSSProperties } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { pillars, projects, type PillarId } from '@/lib/content'
import { pillarStyles } from '@/lib/pillar-styles'
import { GithubIcon } from './brand-icons'
import { SectionHeading } from './section-heading'

type Filter = 'all' | PillarId

const pillarLabel = Object.fromEntries(pillars.map((p) => [p.id, p.short])) as Record<PillarId, string>

export function Projects() {
  const [filter, setFilter] = useState<Filter>('all')
  const visible = filter === 'all' ? projects : projects.filter((p) => p.pillar === filter)
  const filters: { id: Filter; label: string }[] = [
    { id: 'all', label: 'All' },
    ...pillars.map((p) => ({ id: p.id, label: p.short })),
  ]

  return (
    <section id="projects" aria-labelledby="projects-title" className="relative py-24 md:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/3 -z-10 h-96 bg-[radial-gradient(ellipse_at_center,oklch(0.35_0.12_290/30%),transparent_70%)]"
      />
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            id="projects-title"
            eyebrow="Selected work"
            title="Projects & case studies"
            description="Lab work and simulated case studies across all three pillars."
          />
          <div role="group" aria-label="Filter projects by focus area" className="flex flex-wrap gap-2">
            {filters.map((f) => {
              const active = filter === f.id
              return (
                <button
                  key={f.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setFilter(f.id)}
                  className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                    active
                      ? 'border-primary bg-primary text-primary-foreground'
                      : 'border-border text-muted-foreground hover:border-primary/50 hover:text-foreground'
                  }`}
                >
                  {f.label}
                </button>
              )
            })}
          </div>
        </div>

        <ul className="mt-14 grid gap-6 md:grid-cols-2">
          {visible.map((project) => {
            const style = pillarStyles[project.pillar]
            return (
              <li
                key={project.title}
                className="edge group relative flex flex-col overflow-hidden rounded-3xl bg-card/50 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-card/80 hover:shadow-[0_20px_60px_-20px] hover:shadow-primary/30"
                style={{ '--edge': style.color } as CSSProperties}
              >
                <div
                  aria-hidden="true"
                  className={`absolute inset-x-0 top-0 h-px opacity-70 ${style.bg}`}
                  style={{ maskImage: 'linear-gradient(to right, transparent, #000, transparent)' }}
                />
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute -right-16 -top-16 size-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-25 ${style.bg}`}
                />

                <div className="flex items-center justify-between gap-4">
                  <span
                    className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-xs ${style.border} ${style.soft} ${style.text}`}
                  >
                    <span className={`size-1.5 rounded-full ${style.bg}`} aria-hidden="true" />
                    {pillarLabel[project.pillar]}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">{style.number}</span>
                </div>

                <h3 className="mt-6 text-xl font-semibold tracking-tight md:text-2xl">{project.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{project.type}</p>
                <p className="mt-4 leading-relaxed text-foreground/85">{project.summary}</p>

                <ul className="mt-5 flex flex-col gap-2 text-sm text-muted-foreground">
                  {project.approach.map((step) => (
                    <li key={step} className="flex gap-3">
                      <span className={`mt-2 h-px w-3 shrink-0 ${style.bg}`} aria-hidden="true" />
                      {step}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 border-t border-border/60 pt-5">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Deliverables</p>
                  <p className="mt-2 text-sm">{project.deliverables.join(' · ')}</p>
                </div>

                <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-6">
                  <ul className="flex flex-wrap gap-2" aria-label="Tools and frameworks">
                    {project.tools.map((tool) => (
                      <li key={tool} className="rounded-md bg-secondary/70 px-2.5 py-1 font-mono text-xs text-muted-foreground">
                        {tool}
                      </li>
                    ))}
                  </ul>
                  {(project.caseStudyUrl || project.repoUrl) && (
                    <div className="flex items-center gap-4 text-sm">
                      {project.caseStudyUrl && (
                        <a href={project.caseStudyUrl} className="inline-flex items-center gap-1 text-primary hover:underline">
                          Case study
                          <ArrowUpRight className="size-4" aria-hidden="true" />
                          <span className="sr-only">{`for ${project.title}`}</span>
                        </a>
                      )}
                      {project.repoUrl && (
                        <a href={project.repoUrl} className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground">
                          <GithubIcon className="size-4" />
                          Repo
                          <span className="sr-only">{`for ${project.title}`}</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
