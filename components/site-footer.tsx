import { ArrowUp } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-muted-foreground sm:flex-row md:px-8">
        <p>
          {'© '}
          {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <a href="#top" className="inline-flex items-center gap-1.5 transition-colors hover:text-cyan">
          Back to top
          <ArrowUp className="size-4" aria-hidden="true" />
        </a>
      </div>
    </footer>
  )
}
