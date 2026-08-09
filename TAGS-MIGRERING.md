# Tag-inventar fasadetjenester.no → ny side

Sjekkliste for lansering. Tagger som IKKE skal håndkopieres: alt WordPress/Elementor
selv genererer (wp-emoji, tema-CSS/JS, oEmbed, generator) — det lages på nytt av nytt tema.

## Bekreftet på dagens side (hentet 03.08.2026)
- [x] Google Tag Manager: **GTM-KP9PTS6D** — lagt inn i head+body på alle prototypesider
- [x] Meta description (forsiden): "Vi leverer kvalitetstjenester innen fasadevask, grafittifjerning,
      istappfjerning, takrennerens, vindusvask, garasjevask, …" — ny side får egne per side
- Plattform i dag: WordPress 7.0.2, Hello Elementor + child, Elementor Pro

## Må inventeres (krever ny nettleser-dump av full <head>/<body>)
- [ ] Favicon / site icon (kopiér filen, ikke hotlink)
- [ ] google-site-verification (Search Console — MÅ med, ellers mistes GSC-tilgang)
- [ ] Facebook domain verification / andre verifiseringsmetatagger
- [ ] OG-/Twitter-tagger (settes uansett opp på nytt per side)
- [ ] Skript utenfor GTM (cookie-samtykke, chat, heatmap o.l.)
- [ ] Typeform/andre embeds på undersider

## Ved lansering
- [ ] Typeform-avslutningen «takk»: pek redirect tilbake til https://fasadetjenester.no/tusen-takk
      (står midlertidig på vercel.app-adressen til domenet er flippet)
- [ ] FJERN noindex-metaen fra alle sider (merket med kommentar i HTML)
- [ ] GTM: konverteringstrigger på sidevisning /tusen-takk
- [ ] Redirects fra gamle URL-er (egen jobb, jf. strateginotatet)
