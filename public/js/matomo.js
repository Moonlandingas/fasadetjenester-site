// Matomo — moonlandingsite.matomo.cloud, siteId 42.
// requireCookieConsent gjør at sidevisninger telles fra første besøk, men at
// Matomo ikke setter cookies før besøkende trykker "Godta alle" i banneret.
// consent.js kaller setCookieConsentGiven på det klikket.
var _paq = window._paq = window._paq || [];
_paq.push(['requireCookieConsent']);
try{ if(localStorage.getItem('ft-consent')==='all'){ _paq.push(['setCookieConsentGiven']); } }catch(e){}
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function() {
  var u="https://moonlandingsite.matomo.cloud/";
  _paq.push(['setTrackerUrl', u+'matomo.php']);
  _paq.push(['setSiteId', '42']);
  var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
  g.async=true; g.src='https://cdn.matomo.cloud/moonlandingsite.matomo.cloud/matomo.js'; s.parentNode.insertBefore(g,s);
})();
