import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Deskio — AI-receptionist til din virksomhed',
  description: 'Deskio er din digitale receptionist — tilgængelig 24/7, taler alle sprog, booker aftaler og fanger kundeemner automatisk.',
  metadataBase: new URL('https://deskio.dk'),
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  openGraph: {
    title: 'Deskio — AI-receptionist til din virksomhed',
    description: 'Svar på kundespørgsmål, book aftaler og fang leads automatisk — hele døgnet.',
    url: 'https://deskio.dk',
    siteName: 'Deskio',
    locale: 'da_DK',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="da">
      <body>{children}</body>
    </html>
  )
}
