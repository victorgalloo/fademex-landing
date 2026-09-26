import Link from 'next/link'
import type { ReactNode } from 'react'
import { QUOTE_HREF, whatsappUrl, type WhatsAppContext } from '@/lib/contact'

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
  'text-[40px] md:text-display font-light leading-none tracking-[0.01em] [text-wrap:balance]'

export const headingClass =
  'text-[26px] md:text-heading font-light tracking-[0.01em] [text-wrap:balance]'

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
  if (href.startsWith('http')) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    )
  }
  // Anclas, teléfono y correo: enlace nativo para que el scroll funcione siempre
  if (/^(#|\/#|tel:|mailto:)/.test(href)) {
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

export function WhatsAppIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91A9.84 9.84 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.21 8.21 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.25-8.23a8.2 8.2 0 0 1 8.23 8.24c0 4.54-3.7 8.23-8.23 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.66.31-.23.25-.87.85-.87 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.29Z" />
    </svg>
  )
}

// Par de CTAs de conversión: cotizar por formulario o escribir por WhatsApp
export function CtaButtons({
  context = 'general',
  tone = 'dark',
  quoteLabel = 'Cotizar mi proyecto',
  className = '',
}: {
  context?: WhatsAppContext
  tone?: 'dark' | 'light'
  quoteLabel?: string
  className?: string
}) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      <ButtonLink href={QUOTE_HREF} variant={tone === 'light' ? 'light' : 'filled'}>
        {quoteLabel}
      </ButtonLink>
      <ButtonLink href={whatsappUrl(context)} variant={tone === 'light' ? 'ghost-light' : 'ghost'}>
        <WhatsAppIcon />
        Escribir por WhatsApp
      </ButtonLink>
    </div>
  )
}

// Encabezado de sección: etiqueta, titular a la izquierda y texto a la derecha
export function SectionIntro({
  label,
  title,
  intro,
  display = true,
  className = 'mb-12',
}: {
  label: string
  title: ReactNode
  intro?: ReactNode
  display?: boolean
  className?: string
}) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 ${className}`}>
      <div className="lg:col-span-7">
        <SectionLabel className="mb-8">{label}</SectionLabel>
        <h2 className={display ? displayClass : headingClass}>{title}</h2>
      </div>
      {intro && (
        <div className="lg:col-span-5 lg:pt-14 space-y-4 text-base leading-[1.4] text-carbon/80 max-w-md">
          {intro}
        </div>
      )}
    </div>
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
  context = 'general',
  quoteLabel,
  children,
}: {
  label?: string
  title: ReactNode
  text?: ReactNode
  context?: WhatsAppContext
  quoteLabel?: string
  children?: ReactNode
}) {
  return (
    <div className="bg-carbon text-white rounded-[40px] md:rounded-orb px-8 py-14 md:px-16 md:py-20">
      <SectionLabel tone="light" className="mb-8">{label}</SectionLabel>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
        <h3 className={`${displayClass} lg:col-span-6`}>{title}</h3>
        <div className="lg:col-span-6">
          {text && <p className="text-base leading-[1.4] text-white/70 max-w-md">{text}</p>}
          {children ?? <CtaButtons context={context} tone="light" quoteLabel={quoteLabel} className="mt-6" />}
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
