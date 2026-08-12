import Script from 'next/script'
import { LIVE, BASE, PRISER_GODKJENT, TLF, TLF_VIS, EPOST, TYPEFORM_URL, SKJEMA_ENDPOINT, SKJEMA_KOPI, KOMMUNER } from '../../../lib/site'
import { KVM_PRISER, RIGG, EKSEMPLER, KVM_MIN, KVM_MAKS, VALUTA } from '../../../lib/priser'
import { SIDE_CSS, SKJEMA_CSS } from '../../../lib/css'

// Siden indekseres først når Terje har godkjent tallene i lib/priser.ts
// (PRISER_GODKJENT i lib/site.ts). Fram til da: noindex, og holdt ute av sitemap.
const INDEKSER = LIVE && PRISER_GODKJENT

const TITTEL = 'Fasadevask pris — hva koster det i 2026? | Fasadetjenester AS'
const BESKR = 'Fasadevask koster typisk ' + KVM_MIN + '–' + KVM_MAKS + ' kr per m². Se komplett prisoversikt per metode, tilkomst og bygningstype — med tre regneeksempler og pris per enhet for borettslag.'

export const metadata = {
  title: TITTEL,
  description: BESKR,
  robots: { index: INDEKSER, follow: LIVE },
  alternates: { canonical: '/fasadevask/pris' },
  openGraph: {
    title: TITTEL, description: BESKR, url: '/fasadevask/pris',
    siteName: 'Fasadetjenester AS', locale: 'nb_NO', type: 'website',
    images: [{ url: '/img/og.jpg', width: 1200, height: 630, alt: 'Fasadevask pris — Fasadetjenester AS' }],
  },
}

const rader = (r: { hva: string; pris: string; note: string }[]) =>
  r.map(x => '<tr><td><strong>' + x.hva + '</strong><br><span style="color:var(--steind);font-size:14.5px">' + x.note + '</span></td><td class="pr">' + x.pris + '</td></tr>').join('')

const eksempler = EKSEMPLER.map(e =>
  '<div class="exc"><h3>' + e.tittel + '</h3><ul>' +
  e.fakta.map(f => '<li>' + f + '</li>').join('') +
  '</ul><p class="sum">' + e.sum + '</p>' +
  (e.per ? '<p class="per">' + e.per + '</p>' : '') + '</div>').join('')

const FAQ: [string, string][] = [
  ['Hva koster fasadevask per kvadratmeter?',
    'Fasadevask koster typisk ' + KVM_MIN + '–' + KVM_MAKS + ' kr per kvadratmeter fasadeflate. Softwash på ordinær tilsmussing ligger på 25–45 kr/m², softwash med algebehandling på 35–60 kr/m², og høytrykksvask på robuste flater på 20–40 kr/m². Tilkomst kommer i tillegg.'],
  ['Hva koster fasadevask av en enebolig eller et rekkehus?',
    'Et rekkehus med rundt 120 m² fasade som kan vaskes fra bakken ligger normalt på 4 000–7 500 kr. Er bygget høyere og krever lift, kommer riggkostnaden på 3 500–7 000 kr per dag i tillegg.'],
  ['Hva koster fasadevask for et borettslag?',
    'Et borettslag med 20 enheter og rundt 600 m² fasade ligger normalt på 26 000–45 000 kr når fasadevask og takrenner tas i samme runde — omtrent 1 300–2 250 kr per enhet. Rigg- og kjørekostnaden deles mellom tjenestene, så samordning gir lavere pris per post.'],
  ['Hva koster fasadevask av en boligblokk?',
    'En boligblokk i fire etasjer med rundt 500 m² fasade ligger normalt på 22 000–38 000 kr med softwash og algebehandling, inkludert lift.'],
  ['Hva påvirker prisen mest?',
    'Fire ting: areal og høyde (avgjør om vi jobber fra bakken, lift eller stillas), tilkomst (trange bakgårder tar tid), underlag og hvor hardt fasaden er begrodd, og samordning — tar vi vinduer, takrenner eller garasjen i samme runde, deler tjenestene rigg- og kjørekostnaden.'],
  ['Er prisen fast, eller er det et estimat?',
    'Etter befaring får du fast pris per tjeneste. Intervallene på denne siden er nivåene vi normalt ligger på, slik at du vet omtrent hva du går til før vi kommer ut. Befaringen er gratis og uforpliktende.'],
  ['Kommer mva. i tillegg?',
    'Ja. Alle beløp på denne siden er eks. mva.'],
  ['Lønner det seg å ta flere tjenester samtidig?',
    'Ja. Rigg og kjøring er 1 500–3 500 kr per oppdrag uansett, og lift koster det samme enten vi vasker fasaden eller også tar takrennene. Tar vi flere ting i samme runde, fordeles den kostnaden — det er der besparelsen for borettslag ligger.'],
]

