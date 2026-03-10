'use client'
import { useState } from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'

const content = {
  da: {
    lang: 'Dansk',
    title: 'Handelsbetingelser',
    subtitle: 'Gælder for alle kunder og brugere af Deskio.dk',
    updated: 'Senest opdateret: marts 2026',
    sections: [
      {
        heading: '1. Virksomhedsoplysninger',
        body: `Deskio.dk er ejet og drevet af:

TC 1021 APS
Viborgvej 792A
8471 Sabro
CVR-nr.: DK 39 52 37 44
E-mail: support@deskio.dk
Hjemmeside: https://deskio.dk`,
      },
      {
        heading: '2. Aftalens omfang',
        body: `Disse handelsbetingelser gælder for alle abonnementer og køb foretaget via Deskio.dk. Ved oprettelse af en konto og/eller køb af et abonnement accepterer du disse betingelser i deres helhed.

Deskio leverer en SaaS-platform (Software as a Service) med AI-drevet receptionist, bookingsystem og kundeservice-funktioner til virksomheder.`,
      },
      {
        heading: '3. Abonnementer og priser',
        body: `Deskio tilbyder følgende abonnementsplaner med månedlig betaling:

• Starter – 99 kr./md.
• Vækst – 199 kr./md.
• Pro – 399 kr./md.

Alle priser er ekskl. moms, medmindre andet er angivet. Moms tillægges i overensstemmelse med dansk lovgivning.

Abonnementet fornyes automatisk hver måned, medmindre det opsiges inden fornyelsesdatoen. Du modtager en kvittering pr. e-mail ved hver betaling.`,
      },
      {
        heading: '4. Gratis prøveperiode',
        body: `Nye kunder tilbydes en gratis prøveperiode på 14 dage uden kreditkortinformation. Prøveperioden giver adgang til alle funktioner på den valgte plan.

Efter prøveperiodens udløb overgår abonnementet automatisk til betaling, medmindre du vælger at opsige det inden udløbsdatoen.`,
      },
      {
        heading: '5. Betaling',
        body: `Betaling håndteres sikkert via Stripe. Vi accepterer de mest gængse betalingskort (Visa, Mastercard m.fl.). 

Betalingen trækkes automatisk på den registrerede betalingsmetode på forfaldsdatoen. Ved mislykket betaling modtager du en notifikation, og adgangen til platformen kan blive begrænset, hvis betalingen ikke gennemføres inden for en rimelig frist.`,
      },
      {
        heading: '6. Fortrydelsesret og opsigelse',
        body: `Du kan til enhver tid opsige dit abonnement via din kontoindstilling under "Opgrader / Administrer abonnement" på Deskio-dashboardet. Opsigelsen træder i kraft ved udgangen af den igangværende betalingsperiode – du bevarer adgangen til og med den dato, du allerede har betalt for.

Som erhvervskunde (B2B) gælder forbrugeraftalelovens regler om 14 dages fortrydelsesret ikke, da ydelsen er en digital erhvervsservice. Har du spørgsmål til opsigelse, kontakt os på support@deskio.dk.`,
      },
      {
        heading: '7. Brug af platformen',
        body: `Du må ikke anvende Deskio til:

• Ulovlige formål eller aktiviteter i strid med dansk lovgivning.
• Spam, phishing eller anden form for misbrug.
• Videresalg af platformen uden skriftlig aftale med TC 1021 APS.

TC 1021 APS forbeholder sig retten til at suspendere eller lukke en konto ved grov misbrug eller overtrædelse af disse betingelser.`,
      },
      {
        heading: '8. Datasikkerhed og GDPR',
        body: `TC 1021 APS behandler personoplysninger i overensstemmelse med EU's persondataforordning (GDPR). Vi fungerer som databehandler for de personoplysninger, du og dine kunder indtaster i platformen.

Du er som virksomhed den dataansvarlige og er ansvarlig for at indhente nødvendige samtykker fra dine kunder. Vores datapolitik og databehandleraftale kan rekvireres ved henvendelse til support@deskio.dk.`,
      },
      {
        heading: '9. Ansvarsbegrænsning',
        body: `Deskio stilles til rådighed "som beset" (as-is). TC 1021 APS påtager sig ikke ansvar for driftstab, indirekte tab eller tab som følge af nedetid, datafejl eller manglende funktionalitet, medmindre tabet skyldes grov uagtsomhed eller forsæt fra vores side.

Vi tilstræber en oppetid på 99,5 % pr. måned, men garanterer ikke dette.`,
      },
      {
        heading: '10. Ændringer i betingelserne',
        body: `TC 1021 APS forbeholder sig retten til at ændre disse handelsbetingelser. Du vil blive varslet om væsentlige ændringer via e-mail mindst 14 dage før ikrafttrædelse. Fortsat brug af platformen efter ikrafttrædelse anses for accept af de nye betingelser.`,
      },
      {
        heading: '11. Lovvalg og værneting',
        body: `Disse handelsbetingelser er underlagt dansk ret. Eventuelle tvister, der ikke kan løses i mindelighed, afgøres ved Retten i Aarhus som første instans.`,
      },
      {
        heading: '12. Kontakt',
        body: `Har du spørgsmål til disse handelsbetingelser, er du velkommen til at kontakte os:

TC 1021 APS
Viborgvej 792A, 8471 Sabro
E-mail: support@deskio.dk
Hjemmeside: https://deskio.dk`,
      },
    ],
  },
  en: {
    lang: 'English',
    title: 'Terms & Conditions',
    subtitle: 'Applicable to all customers and users of Deskio.dk',
    updated: 'Last updated: March 2026',
    sections: [
      {
        heading: '1. Company Information',
        body: `Deskio.dk is owned and operated by:

TC 1021 APS
Viborgvej 792A
8471 Sabro, Denmark
CVR (VAT) No.: DK 39 52 37 44
Email: support@deskio.dk
Website: https://deskio.dk`,
      },
      {
        heading: '2. Scope of Agreement',
        body: `These terms and conditions apply to all subscriptions and purchases made through Deskio.dk. By creating an account and/or purchasing a subscription, you agree to these terms in their entirety.

Deskio provides a SaaS (Software as a Service) platform featuring an AI-powered receptionist, booking system and customer service tools for businesses.`,
      },
      {
        heading: '3. Subscriptions and Pricing',
        body: `Deskio offers the following monthly subscription plans:

• Starter – DKK 99/month
• Vækst (Growth) – DKK 199/month
• Pro – DKK 399/month

All prices are exclusive of VAT unless otherwise stated. VAT will be added in accordance with Danish law.

Subscriptions renew automatically each month unless cancelled before the renewal date. A receipt is sent by email after each payment.`,
      },
      {
        heading: '4. Free Trial',
        body: `New customers are offered a 14-day free trial with no credit card required. The trial gives full access to all features of the chosen plan.

After the trial expires, the subscription will automatically convert to a paid plan unless cancelled before the expiry date.`,
      },
      {
        heading: '5. Payment',
        body: `Payments are processed securely via Stripe. We accept the most common payment cards (Visa, Mastercard, etc.).

Payment is automatically charged to the registered payment method on the due date. In case of a failed payment, you will receive a notification, and access to the platform may be restricted if payment is not completed within a reasonable period.`,
      },
      {
        heading: '6. Cancellation',
        body: `You may cancel your subscription at any time via your account settings under "Upgrade / Manage Subscription" in the Deskio dashboard. Cancellation takes effect at the end of the current billing period — you retain access until the date already paid for.

As a business customer (B2B), the consumer right-of-withdrawal period of 14 days does not apply, as the service is a digital business service. If you have questions about cancellation, contact us at support@deskio.dk.`,
      },
      {
        heading: '7. Acceptable Use',
        body: `You may not use Deskio for:

• Illegal purposes or activities in violation of Danish law.
• Spam, phishing or any other form of abuse.
• Reselling the platform without a written agreement with TC 1021 APS.

TC 1021 APS reserves the right to suspend or terminate an account in the event of serious misuse or violation of these terms.`,
      },
      {
        heading: '8. Data Security and GDPR',
        body: `TC 1021 APS processes personal data in accordance with the EU General Data Protection Regulation (GDPR). We act as a data processor for the personal data entered into the platform by you and your customers.

As a business, you are the data controller and are responsible for obtaining the necessary consents from your customers. Our privacy policy and data processing agreement are available on request at support@deskio.dk.`,
      },
      {
        heading: '9. Limitation of Liability',
        body: `Deskio is provided "as is". TC 1021 APS accepts no liability for loss of profit, indirect loss or loss resulting from downtime, data errors or lack of functionality, unless the loss is due to gross negligence or wilful misconduct on our part.

We aim for an uptime of 99.5% per month, but do not guarantee this.`,
      },
      {
        heading: '10. Changes to Terms',
        body: `TC 1021 APS reserves the right to amend these terms and conditions. You will be notified of material changes by email at least 14 days before they take effect. Continued use of the platform after the effective date constitutes acceptance of the new terms.`,
      },
      {
        heading: '11. Governing Law and Jurisdiction',
        body: `These terms are governed by Danish law. Any disputes that cannot be resolved amicably will be settled by the Court in Aarhus, Denmark, as the court of first instance.`,
      },
      {
        heading: '12. Contact',
        body: `If you have questions about these terms, please contact us:

TC 1021 APS
Viborgvej 792A, 8471 Sabro, Denmark
Email: support@deskio.dk
Website: https://deskio.dk`,
      },
    ],
  },
}

