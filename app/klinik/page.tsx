import type { Metadata } from 'next'
import NichePage from '@/components/NichePage'

export const metadata: Metadata = {
  title: 'AI-receptionist til klinikker og sundhedspraksis | Deskio',
  description: 'Deskio håndterer patientbooking, spørgsmål om behandlinger og ventelister automatisk — 24/7. Perfekt til fysioterapeuter, kiropraktorer, psykologer og lægeklinikker.',
  alternates: { canonical: 'https://deskio.dk/klinik' },
  openGraph: {
    title: 'AI-receptionist til klinikker | Deskio',
    description: 'Automatisk patientbooking og kundeservice til sundhedsklinikker — hele døgnet.',
    url: 'https://deskio.dk/klinik',
  },
}

export default function KlinikPage() {
  return (
    <NichePage
      slug="klinik"
      title="AI-receptionist til"
      headline="klinikker & sundhed"
      metaTitle="AI-receptionist til klinikker | Deskio"
      metaDescription="Automatisk patientbooking til fysioterapeuter, kiropraktorer og sundhedsklinikker."
      emoji="🏥"
      heroTagline="Til fysioterapeuter, kiropraktorer, psykologer og lægeklinikker"
      heroParagraph="Deskio er din digitale receptionist der modtager patienthenvendelser, besvarer spørgsmål om behandlinger og booker tider — automatisk, hele døgnet. Du og dine kolleger kan fokusere fuldt ud på patienterne."
      proofItems={[
        'Online patientbooking 24/7',
        'Svar på behandlingsspørgsmål',
        'Automatiske påmindelser og opfølgning',
        'GDPR-venlig databehandling',
        'Ingen teknisk viden nødvendig',
      ]}
      featuresHeading="Det din klinik har brug for"
      features={[
        {
          emoji: '📋',
          title: 'Patientbooking uden ventetid',
          desc: 'Patienter booker online til ethvert tidspunkt. AI\'en verificerer den ønskede behandling, finder et ledigt tidslot og sender en bekræftelse.',
        },
        {
          emoji: '💊',
          title: 'Svar på behandlingsspørgsmål',
          desc: '"Behandler I whiplash?" "Hvad koster en første konsultation?" AI\'en besvarer alle standardspørgsmål præcist baseret på din klinikinformation.',
        },
        {
          emoji: '🔔',
          title: 'Automatiske påmindelser',
          desc: 'Patienter glemmer aftaler. Deskio sender automatisk en påmindelsesmail 24 timer i forvejen og reducerer no-shows markant.',
        },
        {
          emoji: '🌐',
          title: 'Flersproget patientservice',
          desc: 'Mange patienter er ikke dansktalende. Deskio svarer automatisk på patientens eget sprog — dansk, arabisk, engelsk og mange flere.',
        },
        {
          emoji: '🔒',
          title: 'Professionel og tryg kommunikation',
          desc: 'AI\'en kommunikerer altid professionelt og omsorgsfuldt, præcis som du ønsker det. Du definerer tone-of-voice og grænser for hvad AI\'en må svare på.',
        },
        {
          emoji: '📊',
          title: 'Overblik over din kalender',
          desc: 'Se alle kommende bookinger, aflysninger og venteliste i dit Deskio-dashboard. Altid opdateret, tilgængeligt fra mobil og computer.',
        },
      ]}
      faqs={[
        {
          q: 'Kan AI\'en håndtere både nye patienter og gengangsre?',
          a: 'Ja. Du kan konfigurere AI\'en til at stille forskellige spørgsmål til nye patienter (f.eks. årsag til besøg) og gengangsre (f.eks. opfølgning på sidst behandling).',
        },
        {
          q: 'Hvad med GDPR — er det sikkert?',
          a: 'Deskio opbevarer kun de informationer der er nødvendige for booking (navn, e-mail, tlf.). Data opbevares på europæiske servere og du kan slette dem til enhver tid.',
        },
        {
          q: 'Kan vi have flere behandlere med hver sin kalender?',
          a: 'Ja. Du opretter dine medarbejdere/behandlere i systemet. Patienten kan specificere ønsket behandler og AI\'en finder et ledigt tidslot hos præcis den person.',
        },
        {
          q: 'Hvad sker der med akutte henvendelser?',
          a: 'Du definerer selv hvad AI\'en må hjælpe med. Akutte forespørgsler kan AI\'en videresende til din telefon eller e-mail, eller vise et telefonnummer til øjeblikkelig kontakt.',
        },
      ]}
      ctaHeading="Giv dine patienter den service de fortjener"
      ctaSubtext="En professionel, tilgængelig og aldrig stresset receptionist — der altid svarer inden for sekunder."
    />
  )
}
