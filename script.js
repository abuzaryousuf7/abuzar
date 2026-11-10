
(() => {
 const toggle=document.querySelector('.menu-toggle');
 const nav=document.querySelector('.site-nav');
 if(toggle&&nav){
  toggle.addEventListener('click',()=>{
   const open=nav.classList.toggle('open');
   toggle.setAttribute('aria-expanded',String(open));
   toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');
  });
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
   nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');
  }));
 }
 const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
 const links=[...document.querySelectorAll('.site-nav a[href^="#"]')];
 const sections=links.map(a=>document.querySelector(a.getAttribute('href'))).filter(Boolean);
 if('IntersectionObserver' in window){
  const observer=new IntersectionObserver(entries=>{
   entries.forEach(entry=>{
    if(entry.isIntersecting){
     links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+entry.target.id));
    }
   });
  },{rootMargin:'-35% 0px -55% 0px'});
  sections.forEach(s=>observer.observe(s));
 }
})();
