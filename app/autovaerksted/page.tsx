import type { Metadata } from 'next'
import NichePage from '@/components/NichePage'

export const metadata: Metadata = {
  title: 'AI-receptionist til autoværksteder og bilservice | Deskio',
  description: 'Deskio håndterer servicebestillinger, prisforespørgsler og spørgsmål om reparationer automatisk for autoværksteder i Danmark — 24/7 uden ekstra personale.',
  alternates: { canonical: 'https://deskio.dk/autovaerksted' },
  openGraph: {
    title: 'AI-receptionist til autoværksteder | Deskio',
    description: 'Automatisk servicebestilling og kundeservice til autoværksteder og bilservice.',
    url: 'https://deskio.dk/autovaerksted',
  },
}

export default function AutovaerkstedPage() {
  return (
    <NichePage
      slug="autovaerksted"
      title="AI-receptionist til"
      headline="autoværksteder"
      metaTitle="AI-receptionist til autoværksteder | Deskio"
      metaDescription="Automatisk servicebestilling og kundeservice til autoværksteder og bilservice."
      emoji="🚗"
      heroTagline="Til autoværksteder, bilservice og mekanikere"
      heroParagraph="Deskio modtager servicebestillinger, besvarer spørgsmål om priser og reparationer og booker køretøjer ind til service — automatisk, også når du er under en bil. Ingen tabte kunder. Ingen mistet telefoner."
      proofItems={[
        'Automatisk servicebestilling 24/7',
        'Svar på priser og reparationstyper',
        'Indsamler bil og regnummer',
        'Booking-bekræftelse til kunden',
        'Aldrig et mistet opkald',
      ]}
      featuresHeading="Alt dit værksted har brug for"
      features={[
        {
          emoji: '🔧',
          title: 'Servicebestilling i samtalen',
          desc: '"Jeg skal have skiftet olie og tjekket bremser." AI\'en registrerer servicetypen, spørger om bil og reg.nr. og finder et ledigt tidslot.',
        },
        {
          emoji: '💰',
          title: 'Priser og estimater',
          desc: '"Hvad koster en synstjek?" "Hvad koster nye dæk til en Golf?" AI\'en kender dine priser og kommunikerer dem klart og præcist.',
        },
        {
          emoji: '🚘',
          title: 'Indsamler bil-information',
          desc: 'AI\'en spørger automatisk om bilmærke, model, år og registreringsnummer — klar til din mekaniker inden bilen ankommer.',
        },
        {
          emoji: '📞',
          title: 'Svar mens du er optaget',
          desc: 'Mens du arbejder i værkstedet svarer Deskio på alle henvendelser. Kunden venter ikke — de får svar inden for sekunder.',
        },
        {
          emoji: '🔔',
          title: 'Påmindelser til kunder',
          desc: 'Automatiske servicehenvisninger og påmindelser. Deskio kan også minde kunder om næste service baseret på kilometertæl eller dato.',
        },
        {
          emoji: '🌐',
          title: 'Flersproget kundservice',
          desc: 'Har du udenlandske kunder? AI\'en kommunikerer på kundens eget sprog — dansk, polsk, arabisk, engelsk og mere.',
        },
      ]}
      faqs={[
        {
          q: 'Kan AI\'en skelne mellem store og små reparationer?',
          a: 'Ja. Du kan definere hvilke servicetyper der bookes direkte og hvilke der kræver et prisoverslag fra dig (f.eks. store motorskader). AI\'en guider kunden korrekt.',
        },
        {
          q: 'Hvad med akutte havari-situationer?',
          a: 'Du kan konfigurere AI\'en til at vise dit akutnummer ved havariopkald og guide kunden til vejhjælp eller nærmeste værksted.',
        },
        {
          q: 'Kan vi bruges til dækskift om efteråret?',
          a: 'Absolut. Mange værksteder oplever spidsbelastning ved sæsondækskift. Deskio håndterer alle bookinger automatisk og fylder kalenderen.',
        },
        {
          q: 'Integrerer det med mit eksisterende bookingsystem?',
          a: 'Deskio har sit eget bookingsystem. Du ser alle bookinger i dashboardet og kan eksportere dem. Direkte API-integration med tredjepartssystemer er under udvikling.',
        },
      ]}
      ctaHeading="Svar på alle henvendelser — også under bilen"
      ctaSubtext="Deskio holder fronten mens du holder fokus på det tekniske. Ingen mistet kunder. Ingen mistet omsætning."
    />
  )
}
