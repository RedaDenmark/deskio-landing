'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const DASHBOARD_URL = 'https://dashboard.deskio.dk'

interface Era {
  year: string
  title: string
  desc: string
  image: string
  filter: string
  bg: string
  badge: string
  highlight?: boolean
}

interface Props {
  eras: Era[]
}

export default function EraTimeline({ eras }: Props) {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])
  const lineRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(-1)
  const [lineHeight, setLineHeight] = useState(0)
  // Start as false — cards render fully visible on the server (no opacity-0 flash).
  // After hydration we flip to true and let scroll observers control visibility.
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const observers: IntersectionObserver[] = []

    itemRefs.current.forEach((el, i) => {
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(prev => Math.max(prev, i))
          }
        },
        { threshold: 0.35 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [])

  // Grow the line to the centre of the active dot
  useEffect(() => {
    const wrapper = wrapperRef.current
    const activeDot = itemRefs.current[activeIndex]
    if (!wrapper || !activeDot) return

    const wrapperTop = wrapper.getBoundingClientRect().top + window.scrollY
    const dotTop = activeDot.getBoundingClientRect().top + window.scrollY
    const dotMid = dotTop + activeDot.offsetHeight / 2
    setLineHeight(dotMid - wrapperTop)
  }, [activeIndex])

  return (
    <div ref={wrapperRef} className="relative">
      {/* ── Vertical track ── */}
      <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-white/10 hidden sm:block" />

      {/* ── Animated fill line ── */}
      <div
        ref={lineRef}
        className="absolute left-4 md:left-8 top-0 w-px bg-gradient-to-b from-brand-500 to-brand-400 hidden sm:block transition-all duration-700 ease-out"
        style={{ height: lineHeight }}
      />

      <div className="space-y-8">
        {eras.map((era, i) => (
          <div
            key={era.year}
            ref={el => { itemRefs.current[i] = el }}
            style={{ willChange: 'opacity, transform' }}
            className={`relative flex gap-6 sm:gap-10 md:gap-14 transition-all duration-700 ${
              !mounted
                ? 'opacity-100 translate-y-0'               // SSR / pre-hydration: always visible
                : activeIndex >= i
                ? 'opacity-100 translate-y-0'               // activated by scroll
                : 'opacity-0 translate-y-6'                 // waiting to animate in
            }`}
          >
            {/* ── Dot ── */}
            <div className="hidden sm:flex flex-col items-center flex-shrink-0 relative z-10"
                 style={{ marginLeft: '-0.4rem' }}>
              <div
                className={`w-3.5 h-3.5 rounded-full border-2 transition-all duration-500 ${
                  era.highlight
                    ? 'bg-brand-400 border-brand-400 shadow-[0_0_12px_4px_rgba(99,102,241,0.6)] scale-125'
                    : activeIndex >= i
                    ? 'bg-white border-white scale-110'
                    : 'bg-transparent border-white/20 scale-100'
                } ${era.highlight ? 'animate-pulse' : ''}`}
              />
            </div>

            {/* ── Card ── */}
            <div className={`flex-1 relative rounded-2xl overflow-hidden border ${
              era.highlight ? 'border-brand-500/40' : 'border-white/5'
            } bg-gradient-to-r ${era.bg}`}>
              {era.highlight && (
                <div className="absolute inset-0 bg-brand-600/5 pointer-events-none" />
              )}
              <div className="flex flex-col md:flex-row items-stretch">
                {/* Image */}
                <div className="relative w-full md:w-72 lg:w-96 h-52 md:h-auto flex-shrink-0 overflow-hidden">
                  <Image
                    src={era.image}
                    alt={era.title}
                    fill
                    className="object-cover"
                    style={{ filter: era.filter }}
                    sizes="(max-width: 768px) 100vw, 384px"
                  />
                  <div className="hidden md:block absolute inset-y-0 right-0 w-24 bg-gradient-to-r from-transparent to-[inherit]" />
                </div>

                {/* Content */}
                <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full border ${era.badge}`}>
                      {era.year}
                    </span>
                    {era.highlight && (
                      <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Live nu
                      </span>
                    )}
                  </div>
                  <h3 className={`text-2xl font-bold mb-2 ${era.highlight ? 'text-white' : 'text-gray-200'}`}>
                    {era.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{era.desc}</p>

                  {era.highlight && (
                    <Link
                      href={`${DASHBOARD_URL}/register`}
                      className="mt-5 self-start inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-5 py-2.5 rounded-xl transition-all hover:scale-105 text-sm"
                    >
                      Start med Deskio gratis <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
