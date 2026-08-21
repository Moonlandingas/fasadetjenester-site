/* Typeform-popup + konverteringssporing.
 *
 * Binder alle elementer med [data-tf-open] til å åpne befaringsskjemaet som
 * popup. Ved innsending pushes 'befaring_skjema' til dataLayer FØR vi sender
 * brukeren til /tusen-takk, slik at GTM og Google Ads rekker å telle
 * konverteringen selv om redirecten skulle feile.
 *
 * Tjenestevelgeren på forsiden sendes med som forhåndsutfylling.
 */
(function () {
  var TF = 'vKqv5RX5'

  function dl(kilde) {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({ event: 'befaring_skjema', skjema_kilde: kilde || 'ukjent' })
    // Speil til Matomo, saa skjema-leads telles der ogsaa.
    window._paq = window._paq || []
    window._paq.push(['trackEvent', 'Lead', 'Befaring skjema', kilde || 'ukjent'])
  }

  function valgteTjenester() {
    var v = [].slice.call(document.querySelectorAll('.pk input:checked')).map(function (b) { return b.value })
    var MAP = {
      'Takreparasjon': 'Tak- eller takrennereparasjon',
      'Snørydding': 'Snørydding / istappfjerning',
      'Istappfjerning': 'Snørydding / istappfjerning',
    }
    v = v.map(function (x) { return MAP[x] || x })
    return v.filter(function (x, i) { return v.indexOf(x) === i })
  }

  function start() {
    var knapper = [].slice.call(document.querySelectorAll('[data-tf-open]'))
    if (!knapper.length) return

    knapper.forEach(function (b) {
      b.addEventListener('click', function (e) {
        var kilde = b.dataset.tfKilde || 'ukjent'
        var tj = valgteTjenester()

        // MOBIL: ikke bruk popup. Typeforms modal krangler med adressefeltet
        // og virtuelt tastatur på små skjermer — skjemaet blir stående tomt
        // eller henger. Vi sender brukeren rett til skjemaet i stedet.
        //
        // DESKTOP: popup beholdes, der fungerer den fint og brukeren
        // beholder konteksten på siden bak.
        var smal = window.matchMedia && window.matchMedia('(max-width: 820px)').matches

        if (smal || !window.tf || !window.tf.createPopup) {
          // La lenken gå som vanlig navigasjon. Vi rekker å telle
          // klikket først, og legger ved tjenestevalgene i URL-en.
          dl(kilde)
          if (tj.length) {
            e.preventDefault()
            location.href = b.href + '#tjenester=' + encodeURIComponent(tj.join(', '))
          }
          return
        }

        e.preventDefault()
        var opts = { onSubmit: function () { dl(kilde); setTimeout(function () { location.href = '/tusen-takk' }, 600) } }
        if (tj.length) opts.hidden = { tjenester: tj.join(', ') }
        window.tf.createPopup(TF, opts).open()
      })
    })
  }

  if (document.readyState !== 'loading') start()
  else document.addEventListener('DOMContentLoaded', start)
})()
