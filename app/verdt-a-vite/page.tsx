import Script from 'next/script'
export const metadata = {
  title: "Verdt \u00e5 vite \u2014 r\u00e5d og artikler | Fasadetjenester AS",
  description: "Korte, \u00e6rlige artikler om fasadevask, tak, vintersikring og bygningsvedlikehold \u2014 skrevet av folk som gj\u00f8r jobben selv.",
  robots: { index: false, follow: false }
}
export default function Page() {
  return (<>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com"  crossOrigin="anonymous"/>
    <style dangerouslySetInnerHTML={{__html: `
:root{--ink:#0E1826;--navy:#1E3A63;--hiviz:#D8EC3C;--puss:#ECEDE9;--puss2:#DEE0DB;--paper:#fff;--steind:#59606B;
--d:"Bricolage Grotesque",system-ui,sans-serif;--b:"Inter Tight",system-ui,sans-serif}
*{box-sizing:border-box}
body{margin:0;background:var(--paper);color:var(--ink);font-family:var(--b);font-size:17px;line-height:1.65;-webkit-font-smoothing:antialiased}
img{max-width:100%;display:block}
h1,h2,h3{font-family:var(--d);font-weight:600;letter-spacing:-.02em;line-height:1.1}
.wrap{max-width:1160px;margin:0 auto;padding:0 26px}
header{background:var(--ink);color:#fff;padding:18px 0}
.hd{display:flex;align-items:center;max-width:1160px;margin:0 auto;padding:0 26px}
.lg{font-family:var(--d);font-weight:700;font-size:19px;text-decoration:none;color:#fff}.lg em{font-style:normal;color:var(--hiviz)}
.anv{display:flex;gap:20px;margin-left:auto;margin-right:22px;font-size:14.5px;font-weight:500}
.anv a{color:#fff;text-decoration:none;opacity:.85}.anv a:hover{color:var(--hiviz);opacity:1}
.btn{display:inline-flex;align-items:center;gap:.5em;font-weight:600;font-size:15px;padding:13px 26px;border-radius:100px;text-decoration:none;background:var(--hiviz);color:#161D06}
.ey{font-size:11.5px;font-weight:600;letter-spacing:.19em;text-transform:uppercase;color:var(--navy);margin:0 0 14px}
h1{font-size:clamp(34px,5vw,56px);margin:0 0 16px}
.lede{font-size:19px;color:var(--steind);max-width:56ch}
.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:26px;margin:48px 0 80px}
.card{display:block;background:var(--puss);border:1px solid var(--puss2);border-radius:18px;overflow:hidden;text-decoration:none;color:var(--ink);transition:.18s}
a.card:hover{border-color:var(--navy);transform:translateY(-3px)}
.card img{aspect-ratio:16/10;object-fit:cover;width:100%}
.cb{padding:24px}
.cn{font-family:var(--d);font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:var(--navy);margin:0 0 8px}
.card h2{font-size:21px;margin:0 0 10px;line-height:1.25}
.card p{font-size:14.5px;color:var(--steind);margin:0 0 14px}
.la{font-weight:600;font-size:14.5px;border-bottom:2px solid var(--hiviz);padding-bottom:2px}
.card.tbd{opacity:.55;pointer-events:none}
.kb{background:var(--navy);color:#fff;padding:38px 0}
.kbw{display:flex;align-items:center;justify-content:space-between;gap:26px;flex-wrap:wrap}
.kbk{font-size:11.5px;font-weight:600;letter-spacing:.19em;text-transform:uppercase;color:var(--hiviz);margin:0 0 6px}
.kbtel{font-family:var(--d);font-weight:700;font-size:clamp(30px,4.5vw,44px);color:#fff;text-decoration:none;letter-spacing:-.02em;line-height:1}
.kbtel:hover{color:var(--hiviz)}
.kbact{display:flex;gap:12px;flex-wrap:wrap}
.bg1{background:transparent;border:1px solid rgba(255,255,255,.45);color:#fff}
footer{background:var(--ink);color:#98A2B0;padding:30px 0;font-size:14px;text-align:center}
main{padding-top:64px}
@media(max-width:900px){.grid{grid-template-columns:1fr}.anv{display:none}}
`}}/>
    <div dangerouslySetInnerHTML={{__html: `
<header><div class="hd"><a class="lg" href="/">Fasade<em>tjenester</em></a>
<nav class="anv"><a href="/">Forside</a><a href="/#tjenester">Tjenester</a><a href="/#arshjul">Årshjulet</a><a href="/#om">Om oss</a></nav>
<a class="btn" href="/#befaring">Gratis befaring</a></div></header>
<main><div class="wrap">
<p class="ey">Verdt å vite</p>
<h1>Råd fra folk som står i lifta selv.</h1>
<p class="lede">Korte, ærlige svar på det kundene faktisk spør oss om — om fasade, tak, vinter og vedlikehold. Skrevet av oss som gjør jobben, og bygget ut sesong for sesong etter årshjulet.</p>
<div class="grid">
<a class="card" href="/verdt-a-vite/fasadevask"><img src="/img/ba_fas_etter.webp" alt="Fasadevask — før og etter" loading="lazy"><div class="cb">
<p class="cn">Fasadevask · Vår</p><h2>Fasadevask: pris, metode og hvor ofte bygget bør vaskes</h2>
<p>Hva koster fasadevask, når lønner softwash seg fremfor høytrykk, og hvorfor grønske er mer enn et kosmetisk problem.</p>
<span class="la">Les artikkelen →</span></div></a>
<div class="card tbd"><img src="/img/ba_tak_for.webp" alt="" loading="lazy"><div class="cb">
<p class="cn">Tak og takrenner · Høst</p><h2>Hva løv i takrennen faktisk koster deg</h2>
<p>Publiseres før høstsesongen. Frostskader, overvann og hvorfor oktober er fristen.</p></div></div>
<div class="card tbd"><img src="/img/c_vinter.webp" alt="" loading="lazy"><div class="cb">
<p class="cn">Vinter og sikring · Vinter</p><h2>Istapper: styrets ansvar — og hva det betyr i praksis</h2>
<p>Publiseres før vintersesongen. Ansvar, varslingsplikt og beredskapsavtale.</p></div></div>
</div></div>
<section class="kb"><div class="wrap kbw">
<div><p class="kbk">Kontakt oss i dag</p><a class="kbtel" href="tel:+4792979177">929 79 177</a></div>
<div class="kbact"><a class="btn" href="/#befaring">Bestill gratis befaring</a><a class="btn bg1" href="mailto:post@fasadetjenester.no">Send e-post</a></div>
</div></section></main>
<footer><div>© 2026 Fasadetjenester AS · Org.nr. 934 907 035 · <a href="tel:+4792979177" style="color:inherit">929 79 177</a> · <a href="https://moonlandingsite.no" style="color:inherit">Nettside av Moonlanding</a></div></footer>`}}/>
  </>)
}
