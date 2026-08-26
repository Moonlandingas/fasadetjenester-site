import Script from 'next/script'
import { LIVE, BASE, TLF, TLF_VIS, EPOST, TYPEFORM_URL, KOMMUNER } from '../../lib/site'
import { SIDE_CSS, SKJEMA_CSS, HERO_CSS } from '../../lib/css'

const TITTEL = 'Rørspyling og avløpsrens — tett avløp, sluk og rør | Fasadetjenester AS'
const BESKR = 'Spyling og rens av avløp med varmt vann for borettslag, sameier og næringsbygg. Tette rør, vond lukt fra sluk, ACO-renner i garasje, frosne rør. Oslo og Østlandet.'

export const metadata = {
  title: TITTEL,
  description: BESKR,
  robots: { index: LIVE, follow: LIVE },
  alternates: { canonical: '/avlop' },
  openGraph: {
    title: TITTEL, description: BESKR, url: '/avlop',
    siteName: 'Fasadetjenester AS', locale: 'nb_NO', type: 'website',
    images: [{ url: '/img/og.jpg', width: 1200, height: 630, alt: 'Rør- og avløpsservice — Fasadetjenester AS' }],
  },
}


const FAQ = [
  ['Hva koster spyling av avløp?',
    'Prisen avhenger av hva som er tett, hvor rørene ligger og hvor lang strekning som skal spyles. En enkelt sluk eller vask er en liten jobb; stigerør og bunnledninger i et borettslag prises per oppdrag eller som fast avtale. Du får konkret pris etter en gratis befaring — og ved akutt tett avløp rykker vi ut uten befaring først.'],
  ['Hvorfor lukter det vondt fra sluket eller kjøkkenvasken?',
    'Som regel er det fett, såperester og matrester som har bygget seg opp som et belegg inne i røret. Belegget råtner, og lukten siver opp. På bad kan årsaken også være en uttørket vannlås eller et sluk som trenger rens. En spyling med varmt vann løser opp belegget i stedet for bare å skyve hullet i det videre nedover.'],
  ['Hjelper varmt vann bedre enn kaldt?',
    'Ja, mot fett er forskjellen stor. Fett stivner og legger seg som lag på rørveggen ved vanlig temperatur. Varmt vann smelter og løser opp fettet, slik at det følger med ut i stedet for å sette seg igjen lenger nede i røret. Derfor spyler vi med varmt vann der fett er problemet — typisk kjøkkenavløp og fellesledninger i boligbygg.'],
  ['Hvor ofte bør avløp spyles i borettslag og sameier?',
    'Som tommelfingerregel anbefales forebyggende spyling av fellesledninger med noen års mellomrom — hyppigere i bygg med mange leiligheter, kjøkkenavløp med mye fett, eller kjente problemstrekk. Det billigste tidspunktet å spyle på er før det tetter seg: et tilbakeslag i kjelleren koster fort mer enn mange års forebyggende spyling.'],
  ['Hva er en ACO-renne, og hvorfor tetter den seg?',
    'ACO- og drensrenner er avløpsrennene med rist som ligger i gulvet i garasjeanlegg og ved innkjøringer. De samler grus, sand, løv og veisalt — og siden vannet fordamper mellom hver regnskyll, pakker massen seg hard. En tett renne betyr at smeltevann fra bilene blir stående i garasjen vinterstid. Vi åpner risten, tømmer og spyler rennen og kontrollerer at sluket tar unna.'],
  ['Kan dere tine frosne rør?',
    'Ja. Frosne avløps- og drensrør tiner vi kontrollert med varmt vann. Ikke bruk åpen flamme eller kokende vann i klaskevis på egen hånd — det kan sprenge røret eller skade skjøtene, og da har frostskaden blitt en lekkasje.'],
  ['Kan jeg bruke kaustisk soda eller propplösere selv?',
    'Vi fraråder det som fast løsning. Kjemiske propplösere tar sjelden hele proppen, kan skade eldre rør og pakninger, og gjør jobben mer ubehagelig for den som til slutt må åpne røret. En mekanisk åpning eller spyling fjerner årsaken i stedet for å utsette den.'],
  ['Rykker dere ut ved akutt tett avløp?',
    'Ja. Ring ' + '929 79 177' + ' — vi har døgnvakt. Tett toalett, tilbakeslag i sluk eller vann på vei inn der det ikke skal være, er jobber vi tar på kort varsel.'],
]

