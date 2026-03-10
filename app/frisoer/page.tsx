import type { Metadata } from 'next'
import NichePage from '@/components/NichePage'

export const metadata: Metadata = {
  title: 'AI-receptionist til frisører og skønhedssaloner | Deskio',
  description: 'Lad Deskio håndtere bookinger, svare på spørgsmål og fange nye kunder — automatisk, 24/7. Den perfekte AI-løsning til frisørsaloner og skønhedsklinikker i Danmark.',
  alternates: { canonical: 'https://deskio.dk/frisoer' },
  openGraph: {
    title: 'AI-receptionist til frisører | Deskio',
    description: 'Automatisk booking og kundeservice til frisørsaloner — hele døgnet.',
    url: 'https://deskio.dk/frisoer',
  },
}

export default function FrisoerPage() {
  return (
    <NichePage
      slug="frisoer"
      title="AI-receptionist til"
      headline="frisører & saloner"
      metaTitle="AI-receptionist til frisører | Deskio"
      metaDescription="Automatisk booking og kundeservice til frisørsaloner — hele døgnet."
      emoji="✂️"
      heroTagline="Skræddersyet til frisørsaloner og skønhedsklinikker"
      heroParagraph="Mens du klipper, farver og sætter hår, tager Deskio sig af bookingforespørgsler, spørgsmål om priser og nye kunder — automatisk, dag og nat. Ingen mistet kunderekke. Ingen ubesvarede beskeder."
      proofItems={[
        'Automatisk online booking 24/7',
        'Svar på priser og behandlinger',
        'Sende booking-bekræftelse på SMS og e-mail',
        'Integrerer på enhver hjemmeside',
        'Flersproget — dansk, engelsk og mere',
      ]}
      featuresHeading="Alt en frisørsalon har brug for"
      features={[
        {
          emoji: '📅',
          title: 'AI-booking direkte i samtalen',
          desc: 'Kunden skriver "Jeg vil gerne booke en klipning lørdag" — AI\'en finder et ledigt tidslot og bekræfter bookingen uden din indblanding.',
        },
        {
          emoji: '💬',
          title: 'Svar på alle spørgsmål',
          desc: 'Priser på farve, åbningstider, om I tager imod børn, parkering — AI\'en kender din salon og svarer præcist baseret på dit indhold.',
        },
        {
          emoji: '🌙',
          title: 'Åben 24/7 — også om natten',
          desc: 'Mange kunder booker efter lukketid. Deskio modtager bookingen kl. 23 og sender en bekræftelse med det samme. Du ser den om morgenen.',
        },
        {
          emoji: '📱',
          title: 'SMS og e-mail påmindelser',
          desc: 'Reducer no-shows med automatiske påmindelser 24 timer før en aftale. Kunden kan nemt aflyse eller flytte via et link.',
        },
        {
          emoji: '🌐',
          title: 'Taler kundens sprog',
          desc: 'Har du kunder der taler arabisk, engelsk eller polsk? AI\'en svarer automatisk på kundens eget sprog — ingen ekstra opsætning.',
        },
        {
          emoji: '⚡',
          title: 'Klar på 10 minutter',
          desc: 'Indsæt ét script-tag på din hjemmeside eller Facebook-side. Ingen tekniker nødvendig. Du er live samme dag.',
        },
      ]}
      stepsHeading="Sådan virker det for din salon"
      steps={[
        { n: '01', title: 'Fortæl AI\'en om din salon', desc: 'Upload din prisliste, behandlinger, medarbejdere og åbningstider. AI\'en lærer din salon at kende.' },
        { n: '02', title: 'Installer på din hjemmeside', desc: 'Et enkelt script-tag på din hjemmeside eller Facebook-side. Det er det hele.' },
        { n: '03', title: 'Se bookingerne komme ind', desc: 'Deskio modtager henvendelser, besvarer spørgsmål og bogfører aftaler — automatisk.' },
      ]}
      quote={{
        text: 'Jeg brugte 30+ min om dagen på at svare på bookingforespørgsler på Facebook. Nu klarer Deskio det — og mine kunder synes det er nemmere end nogensinde.',
        author: 'Sarah M.',
        role: 'Ejer, frisørsalon i København',
      }}
      faqs={[
        {
          q: 'Kan AI\'en booke specifikke behandlinger som farve, klipning og styling?',
          a: 'Ja. Du opretter dine behandlinger (klipning, farve, highlights, etc.) med varighed og pris. AI\'en tilbyder automatisk ledige tider baseret på den valgte behandling.',
        },
        {
          q: 'Kan kunderne vælge en bestemt frisør?',
          a: 'Ja, du opretter dine medarbejdere i systemet. Kunden kan specificere "jeg vil gerne have Maria" og AI\'en finder et ledigt tidspunkt hos netop hende.',
        },
        {
          q: 'Hvad sker der hvis kunden vil aflyse?',
          a: 'Kunden kan aflyse via et link i bekræftelsesmailen. Du modtager en besked og ser det i din kalender. AI\'en kan også bede om bekræftelse via chat.',
        },
        {
          q: 'Fungerer det på min Facebook-side eller kun på hjemmesiden?',
          a: 'Deskio installeres på din hjemmeside. Mange saloner linker fra Facebook og Instagram direkte til booking-widgetten — det virker gnidningsfrit.',
        },
        {
          q: 'Er det svært at sætte op?',
          a: 'Nej. Det tager typisk under 10 minutter. Du udfylder din salonprofil, tilføjer behandlinger og indsætter ét script-tag. Ingen tekniker nødvendig.',
        },
      ]}
      ctaHeading="Lad din salon booke selv — hele døgnet"
      ctaSubtext="Slip for at sidde med telefonen i hånden. Deskio tager sig af bookingerne, så du kan fokusere på det du er god til."
    />
  )
}
