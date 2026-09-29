import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Proyectos de energía solar industrial en México',
  description:
    'Casos de éxito en León, Aguascalientes, Querétaro, Monterrey y CDMX: sistemas de 250 kWp a 2.5 MW con ahorros de hasta 99% en energía.',
  alternates: { canonical: '/proyectos' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
