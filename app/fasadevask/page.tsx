import Script from 'next/script'
import { LIVE, BASE, TLF, TLF_VIS, EPOST, TYPEFORM_URL, KOMMUNER } from '../../lib/site'
import { SIDE_CSS, SKJEMA_CSS, HERO_CSS } from '../../lib/css'

const TITTEL = 'Fasadevask for borettslag, sameier og næringsbygg | Fasadetjenester AS'
const BESKR = 'Fasadevask med softwash og høytrykk for borettslag, sameier og næringsbygg i Oslo og Akershus. Metode etter underlag, fast pris per tjeneste, gratis befaring.'

export const metadata = {
  title: TITTEL,
  description: BESKR,
  robots: { index: LIVE, follow: LIVE },
  alternates: { canonical: '/fasadevask' },
  openGraph: {
    title: TITTEL, description: BESKR, url: '/fasadevask',
    siteName: 'Fasadetjenester AS', locale: 'nb_NO', type: 'website',
    images: [{ url: '/img/og.jpg', width: 1200, height: 630, alt: 'Fasadevask — Fasadetjenester AS' }],
  },
}


const FAQ = [
  ['Hva koster fasadevask?',
    'Prisen avhenger av areal, høyde, fasadetype og tilkomst. Et konkret tall får du etter en gratis befaring — da ser vi samtidig om det er andre ting på bygget som bør tas i samme runde. For borettslag og sameier prises jobben per bygg eller som del av en årsavtale.'],
  ['Hvor ofte bør en fasade vaskes?',
    'De fleste fasader bør vaskes hvert 1.–2. år. Nordvendte vegger, fasader nær trafikkert vei og pussede overflater i skygge gror raskere til og kan trenge årlig vask. Er grønsken synlig fra gata, har den allerede sittet en stund.'],
  ['Er høytrykksvask skadelig for fasaden?',
    'Feil brukt, ja. Høyt trykk rett på puss, eldre tegl eller malt trekledning kan drive vann inn i konstruksjonen og blåse løs maling og fugemasse. Derfor vurderer vi alltid underlaget først, og velger softwash der fasaden ikke tåler trykk.'],
  ['Hva er softwash?',
    'Softwash er fasadevask med lavt trykk og et rengjøringsmiddel som løser opp alger, sopp og smuss kjemisk i stedet for mekanisk. Middelet får virke og skylles skånsomt av. Metoden dreper begroingen i roten, så fasaden holder seg ren lenger enn ved ren mekanisk vask.'],
  ['Hva koster fasadevask for et borettslag?',
    'Borettslag prises per bygg eller som del av en årsavtale. Tar vi fasade, takrenner og vinduer i samme runde, deles rigg- og kjørekostnaden mellom tjenestene, og styret får ett samlet tilbud med fast pris per tjeneste.'],
  ['Når på året bør fasaden vaskes?',
    'Vår og tidlig sommer er høysesong — da tar du vinterens tilsmussing før pollensesongen. Men fasadevask kan utføres store deler av året så lenge det er frostfritt. Skal fasaden males, må den uansett vaskes først.'],
  ['Må beboerne være hjemme når fasaden vaskes?',
    'Nei. Vi trenger tilgang til vann og at vinduer er lukket. For borettslag varsler vi beboerne på forhånd, og styret trenger ikke stille med noen på vaskedagen.'],
  ['Tar dere takvask også?',
    'Ja. Takvask og mosefjerning gjøres gjerne i samme runde som fasadevasken — da deles rigg- og kjørekostnaden, og taket blir vurdert av de samme fagfolkene som står på bygget uansett. Metoden velges etter taktypen: skånsom mosefjerning med impregnering på sårbar takstein, høytrykk kun der taket tåler det.'],
  ['Hvilke områder dekker dere?',
    'Kjerneområdet er Oslo og Akershus, der vi som regel kan stille på befaring samme uke. Større oppdrag og faste avtaler tar vi i hele Sørøst-Norge, inkludert Innlandet, Østfold og Gjøvikregionen.'],
]

