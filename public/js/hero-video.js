/* Starter bakgrunnsvideoer merket med data-herovideo.
 * Attributter satt via innerHTML setter ikke alltid property-ene, og da
 * blokkerer nettleseren autoplay (samme feil som pa forsiden, jf. commit
 * d97ce78). Vi setter dem eksplisitt og kicker avspilling ved forste
 * interaksjon hvis autoplay avvises. Feiler videoen helt, skjules den —
 * bakgrunnsbildet pa .hbg2 ligger under som fallback. */
(function(){
  [].slice.call(document.querySelectorAll('video[data-herovideo]')).forEach(function(v){
    v.muted=true; v.defaultMuted=true; v.playsInline=true; v.loop=true;
    v.setAttribute('muted','');
    v.addEventListener('error',function(){ v.style.display='none'; },true);
    try{ v.load(); }catch(e){}
    var p=v.play();
    if(p&&p.catch){ p.catch(function(){
      var kick=function(){ v.play().catch(function(){}); document.removeEventListener('click',kick); document.removeEventListener('touchstart',kick); };
      document.addEventListener('click',kick,{once:true});
      document.addEventListener('touchstart',kick,{once:true});
    }); }
  });
})();
