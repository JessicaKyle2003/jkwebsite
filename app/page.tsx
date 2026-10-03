import { SiteHeader } from '@/components/site-header'
import { Starfield } from '@/components/starfield'
import { Hero } from '@/components/hero'
import { Pillars } from '@/components/pillars'
import { Projects } from '@/components/projects'
import { About } from '@/components/about'
import { Experience } from '@/components/experience'
import { Skills } from '@/components/skills'
import { Credentials } from '@/components/credentials'
import { Resume } from '@/components/resume'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'
import { SectionDivider } from '@/components/section-heading'

export default function Page() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Starfield />
      <SiteHeader />
      <main id="main">
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Pillars />
        <Projects />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Credentials />
        <Resume />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
