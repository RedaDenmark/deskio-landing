'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Bot, Menu, X } from 'lucide-react'
import DeskioLogo from '@/components/DeskioLogo'

const DASHBOARD_URL = process.env.NEXT_PUBLIC_DASHBOARD_URL || 'https://app.deskio.dk'

const NAV_LINKS = [
  { label: 'Historien',      href: '#evolution' },
  { label: 'Funktioner',     href: '#features' },
  { label: 'Sådan virker det', href: '#how' },
  { label: 'Priser',         href: '#pricing' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
            <Bot className="w-4 h-4 text-white" />
          </div>
          <DeskioLogo size="md" />
        </div>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href} className="hover:text-white transition-colors">{l.label}</a>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <Link href={`${DASHBOARD_URL}/login`} className="text-sm text-gray-400 hover:text-white transition-colors">
            Log ind
          </Link>
          <Link href={`${DASHBOARD_URL}/register`} className="bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
            Start gratis
          </Link>
        </div>

        {/* Mobile: Log ind + Start gratis + hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <Link href={`${DASHBOARD_URL}/login`} className="text-sm text-gray-400 hover:text-white transition-colors px-2 py-1">
            Log ind
          </Link>
          <Link href={`${DASHBOARD_URL}/register`} className="bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium px-3 py-2 rounded-lg transition-colors">
            Start gratis
          </Link>
          <button
            onClick={() => setOpen(o => !o)}
            className="ml-1 p-2 text-gray-400 hover:text-white transition-colors"
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {open && (
        <div className="md:hidden bg-[#0a0a0f]/95 border-t border-white/5 px-4 py-4 flex flex-col gap-1">
          {NAV_LINKS.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm text-gray-400 hover:text-white transition-colors py-2.5 border-b border-white/5 last:border-0"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
