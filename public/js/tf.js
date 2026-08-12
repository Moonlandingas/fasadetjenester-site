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

        // Popup krever at embed-skriptet har rukket å laste. Har det ikke
        // det, lar vi lenken gå som vanlig navigasjon i stedet — da mister
        // vi ingen leads om skriptet blokkeres.
        if (!window.tf || !window.tf.createPopup) return

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
