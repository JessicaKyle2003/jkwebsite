import { about } from '@/lib/content'
import { SectionHeading } from './section-heading'

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeading id="about-title" eyebrow="About" title={about.heading} />
      <p className="mt-8 max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground">{about.body}</p>
    </section>
  )
}
