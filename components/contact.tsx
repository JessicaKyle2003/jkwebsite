import { ArrowUpRight, Mail, MapPin } from 'lucide-react'
import { emailHref, profile, profileEmail, profileGithub, profileLinkedin } from '@/lib/content'
import { GithubIcon, LinkedinIcon } from './brand-icons'

const channels = [
  { label: 'Email', value: 'hirejessicakyle@gmail.com', href: emailHref, icon: Mail },
  { label: 'LinkedIn', value: 'Connect on LinkedIn', href: profileLinkedin, icon: LinkedinIcon },
  { label: 'GitHub', value: 'View repositories', href: profileGithub, icon: GithubIcon },
]

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-foreground/5"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-foreground/5 bg-[radial-gradient(circle,oklch(0.35_0.13_285/30%),transparent_70%)]"
      />
      <div className="mx-auto max-w-4xl px-6 py-24 text-center md:py-32">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">Contact</p>
        <h2 id="contact-title" className="mt-4 text-balance text-4xl font-semibold tracking-tight md:text-6xl">
          <span className="text-gradient">Get in Touch</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          I&apos;m interested in roles across GRC, cyber psychology and human factors, and security operations. The
          fastest way to reach me is by email.
        </p>
        <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 text-sm backdrop-blur">
          <MapPin className="size-4 text-primary" aria-hidden="true" />
          {profile.location}
        </p>

        <ul className="mt-12 grid gap-4 text-left sm:grid-cols-3">
          {channels.map(({ label, value, href, icon: Icon }) => {
            const safeHref = href ?? ''
            const external = safeHref.startsWith('http')
            return (
              <li key={label}>
                <a
                  href={safeHref || undefined}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="edge group flex h-full items-center gap-4 rounded-2xl bg-card/50 p-5 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-card/80"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="size-5 text-primary" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-mono text-[11px] uppercase tracking-wider text-muted-foreground">{label}</span>
                    <span className="block truncate text-sm font-medium group-hover:text-primary">{value}</span>
                  </span>
                  <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" aria-hidden="true" />
                  {external && <span className="sr-only">(opens in a new tab)</span>}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
