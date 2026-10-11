import { ArrowRight, Mail, MapPin, Sparkles } from 'lucide-react'
import { profile, socials } from '@/lib/portfolio-data'
import { LinkButton } from '@/components/link-button'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh items-center overflow-hidden pt-24 pb-16">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="grid-backdrop absolute inset-0" />
        <div className="animate-float-slow absolute -top-32 -left-24 size-[28rem] rounded-full bg-cyan/20 blur-[120px]" />
        <div className="animate-float-slow absolute top-1/3 -right-24 size-[30rem] rounded-full bg-violet/25 blur-[130px] [animation-delay:-6s]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-5 md:px-8 lg:grid-cols-[1.25fr_1fr]">
        <div className="animate-in fade-in slide-in-from-bottom-6 duration-700">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-4 py-1.5 text-xs font-medium text-cyan">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-cyan opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-cyan" />
            </span>
            {profile.availability}
          </p>

          <h1 className="text-5xl leading-[1.05] font-bold text-balance sm:text-6xl lg:text-7xl">
            {"Hi, I'm "}
            <span className="text-gradient">{profile.name}</span>
          </h1>
          <p className="mt-5 font-heading text-xl font-medium text-foreground/90 md:text-2xl">{profile.role}</p>
          <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground text-pretty md:text-lg">
            {profile.intro}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <LinkButton href="#projects">
              View Projects
              <ArrowRight className="group-hover:translate-x-1" />
            </LinkButton>
            <LinkButton href="#contact" variant="outline">
              <Mail />
              Contact Me
            </LinkButton>
          </div>

          <div className="mt-10 flex items-center gap-5 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-4 text-cyan" />
              {profile.location}
            </span>
            <span aria-hidden="true" className="h-4 w-px bg-border" />
            <a href={socials.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground">
              <GithubIcon className="size-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href={socials.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground">
              <LinkedinIcon className="size-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  )
}

function HeroVisual() {
  return (
    <div className="animate-in fade-in zoom-in-95 relative mx-auto aspect-square w-full max-w-sm duration-1000 lg:max-w-md">
      <div aria-hidden="true" className="animate-spin-slow absolute inset-0 rounded-full border border-dashed border-cyan/25" />
      <div aria-hidden="true" className="absolute inset-8 rounded-full border border-violet/20" />
      <div className="absolute inset-14 rounded-[2.5rem] bg-brand-gradient p-px shadow-[0_0_80px_-10px] shadow-violet/40">
        <div className="flex h-full flex-col items-center justify-center gap-3 rounded-[2.5rem] bg-card/95 p-6 text-center">
          <span className="font-heading text-6xl font-bold text-gradient md:text-7xl">{profile.initials}</span>
          <span className="text-xs text-muted-foreground">{'[Replace with your photo]'}</span>
        </div>
      </div>

      <div className="absolute top-6 -left-2 rounded-2xl border border-border bg-card/80 px-4 py-3 shadow-xl backdrop-blur md:-left-6">
        <p className="text-[11px] uppercase tracking-wider text-muted-foreground">Specializing in</p>
        <p className="font-heading text-sm font-semibold">Artificial Intelligence</p>
      </div>
      <div className="absolute -right-2 bottom-8 flex items-center gap-2 rounded-2xl border border-border bg-card/80 px-4 py-3 shadow-xl backdrop-blur md:-right-6">
        <Sparkles className="size-4 text-violet" />
        <p className="font-heading text-sm font-semibold">B.Tech CSE</p>
      </div>
    </div>
  )
}
