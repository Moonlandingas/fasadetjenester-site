(function(){
try{if(localStorage.getItem('ft-consent'))return;}catch(e){}
var b=document.createElement('div');b.id='ftcb';
b.innerHTML='<div class="ftcb-in"><p><strong>Informasjonskapsler.</strong> Vi bruker cookies til anonym statistikk og markedsføring, så vi kan gjøre siden bedre. <a href="https://fasadetjenester.no/personvern/" target="_blank" rel="noopener">Personvern</a></p><div class="ftcb-btns"><button id="ftcb-ok">Godta alle</button><button id="ftcb-no">Kun nødvendige</button></div></div>';
var st=document.createElement('style');
st.textContent='#ftcb{position:fixed;left:16px;right:16px;bottom:16px;z-index:9999;display:flex;justify-content:center}#ftcb .ftcb-in{background:#0E1826;color:#fff;border-radius:18px;padding:20px 22px;max-width:560px;box-shadow:0 18px 50px rgba(0,0,0,.4);font:15px/1.5 "Inter Tight",system-ui,sans-serif}#ftcb p{margin:0 0 14px}#ftcb a{color:#D8EC3C}#ftcb .ftcb-btns{display:flex;gap:10px;flex-wrap:wrap}#ftcb button{font:600 14.5px "Inter Tight",sans-serif;padding:11px 20px;border-radius:100px;border:0;cursor:pointer}#ftcb-ok{background:#D8EC3C;color:#161D06}#ftcb-no{background:transparent;border:1px solid rgba(255,255,255,.45);color:#fff}';
document.head.appendChild(st);document.body.appendChild(b);
function done(v){try{localStorage.setItem('ft-consent',v);}catch(e){}b.remove();}
document.getElementById('ftcb-ok').addEventListener('click',function(){
window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('consent','update',{ad_storage:'granted',ad_user_data:'granted',ad_personalization:'granted',analytics_storage:'granted'});
done('all');});
document.getElementById('ftcb-no').addEventListener('click',function(){done('necessary');});
})();
