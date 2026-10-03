import type { PillarId } from './content'

export const pillarStyles: Record<
  PillarId,
  { text: string; bg: string; soft: string; border: string; color: string; number: string }
> = {
  grc: {
    text: 'text-grc',
    bg: 'bg-grc',
    soft: 'bg-grc/10',
    border: 'border-grc/30',
    color: 'var(--grc)',
    number: '01',
  },
  human: {
    text: 'text-human',
    bg: 'bg-human',
    soft: 'bg-human/10',
    border: 'border-human/30',
    color: 'var(--human)',
    number: '02',
  },
  secops: {
    text: 'text-secops',
    bg: 'bg-secops',
    soft: 'bg-secops/10',
    border: 'border-secops/30',
    color: 'var(--secops)',
    number: '03',
  },
}
