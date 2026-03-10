import type { Metadata } from 'next'
import NichePage from '@/components/NichePage'

export const metadata: Metadata = {
  title: 'AI-receptionist til tandlæger og tandklinikker | Deskio',
  description: 'Deskio håndterer patientbooking, spørgsmål om behandlinger og priser automatisk for tandlæger og tandklinikker i Danmark — 24/7, uden ekstra personale.',
  alternates: { canonical: 'https://deskio.dk/tandlaege' },
  openGraph: {
    title: 'AI-receptionist til tandlæger | Deskio',
    description: 'Automatisk patientbooking og kundeservice til tandlæger og tandklinikker.',
    url: 'https://deskio.dk/tandlaege',
  },
}

export default function TandlaegePage() {
  return (
    <NichePage
      slug="tandlaege"
      title="AI-receptionist til"
      headline="tandlæger & klinikker"
      metaTitle="AI-receptionist til tandlæger | Deskio"
      metaDescription="Automatisk patientbooking og kundeservice til tandlæger og tandklinikker."
      emoji="🦷"
      heroTagline="Specialiseret til tandlæger og tandklinikker"
      heroParagraph="Deskio er din digitale receptionist der modtager patienthenvendelser, besvarer spørgsmål om behandlinger og priser og booker tider — automatisk, også efter lukketid. Færre opkald til frontdisken, mere tid til patienterne."
      proofItems={[
        'Online patientbooking 24/7',
        'Svar på behandlingspriser',
        'Automatiske påmindelser',
        'Håndterer akutte forespørgsler',
        'Professionel og tryg kommunikation',
      ]}
      featuresHeading="Det din tandklinik har brug for"
      features={[
        {
          emoji: '📅',
          title: 'Patientbooking uden opkald',
          desc: 'Patienter booker direkte online. AI\'en verificerer behandlingstype, finder et ledigt tidslot og sender en bekræftelse — ingen receptionist involveret.',
        },
        {
          emoji: '💰',
          title: 'Svar på priser og ydelser',
          desc: '"Hvad koster en tandrensning?" "Laver I tandregulering?" AI\'en besvarer alle prisforespørgsler præcist baseret på din klinikinformation.',
        },
        {
          emoji: '🚨',
          title: 'Akutte patienter guides hurtigt',
          desc: 'Tandpine midt om natten? AI\'en identificerer akutte situationer og guider patienten til det rigtige — akuttid, vagttelefon eller nærmeste skadestue.',
        },
        {
          emoji: '🔔',
          title: 'Automatiske aftalepåmindelser',
          desc: 'Reducer no-shows markant med automatiske påmindelser 24 timer inden aftalen. Patienten kan nemt aflyse og frigøre tidslottet.',
        },
        {
          emoji: '👨‍⚕️',
          title: 'Vælg ønsket tandlæge',
          desc: 'Har I flere tandlæger? Patienten kan specificere hvem de foretrækker, og AI\'en booker hos netop den person.',
        },
        {
          emoji: '🌐',
          title: 'Flersproget patientservice',
          desc: 'Mange patienter taler ikke dansk som modersmål. AI\'en svarer automatisk på patientens eget sprog uden ekstra opsætning.',
        },
      ]}
      faqs={[
        {
          q: 'Kan AI\'en skelne mellem rutinekontrol og akutte tandpiner?',
          a: 'Ja. Du definerer hvad der er "akut" og hvad der er "rutine". AI\'en stiller de rigtige spørgsmål og guider patienten til den korrekte procedure.',
        },
        {
          q: 'Hvad med sygesikringstilskud og forsikringsspørgsmål?',
          a: 'Du kan uploade information om sygesikring og forsikringsaftaler. AI\'en besvarer standardspørgsmål og ved hvornår den skal sende patienten videre til jer.',
        },
        {
          q: 'Kan vi have flere tandlæger med separate kalendere?',
          a: 'Ja. Hvert personalemedlem har sin egen kalender med egne åbningstider. Patienten kan vælge specifik behandler.',
        },
        {
          q: 'Er det GDPR-kompatibelt?',
          a: 'Ja. Deskio opbevarer kun nødvendige kontaktoplysninger til booking. Data opbevares på europæiske servere og kan slettes til enhver tid.',
        },
      ]}
      ctaHeading="Giv dine patienter øjeblikkelig service"
      ctaSubtext="En professionel digital receptionist der aldrig har en dårlig dag — og altid svarer inden for sekunder."
    />
  )
}
