import Image from 'next/image'
import Link from 'next/link'
import { Bot, Zap, Globe, Users, Calendar, BookOpen, ArrowRight, Check } from 'lucide-react'
import Typewriter from '@/components/Typewriter'
import ChatDemo from '@/components/ChatDemo'
import FadeUp from '@/components/FadeUp'
import EraTimeline from '@/components/EraTimeline'

const DASHBOARD_URL = 'https://dashboard.deskio.dk'

const ERAS = [
  {
    year: '1920erne',
    title: 'Telefonomstillingen',
    desc: 'En operatør forbandt manuelt hvert opkald. Kunderne ventede. Virksomheder mistede henvendelser. Åbningstider styrede alt.',
    image: '/images/era1-switchboard.png',
    filter: 'sepia(0.7) brightness(0.8)',
    bg: 'from-amber-950 to-stone-950',
    badge: 'bg-amber-900/60 text-amber-200 border-amber-700/50',
  },
  {
    year: '1970erne',
    title: 'Receptionisten',
    desc: 'En venlig person ved skrivebordet tog imod kunder og bookede aftaler i hånden. Personlig — men begrænset til arbejdstid.',
    image: '/images/era2-receptionist.png',
    filter: 'sepia(0.3) brightness(0.85)',
    bg: 'from-orange-950 to-stone-950',
    badge: 'bg-orange-900/60 text-orange-200 border-orange-700/50',
  },
  {
    year: '2000erne',
    title: 'Callcenteret',
    desc: 'Outsourcet. Upersonligt. "Din henvendelse er vigtig for os." Kunderne holdt i kø. Medarbejderne brændte ud.',
    image: '/images/era3-callcenter.png',
    filter: 'saturate(0.5) brightness(0.75)',
    bg: 'from-slate-950 to-blue-950',
    badge: 'bg-slate-700/60 text-slate-200 border-slate-600/50',
  },
  {
    year: '2010erne',
    title: 'Chatbotten',
    desc: 'Stive menuer. Ingen intelligens. "Tryk 1 for booking, tryk 2 for support." Alle hadede dem — men de var billige.',
    image: '/images/era4-chatbot.png',
    filter: 'saturate(0.4) brightness(0.8)',
    bg: 'from-gray-950 to-zinc-950',
    badge: 'bg-zinc-700/60 text-zinc-200 border-zinc-600/50',
  },
  {
    year: 'Nu',
    title: 'Deskio',
    desc: 'Din AI-receptionist. Tilgængelig 24/7. Taler alle sprog. Booker aftaler. Fanger leads. Kender din virksomhed indefra og ud.',
    image: '/images/era5-deskio.png',
    filter: 'none',
    bg: 'from-brand-950 to-slate-950',
    badge: 'bg-brand-600/60 text-brand-200 border-brand-500/50',
    highlight: true,
  },
]

const FEATURES = [
  { icon: Zap,      title: '24/7 tilgængelighed',   desc: 'Svar på kundespørgsmål midt om natten, i weekenden, på helligdage. Altid.' },
  { icon: Globe,    title: 'Flersproget',             desc: 'Dansk, engelsk, arabisk og mange flere. AI\'en svarer automatisk på kundens sprog.' },
  { icon: Users,    title: 'Lead capture',            desc: 'Fanger automatisk navn, e-mail og telefon fra interesserede besøgende.' },
  { icon: Calendar, title: 'Bookinger',               desc: 'AI\'en kan oprette aftaler direkte i dit system — ingen menneskelig indblanding.' },
  { icon: BookOpen, title: 'Vidensbase',              desc: 'Upload dine priser, services og FAQ. AI\'en svarer præcist baseret på dit indhold.' },
  { icon: Bot,      title: 'Nem opsætning',           desc: 'Én linje kode på din hjemmeside. Ingen integration, ingen udviklere nødvendige.' },
]

const STEPS = [
  { n: '01', title: 'Opret en konto',         desc: 'Tilmeld dig gratis på under 2 minutter. Ingen kreditkort kræves.' },
  { n: '02', title: 'Beskriv din virksomhed',  desc: 'Fortæl AI\'en om dine services, åbningstider og hvad den må hjælpe med.' },
  { n: '03', title: 'Installer widget',       desc: 'Indsæt ét script-tag på din hjemmeside — det er det hele.' },
]

