import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Auditoría energética e instalación en 4 fases',
  description:
    'Auditoría energética, ingeniería y diseño, procura de componentes Tier 1 e instalación conforme a NOM-001-SEDE con interconexión a CFE.',
  alternates: { canonical: '/ingenieria' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
