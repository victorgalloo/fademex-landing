import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Instalación de paneles solares industriales y baterías',
  description:
    'Paneles solares comerciales e industriales y baterías para peak shaving. Analizamos tu consumo, instalamos y tramitamos la interconexión con CFE.',
  alternates: { canonical: '/servicios' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
