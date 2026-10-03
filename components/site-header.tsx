'use client'

import { useState } from 'react'
import { FileText, Menu, X } from 'lucide-react'
import { profile } from '@/lib/content'

const links = [
  { href: '#pillars', label: 'Focus' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Knowledge' },
  { href: '#credentials', label: 'Credentials' },
  { href: '#contact', label: 'Contact' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="group flex items-center gap-3">
          <span className="relative flex size-9 items-center justify-center rounded-full border border-primary/40 bg-primary/10 font-mono text-xs font-semibold text-primary transition-colors group-hover:border-primary">
            {profile.initials}
          </span>
          <span className="font-medium tracking-tight">{profile.name}</span>
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="mailto:hirejessicakyle@gmail.com?subject=R%C3%A9sum%C3%A9%20Request"
          className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-5 py-2 text-sm font-semibold text-primary-foreground shadow-[0_0_24px_-4px] shadow-primary/60 transition-transform hover:-translate-y-0.5 md:inline-flex"
        >
          <FileText className="size-4" aria-hidden="true" />
          Résumé
        </a>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-full text-foreground hover:bg-secondary md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-border md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-6 py-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base text-muted-foreground hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <a
                href="mailto:hirejessicakyle@gmail.com?subject=R%C3%A9sum%C3%A9%20Request"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-5 py-3 font-semibold text-primary-foreground"
              >
                <FileText className="size-4" aria-hidden="true" />
                Résumé
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