const ld = JSON.stringify({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': BASE + '/fasadevask/pris#page',
      name: 'Fasadevask pris',
      description: BESKR,
      inLanguage: 'nb-NO',
      dateModified: '2026-08-11',
      isPartOf: { '@id': BASE + '/#org' },
      about: { '@id': BASE + '/fasadevask#service' },
    },
    {
      '@type': 'Service',
      '@id': BASE + '/fasadevask#service',
      name: 'Fasadevask',
      provider: { '@id': BASE + '/#org' },
      areaServed: KOMMUNER.map(n => ({ '@type': 'City', name: n })),
      offers: {
        '@type': 'Offer',
        priceCurrency: VALUTA,
        availability: 'https://schema.org/InStock',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          priceCurrency: VALUTA,
          minPrice: KVM_MIN,
          maxPrice: KVM_MAKS,
          unitCode: 'MTK',
          unitText: 'kvadratmeter fasadeflate',
          valueAddedTaxIncluded: false,
        },
      },
    },
    {
      '@type': 'FAQPage',
      '@id': BASE + '/fasadevask/pris#faq',
      mainEntity: FAQ.map(([q, a]) => ({
        '@type': 'Question', name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Forside', item: BASE + '/' },
        { '@type': 'ListItem', position: 2, name: 'Fasadevask', item: BASE + '/fasadevask' },
        { '@type': 'ListItem', position: 3, name: 'Pris' },
      ],
    },
  ],
})

