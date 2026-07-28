(function(_0x4a1f,_0x2b8e){ 'use strict'; 
const IC = {
  star:   '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  gem:    '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12l4 6-10 12L2 9z"/><path d="M2 9h20"/><path d="M12 3l4 6-4 12-4-12z"/></svg>',
  chart:  '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>',
  pad:    '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="10" rx="5"/><line x1="6" y1="12" x2="10" y2="12"/><line x1="8" y1="10" x2="8" y2="14"/><circle cx="15.5" cy="13" r="1"/><circle cx="18" cy="11" r="1"/></svg>',
  nft:    '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>',
  user:   '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  globe:  '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
  shieldLock: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>',
  bolt:   '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
  shield: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  clock:  '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  badge:  '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="9" r="6"/><polyline points="8.5 14 7 22 12 19 17 22 15.5 14"/><polyline points="9.5 9 11 10.5 14.5 7"/></svg>',
};

const SVCS = [
  { icon:IC.star, name:'Звёзды Telegram', desc:'Официальная валюта Telegram для ботов, подписок и стикеров. Любой объём — от 50 до 10 000 звёзд.', tag:'Топ', bot:'godl_stars_bot' },
  { icon:IC.gem, name:'Telegram Premium', desc:'Подписка на 1, 3 или 12 месяцев. Увеличенные лимиты, эксклюзивные стикеры, скрытый номер.', tag:'Хит', bot:'godl_stars_bot' },
  { icon:IC.chart, name:'Накрутка соцсетей', desc:'Подписчики, лайки, просмотры для Instagram, TikTok, YouTube, ВКонтакте. Живые аккаунты, без дропа.', tag:'SMM', bot:'godl_stars_bot' },
  { icon:IC.pad, name:'Пополнение Steam', desc:'Баланс Steam кошелька по выгодному курсу. Пополнение в течение 15 минут после оплаты.', tag:'Gaming', bot:'godl_stars_bot' },
  { icon:IC.nft, name:'Аренда NFT', desc:'Аренда редких NFT-коллекций для аватара Telegram или демонстрации. Гибкие сроки — от 1 дня.', tag:'NFT', bot:'godl_stars_bot' },
  { icon:IC.user, name:'Telegram аккаунты', desc:'Прогретые аккаунты с историей активности. Подходят для бизнеса, арбитража и личного использования.', tag:'Аккаунты', bot:'GodelessSIMbot' },
  { icon:IC.globe, name:'Прокси', desc:'Резидентские и мобильные прокси по всему миру. Ротация IP, без логов, высокая скорость.', tag:'Privacy', bot:'godl_stars_bot' },
  { icon:IC.shieldLock, name:'VPN', desc:'Доступ ко всем ресурсам без ограничений. Шифрование военного класса, серверы в 30+ странах.', tag:'Secure', bot:'godl_stars_bot' },
];

const WHY = [
  { ico:IC.bolt, t:'Мгновенно', d:'Большинство заказов выполняется за 5–30 минут. Мы ценим твоё время.' },
  { ico:IC.shield, t:'Безопасно', d:'Только проверенные методы. Ни одного бана по нашей вине за всё время работы.' },
  { ico:IC.clock, t:'Онлайн 24/7', d:'Поддержка работает круглосуточно. Ответим на любой вопрос в любое время.' },
  { ico:IC.badge, t:'Гарантия', d:'Возврат или повтор заказа, если что-то пойдёт не так. Без споров и задержек.' },
];

const FAQS = [
  { q:'Как оформить заказ?', a:'Нажми «Купить» под нужной услугой или напиши в Telegram @AdapterGodeless. Менеджер ответит в течение минуты и проведёт через весь процесс.' },
  { q:'Какие способы оплаты принимаете?', a:'Принимаем криптовалюту через CryptoBot (@send) и xRocket (@xrocket) — USDT, TON, BTC и другие. Также работаем по СБП (перевод по номеру телефона). Telegram Stars не принимаются.' },
  { q:'Безопасно ли использовать ваши услуги?', a:'Да. Мы работаем только официальными и проверенными методами. За всё время работы ни один аккаунт клиента не получил бана по нашей вине.' },
  { q:'Есть ли гарантия на услуги?', a:'Абсолютно. На все услуги действует гарантия — если результат не соответствует обещанному, сделаем повтор или вернём деньги в полном объёме.' },
  { q:'Как быстро выполняется заказ?', a:'Telegram Stars и Premium — до 10 минут. Накрутка — 1–24 часа в зависимости от объёма. Прокси и VPN — мгновенно после оплаты.' },
  { q:'Можно ли заказать оптом?', a:'Да. Есть специальные оптовые условия и скидки от объёма. Напишите нам, подготовим индивидуальное предложение.' },
];

const MQ = ['CryptoBot @send','xRocket','СБП','Telegram Premium','Steam Wallet','NFT Аренда','Накрутка','Прокси','VPN','Аккаунты','USDT · TON · BTC','Без комиссий','24/7','godeless.space'];


const mqt = document.getElementById('mqt');
[...MQ,...MQ].forEach(t => {
  const d = document.createElement('div');
  d.className = 'mq-item';
  d.innerHTML = `<b>◆</b> ${t}`;
  mqt.appendChild(d);
});


const sg = document.getElementById('svcGrid');
SVCS.forEach((s,i) => {
  const el = document.createElement('div');
  el.className = `svc-card rv d${(i%8)+1}`;
  el.innerHTML = `
    <div class="svc-tag">${s.tag}</div>
    <div class="svc-icon">${s.icon}</div>
    <div class="svc-name">${s.name}</div>
    <div class="svc-desc">${s.desc}</div>
    <a href="https://t.me/${s.bot}" target="_blank" class="svc-btn">
      Купить
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
    </a>`;
  el.addEventListener('mousemove', e => {
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', ((e.clientX-r.left)/r.width*100)+'%');
    el.style.setProperty('--my', ((e.clientY-r.top)/r.height*100)+'%');
  });
  sg.appendChild(el);
});


const wg = document.getElementById('whyGrid');
WHY.forEach((w,i) => {
  const el = document.createElement('div');
  el.className = `why-card rv d${i+1}`;
  el.innerHTML = `<div class="why-ico">${w.ico}</div><div class="why-t">${w.t}</div><div class="why-d">${w.d}</div>`;
  wg.appendChild(el);
});


const fl = document.getElementById('faqList');
FAQS.forEach(f => {
  const el = document.createElement('div');
  el.className = 'faq-item';
  el.innerHTML = `
    <button class="faq-q">
      <span>${f.q}</span>
      <span class="faq-ico">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
      </span>
    </button>
    <div class="faq-body"><p>${f.a}</p></div>`;
  el.querySelector('.faq-q').addEventListener('click', () => {
    const open = el.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(x => x.classList.remove('open'));
    if (!open) el.classList.add('open');
  });
  fl.appendChild(el);
});


(()=>{
  const cv = document.getElementById('c');
  if(!cv) return;
  const ctx = cv.getContext('2d');
  let W,H,pts=[],animId=null;
  const resize=()=>{ W=cv.width=cv.offsetWidth; H=cv.height=cv.offsetHeight; };
  const mk=()=>({ x:Math.random()*W, y:Math.random()*H, r:Math.random()*.9+.2,
    dx:(Math.random()-.5)*.18, dy:(Math.random()-.5)*.18,
    a:Math.random()*.35+.05, da:(Math.random()-.5)*.003 });
  resize();
  const count = (window.innerWidth < 600) ? 30 : 70;
  pts=Array.from({length: count}, mk);
  const draw=()=>{
    ctx.clearRect(0,0,W,H);
    pts.forEach(p=>{
      p.x+=p.dx; p.y+=p.dy; p.a+=p.da;
      if(p.a<.04||p.a>.4) p.da*=-1;
      if(p.x<0||p.x>W) p.dx*=-1;
      if(p.y<0||p.y>H) p.dy*=-1;
      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle=`rgba(201,169,110,${p.a})`; ctx.fill();
    });
    for(let i=0;i<pts.length;i++) for(let j=i+1;j<pts.length;j++){
      const dx=pts[i].x-pts[j].x, dy=pts[i].y-pts[j].y, d=Math.sqrt(dx*dx+dy*dy);
      if(d<90){ ctx.beginPath(); ctx.moveTo(pts[i].x,pts[i].y); ctx.lineTo(pts[j].x,pts[j].y);
        ctx.strokeStyle=`rgba(201,169,110,${.04*(1-d/90)})`; ctx.lineWidth=.5; ctx.stroke(); }
    }
    animId = requestAnimationFrame(draw);
  };
  
  const heroSec = document.getElementById('hero');
  if(heroSec && 'IntersectionObserver' in window){
    const heroObs = new IntersectionObserver(entries=>{
      if(entries[0].isIntersecting){
        if(!animId) draw();
      } else {
        if(animId){ cancelAnimationFrame(animId); animId=null; }
      }
    },{threshold:0.01});
    heroObs.observe(heroSec);
  } else {
    draw();
  }
  
  window.addEventListener('resize',resize);
})();


const cur=document.getElementById('cur'), ring=document.getElementById('cur-ring');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{ mx=e.clientX; my=e.clientY; if(cur) cur.style.left=mx+'px'; if(cur) cur.style.top=my+'px'; });
(function loop(){ rx+=(mx-rx)*.12; ry+=(my-ry)*.12; if(ring) ring.style.left=rx+'px'; if(ring) ring.style.top=ry+'px'; requestAnimationFrame(loop); })();
document.querySelectorAll('a,button,.svc-card,.faq-q,.why-card,.owner-box,.cta-pill,.trust-card').forEach(el=>{
  el.addEventListener('mouseenter',()=>{ if(cur) cur.classList.add('hov'); if(ring) ring.classList.add('hov'); });
  el.addEventListener('mouseleave',()=>{ if(cur) cur.classList.remove('hov'); if(ring) ring.classList.remove('hov'); });
});


const obs=new IntersectionObserver(entries=>entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('vis'); obs.unobserve(e.target); } }),{threshold:.08,rootMargin:'0px 0px -30px 0px'});
document.querySelectorAll('.rv').forEach(el=>obs.observe(el));


