// Sett LIVE = true den dagen fasadetjenester.no peker hit.
// Det fjerner noindex, åpner robots.txt og aktiverer sitemap.
export const LIVE = true
export const BASE = 'https://fasadetjenester.no'


// Kontaktinfo — ett sted, brukes av schema og sidene.
export const TLF = '+4792979177'
export const TLF_VIS = '929 79 177'
export const EPOST = 'terje@fasadetjenester.no'

// Typeform-skjemaet (lang versjon). Brukes som fallback av det innebygde skjemaet.
export const TYPEFORM_ID = 'vKqv5RX5'
export const TYPEFORM_URL = 'https://416jbe00upv.typeform.com/to/' + TYPEFORM_ID

// Befaringsskjemaet ligger i Typeform. Knapper med data-tf-open aapner det som
// popup via public/js/tf.js, og pusher 'befaring_skjema' til dataLayer ved
// innsending. Ingen egen skjemamottaker aa vedlikeholde.


// Grafittivideo (JWPlayer). Tom streng skjuler videoseksjonen.
export const GRAFITTI_VIDEO = 'https://cdn.jwplayer.com/players/brXg3yG3-DqlJkzVm.html'

// Kommuner vi dekker — brukes i LocalBusiness.areaServed (eksplisitt liste
// gir bedre lokal forståelse enn 'Østlandet').
export const KOMMUNER = [
  'Oslo', 'Ullensaker', 'Lillestrøm', 'Bærum', 'Asker', 'Lørenskog',
  'Nordre Follo', 'Nannestad', 'Eidsvoll', 'Rælingen', 'Nittedal',
  'Gjerdrum', 'Aurskog-Høland', 'Enebakk', 'Frogn', 'Ås', 'Vestby',
]