export default function Page() {
  return (<>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
    <style dangerouslySetInnerHTML={{ __html: SIDE_CSS + SKJEMA_CSS }}/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ld }}/>
    <div dangerouslySetInnerHTML={{ __html: `

<header><div class="hd"><a class="lg" href="/">Fasade<em>tjenester</em></a>
<nav class="anv"><a href="/">Forside</a><a href="/fasadevask">Fasadevask</a><a href="/fasadevask/pris">Priser</a><a href="/#tjenester">Tjenester</a><a href="/verdt-a-vite">Verdt å vite</a></nav>
<a class="btn" href="#befaring">Gratis befaring</a></div></header>

<div class="wrap">
<p class="crumb"><a href="/">Forside</a> / <a href="/fasadevask">Fasadevask</a> / Pris</p>
<p class="ey">Priser · oppdatert august 2026</p>
<h1>Fasadevask pris: hva koster det?</h1>

<div class="svar"><b>Kort svar:</b> Fasadevask koster typisk <strong>${KVM_MIN}–${KVM_MAKS} kr per kvadratmeter</strong> fasadeflate. Et rekkehus på rundt 120 m² ligger normalt på <strong>4 000–7 500 kr</strong>, en boligblokk på 500 m² på <strong>22 000–38 000 kr</strong>, og et borettslag med 20 enheter på <strong>26 000–45 000 kr</strong> — omtrent <strong>1 300–2 250 kr per enhet</strong>. Prisen drives av areal, høyde, tilkomst og hvor hardt fasaden er begrodd. Alle beløp er eks. mva.</div>

<p class="lede">De fleste som leverer fasadevask svarer «pris etter befaring» og lar det være med det. Vi gjør begge deler: her får du nivåene vi normalt ligger på, så du vet hva du går til — og så setter vi fast pris etter en gratis befaring, når vi har sett hva som faktisk står der.</p>

<div class="meta"><span>Priser oppdatert august 2026</span><span>·</span><span>Alle beløp eks. mva.</span><span>·</span><span>Oslo, Akershus og Sørøst-Norge</span></div>

<h2 id="kvm">Pris per kvadratmeter</h2>
<p>Grunnprisen settes per kvadratmeter fasadeflate. Metoden avgjøres av underlaget — ikke av hva som går raskest.</p>
<table><tr><th>Metode</th><th>Pris</th></tr>${rader(KVM_PRISER)}</table>

<h2 id="rigg">Tilkomst og rigg</h2>
<p>Dette er postene som skiller et enkelt oppdrag fra et krevende. Er bygget høyt eller bakgården trang, er det her prisen faktisk avgjøres.</p>
<table><tr><th>Post</th><th>Pris</th></tr>${rader(RIGG)}</table>

<h2 id="eksempler">Tre regneeksempler</h2>
<div class="ex">${eksempler}</div>
<p style="font-size:15px;color:var(--steind);margin-top:20px">Eksemplene forutsetter normal tilkomst og ordinær tilsmussing. Hardt begrodde eller verneverdige fasader vurderes særskilt.</p>

<h2 id="borettslag">Fasadevask for borettslag: pris per enhet</h2>
<p>Styrer regner sjelden i kvadratmeter — de regner i kroner per leilighet. Med rundt 600 m² fasade og 20 enheter havner en fasadevask normalt på <strong>1 300–2 250 kr per enhet</strong> når takrennene tas i samme runde.</p>
<p>Grunnen til at samordning lønner seg er enkel: rigg og kjøring koster 1 500–3 500 kr per oppdrag uansett, og en lift koster det samme enten vi bare vasker fasaden eller også renser takrennene mens vi er oppe. Tar dere tingene hver for seg, betaler dere den kostnaden tre ganger.</p>
<p>Én befaring kan dekke hele styrets vedlikeholdsliste. Dere får ett samlet tilbud med fast pris per tjeneste, og velger selv hva som tas nå og hva som venter til neste sesong.</p>

<h2>Hva driver prisen?</h2>
<p><strong>Areal og høyde.</strong> Antall etasjer avgjør om vi jobber fra bakken, med lift eller med stillas. Spranget fra to til fire etasjer er ofte større enn selve fasadearealet tilsier.</p>
<p><strong>Tilkomst.</strong> Trange bakgårder, parkerte biler, beplantning og fortau som må sikres tar tid — og tid er den største enkeltposten.</p>
<p><strong>Underlag og tilsmussing.</strong> Softwash på hardt begrodd puss krever lengre virketid og ofte to runder. En lett årlig vask går unna.</p>
<p><strong>Samordning.</strong> Tas vinduer, takrenner eller garasjeanlegget i samme runde, deles rigg- og kjørekostnaden mellom tjenestene.</p>

<h2>Ofte stilte spørsmål om pris</h2>
${FAQ.map(([q, a]) => '<details class="fq"><summary>' + q + '</summary><p>' + a + '</p></details>').join('')}

<div class="sk" id="befaring">
<p class="ey" style="color:var(--hiviz)">Gratis befaring</p>
<h2 style="margin-top:0">Få fast pris på ditt bygg</h2>
<p class="skl">Intervallene over er utgangspunktet. Fast pris får du etter befaringen — den er gratis, og du velger selv om noe skal gjøres.</p>
<form class="skjema" data-endpoint="${SKJEMA_ENDPOINT}" data-typeform="${TYPEFORM_URL}" data-kopi="${SKJEMA_KOPI}" data-kilde="fasadevask-pris" novalidate>
<div class="skg">
<div class="skf"><label for="p-navn">Navn</label><input id="p-navn" name="navn" type="text" autocomplete="name" placeholder="Ola Nordmann" required><span class="err">Fyll inn navn.</span></div>
<div class="skf"><label for="p-tlf">Telefon</label><input id="p-tlf" name="telefon" type="tel" inputmode="tel" autocomplete="tel" placeholder="912 34 567" required><span class="err">Åtte siffer, takk.</span></div>
<div class="skf"><label for="p-adr">Adresse eller postnummer</label><input id="p-adr" name="adresse" type="text" autocomplete="street-address" placeholder="Storgata 1, 0155 Oslo"></div>
<div class="skf"><label for="p-type">Hva slags bygg</label><select id="p-type" name="byggtype">
<option value="">Velg …</option><option>Borettslag</option><option>Sameie</option><option>Næringsbygg</option><option>Bygård</option><option>Enebolig eller rekkehus</option><option>Annet</option></select></div>
<div class="skf fu"><label for="p-melding">Omtrentlig størrelse eller antall enheter</label><textarea id="p-melding" name="melding" placeholder="F.eks. «4 etasjer, 18 leiligheter, pusset fasade mot nord»"></textarea></div>
<input class="hp" type="text" name="firma" tabindex="-1" autocomplete="off" aria-hidden="true">
<input type="hidden" name="tjenester" value="Fasadevask">
<div class="skb"><button class="btn" type="submit">Be om fast pris</button>
<small>Vi bruker opplysningene kun til å svare deg. <a href="/personvern" style="color:var(--hiviz)">Personvern</a></small></div>
</div>
</form>
<div class="skok"></div>
<p style="margin:20px 0 0;font-size:15px;color:rgba(255,255,255,.7)">Heller ringe? <a href="tel:${TLF}" style="color:var(--hiviz);font-weight:600">${TLF_VIS}</a></p>
</div>

<div class="forf"><img src="/img/terje.webp" alt="Terje Gulliksen, daglig leder i Fasadetjenester AS">
<div><b>Terje Gulliksen</b><p>Daglig leder i Fasadetjenester AS. Prisene på denne siden er nivåene vi faktisk jobber etter, ikke lokketall. Terje er selv med på befaringene og setter prisen der.</p></div></div>

<p style="margin:30px 0 0"><a class="btn bl" href="/fasadevask">← Tilbake til fasadevask</a></p>

</div>

<footer><div>© 2026 Fasadetjenester AS · Org.nr. 934 907 035 · <a href="tel:${TLF}">${TLF_VIS}</a> · <a href="mailto:${EPOST}">${EPOST}</a> · Mikalsrud 7A, 2069 Jessheim</div></footer>` }}/>
    <Script src="/js/skjema.js" strategy="afterInteractive"/>
  </>)
}
