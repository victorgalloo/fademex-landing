import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-sans',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://fademex.com'),
  title: {
    default: 'Paneles solares para empresas en León y México | FADEMEX',
    template: '%s | FADEMEX',
  },
  description:
    'Paneles solares industriales y comerciales para empresas en León, Guanajuato y todo México. Auditoría energética, instalación, trámites CFE y 30 años de garantía.',
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    siteName: 'FADEMEX',
    images: [{ url: '/hero-techo-solar.jpg', width: 1500, height: 1125, alt: 'Paneles solares sobre el techo de una planta industrial' }],
  },
  icons: {
    icon: '/logos/FADEMEX ISOTIPOS-01.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
