import type { Metadata } from 'next'
import NichePage from '@/components/NichePage'

export const metadata: Metadata = {
  title: 'AI-receptionist til tatovørers og piercingstudie | Deskio',
  description: 'Deskio håndterer sessionsbooking, prøvetegninger og forespørgsler til tatovør- og piercingstudier automatisk — 24/7. Aldrig et mistet lead.',
  alternates: { canonical: 'https://deskio.dk/tatovering' },
  openGraph: {
    title: 'AI-receptionist til tatovør og piercing | Deskio',
    description: 'Automatisk booking og kundeservice til tatovør- og piercingstudier.',
    url: 'https://deskio.dk/tatovering',
  },
}

export default function TatoveringPage() {
  return (
    <NichePage
      slug="tatovering"
      title="AI-receptionist til"
      headline="tatovør & piercing"
      metaTitle="AI-receptionist til tatovør og piercing | Deskio"
      metaDescription="Automatisk booking og kundeservice til tatovør- og piercingstudier."
      emoji="🎨"
      heroTagline="Til tatovørstudier og piercingklinikker"
      heroParagraph="Deskio modtager konsultationsforespørgsler, besvarer spørgsmål om priser, healingstid og aftercare — og booker sessions med den rigtige artist. Du fokuserer på kunsten."
      proofItems={[
        'Automatisk sessionsbooking 24/7',
        'Svar på priser og healingstid',
        'Håndterer designforespørgsler',
        'Individuel artist-booking',
        'Aldrig et mistet lead',
      ]}
      featuresHeading="Alt dit studie har brug for"
      features={[
        {
          emoji: '📅',
          title: 'Book konsultation og session',
          desc: 'Kunden beskriver sin idé og ønsker et tidspunkt. AI\'en booker en konsultation hos den rette artist og sender en bekræftelse.',
        },
        {
          emoji: '💰',
          title: 'Priser og timepriser',
          desc: '"Hvad koster en fuld arm?" "Hvad er jeres timepris?" AI\'en besvarer prisforespørgsler præcist og professionelt — uden at underprissætte.',
        },
        {
          emoji: '🩹',
          title: 'Aftercare og healingspørgsmål',
          desc: 'Upload dit aftercare-materiale. AI\'en besvarer alle healingsspørgsmål fra nye og eksisterende kunder automatisk.',
        },
        {
          emoji: '🎭',
          title: 'Vælg ønsket artist',
          desc: 'Har du flere tatovører med specialer? AI\'en præsenterer dine artister og booker hos den der matcher kundens stil og ønske.',
        },
        {
          emoji: '📸',
          title: 'Håndtér designforespørgsler',
          desc: 'Kunder kan beskrive deres design i chattet. AI\'en samler beskrivelsen og sender den til dig — klar til et hurtigt svar.',
        },
        {
          emoji: '🌐',
          title: 'International kundekreds',
          desc: 'Mange tatovørkunder kommer fra hele verden. AI\'en kommunikerer på kundens eget sprog — dansk, engelsk, tysk og mere.',
        },
      ]}
      faqs={[
        {
          q: 'Kan AI\'en håndtere depositum-forespørgsler?',
          a: 'AI\'en kan informere om dit depositumkrav og guide kunden til betaling via et link du angiver. Selve betalingsbehandlingen sker via dit eget betalingssystem.',
        },
        {
          q: 'Hvad med kunder der vil se eksempler på arbejdet?',
          a: 'AI\'en kan linke til din Instagram, portfolio eller galleri på din hjemmeside — og anbefale specifikke kunstnere baseret på kundens ønsker.',
        },
        {
          q: 'Kan AI\'en afvise visse typer designs?',
          a: 'Ja. Du definerer hvad I ikke laver (f.eks. ansigts-tatoveringer, had-symboler). AI\'en kommunikerer dine grænser professionelt og respektfuldt.',
        },
        {
          q: 'Kan den håndtere touch-up bookinger?',
          a: 'Ja, du opretter "touch-up" som en særlig service. AI\'en booker automatisk hos den artist der lavede det originale arbejde, hvis kunden angiver det.',
        },
      ]}
      ctaHeading="Fokus på kunsten — ikke på bookingadministration"
      ctaSubtext="Deskio fanger alle leads, besvarer spørgsmål og booker sessions — automatisk, også når du er midt i en session."
    />
  )
}
