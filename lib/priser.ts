// ===========================================================================
//  PRISER — MÅ GJENNOMGÅS AV TERJE FØR PUBLISERING
// ===========================================================================
//
//  Tallene under er BENCHMARKET MOT MARKEDET, ikke hentet fra Fasadetjenesters
//  egne kalkyler. De er satt for å møte søkeintensjonen på «fasadevask pris»
//  (170 søk/mnd, keyword difficulty 7) — alle 15 sidene som rangerer på det
//  søket publiserer tall; det gjør vi ikke i dag, og det er hovedgrunnen til
//  at vi ikke er der.
//
//  Kilder for intervallene:
//    oppussingsguiden.no/pris/fasade/koster-fasadevask/   15–60 kr/m²
//    renholdere.no/hva-koster-fasadevask/                 40–150 kr/m²
//    vaskesmart.no/pris/fasadevask                        ca. 50 kr/m²
//
//  Slik gjør du det:
//    1. Gå gjennom hver rad og juster til Fasadetjenesters faktiske nivå.
//    2. Sett PRISER_GODKJENT = true i lib/site.ts.
//    3. Push. Da indekseres prissidene.
//
//  Så lenge PRISER_GODKJENT er false ligger sidene ute med noindex og er
//  usynlige for Google og AI-motorer.
// ===========================================================================

export type PrisRad = { hva: string; pris: string; note: string }

export const KVM_PRISER: PrisRad[] = [
  {
    hva: 'Softwash — ordinær tilsmussing',
    pris: '25–45 kr/m²',
    note: 'Lavt trykk og middel som løser opp alger og sopp kjemisk. Puss, eldre tegl, malt kledning og plater.',
  },
  {
    hva: 'Softwash med algebehandling',
    pris: '35–60 kr/m²',
    note: 'Der begroingen har sittet lenge. Middelet får virke og dreper begroingen i roten, så fasaden holder seg ren lenger.',
  },
  {
    hva: 'Høytrykksvask',
    pris: '20–40 kr/m²',
    note: 'Betong, stein, nyere murflater, garasjeanlegg og dekker — flater som tåler trykk.',
  },
  {
    hva: 'Takvask',
    pris: '30–55 kr/m²',
    note: 'Mose og begroing på betongstein og takplater. Ofte fornuftig å ta i samme runde som fasaden.',
  },
  {
    hva: 'Takrennerens',
    pris: '35–65 kr/løpemeter',
    note: 'Rensing og gjennomspyling av nedløp. Hører høsten til i årshjulet.',
  },
  {
    hva: 'Impregnering (tillegg)',
    pris: '25–45 kr/m²',
    note: 'Forlenger intervallet mellom hver vask på utsatte, porøse flater.',
  },
]

export const RIGG: PrisRad[] = [
  { hva: 'Rigg og kjøring', pris: '1 500–3 500 kr', note: 'Per oppdrag. Deles mellom tjenestene når vi tar flere ting i samme runde.' },
  { hva: 'Lift', pris: '3 500–7 000 kr per dag', note: 'Fra tredje etasje og oppover, der tilkomsten tillater det.' },
  { hva: 'Stillas', pris: 'Etter befaring', note: 'Trange bakgårder og verneverdige fasader krever egen vurdering.' },
  { hva: 'Arbeidsvarsling og leie av gategrunn', pris: 'Etter sats', note: 'Søknad mot bl.a. Bymiljøetaten i Oslo. Vi håndterer den, kommunens gebyr faktureres videre.' },
]

export type Eksempel = { tittel: string; fakta: string[]; sum: string; per?: string }

export const EKSEMPLER: Eksempel[] = [
  {
    tittel: 'Rekkehus eller mindre bygg',
    fakta: ['Ca. 120 m² fasade', 'To etasjer, arbeid fra bakken', 'Softwash på malt trekledning'],
    sum: '4 000–7 500 kr',
  },
  {
    tittel: 'Bygård eller boligblokk',
    fakta: ['Ca. 500 m² fasade', 'Fire etasjer, lift', 'Softwash med algebehandling på puss'],
    sum: '22 000–38 000 kr',
  },
  {
    tittel: 'Borettslag, 20 enheter',
    fakta: ['Ca. 600 m² fasade', 'Fasadevask + takrenner i samme runde', 'Lift, rigg deles mellom tjenestene'],
    sum: '26 000–45 000 kr',
    per: 'ca. 1 300–2 250 kr per enhet',
  },
]

// Brukes i Offer/priceSpecification-schema og i «kort svar»-boksene.
export const KVM_MIN = 20
export const KVM_MAKS = 60
export const VALUTA = 'NOK'
