import Script from 'next/script'
import { LIVE } from '../../../lib/site'
export const metadata = {
  title: "Istapper og takras: styrets ansvar i praksis | Fasadetjenester AS",
  description: "Hvem har ansvaret for istapper og takras i borettslag og sameier? Hva politivedtektene krever, hvorfor varselskilt alene ikke holder, og hva en beredskapsavtale bør inneholde.",
  robots: { index: LIVE, follow: LIVE },
  alternates: { canonical: '/verdt-a-vite/istapper' },
  openGraph: {
    title: "Istapper og takras: styrets ansvar i praksis | Fasadetjenester AS",
    description: "Hvem har ansvaret for istapper og takras i borettslag og sameier? Hva politivedtektene krever, hvorfor varselskilt alene ikke holder, og hva en beredskapsavtale bør inneholde.",
    url: '/verdt-a-vite/istapper',
    siteName: 'Fasadetjenester AS',
    locale: 'nb_NO',
    type: 'website',
    images: [{ url: '/img/og.jpg', width: 1200, height: 630, alt: 'Fasadetjenester AS — fasadevask og utvendig vedlikehold' }],
  },
}
export default function Page() {
  return (<>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com"  crossOrigin="anonymous"/>
    <style dangerouslySetInnerHTML={{__html: `
:root{--ink:#0E1826;--navy:#1E3A63;--hiviz:#D8EC3C;--puss:#ECEDE9;--puss2:#DEE0DB;--paper:#fff;--steind:#59606B;
--d:"Bricolage Grotesque",system-ui,sans-serif;--b:"Inter Tight",system-ui,sans-serif}
*{box-sizing:border-box}
body{margin:0;background:var(--paper);color:var(--ink);font-family:var(--b);font-size:17.5px;line-height:1.7;-webkit-font-smoothing:antialiased}
img{max-width:100%;display:block;border-radius:16px}
a{color:var(--navy)}
h1,h2,h3{font-family:var(--d);font-weight:600;letter-spacing:-.02em;line-height:1.12}
h1{font-size:clamp(32px,5vw,52px);margin:.4em 0 .5em}
h2{font-size:clamp(24px,3.2vw,33px);margin:2.2em 0 .6em}
.wrap{max-width:720px;margin:0 auto;padding:0 24px}
header{background:var(--ink);color:#fff;padding:18px 0}
.hd{display:flex;justify-content:space-between;align-items:center;max-width:1160px;margin:0 auto;padding:0 24px}
.lg{font-family:var(--d);font-weight:700;font-size:19px;text-decoration:none;color:#fff}.lg em{font-style:normal;color:var(--hiviz)}
.btn{display:inline-flex;align-items:center;gap:.5em;font-weight:600;font-size:15px;padding:13px 26px;border-radius:100px;text-decoration:none;background:var(--hiviz);color:#161D06}
.anv{display:flex;gap:20px;margin-left:auto;margin-right:22px;font-size:14.5px;font-weight:500}
.anv a{color:#fff;text-decoration:none;opacity:.85}.anv a:hover{color:var(--hiviz);opacity:1}
@media(max-width:760px){.anv{display:none}}
.crumb{font-size:13.5px;color:var(--steind);margin-top:34px}.crumb a{color:inherit}
.ey{font-size:11.5px;font-weight:600;letter-spacing:.19em;text-transform:uppercase;color:var(--navy)}
.lede{font-size:20px;color:var(--steind)}
.svar{background:var(--puss);border-left:4px solid var(--hiviz);border-radius:14px;padding:22px 26px;margin:30px 0;font-size:17px}
.svar b{font-family:var(--d)}
.meta{display:flex;gap:12px;align-items:center;margin:26px 0 34px;padding:14px 0;border-top:1px solid var(--puss2);border-bottom:1px solid var(--puss2);font-size:14px;color:var(--steind)}
table{width:100%;border-collapse:collapse;margin:22px 0;font-size:15.5px}
th,td{text-align:left;padding:12px 14px;border-bottom:1px solid var(--puss2);vertical-align:top}
th{font-family:var(--d);font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:var(--steind)}
.fq{border-bottom:1px solid var(--puss2)}
.fq summary{font-family:var(--d);font-weight:600;font-size:18px;padding:18px 0;cursor:pointer;list-style:none;position:relative;padding-right:34px}
.fq summary::after{content:"+";position:absolute;right:4px;top:14px;font-size:24px;color:var(--navy)}
.fq[open] summary::after{content:"–"}
.fq p{margin:0 0 20px;color:var(--steind)}
.forf{display:grid;grid-template-columns:120px 1fr;gap:22px;align-items:center;background:var(--puss);border-radius:18px;padding:26px;margin:48px 0}
.forf img{border-radius:50%;aspect-ratio:1;object-fit:cover;object-position:top}
.forf p{margin:0;font-size:15px;color:var(--steind)}
.forf b{font-family:var(--d);font-size:17px;color:var(--ink);display:block;margin-bottom:4px}
.cta{background:var(--ink);color:#fff;border-radius:20px;padding:40px;margin:54px 0;text-align:center}
.cta h2{margin:0 0 10px}.cta p{color:rgba(255,255,255,.75);margin:0 0 22px}
.utkast{background:#FFF4D6;border:1px solid #E8D48A;border-radius:8px;padding:14px 18px;font-size:14px;color:#6b5a1e;margin:26px 0}
.jur{border:1px solid var(--puss2);border-radius:14px;padding:18px 22px;margin:30px 0;font-size:14.5px;color:var(--steind)}
figure{margin:34px 0}figcaption{font-size:13.5px;color:var(--steind);margin-top:8px}
.les{background:var(--puss);border-radius:14px;padding:20px 24px;margin:34px 0;font-size:15.5px}
.les b{font-family:var(--d);display:block;margin-bottom:4px}
footer{background:var(--ink);color:#98A2B0;padding:34px 0;margin-top:70px;font-size:14px;text-align:center}
@media(max-width:640px){.forf{grid-template-columns:1fr}.forf img{width:96px}}
`}}/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: `{"@context":"https://schema.org","@graph":[
{"@type":"Article","@id":"https://fasadetjenester.no/verdt-a-vite/istapper/#article",
"headline":"Istapper og takras: styrets ansvar — og hva det betyr i praksis",
"description":"Hvem har ansvaret for istapper og takras i borettslag og sameier, hva politivedtektene krever, og hvorfor varselskilt alene ikke er nok.",
"inLanguage":"nb-NO","datePublished":"2026-08-10","dateModified":"2026-08-10",
"author":{"@type":"Person","name":"Terje Gulliksen","jobTitle":"Daglig leder","worksFor":{"@id":"#org"}},
"publisher":{"@id":"#org"},
"mainEntityOfPage":"https://fasadetjenester.no/verdt-a-vite/istapper/"},
{"@type":"LocalBusiness","@id":"#org","name":"Fasadetjenester AS",
"telephone":"+47 929 79 177","email":"terje@fasadetjenester.no",
"address":{"@type":"PostalAddress","streetAddress":"Mikalsrud 7A","postalCode":"2069","addressLocality":"Jessheim","addressCountry":"NO"},
"areaServed":["Oslo","Akershus","Østlandet"],"slogan":"Alt utvendig. Én leverandør."},
{"@type":"Service","name":"Istappfjerning og vintersikring","provider":{"@id":"#org"},
"areaServed":["Oslo","Akershus","Østlandet"],"serviceType":"Istappfjerning, snørydding av tak og rasfaresikring"},
{"@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Hvem har ansvaret for istapper på bygget?","acceptedAnswer":{"@type":"Answer","text":"Eier av bygget. I et borettslag eller sameie ligger ansvaret hos styret, som er ansvarlig for vedlikehold av eiendommen. Ansvaret gjelder både snø og is på taket og situasjonen på fortauet nedenfor."}},{"@type":"Question","name":"Er det nok å sette opp varselskilt?","acceptedAnswer":{"@type":"Answer","text":"Nei. Skilt er første tiltak, ikke siste. Etter Oslo kommunes politivedtekt skal faren varsles straks, og snø og is skal fjernes så snart som mulig — senest innen sju dager. Et skilt som blir stående uten at isen faktisk fjernes, oppfyller ikke plikten."}},{"@type":"Question","name":"Blir styret ansvarlig hvis noen skades av en istapp?","acceptedAnswer":{"@type":"Answer","text":"Risikoen for at boligselskapet blir økonomisk ansvarlig er stor, både for personskade og materiell skade. I alvorlige tilfeller kan det også oppstå straffansvar. Dette er en generell fremstilling og ikke juridisk rådgivning — ved en konkret sak bør styret søke juridisk bistand."}},{"@type":"Question","name":"Slipper styret ansvaret hvis vi har avtale med et firma?","acceptedAnswer":{"@type":"Answer","text":"Nei. At arbeidet er satt bort til en ekstern leverandør fritar ikke boligselskapet for ansvar. Styret har fortsatt plikt til å følge opp at inspeksjoner faktisk gjennomføres og at snø og is blir fjernet i tide."}},{"@type":"Question","name":"Hvor ofte må taket inspiseres om vinteren?","acceptedAnswer":{"@type":"Answer","text":"Det holder ikke å reagere når noen melder fra om en istapp. Taket må inspiseres regelmessig gjennom vintersesongen. Hyppigheten må tilpasses værforholdene — mildvær etterfulgt av frost er den kombinasjonen som danner istapper raskest."}},{"@type":"Question","name":"Hvorfor dannes istapper i det hele tatt?","acceptedAnswer":{"@type":"Answer","text":"Snø på taket smelter nedenfra, enten av varmetap fra bygget eller av sol, og vannet renner ned mot takfoten. Der er det kaldere, og vannet fryser før det kommer seg videre. Dårlig isolert loft og tette takrenner er de to vanligste årsakene til at det skjer år etter år på samme sted."}}]},
{"@type":"BreadcrumbList","itemListElement":[
{"@type":"ListItem","position":1,"name":"Forside","item":"https://fasadetjenester.no/"},
{"@type":"ListItem","position":2,"name":"Verdt å vite","item":"https://fasadetjenester.no/verdt-a-vite/"},
{"@type":"ListItem","position":3,"name":"Istapper og takras"}]}
]}`}}/>
    <div dangerouslySetInnerHTML={{__html: `

<header><div class="hd"><a class="lg" href="/">Fasade<em>tjenester</em></a>
<nav class="anv"><a href="/">Forside</a><a href="/#tjenester">Tjenester</a><a href="/verdt-a-vite">Verdt å vite</a><a href="/#om">Om oss</a></nav><a class="btn" href="/#befaring">Gratis befaring</a></div></header>

<div class="wrap">
<p class="crumb"><a href="/">Forside</a> / <a href="/verdt-a-vite">Verdt å vite</a> / Istapper og takras</p>

<div class="utkast"><b>UTKAST til gjennomlesing hos Terje.</b> Artikkelen gjengir krav i politivedtekt og alminnelige ansvarsregler. Ordlyden i politivedtektene varierer mellom kommuner, og fremstillingen bør kvalitetssikres — helst av forretningsfører eller advokat — før publisering. (Jf. retningslinjene for AI-innhold i briefen, pkt. 9.2 og 9.4.)</div>

<p class="ey">Verdt å vite · Vinter og sikring</p>
<h1>Istapper: styrets ansvar — og hva det betyr i praksis</h1>
<p class="lede">De fleste styrer vet at de har et ansvar for istapper. Færre vet hvor kort fristen er, at varselskilt ikke er nok, og at ansvaret følger styret selv når jobben er satt bort til noen andre.</p>

<div class="meta"><span>Av <strong>Terje Gulliksen</strong>, daglig leder i Fasadetjenester AS</span><span>·</span><span>Oppdatert august 2026</span></div>

<div class="svar"><b>Kort svar:</b> Ansvaret ligger hos byggeier — i borettslag og sameier vil si styret. Etter Oslo kommunes politivedtekt § 4-1 skal faren varsles straks, og snø og is fjernes så snart som mulig, senest innen sju dager. Varselskilt alene oppfyller ikke plikten. Å sette arbeidet bort til et firma fjerner heller ikke ansvaret — styret må fortsatt følge opp at inspeksjon og fjerning faktisk skjer.</div>

<h2>Hva regelverket faktisk krever</h2>
<p>Grunnregelen er at eier av bygningen har ansvar for at snø og is på taket ikke utgjør en fare for folk som ferdes nedenfor. I borettslag og sameier er det styret som forvalter dette ansvaret, fordi styret er ansvarlig for vedlikehold av eiendommen.</p>
<p>De konkrete pliktene står i kommunens politivedtekt. I Oslo følger det av § 4-1 at eier skal:</p>
<table>
<tr><th>Plikt</th><th>Frist</th></tr>
<tr><td>Varsle om faren — typisk med sperring og skilt</td><td>Straks faren oppstår</td></tr>
<tr><td>Fjerne snø og is fra taket</td><td>Så snart som mulig, senest innen sju dager</td></tr>
<tr><td>Rydde fortauet utenfor eiendommen for snø og is</td><td>Snarest etter snøfall</td></tr>
<tr><td>Strø fortauet ved glatte forhold (innenfor Ring 1)</td><td>Ved behov</td></tr>
</table>
<p>Vær oppmerksom på at politivedtektene er kommunale. Ordlyd og frister kan avvike der bygget står — sjekk vedtekten i egen kommune. Prinsippet er likevel det samme over hele landet: eier har plikt til både å varsle og å utbedre.</p>

<h2>Skiltet er første tiltak, ikke siste</h2>
<p>Dette er den vanligste misforståelsen vi møter. Et rasfareskilt og et sperrebånd er riktig førstehåndlig — det er det som skal skje straks, mens dere venter på at noen kan komme opp. Men det er et varsel om at problemet finnes, ikke en løsning på det.</p>
<p>Blir skiltet stående i februar, mars og april mens istappene henger der, har ikke bygget oppfylt plikten sin. Da har dere i praksis dokumentert at dere kjente til faren og lot den bestå — noe som gjør ansvarssituasjonen verre, ikke bedre, dersom noe skjer.</p>

<div class="les"><b>Vi leverer også skiltene</b>Rasfare- og istappskilt kan bestilles fra oss, uavhengig av om vi gjør fjerningen. Vi leverer skilt av samme kvalitet som de store aktørene, til lavere pris. Har dere allerede en leverandør på selve fjerningen, er det helt greit.</div>

<h2>Ansvaret følger ikke med fakturaen</h2>
<p>Mange styrer tror at når snørydding og istappfjerning er satt bort til et firma, er ansvaret satt bort sammen med jobben. Det stemmer ikke. Boligselskapet er fortsatt ansvarlig, og styret må aktivt følge opp at leverandøren gjennomfører inspeksjoner ofte nok og fjerner is og snø i tide.</p>
<p>I praksis betyr det at styret bør ha svar på tre spørsmål gjennom hele vinteren: <strong>Når var noen sist på taket? Hva fant de? Hva ble gjort?</strong> Uten den dokumentasjonen er det vanskelig å vise at bygget har hatt en forsvarlig rutine — og det er nettopp den vurderingen som blir avgjørende dersom noen skades.</p>

<h2>Inspeksjon, ikke bare utrykning</h2>
<p>En vanlig rutine er å reagere når en beboer melder fra om at det henger istapper. Det er for sent, og det er ikke det regelverket legger opp til. Taket skal inspiseres regelmessig — det holder ikke å fjerne is og snø først når noen oppdager det.</p>
<p>Hvor ofte avhenger av været, ikke av kalenderen. Den farligste perioden er ikke den kaldeste, men vekslingen: mildvær som smelter snøen på taket, etterfulgt av frost som fryser vannet ved takfoten. Kommer det en slik veksling, kan det henge betydelige istapper over inngangspartiet i løpet av ett døgn.</p>

<figure><img src="/img/c_vinter.webp" alt="Vintersikring av bygg — snørydding av tak og istappfjerning" loading="lazy"><figcaption>Vinterarbeid på tak krever fallsikring og som regel sperring av arealet under. Det er ikke en jobb for en vaktmester med stige.</figcaption></figure>

<h2>Hvorfor akkurat deres bygg får istapper hvert år</h2>
<p>Istapper er sjelden tilfeldige. De dannes samme sted, år etter år, og som regel er det én av to årsaker — eller begge.</p>
<p><strong>Varmetap gjennom taket.</strong> Dårlig isolert eller dårlig ventilert loft varmer opp takflaten nedenfra. Snøen smelter der taket er varmt, vannet renner ned mot takfoten som er kald, og fryser der. Ser dere at snøen smelter i felter på taket mens naboens tak ligger jevnt hvitt, er det dette dere ser.</p>
<p><strong>Tette takrenner.</strong> Er renna full av løv og is, har ikke smeltevannet noe sted å gå. Det renner over kanten og fryser til istapper i stedet. Dette er den enkleste av de to å gjøre noe med, og grunnen til at <a href="/verdt-a-vite/takrenner">takrennerens om høsten</a> er et vintertiltak like mye som et høsttiltak.</p>
<p>Det er verdt å merke seg: den ene av disse årsakene løses av bygningsmessige tiltak, den andre av vedlikehold. Begge deler er billigere enn å rykke ut med lift midt i januar, hver eneste vinter.</p>

<h2>Hva en beredskapsavtale bør inneholde</h2>
<p>Vår anbefaling til styrer er å ha en avtale på plass før sesongen, ikke å ringe rundt når istappene allerede henger. En avtale som faktisk dekker ansvaret bør inneholde:</p>
<p><strong>Fast inspeksjonsrutine</strong> — hvem sjekker taket, hvor ofte, og hva som utløser en ekstra runde utenom oppsettet.</p>
<p><strong>Responstid ved varsel</strong> — hvor raskt noen er på plass når styret eller en beboer melder fra.</p>
<p><strong>Skriftlig logg</strong> — dato, funn, tiltak og bilder etter hver runde. Dette er styrets dokumentasjon.</p>
<p><strong>Varsling og sperring inkludert</strong> — skilt og sperremateriell skal være på plass i samme runde, ikke bestilles separat.</p>
<p><strong>Klar ansvarsfordeling</strong> — hva leverandøren gjør, og hva styret fortsatt må følge opp selv. Den siste kolonnen er aldri tom.</p>

<div class="jur">Denne artikkelen er en generell fremstilling av regelverk og ansvarsforhold, ikke juridisk rådgivning. Politivedtektene varierer mellom kommuner, og i en konkret ansvarssak bør styret rådføre seg med forretningsfører eller advokat.</div>

<h2>Ofte stilte spørsmål om istapper og takras</h2>
<details class="fq"><summary>Hvem har ansvaret for istapper på bygget?</summary><p>Eier av bygget. I et borettslag eller sameie ligger ansvaret hos styret, som er ansvarlig for vedlikehold av eiendommen. Ansvaret gjelder både snø og is på taket og situasjonen på fortauet nedenfor.</p></details><details class="fq"><summary>Er det nok å sette opp varselskilt?</summary><p>Nei. Skilt er første tiltak, ikke siste. Etter Oslo kommunes politivedtekt skal faren varsles straks, og snø og is skal fjernes så snart som mulig — senest innen sju dager. Et skilt som blir stående uten at isen faktisk fjernes, oppfyller ikke plikten.</p></details><details class="fq"><summary>Blir styret ansvarlig hvis noen skades av en istapp?</summary><p>Risikoen for at boligselskapet blir økonomisk ansvarlig er stor, både for personskade og materiell skade. I alvorlige tilfeller kan det også oppstå straffansvar. Dette er en generell fremstilling og ikke juridisk rådgivning — ved en konkret sak bør styret søke juridisk bistand.</p></details><details class="fq"><summary>Slipper styret ansvaret hvis vi har avtale med et firma?</summary><p>Nei. At arbeidet er satt bort til en ekstern leverandør fritar ikke boligselskapet for ansvar. Styret har fortsatt plikt til å følge opp at inspeksjoner faktisk gjennomføres og at snø og is blir fjernet i tide.</p></details><details class="fq"><summary>Hvor ofte må taket inspiseres om vinteren?</summary><p>Det holder ikke å reagere når noen melder fra om en istapp. Taket må inspiseres regelmessig gjennom vintersesongen. Hyppigheten må tilpasses værforholdene — mildvær etterfulgt av frost er den kombinasjonen som danner istapper raskest.</p></details><details class="fq"><summary>Hvorfor dannes istapper i det hele tatt?</summary><p>Snø på taket smelter nedenfra, enten av varmetap fra bygget eller av sol, og vannet renner ned mot takfoten. Der er det kaldere, og vannet fryser før det kommer seg videre. Dårlig isolert loft og tette takrenner er de to vanligste årsakene til at det skjer år etter år på samme sted.</p></details>

<div class="forf"><img src="/img/terje.webp" alt="Terje Gulliksen, daglig leder i Fasadetjenester AS">
<div><b>Terje Gulliksen</b><p>Daglig leder i Fasadetjenester AS. Terje er selv med på befaringene og har hendene på utstyret — rådene i denne artikkelen kommer fra jobber vi faktisk har gjort, ikke fra en innholdsfabrikk. Fasadetjenester AS er en offentlig godkjent renholdsbedrift med base på Jessheim, og dekker Oslo, Akershus og store deler av Østlandet.</p></div></div>

<div class="cta"><h2>Få vinteren på plass før den kommer</h2>
<p>Bestill en gratis befaring nå, så har dere rutinen og avtalen klar før første frost.</p>
<a class="btn" href="/#befaring">Bestill gratis befaring</a></div>
</div>

<footer><div>© 2026 Fasadetjenester AS · Org.nr. 934 907 035 · 929 79 177 · terje@fasadetjenester.no · <a href="https://moonlandingsite.no" style="color:inherit">Nettside av Moonlanding</a></div></footer>`}}/>
  </>)
}
