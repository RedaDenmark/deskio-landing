'use client'
import { useEffect, useRef, useState } from 'react'

const MESSAGES = [
  { role: 'user',      text: 'Hej! Kan jeg booke en tid til i morgen kl. 18?',       delay: 0 },
  { role: 'assistant', text: 'Selvfølgelig! Den tid er ledig. Hvad er dit navn?',     delay: 1400 },
  { role: 'user',      text: 'Maria Hansen',                                          delay: 2600 },
  { role: 'assistant', text: '✅ Booket! Maria Hansen – i morgen kl. 18:00. Du modtager en bekræftelse på e-mail.', delay: 3800 },
]

export default function ChatDemo() {
  const [visible, setVisible] = useState<number[]>([])
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    MESSAGES.forEach((msg, i) => {
      setTimeout(() => setVisible(v => [...v, i]), msg.delay)
    })
  }, [started])

  return (
    <div ref={ref} className="bg-[#111118] rounded-2xl border border-white/10 p-5 w-full max-w-sm shadow-2xl">
      {/* Header */}
      <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/10">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white text-sm font-bold">AI</div>
        <div>
          <div className="text-white text-sm font-semibold">Deskio Assistent</div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-gray-400">Online nu</span>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="space-y-3 min-h-[160px]">
        {MESSAGES.map((msg, i) => (
          visible.includes(i) ? (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-chat-bubble`}>
              <div className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                msg.role === 'user'
                  ? 'bg-brand-600 text-white rounded-br-sm'
                  : 'bg-white/10 text-gray-100 rounded-bl-sm'
              }`}>
                {msg.text}
              </div>
            </div>
          ) : null
        ))}

        {/* Typing indicator — shows between messages */}
        {started && visible.length < MESSAGES.length && visible.length > 0 && (
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
