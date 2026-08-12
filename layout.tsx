import Script from 'next/script'
import { BASE, TLF, EPOST, KOMMUNER } from '../lib/site'

export const metadata = {
  metadataBase: new URL(BASE),
  twitter: {
    card: 'summary_large_image',
    images: ['/img/og.jpg'],
  },
  verification: {
    other: {
      'facebook-domain-verification': '2a0xaz9ddak6qp1ij3d1hrmeya1n2y',
    },
  },
}

const TJENESTER = [
  'Fasadevask', 'Softwash', 'Høytrykksvask', 'Vindusvask', 'Grafittifjerning',
  'Garasjevask', 'Takvask', 'Takrennerens', 'Takreparasjon', 'Murreparasjon',
  'Betongrehabilitering', 'Fasademaling', 'Blikkenslagerarbeid', 'Beslag',
  'Istappfjerning', 'Snørydding av tak', 'Salting og strøing', 'Daglig renhold',
]

const orgLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': BASE + '/#org',
  name: 'Fasadetjenester AS',
  legalName: 'Fasadetjenester AS',
  slogan: 'Alt utvendig. Én leverandør.',
  description: 'Fasadevask, grafittifjerning, takrennerens, vintersikring og håndverk for borettslag, sameier og næringsbygg i Oslo, Akershus og Sørøst-Norge.',
  telephone: TLF,
  email: EPOST,
  url: BASE + '/',
  logo: BASE + '/img/og.jpg',
  image: BASE + '/img/og.jpg',
  vatID: 'NO934907035MVA',
  taxID: '934907035',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Mikalsrud 7A',
    postalCode: '2069',
    addressLocality: 'Jessheim',
    addressRegion: 'Akershus',
    addressCountry: 'NO',
  },
  areaServed: KOMMUNER.map(n => ({ '@type': 'City', name: n })),
  knowsAbout: TJENESTER,
  priceRange: '$$',
  currenciesAccepted: 'NOK',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '16:00',
    },
  ],
  contactPoint: [{
    '@type': 'ContactPoint',
    telephone: TLF,
    contactType: 'customer service',
    areaServed: 'NO',
    availableLanguage: ['Norwegian', 'nb'],
  }],
  founder: { '@type': 'Person', name: 'Terje Gulliksen', jobTitle: 'Daglig leder' },
  employee: [{ '@type': 'Person', name: 'Terje Gulliksen', jobTitle: 'Daglig leder' }],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Utvendig vedlikehold',
    itemListElement: TJENESTER.map(t => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: t },
    })),
  },
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nb">
      <body>
        <Script id="consent-init" src="/js/consent-init.js" strategy="beforeInteractive" />
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KP9PTS6D" height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: orgLd }} />
        {children}
        <Script id="gtm" src="/js/gtm.js" strategy="afterInteractive" />
        <Script id="matomo" src="/js/matomo.js" strategy="afterInteractive" />
        <Script id="meta-pixel" src="/js/meta-pixel.js" strategy="afterInteractive" />
        <Script id="consent-banner" src="/js/consent.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}
