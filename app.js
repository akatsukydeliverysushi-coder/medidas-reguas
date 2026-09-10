const T30={"0":0,"1":13,"2":37,"3":68,"4":104,"5":145,"6":191,"7":274,"8":293,"9":349,"10":408,"11":470,"12":535,"13":603,"14":673,"15":745,"16":820,"17":897,"18":976,"19":1058,"20":1141,"21":1226,"22":1313,"23":1401,"24":1492,"25":1584,"26":1678,"27":1774,"28":1871,"29":1969,"30":2069,"31":2171,"32":2274,"33":2378,"34":2484,"35":2591,"36":2699,"37":2809,"38":2920,"39":3032,"40":3145,"41":3259,"42":3375,"43":3491,"44":3609,"45":3728,"46":3848,"47":3969,"48":4090,"49":4213,"50":4337,"51":4462,"52":4587,"53":4714,"54":4841,"55":4970,"56":5099,"57":5229,"58":5359,"59":5491,"60":5623,"61":5757,"62":5890,"63":6025,"64":6160,"65":6296,"66":6433,"67":6570,"68":6709,"69":6847,"70":6987,"71":7127,"72":7267,"73":7408,"74":7550,"75":7692,"76":7835,"77":7979,"78":8122,"79":8267,"80":8412,"81":8557,"82":8703,"83":8850,"84":8996,"85":9144,"86":9291,"87":9440,"88":9588,"89":9737,"90":9886,"91":10036,"92":10186,"93":10337,"94":10488,"95":10639,"96":10790,"97":10942,"98":11094,"99":11246,"100":11399,"101":11552,"102":11705,"103":11856,"104":12012,"105":12166,"106":12320,"107":12474,"108":12629,"109":12784,"110":12938,"111":13094,"112":13249,"113":13404,"114":13560,"115":13715,"116":13871,"117":14027,"118":14183,"119":14339,"120":14495,"121":14651,"122":14807,"123":14964,"124":15120,"125":15277,"126":15433,"127":15589,"128":15746,"129":15902,"130":16059,"131":16215,"132":16372,"133":16528,"134":16684,"135":16840,"136":16996,"137":17152,"138":17308,"139":17464,"140":17620,"141":17776,"142":17931,"143":18086,"144":18242,"145":18397,"146":18552,"147":18706,"148":18861,"149":19015,"150":19169,"151":19323,"152":19477,"153":19630,"154":19783,"155":19936,"156":20089,"157":20241,"158":20393,"159":20545,"160":20696,"161":20847,"162":20998,"163":21148,"164":21298,"165":21448,"166":21597,"167":21746,"168":21895,"169":22043,"170":22191,"171":22338,"172":22485,"173":22631,"174":22777,"175":22922,"176":23067,"177":23212,"178":23356,"179":23499,"180":23642,"181":23784,"182":23926,"183":24067,"184":24207,"185":24347,"186":24486,"187":24625,"188":24763,"189":24900,"190":25037,"191":25173,"192":25308,"193":25443,"194":25577,"195":25710,"196":25842,"197":25973,"198":26104,"199":26234,"200":26363,"201":26491,"202":26618,"203":26745,"204":26870,"205":26995,"206":27119,"207":27241,"208":27363,"209":27484,"210":27604,"211":27722,"212":27840,"213":27956,"214":28072,"215":28186,"216":28299,"217":28411,"218":28522,"219":28631,"220":28740,"221":28846,"222":28952,"223":29056,"224":29159,"225":29260,"226":29360,"227":29459,"228":29556,"229":29651,"230":29745,"231":29837,"232":29927,"233":30016,"234":30103,"235":30187,"236":30270,"237":30351,"238":30430,"239":30507,"240":30582,"241":30654,"242":30724,"243":30791,"244":30856,"245":30918,"246":30976,"247":31032,"248":31085,"249":31134,"250":31179,"251":31220,"252":31255,"253":31286};
function exact30(x){
  if(!Number.isFinite(x)) return null;
  if(x<0 || x>253) return null;
  const a=Math.floor(x), b=Math.ceil(x);
  if(a===b) return (T30[a] ?? null);
  if(T30[a]===undefined || T30[b]===undefined) return null;
  return T30[a]+(T30[b]-T30[a])*(x-a)/(b-a);
}
function generic(x,cap){
  // Referência operacional para as tabelas resumidas existentes.
  const maps={
    10000:[[1,7],[10,209],[20,582],[30,1052],[40,1590],[50,2181],[60,2812],[70,3473],[80,4153],[90,4846],[100,5543],[110,6236],[120,6918],[130,7581],[140,8215],[150,8811],[160,9355],[170,9833],[180,10217],[190,10451],[191,10458]],
    15000:[[1,10],[10,313],[20,869],[30,1570],[40,2375],[50,3257],[60,4199],[70,5185],[80,6201],[90,7235],[100,8276],[110,9311],[120,10330],[130,11319],[140,12266],[150,13156],[160,13969],[170,14681],[180,15255],[190,15605],[191,15615]],
    20000:[[1,13],[10,416],[20,1157],[30,2089],[40,3159],[50,4333],[60,5586],[70,6898],[80,8249],[90,9625],[100,11009],[110,12387],[120,13741],[130,15058],[140,16318],[150,17501],[160,18583],[170,19530],[180,20294],[190,20759],[191,20772]],
    7500:[[1,5],[10,151],[20,421],[30,761],[40,1150],[50,1578],[60,2034],[70,2512],[80,3004],[90,3505],[100,4009],[110,4510],[120,5004],[130,5483],[140,5942],[150,6373],[160,6767],[170,7112],[180,7390],[190,7559],[191,7564]]
  };
  const p=maps[cap]; if(!p) return null;
  if(x<=p[0][0]) return p[0][1];
  for(let i=1;i<p.length;i++){ if(x<=p[i][0]){
    const [x0,y0]=p[i-1], [x1,y1]=p[i];
    return y0+(y1-y0)*(x-x0)/(x1-x0);
  }}
  return p[p.length-1][1];
}
function fmt(n){return new Intl.NumberFormat('pt-BR',{maximumFractionDigits:1}).format(n)}
function updateMode(){
  const dual=document.getElementById('dual').style.display;
  const is30=document.getElementById('model').value==='30000';
  document.getElementById('single').style.display=is30?'none':'block';
  document.getElementById('dual').style.display=is30?'block':'none';
  document.getElementById('totalBox').style.display=is30?'block':'none';
}
const tankInfo={
  "10000": {name:"10.000 L", details:"Tanque simples — tabela de medição de 10.000 litros."},
  "15000": {name:"15.000 L", details:"Tanque simples — tabela de medição de 15.000 litros."},
  "20000": {name:"20.000 L", details:"Tanque simples — tabela de medição de 20.000 litros."},
  "7500": {name:"7.500 L — bipartido", details:"Tanque bipartido — capacidade nominal de 7.500 L por compartimento."},
  "30000": {name:"30.000 L — bipartido 15/15", details:"Confab 30SC/30JC — tabela para medir 1 compartimento (capacidade volumétrica 15.626,7 L)."}
};
function selectTank(model){
  document.getElementById('model').value=model;
  document.querySelectorAll('.tank-btn').forEach(btn=>btn.classList.toggle('active',btn.dataset.model===model));
  document.getElementById('referenceName').textContent=tankInfo[model].name;
  document.getElementById('referenceDetails').textContent=tankInfo[model].details;
  updateMode(); calc();
}
document.querySelectorAll('.tank-btn').forEach(btn=>btn.addEventListener('click',()=>selectTank(btn.dataset.model)));
document.getElementById('ruler').oninput=calc;
document.getElementById('r1').oninput=calc;

