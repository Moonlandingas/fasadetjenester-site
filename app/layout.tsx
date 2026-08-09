import Script from 'next/script'

export const metadata = {
  metadataBase: new URL('https://fasadetjenester.no'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nb">
      <body>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KP9PTS6D" height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript>
        {children}
        <Script id="gtm" src="/js/gtm.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}
