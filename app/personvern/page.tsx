export const metadata = {
  title: 'Personvernerklæring | Fasadetjenester AS',
  description: 'Slik behandler Fasadetjenester AS personopplysninger fra nettsiden, kontaktskjema og oppdrag.',
  alternates: { canonical: '/personvern' },
}

export default function Personvern() {
  return (<>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600&family=Inter+Tight:wght@400;600&display=swap" rel="stylesheet"/>
    <style dangerouslySetInnerHTML={{__html:`
:root{--ink:#0E1826;--navy:#1E3A63;--hiviz:#D8EC3C;--puss:#ECEDE9;--puss2:#DEE0DB;--steind:#59606B;
--d:"Bricolage Grotesque",system-ui,sans-serif;--b:"Inter Tight",system-ui,sans-serif}
*{box-sizing:border-box}body{margin:0;background:#fff;color:var(--ink);font-family:var(--b);font-size:17px;line-height:1.7}
header{background:var(--ink);color:#fff;padding:18px 0}
.hd{display:flex;align-items:center;max-width:1160px;margin:0 auto;padding:0 26px}
.lg{font-family:var(--d);font-weight:700;font-size:19px;text-decoration:none;color:#fff}.lg em{font-style:normal;color:var(--hiviz)}
.btn{margin-left:auto;font-weight:600;font-size:15px;padding:12px 24px;border-radius:100px;text-decoration:none;background:var(--hiviz);color:#161D06}
.wrap{max-width:720px;margin:0 auto;padding:0 26px}
main{padding:60px 0 80px}
h1{font-family:var(--d);font-weight:600;font-size:clamp(32px,5vw,48px);letter-spacing:-.02em;line-height:1.1;margin:0 0 10px}
h2{font-family:var(--d);font-weight:600;font-size:23px;margin:2em 0 .5em}
.ey{font-size:11.5px;font-weight:600;letter-spacing:.19em;text-transform:uppercase;color:var(--navy);margin:0 0 14px}
.upd{color:var(--steind);font-size:14.5px;margin:0 0 30px}
.box{background:var(--puss);border-radius:18px;padding:24px 26px;margin:24px 0}
ul{padding-left:20px}li{margin-bottom:7px}
a{color:var(--navy)}
footer{background:var(--ink);color:#98A2B0;padding:30px 0;font-size:14px;text-align:center}
footer a{color:inherit}
`}}/>
    <header><div className="hd"><a className="lg" href="/">Fasade<em>tjenester</em></a><a className="btn" href="/#befaring">Gratis befaring</a></div></header>
    <main><div className="wrap">
      <p className="ey">Personvern</p>
      <h1>Personvernerklæring</h1>
      <p className="upd">Sist oppdatert: august 2026</p>

      <p>Denne erklæringen forklarer hvordan Fasadetjenester AS samler inn, bruker og beskytter personopplysninger i forbindelse med nettsiden fasadetjenester.no og tjenestene våre.</p>

      <div className="box">
        <strong>Behandlingsansvarlig</strong><br/>
        Fasadetjenester AS · Org.nr. 934 907 035<br/>
        Mikalsrud 7A, 2069 Jessheim<br/>
        Telefon: <a href="tel:+4792979177">929 79 177</a> · E-post: <a href="mailto:terje@fasadetjenester.no">terje@fasadetjenester.no</a><br/>
        Fasadetjenester AS er en del av TG-Renhold Holding AS.
      </div>

      <h2>Hvilke opplysninger vi samler inn</h2>
      <p>Vi samler kun inn det som er nødvendig for å svare på henvendelser og levere tjenestene våre:</p>
      <ul>
        <li>Kontaktopplysninger du selv oppgir i befaringsskjemaet: navn, telefon, e-post, adresse på bygget, eventuelt selskap og rolle</li>
        <li>Beskrivelse av oppdraget og eventuelle bilder du laster opp</li>
        <li>Bruksdata fra nettsiden (se avsnittet om informasjonskapsler)</li>
      </ul>

      <h2>Formål og behandlingsgrunnlag</h2>
      <ul>
        <li><strong>Samtykke:</strong> når du sender inn skjema eller godtar informasjonskapsler for statistikk og markedsføring</li>
        <li><strong>Avtale:</strong> når vi gjennomfører befaring, sender tilbud og utfører oppdrag</li>
        <li><strong>Rettslig forpliktelse:</strong> lagring av bilagsdokumentasjon etter bokføringsreglene</li>
      </ul>

      <h2>Informasjonskapsler (cookies)</h2>
      <p>Nettsiden bruker informasjonskapsler til nødvendig drift, og — dersom du samtykker — til anonym statistikk og markedsføring via Google Tag Manager og tilknyttede Google-tjenester. Statistikk- og markedsføringskapsler settes ikke før du aktivt har godtatt dem. Du kan når som helst endre valget ditt ved å slette informasjonskapslene i nettleseren og laste siden på nytt.</p>

      <h2>Deling av opplysninger</h2>
      <p>Vi selger aldri personopplysninger. Opplysninger deles kun med databehandlere som leverer tjenester til oss — som skjemaløsning, nettsidedrift og analyseverktøy — og alle er underlagt databehandleravtale i tråd med personvernforordningen (GDPR). Ved oppdrag som krever underleverandør, deles kun det som er nødvendig for å utføre arbeidet.</p>

      <h2>Lagringstid</h2>
      <p>Personopplysninger lagres så lenge det er nødvendig for formålet de ble samlet inn for, eller så lenge lovpålagte krav tilsier det. Henvendelser som ikke fører til oppdrag, slettes når de ikke lenger er aktuelle.</p>

      <h2>Dine rettigheter</h2>
      <p>Du har rett til innsyn i egne opplysninger, retting av feil, sletting, begrensning av behandling, dataportabilitet, og til å trekke tilbake et samtykke. Ta kontakt på <a href="mailto:terje@fasadetjenester.no">terje@fasadetjenester.no</a>, så svarer vi så raskt vi kan. Mener du at vi behandler opplysninger i strid med regelverket, kan du klage til Datatilsynet.</p>

      <h2>Endringer</h2>
      <p>Vi kan oppdatere denne erklæringen ved endringer i tjenestene eller regelverket. Gjeldende versjon ligger alltid på denne siden.</p>
    </div></main>
    <footer><div className="wrap">© 2026 Fasadetjenester AS · Org.nr. 934 907 035 · <a href="https://moonlandingsite.no">Nettside av Moonlanding</a></div></footer>
  </>)
}
