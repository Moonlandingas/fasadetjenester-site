import Script from 'next/script'
export const metadata = {
  title: "Tusen takk! | Fasadetjenester AS",
  description: "Henvendelsen er mottatt \u2014 vi ringer deg i l\u00f8pet av dagen.",
  robots: { index: false, follow: false }, // fjernes via LIVE-bryteren ved lansering
  alternates: { canonical: '/tusen-takk' },
  openGraph: {
    title: "Tusen takk! | Fasadetjenester AS",
    description: "Henvendelsen er mottatt \u2014 vi ringer deg i l\u00f8pet av dagen.",
    url: '/tusen-takk',
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
:root{--ink:#0E1826;--navy:#1E3A63;--hiviz:#D8EC3C;--puss:#ECEDE9;--puss2:#DEE0DB;--steind:#59606B;
--d:"Bricolage Grotesque",system-ui,sans-serif;--b:"Inter Tight",system-ui,sans-serif}
*{box-sizing:border-box}
body{margin:0;background:var(--ink);color:#fff;font-family:var(--b);font-size:17px;line-height:1.65;min-height:100vh;display:flex;flex-direction:column}
.wrap{max-width:660px;margin:0 auto;padding:0 26px;width:100%}
header{padding:18px 0}
.lg{font-family:var(--d);font-weight:700;font-size:19px;text-decoration:none;color:#fff}.lg em{font-style:normal;color:var(--hiviz)}
main{flex:1;display:flex;align-items:center;padding:60px 0}
.ey{font-size:11.5px;font-weight:600;letter-spacing:.19em;text-transform:uppercase;color:var(--hiviz);margin:0 0 16px}
h1{font-family:var(--d);font-weight:600;font-size:clamp(38px,6vw,64px);letter-spacing:-.025em;line-height:1.05;margin:0 0 18px}
.lede{font-size:19px;color:rgba(255,255,255,.78);margin:0 0 34px}
.steps{list-style:none;padding:0;margin:0 0 38px;border-top:1px solid rgba(255,255,255,.15)}
.steps{border-radius:0}.steps li{display:flex;gap:16px;align-items:baseline;padding:16px 0;border-bottom:1px solid rgba(255,255,255,.15)}
.steps b{font-family:var(--d);color:var(--hiviz);font-size:20px;min-width:24px}
.btn{display:inline-flex;align-items:center;white-space:nowrap;gap:.5em;font-weight:600;font-size:15px;padding:14px 26px;border-radius:100px;text-decoration:none;background:var(--hiviz);color:#161D06}
.btn2{background:transparent;border:1px solid rgba(255,255,255,.45);color:#fff;margin-left:10px}
footer{padding:26px 0;font-size:13.5px;color:rgba(255,255,255,.5);text-align:center}
`}}/>
    <div dangerouslySetInnerHTML={{__html: `
<header><div class="wrap"><a class="lg" href="/">Fasade<em>tjenester</em></a></div></header>
<main><div class="wrap">
<p class="ey">Henvendelse mottatt</p>
<h1>Tusen takk!</h1>
<p class="lede">Vi har fått henvendelsen din, og ringer deg i løpet av dagen. Slik ser resten av løpet ut:</p>
<ul class="steps">
<li><b>1</b><span><strong>Vi ringer deg</strong> — normalt samme dag — og avtaler tidspunkt for befaring.</span></li>
<li><b>2</b><span><strong>Gratis befaring:</strong> vi går gjennom bygget og noterer alt som bør tas, helt uforpliktende.</span></li>
<li><b>3</b><span><strong>Ett samlet tilbud</strong> med fast pris per tjeneste — du velger selv hva som gjøres.</span></li>
</ul>
<div><a class="btn" href="/">Tilbake til forsiden</a><a class="btn btn2" href="tel:+4792979177">929 79 177</a></div>
</div></main>
<footer><div class="wrap">© 2026 Fasadetjenester AS · <a href="https://moonlandingsite.no" style="color:inherit">Nettside av Moonlanding</a></div></footer>`}}/>
  </>)
}
