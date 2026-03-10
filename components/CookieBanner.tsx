'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const COOKIE_KEY = 'deskio_cookie_consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(COOKIE_KEY)
      if (!stored) setVisible(true)
    } catch {
      setVisible(true)
    }
  }, [])

  function accept() {
    try { localStorage.setItem(COOKIE_KEY, 'accepted') } catch {}
    setVisible(false)
  }

  function decline() {
    try { localStorage.setItem(COOKIE_KEY, 'declined') } catch {}
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="max-w-3xl mx-auto bg-gray-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
        <div className="p-5 md:p-6">
          <div className="flex items-start gap-3 mb-3">
            <span className="text-2xl flex-shrink-0">🍪</span>
            <div>
              <h3 className="text-white font-semibold text-base mb-1">Vi bruger cookies</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Deskio.dk bruger cookies til at forbedre din oplevelse, analysere trafik og huske dine præferencer.
                Ved at klikke <span className="text-white font-medium">"Acceptér alle"</span> accepterer du vores brug af cookies.
              </p>
            </div>
          </div>

          {showDetails && (
            <div className="mt-3 mb-4 space-y-2 border-t border-white/5 pt-4">
              <div className="flex items-start gap-3 text-sm">
                <div className="w-4 h-4 rounded bg-green-500/20 border border-green-500/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 fill-green-400"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
                </div>
                <div>
                  <p className="text-gray-200 font-medium">Nødvendige cookies</p>
                  <p className="text-gray-500">Sikrer at hjemmesiden fungerer korrekt. Kan ikke fravalges.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <div className="w-4 h-4 rounded bg-blue-500/20 border border-blue-500/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 fill-blue-400"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
                </div>
                <div>
                  <p className="text-gray-200 font-medium">Analytiske cookies</p>
                  <p className="text-gray-500">Hjælper os med at forstå, hvordan besøgende bruger siden (fx sidevisninger og klik).</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <div className="w-4 h-4 rounded bg-purple-500/20 border border-purple-500/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 fill-purple-400"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
                </div>
                <div>
                  <p className="text-gray-200 font-medium">Funktionelle cookies</p>
                  <p className="text-gray-500">Husker dine indstillinger og præferencer ved besøg på siden.</p>
                </div>
              </div>
              <p className="text-gray-600 text-xs pt-2">
                Læs mere i vores{' '}
                <Link href="/handelsbetingelser" className="text-brand-400 hover:underline">handelsbetingelser</Link>.
                Virksomhed: TC 1021 APS · CVR: DK 39 52 37 44
              </p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-center gap-2 mt-4">
            <button
              onClick={accept}
              className="w-full sm:w-auto px-5 py-2.5 bg-brand-600 hover:bg-brand-500 text-white text-sm font-semibold rounded-xl transition-colors"
            >
              Acceptér alle
            </button>
            <button
              onClick={decline}
              className="w-full sm:w-auto px-5 py-2.5 bg-white/5 hover:bg-white/10 text-gray-300 text-sm font-medium rounded-xl border border-white/10 transition-colors"
            >
              Kun nødvendige
            </button>
            <button
              onClick={() => setShowDetails(d => !d)}
              className="w-full sm:w-auto px-4 py-2.5 text-gray-500 hover:text-gray-300 text-sm transition-colors"
            >
              {showDetails ? 'Skjul detaljer ▲' : 'Se detaljer ▼'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
