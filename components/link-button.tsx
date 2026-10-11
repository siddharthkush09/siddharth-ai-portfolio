import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: 'gradient' | 'outline'
  children: ReactNode
}

export function LinkButton({ variant = 'gradient', className, children, ...props }: LinkButtonProps) {
  return (
    <a
      className={cn(
        'group inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background [&_svg]:size-4 [&_svg]:transition-transform',
        variant === 'gradient'
          ? 'bg-brand-gradient text-primary-foreground shadow-[0_8px_30px_-8px] shadow-cyan/50 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-8px] hover:shadow-violet/60'
          : 'border border-border bg-white/[0.03] text-foreground backdrop-blur hover:-translate-y-0.5 hover:border-cyan/50 hover:bg-white/[0.06]',
        className,
      )}
      {...props}
    >
      {children}
    </a>
  )
}
