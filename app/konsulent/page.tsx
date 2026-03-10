import type { Metadata } from 'next'
import NichePage from '@/components/NichePage'

export const metadata: Metadata = {
  title: 'AI-receptionist til konsulenter og coaches | Deskio',
  description: 'Deskio håndterer møde- og sessionsbooking, kvalificerer leads og svarer på forespørgsler automatisk for konsulenter, coaches og rådgivere i Danmark.',
  alternates: { canonical: 'https://deskio.dk/konsulent' },
  openGraph: {
    title: 'AI-receptionist til konsulenter og coaches | Deskio',
    description: 'Automatisk sessionsbooking og leadkvalificering til konsulenter og coaches.',
    url: 'https://deskio.dk/konsulent',
  },
}

export default function KonsulentPage() {
  return (
    <NichePage
      slug="konsulent"
      title="AI-assistent til"
      headline="konsulenter & coaches"
      metaTitle="AI-receptionist til konsulenter og coaches | Deskio"
      metaDescription="Automatisk sessionsbooking og leadkvalificering til konsulenter og coaches."
      emoji="💼"
      heroTagline="Til konsulenter, coaches, rådgivere og terapeuter"
      heroParagraph="Deskio kvalificerer nye leads, besvarer spørgsmål om dine ydelser og booker indledende møder og sessioner automatisk. Du taler med dem der er klar — ikke dem der stadig overvejer."
      proofItems={[
        'Automatisk sessionsbooking',
        'Lead-kvalificering i samtalen',
        'Svar på priser og ydelser',
        'Indsamler navn, e-mail og tlf.',
        'Professionel og brandmæssig kommunikation',
      ]}
      featuresHeading="Vækst din praksis — automatisk"
      features={[
        {
          emoji: '🎯',
          title: 'Kvalificér leads inden du taler med dem',
          desc: 'AI\'en stiller de rigtige spørgsmål — hvad søger de hjælp til, budget, tidslinje. Du modtager kun henvendelser fra reelt interesserede.',
        },
        {
          emoji: '📅',
          title: 'Book indledende møder automatisk',
          desc: 'En potentiel kunde besøger din hjemmeside kl. 22. AI\'en booker et 30-minutters afklaringsmøde og sender en kalenderinvitation til jer begge.',
        },
        {
          emoji: '💬',
          title: 'Svar på alle spørgsmål om dine ydelser',
          desc: '"Hvad koster et forløb?" "Hvor mange sessioner anbefales?" AI\'en kender dine ydelser og kommunikerer præcis som du ønsker det.',
        },
        {
          emoji: '✉️',
          title: 'Fanger kontaktoplysninger automatisk',
          desc: 'Alle leads der interagerer med din AI bliver gemt med navn, e-mail og telefon i dit dashboard. Ingen leads falder igennem.',
        },
        {
          emoji: '🤖',
          title: 'Din egen AI-persona',
          desc: 'Giv AI\'en dit brand-navn, tone-of-voice og personlighed. Kunden oplever det som en del af dit brand — ikke som en generisk chatbot.',
        },
        {
          emoji: '🌐',
          title: 'International rækkevidde',
          desc: 'Tilbyder du coaching eller rådgivning på tværs af sprog? AI\'en svarer på kundens eget sprog automatisk.',
        },
      ]}
      faqs={[
        {
          q: 'Kan AI\'en filtrere "forkerte" kunder fra?',
          a: 'Ja. Du definerer hvilke typer kunder du arbejder med. AI\'en stiller kvalificerende spørgsmål og fortæller pænt nej hvis de ikke matcher dit scope — og sender dem videre til andre.',
        },
        {
          q: 'Hvad sker der med de leads AI\'en samler?',
          a: 'Alle leads vises i dit Deskio-dashboard med kontaktoplysninger og samtaleoversigt. Du kan eksportere dem eller følge op direkte.',
        },
        {
          q: 'Kan AI\'en sende et tilbud eller en brochure?',
          a: 'AI\'en kan referere til links du angiver — din hjemmeside, en landingsside eller en downloadside. Direkte afsendelse af filer understøttes ikke endnu.',
        },
        {
          q: 'Vil det lyde robotagtigt over for mine kunder?',
          a: 'Nej. Du konfigurerer tone-of-voice, AI-navn og hvad AI\'en må sige. Med Pro-planen er det næsten umuligt for kunden at se forskel på dig og AI\'en.',
        },
      ]}
      ctaHeading="Fokus på kunderne — ikke på forespørgsler"
      ctaSubtext="Lad Deskio håndtere den indledende dialog og levere dig varme, kvalificerede leads klar til konvertering."
    />
  )
}
