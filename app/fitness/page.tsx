import type { Metadata } from 'next'
import NichePage from '@/components/NichePage'

export const metadata: Metadata = {
  title: 'AI-receptionist til fitnesscentre og yogastudie | Deskio',
  description: 'Deskio håndterer holdtilmelding, spørgsmål om priser og nye medlemmer — automatisk. Perfekt til fitnesscentre, yogastudier, crossfit og pilates-studier i Danmark.',
  alternates: { canonical: 'https://deskio.dk/fitness' },
  openGraph: {
    title: 'AI-receptionist til fitness og yoga | Deskio',
    description: 'Automatisk holdtilmelding og kundeservice til fitnesscentre og yogastudier.',
    url: 'https://deskio.dk/fitness',
  },
}

export default function FitnessPage() {
  return (
    <NichePage
      slug="fitness"
      title="AI-receptionist til"
      headline="fitness & yoga"
      metaTitle="AI-receptionist til fitness og yoga | Deskio"
      metaDescription="Automatisk holdtilmelding og kundeservice til fitnesscentre og yogastudier."
      emoji="🧘"
      heroTagline="Til fitnesscentre, yogastudier, crossfit og pilates"
      heroParagraph="Deskio håndterer tilmelding til hold, spørgsmål om priser og abonnementer og nye kundehenvendelser — automatisk, hele døgnet. Fokus på træningen, ikke på administrationen."
      proofItems={[
        'Automatisk holdtilmelding 24/7',
        'Svar om priser og abonnementer',
        'Venteliste ved fulde hold',
        'Påmindelser før holdstart',
        'Flersproget service',
      ]}
      featuresHeading="Alt dit center har brug for"
      features={[
        {
          emoji: '🏋️',
          title: 'Holdtilmelding i samtalen',
          desc: '"Hvornår er næste yoga-hold?" "Kan jeg tilmelde mig spinning lørdag?" AI\'en tjekker ledige pladser og bekræfter tilmeldingen direkte.',
        },
        {
          emoji: '📋',
          title: 'Venteliste ved fulde hold',
          desc: 'Er holdet fuldt, sætter AI\'en automatisk kunden på venteliste og notificerer dem hvis en plads bliver ledig.',
        },
        {
          emoji: '💳',
          title: 'Svar på priser og medlemskaber',
          desc: '"Hvad koster et månedskort?" "Kan jeg prøve et enkelt hold?" AI\'en kender dine priser og guider nye kunder mod tilmelding.',
        },
        {
          emoji: '🔔',
          title: 'Holdpåmindelser',
          desc: 'Reducer no-shows med automatiske påmindelser om holdstart. Kunden kan afmelde sig via link og frigøre pladsen til en anden.',
        },
        {
          emoji: '🌍',
          title: 'Flersproget',
          desc: 'Mange fitnesskunder taler ikke dansk som modersmål. AI\'en svarer automatisk på kundens eget sprog — ingen ekstra opsætning.',
        },
        {
          emoji: '📊',
          title: 'Holdoversigt i dashboardet',
          desc: 'Se alle tilmeldinger, kapacitet per hold og aflysninger i realtid fra dit Deskio-dashboard.',
        },
      ]}
      faqs={[
        {
          q: 'Kan AI\'en håndtere holds med begrænset kapacitet?',
          a: 'Ja, det er kernefunktionaliteten. Du sætter max-kapacitet per hold. AI\'en holder styr på antallet og siger automatisk til når holdet er fuldt.',
        },
        {
          q: 'Kan vi have forskellige holdtyper med forskellige instruktører?',
          a: 'Ja. Du opretter dine hold med instruktør, tidspunkt og kapacitet. Kunden kan filtrere på instruktør eller holdtype.',
        },
        {
          q: 'Hvad med drop-in vs. fast plads?',
          a: 'Du definerer om et hold kræver fast tilmelding eller er drop-in. AI\'en formidler det korrekte til kunden.',
        },
        {
          q: 'Kan vi bruge det til prøvetimer for nye kunder?',
          a: 'Absolut. Du kan oprette en gratis "prøvetime" som en særlig holdtype. AI\'en tilbyder den til nye kunder og booker dem ind.',
        },
      ]}
      ctaHeading="Fyld dine hold — automatisk"
      ctaSubtext="Lad Deskio håndtere tilmeldingerne mens du fokuserer på at levere den bedste træningsoplevelse."
    />
  )
}