function count(el,to,suf,dur){
  let v=0; const step=to/(dur/16);
  const id=setInterval(()=>{ v=Math.min(v+step,to); el.textContent=Number.isInteger(to)?Math.floor(v).toLocaleString('ru')+suf:v.toFixed(1)+suf; if(v>=to) clearInterval(id); },16);
}
const cobs=new IntersectionObserver(e=>{ if(e[0].isIntersecting){
  count(document.getElementById('cnt1'),1200,'+',1800);
  count(document.getElementById('cnt2'),8500,'+',2000);
  count(document.getElementById('cnt3'),4.9,'/5',1500);
  cobs.disconnect(); }},{threshold:.5});
const hs=document.querySelector('.hero-stats'); if(hs) cobs.observe(hs);


window.addEventListener('scroll',()=>{
  document.getElementById('nav').style.background=window.scrollY>10?'rgba(8,8,8,0.88)':'rgba(8,8,8,0.7)';
},{passive:true});


let open=false;
function closeMob(){ open=false; document.getElementById('mob').classList.remove('open'); resetHbg(); }
function resetHbg(){ const s=document.getElementById('hbg').children; s[0].style.transform=''; s[1].style.opacity=''; s[2].style.transform=''; }
document.querySelectorAll('#mob a').forEach(a=>a.addEventListener('click',closeMob));
document.getElementById('hbg').addEventListener('click',()=>{
  open=!open; document.getElementById('mob').classList.toggle('open',open);
  const s=document.getElementById('hbg').children;
  if(open){ s[0].style.transform='rotate(45deg) translate(4px,5px)'; s[1].style.opacity='0'; s[2].style.transform='rotate(-45deg) translate(4px,-5px)'; }
  else resetHbg();
});


function ownerStatus(){
  const badgeW=document.getElementById('ownerBadgeWast');
  const badgeL=document.getElementById('ownerBadgeLevin');
  const msk=new Date(new Date().toLocaleString('en-US',{timeZone:'Europe/Moscow'}));
  const t=msk.getHours()*60+msk.getMinutes();
  
  if(badgeW){
    const onW=t>=480||t<180;
    if(onW){
      badgeW.className='o-badge o-badge-green';
      badgeW.innerHTML=`<svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Время ответа 1–3 мин`;
    } else {
      badgeW.className='o-badge o-badge-time';
      badgeW.innerHTML=`<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> Сейчас не в сети · онлайн с 08:00 МСК`;
    }
  }

  if(badgeL){
    const onL=t>=480&&t<=1320;
    if(onL){
      badgeL.className='o-badge o-badge-cyan';
      badgeL.innerHTML=`<svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Время ответа 1–5 мин`;
    } else {
      badgeL.className='o-badge o-badge-time';
      badgeL.innerHTML=`<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> Сейчас не в сети · онлайн с 08:00 МСК`;
    }
  }
}
ownerStatus(); setInterval(ownerStatus,60000); })(window,document);