const PLANS = [
  {
    name: 'Gratis',
    price: '0',
    desc: 'Kom i gang med det samme',
    features: ['Op til 100 samtaler/md', 'Lead capture', 'Vidensbase (5 dokumenter)', 'Chat widget', 'E-mail support'],
    cta: 'Start gratis',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '299',
    desc: 'Til seriøse virksomheder',
    features: ['Ubegrænsede samtaler', 'AI bookingsystem', 'Vidensbase (ubegrænset)', 'Prioriteret support', 'Flersproget AI', 'Avanceret analytics'],
    cta: 'Start Pro gratis i 14 dage',
    highlight: true,
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">

      {/* ── NAV ─────────────────────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-white text-lg tracking-tight">Deskio</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#evolution" className="hover:text-white transition-colors">Historien</a>
            <a href="#features" className="hover:text-white transition-colors">Funktioner</a>
            <a href="#how" className="hover:text-white transition-colors">Sådan virker det</a>
            <a href="#pricing" className="hover:text-white transition-colors">Priser</a>
          </div>
          <div className="flex items-center gap-3">
            <Link href={`${DASHBOARD_URL}/login`} className="hidden md:block text-sm text-gray-400 hover:text-white transition-colors">Log ind</Link>
            <Link href={`${DASHBOARD_URL}/register`} className="bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
              Start gratis
            </Link>
          </div>
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-24 px-4 bg-grid overflow-hidden">
        {/* Glow orb */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left — copy */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-brand-600/10 border border-brand-600/20 rounded-full px-4 py-1.5 text-sm text-brand-400 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
                AI-receptionist til danske virksomheder
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-6">
                AI-receptionist til<br />
                <span className="block h-[1.2em]">
                  <Typewriter />
                </span>
              </h1>

              <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Mens du passer din virksomhed, passer Deskio dine kunder. Book aftaler, fang leads og svar på spørgsmål — automatisk.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Link href={`${DASHBOARD_URL}/register`}
                  className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 py-3.5 rounded-xl transition-all hover:scale-105 glow">
                  Start gratis <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="#evolution"
                  className="inline-flex items-center justify-center gap-2 border border-white/10 hover:border-white/20 text-gray-300 hover:text-white font-medium px-6 py-3.5 rounded-xl transition-colors">
                  Se historien ↓
                </a>
              </div>

              <p className="text-xs text-gray-600 mt-4">Gratis at starte. Intet kreditkort kræves.</p>
            </div>

            {/* Right — live chat demo */}
            <div className="flex-shrink-0 w-full max-w-sm animate-float">
              <ChatDemo />
            </div>
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF BAR ────────────────────────────────────────────────── */}
      <section className="border-y border-white/5 py-6 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto px-4 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm text-gray-500">
          <span>Til virksomheder som:</span>
          {['✂️ Frisører', '🦷 Tandlæger', '🍽️ Restauranter', '💅 Skønhedsklinikker', '🏋️ Fitnesscentre', '🏥 Klinikker'].map(b => (
            <span key={b} className="text-gray-400">{b}</span>
          ))}
        </div>
      </section>

      {/* ── EVOLUTION TIMELINE ──────────────────────────────────────────────── */}
      <section id="evolution" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <FadeUp className="text-center mb-16">
            <p className="text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">Tidslinje</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
              Kundeservice har udviklet sig.
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Fra telefonomstillingen til AI. Er din virksomhed med på det nyeste kapitel?
            </p>
          </FadeUp>

          <EraTimeline eras={ERAS} />
        </div>
      </section>

      {/* ── FEATURES ────────────────────────────────────────────────────────── */}
      <section id="features" className="py-24 px-4 bg-white/[0.015] border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <FadeUp className="text-center mb-16">
            <p className="text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">Funktioner</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
              Alt din receptionist<br />burde kunne gøre
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Alt din virksomhed har brug for —<br />altid klar til dine kunder.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURES.map((f, i) => (
              <FadeUp key={f.title} delay={i * 80}>
                <div className="group bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 hover:border-brand-500/30 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-10 h-10 bg-brand-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-600/30 transition-colors">
                    <f.icon className="w-5 h-5 text-brand-400" />
                  </div>
                  <h3 className="font-bold text-white mb-2">{f.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ────────────────────────────────────────────────────── */}
      <section id="how" className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <FadeUp className="text-center mb-16">
            <p className="text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">Sådan virker det</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
              Klar på 10 minutter
            </h2>
            <p className="text-gray-400 text-lg">Ingen teknisk viden nødvendig.</p>
          </FadeUp>

          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-8 top-10 bottom-10 w-px bg-gradient-to-b from-brand-600 via-brand-600/50 to-transparent hidden md:block" />

            <div className="space-y-8">
              {STEPS.map((step, i) => (
                <FadeUp key={step.n} delay={i * 150}>
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-brand-600/20 border border-brand-600/30 flex items-center justify-center">
                      <span className="text-brand-400 font-black text-lg">{step.n}</span>
                    </div>
                    <div className="pt-2">
                      <h3 className="text-xl font-bold text-white mb-1">{step.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ─────────────────────────────────────────────────────────── */}
      <section id="pricing" className="py-24 px-4 bg-white/[0.015] border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <FadeUp className="text-center mb-16">
            <p className="text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">Priser</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
              Enkel og gennemsigtig
            </h2>
            <p className="text-gray-400 text-lg">Start gratis. Opgradér når du er klar.</p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PLANS.map((plan, i) => (
              <FadeUp key={plan.name} delay={i * 150}>
                <div className={`relative rounded-2xl border p-8 flex flex-col h-full ${
                  plan.highlight
                    ? 'border-brand-500/50 bg-gradient-to-b from-brand-900/30 to-transparent'
                    : 'border-white/10 bg-white/[0.03]'
                }`}>
                  {plan.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-brand-600 text-white text-xs font-bold px-3 py-1 rounded-full">Mest populær</span>
                    </div>
                  )}
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-white mb-1">{plan.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{plan.desc}</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-black text-white">{plan.price}</span>
                      <span className="text-gray-400">kr/md</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map(f => (
                      <li key={f} className="flex items-center gap-3 text-sm text-gray-300">
                        <Check className="w-4 h-4 text-brand-400 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link href={`${DASHBOARD_URL}/register`}
                    className={`w-full text-center py-3 rounded-xl font-semibold text-sm transition-all ${
                      plan.highlight
                        ? 'bg-brand-600 hover:bg-brand-700 text-white hover:scale-105'
                        : 'border border-white/10 hover:border-white/20 text-white hover:bg-white/5'
                    }`}>
                    {plan.cta}
                  </Link>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────────────────────────────────────── */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-900/10 to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-600/8 rounded-full blur-[100px] pointer-events-none" />

        <FadeUp className="max-w-3xl mx-auto text-center relative">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
            Din front desk<br />
            <span className="gradient-text">kører sig selv.</span>
          </h2>
          <p className="text-gray-400 text-xl mb-10 max-w-xl mx-auto leading-relaxed">
            Slut dig til de virksomheder der allerede bruger Deskio til at besvare kunderne — hele døgnet.
          </p>
          <Link href={`${DASHBOARD_URL}/register`}
            className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-bold text-lg px-8 py-4 rounded-2xl transition-all hover:scale-105 glow">
            Start gratis i dag <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-gray-600 text-sm mt-4">Ingen binding. Ingen kreditkort.</p>
        </FadeUp>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────────────── */}
      <footer className="border-t border-white/5 py-10 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-brand-600 rounded-md flex items-center justify-center">
              <Bot className="w-3 h-3 text-white" />
            </div>
            <span className="font-semibold text-gray-400">Deskio</span>
          </div>
          <span>© 2026 Deskio. Alle rettigheder forbeholdes.</span>
          <div className="flex gap-6">
            <Link href={`${DASHBOARD_URL}/login`} className="hover:text-gray-400 transition-colors">Log ind</Link>
            <Link href={`${DASHBOARD_URL}/register`} className="hover:text-gray-400 transition-colors">Opret konto</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
