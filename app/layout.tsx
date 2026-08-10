import Script from 'next/script'
import { BASE } from '../lib/site'

export const metadata = {
  metadataBase: new URL(BASE),
  twitter: {
    card: 'summary_large_image',
    images: ['/img/og.jpg'],
  },
}

const orgLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': BASE + '/#org',
  name: 'Fasadetjenester AS',
  slogan: 'Alt utvendig. Én leverandør.',
  telephone: '+47 929 79 177',
  email: 'terje@fasadetjenester.no',
  url: BASE + '/',
  address: { '@type': 'PostalAddress', streetAddress: 'Mikalsrud 7A', postalCode: '2069', addressLocality: 'Jessheim', addressCountry: 'NO' },
  areaServed: ['Oslo', 'Akershus', 'Østlandet', 'Sørøst-Norge'],
  knowsAbout: ['Fasadevask', 'Grafittifjerning', 'Takrennerens', 'Istappfjerning', 'Blikkenslagerarbeid', 'Murreparasjon'],
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
        <Script id="consent-banner" src="/js/consent.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}
