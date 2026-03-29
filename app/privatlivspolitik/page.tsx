'use client'
import { useState } from 'react'
import Link from 'next/link'

const content = {
  da: {
    lang: 'Dansk',
    title: 'Privatlivspolitik',
    subtitle: 'Sådan behandler Deskio dine personoplysninger',
    updated: 'Senest opdateret: marts 2026',
    sections: [
      {
        heading: '1. Dataansvarlig',
        body: `Den dataansvarlige for behandlingen af dine personoplysninger er:

TC 1021 APS
Viborgvej 792A, 8471 Sabro
CVR-nr.: DK 39 52 37 44
E-mail: support@deskio.dk`,
      },
      {
        heading: '2. Hvilke oplysninger indsamler vi?',
        body: `Vi indsamler og behandler følgende typer af personoplysninger:

Kontooplysninger
• Navn, e-mailadresse og adgangskode (krypteret) ved oprettelse af konto.
• Virksomhedsoplysninger: navn, adresse, CVR-nummer, telefonnummer og hjemmeside.

Betalingsoplysninger
• Betalingstransaktioner håndteres via Stripe. Deskio opbevarer ikke kortoplysninger — kun Stripe-kunde-ID og abonnementsstatus.

Brugsdata
• Samtaler og beskeder sendt via chat-widgetten (behandlet som forretningsdata tilhørende din virksomhed).
• Bookinger og kundeemner (leads) registreret af AI-receptionisten.
• Tekniske logfiler (IP-adresse, browsertype) til fejlsøgning og sikkerhed.

Cookies
• Se vores cookiepolitik i pop-up-banneret for detaljer.`,
      },
      {
        heading: '3. Formål med behandlingen',
        body: `Vi behandler dine personoplysninger til følgende formål:

• Oprettelse og administration af din konto og dit abonnement.
• Levering af Deskio-platformen, herunder AI-receptionist og bookingsystem.
• Fakturering og betalingshåndtering via Stripe.
• Udsendelse af transaktionelle e-mails (velkomst, kvitteringer, advarsler).
• Forbedring af platformens funktioner og stabilitet.
• Overholdelse af lovkrav (bl.a. bogføringsloven og GDPR).`,
      },
      {
        heading: '4. Retsgrundlag',
        body: `Vi behandler dine oplysninger på følgende retsgrundlag jf. GDPR artikel 6:

• Opfyldelse af kontrakt (art. 6, stk. 1, litra b): Nødvendig for at levere vores tjenester til dig.
• Legitim interesse (art. 6, stk. 1, litra f): Sikkerhed, fejlsøgning og forbedring af platformen.
• Retlig forpligtelse (art. 6, stk. 1, litra c): Bogføring og skattelovgivning.`,
      },
      {
        heading: '5. Opbevaring og sletning',
        body: `Vi opbevarer dine personoplysninger, så længe dit abonnement er aktivt, og op til 5 år efter opsigelse af hensyn til bogføringsloven.

Chatsamtaler og leads kan slettes af dig som kontoejer til enhver tid via dashboardet. Konto og alle tilknyttede data slettes endeligt senest 30 dage efter en bekræftet kontosletning.`,
      },
      {
        heading: '6. Deling med tredjeparter',
        body: `Vi deler kun dine oplysninger med tredjeparter, når det er nødvendigt for at levere platformen:

• Stripe (betalingshåndtering) — se Stripes privatlivspolitik på stripe.com/privacy
• Resend (e-mailafsendelse) — se resend.com/privacy
• OpenAI (AI-behandling af chatbeskeder) — se openai.com/privacy
• Vores hostingudbyder (Hetzner/Coolify) — datacentre i EU

Alle tredjeparter er underlagt databehandleraftaler og GDPR-krav. Vi sælger aldrig dine data til tredjepart.`,
      },
      {
        heading: '7. Dine rettigheder',
        body: `Du har følgende rettigheder i henhold til GDPR:

• Indsigtsret: Du kan til enhver tid anmode om en kopi af de oplysninger, vi behandler om dig.
• Berigtigelse: Du kan få fejlagtige oplysninger rettet.
• Sletning ("retten til at blive glemt"): Du kan anmode om sletning af dine oplysninger, medmindre vi er forpligtet til at opbevare dem ved lov.
• Begrænsning af behandling: Du kan i visse tilfælde anmode om, at behandlingen begrænses.
• Dataportabilitet: Du kan anmode om at modtage dine data i et maskinlæsbart format.
• Indsigelse: Du kan gøre indsigelse mod behandling baseret på legitim interesse.

Send din anmodning til support@deskio.dk. Vi svarer inden for 30 dage.`,
      },
      {
        heading: '8. Cookies',
        body: `Deskio.dk anvender cookies til at sikre en god brugeroplevelse og analysere trafikmønstre. Du kan til enhver tid ændre dine cookieindstillinger via banneret i bunden af siden.

Nødvendige cookies kan ikke fravalges, da de er nødvendige for at siden fungerer korrekt.`,
      },
      {
        heading: '9. Klageadgang',
        body: `Hvis du mener, at vi behandler dine personoplysninger i strid med GDPR, kan du klage til:

Datatilsynet
Carl Jacobsens Vej 35
2500 Valby
www.datatilsynet.dk
dt@datatilsynet.dk`,
      },
      {
        heading: '10. Ændringer i privatlivspolitikken',
        body: `Vi forbeholder os retten til at opdatere denne privatlivspolitik. Væsentlige ændringer varsles via e-mail mindst 14 dage inden ikrafttrædelse. Den til enhver tid gældende version findes på deskio.dk/privatlivspolitik.`,
      },
      {
        heading: '11. Kontakt',
        body: `Har du spørgsmål om vores behandling af personoplysninger, er du velkommen til at kontakte os:

TC 1021 APS
Viborgvej 792A, 8471 Sabro
E-mail: support@deskio.dk`,
      },
    ],
  },
  en: {
    lang: 'English',
    title: 'Privacy Policy',
    subtitle: 'How Deskio handles your personal data',
    updated: 'Last updated: March 2026',
    sections: [
      {
        heading: '1. Data Controller',
        body: `The data controller for the processing of your personal data is:

TC 1021 APS
Viborgvej 792A, 8471 Sabro, Denmark
VAT No.: DK 39 52 37 44
Email: support@deskio.dk`,
      },
      {
        heading: '2. What data do we collect?',
        body: `We collect and process the following types of personal data:

Account data
• Name, email address and password (encrypted) when creating an account.
• Business information: name, address, VAT number, phone number and website.

Payment data
• Payment transactions are handled via Stripe. Deskio does not store card details — only a Stripe customer ID and subscription status.

Usage data
• Conversations and messages sent via the chat widget (processed as business data belonging to your account).
• Bookings and leads captured by the AI receptionist.
• Technical logs (IP address, browser type) for debugging and security.

Cookies
• See our cookie policy in the pop-up banner for details.`,
      },
      {
        heading: '3. Purpose of processing',
        body: `We process your personal data for the following purposes:

• Creating and managing your account and subscription.
• Delivering the Deskio platform, including AI receptionist and booking system.
• Billing and payment processing via Stripe.
• Sending transactional emails (welcome, receipts, alerts).
• Improving platform features and stability.
• Compliance with legal requirements (including accounting and GDPR).`,
      },
      {
        heading: '4. Legal basis',
        body: `We process your data on the following legal bases under GDPR Article 6:

• Performance of a contract (Art. 6(1)(b)): Necessary to deliver our services to you.
• Legitimate interest (Art. 6(1)(f)): Security, debugging and platform improvement.
• Legal obligation (Art. 6(1)(c)): Accounting and tax legislation.`,
      },
      {
        heading: '5. Retention and deletion',
        body: `We retain your personal data for as long as your subscription is active and up to 5 years after cancellation in accordance with Danish accounting law.

Chat conversations and leads can be deleted by you as account owner at any time via the dashboard. Your account and all associated data will be permanently deleted within 30 days of a confirmed account deletion.`,
      },
      {
        heading: '6. Sharing with third parties',
        body: `We share your data with third parties only where necessary to deliver the platform:

• Stripe (payment processing) — see stripe.com/privacy
• Resend (email delivery) — see resend.com/privacy
• OpenAI (AI processing of chat messages) — see openai.com/privacy
• Our hosting provider (Hetzner/Coolify) — data centres in the EU

All third parties are subject to data processing agreements and GDPR requirements. We never sell your data to third parties.`,
      },
      {
        heading: '7. Your rights',
        body: `Under GDPR you have the following rights:

• Right of access: You may request a copy of the data we hold about you at any time.
• Right to rectification: You may have inaccurate data corrected.
• Right to erasure ("right to be forgotten"): You may request deletion of your data, unless we are legally required to retain it.
• Right to restriction: In certain cases you may request that processing be restricted.
• Right to data portability: You may request your data in a machine-readable format.
• Right to object: You may object to processing based on legitimate interest.

Send your request to support@deskio.dk. We will respond within 30 days.`,
      },
      {
        heading: '8. Cookies',
        body: `Deskio.dk uses cookies to ensure a good user experience and analyse traffic patterns. You can change your cookie preferences at any time via the banner at the bottom of the page.

Necessary cookies cannot be declined as they are required for the site to function correctly.`,
      },
      {
        heading: '9. Supervisory authority',
        body: `If you believe we are processing your personal data in violation of GDPR, you may lodge a complaint with:

Datatilsynet (Danish Data Protection Agency)
Carl Jacobsens Vej 35
2500 Valby, Denmark
www.datatilsynet.dk`,
      },
      {
        heading: '10. Changes to this policy',
        body: `We reserve the right to update this privacy policy. Material changes will be notified by email at least 14 days before they take effect. The current version is always available at deskio.dk/privatlivspolitik.`,
      },
      {
        heading: '11. Contact',
        body: `If you have questions about how we process your personal data, please contact us:

TC 1021 APS
Viborgvej 792A, 8471 Sabro, Denmark
Email: support@deskio.dk`,
      },
    ],
  },
}

export default function PrivatlivspolitikPage() {
  const [lang, setLang] = useState<'da' | 'en'>('da')
  const c = content[lang]

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200">
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
          <div className="flex items-center justify-center gap-4 mt-4">
            <Link href="/handelsbetingelser" className="text-sm text-brand-400 hover:text-brand-300 transition-colors">
              Handelsbetingelser
            </Link>
            <Link href="/" className="text-sm text-brand-400 hover:text-brand-300 transition-colors">
              ← Tilbage til forsiden
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
