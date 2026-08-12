import Script from 'next/script'
import { LIVE, BASE, PRISER_GODKJENT, TLF, TLF_VIS, EPOST, TYPEFORM_URL, SKJEMA_ENDPOINT, SKJEMA_KOPI, KOMMUNER } from '../../lib/site'
import { KVM_PRISER, RIGG, EKSEMPLER, KVM_MIN, KVM_MAKS, VALUTA } from '../../lib/priser'
import { SIDE_CSS, SKJEMA_CSS } from '../../lib/css'

const TITTEL = 'Fasadevask for borettslag, sameier og næringsbygg | Fasadetjenester AS'
const BESKR = PRISER_GODKJENT
  ? 'Fasadevask koster typisk ' + KVM_MIN + '–' + KVM_MAKS + ' kr per m². Se pris per bygningstype, softwash vs. høytrykk, og hvor ofte fasaden bør vaskes. Gratis befaring i Oslo og Akershus.'
  : 'Fasadevask med softwash og høytrykk for borettslag, sameier og næringsbygg i Oslo og Akershus. Metode etter underlag, fast pris per tjeneste, gratis befaring.'

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

const rader = (r: { hva: string; pris: string; note: string }[]) =>
  r.map(x => '<tr><td><strong>' + x.hva + '</strong><br><span style="color:var(--steind);font-size:14.5px">' + x.note + '</span></td><td class="pr">' + x.pris + '</td></tr>').join('')

const eksempler = EKSEMPLER.map(e =>
  '<div class="exc"><h3>' + e.tittel + '</h3><ul>' +
  e.fakta.map(f => '<li>' + f + '</li>').join('') +
  '</ul><p class="sum">' + e.sum + '</p>' +
  (e.per ? '<p class="per">' + e.per + '</p>' : '') + '</div>').join('')