const ld = JSON.stringify({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': BASE + '/avlop#service',
      name: 'Rørspyling og avløpsrens',
      serviceType: 'Spyling, rens og åpning av avløp og rør',
      description: 'Spyling og rens av avløp med varmt vann, åpning av tette toaletter, sluk og vasker, rens av ACO-/drensrenner i garasjeanlegg og tining av frosne rør.',
      provider: { '@id': BASE + '/#org' },
      areaServed: KOMMUNER.map(n => ({ '@type': 'City', name: n })),
      url: BASE + '/avlop',
    },
    {
      '@type': 'FAQPage',
      '@id': BASE + '/avlop#faq',
      mainEntity: FAQ.map(([q, a]) => ({
        '@type': 'Question', name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Forside', item: BASE + '/' },
        { '@type': 'ListItem', position: 2, name: 'Avløp og rørservice' },
      ],
    },
  ],
})

export default function Page() {
  return (<>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
    <style dangerouslySetInnerHTML={{ __html: SIDE_CSS + SKJEMA_CSS + HERO_CSS }}/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ld }}/>
    <div dangerouslySetInnerHTML={{ __html: `

<header><div class="hd"><a class="lg" href="/">Fasade<em>tjenester</em></a>
<nav class="anv"><a href="/">Forside</a><a href="/avlop">Avløp og rør</a><a href="/fasadevask">Fasadevask</a><a href="/#tjenester">Tjenester</a><a href="/verdt-a-vite">Verdt å vite</a></nav>
<a class="btn" href="#befaring">Gratis befaring</a></div></header>

<section class="hero2"><div class="hbg2" style="background-image:url('/img/hero-video-poster.webp')"><video data-herovideo autoplay muted loop playsinline preload="auto" poster="/img/hero-video-poster.webp" src="/banner.mp4"></video></div>
<div class="hin2">
<p class="crumb"><a href="/">Forside</a> / Avløp og rørservice</p>
<p class="ey">Rør- og avløpsservice · Døgnvakt ved akutt behov</p>
<h1>Tett avløp, treg sluk eller vond lukt? Vi spyler rørene rene.</h1>
<p class="hsub2">Fett og avleiringer bygger seg opp inne i rørene over tid — til slutt som tette rør, tilbakeslag eller lukt fra sluk og kjøkkenvask. Vi spyler med varmt vann som løser opp fettet i stedet for bare å skyve proppen videre, og tar alt fra én treg vask til fellesledningene i et helt borettslag.</p>
<div class="hcta2"><a class="btn" href="${TYPEFORM_URL}" data-tf-open data-tf-kilde="avlop-hero">Bestill gratis befaring</a>
<a class="btn ghost" href="tel:${TLF}">Akutt? Ring ${TLF_VIS}</a></div>
<ul class="htrust"><li>Varmtvannsspyling som løser opp fett</li><li>Døgnvakt ved akutt tett avløp</li><li>Ett tilbud, én faktura</li><li>Gratis og uforpliktende befaring</li></ul>
</div></section>

<div class="wrap">

<div class="svar"><b>Kort svar:</b> Vond lukt og trege sluk skyldes som regel fett og avleiringer som har bygget seg opp inne i rørene — ikke det som ligger i vannlåsen akkurat nå. Spyling med varmt vann løser opp belegget og renser røret i hele lengden. Vi tar også tette toaletter, sluk og vasker, ACO-renner i garasjeanlegg, takrenner og tining av frosne rør. Gratis befaring, døgnvakt ved akutt behov.</div>
</div>

<div class="wrap">
<div class="sk" id="befaring">
<p class="ey" style="color:var(--hiviz)">Gratis befaring</p>
<h2>Få pris på rørene</h2>
<p class="skl">Fyll ut, så ringer vi deg — som regel samme dag. Uforpliktende, og du velger selv om noe skal gjøres. Er avløpet tett akkurat nå, ring i stedet — vi har døgnvakt.</p>
<ul class="skpunkt"><li>Under to minutter</li><li>Uforpliktende</li><li>Vi ringer deg samme dag</li></ul>
<div class="skb"><a class="btn" href="${TYPEFORM_URL}" data-tf-open data-tf-kilde="avlop">Bestill gratis befaring</a>
<a class="btn bl" href="tel:${TLF}">Ring ${TLF_VIS}</a></div>
<p style="margin:20px 0 0;font-size:15px;color:rgba(255,255,255,.7)">Akutt tett avløp? <a href="tel:${TLF}" style="color:var(--hiviz);font-weight:600">${TLF_VIS}</a> — døgnvakt, hele uken.</p>
</div>
</div>

<div class="wrap">

<h2>Dette hjelper vi med</h2>
<table>
<tr><th>Tjeneste</th><th>Typisk situasjon</th></tr>
<tr><td><strong>Spyling og rens av avløp</strong></td><td>Trege sluk, gurgling, tilbakevendende propper, vond lukt. Varmtvannsspyling som renser røret i hele lengden.</td></tr>
<tr><td><strong>Åpning av tette toaletter</strong></td><td>Toalett som ikke tar unna eller stiger. Åpnes mekanisk — uten kjemikalier som skader rør og pakninger.</td></tr>
<tr><td><strong>Åpning av vasker og dusjer</strong></td><td>Kjøkkenvask som tar unna sakte, dusjsluk som samler vann rundt føttene.</td></tr>
<tr><td><strong>ACO-/drensrenner i garasjer</strong></td><td>Renner fulle av grus, salt og løv — vann blir stående i garasjeanlegget. Vi åpner, tømmer og spyler.</td></tr>
<tr><td><strong>Tining av frosne rør</strong></td><td>Avløps- og drensrør som har frosset. Kontrollert tining med varmt vann, uten å skade røret.</td></tr>
<tr><td><strong>Takrenner og nedløp</strong></td><td>Rens og spyling — <a href="/verdt-a-vite/takrenner">egen side om takrennerens her</a>.</td></tr>
<tr><td><strong>Forebyggende vedlikehold</strong></td><td>Fast spyling av fellesledninger og problemstrekk før de tetter seg — den rimeligste varianten av alle.</td></tr>
</table>

<h2>Hvorfor varmt vann?</h2>
<p>Det meste som tetter et avløp i et boligbygg er ikke gjenstander — det er <strong>fett</strong>. Stekefett, såperester og matrester stivner når de treffer kaldt rør, og legger seg lag på lag på rørveggen. Til slutt er åpningen så trang at det skal lite til før det stopper helt, og belegget i seg selv er det som lukter.</p>
<p>Kaldt vann under trykk kan skyve hull i en propp, men fettet på rørveggen står igjen — og da er problemet tilbake om noen måneder. <strong>Varmt vann smelter og løser opp fettet</strong>, slik at det følger med ut. Røret blir rent, ikke bare åpent. Det er forskjellen på å fjerne årsaken og å utsette den.</p>

<h2>Vond lukt fra sluk eller kjøkkenvask?</h2>
<p>Dette er en av de vanligste henvendelsene vi får — og en av de mest misforståtte. Lukten kommer sjelden fra det som ligger i vannlåsen akkurat nå. Den kommer fra belegget av fett og organisk materiale som sitter inne i røret og råtner. Da hjelper det lite å helle noe luktfjernende i sluket: lukten er borte en dag, og tilbake neste uke.</p>
<p>Løsningen er å rense røret, ikke å overdøve det. En spyling med varmt vann fjerner belegget, og lukten forsvinner med årsaken. På bad sjekker vi samtidig sluket og vannlåsen — en uttørket vannlås i en leilighet som står tom slipper kloakklukt rett opp, og det løses på minutter.</p>

<h2 id="borettslag">For borettslag og sameier</h2>
<p>Avløp er et klassisk styreproblem: ingen tenker på rørene før leiligheten i første etasje får tilbakeslag — og da er det både akutt, ubehagelig og dyrt. Fellesledninger og stigerør samler fett fra alle kjøkkenene i bygget, og de tetter seg nedenfra og opp.</p>
<p><strong>Forebyggende spyling</strong> av fellesledningene med faste mellomrom er den billigste forsikringen styret kan tegne. Vi setter det opp som fast avtale, dokumenterer hva som er gjort, og melder fra om strekk som bør følges med på. Har bygget garasjeanlegg, tar vi ACO-rennene i samme runde — de er fulle av grus og salt etter hver vinter.</p>
<p>Og som ellers hos oss: står vi først på bygget, ser vi gjerne på takrenner, sluk på tak og annet i samme runde. Ett tilbud, én faktura.</p>

<h2>Når bør du reagere?</h2>
<table>
<tr><th>Tegn</th><th>Hva det som regel betyr</th></tr>
<tr><td>Sluk eller vask tar unna sakte</td><td class="pr">Belegg har snevret inn røret — spyl før det tetter helt</td></tr>
<tr><td>Gurgling i rørene når vann tappes ut</td><td class="pr">Luft slipper ikke til — delvis blokkering et sted i strekket</td></tr>
<tr><td>Vond lukt fra sluk eller vask</td><td class="pr">Fett og organisk belegg i røret — rens, ikke overdøv</td></tr>
<tr><td>Tilbakeslag i kjeller eller første etasje</td><td class="pr">Fellesledningen er i ferd med å tette seg — ring, dette haster</td></tr>
<tr><td>Vann blir stående i garasjerennene</td><td class="pr">ACO-rennen er full — tøm og spyl før frosten</td></tr>
</table>

<h2>Områder vi dekker</h2>
<p>Kjerneområdet er <strong>Oslo og Akershus</strong> — der er vi ofte i nærheten allerede og kan som regel stille raskt: ${KOMMUNER.slice(0, 10).join(', ')} og resten av Akershus. Større oppdrag og faste avtaler tar vi i hele Sørøst-Norge, inkludert Østfold.</p>

<h2>Ofte stilte spørsmål om avløp og rørspyling</h2>
${FAQ.map(([q, a]) => '<details class="fq"><summary>' + q + '</summary><p>' + a + '</p></details>').join('')}

<div class="forf"><img src="/img/terje.webp" alt="Terje Gulliksen, daglig leder i Fasadetjenester AS">
<div><b>Terje Gulliksen</b><p>Daglig leder i Fasadetjenester AS. Terje er selv med på befaringene og har hendene på utstyret — rådene på denne siden kommer fra jobber vi faktisk har gjort. Fasadetjenester AS er en offentlig godkjent renholdsbedrift med base på Jessheim, og dekker Oslo, Akershus og store deler av Østlandet.</p></div></div>

<p style="margin:34px 0 0"><a class="btn" href="#befaring">Bestill gratis befaring</a>
<a class="btn bl" href="tel:${TLF}" style="margin-left:10px">Akutt? Ring ${TLF_VIS}</a></p>

</div>

<footer><div>© 2026 Fasadetjenester AS · Org.nr. 934 907 035 · <a href="tel:${TLF}">${TLF_VIS}</a> · <a href="mailto:${EPOST}">${EPOST}</a> · Mikalsrud 7A, 2069 Jessheim</div></footer>` }}/>
    <Script src="https://embed.typeform.com/next/embed.js" strategy="afterInteractive"/>
    <Script src="/js/tf.js" strategy="afterInteractive"/>
    <Script src="/js/hero-video.js" strategy="afterInteractive"/>
  </>)
}
