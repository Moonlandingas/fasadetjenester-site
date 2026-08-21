import Script from 'next/script'
import { LIVE, BASE, TLF, TLF_VIS, EPOST, TYPEFORM_URL } from '../../../lib/site'
import { MARKED_KVM, MARKED_BYGG, MARKED_POSTER, KILDER, KALK, HENTET } from '../../../lib/priser'
import { SIDE_CSS, SKJEMA_CSS, HERO_CSS } from '../../../lib/css'

const TITTEL = 'Fasadevask pris: hva koster det i 2026? | Fasadetjenester AS'
const BESKR = 'Fasadevask koster typisk 15–60 kr per m² i Norge. Se markedspriser per metode og bygningstype, hva som driver prisen, og hvordan du leser et tilbud — skrevet av fagfolk som gjør jobben.'

export const metadata = {
  title: TITTEL,
  description: BESKR,
  robots: { index: LIVE, follow: LIVE },
  alternates: { canonical: '/fasadevask/pris' },
  openGraph: {
    title: TITTEL, description: BESKR, url: '/fasadevask/pris',
    siteName: 'Fasadetjenester AS', locale: 'nb_NO', type: 'article',
    images: [{ url: '/img/og.jpg', width: 1200, height: 630, alt: 'Fasadevask pris — Fasadetjenester AS' }],
  },
}

type Rad = { hva: string; pris: string; note: string; kilde: keyof typeof KILDER }
const tabell = (rader: Rad[]) => rader.map(r => {
  const k = KILDER[r.kilde]
  return '<tr><td><strong>' + r.hva + '</strong><br><span style="color:var(--steind);font-size:14.5px">' + r.note +
    '</span></td><td class="pr">' + r.pris +
    '<br><a href="' + k.url + '" rel="nofollow noopener" target="_blank" style="font-family:var(--b);font-size:12.5px;font-weight:400">' + k.navn + ' ↗</a></td></tr>'
}).join('')

const FAQ: [string, string][] = [
  ['Hva koster fasadevask per kvadratmeter?',
    'Fasadevask koster typisk 15–60 kr per kvadratmeter fasadeflate i Norge. Enkel vask med lavt trykk ligger på 15–30 kr/m², vask med algebehandling på 25–45 kr/m², og full behandling med mosefjerning og impregnering på 35–60 kr/m². Enkelte aktører oppgir opptil 150 kr/m² for krevende tilkomst og verneverdige fasader.'],
  ['Hva koster fasadevask av en enebolig?',
    'En enebolig ligger normalt mellom 5 000 og 25 000 kr. Publiserte regneeksempler viser rundt 3 800 kr for et rekkehus på 80 m² fasade, ca. 5 000 kr for 100 m², og ca. 12 300 kr for en enebolig med 180 m² fasade. Høyde og tilkomst betyr mer for prisen enn arealet alene.'],
  ['Hva koster fasadevask for et borettslag?',
    'Et borettslag med 20 enheter og rundt 600 m² fasade ligger normalt på 15 000–45 000 kr — omtrent 1 000–3 000 kr per enhet. En boligblokk i fire etasjer med 500 m² fasade oppgis til 25 000–40 000 kr inkludert lift.'],
  ['Hva koster fasadevask av et næringsbygg?',
    'Et kontorbygg i åtte etasjer med rundt 2 000 m² fasade oppgis i markedet til 100 000–200 000 kr. Her utgjør sikring, tilkomst og arbeidsvarsling en større andel av totalen enn selve vasken.'],
  ['Hvorfor blir små jobber dyre per kvadratmeter?',
    'Fordi rigg, transport og lift koster det samme uansett hvor stor flaten er. En lift til 4 000 kr fordelt på 80 m² blir 50 kr/m² i seg selv; fordelt på 600 m² blir den under 7 kr/m². Det er derfor kvadratmeterprisen faller kraftig med størrelsen på jobben.'],
  ['Hva bør et tilbud på fasadevask inneholde?',
    'Metode og begrunnelse for valget, hvilke flater som inngår, hvordan tilkomsten løses, hvem som dekker vann og strøm, hvordan avrenning håndteres, tidsrom for arbeidet, og hva som skjer hvis det dukker opp skader under vasken. Mangler tilkomsten i tilbudet, er det der overraskelsen som regel kommer.'],
  ['Kommer mva. i tillegg?',
    'Prisene som oppgis offentlig i markedet er normalt eks. mva. For privatpersoner kommer 25 % mva. i tillegg. Sjekk alltid hva tilbudet du får er oppgitt med.'],
  ['Lønner det seg å ta flere tjenester samtidig?',
    'Ja. Rigg, transport og lift er faste kostnader per oppmøte. Tas takrenner, vinduer eller garasjeanlegg i samme runde, fordeles den kostnaden på flere tjenester i stedet for å påløpe hver gang.'],
  ['Hva koster fasadevask hos Fasadetjenester?',
    'Vi oppgir ikke faste priser på nett, fordi prisen avhenger av hva som faktisk står der: areal, høyde, tilkomst, underlag og hvor hardt fasaden er begrodd. Du får fast pris per tjeneste etter en gratis og uforpliktende befaring.'],
]

