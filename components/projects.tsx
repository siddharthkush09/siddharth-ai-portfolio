import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { projects, type Project } from '@/lib/portfolio-data'
import { Section } from '@/components/section'
import { Reveal } from '@/components/reveal'
import { GithubIcon } from '@/components/brand-icons'

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Sample & learning projects"
      description="Project concepts that reflect the areas I am learning. These will be replaced with my own completed work as I build it."
    >
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal as="li" key={project.title + i} delay={i * 100}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card/60 transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan/40 hover:shadow-[0_20px_60px_-20px] hover:shadow-violet/40">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
        <span className="absolute top-4 left-4 rounded-full border border-violet/40 bg-background/80 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
          {project.label}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <ul className="flex flex-wrap gap-2" aria-label="Technologies">
          {project.tags.map((tag) => (
            <li key={tag} className="rounded-full border border-cyan/25 bg-cyan/10 px-2.5 py-0.5 text-xs text-cyan">
              {tag}
            </li>
          ))}
        </ul>
        <h3 className="mt-4 text-xl font-semibold">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

        <div className="mt-6 flex items-center gap-4 border-t border-border pt-5 text-sm">
          {!project.githubUrl && !project.liveUrl ? (
            <span className="text-muted-foreground">Project links will be added once built</span>
          ) : null}
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
            >
              <GithubIcon className="size-4" />
              Code
            </a>
          ) : null}
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-cyan transition-colors hover:text-violet"
            >
              Live demo
              <ArrowUpRight className="size-4" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  )
}
