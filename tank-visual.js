(function(){
  function init(){
    const box=document.querySelector('.check-example');
    if(!box||document.getElementById('tankVisual')) return;
    const wrap=document.createElement('div');
    wrap.id='tankVisual';
    wrap.className='tank-visual';
    wrap.innerHTML=`
      <div class="tank-visual-title"><span>⛽</span><b>REFERÊNCIA VISUAL</b><small>Nível aproximado do combustível</small></div>
      <div class="tank-drawing">
        <div class="tank-shell">
          <div class="tank-ruler"><i>254</i><i>200</i><i>150</i><i>100</i><i>50</i><i>0</i></div>
          <div class="tank-body"><div class="tank-liquid" id="tankLiquid"><div class="tank-wave"></div></div><div class="tank-highlight"></div></div>
          <div class="tank-cap"></div>
        </div>
        <div class="tank-info"><b id="tankLevelText">Aguardando leitura</b><span id="tankLevelLiters">Informe a régua para visualizar o nível.</span></div>
      </div>`;
    box.insertAdjacentElement('afterend',wrap);

    function update(){
      const model=document.getElementById('model')?.value;
      const input=model==='30000'?document.getElementById('r1'):document.getElementById('ruler');
      const cm=Number(input?.value);
      const liquid=document.getElementById('tankLiquid');
      const level=document.getElementById('tankLevelText');
      const liters=document.getElementById('liters')?.textContent;
      const out=document.getElementById('tankLevelLiters');
      if(!liquid||!level||!out)return;
      if(!Number.isFinite(cm)||cm<0){liquid.style.height='0%';level.textContent='Aguardando leitura';out.textContent='Informe a régua para visualizar o nível.';return;}
      const pct=Math.max(0,Math.min(100,cm/254*100));
      liquid.style.height=pct+'%';
      level.textContent=cm+' cm de altura';
      out.textContent=(liters&&liters!=='—')?('Volume calculado: '+liters+' L'):'Nível visual aproximado no tanque.';
    }
    document.addEventListener('input',e=>{if(e.target?.id==='ruler'||e.target?.id==='r1')setTimeout(update,0)});
    document.addEventListener('click',e=>{if(e.target.closest('.tank-btn')||e.target.closest('.quick-values button'))setTimeout(update,30)});
    setInterval(update,500);
    update();
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
