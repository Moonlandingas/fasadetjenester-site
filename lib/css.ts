// Felles stil for tjeneste- og prissider. Samme designspråk som forsiden.
export const SIDE_CSS = `
:root{--ink:#0E1826;--ink2:#16233A;--navy:#1E3A63;--hiviz:#D8EC3C;--puss:#ECEDE9;
--puss2:#DEE0DB;--paper:#fff;--stein:#8A9099;--steind:#59606B;
--d:"Bricolage Grotesque",system-ui,sans-serif;--b:"Inter Tight",system-ui,sans-serif;--r:16px}
*{box-sizing:border-box}html{scroll-behavior:smooth}
body{margin:0;background:var(--paper);color:var(--ink);font-family:var(--b);font-size:17.5px;line-height:1.66;-webkit-font-smoothing:antialiased}
img{max-width:100%;display:block;border-radius:14px}
a{color:var(--navy)}p{margin:0 0 1em}
h1,h2,h3{font-family:var(--d);font-weight:600;letter-spacing:-.022em;line-height:1.12;margin:0}
h1{font-size:clamp(33px,5.2vw,54px);margin:.36em 0 .44em}
h2{font-size:clamp(25px,3.3vw,35px);margin:1.9em 0 .5em}
h3{font-size:20.5px;margin:1.5em 0 .4em}
.wrap{max-width:760px;margin:0 auto;padding:0 24px}
.wide{max-width:1080px}
header{background:var(--ink);color:#fff;padding:17px 0;position:sticky;top:0;z-index:60}
.hd{display:flex;align-items:center;max-width:1160px;margin:0 auto;padding:0 24px;gap:20px}
.lg{font-family:var(--d);font-weight:700;font-size:19px;text-decoration:none;color:#fff;white-space:nowrap}
.lg em{font-style:normal;color:var(--hiviz)}
.anv{display:flex;gap:20px;margin-left:auto;font-size:14.5px;font-weight:500}
.anv a{color:#fff;text-decoration:none;opacity:.86}.anv a:hover{color:var(--hiviz);opacity:1}
.btn{display:inline-flex;align-items:center;gap:.5em;font-weight:600;font-size:15px;padding:14px 27px;border-radius:100px;text-decoration:none;background:var(--hiviz);color:#161D06;border:1px solid var(--hiviz);cursor:pointer;font-family:var(--b);transition:.16s}
.btn:hover{background:#C6DA23;border-color:#C6DA23}
.btn.bl{background:transparent;color:inherit;border-color:currentColor}
.hd .btn{padding:11px 20px;font-size:14px}
@media(max-width:820px){.anv{display:none}.hd .btn{margin-left:auto}}
.crumb{font-size:13.5px;color:var(--steind);margin-top:32px}.crumb a{color:inherit}
.ey{font-size:11.5px;font-weight:700;letter-spacing:.19em;text-transform:uppercase;color:var(--navy);margin:0 0 4px}
.lede{font-size:20px;color:var(--steind)}
.svar{background:var(--puss);border-left:4px solid var(--hiviz);border-radius:0 14px 14px 0;padding:22px 26px;margin:28px 0;font-size:17px}
.svar b{font-family:var(--d)}
.meta{display:flex;gap:11px;flex-wrap:wrap;align-items:center;margin:24px 0 32px;padding:13px 0;border-top:1px solid var(--puss2);border-bottom:1px solid var(--puss2);font-size:14px;color:var(--steind)}
table{width:100%;border-collapse:collapse;margin:20px 0 24px;font-size:15.5px}
th,td{text-align:left;padding:12px 14px;border-bottom:1px solid var(--puss2);vertical-align:top}
th{font-family:var(--b);font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--steind)}
td.pr{font-family:var(--d);font-weight:600;white-space:nowrap;font-size:17px}
.ex{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin:26px 0 8px}
.exc{background:var(--puss);border:1px solid var(--puss2);border-radius:18px;padding:24px}
.exc h3{margin:0 0 12px;font-size:19px}
.exc ul{list-style:none;padding:0;margin:0 0 16px;font-size:14.5px;color:var(--steind)}
.exc li{padding-left:17px;position:relative;margin-bottom:5px}
.exc li::before{content:"";position:absolute;left:0;top:11px;width:9px;height:2px;background:var(--hiviz)}
.exc .sum{font-family:var(--d);font-size:24px;font-weight:600;letter-spacing:-.02em;line-height:1.15}
.exc .per{font-size:14px;color:var(--navy);font-weight:600;margin-top:5px}
@media(max-width:820px){.ex{grid-template-columns:1fr}}
.fq{border-bottom:1px solid var(--puss2)}
.fq summary{font-family:var(--d);font-weight:600;font-size:18px;padding:17px 0;cursor:pointer;list-style:none;position:relative;padding-right:34px}
.fq summary::-webkit-details-marker{display:none}
.fq summary::after{content:"+";position:absolute;right:4px;top:13px;font-size:24px;color:var(--navy)}
.fq[open] summary::after{content:"–"}
.fq p{margin:0 0 19px;color:var(--steind);font-size:16px}
.bagrid{display:grid;grid-template-columns:1fr 1fr;gap:14px}
figure{margin:32px 0}figcaption{font-size:13.5px;color:var(--steind);margin-top:8px}
.forf{display:grid;grid-template-columns:112px 1fr;gap:22px;align-items:center;background:var(--puss);border-radius:18px;padding:26px;margin:44px 0}
.forf img{border-radius:50%;aspect-ratio:1;object-fit:cover;object-position:top}
.forf p{margin:0;font-size:15px;color:var(--steind)}
.forf b{font-family:var(--d);font-size:17px;color:var(--ink);display:block;margin-bottom:4px}
@media(max-width:640px){.forf{grid-template-columns:1fr}.forf img{width:94px}.bagrid{grid-template-columns:1fr}}
.omtale{border-left:3px solid var(--hiviz);padding:4px 0 4px 20px;margin:22px 0;font-size:16.5px}
.omtale cite{display:block;font-style:normal;font-size:14px;color:var(--steind);margin-top:8px}
.chips{list-style:none;padding:0;margin:18px 0 0;display:flex;flex-wrap:wrap;gap:8px}
.chips li{font-size:14px;padding:7px 14px;background:var(--puss);border:1px solid var(--puss2);border-radius:100px;color:var(--steind)}
footer{background:var(--ink);color:#98A2B0;padding:34px 0;margin-top:64px;font-size:14px;text-align:center}
footer a{color:inherit}
`