const ld = JSON.stringify({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': BASE + '/fasadevask#service',
      name: 'Fasadevask',
      serviceType: 'Fasadevask og utvendig rengjøring',
      description: 'Fasadevask med softwash eller høytrykk for borettslag, sameier og næringsbygg. Metoden velges etter underlaget.',
      provider: { '@id': BASE + '/#org' },
      areaServed: KOMMUNER.map(n => ({ '@type': 'City', name: n })),
      url: BASE + '/fasadevask',
    },
    {
      '@type': 'FAQPage',
      '@id': BASE + '/fasadevask#faq',
      mainEntity: FAQ.map(([q, a]) => ({
        '@type': 'Question', name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Forside', item: BASE + '/' },
        { '@type': 'ListItem', position: 2, name: 'Fasadevask' },
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
<nav class="anv"><a href="/">Forside</a><a href="/fasadevask">Fasadevask</a><a href="/fasadevask/pris">Pris</a><a href="/#tjenester">Tjenester</a><a href="/verdt-a-vite">Verdt å vite</a></nav>
<a class="btn" href="#befaring">Gratis befaring</a></div></header>

<section class="hero2"><div class="hbg2" style="background-image:url('/img/hero.webp')"></div>
<div class="hin2">
<p class="crumb"><a href="/">Forside</a> / Fasadevask</p>
<p class="ey">Fasadevask · Gratis befaring — ofte samme uke</p>
<h1>Fasadevask — nesten som nymalt, til en brøkdel av prisen.</h1>
<p class="hsub2">Grønske og svertesopp er fukt som har fått feste — og fukt er det som til slutt koster deg puss og maling. Vi fjerner det med metoden fasaden faktisk tåler, og du får fast pris etter en gratis befaring.</p>
<div class="hcta2"><a class="btn" href="${TYPEFORM_URL}" data-tf-open data-tf-kilde="fasadevask-hero">Bestill gratis befaring</a>
<a class="btn ghost" href="tel:${TLF}">Ring ${TLF_VIS}</a></div>
<ul class="htrust"><li>Gratis og uforpliktende befaring</li><li>Mesterbedrift</li><li>Miljøfyrtårn-sertifisert</li><li>Ett tilbud, én faktura</li></ul>
</div></section>

<div class="wrap">

<div class="svar"><b>Kort svar:</b> De fleste fasader bør vaskes hvert 1.–2. år. Pussede og nordvendte fasader gror raskest til og kan trenge årlig vask. Metoden avgjøres av underlaget: softwash for puss, eldre tegl og malt kledning — høytrykk kun der overflaten tåler det. Prisen avhenger av areal, høyde og tilkomst, og settes etter en gratis befaring.</div>
</div>

<div class="wrap">
<div class="sk" id="befaring">
<p class="ey" style="color:var(--hiviz)">Gratis befaring</p>
<h2>Få pris på fasaden</h2>
<p class="skl">Fyll ut, så ringer vi deg — som regel samme dag. Uforpliktende, og du velger selv om noe skal gjøres. Representerer du et styre, kan én befaring dekke hele vedlikeholdslista.</p>
<ul class="skpunkt"><li>Under to minutter</li><li>Uforpliktende</li><li>Vi ringer deg samme dag</li></ul>
<div class="skb"><a class="btn" href="${TYPEFORM_URL}" data-tf-open data-tf-kilde="fasadevask">Bestill gratis befaring</a>
<a class="btn bl" href="tel:${TLF}">Ring ${TLF_VIS}</a></div>
<p style="margin:20px 0 0;font-size:15px;color:rgba(255,255,255,.7)">Heller ringe? <a href="tel:${TLF}" style="color:var(--hiviz);font-weight:600">${TLF_VIS}</a> — vi har døgnvakt ved akutte behov.</p>
</div>
</div>

<div class="wrap">


<h2 id="pris">Hva koster fasadevask?</h2>
<p>Ærlig svar: det finnes ingen seriøs kvadratmeterpris å oppgi uten å ha sett bygget. Prisen drives av fire ting:</p>
<p><strong>Areal og høyde</strong> — antall etasjer avgjør om vi jobber fra bakken, lift eller stillas. <strong>Tilkomst</strong> — trange bakgårder og hindringer tar tid. <strong>Underlag og tilsmussing</strong> — softwash på hardt begrodd puss krever mer virketid enn en lett årlig vask. <strong>Samordning</strong> — tar vi vinduer, takrenner eller garasjen i samme runde, deler tjenestene rigg- og kjørekostnaden.</p>
<p>Det siste punktet er grunnen til at borettslag ofte kommer godt ut hos oss: én befaring kan dekke hele styrets vedlikeholdsliste, og et samlet tilbud med fast pris per tjeneste gjør at styret selv velger hva som tas nå og hva som venter.</p>
<p style="margin-top:22px"><a class="btn bl" href="/fasadevask/pris">Se hva fasadevask koster i markedet →</a></p>


<h2>Softwash eller høytrykksvask? Underlaget bestemmer.</h2>
<p>Det vanligste spørsmålet vi får på befaring — og det viktigste. Feil metode på feil underlag gjør mer skade enn skitten gjorde.</p>
<table>
<tr><th>Metode</th><th>Slik virker den</th><th>Passer for</th></tr>
<tr><td><strong>Softwash</strong></td><td>Lavt trykk og et middel som løser opp alger og sopp kjemisk. Middelet virker og skylles skånsomt av. Dreper begroingen i roten, ikke bare det synlige laget.</td><td>Pusset fasade, eldre tegl, malt trekledning, plater — alt som ikke tåler trykk.</td></tr>
<tr><td><strong>Høytrykksvask</strong></td><td>Mekanisk rengjøring med vann under trykk, ofte med varme. Raskt og effektivt på robuste flater.</td><td>Betong, stein, nyere murflater, garasjeanlegg og dekker.</td></tr>
</table>
<p>Vi vurderer underlaget først og velger metode etter det — ikke etter hva som er raskest for oss. Før vi velger metode sjekker vi også eiendommens vernestatus, slik at verneverdige fasader behandles riktig fra første vask.</p>

<figure><div class="bagrid">
<img src="/img/ba_fas_for.webp" alt="Fasadeplater med grønske og algebelegg før fasadevask" loading="lazy">
<img src="/img/ba_fas_etter.webp" alt="Samme fasade under vask — tydelig skille mellom vasket og uvasket flate" loading="lazy">
</div><figcaption>Fra et av våre oppdrag i Moss: samme fasade, før og underveis i vasken. Skillet midt på platen viser hva som faktisk sitter der.</figcaption></figure>

<h2>Hvor ofte bør fasaden vaskes?</h2>
<table>
<tr><th>Fasade / forhold</th><th>Anbefalt intervall</th></tr>
<tr><td>Pusset fasade i skygge eller mot nord</td><td class="pr">Hvert år</td></tr>
<tr><td>Fasade nær trafikkert vei</td><td class="pr">Hvert år</td></tr>
<tr><td>Malt trekledning</td><td class="pr">Hvert 1.–2. år</td></tr>
<tr><td>Tegl og betong i åpent lende</td><td class="pr">Hvert 2.–3. år</td></tr>
</table>
<p>Tommelfingerregelen: er grønsken synlig fra gata, har den allerede sittet en stund. Nordvendte og skyggefulle vegger gror først — sjekk dem, ikke solveggen.</p>

<h2 id="borettslag">For borettslag og sameier</h2>
<p>De fleste styrer vi jobber med har samme utfordring: vedlikehold skjer når noen tilfeldigvis husker det. Vår anbefaling er å legge fasadevasken inn i en fast syklus — vi jobber etter et årshjul der fasadevask hører våren til, takrennerens høsten og issikring vinteren. Med en avtale tar vi kontakt før hver sesong, og styret slipper å administrere fire leverandører og fire fakturaer.</p>
<p><strong>Papirene tar vi før vi rigger.</strong> Dokumentert HMS på hvert oppdrag, og vi kjenner byggherrens påseplikt — dere slipper å etterspørre dokumentasjonen. Arbeidsvarsling, leie av gategrunn og øvrige søknader, blant annet mot Bymiljøetaten i Oslo, håndterer vi før arbeidet starter.</p>
<p><strong>Praktisk på vaskedagen:</strong> beboerne varsles på forhånd, vinduer skal være lukket, og ingen trenger å være hjemme.</p>
<ul class="chips"><li>Fasadevask</li><li>Vindusvask</li><li>Grafittifjerning</li><li>Takrennerens</li><li>Takvask</li><li>Murreparasjon</li><li>Fasademaling</li><li>Istappfjerning</li></ul>

<h2 id="takvask">Takvask — ta taket i samme runde</h2>
<p>Mose og alger trives enda bedre på taket enn på fasaden. Mosen holder på fukt, løfter takstein i frostperioder og forkorter takets levetid — et tak som ikke vedlikeholdes, må ofte legges om år før det ellers hadde vært nødvendig. Vi utfører <strong>takvask</strong> med samme metodevalg som på fasaden: skånsom mosefjerning og impregnering der taket er sårbart, høytrykk kun der taksteinen tåler det.</p>
<p>Siden vi allerede står med rigg, lift og vann på stedet, er takvask sammen med fasadevasken som regel vesentlig rimeligere enn som egen jobb — rigg- og kjørekostnaden deles mellom tjenestene. Be om pris på begge deler i samme befaring.</p>

<h2>Områder vi dekker</h2>
<p>Kjerneområdet er <strong>Oslo og Akershus</strong> — der er vi ofte i nærheten allerede og kan som regel stille på befaring samme uke: ${KOMMUNER.slice(0, 10).join(', ')} og resten av Akershus. Større oppdrag og faste avtaler tar vi i hele Sørøst-Norge, inkludert Innlandet, Østfold, Gjøvikregionen og ned mot Sørlandet.</p>

<h2>Ofte stilte spørsmål om fasadevask</h2>
${FAQ.map(([q, a]) => '<details class="fq"><summary>' + q + '</summary><p>' + a + '</p></details>').join('')}

<div class="forf"><img src="/img/terje.webp" alt="Terje Gulliksen, daglig leder i Fasadetjenester AS">
<div><b>Terje Gulliksen</b><p>Daglig leder i Fasadetjenester AS. Terje er selv med på befaringene og har hendene på utstyret — rådene på denne siden kommer fra jobber vi faktisk har gjort. Fasadetjenester AS er en offentlig godkjent renholdsbedrift med base på Jessheim, og dekker Oslo, Akershus og store deler av Østlandet.</p></div></div>

<p style="margin:34px 0 0"><a class="btn" href="#befaring">Bestill gratis befaring</a>
<a class="btn bl" href="/verdt-a-vite/fasadevask" style="margin-left:10px">Les fagartikkelen om fasadevask</a></p>

</div>

<footer><div>© 2026 Fasadetjenester AS · Org.nr. 934 907 035 · <a href="tel:${TLF}">${TLF_VIS}</a> · <a href="mailto:${EPOST}">${EPOST}</a> · Mikalsrud 7A, 2069 Jessheim</div></footer>` }}/>
    <Script src="https://embed.typeform.com/next/embed.js" strategy="afterInteractive"/>
    <Script src="/js/tf.js" strategy="afterInteractive"/>
  </>)
}