function calc(){
  const m=document.getElementById('model').value;
  if(m==='30000'){
    const x=Number(document.getElementById('r1').value);
    const y=exact30(x);
    if(y===null){
      document.getElementById('liters').textContent='—';
      document.getElementById('pct').textContent='Informe a régua.';
      document.getElementById('fill').style.width='0';
      return;
    }
    document.getElementById('labelResult').textContent='Volume do compartimento';
    document.getElementById('liters').textContent=fmt(y);
    document.getElementById('pct').textContent=fmt(y/15626.7*100)+'% do compartimento';
    document.getElementById('fill').style.width=Math.min(100,y/15626.7*100)+'%';
    document.getElementById('modelOut').textContent='30.000 L bipartido 15/15';
    document.getElementById('detailOut').textContent='1 compartimento';
    document.getElementById('totalBox').style.display='none';
    return;
  }
  const x=Number(document.getElementById('ruler').value);
  const y=generic(x,m);
  if(y===null) return;
  const cap={10000:10000,15000:15000,20000:20000,7500:7500}[m];
  document.getElementById('labelResult').textContent='Volume';
  document.getElementById('liters').textContent=fmt(y);
  document.getElementById('pct').textContent=fmt(y/cap*100)+'% da capacidade';
  document.getElementById('fill').style.width=Math.min(100,y/cap*100)+'%';
  document.getElementById('modelOut').textContent=cap.toLocaleString('pt-BR')+' L';
  document.getElementById('detailOut').textContent=m==='7500'?'por compartimento':'tabela padrão';
}
function limpar(){
  document.getElementById('ruler').value='';
  document.getElementById('r1').value='';
  document.getElementById('liters').textContent='—';
  document.getElementById('pct').textContent='Informe a régua.';
  document.getElementById('fill').style.width='0';
  document.getElementById('total').textContent='—';
  document.getElementById('totalBox').style.display='none';
}