// CTA-blokk for befaring. Skjemaet selv ligger i Typeform.
export const SKJEMA_CSS = `
.sk{background:var(--ink);color:#fff;border-radius:20px;padding:38px 40px;margin:40px 0}
.sk h2,.sk h3{color:#fff;margin:0 0 10px}
.sk .skl{color:rgba(255,255,255,.76);font-size:16.5px;margin:0 0 26px;max-width:54ch}
.skb{display:flex;gap:16px;align-items:center;flex-wrap:wrap}
.skb .btn{font-size:16.5px;padding:17px 32px}
.skpunkt{list-style:none;padding:0;margin:0 0 26px;display:flex;flex-wrap:wrap;gap:9px 22px}
.skpunkt li{position:relative;padding-left:19px;font-size:15px;color:rgba(255,255,255,.8)}
.skpunkt li::before{content:"";position:absolute;left:0;top:10px;width:11px;height:2px;background:var(--hiviz)}
.sktlf{margin:22px 0 0;font-size:15.5px;color:rgba(255,255,255,.7)}
.sktlf a{color:var(--hiviz);font-weight:600}
@media(max-width:700px){.sk{padding:26px 22px}}
`

// Hero for tjeneste- og prissider: bilde + gradient, stor tittel, CTA over folden.
export const HERO_CSS = `
.hero2{position:relative;background:var(--ink);color:#fff;overflow:hidden}
.hero2 .hbg2{position:absolute;inset:0;background-size:cover;background-position:center 30%;opacity:.5}
.hero2::after{content:"";position:absolute;inset:0;background:linear-gradient(120deg,rgba(8,14,24,.94) 0%,rgba(8,14,24,.82) 45%,rgba(8,14,24,.55) 100%)}
.hero2 .hin2{position:relative;z-index:2;max-width:1160px;margin:0 auto;padding:64px 24px 54px}
.hero2 .crumb{color:rgba(255,255,255,.55);margin:0 0 26px}.hero2 .crumb a{color:rgba(255,255,255,.55)}
.hero2 .ey{color:var(--hiviz);margin-bottom:14px}
.hero2 h1{font-size:clamp(36px,5.4vw,62px);line-height:1.06;letter-spacing:-.028em;max-width:19ch;margin:0 0 20px;color:#fff;text-shadow:0 2px 24px rgba(0,0,0,.45)}
.hero2 .hsub2{font-size:clamp(17px,2vw,19.5px);color:rgba(255,255,255,.88);max-width:54ch;margin:0 0 30px;text-shadow:0 1px 14px rgba(0,0,0,.4)}
.hcta2{display:flex;gap:14px;flex-wrap:wrap;align-items:center}
.hcta2 .btn{font-size:16.5px;padding:17px 32px}
.hcta2 .btn.ghost{background:transparent;color:#fff;border-color:rgba(255,255,255,.5)}
.hcta2 .btn.ghost:hover{background:#fff;color:var(--ink);border-color:#fff}
.htrust{display:flex;gap:9px 24px;flex-wrap:wrap;list-style:none;padding:0;margin:32px 0 0;border-top:1px solid rgba(255,255,255,.2);padding-top:20px}
.htrust li{position:relative;padding-left:24px;font-size:14.5px;color:rgba(255,255,255,.85);font-weight:500}
.htrust li::before{content:"✓";position:absolute;left:0;top:0;color:var(--hiviz);font-weight:700}
.hstats{display:flex;gap:12px;flex-wrap:wrap;margin:0 0 30px}
.hstat{background:rgba(255,255,255,.09);border:1px solid rgba(255,255,255,.2);border-radius:14px;padding:13px 18px;backdrop-filter:blur(4px)}
.hstat b{font-family:var(--d);font-size:clamp(19px,2.4vw,24px);font-weight:600;display:block;line-height:1.1;color:var(--hiviz)}
.hstat span{font-size:12.5px;color:rgba(255,255,255,.72);display:block;margin-top:3px}
@media(max-width:700px){.hero2 .hin2{padding:44px 22px 40px}.hcta2 .btn{width:100%;justify-content:center}.hstats{gap:8px}.hstat{padding:10px 14px;flex:1 1 40%}}
`
