# SEO/GEO-plan — søkeord → side

## Kartlagt nå
| Søkeord | Side | Status |
|---|---|---|
| fasadevask | /verdt-a-vite/fasadevask + forsiden | Live (noindex til lansering) |
| fasadevask pris | /verdt-a-vite/fasadevask («Hva koster»-seksjon + FAQ-schema) | Live |
| fasadetjenester | forsiden (brand) + LocalBusiness-schema | Live |
| grafittifjerning, takrennerens, istappfjerning | forsiden (chips) → egne artikler etter sesong | Planlagt |

## Neste sider som skal bygges (prioritert)
1. **/fasadevask-oslo** — geo-landingsside Oslo/Akershus (kjerneområdet, jf. strategi:
   én sterk kjerneside, ikke tynne bysider). Egne caser, områdenavn, LocalBusiness areaServed.
2. **/verdt-a-vite/takrennerens** — høstsesongens artikkel (publiseres august/september)
3. **/verdt-a-vite/istapper-styrets-ansvar** — vintersesongen
4. Kategorisider: /fasadevask, /handverk, /vinter-og-sikring, /renhold (etter tjenesteliste fra Terje)

## GEO (AI-søk)
- Direkte svar øverst i artikler, spørsmål som H2, FAQPage/Article/LocalBusiness-schema,
  navngitt forfatter (Terje) — mønsteret fra fasadevask-artikkelen gjenbrukes.

## Teknisk (på plass)
- robots.ts + sitemap.ts styrt av LIVE-bryter i lib/site.ts
- Canonical + OpenGraph per side, LocalBusiness-schema i layout
- Consent Mode v2 (default denied) + cookiebanner før GTM
- VED LANSERING: sett LIVE=true i lib/site.ts (fjerner noindex, åpner robots, aktiverer sitemap)
  + Search Console: verifiser som DOMENE-eiendom via DNS TXT i Domeneshop (overlever alt)
