import { ArrowUpRight, GraduationCap, Mail, MapPin, type LucideIcon } from 'lucide-react'
import type { ComponentType, SVGProps } from 'react'
import { profile, socials } from '@/lib/portfolio-data'
import { Section } from '@/components/section'
import { Reveal } from '@/components/reveal'
import { LinkButton } from '@/components/link-button'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'

type ContactItem = {
  label: string
  value: string
  href?: string
  icon: LucideIcon | ComponentType<SVGProps<SVGSVGElement>>
  external?: boolean
}

export function Contact() {
  const items: ContactItem[] = [
    ...(profile.email
      ? [{ label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: Mail }]
      : []),
    { label: 'LinkedIn', value: 'Connect with me', href: socials.linkedin, icon: LinkedinIcon, external: true },
    { label: 'GitHub', value: 'View my code', href: socials.github, icon: GithubIcon, external: true },
    { label: 'Location', value: profile.location, icon: MapPin },
    { label: 'University', value: 'Parul University', icon: GraduationCap },
  ]
  const primaryHref = profile.email ? `mailto:${profile.email}` : socials.linkedin

  return (
    <Section id="contact" eyebrow="Contact" title="Let's connect">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-14">
        <Reveal className="flex flex-col justify-between gap-8 rounded-3xl border border-border bg-gradient-to-br from-cyan/10 via-card/60 to-violet/15 p-8 md:p-10">
          <div>
            <h3 className="text-2xl font-semibold text-balance md:text-3xl">
              Open to internships and collaboration
            </h3>
            <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
              {"I'm a Computer Science (AI) student actively seeking internship opportunities. If you have a role, a project idea, or just want to connect, I'd be glad to hear from you."}
            </p>
          </div>
          {profile.email ? (
            <LinkButton href={primaryHref} className="self-start">
              <Mail />
              Send me an email
            </LinkButton>
          ) : (
            <a
              href={primaryHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center gap-2 self-start rounded-full bg-brand-gradient px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              <LinkedinIcon className="size-4" aria-hidden="true" />
              Connect on LinkedIn
            </a>
          )}
        </Reveal>

        <ul className="grid gap-4 sm:grid-cols-2">
          {items.map((item, i) => (
            <Reveal as="li" key={item.label} delay={i * 80}>
              <ContactCard item={item} />
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  )
}

function ContactCard({ item }: { item: ContactItem }) {
  const Icon = item.icon
  const content = (
    <>
      <div className="flex items-center justify-between">
        <span className="grid size-11 place-items-center rounded-xl bg-white/5 ring-1 ring-border transition-colors group-hover:bg-brand-gradient group-hover:text-primary-foreground">
          <Icon className="size-5" aria-hidden="true" />
        </span>
        {item.href ? (
          <ArrowUpRight className="size-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan" aria-hidden="true" />
        ) : null}
      </div>
      <p className="mt-6 text-xs uppercase tracking-wider text-muted-foreground">{item.label}</p>
      <p className="mt-1 break-all font-medium">{item.value}</p>
    </>
  )

  const className =
    'group block h-full rounded-2xl border border-border bg-card/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan/40'

  if (!item.href) return <div className={className}>{content}</div>

  return (
    <a
      href={item.href}
      className={className}
      {...(item.external ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      {content}
    </a>
  )
}
