# Fasadetjenester.no — designutkast (Moonlanding Rocket Launchpad)

Statisk prototype for redesign av fasadetjenester.no. Utkast 3, august 2026.

- `index.html` — forside (video-hero, årshjul, alt-i-ett-velger, før/etter-slidere, B2B/privat-skjema)
- `fasadevask.html` — SEO-artikkel «Fasadevask» (UTKAST — skal godkjennes av Terje før publisering)
- `img/` — Fasadetjenesters eget bildemateriale, webp-optimalisert

**Video:** erstatt `VIDEO_URL_HER` i index.html med URL-en til dagens fasadevask-video
(høyreklikk videoen på fasadetjenester.no → kopier videoadresse).

Endelig plattform er WordPress (custom-tema); dette repoet er design- og innholdsreferansen.

## Arbeidsflyt (fra august 2026)

Next.js-app med statisk eksport. **Push til `main` = automatisk produksjonsdeploy** via Vercels git-integrasjon — ingen manuelle deploys.

- Utvikling: `npm install && npm run dev`
- Ny artikkel: ny rute under `app/verdt-a-vite/<slug>/page.tsx` + kort i arkivet + menylenke
- Lansering på fasadetjenester.no: sett `LIVE = true` i `lib/site.ts` (åpner robots/sitemap, fjerner noindex) — se `TAGS-MIGRERING.md` og `SEO-PLAN.md`
