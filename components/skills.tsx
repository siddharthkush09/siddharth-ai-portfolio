import { Brain, Code2, Coffee, FileCode2, Palette, Braces, Terminal, type LucideIcon } from 'lucide-react'
import { skills, type Skill } from '@/lib/portfolio-data'
import { Section } from '@/components/section'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

const skillIcons: Record<string, LucideIcon> = {
  C: Terminal,
  Java: Coffee,
  Python: Code2,
  HTML: FileCode2,
  CSS: Palette,
  JavaScript: Braces,
  'AI / ML': Brain,
}

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Languages and tools I work with"
      description="A foundation across programming, web development, and artificial intelligence that I continue to build on."
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill, i) => (
          <Reveal as="li" key={skill.name} delay={i * 60} className={cn(skill.category === 'AI' && 'sm:col-span-2 lg:col-span-1')}>
            <SkillCard skill={skill} />
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}

function SkillCard({ skill }: { skill: Skill }) {
  const Icon = skillIcons[skill.name] ?? Code2
  const isAI = skill.category === 'AI'

  return (
    <div
      className={cn(
        'group relative h-full overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1',
        isAI
          ? 'border-violet/40 bg-gradient-to-br from-cyan/10 to-violet/15'
          : 'border-border bg-card/60 hover:border-cyan/40',
      )}
    >
      <div
        aria-hidden="true"
        className="absolute -top-12 -right-12 size-32 rounded-full bg-cyan/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
      />
      <div className="relative flex items-start justify-between">
        <span className="grid size-12 place-items-center rounded-xl bg-white/5 ring-1 ring-border transition-colors group-hover:bg-brand-gradient group-hover:text-primary-foreground">
          <Icon className="size-5" aria-hidden="true" />
        </span>
        <span className="rounded-full bg-white/5 px-2.5 py-1 text-[11px] uppercase tracking-wider text-muted-foreground">
          {skill.category}
        </span>
      </div>
      <h3 className="relative mt-6 text-xl font-semibold">{skill.name}</h3>
      <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{skill.description}</p>
    </div>
  )
}