const $=id=>document.getElementById(id);
const capacityMap={10000:10000,15000:15000,20000:20000,7500:7500,30000:15626.7};
function currentInput(){return $('model').value==='30000'?$('r1'):$('ruler')}
function setRuler(v){const input=currentInput();input.value=Math.max(0,Math.min(Number(input.max),Number(v)||0));calc();input.focus()}
function renderHistory(){
  const list=$('historyList'); const h=JSON.parse(localStorage.getItem('tankHistory')||'[]');
  if(!h.length){list.innerHTML='<div class="empty-history">Nenhuma medição salva ainda.</div>';return;}
  list.innerHTML=h.slice(0,8).map(x=>`<div class="history-item"><div><b>${x.tank}</b><span>${x.cm} cm • ${x.time}</span></div><strong>${fmt(x.liters)} L</strong></div>`).join('');
}
function saveHistory(){
  const liters=Number(($('liters').textContent||'').replace(/\./g,'' ).replace(',','.')); const input=currentInput(); const cm=Number(input.value);
  if(!Number.isFinite(liters)||!cm)return;
  const h=JSON.parse(localStorage.getItem('tankHistory')||'[]'); h.unshift({tank:$('referenceName').textContent,cm,liters,time:new Date().toLocaleString('pt-BR',{dateStyle:'short',timeStyle:'short'})}); localStorage.setItem('tankHistory',JSON.stringify(h.slice(0,20))); renderHistory();
}
function enhancedCalc(){
  calc();
  const m=$('model').value; const input=currentInput(); const cm=Number(input.value); let liters=NaN;
  if(m==='30000') liters=exact30(cm); else liters=generic(cm,m);
  if(!Number.isFinite(liters)){ $('capacityOut').textContent=m==='30000'?'15.626,7 L':(Number(m)).toLocaleString('pt-BR')+' L'; $('remainingOut').textContent='—'; return; }
  const cap=capacityMap[m]; $('capacityOut').textContent=fmt(cap)+' L'; $('remainingOut').textContent=fmt(Math.max(0,cap-liters))+' L';
}
function selectTankEnhanced(model){selectTank(model); const is30=model==='30000'; $('single').hidden=is30; $('dual').hidden=!is30; currentInput().value=''; $('liters').textContent='—'; $('pct').textContent='Informe a régua.'; $('fill').style.width='0'; $('modelOut').textContent=tankInfo[model].name; $('capacityOut').textContent=fmt(capacityMap[model])+' L'; $('remainingOut').textContent='—';}

document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('.tank-btn').forEach(b=>b.addEventListener('click',()=>{selectTankEnhanced(b.dataset.model);document.querySelectorAll('.tank-btn').forEach(x=>x.classList.toggle('active',x===b));}));
  $('calcBtn').addEventListener('click',()=>{enhancedCalc();saveHistory();});
  $('clearBtn').addEventListener('click',()=>{limpar();$('ruler').value='';$('r1').value='';$('remainingOut').textContent='—';});
  $('ruler').addEventListener('input',enhancedCalc);$('r1').addEventListener('input',enhancedCalc);
  $('minusBtn').addEventListener('click',()=>setRuler(Number($('ruler').value||0)-1));$('plusBtn').addEventListener('click',()=>setRuler(Number($('ruler').value||0)+1));
  $('minusBtn30').addEventListener('click',()=>setRuler(Number($('r1').value||0)-1));$('plusBtn30').addEventListener('click',()=>setRuler(Number($('r1').value||0)+1));
  document.querySelectorAll('.quick-values button').forEach(b=>b.addEventListener('click',()=>setRuler(b.dataset.value)));
  $('copyBtn').addEventListener('click',async()=>{const text=`${$('referenceName').textContent}: ${$('liters').textContent} L (${currentInput().value} cm)`;try{await navigator.clipboard.writeText(text);$('copyBtn').textContent='✓';setTimeout(()=>$('copyBtn').textContent='⧉',1200)}catch{}});
  $('shareBtn').addEventListener('click',async()=>{const text=`Medidor de Tanques\n${$('referenceName').textContent}\nRégua: ${currentInput().value||'—'} cm\nVolume: ${$('liters').textContent} L`;if(navigator.share){try{await navigator.share({title:'Medidor de Tanques',text})}catch{}}else{try{await navigator.clipboard.writeText(text);alert('Resultado copiado.')}catch{}}});
  $('clearHistoryBtn').addEventListener('click',()=>{localStorage.removeItem('tankHistory');renderHistory()});
  selectTankEnhanced('10000'); document.querySelector('.tank-btn[data-model="10000"]').classList.add('active'); renderHistory();
  window.addEventListener('online',()=>{$('onlineStatus').textContent='Conectado • pronto para medir'});window.addEventListener('offline',()=>{$('onlineStatus').textContent='Modo offline • pronto para medir'});
});

let deferredPrompt=null;
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredPrompt=e;$('installBtn').hidden=false;$('installCard').querySelector('.secondary').textContent='Instalar agora';});
async function doInstall(){if(!deferredPrompt){$('installModal').hidden=false;return}deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;$('installBtn').hidden=true;}
$('installBtn').addEventListener('click',doInstall);$('modalInstallBtn').addEventListener('click',doInstall);$('howInstallBtn').addEventListener('click',()=>{$('modalInstallBtn').hidden=!deferredPrompt;$('installModal').hidden=false});$('closeModal').addEventListener('click',()=>$('installModal').hidden=true);$('installModal').addEventListener('click',e=>{if(e.target.id==='installModal')$('installModal').hidden=true});

function salvarPDF(){
  // Abre a impressão do navegador; selecione "Salvar como PDF".
  // Funciona no computador e no celular sem instalar bibliotecas externas.
  calc();
  window.print();
}
