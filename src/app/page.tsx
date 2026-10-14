'use client';
import { useEffect, useState } from 'react';
import { AnimatedHero, SiteMotion, YamalWord } from '@/components/BrandMotion';
import { WorkingGroup, NorthernEditorial } from '@/components/CreativeGraphics';
import { WhyNow, TerritorySpecializations, CandidateCore, GroupBenefits, TalentToMarket, EventPlan } from '@/components/StrategySections';
import { AnimatedAtlas, OpinionLeaders, YamalNumbers, YamalSeasons } from '@/components/RegionalSections';

const criteria = [
  ['Действующий проект',20,'Расскажите, что уже создано. Приложите портфолио, ссылку на продукт или описание реализованных работ.'],
  ['Коммерческий потенциал',20,'Опишите продукт, его клиентов и модель дохода. Покажите спрос или план проверки своей идеи.'],
  ['Уникальность',15,'Объясните, что отличает ваш подход, продукт или творческую практику от других.'],
  ['Влияние и аудитория',15,'Расскажите, кому помогает проект и как он влияет на сообщество. Подкрепите примерами и доступными данными.'],
  ['Связь с Ямалом',10,'Покажите связь команды, проекта или деятельности с регионом и пользу для его развития.'],
  ['Готовность работать в команде',10,'Опишите свой вклад в общую работу: экспертизу, время и направления, в которых готовы участвовать.'],
  ['Потенциал федерального выхода',10,'Предложите, как проект может выйти за пределы региона: партнёры, новые рынки, выставки или медиа.'],
] as const;
const flagships = [
  ['Карта креативного Ямала','Атлас людей, мест и проектов. Находим друг друга и создаём новые связи.','tundra','#atlas'],
  ['Ядро креативной экономики','Будущее сообщество лидеров и практиков. Состав рабочей группы будет опубликован после утверждения.','textile','#change'],
  ['Журнал «Ямал»','Люди и идеи Нового Севера. Первый выпуск № 01 / 2027 находится в планах редакции.','architecture','#journal'],
  ['Yamal Native Design','Современный дизайн в диалоге с носителями культуры: согласование, соавторство и справедливая оплата.','textile','#change'],
  ['Creative Export Yamal','От локальной идеи к новым рынкам. Направление для развития брендов и международных связей.','ceramics','#change'],
];
const emptyDraft={name:'',email:'',project:'',contribution:''};
function Arrow(){return <span aria-hidden="true">↗</span>}

