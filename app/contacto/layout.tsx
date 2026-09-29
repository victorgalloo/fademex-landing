import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cotiza paneles solares para tu empresa',
  description:
    'Envíanos tu tarifa y consumo de CFE. Un ingeniero revisa tu caso y te contacta en menos de 24 horas hábiles. León, Guanajuato: +52 479 136 9896.',
  alternates: { canonical: '/contacto' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
