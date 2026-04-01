'use client'
import { useEffect, useRef, useState } from 'react'

type Message = {
  role: 'user' | 'assistant'
  text: string
  delay: number
  isPaymentBtn?: boolean
}

const SCENARIOS: { label: string; emoji: string; messages: Message[] }[] = [
  {
    label: 'Booking',
    emoji: '📅',
    messages: [
      { role: 'user',      text: 'Hej! Kan jeg booke en tid til i morgen kl. 18?',                                        delay: 0 },
      { role: 'assistant', text: 'Selvfølgelig! Den tid er ledig. Hvad er dit navn?',                                     delay: 1400 },
      { role: 'user',      text: 'Maria Hansen',                                                                          delay: 2600 },
      { role: 'assistant', text: '✅ Booket! Maria Hansen – i morgen kl. 18:00. Bekræftelse sendes på e-mail.',           delay: 3800 },
    ],
  },
  {
    label: 'Betaling',
    emoji: '💳',
    messages: [
      { role: 'user',      text: 'Hvad koster klip og farvning?',                                                        delay: 0 },
      { role: 'assistant', text: 'Klip og farvning koster 650 kr. Vil du betale nu? 😊',                                 delay: 1200 },
      { role: 'user',      text: 'Ja tak — Sara Jensen, sara@mail.dk',                                                   delay: 2400 },
      { role: 'assistant', text: 'Her er dit betalingslink 👇',                                                          delay: 3500, isPaymentBtn: true },
      { role: 'assistant', text: '✅ Betalt! Kvittering sendt til sara@mail.dk 🎉',                                      delay: 5200 },
    ],
  },
]

const PAUSE_AFTER_MS = 2800   // pause on completed conversation before cycling
const FADE_MS        = 400    // crossfade duration

