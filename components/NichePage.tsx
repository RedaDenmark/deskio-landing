import Link from 'next/link'
import { Bot, Check, ArrowRight, ArrowLeft } from 'lucide-react'
import DeskioLogo from '@/components/DeskioLogo'
import FadeUp from '@/components/FadeUp'

const DASHBOARD_URL = 'https://dashboard.deskio.dk'

export interface NicheFeature {
  emoji: string
  title: string
  desc: string
}

export interface NicheFaq {
  q: string
  a: string
}

export interface NichePageProps {
  // SEO
  slug: string
  title: string           // <h1>
  headline: string        // big gradient headline word(s)
  metaTitle: string
  metaDescription: string

  // Hero
  emoji: string
  heroTagline: string
  heroParagraph: string

  // Social proof bar
  proofItems: string[]

  // Features section
  featuresHeading: string
  features: NicheFeature[]

  // How it works (optional custom steps)
  stepsHeading?: string
  steps?: { n: string; title: string; desc: string }[]

  // Testimonial / quote (optional)
  quote?: { text: string; author: string; role: string }

  // FAQ
  faqHeading?: string
  faqs: NicheFaq[]

  // CTA section
  ctaHeading: string
  ctaSubtext: string
}

const DEFAULT_STEPS = [
  { n: '01', title: 'Opret en konto', desc: 'Tilmeld dig gratis på under 2 minutter. Intet kreditkort kræves.' },
  { n: '02', title: 'Beskriv din virksomhed', desc: 'Fortæl AI\'en om dine services, priser og åbningstider.' },
  { n: '03', title: 'Installer på din hjemmeside', desc: 'Kopiér ét script-tag ind. Din AI-receptionist er live med det samme.' },
]

const PLANS = [
  {
    name: 'Starter',
    price: '99',
    desc: 'Til dig der vil i gang hurtigt',
    features: ['300 samtaler/md', 'Lead capture', 'Chat widget', 'E-mail support'],
    highlight: false,
  },
  {
    name: 'Vækst',
    price: '199',
    desc: 'Til bookingbaserede virksomheder',
    features: ['1.000 samtaler/md', 'AI bookingsystem', 'Flersproget AI', 'SMS notifikationer'],
    highlight: true,
  },
  {
    name: 'Pro',
    price: '399',
    desc: 'Alt inkluderet',
    features: ['Ubegrænsede samtaler', 'Custom AI persona', 'Avanceret analytics', 'Prioriteret support'],
    highlight: false,
  },
]

