import Script from 'next/script'
import { LIVE } from '../lib/site'
export const metadata = {
  title: "Fasadevask og utvendig vedlikehold | Fasadetjenester AS",
  description: "Fasadevask, grafittifjerning, takrennerens, vintersikring og h\u00e5ndverk for borettslag, sameier og n\u00e6ringsbygg i Oslo, Akershus og hele S\u00f8r\u00f8st-Norge. Gratis befaring \u2014 \u00e9n leverand\u00f8r, hele \u00e5ret.",
  robots: { index: LIVE, follow: LIVE },
  alternates: { canonical: '/' },
  openGraph: {
    title: "Fasadevask og utvendig vedlikehold | Fasadetjenester AS",
    description: "Fasadevask, grafittifjerning, takrennerens, vintersikring og h\u00e5ndverk for borettslag, sameier og n\u00e6ringsbygg i Oslo, Akershus og hele S\u00f8r\u00f8st-Norge. Gratis befaring \u2014 \u00e9n leverand\u00f8r, hele \u00e5ret.",
    url: '/',
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
    <link rel="stylesheet" href="https://embed.typeform.com/next/css/popup.css"/>
    <link rel="stylesheet" href="https://embed.typeform.com/next/css/popup.css"/>
    <style dangerouslySetInnerHTML={{__html: `
:root{--ink:#0E1826;--ink2:#16233A;--navy:#1E3A63;--sky:#7FB2E5;--hiviz:#D8EC3C;
--puss:#ECEDE9;--puss2:#DEE0DB;--paper:#fff;--stein:#8A9099;--steind:#59606B;
--wrap:1160px;--nar:660px;--d:"Bricolage Grotesque",system-ui,sans-serif;--b:"Inter Tight",system-ui,sans-serif;--r:16px}
*{box-sizing:border-box}html{scroll-behavior:smooth}
body{margin:0;background:var(--puss);color:var(--ink);font-family:var(--b);font-size:17px;line-height:1.62;-webkit-font-smoothing:antialiased}
img{max-width:100%;display:block}a{color:inherit}p{margin:0 0 1em}
h1,h2,h3{font-family:var(--d);font-weight:600;letter-spacing:-.025em;line-height:1.05;margin:0}
.wrap{max-width:var(--wrap);margin:0 auto;padding:0 26px}.nar{max-width:var(--nar)}
.ey{font-size:11.5px;font-weight:600;letter-spacing:.19em;text-transform:uppercase;color:var(--steind);margin:0 0 18px}
section{padding:104px 0}.dk{background:var(--ink);color:#E4E9EF}.dk .ey{color:var(--hiviz)}.pa{background:var(--paper)}
.h2{font-size:clamp(32px,4.4vw,52px)}
.btn{display:inline-flex;align-items:center;white-space:nowrap;gap:.5em;font-weight:600;font-size:15px;padding:15px 28px;border-radius:100px;text-decoration:none;border:1px solid transparent;cursor:pointer;transition:.18s}
.bs1{background:var(--hiviz);color:#161D06;border-color:var(--hiviz)}.bs1:hover{background:#C6DA23;border-color:#C6DA23}
.bl{border-color:currentColor;background:transparent}.bl:hover{background:var(--ink);color:#fff;border-color:var(--ink)}.dk .bl:hover{background:#fff;color:var(--ink);border-color:#fff}
.bg1{border-color:rgba(255,255,255,.45);color:#fff}.bg1:hover{background:#fff;color:var(--ink);border-color:#fff}
.la{font-weight:600;font-size:14.5px;text-decoration:none;border-bottom:2px solid var(--hiviz);padding-bottom:2px}
.ni{position:relative}
.ni>a{text-decoration:none;opacity:.87}.ni>a:hover{opacity:1;color:var(--hiviz)}
.sub{position:absolute;top:100%;left:-18px;padding-top:16px;display:none;z-index:70}
.ni:hover .sub,.ni:focus-within .sub{display:block}
.subin{background:rgba(14,24,38,.97);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.13);border-radius:14px;padding:10px;min-width:290px;box-shadow:0 18px 44px rgba(0,0,0,.4)}
.sub a{display:block;padding:11px 14px;border-radius:9px;font-size:14.5px;color:#fff;text-decoration:none;opacity:.9;white-space:nowrap}
.sub a:hover{background:rgba(255,255,255,.08);opacity:1;color:var(--hiviz)}
.sub .all{border-top:1px solid rgba(255,255,255,.13);margin-top:6px;color:var(--hiviz)}
.hb{display:none;background:none;border:1px solid rgba(255,255,255,.45);border-radius:100px;color:inherit;padding:9px 18px;font:600 14px var(--b);cursor:pointer}
header.st .hb{border-color:var(--ink)}header.st .nv a:hover,header.st .ni>a:hover{color:var(--navy);opacity:1}
header.open{background:var(--ink)!important;color:#fff!important}
.mm{position:fixed;inset:70px 0 0 0;background:var(--ink);color:#fff;z-index:59;overflow:auto;padding:10px 26px 40px;display:none}
.mm.open{display:block}
.mm h5{font:600 11.5px/1 var(--b);letter-spacing:.19em;text-transform:uppercase;color:var(--hiviz);margin:26px 0 8px}
.mm a{display:block;padding:13px 0;font:600 19px var(--d);color:#fff;text-decoration:none;border-bottom:1px solid rgba(255,255,255,.1)}
.mm a:active{color:var(--hiviz)}
body.lock{overflow:hidden}
header{position:sticky;top:0;z-index:60;color:#fff;transition:.25s}
.hd{display:flex;align-items:center;gap:24px;height:70px}
.lg{font-family:var(--d);font-weight:700;font-size:19px;letter-spacing:-.03em;text-decoration:none;white-space:nowrap}
.lg em{font-style:normal;color:var(--hiviz)}
.nv{display:flex;gap:21px;margin-left:auto;font-size:14.5px;font-weight:500}.nv a{text-decoration:none;opacity:.87}.nv a:hover{opacity:1;color:var(--hiviz)}
.hd .btn{padding:11px 19px;font-size:14px}.cs1{display:none}.tel{font-weight:600;font-size:14.5px;text-decoration:none;white-space:nowrap}
header.st{background:rgba(255,255,255,.96);backdrop-filter:blur(9px);color:var(--ink);border-bottom:1px solid var(--puss2)}
header.st .lg em{color:var(--navy)}header.st .bg1{border-color:var(--ink);color:var(--ink)}header.st .bg1:hover{background:var(--ink);color:#fff}
.hero{position:relative;min-height:min(92vh,790px);display:flex;align-items:flex-end;color:#fff;margin-top:-70px;overflow:hidden}
.hbg{position:absolute;inset:0}.hbg img,.hbg video{width:100%;height:100%;object-fit:cover;position:absolute;inset:0}.hbg video{z-index:1}.hbg::after{z-index:2}
.hbg::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(8,14,24,.74),rgba(8,14,24,.46) 36%,rgba(8,14,24,.93))}
.hin{position:relative;z-index:3;padding:170px 0 0;width:100%}
.hero h1{font-size:clamp(38px,6vw,74px);max-width:17ch;margin:0 0 22px;text-shadow:0 2px 28px rgba(0,0,0,.5)}
.hook{display:inline-flex;align-items:center;gap:10px;background:var(--hiviz);color:#161D06;font-weight:600;font-size:14.5px;padding:11px 20px;border-radius:100px;text-decoration:none;margin-bottom:24px;transition:.15s}
.hook:hover{background:#C6DA23;transform:translateY(-1px)}
.hook i{width:8px;height:8px;border-radius:50%;background:#161D06;display:block}.hsub{max-width:52ch;font-size:19px;color:rgba(255,255,255,.92);text-shadow:0 1px 16px rgba(0,0,0,.45)}
.hcta{display:flex;gap:12px;flex-wrap:wrap;margin-top:30px}
.nb{margin-top:54px;border-top:1px solid rgba(255,255,255,.22);display:grid;grid-template-columns:auto 1fr auto;gap:26px;align-items:center;padding:20px 0 26px;font-size:16px}
.nb b{font-family:var(--d);font-size:16.5px}.nb .np{color:rgba(255,255,255,.74)}
.dot{display:inline-block;width:7px;height:7px;border-radius:50%;background:var(--hiviz);margin-right:9px;vertical-align:1px}
.nb a{color:var(--hiviz);text-decoration:none;font-weight:600;white-space:nowrap}
.strip{background:var(--navy);color:#CBD9EA;padding:18px 0;font-size:15.5px}
.strip ul{display:flex;flex-wrap:wrap;gap:10px 34px;list-style:none;margin:0;padding:0;justify-content:center}
.strip li{white-space:nowrap}
@media(max-width:1160px){.strip{font-size:14.5px}.strip ul{gap:10px 24px}}
@media(max-width:1024px){.strip{font-size:14px}.strip ul{gap:10px 20px}}
.wg{display:grid;grid-template-columns:1fr 1fr;gap:70px;align-items:center;margin-top:52px}
.wheel{width:100%;max-width:470px;margin:0 auto;overflow:visible}
.rim{fill:none;stroke:rgba(255,255,255,.1)}.seg{cursor:pointer}
.sf{fill:rgba(255,255,255,.06);stroke:rgba(255,255,255,.15);transition:.3s}
.seg:hover .sf{fill:rgba(255,255,255,.13)}.seg.on .sf{fill:var(--hiviz);stroke:var(--hiviz)}
.seg:focus{outline:none}.seg:focus-visible .sf{stroke:#fff;stroke-width:2.5}
.sl{font-family:var(--d);font-size:19px;font-weight:600;fill:rgba(255,255,255,.6);text-anchor:middle;pointer-events:none;transition:.3s}
.seg.on .sl{fill:#1A2007}
.mo{font-size:11.5px;letter-spacing:.13em;text-transform:uppercase;fill:rgba(255,255,255,.3);text-anchor:middle}
.mo.now{fill:var(--hiviz);font-weight:600}
.hub{fill:var(--ink);stroke:rgba(255,255,255,.14)}
.hk{font-size:10.5px;letter-spacing:.24em;fill:var(--stein);text-anchor:middle}
.hs{font-family:var(--d);font-size:27px;font-weight:600;fill:#fff;text-anchor:middle}
.hm{font-size:13px;fill:var(--hiviz);text-anchor:middle}
.spk{font-size:11.5px;letter-spacing:.19em;text-transform:uppercase;color:var(--hiviz);margin:0 0 10px}
.spt{font-size:clamp(34px,4.4vw,50px);margin:0 0 16px}
.spl{font-size:18.5px;color:rgba(228,233,239,.78);max-width:44ch}
.spu{list-style:none;padding:0;margin:26px 0 30px;border-top:1px solid rgba(255,255,255,.15)}
.spu li{padding:14px 0 14px 30px;border-bottom:1px solid rgba(255,255,255,.15);font-family:var(--d);font-size:19px;position:relative}
.spu li::before{content:"";position:absolute;left:2px;top:24px;width:14px;height:2px;background:var(--hiviz)}
.sp[hidden]{display:none}.sp{animation:rz .45s ease both}
@keyframes rz{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
.pg{display:grid;grid-template-columns:1.15fr .85fr;gap:56px;margin-top:46px;align-items:start}
.pl{display:flex;flex-wrap:wrap;gap:9px}.pk{cursor:pointer}
.pk input{position:absolute;opacity:0;pointer-events:none}
.pk span{display:inline-block;padding:10px 16px;border:1px solid var(--puss2);background:var(--paper);border-radius:100px;font-size:14.5px;font-weight:500;transition:.15s}
.pk span:hover{border-color:var(--stein)}
.pk input:checked+span{background:var(--ink);color:#fff;border-color:var(--ink)}
.pk input:focus-visible+span{outline:2px solid var(--navy);outline-offset:2px}
.ty{background:var(--ink);color:#fff;border-radius:20px;padding:34px;position:sticky;top:96px}
.tr{display:flex;justify-content:space-between;align-items:baseline;padding:13px 0;border-bottom:1px solid rgba(255,255,255,.14);font-size:15px}
.tr b{font-family:var(--d);font-size:30px;font-weight:600}.tr.ac b{color:var(--hiviz)}
.tn{font-size:14px;color:rgba(255,255,255,.62);margin:20px 0 22px}
.cats{margin-top:48px;border-top:1px solid var(--puss2)}
.cat{display:grid;grid-template-columns:230px 1fr;gap:44px;padding:44px 0;border-bottom:1px solid var(--puss2);align-items:start;scroll-margin-top:88px}
.cm img{width:100%;aspect-ratio:3/4;object-fit:cover;border-radius:var(--r)}
.cn{font-family:var(--d);font-size:13px;letter-spacing:.14em;color:var(--navy);margin:0 0 8px}
.ct{font-size:clamp(27px,3vw,35px);margin:0 0 12px}.cl{max-width:52ch;color:var(--steind)}
.cs{list-style:none;padding:0;margin:20px 0 22px;display:flex;flex-wrap:wrap;gap:7px}
.cs li{font-size:13.5px;padding:6px 13px;background:var(--paper);border:1px solid var(--puss2);border-radius:100px;color:var(--steind)}
.bar{display:grid;grid-template-columns:repeat(3,1fr);gap:26px;margin-top:48px}.ba{margin:0}
.bs{position:relative;aspect-ratio:3/4;border-radius:var(--r);overflow:hidden;background:var(--ink2);cursor:ew-resize;touch-action:pan-y}
.bi{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.bat{position:absolute;inset:0;clip-path:inset(0 0 0 50%)}
.bt{position:absolute;top:13px;font-size:10.5px;letter-spacing:.18em;text-transform:uppercase;font-weight:600;padding:5px 11px;border-radius:100px;background:rgba(8,14,24,.66);color:#fff;pointer-events:none}
.btf{left:13px}.bte{right:13px;background:var(--hiviz);color:#161D06}
.bh{position:absolute;top:0;bottom:0;left:50%;width:2px;background:#fff;transform:translateX(-1px);pointer-events:none}
.bh span{position:absolute;top:50%;left:50%;width:44px;height:44px;transform:translate(-50%,-50%);border-radius:50%;background:#fff;box-shadow:0 3px 14px rgba(0,0,0,.35)}
.bh span::before,.bh span::after{content:"";position:absolute;top:50%;width:0;height:0;border:5px solid transparent;margin-top:-5px}
.bh span::before{left:8px;border-right-color:var(--ink)}.bh span::after{right:8px;border-left-color:var(--ink)}
.br{position:absolute;inset:0;width:100%;height:100%;opacity:0;margin:0;cursor:ew-resize}
.br:focus-visible{outline:2px solid var(--hiviz);outline-offset:-2px}
.ba figcaption{margin-top:14px;font-size:14px;color:rgba(228,233,239,.62)}
.ba figcaption strong{color:#fff;font-family:var(--d);display:block;font-size:16px;margin-bottom:3px}
.stp{display:grid;grid-template-columns:repeat(3,1fr);margin-top:48px;border-top:1px solid var(--puss2)}
.st1{padding:34px 34px 34px 0;border-right:1px solid var(--puss2)}
.st1:last-child{border-right:0}.st1:not(:first-child){padding-left:34px}
.sn{font-family:var(--d);font-size:52px;font-weight:600;color:var(--navy);line-height:1;margin:0 0 16px;letter-spacing:-.04em}
.st1 h3{font-size:23px;margin:0 0 10px}.st1 p{color:var(--steind);font-size:15.5px;margin:0}
.om{display:grid;grid-template-columns:.85fr 1.15fr;gap:64px;align-items:center}
.om img{width:100%;aspect-ratio:4/5;object-fit:cover;border-radius:var(--r)}
.oq{font-family:var(--d);font-size:clamp(25px,3.1vw,36px);line-height:1.2;letter-spacing:-.025em;margin:0 0 26px}
.os{display:flex;gap:14px;align-items:center;font-size:15px}.os i{width:34px;height:2px;background:var(--hiviz);display:block}
.badge{display:inline-flex;align-items:center;gap:9px;margin-top:26px;padding:9px 15px;border:1px solid var(--puss2);border-radius:100px;font-size:13.5px;font-weight:500;background:var(--puss)}
.badge i{width:8px;height:8px;border-radius:50%;background:var(--navy);display:block}
.vvg{display:grid;grid-template-columns:repeat(3,1fr);gap:26px;margin-top:44px}
.vv{display:block;background:var(--puss);border:1px solid var(--puss2);border-radius:18px;padding:30px;text-decoration:none;transition:.18s}
a.vv:hover{border-color:var(--navy);transform:translateY(-3px)}
.vv h3{font-size:21px;margin:0 0 10px;line-height:1.25}
.vv p{font-size:14.5px;color:var(--steind);margin:0 0 14px}
.vv .cn{margin-bottom:10px}
.vv.tbd2{opacity:.55}
.hmsg{display:grid;grid-template-columns:1fr 1fr;gap:26px;margin-top:44px}
.hmsc{background:var(--paper);border:1px solid var(--puss2);border-radius:18px;padding:30px}
.hmsc h3{font-size:21px;margin:0 0 10px}.hmsc p{font-size:15px;color:var(--steind);margin:0}
.omr{display:grid;grid-template-columns:1fr 1fr;gap:26px;margin-top:44px}
.oc{border:1px solid rgba(255,255,255,.17);border-radius:20px;padding:34px}
.oc.core{background:var(--hiviz);color:#161D06;border-color:var(--hiviz)}
.oc h3{font-size:26px;margin:0 0 12px}.oc p{font-size:15.5px;margin:0 0 18px;opacity:.84}
.ol{list-style:none;padding:0;margin:0;display:flex;flex-wrap:wrap;gap:7px}
.ol li{font-size:13.5px;padding:5px 12px;border-radius:100px;border:1px solid rgba(255,255,255,.24)}
.oc.core .ol li{border-color:rgba(0,0,0,.24)}
.fg{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:34px;max-width:var(--nar)}
.fd{display:flex;flex-direction:column;gap:7px}.fd.fu{grid-column:1/-1}
.fd label{font-size:13px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--steind)}
.fd input,.fd textarea{font-family:var(--b);font-size:16px;padding:14px 15px;border:1px solid var(--puss2);border-radius:var(--r);background:var(--paper);color:var(--ink)}
.fd input:focus,.fd textarea:focus{outline:2px solid var(--navy);outline-offset:-1px}
.ff{grid-column:1/-1;display:flex;gap:18px;align-items:center;flex-wrap:wrap;margin-top:8px}
.ff small{color:var(--steind);font-size:13.5px}
.seg2{display:inline-flex;background:var(--paper);border:1px solid var(--puss2);border-radius:100px;padding:4px;gap:4px}
.sg2 input{position:absolute;opacity:0;pointer-events:none}
.sg2 span{display:block;padding:10px 22px;border-radius:100px;font-size:14.5px;font-weight:600;cursor:pointer;transition:.15s;color:var(--steind)}
.sg2 input:checked+span{background:var(--ink);color:#fff}
.sg2 input:focus-visible+span{outline:2px solid var(--navy);outline-offset:2px}
.fd input[type=file]{padding:11px 15px;font-size:14px}
.fg.privat .bfelt{display:none}
.kb{background:var(--navy);color:#fff;padding:38px 0}
.kbw{display:flex;align-items:center;justify-content:space-between;gap:26px;flex-wrap:wrap}
.kbk{font-size:11.5px;font-weight:600;letter-spacing:.19em;text-transform:uppercase;color:var(--hiviz);margin:0 0 6px}
.kbtel{font-family:var(--d);font-weight:700;font-size:clamp(30px,4.5vw,44px);color:#fff;text-decoration:none;letter-spacing:-.02em;line-height:1}
.kbtel:hover{color:var(--hiviz)}
.kbact{display:flex;gap:12px;flex-wrap:wrap}
footer{background:var(--ink);color:#98A2B0;padding:64px 0 40px;font-size:14.5px}
.ft{display:grid;grid-template-columns:1.4fr 1fr 1fr 1fr;gap:34px}
.ft h4{font-family:var(--d);color:#fff;font-size:14px;letter-spacing:.1em;text-transform:uppercase;margin:0 0 14px}
.ft ul{list-style:none;padding:0;margin:0}.ft li{margin-bottom:8px}.ft a{text-decoration:none}.ft a:hover{color:var(--hiviz)}
.fb{margin-top:48px;padding-top:22px;border-top:1px solid rgba(255,255,255,.12);display:flex;justify-content:space-between;gap:18px;flex-wrap:wrap;font-size:13px}
.pn{background:var(--navy);color:#DCE7F5;padding:11px 0;font-size:13.5px;position:relative;z-index:70}
.tbd{border-bottom:1.5px dotted var(--hiviz)}
.rv{opacity:0;transform:translateY(20px)}.rv.in{opacity:1;transform:none;transition:.7s}
@media(max-width:960px){section{padding:74px 0}.nv{display:none}.hb{display:inline-flex;margin-left:auto}.tel{display:none}.hd .btn{padding:9px 16px;font-size:13.5px}.hd{gap:12px}.cl1{display:none}.cs1{display:inline}
.wg,.pg,.om,.omr,.fg,.hmsg{grid-template-columns:1fr;gap:26px}
.cat{grid-template-columns:1fr;gap:22px}.cm img{aspect-ratio:16/9}
.bar{grid-template-columns:1fr;gap:34px}.stp{grid-template-columns:1fr}
.st1{border-right:0;border-bottom:1px solid var(--puss2);padding:26px 0}.st1:not(:first-child){padding-left:0}.st1:last-child{border-bottom:0}
.nb{grid-template-columns:1fr;gap:12px}.ty{position:static}.ft{grid-template-columns:1fr 1fr}}
@media(prefers-reduced-motion:reduce){*{animation:none!important;transition-duration:.01ms!important}html{scroll-behavior:auto}.rv{opacity:1;transform:none}}
`}}/>
    <div dangerouslySetInnerHTML={{__html: `


<header id="hdr"><div class="wrap hd">
<a class="lg" href="#">Fasade<em>tjenester</em></a>
<nav class="nv">
<div class="ni"><a href="#tjenester">Tjenester <span aria-hidden="true">&#9662;</span></a>
<div class="sub"><div class="subin">
<a href="#fasadevask-rengjoring">Fasadevask og utvendig rengjøring</a>
<a href="#handverk">Håndverk — mur, tak, maling</a>
<a href="#vinter-sikring">Vinter og sikring</a>
<a href="#renhold">Løpende renhold</a>
<a class="all" href="#tjenester">Se alle tjenester &rarr;</a>
</div></div></div>
<a href="#arshjul">Årshjulet</a>
<a href="#resultater">Før og etter</a>
<div class="ni"><a href="/verdt-a-vite">Verdt å vite <span aria-hidden="true">&#9662;</span></a>
<div class="sub"><div class="subin">
<a href="/verdt-a-vite/fasadevask">Fasadevask: pris, metode og intervall</a>
<a href="/verdt-a-vite/takrenner">Takrennerens: hva løv koster deg</a>
<a href="/verdt-a-vite/istapper">Istapper: styrets ansvar</a>
<a class="all" href="/verdt-a-vite">Alle artikler &rarr;</a>
</div></div></div>
<a href="#om">Om oss</a>
<a href="#omrader">Områder</a>
</nav>
<button class="hb" id="hbBtn" aria-expanded="false" aria-controls="mm">Meny</button>
<a class="tel" href="tel:+4792979177">929 79 177</a>
<a class="btn bs1" href="#befaring"><span class="cl1">Gratis befaring</span><span class="cs1">Befaring</span></a></div></header>
<div class="mm" id="mm">
<h5>Tjenester</h5>
<a href="#fasadevask-rengjoring">Fasadevask og utvendig rengjøring</a>
<a href="#handverk">Håndverk — mur, tak, maling</a>
<a href="#vinter-sikring">Vinter og sikring</a>
<a href="#renhold">Løpende renhold</a>
<h5>Selskapet</h5>
<a href="#arshjul">Årshjulet</a>
<a href="#resultater">Før og etter</a>
<a href="/verdt-a-vite">Verdt å vite</a>
<a href="/verdt-a-vite/takrenner">Takrennerens</a>
<a href="/verdt-a-vite/istapper">Istapper og takras</a>
<a href="#om">Om oss</a>
<a href="#omrader">Områder</a>
<h5>Kontakt</h5>
<a href="tel:+4792979177">929 79 177</a>
<a href="#befaring" style="color:var(--hiviz)">Bestill gratis befaring &rarr;</a>
</div>

<div class="hero"><div class="hbg">
<video autoplay muted loop playsinline preload="auto" poster="/img/hero-video-poster.webp" id="heroVideo" src="/banner.mp4"></video>
<img src="/img/hero.webp" alt="Fasadetjenester AS — banner på stillas i Oslo" id="heroFallback"></div>
<div class="hin"><div class="wrap">
<p class="ey" style="color:var(--hiviz)">Gratis befaring — hele året</p>
<h1>Fasadevask.<br><span style="color:rgba(255,255,255,.82)">Og alt det andre bygget trenger.</span></h1>
<p class="hsub">Vi vasker fasaden — og siden vi først er der, sjekker vi gjerne tak, takrenner og mur i samme runde. Helt uforpliktende: du får vite hva bygget trenger, og velger selv om noe mer skal gjøres. Og velger du mer, kommer alt på ett tilbud og én faktura.</p>
<div class="hcta"><a class="btn bs1" href="#befaring">Bestill gratis befaring</a><a class="btn bg1" href="#arshjul">Se årshjulet</a></div>
<div class="nb"><div><span class="dot"></span><b id="nowLabel">Aktuelt nå</b></div>
<div class="np"><span id="nowSvc">Forvaltning og vedlikehold · Beslag · Bygningsvedlikehold</span> <span style="color:var(--hiviz)">· Fasadevask — hele året</span></div>
<a href="#arshjul" id="nowNext">Neste sesong →</a></div>
</div></div></div>

<div class="strip"><div class="wrap"><ul>
<li>Næringsbygg, sameier og borettslag</li><li>Offentlig godkjent renholdsbedrift</li>
<li>Hele Sørøst-Norge, inkludert Gjøvikregionen</li><li>Miljøfyrtårn-sertifisert</li></ul></div></div>

<section class="kb"><div class="wrap kbw">
<div><p class="kbk">Kontakt oss i dag</p><a class="kbtel" href="tel:+4792979177">929 79 177</a></div>
<div class="kbact"><a class="btn bs1" href="#befaring">Bestill gratis befaring</a><a class="btn bg1" href="mailto:terje@fasadetjenester.no">Send e-post</a></div>
</div></section>

<section class="dk" id="arshjul"><div class="wrap">
<div class="nar rv"><p class="ey">Årshjulet</p>
<h2 class="h2">Et bygg trenger noe hver eneste måned.<br>Vi vet hva — og når.</h2>
<p style="font-size:19px;color:rgba(228,233,239,.74);margin-top:20px">Vi jobber etter et årshjul, så du slipper å huske det selv: vi tar kontakt når sesongen krever noe av bygget ditt. Klikk i hjulet for å se hva som gjelder når.</p></div>
<div class="wg rv"><div>
<svg class="wheel" viewBox="-22 -22 464 464" xmlns="http://www.w3.org/2000/svg" aria-label="Årstidshjulet">
<circle class="rim" cx="210" cy="210" r="198"/><g class="seg" data-season="vinter" role="button" tabindex="0" aria-label="Vinter"><path class="sf" d="M83.4 75.1 A185 185 0 0 1 336.6 75.1 L286.7 128.4 A112 112 0 0 0 133.3 128.4 Z"/><text class="sl" x="210.0" y="67.5">Vinter</text></g><g class="seg" data-season="var" role="button" tabindex="0" aria-label="Vår"><path class="sf" d="M344.9 83.4 A185 185 0 0 1 344.9 336.6 L291.6 286.7 A112 112 0 0 0 291.6 133.3 Z"/><text class="sl" x="358.5" y="216.0">Vår</text></g><g class="seg" data-season="sommer" role="button" tabindex="0" aria-label="Sommer"><path class="sf" d="M336.6 344.9 A185 185 0 0 1 83.4 344.9 L133.3 291.6 A112 112 0 0 0 286.7 291.6 Z"/><text class="sl" x="210.0" y="364.5">Sommer</text></g><g class="seg" data-season="host" role="button" tabindex="0" aria-label="Høst"><path class="sf" d="M75.1 336.6 A185 185 0 0 1 75.1 83.4 L128.4 133.3 A112 112 0 0 0 128.4 286.7 Z"/><text class="sl" x="61.5" y="216.0">Høst</text></g><text class="mo" data-mon="0" x="210.0" y="7.0">jan</text><text class="mo" data-mon="1" x="313.5" y="34.7">feb</text><text class="mo" data-mon="2" x="389.3" y="110.5">mar</text><text class="mo" data-mon="3" x="417.0" y="214.0">apr</text><text class="mo" data-mon="4" x="389.3" y="317.5">mai</text><text class="mo" data-mon="5" x="313.5" y="393.3">jun</text><text class="mo" data-mon="6" x="210.0" y="421.0">jul</text><text class="mo" data-mon="7" x="106.5" y="393.3">aug</text><text class="mo" data-mon="8" x="30.7" y="317.5">sep</text><text class="mo" data-mon="9" x="3.0" y="214.0">okt</text><text class="mo" data-mon="10" x="30.7" y="110.5">nov</text><text class="mo" data-mon="11" x="106.5" y="34.7">des</text>
<circle class="hub" cx="210" cy="210" r="96"/>
<text class="hk" x="210" y="192">NÅ</text><text class="hs" x="210" y="222" id="hubS">Sommer</text><text class="hm" x="210" y="248" id="hubM">juli</text>
</svg></div><div><div class="sp" data-panel="host" hidden><p class="spk">september – november</p><h3 class="spt">Høst</h3><p class="spl">Løvet fyller rennene, og vannet finner nye veier inn i bygget. Er du tidlig ute, slipper du frostskadene i januar.</p><ul class="spu"><li>Takrennerens</li><li>Reparasjon av tak og takrenner</li><li>Løvblåsing og løvfjerning</li></ul><a class="btn bl" href="#befaring">Book befaring for høsten <span aria-hidden="true">→</span></a></div><div class="sp" data-panel="vinter" hidden><p class="spk">desember – februar</p><h3 class="spt">Vinter</h3><p class="spl">Istapper over inngangspartiet er byggeiers ansvar. Vi rydder, sikrer og strør — før noen kommer til skade.</p><ul class="spu"><li>Istappfjerning</li><li>Snørydding</li><li>Salting og strøing</li><li>Rasfare-skilting av bygårder</li></ul><a class="btn bl" href="#befaring">Book befaring for vinteren <span aria-hidden="true">→</span></a></div><div class="sp" data-panel="var" hidden><p class="spk">mars – mai</p><h3 class="spt">Vår</h3><p class="spl">Vinteren setter spor på fasaden. Vask ned, mal opp og få utearealene i stand før sesongen starter.</p><ul class="spu"><li>Fasadevask</li><li>Maling</li><li>Utearealer</li></ul><a class="btn bl" href="#befaring">Book befaring for våren <span aria-hidden="true">→</span></a></div><div class="sp" data-panel="sommer" hidden><p class="spk">juni – august</p><h3 class="spt">Sommer</h3><p class="spl">Tørt vær og lange dager. Den beste tiden for det planlagte vedlikeholdet — det som ellers blir utsatt år etter år.</p><ul class="spu"><li>Forvaltning og vedlikehold av bygg</li><li>Beslag</li><li>Løpende bygningsvedlikehold</li></ul><a class="btn bl" href="#befaring">Book befaring for sommeren <span aria-hidden="true">→</span></a></div></div></div></div></section>

<section id="alt-i-ett"><div class="wrap">
<div class="nar rv"><p class="ey">Alt i ett selskap</p>
<h2 class="h2">Én befaring. Ett tilbud. Én faktura.</h2>
<p style="font-size:18.5px;color:var(--steind);margin-top:18px">De fleste bygg trenger flere ting samtidig. Når vi først er på plass, tar vi alt i samme runde — i stedet for at du skal hente inn tre leverandører og koordinere dem selv. Huk av det du tror bygget ditt trenger:</p></div>
<div class="pg rv"><div class="pl"><label class="pk"><input type="checkbox" value="Fasadevask"><span>Fasadevask</span></label><label class="pk"><input type="checkbox" value="Vindusvask"><span>Vindusvask</span></label><label class="pk"><input type="checkbox" value="Grafittifjerning"><span>Grafittifjerning</span></label><label class="pk"><input type="checkbox" value="Takrennerens"><span>Takrennerens</span></label><label class="pk"><input type="checkbox" value="Takreparasjon"><span>Takreparasjon</span></label><label class="pk"><input type="checkbox" value="Murreparasjon"><span>Murreparasjon</span></label><label class="pk"><input type="checkbox" value="Beslag"><span>Beslag</span></label><label class="pk"><input type="checkbox" value="Maling"><span>Maling</span></label><label class="pk"><input type="checkbox" value="Snørydding"><span>Snørydding</span></label><label class="pk"><input type="checkbox" value="Istappfjerning"><span>Istappfjerning</span></label><label class="pk"><input type="checkbox" value="Daglig renhold"><span>Daglig renhold</span></label></div>
<div class="ty"><div class="tr"><span>Tjenester valgt</span><b id="tS">0</b></div>
<div class="tr"><span>Leverandører ellers</span><b id="tL">0</b></div>
<div class="tr ac"><span>Befaringer hos oss</span><b id="tB">0</b></div>
<p class="tn" id="tN">Velg tjenestene ved siden av, så ser du forskjellen.</p>
<a class="btn bs1" href="#befaring" id="pickGo">Ta med i befaringen</a></div></div></div></section>

<section class="pa" id="tjenester"><div class="wrap">
<div class="nar rv"><p class="ey">Tjenester</p><h2 class="h2">Fire områder. Én leverandør.</h2>
<p style="font-size:18.5px;color:var(--steind);margin-top:18px">Hvert område får sin egen side med undertjenester, priseksempler og bilder fra faktiske jobber — slik at et søk på «lekkasje tak» eller «grafittifjerning Oslo» lander riktig med én gang.</p></div>
<div class="cats rv"><article class="cat" id="fasadevask-rengjoring"><div class="cm"><img src="/img/c_fasade.webp" alt="Fasadevask og utvendig rengjøring" loading="lazy"></div><div class="cb"><p class="cn">01</p><h3 class="ct">Fasadevask og utvendig rengjøring</h3><p class="cl">Hele det utvendige, fra rekkverk til gesims. Softwash der overflaten er sårbar, høytrykk der den tåler det.</p><ul class="cs"><li>Fasadevask</li><li>Vindusvask</li><li>Grafittifjerning</li><li>Garasjevask</li><li>Softwash</li><li>Høytrykksvask</li><li>Algevask og mosevask</li><li>Utvendig rengjøring av næringsbygg</li></ul><a class="la" href="#befaring">Be om pris <span aria-hidden="true">→</span></a></div></article><article class="cat" id="handverk"><div class="cm"><img src="/img/c_handverk.webp" alt="Håndverk" loading="lazy"></div><div class="cb"><p class="cn">02</p><h3 class="ct">Håndverk</h3><p class="cl">Mur, betong, tak, beslag og snekker. Ser vi skadet puss eller rusten armering under befaringen, kan vi ta det selv — uten å hente inn noen andre.</p>
<p class="cl" style="margin-top:-6px">Tak- og metallarbeid dekker både blikkenslager- og kobberslagerfaget: beslag, pipebeslag, takrenner og nedløp, taktekking og fasadeelementer i stål, sink og aluminium — og de tynnere kobberarbeidene på eldre bygg, fra takdetaljer til tårnspir. Gammel metalltradisjon møter moderne byggteknikk, og på bygårder er det ofte nettopp dette arbeidet som avgjør om taket holder tett i tiår.</p><ul class="cs"><li>Murreparasjon og betongrehabilitering</li><li>Fasademaling</li><li>Taktekking og takreparasjon</li><li>Lekkasje i tak</li><li>Blikkenslagerarbeid</li><li>Kobberslagerarbeid</li><li>Beslag og pipebeslag</li><li>Snekkerarbeid</li><li>Levegg</li><li>Tilstandsrapport</li></ul><a class="la" href="#befaring">Be om pris <span aria-hidden="true">→</span></a></div></article><article class="cat" id="vinter-sikring"><div class="cm"><img src="/img/c_vinter.webp" alt="Vinter og sikring" loading="lazy"></div><div class="cb"><p class="cn">03</p><h3 class="ct">Vinter og sikring</h3><p class="cl">Fra første frost til siste tine. Med fast avtale er vi der før dere rekker å ringe.</p><ul class="cs"><li>Istappfjerning</li><li>Snørydding av tak</li><li>Salting og strøing</li><li>Issikring</li><li>Vintervedlikehold</li><li>Rasfare- og istappskilt</li></ul><a class="la" href="#befaring">Be om pris <span aria-hidden="true">→</span></a></div></article><article class="cat" id="renhold"><div class="cm"><img src="/img/c_renhold.webp" alt="Løpende renhold" loading="lazy"></div><div class="cb"><p class="cn">04</p><h3 class="ct">Løpende renhold</h3><p class="cl">Daglig og fast renhold av nærings- og kontorbygg. Offentlig godkjent renholdsbedrift — og samme kontaktperson som for alt det andre.</p><ul class="cs"><li>Daglig renhold</li><li>Kontorrenhold</li><li>Renholdsavtale</li><li>Trappevask</li></ul><a class="la" href="#befaring">Be om pris <span aria-hidden="true">→</span></a></div></article></div></div></section>

<section class="dk" id="resultater"><div class="wrap">
<div class="nar rv"><p class="ey">Før og etter</p><h2 class="h2">Dra i linja og se forskjellen.</h2>
<p style="font-size:18.5px;color:rgba(228,233,239,.74);margin-top:18px">Bildene under er fra våre egne oppdrag. Ingen illustrasjonsfoto.</p></div>
<div class="bar rv">
<figure class="ba" data-ba><div class="bs"><img class="bi" src="/img/ba_graf_for.webp" alt="Tagging på pusset fasade"><div class="bat"><img class="bi" src="/img/ba_graf_etter.webp" alt="Samme fasade etter grafittifjerning"></div><span class="bt btf">Før</span><span class="bt bte">Etter</span><div class="bh" aria-hidden="true"><span></span></div><input class="br" type="range" min="0" max="100" value="50" step="0.1" aria-label="Dra for å avdekke etter-bildet: Grafittifjerning"></div><figcaption><strong>Grafittifjerning</strong> Sinsen. Tagging fjernet uten å skade pussen.</figcaption></figure>
<figure class="ba" data-ba><div class="bs"><img class="bi" src="/img/ba_tak_for.webp" alt="Tak med mose og begroing"><div class="bat"><img class="bi" src="/img/ba_tak_etter.webp" alt="Tak etter rens"></div><span class="bt btf">Før</span><span class="bt bte">Etter</span><div class="bh" aria-hidden="true"><span></span></div><input class="br" type="range" min="0" max="100" value="50" step="0.1" aria-label="Dra for å avdekke etter-bildet: Takvask"></div><figcaption><strong>Takvask</strong> Mose og begroing fjernet fra taket.</figcaption></figure>
<figure class="ba" data-ba><div class="bs"><img class="bi" src="/img/ba_fas_for.webp" alt="Fasade med algebelegg"><div class="bat"><img class="bi" src="/img/ba_fas_etter.webp" alt="Fasade etter vask"></div><span class="bt btf">Før</span><span class="bt bte">Etter</span><div class="bh" aria-hidden="true"><span></span></div><input class="br" type="range" min="0" max="100" value="50" step="0.1" aria-label="Dra for å avdekke etter-bildet: Fasadevask"></div><figcaption><strong>Fasadevask</strong> Alger og grønske vasket bort med softwash.</figcaption></figure>
</div>
<p style="margin-top:34px;font-size:14.5px;color:rgba(228,233,239,.5)" class="rv">Slideren settes opp for hver tjenestekategori der det finnes egnet bildemateriale.</p></div></section>

<section id="prosess"><div class="wrap">
<div class="nar rv"><p class="ey">Slik jobber vi</p><h2 class="h2">Tre steg. Ingen overraskelser.</h2></div>
<div class="stp rv">
<div class="st1"><p class="sn">1</p><h3>Befaring</h3><p>Vi kommer ut, går gjennom hele bygget og noterer alt som bør gjøres — ikke bare det du ringte om. Befaringen er gratis og uforpliktende.</p></div>
<div class="st1"><p class="sn">2</p><h3>Tilbud</h3><p>Du får ett samlet tilbud med fast pris per tjeneste, så du selv kan velge hva som tas nå og hva som kan vente til neste sesong.</p></div>
<div class="st1"><p class="sn">3</p><h3>Utført jobb</h3><p>Vi gjør jobben til avtalt tid og pris, dokumenterer med før- og etterbilder, og tar kontakt igjen når neste sesong nærmer seg.</p></div>
</div></div></section>

<section class="pa" id="om"><div class="wrap om rv">
<div><img src="/img/terje.webp" alt="Terje Gulliksen, daglig leder i Fasadetjenester AS"></div>
<div><p class="ey">Om oss</p>
<blockquote class="oq">«Jeg er på befaringene selv. Da vet du hvem du har snakket med når vi først er i gang.»</blockquote>
<p style="color:var(--steind);max-width:46ch">Fasadetjenester er et lite firma med korte linjer. Du får samme kontaktperson gjennom hele jobben — og gjennom hele året. Rådene og artiklene her på siden er skrevet av oss som faktisk gjør arbeidet.</p>
<div class="os"><i></i><div><strong>Terje Gulliksen</strong><br><span style="color:var(--steind)">Daglig leder, Fasadetjenester AS</span></div></div>
<div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:26px"><div class="badge" style="margin-top:0"><i></i>Offentlig godkjent renholdsbedrift</div><div class="badge" style="margin-top:0"><i></i>Miljøfyrtårn-sertifisert</div></div>
<p style="color:var(--steind);margin-top:22px;font-size:15px;max-width:46ch">På laget står også Steinar — drift og vakttelefon — og faste, kvalitetssikrede underleverandører.</p>
<p style="margin-top:18px"><a class="la" href="#">Møt hele teamet <span aria-hidden="true">→</span></a></p></div></div></section>

<section id="hms"><div class="wrap">
<div class="nar rv"><p class="ey">Trygghet og ansvar</p><h2 class="h2">Papirene i orden — før vi rigger.</h2>
<p style="font-size:18.5px;color:var(--steind);margin-top:18px">Arbeid i høyden og langs fortau handler om mer enn utstyr. Vi tar det formelle like alvorlig som det praktiske — det er ofte der forskjellen på leverandører faktisk ligger.</p></div>
<div class="hmsg rv">
<div class="hmsc"><h3>HMS og påseplikt</h3><p>Dokumentert HMS på hvert oppdrag. Vi kjenner byggherrens påseplikt, og leverer papirene uoppfordret — styret slipper å etterspørre dem.</p></div>
<div class="hmsc"><h3>Søknader og varsling</h3><p>Arbeidsvarsling, leie av gategrunn og øvrige søknader — blant annet mot Bymiljøetaten i Oslo — håndterer vi før arbeidet starter.</p></div>
<div class="hmsc"><h3>Sikring og sperring</h3><p>Sikrings- og sperretjenester med skilting av fortau og inngangspartier. Vi leverer også rasfare- og istappskilt til bygårder — like gode som konkurrentenes, til lavere pris.</p></div>
<div class="hmsc"><h3>Vernestatus sjekkes alltid</h3><p>Før vi velger metode sjekker vi eiendommens vernestatus, slik at verneverdige fasader behandles riktig fra første vask.</p></div>
</div>
<p class="rv" style="margin-top:30px;font-size:16px"><strong style="font-family:var(--d)">Akutt behov?</strong> Vi har døgnvakt. Ring <a href="tel:+4792979177" style="color:inherit;font-weight:600">929 79 177</a>, så kobler vi deg videre til vakthavende.</p>
</div></section>

<section class="dk" id="omrader"><div class="wrap">
<div class="nar rv"><p class="ey">Områder</p><h2 class="h2">Vi rykker ut over hele Østlandet.</h2>
<p style="font-size:18.5px;color:rgba(228,233,239,.74);margin-top:18px">Kjerneområdet er Oslo og Akershus. Utenfor det kjører vi fast på oppdrag av en viss størrelse — ta kontakt, så sier vi ærlig fra om vi er riktig leverandør for dere.</p></div>
<div class="omr rv">
<div class="oc core"><h3>Kjerneområde: Oslo og Akershus</h3><p>Her er vi ofte i nærheten allerede, og kan som regel stille på befaring samme uke.</p>
<ul class="ol"><li>Oslo</li><li>Lillestrøm</li><li>Bærum</li><li>Asker</li><li>Ullensaker</li><li>Lørenskog</li><li>Ski</li><li>Sandvika</li></ul></div>
<div class="oc"><h3>Vi dekker også</h3><p>Større oppdrag og faste avtaler i hele Sørøst-Norge — Gjøvikregionen, Innlandet, Østfold og ned til Sørlandet.</p>
<ul class="ol"><li>Hamar</li><li>Gjøvik</li><li>Østfold</li><li>Telemark</li><li>Sørlandet</li><li>Svenskegrensen</li></ul></div></div></div></section>

<section class="pa" id="verdt-a-vite"><div class="wrap">
<div class="nar rv"><p class="ey">Verdt å vite</p><h2 class="h2">Råd fra folk som står i lifta selv.</h2>
<p style="font-size:18.5px;color:var(--steind);margin-top:18px">Korte, ærlige svar på det kundene faktisk spør oss om — skrevet av oss, ikke av et innholdsbyrå.</p></div>
<div class="vvg rv">
<a class="vv" href="/verdt-a-vite/fasadevask"><p class="cn">Fasadevask</p><h3>Fasadevask: pris, metode og hvor ofte bygget bør vaskes</h3><p>Hva koster fasadevask, når lønner softwash seg fremfor høytrykk, og hvorfor grønske er mer enn et kosmetisk problem.</p><span class="la">Les artikkelen <span aria-hidden="true">→</span></span></a>
<a class="vv" href="/verdt-a-vite/takrenner"><p class="cn">Tak og takrenner</p><h3>Hva løv i takrennen faktisk koster deg</h3><p>Overvann på fasaden, fukt i grunnmuren og is om vinteren — og hvorfor oktober er fristen.</p><span class="la">Les artikkelen <span aria-hidden="true">→</span></span></a>
<a class="vv" href="/verdt-a-vite/istapper"><p class="cn">Vinter og sikring</p><h3>Istapper: styrets ansvar — og hva det betyr i praksis</h3><p>Hva politivedtektene krever, hvorfor varselskilt ikke er nok, og hva en beredskapsavtale bør inneholde.</p><span class="la">Les artikkelen <span aria-hidden="true">→</span></span></a>
</div></div></section>

<section id="befaring"><div class="wrap">
<div class="nar rv"><p class="ey">Gratis befaring</p><h2 class="h2">Fortell hvor bygget står, så tar vi resten.</h2>
<p style="font-size:18.5px;color:var(--steind);margin-top:18px">Du trenger ikke vite hva tjenesten heter. Beskriv problemet, så finner vi ut av det på befaringen — og ser samtidig etter alt annet som bør tas mens vi er der. Representerer du et borettslag eller sameie, kan én befaring dekke hele styrets vedlikeholdsliste.</p></div>
<div class="nar" style="margin-top:34px">
<a class="btn bs1" id="tfOpen" href="https://416jbe00upv.typeform.com/to/vKqv5RX5" style="font-size:17px;padding:18px 34px">Bestill gratis befaring</a>
<p style="margin-top:16px;font-size:14px;color:var(--steind)">Åpnes som kort skjema — under to minutter. Uforpliktende, og du velger selv hva som eventuelt gjøres.</p>
</div></div></section>




<section class="kb"><div class="wrap kbw">
<div><p class="kbk">Kontakt oss i dag</p><a class="kbtel" href="tel:+4792979177">929 79 177</a></div>
<div class="kbact"><a class="btn bs1" href="#befaring">Bestill gratis befaring</a><a class="btn bg1" href="mailto:terje@fasadetjenester.no">Send e-post</a></div>
</div></section>

<footer><div class="wrap"><div class="ft">
<div><a class="lg" href="#" style="color:#fff">Fasade<em>tjenester</em></a>
<p style="margin-top:14px;max-width:30ch">Fasadetjenester satt i system. Alt utvendig. Én leverandør.</p></div>
<div><h4>Tjenester</h4><ul><li><a href="#tjenester">Fasadevask</a></li><li><a href="#tjenester">Håndverk</a></li><li><a href="#tjenester">Vinter og sikring</a></li><li><a href="#tjenester">Løpende renhold</a></li></ul></div>
<div><h4>Selskapet</h4><ul><li><a href="#om">Om oss</a></li><li><a href="#arshjul">Årshjulet</a></li><li><a href="#resultater">Før og etter</a></li><li><a href="#omrader">Områder</a></li><li><a href="/verdt-a-vite">Verdt å vite</a></li></ul></div>
<div><h4>Kontakt</h4><ul><li><a href="tel:+4792979177">929 79 177</a></li><li>Mikalsrud 7A, 2069 Jessheim</li><li><a href="#befaring">Gratis befaring</a></li><li><a href="mailto:terje@fasadetjenester.no">terje@fasadetjenester.no</a></li><li>Org.nr. 934 907 035</li></ul></div>
</div><div class="fb"><span>© 2026 Fasadetjenester AS</span><a href="https://moonlandingsite.no" style="color:inherit;text-decoration:none" onmouseover="this.style.color='var(--hiviz)'" onmouseout="this.style.color='inherit'">Nettside av Moonlanding &rarr;</a></div></div></footer>`}}/>
    <Script src="https://embed.typeform.com/next/embed.js" strategy="afterInteractive"/>
    <Script src="/js/index.js" strategy="afterInteractive"/>
  </>)
}