const FAQ = [
  ['Hva koster fasadevask?',
    PRISER_GODKJENT
      ? 'Fasadevask koster typisk ' + KVM_MIN + '–' + KVM_MAKS + ' kr per kvadratmeter fasadeflate. Et rekkehus på rundt 120 m² fasade ligger normalt på 4 000–7 500 kr, en boligblokk på 500 m² på 22 000–38 000 kr. Prisen drives av areal, høyde, tilkomst og hvor hardt fasaden er begrodd. Endelig pris settes etter en gratis befaring.'
      : 'Prisen avhenger av areal, høyde, fasadetype og tilkomst. Et konkret tall får du etter en gratis befaring — da ser vi samtidig om det er andre ting på bygget som bør tas i samme runde. For borettslag og sameier prises jobben per bygg eller som del av en årsavtale.'],
  ['Hvor ofte bør en fasade vaskes?',
    'De fleste fasader bør vaskes hvert 1.–2. år. Nordvendte vegger, fasader nær trafikkert vei og pussede overflater i skygge gror raskere til og kan trenge årlig vask. Er grønsken synlig fra gata, har den allerede sittet en stund.'],
  ['Er høytrykksvask skadelig for fasaden?',
    'Feil brukt, ja. Høyt trykk rett på puss, eldre tegl eller malt trekledning kan drive vann inn i konstruksjonen og blåse løs maling og fugemasse. Derfor vurderer vi alltid underlaget først, og velger softwash der fasaden ikke tåler trykk.'],
  ['Hva er softwash?',
    'Softwash er fasadevask med lavt trykk og et rengjøringsmiddel som løser opp alger, sopp og smuss kjemisk i stedet for mekanisk. Middelet får virke og skylles skånsomt av. Metoden dreper begroingen i roten, så fasaden holder seg ren lenger enn ved ren mekanisk vask.'],
  ['Hva koster fasadevask for et borettslag?',
    PRISER_GODKJENT
      ? 'Et borettslag med 20 enheter og rundt 600 m² fasade ligger normalt på 26 000–45 000 kr når fasadevask og takrenner tas i samme runde — omtrent 1 300–2 250 kr per enhet. Rigg- og kjørekostnaden deles mellom tjenestene, så samordning gir lavere pris per post.'
      : 'Borettslag prises per bygg eller som del av en årsavtale. Tar vi fasade, takrenner og vinduer i samme runde, deles rigg- og kjørekostnaden mellom tjenestene, og styret får ett samlet tilbud med fast pris per tjeneste.'],
  ['Når på året bør fasaden vaskes?',
    'Vår og tidlig sommer er høysesong — da tar du vinterens tilsmussing før pollensesongen. Men fasadevask kan utføres store deler av året så lenge det er frostfritt. Skal fasaden males, må den uansett vaskes først.'],
  ['Må beboerne være hjemme når fasaden vaskes?',
    'Nei. Vi trenger tilgang til vann og at vinduer er lukket. For borettslag varsler vi beboerne på forhånd, og styret trenger ikke stille med noen på vaskedagen.'],
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
      ...(PRISER_GODKJENT ? {
        offers: {
          '@type': 'Offer',
          priceCurrency: VALUTA,
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            priceCurrency: VALUTA,
            minPrice: KVM_MIN,
            maxPrice: KVM_MAKS,
            unitCode: 'MTK',
            unitText: 'kvadratmeter fasadeflate',
          },
          availability: 'https://schema.org/InStock',
        },
      } : {}),
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
    <style dangerouslySetInnerHTML={{ __html: SIDE_CSS + SKJEMA_CSS }}/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ld }}/>
    <div dangerouslySetInnerHTML={{ __html: `

<header><div class="hd"><a class="lg" href="/">Fasade<em>tjenester</em></a>
<nav class="anv"><a href="/">Forside</a><a href="/fasadevask">Fasadevask</a>${PRISER_GODKJENT ? '<a href="/fasadevask/pris">Priser</a>' : ''}<a href="/#tjenester">Tjenester</a><a href="/verdt-a-vite">Verdt å vite</a></nav>
<a class="btn" href="#befaring">Gratis befaring</a></div></header>

<div class="wrap">
<p class="crumb"><a href="/">Forside</a> / Fasadevask</p>
<p class="ey">Fasadevask</p>
<h1>Fasadevask for borettslag, sameier og næringsbygg</h1>
<p class="lede">Grønske på fasaden er ikke et kosmetisk problem — det er fukt som har fått feste, og fukt er det som bryter ned puss, maling og treverk. Vi vasker fasaden med metoden underlaget faktisk tåler, og ser samtidig over tak, takrenner og mur mens vi er der.</p>

<div class="meta"><span>Oslo, Akershus og hele Sørøst-Norge</span><span>·</span><span>Offentlig godkjent renholdsbedrift</span><span>·</span><span>Miljøfyrtårn-sertifisert</span></div>

<div class="svar"><b>Kort svar:</b> ${PRISER_GODKJENT
  ? 'Fasadevask koster typisk <strong>' + KVM_MIN + '–' + KVM_MAKS + ' kr per kvadratmeter</strong> fasadeflate. Et rekkehus på rundt 120 m² ligger normalt på 4 000–7 500 kr, en boligblokk på 500 m² på 22 000–38 000 kr, og et borettslag med 20 enheter på 26 000–45 000 kr — omtrent 1 300–2 250 kr per enhet. De fleste fasader bør vaskes hvert 1.–2. år. Metoden avgjøres av underlaget: softwash for puss, eldre tegl og malt kledning, høytrykk kun der overflaten tåler det.'
  : 'De fleste fasader bør vaskes hvert 1.–2. år. Pussede og nordvendte fasader gror raskest til og kan trenge årlig vask. Metoden avgjøres av underlaget: softwash for puss, eldre tegl og malt kledning — høytrykk kun der overflaten tåler det. Prisen avhenger av areal, høyde og tilkomst, og settes etter en gratis befaring.'}</div>
</div>

<div class="wrap">
<div class="sk" id="befaring">
<p class="ey" style="color:var(--hiviz)">Gratis befaring</p>
<h2>Få pris på fasaden</h2>
<p class="skl">Fyll ut, så ringer vi deg — som regel samme dag. Uforpliktende, og du velger selv om noe skal gjøres. Representerer du et styre, kan én befaring dekke hele vedlikeholdslista.</p>
<form class="skjema" data-endpoint="${SKJEMA_ENDPOINT}" data-typeform="${TYPEFORM_URL}" data-kopi="${SKJEMA_KOPI}" data-kilde="fasadevask" novalidate>
<div class="skg">
<div class="skf"><label for="f-navn">Navn</label><input id="f-navn" name="navn" type="text" autocomplete="name" placeholder="Ola Nordmann" required><span class="err">Fyll inn navn.</span></div>
<div class="skf"><label for="f-tlf">Telefon</label><input id="f-tlf" name="telefon" type="tel" inputmode="tel" autocomplete="tel" placeholder="912 34 567" required><span class="err">Åtte siffer, takk.</span></div>
<div class="skf"><label for="f-adr">Adresse eller postnummer</label><input id="f-adr" name="adresse" type="text" autocomplete="street-address" placeholder="Storgata 1, 0155 Oslo"></div>
<div class="skf"><label for="f-type">Hva slags bygg</label><select id="f-type" name="byggtype">
<option value="">Velg …</option><option>Borettslag</option><option>Sameie</option><option>Næringsbygg</option><option>Bygård</option><option>Enebolig eller rekkehus</option><option>Annet</option></select></div>
<div class="skf fu"><label for="f-melding">Hva gjelder det?</label><textarea id="f-melding" name="melding" placeholder="Beskriv gjerne problemet — du trenger ikke vite hva tjenesten heter."></textarea></div>
<input class="hp" type="text" name="firma" tabindex="-1" autocomplete="off" aria-hidden="true">
<input type="hidden" name="tjenester" value="">
<div class="skb"><button class="btn" type="submit">Bestill gratis befaring</button>
<small>Vi bruker opplysningene kun til å svare deg. <a href="/personvern" style="color:var(--hiviz)">Personvern</a></small></div>
</div>
</form>
<div class="skok"></div>
<p style="margin:20px 0 0;font-size:15px;color:rgba(255,255,255,.7)">Heller ringe? <a href="tel:${TLF}" style="color:var(--hiviz);font-weight:600">${TLF_VIS}</a> — vi har døgnvakt ved akutte behov.</p>
</div>
</div>

<div class="wrap">

${PRISER_GODKJENT ? `
<h2 id="pris">Hva koster fasadevask?</h2>
<p>Prisen settes per kvadratmeter fasadeflate, med tillegg for tilkomst. Under er nivåene vi normalt ligger på. Endelig pris får du etter en gratis befaring — da vet vi hva som faktisk står der.</p>
<table><tr><th>Metode</th><th>Pris</th></tr>${rader(KVM_PRISER)}</table>

<h3>Tilkomst og rigg</h3>
<table><tr><th>Post</th><th>Pris</th></tr>${rader(RIGG)}</table>

<h3>Tre regneeksempler</h3>
<div class="ex">${eksempler}</div>
<p style="font-size:15px;color:var(--steind);margin-top:18px">Alle beløp er eks. mva. og gjelder normal tilkomst. Priser oppdatert august 2026. <a href="/fasadevask/pris">Se full prisoversikt →</a></p>
` : `
<h2 id="pris">Hva koster fasadevask?</h2>
<p>Ærlig svar: det finnes ingen seriøs kvadratmeterpris å oppgi uten å ha sett bygget. Prisen drives av fire ting:</p>
<p><strong>Areal og høyde</strong> — antall etasjer avgjør om vi jobber fra bakken, lift eller stillas. <strong>Tilkomst</strong> — trange bakgårder og hindringer tar tid. <strong>Underlag og tilsmussing</strong> — softwash på hardt begrodd puss krever mer virketid enn en lett årlig vask. <strong>Samordning</strong> — tar vi vinduer, takrenner eller garasjen i samme runde, deler tjenestene rigg- og kjørekostnaden.</p>
<p>Det siste punktet er grunnen til at borettslag ofte kommer godt ut hos oss: én befaring kan dekke hele styrets vedlikeholdsliste, og et samlet tilbud med fast pris per tjeneste gjør at styret selv velger hva som tas nå og hva som venter.</p>
`}

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
    <Script src="/js/skjema.js" strategy="afterInteractive"/>
  </>)
}