export default function HandelsbetingelserPage() {
  const [lang, setLang] = useState<'da' | 'en'>('da')
  const c = content[lang]

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200">
      {/* Nav */}
      <header className="border-b border-white/5 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-white font-bold text-lg tracking-tight hover:text-brand-400 transition-colors">
            Deskio
          </Link>
          <div className="flex items-center gap-1 bg-white/5 rounded-lg p-1">
            <button
              onClick={() => setLang('da')}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${lang === 'da' ? 'bg-brand-600 text-white' : 'text-gray-400 hover:text-white'}`}
            >
              Dansk
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${lang === 'en' ? 'bg-brand-600 text-white' : 'text-gray-400 hover:text-white'}`}
            >
              English
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">{c.title}</h1>
          <p className="text-gray-400">{c.subtitle}</p>
          <p className="text-gray-500 text-sm mt-1">{c.updated}</p>
        </div>

        <div className="space-y-8">
          {c.sections.map((section, i) => (
            <section key={i} className="bg-white/5 rounded-xl p-6 border border-white/5">
              <h2 className="text-lg font-semibold text-white mb-3">{section.heading}</h2>
              <div className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">{section.body}</div>
            </section>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-gray-500 text-sm">
            TC 1021 APS · Viborgvej 792A · 8471 Sabro · CVR: DK 39 52 37 44
          </p>
          <p className="text-gray-600 text-xs mt-1">© 2026 Deskio. Alle rettigheder forbeholdes.</p>
          <Link href="/" className="inline-block mt-4 text-sm text-brand-400 hover:text-brand-300 transition-colors">
            ← Tilbage til forsiden
          </Link>
        </div>
      </main>
    </div>
  )
}
