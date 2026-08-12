// Sett LIVE = true den dagen fasadetjenester.no peker hit.
// Det fjerner noindex, åpner robots.txt og aktiverer sitemap.
export const LIVE = true
export const BASE = 'https://fasadetjenester.no'

// ---------------------------------------------------------------------------
// PRISER_GODKJENT — sikkerhetsbryter for prissidene.
//
//   false  → /fasadevask/pris og prisseksjonen på /fasadevask får noindex og
//            holdes ute av sitemap. Sidene finnes og kan leses/deles internt,
//            men Google og AI-motorer plukker dem ikke opp.
//   true   → prissidene indekseres normalt.
//
// Sett denne til true FØRST når Terje har gått gjennom og bekreftet tallene i
// lib/priser.ts. Tallene der er markedsbenchmarket, ikke Fasadetjenesters egne.
// ---------------------------------------------------------------------------
export const PRISER_GODKJENT = false

// Kontaktinfo — ett sted, brukes av schema og sidene.
export const TLF = '+4792979177'
export const TLF_VIS = '929 79 177'
export const EPOST = 'terje@fasadetjenester.no'

// Typeform-skjemaet (lang versjon). Brukes som fallback av det innebygde skjemaet.
export const TYPEFORM_ID = 'vKqv5RX5'
export const TYPEFORM_URL = 'https://416jbe00upv.typeform.com/to/' + TYPEFORM_ID

// ---------------------------------------------------------------------------
// SKJEMA_ENDPOINT — hvor det innebygde befaringsskjemaet sender dataene.
//
// Tomt ('')  → skjemaet faller tilbake på Typeform: feltene fylles ut på egen
//              side, og brukeren sendes videre til Typeform med verdiene
//              forhåndsutfylt. Fungerer i dag, uten oppsett.
// Satt       → skjemaet POST-er direkte dit (Formspree, Web3Forms, Vercel-
//              funksjon, eller egen mottaker) og brukeren sendes til
//              /tusen-takk. Dette er det som bør på plass.
//
// Uansett variant pushes hendelsen 'befaring_skjema' til dataLayer, slik at
// GTM/Google Ads kan telle konverteringen uten å være avhengig av redirect.
// ---------------------------------------------------------------------------
export const SKJEMA_ENDPOINT = ''

// Kommuner vi dekker — brukes i LocalBusiness.areaServed (eksplisitt liste
// gir bedre lokal forståelse enn 'Østlandet').
export const KOMMUNER = [
  'Oslo', 'Ullensaker', 'Lillestrøm', 'Bærum', 'Asker', 'Lørenskog',
  'Nordre Follo', 'Nannestad', 'Eidsvoll', 'Rælingen', 'Nittedal',
  'Gjerdrum', 'Aurskog-Høland', 'Enebakk', 'Frogn', 'Ås', 'Vestby',
]
