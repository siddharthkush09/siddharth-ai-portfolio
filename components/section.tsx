import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/reveal'

type SectionProps = {
  id: string
  eyebrow: string
  title: string
  description?: string
  children: ReactNode
  className?: string
}

export function Section({ id, eyebrow, title, description, children, className }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={cn('relative py-20 md:py-28', className)}>
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="mb-12 max-w-2xl md:mb-16">
          <p className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-cyan">
            <span aria-hidden="true" className="h-px w-8 bg-brand-gradient" />
            {eyebrow}
          </p>
          <h2 id={`${id}-title`} className="text-3xl font-semibold text-balance md:text-5xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">{description}</p>
          ) : null}
        </Reveal>
        {children}
      </div>
    </section>
  )
}