export default function NichePage(props: NichePageProps) {
  const {
    title, headline, emoji, heroTagline, heroParagraph,
    proofItems, featuresHeading, features,
    stepsHeading, steps = DEFAULT_STEPS,
    quote, faqHeading, faqs, ctaHeading, ctaSubtext,
  } = props

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <DeskioLogo size="md" />
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <Link href="/#features" className="hover:text-white transition-colors">Funktioner</Link>
            <Link href="/#pricing" className="hover:text-white transition-colors">Priser</Link>
            <Link href="/" className="hover:text-white transition-colors">Forside</Link>
          </div>
          <div className="flex items-center gap-3">
            <Link href={`${DASHBOARD_URL}/login`} className="hidden md:block text-sm text-gray-400 hover:text-white transition-colors">Log ind</Link>
            <Link href={`${DASHBOARD_URL}/register`} className="bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
              Start gratis
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative pt-32 pb-24 px-4 bg-grid overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative">
          <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-300 transition-colors mb-8">
            <ArrowLeft className="w-3.5 h-3.5" /> Tilbage til forsiden
          </Link>
          <div className="inline-flex items-center gap-2 bg-brand-600/10 border border-brand-600/20 rounded-full px-4 py-1.5 text-sm text-brand-400 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
            {heroTagline}
          </div>
          <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight mb-6">
            {title}<br />
            <span className="gradient-text">{headline}</span>
          </h1>
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            {heroParagraph}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href={`${DASHBOARD_URL}/register`}
              className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-8 py-4 rounded-xl transition-all hover:scale-105 glow text-lg">
              Prøv gratis i 14 dage <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/#pricing"
              className="inline-flex items-center justify-center gap-2 border border-white/10 hover:border-white/20 text-gray-300 hover:text-white font-medium px-8 py-4 rounded-xl transition-colors text-lg">
              Se priser
            </Link>
          </div>
          <p className="text-xs text-gray-600 mt-4">Gratis at starte. Intet kreditkort kræves.</p>
        </div>
      </section>

      {/* PROOF BAR */}
      <section className="border-y border-white/5 py-5 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto px-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-gray-500">
          {proofItems.map((item) => (
            <span key={item} className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-brand-400 shrink-0" /> {item}
            </span>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 px-4" id="features">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <div className="text-center mb-16">
              <p className="text-xs font-semibold text-brand-400 uppercase tracking-widest mb-3">Funktioner</p>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight">{featuresHeading}</h2>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <FadeUp key={f.title} delay={i * 80}>
                <div className="bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 hover:border-brand-500/30 rounded-2xl p-6 transition-all duration-300">
                  <div className="text-3xl mb-4">{f.emoji}</div>
                  <h3 className="font-bold text-white mb-2">{f.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 px-4 bg-white/[0.02] border-y border-white/5" id="how">
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <div className="text-center mb-16">
              <p className="text-xs font-semibold text-brand-400 uppercase tracking-widest mb-3">Kom i gang</p>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight">{stepsHeading ?? 'Klar på 10 minutter'}</h2>
            </div>
          </FadeUp>
          <div className="space-y-6">
            {steps.map((s, i) => (
              <FadeUp key={s.n} delay={i * 100}>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-brand-600/20 border border-brand-500/30 flex items-center justify-center shrink-0">
                    <span className="text-brand-400 font-black text-sm">{s.n}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">{s.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE / TESTIMONIAL */}
      {quote && (
        <section className="py-20 px-4">
          <FadeUp>
            <div className="max-w-2xl mx-auto text-center">
              <div className="text-4xl mb-6 opacity-30">"</div>
              <blockquote className="text-xl md:text-2xl font-medium text-white/90 leading-relaxed mb-6 italic">
                {quote.text}
              </blockquote>
              <div className="text-sm text-gray-500">
                <span className="font-semibold text-gray-300">{quote.author}</span>
                {quote.role && <span> — {quote.role}</span>}
              </div>
            </div>
          </FadeUp>
        </section>
      )}

      {/* PRICING */}
      <section className="py-24 px-4 bg-white/[0.02] border-y border-white/5" id="pricing">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <div className="text-center mb-16">
              <p className="text-xs font-semibold text-brand-400 uppercase tracking-widest mb-3">Priser</p>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">Enkel og gennemsigtig</h2>
              <p className="text-gray-400">14 dages gratis prøveperiode. Intet kreditkort kræves.</p>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map(f => (
                      <li key={f} className="flex items-start gap-3 text-sm text-gray-300">
                        <Check className="w-4 h-4 text-brand-400 flex-shrink-0 mt-0.5" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Link href={`${DASHBOARD_URL}/register`}
                    className={`w-full text-center py-3 rounded-xl font-semibold text-sm transition-all ${
                      plan.highlight
                        ? 'bg-brand-600 hover:bg-brand-700 text-white hover:scale-105'
                        : 'border border-white/10 hover:border-white/20 text-white hover:bg-white/5'
                    }`}>
                    Prøv gratis i 14 dage
                  </Link>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4" id="faq">
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <div className="text-center mb-16">
              <p className="text-xs font-semibold text-brand-400 uppercase tracking-widest mb-3">FAQ</p>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight">{faqHeading ?? 'Ofte stillede spørgsmål'}</h2>
            </div>
          </FadeUp>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FadeUp key={faq.q} delay={i * 60}>
                <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-6">
                  <h3 className="font-bold text-white mb-2">{faq.q}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-900/10 to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-600/8 rounded-full blur-[100px] pointer-events-none" />
        <FadeUp className="max-w-3xl mx-auto text-center relative">
          <div className="text-5xl mb-6">{emoji}</div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">{ctaHeading}</h2>
          <p className="text-gray-400 text-xl mb-10 max-w-xl mx-auto leading-relaxed">{ctaSubtext}</p>
          <Link href={`${DASHBOARD_URL}/register`}
            className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-bold text-lg px-8 py-4 rounded-2xl transition-all hover:scale-105 glow">
            Start gratis i dag <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-gray-600 text-sm mt-4">Ingen binding. Ingen kreditkort.</p>
        </FadeUp>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-10 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-brand-600 rounded-md flex items-center justify-center">
              <Bot className="w-3 h-3 text-white" />
            </div>
            <DeskioLogo size="sm" />
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
