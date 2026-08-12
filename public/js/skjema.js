/* Innebygd befaringsskjema.
 *
 * Konfigureres via data-attributter på <form class="skjema">:
 *   data-endpoint  — POST-mottaker. Tom streng = fall tilbake på Typeform.
 *   data-typeform  — Typeform-URL som brukes ved fallback.
 *   data-kilde     — hvilken side skjemaet står på (havner i dataLayer + payload).
 *
 * Uansett variant pushes 'befaring_skjema' til dataLayer FØR navigasjon, slik
 * at GTM/Google Ads rekker å telle konverteringen. Takkesiden brukes bare som
 * bekreftelse til brukeren, ikke som eneste konverteringssignal.
 */
(function () {
  function dl(ev, data) {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push(Object.assign({ event: ev }, data || {}))
  }

  function felt(form, navn) {
    return form.querySelector('[name="' + navn + '"]')
  }

  function merk(el, ok) {
    var w = el.closest('.skf')
    if (w) w.classList.toggle('bad', !ok)
    return ok
  }

  function gyldig(form) {
    var ok = true
    var navn = felt(form, 'navn')
    var tlf = felt(form, 'telefon')
    if (navn && !merk(navn, navn.value.trim().length > 1)) ok = false
    // Norsk nummer: 8 siffer, evt. med +47 / 0047 / mellomrom.
    var t = tlf ? tlf.value.replace(/[\s\-()]/g, '').replace(/^(\+47|0047)/, '') : ''
    if (tlf && !merk(tlf, /^\d{8}$/.test(t))) ok = false
    return ok
  }

  function samle(form) {
    var d = {}
    new FormData(form).forEach(function (v, k) {
      if (k === 'firma') return // honeypot
      d[k] = typeof v === 'string' ? v.trim() : v
    })
    return d
  }

  function tilTypeform(base, d) {
    // Typeform tar imot forhåndsutfylling som #felt=verdi.
    var q = Object.keys(d)
      .filter(function (k) { return d[k] })
      .map(function (k) { return k + '=' + encodeURIComponent(d[k]) })
      .join('&')
    return base + (q ? '#' + q : '')
  }

  function init(form) {
    var endpoint = form.dataset.endpoint || ''
    var typeform = form.dataset.typeform || ''
    var kilde = form.dataset.kilde || 'ukjent'
    var knapp = form.querySelector('button[type="submit"]')
    var kvittering = form.parentNode.querySelector('.skok')

    // Fyll inn tjenestevalg fra tjenestevelgeren på forsiden, hvis noe er huket av.
    var tj = felt(form, 'tjenester')
    if (tj) {
      var velger = document.querySelectorAll('.pk input')
      if (velger.length) {
        Array.prototype.forEach.call(velger, function (b) {
          b.addEventListener('change', function () {
            var valgt = Array.prototype.slice
              .call(document.querySelectorAll('.pk input:checked'))
              .map(function (x) { return x.value })
            tj.value = valgt.join(', ')
          })
        })
      }
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault()
      if (form.dataset.sender === '1') return
      if (!gyldig(form)) {
        var f = form.querySelector('.skf.bad input')
        if (f) f.focus()
        return
      }

      var data = samle(form)
      data.kilde = kilde
      data.side = location.pathname

      // FormSubmit-felter: pen emnelinje, svar-til-adressen, og av med captcha
      // (vi har honeypot i stedet, så brukeren slipper et ekstra hinder).
      data._subject = 'Befaring fra nettsiden — ' + (data.navn || 'ukjent') +
        (data.byggtype ? ' (' + data.byggtype + ')' : '')
      data._template = 'table'
      data._captcha = 'false'
      if (form.dataset.kopi) data._cc = form.dataset.kopi

      // Honeypot: fylt ut = bot. Late som alt gikk bra, men ikke send noe.
      if (form.querySelector('[name="firma"]') && form.querySelector('[name="firma"]').value) {
        location.href = '/tusen-takk'
        return
      }

      dl('befaring_skjema', { skjema_kilde: kilde, tjenester: data.tjenester || '' })

      if (!endpoint) {
        // Fallback: send brukeren videre til Typeform med feltene forhåndsutfylt.
        location.href = tilTypeform(typeform, data)
        return
      }

      form.dataset.sender = '1'
      if (knapp) { knapp.dataset.tekst = knapp.textContent; knapp.textContent = 'Sender …' }

      fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })
        .then(function (r) {
          if (!r.ok) throw new Error('HTTP ' + r.status)
          return r.json().catch(function () { return { success: true } })
        })
        .then(function (svar) {
          // FormSubmit svarer 200 med success:"false" ved f.eks. ubekreftet
          // mottakeradresse. Behandle det som feil, ellers mister vi leadet.
          var ok = svar && (svar.success === true || svar.success === 'true' ||
            svar.ok === true || svar.success === undefined)
          if (!ok) throw new Error(svar && svar.message ? svar.message : 'avvist')
          location.href = '/tusen-takk'
        })
        .catch(function () {
          // Mottakeren svarte ikke — ikke mist leadet. Vis kvittering og
          // tilby Typeform som alternativ vei inn.
          form.dataset.sender = ''
          if (knapp) knapp.textContent = knapp.dataset.tekst || 'Send inn'
          if (kvittering) {
            kvittering.classList.add('on')
            kvittering.innerHTML =
              '<b>Vi fikk ikke sendt skjemaet.</b> Ring oss på ' +
              '<a href="tel:+4792979177" style="color:#D8EC3C">929 79 177</a>, ' +
              'eller <a href="' + tilTypeform(typeform, data) + '" style="color:#D8EC3C">' +
              'fyll ut det korte skjemaet her</a> — feltene er allerede fylt inn.'
          }
        })
    })
  }

  function start() {
    Array.prototype.forEach.call(document.querySelectorAll('form.skjema'), init)
  }
  if (document.readyState !== 'loading') start()
  else document.addEventListener('DOMContentLoaded', start)
})()
