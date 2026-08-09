
(function(){var TF='vKqv5RX5';
function done(){setTimeout(function(){location.href='/tusen-takk'},900);}
function ready(fn){if(document.readyState!=='loading')fn();else document.addEventListener('DOMContentLoaded',fn);}
ready(function(){
  var btn=document.getElementById('tfOpen');
  if(btn&&window.tf){var p=tf.createPopup(TF,{onSubmit:done});
    btn.addEventListener('click',function(e){e.preventDefault();p.open();});}
  // Velgeren: send valgene inn i skjemaets tjeneste-felt via prefill-URL
  var MAP={'Takreparasjon':'Tak- eller takrennereparasjon','Snørydding':'Snørydding / istappfjerning','Istappfjerning':'Snørydding / istappfjerning'};
  var go=document.getElementById('pickGo');
  if(go){go.addEventListener('click',function(e){
    var v=[].slice.call(document.querySelectorAll('.pk input:checked')).map(function(b){return MAP[b.value]||b.value;});
    v=v.filter(function(x,i){return v.indexOf(x)===i;});
    if(v.length){e.preventDefault();
      location.href='https://416jbe00upv.typeform.com/to/vKqv5RX5#tjenester='+encodeURIComponent(v.join(','));}
    // ingen valg: la ankeret scrolle til befaring-knappen som normalt
  });}
});})();