export default function Home(){
  const [menu,setMenu]=useState(false);
  const [notice,setNotice]=useState('');
  const [draft,setDraft]=useState(emptyDraft);
  useEffect(()=>{try{const d=JSON.parse(localStorage.getItem('yamal-group-draft')||'null');if(d&&Object.keys(emptyDraft).every(k=>typeof d[k]==='string'))setDraft(d);}catch{}},[]);
  return <>
    <SiteMotion/>
    <a className="skip-link" href="#main">Перейти к содержанию</a>
    <header className="site-header"><a href="#" className="brand" aria-label="Креативный Ямал — на главную"><span className="brand-lockup"><span>Креативный</span><YamalWord tone="red"/></span></a><button className="menu-toggle" aria-expanded={menu} aria-controls="navigation" onClick={()=>setMenu(!menu)}>{menu?'Закрыть':'Меню'}</button><nav id="navigation" className={`navigation ${menu?'is-open':''}`} aria-label="Основная навигация" onClick={()=>setMenu(false)}><a href="#numbers">Ямал в цифрах</a><a href="#goal">Цель</a><a href="#atlas">Карта креативного Ямала</a><a href="#change">Рабочая группа</a><a href="#leaders">Лидеры мнений</a><a href="#journal">Журнал «Ямал»</a><a href="#events">Мероприятия</a></nav></header>
    <main id="main">
      <AnimatedHero/>

      <YamalNumbers/>

      <section id="goal" className="manifest section-shell" aria-labelledby="manifest-title"><div className="section-label">Цель</div><h2 id="manifest-title">Создать условия<br/>для роста<br/><em>креативной экономики Ямала.</em></h2><div className="manifest-copy"><p>Объединяем людей, идеи и ресурсы,<br/>чтобы ямальское творчество становилось продуктами,<br/>бизнесом и федеральным брендом.</p><p className="muted">Объединяем творческих людей Ямала, помогаем проектам находить партнёров и открывать новые рынки.</p></div><div className="pillars">{[['Люди','Знакомиться. Обмениваться опытом. Делать вместе.'],['Проекты','Превращать идеи в продукты. Создавать новое.'],['Рынки','Выходить за границы региона. Быть услышанными.']].map(([title,text])=><article key={title}><span>{title}</span><p>{text}</p></article>)}</div><NorthernEditorial/></section>

      <WhyNow/>
      <AnimatedAtlas/>
      <TerritorySpecializations/>

      <section id="change" className="change" aria-labelledby="change-title"><div className="section-shell"><div className="change-intro"><div><div className="section-label">Креативная рабочая группа</div><h2 id="change-title">Измени<YamalWord className="change-title-word"/></h2></div><div className="change-copy"><span className="status-tag">Проект условий участия</span><p>Ваш опыт может стать частью больших перемен. Рабочая группа объединит людей, готовых развивать креативную экономику региона.</p><p>Предлагать решения. Обсуждать инициативы. Помогать проектам расти. Работать вместе над будущим Ямала.</p><a className="button button-light" href="#submit">Подготовить заявку <Arrow/></a></div></div><WorkingGroup/><CandidateCore/><GroupBenefits/><div className="criteria-heading"><h3>Что будет учитываться<br/>при отборе</h3><div className="score-total"><strong>100</strong><span>баллов<br/>максимум</span></div></div><div className="criteria-list">{criteria.map(([title,points,text],i)=><details key={title}><summary><span className="criterion-index">{String(i+1).padStart(2,'0')}</span><h4>{title}</h4><span className="criterion-points">{points}<small>баллов</small></span><span className="expand-icon" aria-hidden="true">+</span></summary><p>{text}</p></details>)}</div><div className="criteria-note"><Arrow/><p>Критерии взяты из ТЗ и пока не утверждены как положение об отборе. Шкалы оценки, проходной балл, сроки, состав экспертов и порядок принятия решений будут опубликованы после утверждения. Сумма баллов сама по себе не гарантирует включение в группу.</p></div><div className="join-steps">{[['Подготовьте материалы','Проект, портфолио, связь с Ямалом и описание своего вклада в работу группы.'],['Дождитесь открытия отбора','Официальные условия и способ отправки заявки появятся после утверждения положения.'],['Пройдите экспертную оценку','Предлагаемый порядок — оценка несколькими экспертами и оформление решения протоколом.']].map(([title,text])=><article key={title}><span>{title}</span><p>{text}</p></article>)}</div></div></section>

      <OpinionLeaders/>

      <section id="journal" className="journal section-shell" aria-labelledby="journal-title"><div className="journal-visual"><div className="magazine"><img src="/images/architecture.png" alt="Северная архитектура на концепции обложки журнала «Ямал»" loading="lazy"/><div className="magazine-top"><YamalWord/><span>№ 01 / 2027<br/>Планируемый выпуск</span></div><span className="magazine-title">Новый<br/><em>Север</em></span><span className="magazine-foot">Люди · культура · будущее</span></div></div><div className="journal-copy"><div className="section-label">Журнал «Ямал»</div><h2 id="journal-title">Чувствовать.<br/>Думать.<br/><em>Создавать.</em></h2><p>На Ямале появляются локальные бренды, авторские проекты и новые творческие сообщества. Их историям нужна общая площадка — место, где идеи становятся заметными и находят единомышленников.</p><p>Для развития креативных индустрий планируется выпуск журнала «Ямал». Он расскажет о предпринимателях, дизайнерах, мастерах и культурных инициативах региона, познакомит читателей с людьми и проектами, которые создают современный Север.</p><p className="muted">Первый выпуск «Новый Север» планируется на 2027 год. Перед вами концепция обложки; материалы готовятся.</p><a className="text-button" href="#submit">Предложить историю <Arrow/></a></div></section>

      <YamalSeasons/>


      <section id="projects" className="flagships section-shell" aria-labelledby="projects-title"><div className="section-heading"><div><div className="section-label">Пять направлений движения</div><h2 id="projects-title">Идеи с большим<br/><em>будущим.</em></h2></div><p>Флагманские инициативы платформы.<br/>Сейчас — на этапе концепции.</p></div><div className="flagship-track" tabIndex={0} aria-label="Флагманские инициативы, прокрутка по горизонтали">{flagships.map(([title,text,image,href],i)=><article className="flagship" key={title}><img src={`/images/${image}.png`} alt="" loading="lazy"/><div className="flagship-shade"/><span className="flagship-index">{String(i+1).padStart(2,'0')} / 05</span><div><h3>{title}</h3><p>{text}</p><a href={href} aria-label={`Подробнее: ${title}`}><Arrow/></a></div></article>)}</div><div className="track-caption"><span>Листайте, чтобы увидеть все направления →</span><span>Визуальные концепции</span></div></section>

      <TalentToMarket/>
      <EventPlan/>

      <section className="opportunities section-shell" aria-labelledby="opportunities-title"><div className="section-heading"><div><div className="section-label">Возможности</div><h2 id="opportunities-title">Следующий шаг —<br/><em>за вами.</em></h2></div><p>Приглашения к сотрудничеству.<br/>Официальные даты будут опубликованы.</p></div><div className="opportunity-grid"><a href="#submit"><span>Сообщество</span><h3>Войти в диалог</h3><p>Расскажите о своей практике и направлениях, в которых хотите участвовать.</p><Arrow/></a><a href="#submit"><span>Редакция</span><h3>Стать историей</h3><p>Предложите героя, тему или проект для будущего журнала «Ямал».</p><Arrow/></a></div></section>

      <section id="submit" className="submit section-shell" aria-labelledby="submit-title"><div className="submit-copy"><div className="section-label">Начнём знакомство</div><h2 id="submit-title">У вас есть<br/><em>идея?</em></h2><p>Расскажите о проекте и о том, что хотите изменить на Ямале.</p><p className="muted">Форма сохраняет черновик только в этом браузере. Отправка заявок ещё не подключена. Сведения доступны пользователям этого профиля браузера.</p></div><form onSubmit={e=>{e.preventDefault();try{localStorage.setItem('yamal-group-draft',JSON.stringify(draft));setNotice('Черновик сохранён в этом браузере. Заявка не отправлена: официальный приём ещё не открыт.');}catch{setNotice('Браузер не разрешил сохранение. Скопируйте данные перед закрытием страницы.');}}}><label>Как вас зовут<input name="name" autoComplete="name" required value={draft.name} onChange={e=>setDraft({...draft,name:e.target.value})} placeholder="Имя и фамилия"/></label><label>Электронная почта<input name="email" type="email" autoComplete="email" required value={draft.email} onChange={e=>setDraft({...draft,email:e.target.value})} placeholder="you@example.ru"/></label><label>Ваш проект и связь с Ямалом<textarea name="project" required rows={3} value={draft.project} onChange={e=>setDraft({...draft,project:e.target.value})} placeholder="Что вы делаете? Добавьте ссылки на работы."/></label><label>Чем готовы помочь рабочей группе<textarea name="contribution" rows={2} value={draft.contribution} onChange={e=>setDraft({...draft,contribution:e.target.value})} placeholder="Экспертиза, идеи, направления сотрудничества"/></label><div className="form-actions"><button className="button button-dark" type="submit">Сохранить черновик <Arrow/></button><button className="text-button" type="button" onClick={()=>{setDraft(emptyDraft);try{localStorage.removeItem('yamal-group-draft');}catch{}setNotice('Черновик удалён.');}}>Очистить</button></div><p className="form-notice" role="status">{notice}</p></form></section>
    </main>
    <footer className="site-footer"><a className="footer-title" href="#"><span className="footer-brand-title"><span>КРЕАТИВНЫЙ</span><YamalWord/></span><Arrow/></a><div className="footer-bottom"><span>Люди. Идеи. Проекты. На весь мир.</span><span>Концепция платформы · 2026</span><a href="#change">Измени Ямал ↗</a></div></footer>
  </>;
}
