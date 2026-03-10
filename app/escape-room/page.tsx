import type { Metadata } from 'next'
import NichePage from '@/components/NichePage'

export const metadata: Metadata = {
  title: 'AI-receptionist til escape rooms og oplevelsescentre | Deskio',
  description: 'Deskio håndterer gruppebestillinger, spørgsmål om sværhedsgrader og privatbooking automatisk for escape rooms og oplevelsescentre i Danmark — 24/7.',
  alternates: { canonical: 'https://deskio.dk/escape-room' },
  openGraph: {
    title: 'AI-receptionist til escape rooms | Deskio',
    description: 'Automatisk gruppebestilling og kundeservice til escape rooms og oplevelsescentre.',
    url: 'https://deskio.dk/escape-room',
  },
}

export default function EscapeRoomPage() {
  return (
    <NichePage
      slug="escape-room"
      title="AI-receptionist til"
      headline="escape rooms & oplevelser"
      metaTitle="AI-receptionist til escape rooms | Deskio"
      metaDescription="Automatisk gruppebestilling og kundeservice til escape rooms og oplevelsescentre."
      emoji="🔐"
      heroTagline="Til escape rooms, oplevelsescentre og event venues"
      heroParagraph="Deskio modtager gruppebestillinger, besvarer spørgsmål om sværhedsgrader, varighed og private events — automatisk, 24/7. Lad gæsterne booke mens du driver centret."
      proofItems={[
        'Gruppebestilling 24/7',
        'Svar på sværhedsgrad og varighed',
        'Håndterer firmaevents og fødselsdage',
        'Bekræftelse og påmindelser til gruppen',
        'Taler alle gæsters sprog',
      ]}
      featuresHeading="Alt dit escape room har brug for"
      features={[
        {
          emoji: '👥',
          title: 'Gruppebestilling i samtalen',
          desc: '"Vi er 6 personer og vil gerne prøve jeres sværeste rum lørdag." AI\'en tjekker tilgængelighed og bekræfter bestillingen med alle detaljer.',
        },
        {
          emoji: '🏆',
          title: 'Svar om rum og sværhedsgrader',
          desc: '"Hvad er sværhedsgraden?" "Er det velegnet til børn?" AI\'en kender alle dine rum og kan anbefale det rette ud fra gruppens profil.',
        },
        {
          emoji: '🎂',
          title: 'Firmaevents og private arrangementer',
          desc: 'AI\'en identificerer forespørgsler om firmaevents og private fejringer og samler de nødvendige informationer til dig.',
        },
        {
          emoji: '💳',
          title: 'Svar på priser og pakker',
          desc: '"Hvad koster det?" "Har I grupperabat?" AI\'en kommunikerer dine priser klart og guider mod bestilling.',
        },
        {
          emoji: '🌍',
          title: 'Internationale gæster',
          desc: 'Escape rooms er populære blandt turister. AI\'en kommunikerer på gæstens eget sprog — dansk, engelsk, tysk, arabisk og mere.',
        },
        {
          emoji: '🔔',
          title: 'Bekræftelse og påmindelser',
          desc: 'Alle grupper modtager en bekræftelses-e-mail og en påmindelse inden besøget. Færre no-shows, bedre oplevelse.',
        },
      ]}
      faqs={[
        {
          q: 'Kan AI\'en håndtere at vi har flere rum med forskellig kapacitet?',
          a: 'Ja. Du opretter hvert rum som en ressource med max-kapacitet og åbningstider. AI\'en holder styr på hvad der er ledigt hvornår.',
        },
        {
          q: 'Hvad med deposita og betaling?',
          a: 'AI\'en kan informere om depositumkrav og sende kunden til din betalingsside. Selve betalingsbehandlingen sker via dit eksisterende betalingssystem.',
        },
        {
          q: 'Kan vi tilbyde private events udenfor åbningstid?',
          a: 'Ja. Du kan sætte specifikke tidsrum til rådighed for private events. AI\'en præsenterer disse muligheder til kunder der spørger.',
        },
        {
          q: 'Er det velegnet til gennemgangssalg fra vores hjemmeside?',
          a: 'Perfekt. Mange escape rooms oplever at kunder forlader bestillingssiden fordi de har spørgsmål. Deskio besvarer dem på stedet og øger konverteringen.',
        },
      ]}
      ctaHeading="Fyld dine rum — automatisk"
      ctaSubtext="Deskio håndterer alle bestillingsforespørgsler så du kan fokusere på at skabe uforglemmelige oplevelser."
    />
  )
}