export default function ChatDemo() {
  const [scenario, setScenario]   = useState(0)
  const [visible, setVisible]     = useState<number[]>([])
  const [started, setStarted]     = useState(false)
  const [fading, setFading]       = useState(false)
  const ref      = useRef<HTMLDivElement>(null)
  const msgsRef  = useRef<HTMLDivElement>(null)
  const timers   = useRef<ReturnType<typeof setTimeout>[]>([])

  // Start on scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  // Play current scenario, then schedule cycle
  useEffect(() => {
    if (!started) return
    timers.current.forEach(clearTimeout)
    timers.current = []

    const msgs = SCENARIOS[scenario].messages
    setVisible([])
    setFading(false)

    msgs.forEach((msg, i) => {
      const t = setTimeout(() => setVisible(v => [...v, i]), msg.delay)
      timers.current.push(t)
    })

    const lastDelay = msgs[msgs.length - 1].delay
    // After last message shown, pause then crossfade to next scenario
    const cycleTimer = setTimeout(() => {
      setFading(true)
      setTimeout(() => {
        setScenario(s => (s + 1) % SCENARIOS.length)
        setFading(false)
      }, FADE_MS)
    }, lastDelay + PAUSE_AFTER_MS)
    timers.current.push(cycleTimer)

    return () => timers.current.forEach(clearTimeout)
  }, [started, scenario])

  // Auto-scroll to bottom whenever a new message appears
  useEffect(() => {
    if (msgsRef.current) {
      msgsRef.current.scrollTop = msgsRef.current.scrollHeight
    }
  }, [visible])

  const current = SCENARIOS[scenario]

  return (
    <div ref={ref} className="bg-[#111118] rounded-2xl border border-white/10 p-5 w-full max-w-sm shadow-2xl">

      {/* Header */}
      <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white text-sm font-bold">AI</div>
          <div>
            <div className="text-white text-sm font-semibold">Deskio Assistent</div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-gray-400">Online nu</span>
            </div>
          </div>
        </div>
        {/* Scenario badge */}
        <div className="flex gap-1">
          {SCENARIOS.map((s, i) => (
            <span
              key={i}
              className={`text-[10px] px-2 py-0.5 rounded-full border transition-all duration-300 ${
                i === scenario
                  ? 'bg-brand-600/30 border-brand-500/50 text-brand-300'
                  : 'bg-white/[0.04] border-white/10 text-gray-600'
              }`}
            >
              {s.emoji} {s.label}
            </span>
          ))}
        </div>
      </div>

      {/* Messages — fixed height, scrolls to latest message automatically */}
      <div
        ref={msgsRef}
        className="space-y-3 h-[280px] overflow-y-auto scroll-smooth transition-opacity duration-300 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        style={{ opacity: fading ? 0 : 1 }}
      >
        {current.messages.map((msg, i) =>
          visible.includes(i) ? (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-chat-bubble`}>
              {msg.isPaymentBtn ? (
                <div className="bg-white/10 text-gray-100 rounded-2xl rounded-bl-sm px-3.5 py-2.5 text-sm max-w-[85%] space-y-2">
                  <p>Her er dit betalingslink 👇</p>
                  <div className="bg-brand-600 rounded-xl px-3 py-2 text-center text-white text-xs font-bold flex items-center justify-center gap-1.5">
                    💳 Betal 650 kr
                  </div>
                </div>
              ) : (
                <div className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-brand-600 text-white rounded-br-sm'
                    : 'bg-white/10 text-gray-100 rounded-bl-sm'
                }`}>
                  {msg.text}
                </div>
              )}
            </div>
          ) : null
        )}

        {/* Typing indicator */}
        {started && visible.length < current.messages.length && visible.length > 0 && (
          <div className="flex justify-start">
            <div className="bg-white/10 px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1">
              {[0, 1, 2].map(i => (
                <span key={i} className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

type Message = {
  role: 'user' | 'assistant'
  text: string
  delay: number
  isPaymentBtn?: boolean
}

const SCENARIOS: { label: string; emoji: string; messages: Message[] }[] = [
  {
    label: 'Booking',
    emoji: '📅',
    messages: [
      { role: 'user',      text: 'Hej! Kan jeg booke en tid til i morgen kl. 18?',                                        delay: 0 },
      { role: 'assistant', text: 'Selvfølgelig! Den tid er ledig. Hvad er dit navn?',                                     delay: 1400 },
      { role: 'user',      text: 'Maria Hansen',                                                                          delay: 2600 },
      { role: 'assistant', text: '✅ Booket! Maria Hansen – i morgen kl. 18:00. Bekræftelse sendes på e-mail.',           delay: 3800 },
    ],
  },
  {
    label: 'Betaling',
    emoji: '💳',
    messages: [
      { role: 'user',      text: 'Hvad koster klip og farvning?',                                                        delay: 0 },
      { role: 'assistant', text: 'Klip og farvning koster 650 kr. Vil du betale nu? 😊',                                 delay: 1200 },
      { role: 'user',      text: 'Ja tak — Sara Jensen, sara@mail.dk',                                                   delay: 2400 },
      { role: 'assistant', text: 'Her er dit betalingslink 👇',                                                          delay: 3500, isPaymentBtn: true },
      { role: 'assistant', text: '✅ Betalt! Kvittering sendt til sara@mail.dk 🎉',                                      delay: 5200 },
    ],
  },
]

const PAUSE_AFTER_MS = 2800   // pause on completed conversation before cycling
const FADE_MS        = 400    // crossfade duration

export default function ChatDemo() {
  const [scenario, setScenario]   = useState(0)
  const [visible, setVisible]     = useState<number[]>([])
  const [started, setStarted]     = useState(false)
  const [fading, setFading]       = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const timers = useRef<ReturnType<typeof setTimeout>[]>([])

  // Start on scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  // Play current scenario, then schedule cycle
  useEffect(() => {
    if (!started) return
    timers.current.forEach(clearTimeout)
    timers.current = []

    const msgs = SCENARIOS[scenario].messages
    setVisible([])
    setFading(false)

    msgs.forEach((msg, i) => {
      const t = setTimeout(() => setVisible(v => [...v, i]), msg.delay)
      timers.current.push(t)
    })

    const lastDelay = msgs[msgs.length - 1].delay
    // After last message shown, pause then crossfade to next scenario
    const cycleTimer = setTimeout(() => {
      setFading(true)
      setTimeout(() => {
        setScenario(s => (s + 1) % SCENARIOS.length)
        setFading(false)
      }, FADE_MS)
    }, lastDelay + PAUSE_AFTER_MS)
    timers.current.push(cycleTimer)

    return () => timers.current.forEach(clearTimeout)
  }, [started, scenario])

  const current = SCENARIOS[scenario]

  return (
    <div ref={ref} className="bg-[#111118] rounded-2xl border border-white/10 p-5 w-full max-w-sm shadow-2xl">

      {/* Header */}
      <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white text-sm font-bold">AI</div>
          <div>
            <div className="text-white text-sm font-semibold">Deskio Assistent</div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-gray-400">Online nu</span>
            </div>
          </div>
        </div>
        {/* Scenario badge */}
        <div className="flex gap-1">
          {SCENARIOS.map((s, i) => (
            <span
              key={i}
              className={`text-[10px] px-2 py-0.5 rounded-full border transition-all duration-300 ${
                i === scenario
                  ? 'bg-brand-600/30 border-brand-500/50 text-brand-300'
                  : 'bg-white/[0.04] border-white/10 text-gray-600'
              }`}
            >
              {s.emoji} {s.label}
            </span>
          ))}
        </div>
      </div>

      {/* Messages — fixed height so layout never jumps between scenarios */}
      <div
        className="space-y-3 h-[280px] overflow-hidden transition-opacity duration-300"
        style={{ opacity: fading ? 0 : 1 }}
      >
        {current.messages.map((msg, i) =>
          visible.includes(i) ? (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-chat-bubble`}>
              {msg.isPaymentBtn ? (
                <div className="bg-white/10 text-gray-100 rounded-2xl rounded-bl-sm px-3.5 py-2.5 text-sm max-w-[85%] space-y-2">
                  <p>Her er dit betalingslink 👇</p>
                  <div className="bg-brand-600 rounded-xl px-3 py-2 text-center text-white text-xs font-bold flex items-center justify-center gap-1.5">
                    💳 Betal 650 kr
                  </div>
                </div>
              ) : (
                <div className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-brand-600 text-white rounded-br-sm'
                    : 'bg-white/10 text-gray-100 rounded-bl-sm'
                }`}>
                  {msg.text}
                </div>
              )}
            </div>
          ) : null
        )}

        {/* Typing indicator */}
        {started && visible.length < current.messages.length && visible.length > 0 && (
          <div className="flex justify-start">
            <div className="bg-white/10 px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1">
              {[0, 1, 2].map(i => (
                <span key={i} className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
