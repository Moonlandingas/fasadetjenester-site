// ===========================================================================
//  MARKEDSPRISER — IKKE FASADETJENESTERS EGNE PRISER
// ===========================================================================
//
//  Hvert tall på denne siden er hentet fra en offentlig, navngitt norsk kilde
//  og er oppgitt MED kildehenvisning på siden. Dette er redaksjonelt innhold
//  om hva fasadevask koster i det norske markedet — på samme måte som
//  oppussingsguiden.no og renholdere.no gjør det.
//
//  Fasadetjenesters egne priser står ingen steder på nettsiden. Vår pris
//  settes etter gratis befaring, og det sier siden tydelig flere steder.
//
//  Skal tallene oppdateres: sjekk kildene på nytt, oppdater HENTET-datoen
//  under, og oppdater "Sist gjennomgått" i teksten på siden.
// ===========================================================================

export const HENTET = 'august 2026'

export type Kilde = { navn: string; url: string }

export const KILDER: Record<string, Kilde> = {
  opg: { navn: 'Oppussingsguiden', url: 'https://www.oppussingsguiden.no/pris/fasade/koster-fasadevask/' },
  rh: { navn: 'Renholdere.no', url: 'https://www.renholdere.no/hva-koster-fasadevask/' },
  vs: { navn: 'Vaskesmart', url: 'https://www.vaskesmart.no/pris/fasadevask' },
}

export type MarkedsRad = { hva: string; pris: string; note: string; kilde: keyof typeof KILDER }

// Kvadratmeterpriser slik de oppgis offentlig i markedet.
export const MARKED_KVM: MarkedsRad[] = [
  {
    hva: 'Enkel vask — lavt trykk og såpe',
    pris: '15–30 kr/m²',
    note: 'Lett tilsmussing, flater som kan nås fra bakken.',
    kilde: 'opg',
  },
  {
    hva: 'Grundig vask med algebehandling',
    pris: '25–45 kr/m²',
    note: 'Der begroingen har fått sitte. Middel som virker inn før avskylling.',
    kilde: 'opg',
  },
  {
    hva: 'Vask, mosefjerning og impregnering',
    pris: '35–60 kr/m²',
    note: 'Full behandling som forlenger intervallet til neste vask.',
    kilde: 'opg',
  },
  {
    hva: 'Høytrykksvask på tegl og betong',
    pris: '20–40 kr/m²',
    note: 'Robuste flater som tåler mekanisk rengjøring.',
    kilde: 'opg',
  },
  {
    hva: 'Bredere spenn oppgitt i bransjen',
    pris: '40–150 kr/m²',
    note: 'Øvre del av spennet gjelder krevende tilkomst, høyde og verneverdige fasader.',
    kilde: 'rh',
  },
]

// Typiske totalpriser per bygningstype, som publisert.
export const MARKED_BYGG: MarkedsRad[] = [
  { hva: 'Rekkehus, ca. 80 m² fasade', pris: 'ca. 3 800 kr', note: 'Regneeksempel fra Oppussingsguiden.', kilde: 'opg' },
  { hva: 'Enebolig, ca. 100 m² fasade', pris: 'ca. 5 000 kr', note: 'Regneeksempel fra Vaskesmart.', kilde: 'vs' },
  { hva: 'Enebolig, ca. 180 m² fasade', pris: 'ca. 12 300 kr', note: 'Regneeksempel fra Oppussingsguiden.', kilde: 'opg' },
  { hva: 'Enebolig, samlet spenn', pris: '5 000–25 000 kr', note: 'Avhenger av høyde, tilkomst og tilsmussing.', kilde: 'opg' },
  { hva: 'Boligblokk, 4 etasjer, ca. 500 m²', pris: '25 000–40 000 kr', note: 'Inkludert lift.', kilde: 'rh' },
  { hva: 'Næringsbygg, 8 etasjer, ca. 2 000 m²', pris: '100 000–200 000 kr', note: 'Krevende tilkomst og sikring.', kilde: 'rh' },
  { hva: 'Borettslag, 20 enheter, ca. 600 m²', pris: '15 000–45 000 kr', note: 'Tilsvarer 1 000–3 000 kr per enhet.', kilde: 'opg' },
]

// Kostnadspostene en jobb settes sammen av.
export const MARKED_POSTER: MarkedsRad[] = [
  { hva: 'Selve fasadevasken', pris: '3 000–15 000 kr', note: 'Arbeidet på flaten.', kilde: 'opg' },
  { hva: 'Algebehandling', pris: '1 000–4 000 kr', note: 'Middel og virketid.', kilde: 'opg' },
  { hva: 'Stillas eller lift', pris: '2 000–8 000 kr', note: 'Fast kostnad uansett flatestørrelse — se avsnittet under.', kilde: 'opg' },
  { hva: 'Spyling av takrenner', pris: '1 000–3 000 kr', note: 'Ofte tatt i samme runde.', kilde: 'opg' },
  { hva: 'Impregnering', pris: '2 000–6 000 kr', note: 'Tillegg på porøse flater.', kilde: 'opg' },
  { hva: 'Transport og rigg', pris: '500–2 000 kr', note: 'Påløper per oppmøte.', kilde: 'opg' },
]

// Grunnlag for kalkulatoren. Bevisst brede spenn — den skal vise
// STØRRELSESORDEN i markedet, ikke gi et tilbud.
export const KALK = {
  metode: [
    { id: 'enkel', navn: 'Enkel vask', min: 15, maks: 30 },
    { id: 'alge', navn: 'Vask med algebehandling', min: 25, maks: 45 },
    { id: 'full', navn: 'Vask, mose og impregnering', min: 35, maks: 60 },
    { id: 'trykk', navn: 'Høytrykk på tegl eller betong', min: 20, maks: 40 },
  ],
  tilkomst: [
    { id: 'bakke', navn: 'Alt kan nås fra bakken', min: 500, maks: 2000 },
    { id: 'lift', navn: 'Krever lift', min: 2500, maks: 8000 },
    { id: 'stillas', navn: 'Krever stillas', min: 4000, maks: 12000 },
  ],
}
