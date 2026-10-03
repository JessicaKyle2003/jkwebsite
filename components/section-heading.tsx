export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = 'left',
}: {
  id: string
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}) {
  const centered = align === 'center'
  return (
    <div className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <p
        className={`flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-primary ${centered ? 'justify-center' : ''}`}
      >
        <span className="h-px w-8 bg-gradient-to-r from-transparent to-primary" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 id={id} className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">{description}</p>}
    </div>
  )
}

export function SectionDivider() {
  return (
    <div aria-hidden="true" className="relative mx-auto h-px max-w-6xl">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute left-1/2 top-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary text-primary glow-dot" />
    </div>
  )
}