(function(){
var S={vinter:{n:'Vinter',s:'Istappfjerning · Snørydding · Salting og strøing',m:[11,0,1]},
var:{n:'Vår',s:'Fasadevask · Maling · Utearealer',m:[2,3,4]},
sommer:{n:'Sommer',s:'Forvaltning og vedlikehold · Beslag · Bygningsvedlikehold',m:[5,6,7]},
host:{n:'Høst',s:'Takrennerens · Reparasjon tak og takrenner · Løvfjerning',m:[8,9,10]}};
var O=['vinter','var','sommer','host'];
var M=['januar','februar','mars','april','mai','juni','juli','august','september','oktober','november','desember'];
var now=new Date(),mi=now.getMonth();
function so(x){for(var k in S)if(S[k].m.indexOf(x)>-1)return k;return 'sommer';}
var cur=so(mi),nxt=so((S[cur].m[2]+1)%12),e;
if(e=document.getElementById('heroSeason'))e.textContent=M[mi]+' · '+S[cur].n.toLowerCase()+' · ett selskap hele året';
if(e=document.getElementById('nowLabel'))e.textContent='Aktuelt i '+M[mi];
if(e=document.getElementById('nowSvc'))e.textContent=S[cur].s;
var lm=S[cur].m[2],yy=now.getFullYear()+(lm<mi?1:0);
var dd=Math.max(0,Math.round((new Date(yy,lm+1,1)-now)/864e5));
if(e=document.getElementById('nowNext'))e.textContent='Om '+dd+' dager: '+S[nxt].n.toLowerCase()+' →';
var sg=[].slice.call(document.querySelectorAll('.seg')),pl=[].slice.call(document.querySelectorAll('.sp')),
hS=document.getElementById('hubS'),hM=document.getElementById('hubM');
function sel(k){sg.forEach(function(x){x.classList.toggle('on',x.dataset.season===k);});
pl.forEach(function(p){var on=p.dataset.panel===k;p.hidden=!on;if(on){p.style.animation='none';void p.offsetWidth;p.style.animation='';}});
hS.textContent=S[k].n;hM.textContent=k===cur?M[mi]:S[k].m.map(function(i){return M[i].slice(0,3);}).join(' · ');}
sg.forEach(function(x){x.addEventListener('click',function(){sel(x.dataset.season);});
x.addEventListener('keydown',function(ev){if(ev.key==='Enter'||ev.key===' '){ev.preventDefault();sel(x.dataset.season);}
if(ev.key==='ArrowRight'||ev.key==='ArrowLeft'){ev.preventDefault();var i=O.indexOf(x.dataset.season)+(ev.key==='ArrowRight'?1:-1);var k=O[(i+4)%4];sel(k);var t=document.querySelector('.seg[data-season="'+k+'"]');if(t)t.focus();}});});
[].forEach.call(document.querySelectorAll('.mo'),function(t){if(+t.dataset.mon===mi)t.classList.add('now');});
sel(cur);
[].forEach.call(document.querySelectorAll('[data-ba]'),function(f){
var st=f.querySelector('.bs'),af=f.querySelector('.bat'),hd=f.querySelector('.bh'),rg=f.querySelector('.br'),dn=false;
function set(v){v=Math.max(0,Math.min(100,v));af.style.clipPath='inset(0 0 0 '+v+'%)';hd.style.left=v+'%';}
rg.addEventListener('input',function(){set(+rg.value);});
function fe(ev){var r=st.getBoundingClientRect(),v=(ev.clientX-r.left)/r.width*100;rg.value=v;set(v);}
st.addEventListener('pointerdown',function(ev){dn=true;st.setPointerCapture(ev.pointerId);fe(ev);});
st.addEventListener('pointermove',function(ev){if(dn)fe(ev);});
st.addEventListener('pointerup',function(){dn=false;});st.addEventListener('pointercancel',function(){dn=false;});
set(50);});
var bx=[].slice.call(document.querySelectorAll('.pk input')),
tS=document.getElementById('tS'),tL=document.getElementById('tL'),tB=document.getElementById('tB'),
tN=document.getElementById('tN'),pe=document.getElementById('pe'),pel=document.getElementById('pel');
function ta(){var s=bx.filter(function(b){return b.checked;}),n=s.length;
tS.textContent=n;tL.textContent=n;tB.textContent=n?1:0;
tN.textContent=n===0?'Velg tjenestene ved siden av, så ser du forskjellen.':(n===1?'Én tjeneste — og vi ser samtidig etter alt annet som bør tas mens vi er der.':n+' tjenester som ellers ville krevd '+n+' leverandører og '+n+' fakturaer. Hos oss: én befaring — og valgene dine følger med inn i skjemaet.');
if(pe){pe.hidden=n===0;pel.innerHTML=s.map(function(b){return '<span style="display:inline-block;padding:8px 14px;background:var(--ink);color:#fff;border-radius:100px;font-size:14px">'+b.value+'</span>';}).join('');}}
bx.forEach(function(b){b.addEventListener('change',ta);});ta();
var fg=document.querySelector('#befaring .fg');
[].forEach.call(document.querySelectorAll('input[name=ktype]'),function(r){
r.addEventListener('change',function(){fg.classList.toggle('privat',r.value==='privat'&&r.checked);});});
var hv=document.getElementById('heroVideo'),hf=document.getElementById('heroFallback');
if(hv){if(hv.querySelector('source').src.indexOf('VIDEO_URL')>-1){hv.remove();}
else{hv.addEventListener('playing',function(){if(hf)hf.style.visibility='hidden';});
hv.addEventListener('error',function(){hv.remove();},true);}}
var hdr=document.getElementById('hdr');
var thc=document.getElementById('thc');function os(){var on=window.scrollY>70;hdr.classList.toggle('st',on);if(thc)thc.setAttribute('content',on?'#ffffff':'#0E1826');}
window.addEventListener('scroll',os,{passive:true});os();
var rv=[].slice.call(document.querySelectorAll('.rv'));
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target);}});},{rootMargin:'0px 0px -8% 0px',threshold:.06});
rv.forEach(function(n){io.observe(n);});}else rv.forEach(function(n){n.classList.add('in');});
var hbB=document.getElementById('hbBtn'),mmE=document.getElementById('mm');
if(hbB){hbB.addEventListener('click',function(){var o=mmE.classList.toggle('open');
hbB.setAttribute('aria-expanded',o);document.body.classList.toggle('lock',o);
hdr.classList.toggle('open',o);hbB.textContent=o?'Lukk':'Meny';});
[].forEach.call(mmE.querySelectorAll('a'),function(a){a.addEventListener('click',function(){
mmE.classList.remove('open');document.body.classList.remove('lock');hdr.classList.remove('open');
hbB.setAttribute('aria-expanded','false');hbB.textContent='Meny';});});}
var bf=document.querySelector('#befaring form');
if(bf){bf.addEventListener('submit',function(ev){ev.preventDefault();
var r=document.getElementById('ffRow');
r.innerHTML='<div style="background:var(--hiviz);color:#161D06;border-radius:14px;padding:18px 24px;font-weight:600;font-family:var(--d);font-size:17px">Takk! Vi ringer deg i l&oslash;pet av dagen. (Prototype: p&aring; den ferdige siden sendes dette til e-post/CRM.)</div>';});}
})();
