import { CalendarDays, GraduationCap, MapPin } from 'lucide-react'
import { education } from '@/lib/portfolio-data'
import { Section } from '@/components/section'
import { Reveal } from '@/components/reveal'

export function Education() {
  const meta = [
    { icon: CalendarDays, value: education.status },
    { icon: MapPin, value: education.location },
  ]

  return (
    <Section id="education" eyebrow="Education" title="Academic background">
      <Reveal>
        <div className="rounded-3xl bg-gradient-to-br from-cyan/50 via-border to-violet/50 p-px">
          <div className="relative overflow-hidden rounded-3xl bg-card p-6 md:p-10">
            <div aria-hidden="true" className="absolute -top-24 -right-24 size-72 rounded-full bg-violet/15 blur-3xl" />
            <div className="relative grid gap-10 lg:grid-cols-[1.3fr_1fr]">
              <div className="flex flex-col gap-6 sm:flex-row">
                <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-brand-gradient text-primary-foreground">
                  <GraduationCap className="size-7" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-2xl font-semibold text-balance md:text-3xl">{education.degree}</h3>
                  <p className="mt-2 font-medium text-gradient">{education.specialization}</p>
                  <p className="mt-3 text-lg text-foreground/90">{education.institution}</p>
                  <ul className="mt-5 flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:gap-x-6">
                    {meta.map(({ icon: Icon, value }) => (
                      <li key={value} className="inline-flex items-center gap-2">
                        <Icon className="size-4 text-cyan" aria-hidden="true" />
                        {value}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Areas of interest</h4>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {education.interests.map((course) => (
                    <li
                      key={course}
                      className="rounded-full border border-border bg-white/[0.03] px-3 py-1.5 text-sm transition-colors hover:border-violet/50"
                    >
                      {course}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
