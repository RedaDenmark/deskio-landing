import type { Metadata } from 'next'
import NichePage from '@/components/NichePage'

export const metadata: Metadata = {
  title: 'AI-receptionist til restauranter og caféer | Deskio',
  description: 'Deskio håndterer bordreservationer, takeaway-forespørgsler og spørgsmål om menuen automatisk — 24/7. Den perfekte digitale receptionist til restauranter og caféer i Danmark.',
  alternates: { canonical: 'https://deskio.dk/restaurant' },
  openGraph: {
    title: 'AI-receptionist til restauranter | Deskio',
    description: 'Automatisk bordreservation og kundeservice til restauranter og caféer.',
    url: 'https://deskio.dk/restaurant',
  },
}

export default function RestaurantPage() {
  return (
    <NichePage
      slug="restaurant"
      title="AI-receptionist til"
      headline="restauranter & caféer"
      metaTitle="AI-receptionist til restauranter | Deskio"
      metaDescription="Automatisk bordreservation og kundeservice til restauranter og caféer."
      emoji="🍽️"
      heroTagline="Til restauranter, caféer og spisesteder i Danmark"
      heroParagraph="Deskio modtager bordreservationer, besvarer spørgsmål om menuen, åbningstider og allergier — og fanger nye gæster døgnet rundt. Ingen ubesvarede opkald. Ingen tabte reservationer."
      proofItems={[
        'Automatisk bordreservation 24/7',
        'Svar på menuspørgsmål og allergener',
        'Bekræftelse og påmindelser til gæster',
        'Håndterer store selskaber og privat dining',
        'Flersproget — taler gæstens sprog',
      ]}
      featuresHeading="Alt dit spisested har brug for"
      features={[
        {
          emoji: '🪑',
          title: 'Bordreservation i samtalen',
          desc: '"Kan vi reservere et bord til 4 fredag aften?" AI\'en tjekker ledige borde, bekræfter reservationen og sender en e-mail til gæsten.',
        },
        {
          emoji: '🥗',
          title: 'Svar på menu og allergener',
          desc: '"Har I vegetariske retter?" "Er der gluten i pasta-retten?" Upload din menu og AI\'en besvarer alle kostspørgsmål præcist.',
        },
        {
          emoji: '🎉',
          title: 'Håndtér selskaber og events',
          desc: 'Firmafester, fødselsdage, brudefrokoster — AI\'en samler oplysninger og sender forespørgslen videre til dig til opfølgning.',
        },
        {
          emoji: '📞',
          title: 'Aldrig et mistet opkald',
          desc: 'Travl serviceperiode? Deskio svarer altid på chat, uanset om du er optaget i køkkenet eller ved bordene.',
        },
        {
          emoji: '🌐',
          title: 'Taler turisternes sprog',
          desc: 'Internationale gæster booker bord på engelsk, tysk eller arabisk. AI\'en svarer på gæstens eget sprog automatisk.',
        },
        {
          emoji: '🔔',
          title: 'Påmindelser reducerer no-shows',
          desc: 'AI\'en sender automatisk en bekræftelsesmail og en påmindelse dagen inden. Gæsten kan nemt aflyse eller ændre.',
        },
      ]}
      faqs={[
        {
          q: 'Kan AI\'en håndtere reservationer for forskellige tidsrum (frokost/aften)?',
          a: 'Ja. Du definerer dine siddeskifter og åbningstider. AI\'en tilbyder kun ledige tidspunkter inden for disse rammer.',
        },
        {
          q: 'Hvad med store selskaber på 10+ personer?',
          a: 'Du kan sætte en grænse for hvornår AI\'en sender forespørgslen videre til dig i stedet for at booke automatisk — f.eks. ved selskaber over 8 personer.',
        },
        {
          q: 'Kan vi opdatere menuen nemt?',
          a: 'Ja. Du uploader eller skriver din menuinformation i dit Deskio-dashboard. Du kan opdatere det når som helst — AI\'en er opdateret med det samme.',
        },
        {
          q: 'Virker det hvis vi ikke har en hjemmeside?',
          a: 'Deskio-widgetten installeres på en hjemmeside. Men mange restauranter bruger et simpelt "booking"-link fra deres Instagram bio eller Google Business-profil.',
        },
      ]}
      ctaHeading="Flere gæster. Færre tabte reservationer."
      ctaSubtext="Din restaurant er åben — Deskio sørger for at dine gæster altid får svar, også når du er travlest."
    />
  )
}
