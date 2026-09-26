import Link from 'next/link'
import type { ReactNode } from 'react'

// Primitivas del sistema T1: lienzo vellum, texto carbón, píldoras y
// etiquetas con indicador cuadrado. Sin sombras ni colores de acento.

type Tone = 'dark' | 'light' | 'muted'

const toneClasses: Record<Tone, [string, string]> = {
  dark: ['text-carbon', 'bg-carbon'],
  light: ['text-white', 'bg-white'],
  muted: ['text-mercury', 'bg-mercury'],
}

export function SectionLabel({
  children,
  tone = 'dark',
  className = '',
}: {
  children: ReactNode
  tone?: Tone
  className?: string
}) {
  const [color, square] = toneClasses[tone]
  return (
    <div className={`inline-flex items-center gap-2.5 text-label uppercase ${color} ${className}`}>
      <span className={`w-1 h-1 flex-shrink-0 ${square}`} aria-hidden="true" />
      {children}
    </div>
  )
}

// Titular display: peso 300, interlineado 1.0
export const displayClass =
  'text-[40px] md:text-display font-light leading-none tracking-[0.01em]'

export const headingClass =
  'text-[26px] md:text-heading font-light tracking-[0.01em]'

type ButtonVariant = 'filled' | 'ghost' | 'light' | 'ghost-light'

const buttonVariants: Record<ButtonVariant, string> = {
  filled: 'bg-carbon text-white hover:bg-onyx',
  ghost: 'border border-carbon text-carbon hover:bg-carbon hover:text-white',
  light: 'bg-white text-carbon hover:bg-vellum',
  'ghost-light': 'border border-white text-white hover:bg-white hover:text-carbon',
}

export const buttonBase =
  'inline-flex items-center justify-center gap-2 rounded-full px-[22px] py-[18px] text-sm font-normal leading-none tracking-[0.01em] transition-colors duration-300'

export function ButtonLink({
  href,
  children,
  variant = 'filled',
  className = '',
}: {
  href: string
  children: ReactNode
  variant?: ButtonVariant
  className?: string
}) {
  const classes = `${buttonBase} ${buttonVariants[variant]} ${className}`
  const external = href.startsWith('tel:') || href.startsWith('mailto:') || href.startsWith('#')
  if (external) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  )
}

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-page px-4 md:px-6 ${className}`}>{children}</div>
}

// Encabezado de páginas interiores, alineado a la izquierda sobre vellum
export function PageHero({
  label,
  title,
  intro,
  children,
}: {
  label: string
  title: ReactNode
  intro?: ReactNode
  children?: ReactNode
}) {
  return (
    <section className="pt-40 md:pt-48 pb-12 md:pb-16">
      <Container>
        <SectionLabel className="mb-8">{label}</SectionLabel>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <h1 className={`${displayClass} text-carbon lg:col-span-7`}>{title}</h1>
          {(intro || children) && (
            <div className="lg:col-span-5">
              {intro && <p className="text-base leading-[1.4] text-carbon/80 max-w-md">{intro}</p>}
              {children && <div className="flex flex-wrap gap-2 mt-6">{children}</div>}
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}

// Bloque de llamada a la acción en superficie carbón
export function CtaBlock({
  label = 'Siguiente paso',
  title,
  text,
  children,
}: {
  label?: string
  title: ReactNode
  text?: ReactNode
  children?: ReactNode
}) {
  return (
    <div className="bg-carbon text-white rounded-[40px] md:rounded-orb px-8 py-14 md:px-16 md:py-20">
      <SectionLabel tone="light" className="mb-8">{label}</SectionLabel>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
        <h3 className={`${displayClass} lg:col-span-7`}>{title}</h3>
        <div className="lg:col-span-5">
          {text && <p className="text-base leading-[1.4] text-white/70 max-w-md">{text}</p>}
          {children && <div className="flex flex-wrap gap-2 mt-6">{children}</div>}
        </div>
      </div>
    </div>
  )
}

// Lista con indicador cuadrado en lugar de iconos
export function SquareList({ items, className = '' }: { items: string[]; className?: string }) {
  return (
    <ul className={`space-y-3 text-sm leading-[1.3] ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-[6px] w-1 h-1 bg-current flex-shrink-0" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}
