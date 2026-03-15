import type { Metadata } from 'next'
import './globals.css'
import CookieBanner from '@/components/CookieBanner'

export const metadata: Metadata = {
  title: 'Deskio — AI-receptionist til din virksomhed',
  description: 'Deskio er din digitale receptionist — tilgængelig 24/7, taler alle sprog, booker aftaler og fanger kundeemner automatisk. Prøv gratis i 14 dage.',
  metadataBase: new URL('https://deskio.dk'),
  alternates: {
    canonical: 'https://deskio.dk',
  },
  keywords: [
    'AI receptionist', 'AI-receptionist', 'chatbot', 'booking system', 'bookingsystem',
    'AI booking', 'automatisk booking', 'lead capture', 'dansk AI', 'Deskio',
    'AI til virksomheder', 'digital receptionist', '24/7 kundeservice',
  ],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.png', type: 'image/png', sizes: '64x64' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Deskio — AI-receptionist til din virksomhed',
    description: 'Svar på kundespørgsmål, book aftaler og fang leads automatisk — hele døgnet.',
    url: 'https://deskio.dk',
    siteName: 'Deskio',
    locale: 'da_DK',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Deskio — AI-receptionist til din virksomhed',
    description: 'Svar på kundespørgsmål, book aftaler og fang leads automatisk — hele døgnet.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="da">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" sizes="64x64" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body>
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}
