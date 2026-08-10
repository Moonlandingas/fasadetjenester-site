// Meta Pixel — Fasadetjenester, ID 1068289452423773.
// Lastes IKKE for besøkende har trykket "Godta alle". Pixelen har ingen
// cookieløs modus, sa den ma ligge bak samtykke i sin helhet.
// consent.js kaller window.ftLoadMetaPixel() nar samtykke gis.
(function(){
  var PIXEL_ID='1068289452423773', lastet=false;
  window.ftLoadMetaPixel=function(){
    if(lastet||window.fbq) return; lastet=true;
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
    n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
    (window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
    window.fbq('init',PIXEL_ID);
    window.fbq('track','PageView');
  };
  try{ if(localStorage.getItem('ft-consent')==='all'){ window.ftLoadMetaPixel(); } }catch(e){}
})();
