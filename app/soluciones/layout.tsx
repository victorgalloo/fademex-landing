import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Financiamiento de paneles solares para empresas',
  description:
    'Financiamiento directo, 30 años de garantía de generación, 2 años de mantenimiento incluidos y trámites con CFE en un solo contrato.',
  alternates: { canonical: '/soluciones' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
