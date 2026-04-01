import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import { Bot, Zap, Globe, Users, Calendar, BookOpen, ArrowRight, Check, CreditCard, ShoppingBag } from 'lucide-react'
import Typewriter from '@/components/Typewriter'
import ChatDemo from '@/components/ChatDemo'
import FadeUp from '@/components/FadeUp'
import EraTimeline from '@/components/EraTimeline'
import DeskioLogo from '@/components/DeskioLogo'

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
    desc: 'Din AI-receptionist. Tilgængelig 24/7. Taler alle sprog. Booker aftaler. Fanger leads. Modtager betalinger. Kender din virksomhed indefra og ud.',
    image: '/images/era5-deskio.png',
    filter: 'none',
    bg: 'from-brand-950 to-slate-950',
    badge: 'bg-brand-600/60 text-brand-200 border-brand-500/50',
    highlight: true,
  },
]

const FEATURES = [
  { icon: Zap,         title: '24/7 tilgængelighed',   desc: 'Svar på kundespørgsmål midt om natten, i weekenden, på helligdage. Altid.' },
  { icon: Globe,       title: 'Flersproget',             desc: 'Dansk, engelsk, arabisk og mange flere. AI\'en svarer automatisk på kundens sprog.' },
  { icon: Users,       title: 'Lead capture',            desc: 'Fanger automatisk navn, e-mail og telefon fra interesserede besøgende.' },
  { icon: Calendar,    title: 'Bookinger',               desc: 'AI\'en kan oprette aftaler direkte i dit system — ingen menneskelig indblanding.' },
  { icon: CreditCard,  title: 'In-chat betalinger',      desc: 'Kunder betaler direkte i chatten. Automatisk kvittering sendt til dem med det samme.' },
  { icon: BookOpen,    title: 'Vidensbase',              desc: 'Upload dine priser, services og FAQ. AI\'en svarer præcist baseret på dit indhold.' },
  { icon: ShoppingBag, title: 'Ordrestyring',            desc: 'Alle ordrer og betalinger samlet i dit dashboard — med live status og kundekontakt.' },
  { icon: Bot,         title: 'Nem opsætning',           desc: 'Én linje kode på din hjemmeside. Ingen integration, ingen udviklere nødvendige.' },
]

const STEPS = [
  { n: '01', title: 'Opret en konto',         desc: 'Tilmeld dig gratis på under 2 minutter. Ingen kreditkort kræves.' },
  { n: '02', title: 'Beskriv din virksomhed',  desc: 'Fortæl AI\'en om dine services, åbningstider og hvad den må hjælpe med.' },
  { n: '03', title: 'Installer widget',       desc: 'Indsæt ét script-tag på din hjemmeside — det er det hele.' },
]

const PLANS = [
  {
    name: 'Starter',
    price: '99',
    desc: 'Til dig der vil i gang hurtigt',
    features: ['300 samtaler/md', 'Lead capture', 'Vidensbase (2 dokumenter)', 'Chat widget', 'E-mail support'],
    cta: 'Prøv gratis i 14 dage',
    highlight: false,
  },
  {
    name: 'Vækst',
    price: '199',
    desc: 'Til bookingbaserede virksomheder',
    features: ['1.000 samtaler/md', 'AI bookingsystem inkluderet', 'In-chat betalinger (Mollie)', 'Automatisk kvittering til kunder', 'Flersproget AI', 'SMS notifikationer', 'Vidensbase (10 dokumenter)', 'E-mail + chat support'],
    cta: 'Prøv gratis i 14 dage',
    highlight: true,
  },
  {
    name: 'Pro',
    price: '399',
    desc: 'Til virksomheder der vil skalere',
    features: ['Ubegrænsede samtaler', 'AI bookingsystem inkluderet', 'In-chat betalinger (Mollie)', 'Automatisk kvittering til kunder', 'Vidensbase (ubegrænset)', 'Flersproget AI', 'SMS notifikationer', 'Custom AI persona', 'Avanceret analytics', 'Prioriteret support'],
    cta: 'Prøv gratis i 14 dage',
    highlight: false,
  },
]