const ld = JSON.stringify({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': BASE + '/fasadevask/pris#article',
      headline: 'Fasadevask pris: hva koster det i 2026?',
      description: BESKR,
      inLanguage: 'nb-NO',
      datePublished: '2026-08-12',
      dateModified: '2026-08-12',
      author: { '@type': 'Person', name: 'Terje Gulliksen', jobTitle: 'Daglig leder', worksFor: { '@id': BASE + '/#org' } },
      publisher: { '@id': BASE + '/#org' },
      mainEntityOfPage: BASE + '/fasadevask/pris',
      about: { '@id': BASE + '/fasadevask#service' },
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

const KALK_DATA = JSON.stringify(KALK)

export default function Page() {
  return (<>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
    <style dangerouslySetInnerHTML={{ __html: SIDE_CSS + SKJEMA_CSS + HERO_CSS + `
.kalk{background:var(--puss);border:1px solid var(--puss2);border-radius:20px;padding:30px;margin:30px 0}
.kalk h3{margin:0 0 6px;font-size:22px}
.kalkl{font-size:15px;color:var(--steind);margin:0 0 22px;max-width:52ch}
.kalkg{display:grid;grid-template-columns:1fr 1fr;gap:16px}
.kalkf{display:flex;flex-direction:column;gap:6px}.kalkf.fu{grid-column:1/-1}
.kalkf label{font-size:12.5px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:var(--steind)}
.kalkf input,.kalkf select{font-family:var(--b);font-size:16px;padding:12px 13px;border:1px solid var(--puss2);border-radius:11px;background:var(--paper);color:var(--ink);width:100%}
.kalkf input:focus,.kalkf select:focus{outline:2px solid var(--navy);outline-offset:-1px}
.kalkut{grid-column:1/-1;background:var(--ink);color:#fff;border-radius:14px;padding:22px 24px;margin-top:6px}
.kalkut .kt{font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--hiviz);margin:0 0 8px}
.kalkut .kv{font-family:var(--d);font-size:clamp(26px,4vw,36px);font-weight:600;letter-spacing:-.03em;line-height:1.1}
.kalkut .kn{font-size:13.5px;color:rgba(255,255,255,.66);margin:10px 0 0}
@media(max-width:640px){.kalkg{grid-template-columns:1fr}.kalk{padding:22px}}
.kildeboks{background:var(--puss);border-left:4px solid var(--navy);border-radius:0 12px 12px 0;padding:18px 22px;margin:26px 0;font-size:15px}
.kildeboks ul{margin:8px 0 0;padding-left:20px}.kildeboks li{margin-bottom:4px}
` }}/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ld }}/>
    <div dangerouslySetInnerHTML={{ __html: `

<header><div class="hd"><a class="lg" href="/">Fasade<em>tjenester</em></a>
<nav class="anv"><a href="/">Forside</a><a href="/fasadevask">Fasadevask</a><a href="/fasadevask/pris">Pris</a><a href="/#tjenester">Tjenester</a><a href="/verdt-a-vite">Verdt å vite</a></nav>
<a class="btn" href="#befaring">Gratis befaring</a></div></header>

<section class="hero2"><div class="hbg2" style="background-image:url('/img/hero.webp')"></div>
<div class="hin2">
<p class="crumb"><a href="/">Forside</a> / <a href="/fasadevask">Fasadevask</a> / Pris</p>
<p class="ey">Prisguide · sist gjennomgått ${HENTET}</p>
<h1>Hva koster fasadevask? Her er tallene.</h1>
<div class="hstats">
<div class="hstat"><b>15–60 kr/m²</b><span>markedspris per kvadratmeter</span></div>
<div class="hstat"><b>5 000–25 000 kr</b><span>enebolig</span></div>
<div class="hstat"><b>1 000–3 000 kr</b><span>per enhet i borettslag</span></div>
</div>
<p class="hsub2">De fleste svarer «pris etter befaring» og stopper der. Vi viser deg markedstallene med kilder — så vet du hva du går til før vi kommer ut.</p>
<div class="hcta2"><a class="btn" href="${TYPEFORM_URL}" data-tf-open data-tf-kilde="pris-hero">Bestill gratis befaring</a>
<a class="btn ghost" href="#kalkulator">Prøv kalkulatoren</a></div>
<p style="margin:18px 0 0;font-size:14.5px;color:rgba(255,255,255,.75)">Befaringen er gratis og uforpliktende — du får fast pris per tjeneste, og velger selv om noe skal gjøres.</p>
</div></section>

<div class="wrap">

<div class="svar"><b>Kort svar:</b> Fasadevask koster typisk <strong>15–60 kr per kvadratmeter</strong> fasadeflate i Norge. Enkel vask ligger på 15–30 kr/m², vask med algebehandling på 25–45 kr/m², og full behandling med mosefjerning og impregnering på 35–60 kr/m². En enebolig havner normalt på <strong>5 000–25 000 kr</strong>, en boligblokk på 500 m² på <strong>25 000–40 000 kr</strong>, og et borettslag med 20 enheter på <strong>1 000–3 000 kr per enhet</strong>. Tilkomst påvirker totalen mer enn arealet alene.</div>

<p class="lede">Dette er en gjennomgang av hva fasadevask faktisk koster i det norske markedet, med kilder på hvert tall. Vi skriver den fordi vi blir spurt om det på hver eneste befaring — og fordi de fleste svarene som finnes på nett er enten reklame eller «pris etter befaring» uten noe mer.</p>

<div class="meta"><span>Av <strong>Terje Gulliksen</strong>, daglig leder</span><span>·</span><span>Sist gjennomgått ${HENTET}</span><span>·</span><span>Alle beløp eks. mva.</span></div>

<div class="kildeboks"><strong>Om tallene på denne siden.</strong> Alle prisene er hentet fra offentlig publiserte norske kilder, oppgitt med lenke ved hver rad. Det er markedspriser, ikke våre egne satser — vi priser hver jobb etter befaring, fordi tilkomst og underlag varierer for mye til at en fast kvadratmeterpris ville vært ærlig. Kilder brukt:
<ul>
<li><a href="${KILDER.opg.url}" rel="nofollow noopener" target="_blank">${KILDER.opg.navn}</a></li>
<li><a href="${KILDER.rh.url}" rel="nofollow noopener" target="_blank">${KILDER.rh.navn}</a></li>
<li><a href="${KILDER.vs.url}" rel="nofollow noopener" target="_blank">${KILDER.vs.navn}</a></li>
</ul></div>

<h2 id="kvm">Pris per kvadratmeter</h2>
<p>Grunnprisen settes vanligvis per kvadratmeter fasadeflate, og spennet skyldes først og fremst hvilken behandling flaten trenger.</p>
<table><tr><th>Behandling</th><th>Markedspris</th></tr>${tabell(MARKED_KVM)}</table>

<h2 id="bygg">Pris per bygningstype</h2>
<p>Kvadratmeterpris sier lite alene. Dette er totalprisene som oppgis for faktiske bygg.</p>
<table><tr><th>Bygg</th><th>Markedspris</th></tr>${tabell(MARKED_BYGG)}</table>

<h2 id="kalkulator">Regn ut et grovt anslag</h2>
<div class="kalk">
<h3>Prisanslag basert på markedstall</h3>
<p class="kalkl">Bruker spennene fra kildene over. Dette er et størrelsesorden-anslag for det norske markedet — ikke et tilbud fra oss.</p>
<div class="kalkg">
<div class="kalkf"><label for="k-areal">Fasadeflate (m²)</label><input id="k-areal" type="number" min="10" max="10000" step="10" value="180" inputmode="numeric"></div>
<div class="kalkf"><label for="k-metode">Behandling</label><select id="k-metode">${KALK.metode.map(m => '<option value="' + m.id + '">' + m.navn + '</option>').join('')}</select></div>
<div class="kalkf fu"><label for="k-tilkomst">Tilkomst</label><select id="k-tilkomst">${KALK.tilkomst.map(t => '<option value="' + t.id + '">' + t.navn + '</option>').join('')}</select></div>
<div class="kalkut"><p class="kt">Anslag, markedsnivå</p><div class="kv" id="k-sum">—</div>
<p class="kn" id="k-note">Eks. mva. Inkluderer rigg og tilkomst. Faktisk pris avhenger av underlag, tilsmussing og hvor lett bygget er å komme til.</p></div>
</div>
</div>

<h2 id="poster">Hva regningen består av</h2>
<p>Et tilbud er sjelden én sum. Slik fordeler kostnadene seg normalt:</p>
<table><tr><th>Post</th><th>Markedspris</th></tr>${tabell(MARKED_POSTER)}</table>

<h2 id="drivere">Hvorfor to like store fasader kan koste helt ulikt</h2>
<p>Dette er den delen prisguider flest hopper over, og den som faktisk avgjør hva du betaler.</p>

<h3>Tilkomsten, ikke arealet</h3>
<p>Rigg, transport og lift koster det samme uansett hvor stor flaten er. En lift til 4 000 kr fordelt på 80 m² blir 50 kr/m² i seg selv. Den samme liften fordelt på 600 m² blir under 7 kr/m². Det er derfor kvadratmeterprisen faller kraftig med størrelsen på jobben — og hvorfor små jobber virker urimelig dyre målt per meter.</p>

<h3>Trange bakgårder koster mer enn høye vegger</h3>
<p>En rett vegg i fire etasjer med plass til lift foran er ofte enklere enn en toetasjes bakgård med parkerte biler, beplantning og en port som er for smal. Tid går med til å komme til, ikke til å vaske.</p>

<h3>Underlaget bestemmer metoden, og metoden bestemmer prisen</h3>
<p>Pusset fasade, eldre tegl og malt trekledning tåler ikke høyt trykk — der må det softwash, med middel som får virke og skylles skånsomt av. Det tar lengre tid enn å spyle betong. Er fasaden hardt begrodd, kreves ofte to runder.</p>

<h3>Fortau, varsling og søknader</h3>
<p>Skal arbeidet foregå mot fortau eller gate, kommer arbeidsvarsling og eventuell leie av gategrunn i tillegg — i Oslo håndteres det mot Bymiljøetaten. På sentrumsbygg er dette en reell post, og den mangler ofte i tilbud som ser billige ut.</p>

<h3>Vernestatus</h3>
<p>Er eiendommen verneverdig, må metode og middel vurderes særskilt, og noen ganger avklares med antikvariske myndigheter. Det påvirker både pris og fremdrift, og bør avklares før tilbudet gis — ikke etter.</p>

<h2 id="tilbud">Slik leser du et tilbud</h2>
<p>Får du inn flere tilbud, er det sjelden kvadratmeterprisen som skiller dem. Sjekk disse punktene, så sammenligner du epler med epler:</p>
<ul>
<li><strong>Hvilke flater inngår?</strong> Er gesims, rekkverk, balkongfronter og garasjenedkjørsel med, eller bare hovedveggene?</li>
<li><strong>Hvordan løses tilkomsten,</strong> og er den priset inn eller oppgitt som «kommer i tillegg»?</li>
<li><strong>Hvilken metode,</strong> og hvorfor akkurat den for ditt underlag?</li>
<li><strong>Hvem dekker vann og strøm,</strong> og er det avklart med byggets tekniske anlegg?</li>
<li><strong>Hvordan håndteres avrenning</strong> av vaskevann, og er det tatt hensyn til beplantning?</li>
<li><strong>Hva skjer hvis det oppdages skader</strong> under vasken — løs puss, råte, sprukne fuger?</li>
<li><strong>Er HMS-dokumentasjonen med</strong> uoppfordret? Som byggherre har dere påseplikt.</li>
<li><strong>Er prisen fast eller et estimat,</strong> og er den oppgitt med eller uten mva.?</li>
</ul>
<p>Et tilbud som mangler tilkomst og metodevalg er ikke billigere — det er bare mindre ferdig.</p>

<h2 id="naar">Når på året lønner det seg?</h2>
<p>Vår og tidlig sommer er høysesong, og da er kapasiteten mest presset. Sen sommer og tidlig høst gir ofte bedre tilgjengelighet på både folk og lift, så lenge det er frostfritt. Skal fasaden males, må den uansett vaskes først — og da bør begge deler planlegges i samme sesong.</p>

<h2>Ofte stilte spørsmål om pris</h2>
${FAQ.map(([q, a]) => '<details class="fq"><summary>' + q + '</summary><p>' + a + '</p></details>').join('')}

<div class="sk" id="befaring">
<p class="ey" style="color:var(--hiviz)">Gratis befaring</p>
<h2 style="margin-top:0">Få fast pris på ditt bygg</h2>
<p class="skl">Tallene over er markedsnivå. Vil du vite hva akkurat ditt bygg koster, kommer vi ut og ser på det — gratis og uforpliktende, og du får fast pris per tjeneste.</p>
<ul class="skpunkt"><li>Under to minutter</li><li>Uforpliktende</li><li>Vi ringer deg samme dag</li></ul>
<div class="skb"><a class="btn" href="${TYPEFORM_URL}" data-tf-open data-tf-kilde="fasadevask-pris">Bestill gratis befaring</a>
<a class="btn bl" href="tel:${TLF}">Ring ${TLF_VIS}</a></div>
<p style="margin:20px 0 0;font-size:15px;color:rgba(255,255,255,.7)">Heller ringe? <a href="tel:${TLF}" style="color:var(--hiviz);font-weight:600">${TLF_VIS}</a></p>
</div>

<div class="forf"><img src="/img/terje.webp" alt="Terje Gulliksen, daglig leder i Fasadetjenester AS">
<div><b>Terje Gulliksen</b><p>Daglig leder i Fasadetjenester AS. Terje er selv med på befaringene og setter prisen der. Vurderingene på denne siden kommer fra jobber vi faktisk har gjort — tallene er markedstall med kilde, ikke våre satser.</p></div></div>

<p style="margin:30px 0 0"><a class="btn bl" href="/fasadevask">← Alt om fasadevask</a></p>

</div>

<footer><div>© 2026 Fasadetjenester AS · Org.nr. 934 907 035 · <a href="tel:${TLF}">${TLF_VIS}</a> · <a href="mailto:${EPOST}">${EPOST}</a> · Mikalsrud 7A, 2069 Jessheim</div></footer>` }}/>
    <Script id="kalk" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `
(function(){var D=${KALK_DATA};
function nok(n){return Math.round(n/100)*100;}
function fmt(n){return nok(n).toLocaleString('nb-NO');}
function regn(){
  var a=parseFloat(document.getElementById('k-areal').value)||0;
  var m=D.metode.filter(function(x){return x.id===document.getElementById('k-metode').value;})[0];
  var t=D.tilkomst.filter(function(x){return x.id===document.getElementById('k-tilkomst').value;})[0];
  var ut=document.getElementById('k-sum');
  if(!a||a<10){ut.textContent='—';return;}
  var lo=a*m.min+t.min, hi=a*m.maks+t.maks;
  ut.textContent=fmt(lo)+'–'+fmt(hi)+' kr';
  var per=document.getElementById('k-note');
  per.textContent='Tilsvarer ca. '+Math.round(lo/a)+'–'+Math.round(hi/a)+' kr/m². Eks. mva., rigg og tilkomst inkludert. Faktisk pris avhenger av underlag, tilsmussing og hvor lett bygget er å komme til.';
}
['k-areal','k-metode','k-tilkomst'].forEach(function(id){
  var e=document.getElementById(id); if(e){e.addEventListener('input',regn);e.addEventListener('change',regn);}
});
regn();})();
` }}/>
    <Script src="https://embed.typeform.com/next/embed.js" strategy="afterInteractive"/>
    <Script src="/js/tf.js" strategy="afterInteractive"/>
  </>)
}
