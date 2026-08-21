/* Kontaktsporing — telefon og e-post.
 *
 * Lastes globalt fra layout.tsx og fanger klikk på alle tel:- og
 * mailto:-lenker på hele siden, uansett hvilken side de står på.
 *
 * Hvert klikk sendes to steder:
 *   1. dataLayer  -> GTM -> Google Ads-konvertering (krever GTM-oppsett,
 *      se sjekklisten i overleveringen: hendelsene heter
 *      'ring_klikk' og 'epost_klikk')
 *   2. Matomo     -> trackEvent, kategori 'Kontakt'. Lag mål i Matomo som
 *      matcher hendelsen, så telles de som konvertering der også.
 *
 * Lytteren står i capture-fase, så den rekker å fyre før navigasjonen
 * (tel:/mailto: åpner ekstern app og forlater ikke siden i de fleste
 * nettlesere, men capture er robust uansett).
 */
(function () {
  if (window.__sporInit) return
  window.__sporInit = 1

  function dl(o) {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push(o)
  }
  function matomo(kategori, handling, navn) {
    window._paq = window._paq || []
    window._paq.push(['trackEvent', kategori, handling, navn || ''])
  }

  document.addEventListener('click', function (e) {
    var a = e.target && e.target.closest
      ? e.target.closest('a[href^="tel:"], a[href^="mailto:"]')
      : null
    if (!a) return

    var href = a.getAttribute('href') || ''
    if (href.indexOf('tel:') === 0) {
      dl({ event: 'ring_klikk', side: location.pathname })
      matomo('Kontakt', 'Ring', location.pathname)
    } else {
      dl({ event: 'epost_klikk', side: location.pathname })
      matomo('Kontakt', 'E-post', location.pathname)
    }
  }, true)
})()
