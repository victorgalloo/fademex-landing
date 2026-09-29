import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Paneles solares Tier 1: especificaciones técnicas',
  description:
    'Paneles N-Type TOPCon de fabricantes Tier 1, inversores Fronius, Huawei y SMA y monitoreo 24/7. Normas IEC 61215, IEC 61730 y UL.',
  alternates: { canonical: '/tecnologia' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
