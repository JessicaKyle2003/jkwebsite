import { profile } from '@/lib/content'

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background/50 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>{`© ${new Date().getFullYear()} ${profile.name} · ${profile.location}`}</p>
        <p className="font-mono text-xs">Projects are lab, simulated, or academic work unless noted.</p>
      </div>
    </footer>
  )
}
