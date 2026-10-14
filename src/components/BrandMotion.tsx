'use client';
import { useEffect, useId, useRef, useState } from 'react';

/** Original artwork supplied by the user. The SVG viewport displays its wordmark. */
export function YamalWord({className='',tone='white'}:{className?:string;tone?:'white'|'red'|'ink'}){
  const id=useId().replace(/:/g,'');
  const color=tone==='red'?'0.78 0.05 0.18':tone==='ink'?'0.03 0.10 0.17':'0.99 0.97 0.91';
  const [r,g,b]=color.split(' ');
  return <svg className={`yamal-word ${className}`} viewBox="540 1385 500 85" role="img" aria-label="Ямал" focusable="false"><title>Ямал</title><defs><filter id={`word-${id}`} colorInterpolationFilters="sRGB"><feColorMatrix type="matrix" values={`0 0 0 0 ${r} 0 0 0 0 ${g} 0 0 0 0 ${b} 0 4 0 0 -2`}/></filter></defs><image href="/brand/yamal-rays.png" width="1577" height="1577" filter={`url(#word-${id})`}/></svg>;
}

export function AnimatedHero(){
  const ref=useRef<HTMLElement>(null);const [paused,setPaused]=useState(false);
  useEffect(()=>{const hero=ref.current;if(!hero)return;const observer=new IntersectionObserver(([entry])=>hero.classList.toggle('hero-offscreen',!entry.isIntersecting));observer.observe(hero);const visibility=()=>hero.classList.toggle('hero-hidden',document.hidden);document.addEventListener('visibilitychange',visibility);return()=>{observer.disconnect();document.removeEventListener('visibilitychange',visibility);};},[]);
  return <section ref={ref} id="home" className={`hero brand-hero ${paused?'hero-paused':''}`} aria-labelledby="hero-title"><div className="hero-landscape"><img className="hero-image" src="/images/tundra.png" alt="Художественный образ северной тундры с извилистой рекой" fetchPriority="high"/></div><div className="hero-shade"/><div className="hero-top"><span>Территория творческой энергии</span><span>Ямало-Ненецкий автономный округ</span></div><h1 id="hero-title"><span className="hero-kicker">КРЕАТИВНЫЙ</span><YamalWord className="hero-word"/></h1><div className="hero-bottom"><p>Люди. Идеи. Проекты.<br/><strong>На весь мир.</strong></p><div className="hero-actions"><a className="button button-light" href="#atlas">Исследовать карту <span aria-hidden="true">↗</span></a><a className="hero-link" href="#submit">Предложить проект <span aria-hidden="true">↗</span></a></div></div><div className="hero-motion-controls"><a className="hero-scroll-cue" href="#numbers">Листайте вниз <span aria-hidden="true">↓</span></a><button aria-pressed={paused} onClick={()=>setPaused(p=>!p)}>{paused?'▶ Продолжить':'Ⅱ Пауза'}<span className="sr-only"> анимации главного экрана</span></button></div><span className="image-credit">Визуальная концепция · изображение создано ИИ</span></section>;
}

export function SiteMotion(){
  useEffect(()=>{
    const media=window.matchMedia('(prefers-reduced-motion: reduce)');let observer:IntersectionObserver|null=null;let frame=0;let height=document.documentElement.scrollHeight-window.innerHeight;
    const selector='.section-heading>div,.manifest>h2,.manifest-copy,.pillars article,.numbers-grid article,.flagship,.journal-visual,.journal-copy,.change-intro>div,.group-members h3,.member-card,.northern-editorial,.criteria-heading,.criteria-list details,.join-steps article,.voices-grid article,.opportunity-grid>a,.submit-copy,.submit form,.footer-title,.why-now h2,.reason-list li,.territory-list>div,.candidate-intro,.candidate-bars>div,.benefits-heading,.benefit-list article,.group-resources>a,.group-resources>div,.market-path li,.market-statement,.event-agenda li';
    const setup=()=>{observer?.disconnect();if(media.matches){document.getAnimations().forEach(a=>{if(a.effect instanceof KeyframeEffect&&a.effect.target instanceof HTMLElement&&a.effect.target.dataset.motionSeen)a.finish();});return;}
      observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(!entry.isIntersecting)return;const node=entry.target as HTMLElement;observer?.unobserve(node);if(node.dataset.motionSeen)return;node.dataset.motionSeen='true';const siblings=node.parentElement?Array.from(node.parentElement.children):[];const index=Math.max(0,siblings.indexOf(node));const isHeading=node.matches('.section-heading>div,.manifest>h2,.change-intro>div');node.animate(isHeading?[{opacity:.25,transform:'translateY(28px)',clipPath:'inset(0 0 15% 0)'},{opacity:1,transform:'translateY(0)',clipPath:'inset(0)'}]:[{opacity:.2,transform:'translateY(20px)'},{opacity:1,transform:'translateY(0)'}],{duration:isHeading?850:650,delay:Math.min(index,5)*65,easing:'cubic-bezier(.2,.7,.2,1)',fill:'none'});});},{threshold:.12});document.querySelectorAll(selector).forEach(node=>observer?.observe(node));};
    const update=()=>{frame=0;const progress=height>0?Math.min(1,window.scrollY/height):0;document.documentElement.style.setProperty('--page-progress',String(progress));};
    const scroll=()=>{if(!frame)frame=requestAnimationFrame(update);};
    const resize=new ResizeObserver(()=>{height=document.documentElement.scrollHeight-window.innerHeight;scroll();});resize.observe(document.body);
    const mutations=new MutationObserver(()=>{if(!media.matches)document.querySelectorAll(selector).forEach(node=>{if(!(node as HTMLElement).dataset.motionSeen)observer?.observe(node);});});mutations.observe(document.querySelector('main')!,{childList:true,subtree:true});
    setup();update();media.addEventListener('change',setup);window.addEventListener('scroll',scroll,{passive:true});
    return()=>{observer?.disconnect();resize.disconnect();mutations.disconnect();media.removeEventListener('change',setup);window.removeEventListener('scroll',scroll);cancelAnimationFrame(frame);document.documentElement.style.removeProperty('--page-progress');};
  },[]);
  return <div className="reading-progress" aria-hidden="true"/>;
}