const ADDONS = [
  { icon: '📊', name: 'Analytics', desc: 'Samtalestatistik, konverteringsrate og trends.', price: '+49 kr/md inkl. moms' },
  { icon: '🤖', name: 'Custom AI persona', desc: 'Eget navn og tone-of-voice regler til din AI.', price: '+49 kr/md inkl. moms' },
  { icon: '🌐', name: 'Ekstra sprog', desc: 'Flersproget AI til Starter-kunder.', price: '+49 kr/md inkl. moms' },
  { icon: '💬', name: 'SMS notifikationer', desc: 'Send automatiske SMS-beskeder til kunder.', price: '+49 kr/md inkl. moms' },
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
            <DeskioLogo size="md" />
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

            {/* Right — live chat demo + payment trust strip below */}
            <div className="flex-shrink-0 w-full max-w-sm animate-float flex flex-col items-center gap-4">
              <ChatDemo />

              {/* Payment trust strip */}
              <div className="flex items-center gap-3 justify-center flex-wrap">
                <span className="text-xs text-gray-500">Dine kunder betaler via:</span>
                {/* Visa */}
                <div className="bg-white rounded-md px-2.5 py-1 flex items-center h-7">
                  <span className="text-[#1a1f71] font-black italic text-sm tracking-tight leading-none">VISA</span>
                </div>
                {/* Mastercard */}
                <div className="flex items-center h-7">
                  <div className="w-6 h-6 rounded-full bg-[#eb001b]" />
                  <div className="w-6 h-6 rounded-full bg-[#f79e1b] -ml-3 opacity-90" />
                </div>
                {/* MobilePay */}
                <div className="bg-[#5a78ff] rounded-md px-2.5 py-1 h-7 flex items-center">
                  <span className="text-white font-bold text-[11px] leading-none tracking-tight">MobilePay</span>
                </div>
                {/* Apple Pay */}
                <div className="bg-black border border-white/20 rounded-md px-2.5 py-1 h-7 flex items-center gap-0.5">
                  <svg className="w-3 h-3.5 text-white fill-white" viewBox="0 0 814 1000"><path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-37.5-157.2-108.9L-32 742.4c0 0 0-4.7 0-4.7.7-.3 159.5-61.5 159.5-267.7 0-174.7-118.9-268.1-119.9-269-.3-.3-.9-1.5-.9-1.5.2-.1 38.2-15.8 86.3-15.8 127.6 0 202.5 82.8 205.4 83.8.5.5 1.1.7 1.1.7.3-.3 40.8-83.8 148.1-83.8 12.4 0 172.7 1.5 266.1 150.9zm-207.3-333.9c37.5-44.9 63.5-107.8 63.5-170.7 0-8.5-.5-17.2-1.9-24.3-60.1 2.3-132.4 39.9-176.1 91.8-34.2 40.5-64.4 103.8-64.4 167.5 0 9.2 1.5 18.3 2.1 21.1 3.7.5 9.9 1.3 16.2 1.3 54.3 0 121.3-35.7 160.6-86.7z"/></svg>
                  <span className="text-white font-semibold text-[11px] leading-none">Pay</span>
                </div>
              </div>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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

      {/* ── PAYMENT SHOWCASE ────────────────────────────────────────────────── */}
      <section className="py-24 px-4 bg-white/[0.015] border-y border-white/5 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <FadeUp className="text-center mb-16">
            <p className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-3">Ny funktion</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
              Fra svar til salg —<br />
              <span className="gradient-text">helt automatisk</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Kunder kan betale direkte i chatten. Ingen omveje, ingen manuelle opfølgninger. Fra spørgsmål til betalt ordre på under et minut.
            </p>
          </FadeUp>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

            {/* Left — benefits */}
            <FadeUp className="flex-1 space-y-6">
              {[
                { icon: '💬', title: 'Kunden spørger — AI\'en sælger', desc: 'Når en kunde spørger om pris, svarer AI\'en præcist og tilbyder at oprette en betaling med det samme.' },
                { icon: '💳', title: 'Sikker betaling via Mollie', desc: 'Betalingen sker direkte på virksomhedens egen Mollie-konto. Deskio berører aldrig pengene.' },
                { icon: '✉️', title: 'Automatisk kvittering', desc: 'Kunden modtager en professionel kvittering på e-mail med det samme betalingen bekræftes.' },
                { icon: '📊', title: 'Ordrer i dit dashboard', desc: 'Alle indkommende ordrer samles i dit dashboard med live-status, kundeinfo og lydnotifikation.' },
              ].map((item, i) => (
                <FadeUp key={i} delay={i * 100}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-green-900/30 border border-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0 text-lg">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}

              <FadeUp delay={400}>
                <div className="flex flex-wrap gap-2 pt-2">
                  {['Mollie Connect', 'Automatisk kvittering', 'Alle korttyper', 'Apple Pay', 'MobilePay'].map(tag => (
                    <span key={tag} className="text-xs bg-white/5 border border-white/10 text-gray-400 px-3 py-1.5 rounded-full">{tag}</span>
                  ))}
                </div>
              </FadeUp>
            </FadeUp>

            {/* Right — chat mockup */}
            <FadeUp className="flex-shrink-0 w-full max-w-sm" delay={200}>
              <div className="bg-[#0d0d14] rounded-2xl border border-white/10 shadow-2xl overflow-hidden">

                {/* Chat header */}
                <div className="flex items-center gap-3 px-4 py-3 bg-white/[0.04] border-b border-white/10">
                  <div className="w-8 h-8 bg-brand-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">Deskio AI</p>
                    <p className="text-[10px] text-green-400 flex items-center gap-1">
                      <span className="inline-block w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" /> Online
                    </p>
                  </div>
                </div>

                {/* Messages */}
                <div className="p-4 space-y-3 text-sm">

                  {/* User */}
                  <div className="flex justify-end">
                    <div className="bg-brand-600/30 border border-brand-500/20 rounded-2xl rounded-tr-sm px-3 py-2 text-white max-w-[78%]">
                      Hvad koster Basis Pakken?
                    </div>
                  </div>

                  {/* AI */}
                  <div className="flex gap-2">
                    <div className="w-6 h-6 bg-brand-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Bot className="w-3 h-3 text-white" />
                    </div>
                    <div className="bg-white/[0.05] rounded-2xl rounded-tl-sm px-3 py-2 text-gray-300 max-w-[78%]">
                      Basis Pakken koster <span className="text-white font-bold">8.995 kr</span>. Vil du betale nu? 😊
                    </div>
                  </div>

                  {/* User */}
                  <div className="flex justify-end">
                    <div className="bg-brand-600/30 border border-brand-500/20 rounded-2xl rounded-tr-sm px-3 py-2 text-white max-w-[78%]">
                      Ja tak!
                    </div>
                  </div>

                  {/* AI — asks details */}
                  <div className="flex gap-2">
                    <div className="w-6 h-6 bg-brand-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Bot className="w-3 h-3 text-white" />
                    </div>
                    <div className="bg-white/[0.05] rounded-2xl rounded-tl-sm px-3 py-2 text-gray-300 max-w-[78%]">
                      Hvad er dit navn og e-mailadresse?
                    </div>
                  </div>

                  {/* User */}
                  <div className="flex justify-end">
                    <div className="bg-brand-600/30 border border-brand-500/20 rounded-2xl rounded-tr-sm px-3 py-2 text-white max-w-[78%]">
                      Kurt, kurt@mail.dk
                    </div>
                  </div>

                  {/* AI — payment link */}
                  <div className="flex gap-2">
                    <div className="w-6 h-6 bg-brand-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Bot className="w-3 h-3 text-white" />
                    </div>
                    <div className="bg-white/[0.05] rounded-2xl rounded-tl-sm px-3 py-2 text-gray-300 max-w-[82%]">
                      <p className="mb-2 text-xs">Her er dit betalingslink 👇</p>
                      <div className="bg-brand-600 rounded-xl px-3 py-2.5 text-center text-white text-xs font-bold flex items-center justify-center gap-1.5">
                        <CreditCard className="w-3.5 h-3.5" /> Betal 8.995 kr
                      </div>
                    </div>
                  </div>

                  {/* AI — confirmed */}
                  <div className="flex gap-2">
                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 text-[10px]">
                      ✓
                    </div>
                    <div className="bg-green-900/20 border border-green-500/20 rounded-2xl rounded-tl-sm px-3 py-2 text-green-300 max-w-[82%] text-xs leading-relaxed">
                      Din betaling er modtaget, mange tak. 🎉 Kvittering sendt til kurt@mail.dk
                    </div>
                  </div>

                  {/* Receipt badge */}
                  <div className="flex justify-center pt-1">
                    <div className="inline-flex items-center gap-1.5 bg-white/[0.04] border border-white/10 rounded-full px-3 py-1 text-[10px] text-gray-500">
                      ✉️ Kvittering sendt · <span className="text-green-400">Betalt ✓</span>
                    </div>
                  </div>

                </div>
              </div>

            </FadeUp>

          </div>
        </div>
      </section>

      {/* ── PRICING ─────────────────────────────────────────────────────────── */}
      <section id="pricing" className="py-24 px-4 bg-white/[0.015] border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <FadeUp className="text-center mb-16">
            <p className="text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">Priser</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
              Enkel og gennemsigtig
            </h2>
            <p className="text-gray-400 text-lg">14 dages gratis prøveperiode. Intet kreditkort kræves.</p>
          </FadeUp>

          {/* ── Plan cards ── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {PLANS.map((plan, i) => (
              <FadeUp key={plan.name} delay={i * 120}>
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
                      <span className="text-gray-400">kr./md</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">inkl. moms</p>
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map(f => (
                      <li key={f} className="flex items-start gap-3 text-sm text-gray-300">
                        <Check className="w-4 h-4 text-brand-400 flex-shrink-0 mt-0.5" />
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

          {/* ── Final note ── */}
          <FadeUp>
            <p className="text-center text-sm text-gray-500 mt-4">
              Alle priser er inkl. moms. Abonnementet faktureres månedligt og kan opsiges når som helst.
            </p>
          </FadeUp>
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
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Niche links */}
          <div>
            <p className="text-xs font-semibold text-gray-600 uppercase tracking-widest mb-4">AI-receptionist til din branche</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500">
              <Link href="/frisoer" className="hover:text-gray-300 transition-colors">Frisør & Skønhed</Link>
              <Link href="/klinik" className="hover:text-gray-300 transition-colors">Klinik & Sundhed</Link>
              <Link href="/fitness" className="hover:text-gray-300 transition-colors">Fitness & Yoga</Link>
              <Link href="/restaurant" className="hover:text-gray-300 transition-colors">Restaurant & Café</Link>
              <Link href="/tandlaege" className="hover:text-gray-300 transition-colors">Tandlæge</Link>
              <Link href="/konsulent" className="hover:text-gray-300 transition-colors">Konsulent & Coach</Link>
              <Link href="/tatovering" className="hover:text-gray-300 transition-colors">Tatovering & Piercing</Link>
              <Link href="/autovaerksted" className="hover:text-gray-300 transition-colors">Autoværksted</Link>
              <Link href="/escape-room" className="hover:text-gray-300 transition-colors">Escape Room</Link>
              <Link href="/coworking" className="hover:text-gray-300 transition-colors">Coworking & Mødelokaler</Link>
            </div>
          </div>
          <div className="border-t border-white/5 pt-6 space-y-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-brand-600 rounded-md flex items-center justify-center">
                  <Bot className="w-3 h-3 text-white" />
                </div>
                <DeskioLogo size="sm" />
              </div>
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1">
                <Link href={`${DASHBOARD_URL}/login`} className="hover:text-gray-400 transition-colors">Log ind</Link>
                <Link href={`${DASHBOARD_URL}/register`} className="hover:text-gray-400 transition-colors">Opret konto</Link>
                <a href="mailto:support@deskio.dk" className="hover:text-gray-400 transition-colors">Support</a>
                <Link href="/privatlivspolitik" className="hover:text-gray-400 transition-colors">Privatlivspolitik</Link>
                <Link href="/handelsbetingelser" className="hover:text-gray-400 transition-colors">Handelsbetingelser</Link>
              </div>
            </div>
            <div className="text-center text-xs text-gray-600 space-y-1 pb-2">
              <p>Velkommen til Deskio.dk – Deskio.dk er ejet af TC 1021 APS – Viborgvej 792A – 8471 Sabro – Cvr.: DK 39 52 37 44</p>
              <p>© 2026 Deskio. Alle rettigheder forbeholdes.</p>
              {/* ── ClearWeb stitched badge ── */}
              <div className="flex justify-center pt-4">
                <a
                  href="https://www.clearweb.dk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-5 py-2.5
                    border-2 border-dashed border-white/20 rounded-sm
                    bg-white/[0.04] hover:bg-white/[0.07]
                    hover:border-white/35
                    transition-all duration-300
                    shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_2px_12px_rgba(0,0,0,0.4)]
                    hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_4px_20px_rgba(99,102,241,0.15)]
                    relative"
                  style={{ letterSpacing: '0.12em' }}
                >
                  {/* Corner stitch marks */}
                  <span className="absolute top-1 left-1 w-1.5 h-1.5 border-t border-l border-white/25 rounded-tl-sm" />
                  <span className="absolute top-1 right-1 w-1.5 h-1.5 border-t border-r border-white/25 rounded-tr-sm" />
                  <span className="absolute bottom-1 left-1 w-1.5 h-1.5 border-b border-l border-white/25 rounded-bl-sm" />
                  <span className="absolute bottom-1 right-1 w-1.5 h-1.5 border-b border-r border-white/25 rounded-br-sm" />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-500 group-hover:text-gray-400 transition-colors">
                    Udviklet af
                  </span>
                  <span className="text-[11px] font-black uppercase tracking-[0.15em] text-white/80 group-hover:text-white transition-colors">
                    Clear<span className="text-orange-400 group-hover:text-orange-300 transition-colors">Web</span>
                  </span>
                  {/* Inline Danish flag SVG — always renders correctly */}
                  <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="rounded-[2px] shadow-sm flex-shrink-0">
                    <rect width="18" height="13" fill="#C60C30"/>
                    <rect x="5" width="3" height="13" fill="white"/>
                    <rect y="5" width="18" height="3" fill="white"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Deskio chat widget — powered by our own AI receptionist */}
      <Script
        src="https://api.deskio.dk/widget.js"
        data-business-id="b7e75722-9ab4-44e6-8766-85212d4b6fc2"
        data-color="#6366f1"
        strategy="afterInteractive"
      />
    </div>
  )
}
