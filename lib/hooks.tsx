'use client'

import { useState, useEffect, useRef, ReactNode } from 'react'

type RevealState = 'static' | 'hidden' | 'shown'

// El contenido se renderiza visible por defecto (SSR, sin JS, pestañas en
// segundo plano). Solo los elementos que arrancan fuera de la pantalla se
// ocultan y aparecen al entrar en el viewport.
export const useScrollReveal = (threshold = 0.1) => {
  const [state, setState] = useState<RevealState>('static')
  const domRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = domRef.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (el.getBoundingClientRect().top < window.innerHeight) return

    setState('hidden')
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setState('shown')
          observer.disconnect()
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return [domRef, state] as const
}

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

export const Reveal = ({ children, className = '', delay = 0 }: RevealProps) => {
  const [ref, state] = useScrollReveal()
  const stateClass =
    state === 'hidden'
      ? 'opacity-0 translate-y-3'
      : state === 'shown'
        ? 'opacity-100 translate-y-0 transition-[opacity,transform] duration-500 ease-out'
        : ''

  return (
    <div
      ref={ref}
      style={state === 'shown' ? { transitionDelay: `${delay}ms` } : undefined}
      className={`${stateClass} ${className}`}
    >
      {children}
    </div>
  )
}
