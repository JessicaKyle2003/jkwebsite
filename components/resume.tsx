import { Download, ExternalLink, FileText, Mail } from 'lucide-react'
import { profile, resumeRequestHref } from '@/lib/content'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export function Resume() {
  const resumeHref = profile.resumeFile ? `${basePath}/${profile.resumeFile}` : null

  return (
    <section id="resume" aria-labelledby="resume-title" className="mx-auto max-w-6xl px-6 py-12">
      <div className="edge relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary/15 via-card/60 to-accent/15 p-8 backdrop-blur md:p-14">
        <div aria-hidden="true" className="bg-grid-fade absolute inset-0 -z-10 opacity-60" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 size-80 rounded-full bg-accent/30 blur-3xl"
        />
        <div className="relative flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          <div className="flex items-start gap-6">
            <span className="hidden size-16 shrink-0 items-center justify-center rounded-2xl border border-primary/40 bg-background/50 shadow-[0_0_40px_-8px] shadow-primary/60 sm:flex">
              <FileText className="size-8 text-primary" aria-hidden="true" />
            </span>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">Résumé</p>
              <h2 id="resume-title" className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
                Get the full picture.
              </h2>
              <p className="mt-3 max-w-lg text-pretty leading-relaxed text-muted-foreground">
                {resumeHref
                  ? 'View or download my résumé for a complete summary of my education, certifications, and skills.'
                  : "Send me the role you're hiring for and I'll share a résumé tailored to it."}
              </p>
            </div>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            {resumeHref ? (
              <>
                <a
                  href={resumeHref}
                  download
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-7 py-3.5 font-semibold text-primary-foreground shadow-[0_0_30px_-6px] shadow-primary/70 transition-transform hover:-translate-y-0.5"
                >
                  <Download className="size-5" aria-hidden="true" />
                  Download PDF
                </a>
                <a
                  href={resumeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/20 px-7 py-3.5 font-semibold transition-colors hover:bg-foreground/10"
                >
                  View online
                  <ExternalLink className="size-4" aria-hidden="true" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </>
            ) : (
              <a
                href={resumeRequestHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-7 py-3.5 font-semibold text-primary-foreground shadow-[0_0_30px_-6px] shadow-primary/70 transition-transform hover:-translate-y-0.5"
              >
                <Mail className="size-5" aria-hidden="true" />
                Request résumé
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
