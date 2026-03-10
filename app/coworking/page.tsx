import type { Metadata } from 'next'
import NichePage from '@/components/NichePage'

export const metadata: Metadata = {
  title: 'AI-receptionist til mødelokaler og coworking spaces | Deskio',
  description: 'Deskio håndterer lokalebestillinger, spørgsmål om faciliteter og priser automatisk for coworking spaces og mødelokaleudlejning i Danmark — 24/7.',
  alternates: { canonical: 'https://deskio.dk/coworking' },
  openGraph: {
    title: 'AI-receptionist til mødelokaler og coworking | Deskio',
    description: 'Automatisk lokalebestilling og kundeservice til coworking spaces og mødelokaleudlejning.',
    url: 'https://deskio.dk/coworking',
  },
}

export default function CoworkingPage() {
  return (
    <NichePage
      slug="coworking"
      title="AI-receptionist til"
      headline="coworking & mødelokaler"
      metaTitle="AI-receptionist til mødelokaler og coworking | Deskio"
      metaDescription="Automatisk lokalebestilling og kundeservice til coworking spaces og mødelokaleudlejning."
      emoji="🏢"
      heroTagline="Til coworking spaces, mødelokaleudlejning og kontorfællesskaber"
      heroParagraph="Deskio håndterer lokalebestillinger, besvarer spørgsmål om kapacitet, faciliteter og priser — og booker automatisk. Dine members og gæster får øjeblikkelig service, uanset tidspunktet."
      proofItems={[
        'Automatisk lokalebestilling 24/7',
        'Svar på kapacitet og faciliteter',
        'Håndterer dag- og timelejer',
        'Bekræftelse og adgangsinformation',
        'Flersproget service',
      ]}
      featuresHeading="Alt dit coworking space har brug for"
      features={[
        {
          emoji: '🏛️',
          title: 'Lokalebestilling i samtalen',
          desc: '"Vi skal bruge et mødelokale til 8 personer tirsdag kl. 10." AI\'en tjekker tilgængelighed, bekræfter og sender adgangsinformation.',
        },
        {
          emoji: '📋',
          title: 'Svar på faciliteter og udstyr',
          desc: '"Er der projektor?" "Kan vi få catering?" AI\'en kender alle dine lokalers faciliteter og svarer præcist på forespørgsler.',
        },
        {
          emoji: '💼',
          title: 'Dagspas og faste members',
          desc: 'AI\'en kan informere om dine medlemskabspakker, dagspas og hotdesk-muligheder og guide interesserede mod tilmelding.',
        },
        {
          emoji: '🔑',
          title: 'Adgangsinformation automatisk',
          desc: 'Send automatisk adgangskoder, parkeringsinformation og praktiske detaljer i bekræftelsesmailen — kunden har alt de skal bruge.',
        },
        {
          emoji: '📊',
          title: 'Overblik over belægning',
          desc: 'Se realtids-belægning af alle lokaler i dit dashboard. Identificér populære tider og optimer prissætningen.',
        },
        {
          emoji: '🌐',
          title: 'Internationale members og gæster',
          desc: 'Mange coworking-users er internationale. AI\'en kommunikerer på gæstens eget sprog — dansk, engelsk, tysk og mere.',
        },
      ]}
      faqs={[
        {
          q: 'Kan vi have lokaler med forskellig kapacitet og priser?',
          a: 'Ja. Hvert lokale oprettes med sin egen kapacitet, faciliteter og pris. AI\'en præsenterer de relevante muligheder baseret på kundens behov.',
        },
        {
          q: 'Hvad med halvdags- og heldagslejer?',
          a: 'Du definerer dine tidsblokke (time, halvdag, heldag). AI\'en tilbyder de relevante muligheder og priser automatisk.',
        },
        {
          q: 'Kan det håndtere faste monthly members?',
          a: 'AI\'en kan informere om membersskaber og guide mod tilmelding. Administration af eksisterende members sker i dit Deskio-dashboard.',
        },
        {
          q: 'Hvad med aflysnigspolitik og depositum?',
          a: 'Du definerer din aflysningspolitik og AI\'en kommunikerer den klart til kunderne ved booking. Depositumhåndtering sker via dit eksisterende betalingssystem.',
        },
      ]}
      ctaHeading="Maksimér belægningen — automatisk"
      ctaSubtext="Deskio sørger for at dine lokaler er booket og dine members får øjeblikkelig service — hele døgnet."
    />
  )
}
