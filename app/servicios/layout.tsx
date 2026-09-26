import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Instalación de paneles solares comerciales e industriales',
  description:
    'Instalación de paneles solares para empresas: analizamos tu consumo, diseñamos el sistema, lo instalamos y tramitamos la interconexión con CFE.',
  alternates: { canonical: '/servicios' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
