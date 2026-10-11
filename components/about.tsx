import { Download } from 'lucide-react'
import { about, profile } from '@/lib/portfolio-data'
import { Section } from '@/components/section'
import { Reveal } from '@/components/reveal'
import { LinkButton } from '@/components/link-button'

export function About() {
  return (
    <Section id="about" eyebrow="About me" title="Curious about how intelligent software is built">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <Reveal className="space-y-5 text-lg leading-relaxed text-muted-foreground">
          {about.paragraphs.map((p) => (
            <p key={p} className="text-pretty">
              {p}
            </p>
          ))}
          <div className="pt-3">
            <LinkButton href={profile.resumeUrl} variant="outline">
              <Download />
              Download Resume
            </LinkButton>
          </div>
        </Reveal>

        <ul className="grid grid-cols-2 gap-4">
          {about.highlights.map((item, i) => (
            <Reveal
              as="li"
              key={item.label}
              delay={i * 80}
              className="rounded-2xl border border-border bg-card/60 p-5 transition-colors hover:border-cyan/40"
            >
              <p className="text-xs uppercase tracking-wider text-muted-foreground">{item.label}</p>
              <p className="mt-2 font-heading text-lg font-semibold">{item.value}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  )
}
