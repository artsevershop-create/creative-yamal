import { RoleIcon } from './CreativeGraphics';

const territories = [
  ['Салехард', 'Дизайн, fashion, медиа'], ['Новый Уренгой', 'Digital, fashion, SOVA'],
  ['Ноябрьск', 'Локальные бренды, «Миксер»'], ['Надым', 'Локальный продукт, туризм'],
  ['Пуровский район', '«Пур», локальные продукты'], ['Тазовский район', 'Ненецкая культура'],
  ['Ямальский район', 'Традиции тундры'], ['Приуральский район', 'Этно-fashion, ремёсла'],
  ['Лабытнанги', 'Город и Полярный Урал'], ['Шурышкарский район', 'Хантыйская культура'],
  ['Красноселькупский район', 'Селькупская культура'], ['Губкинский', 'Локальные бренды'],
  ['Муравленко', 'Handmade, молодые креаторы'],
];
const candidates = [['Салехард',5],['Новый Уренгой',5],['Ноябрьск',5],['Надым',3],['Пуровский район',3],['Тазовский район',4],['Ямальский район',3],['Приуральский район',2]] as const;

export function WhyNow(){return <section className="why-now section-shell" aria-labelledby="why-title"><div className="why-photo"><img src="/images/yamal-winter.png" alt="Зимний северный ландшафт — художественная визуализация" loading="lazy"/><blockquote>Ямал — это люди, идеи и культура, которые формируют экономику будущего.</blockquote></div><div><div className="section-label">Время действовать</div><h2 id="why-title">Почему<br/><em>сейчас?</em></h2><ul className="reason-list">{['Рост креативной экономики в России','Уникальная культура и природа Ямала','Государственная поддержка','Интерес к арктической повестке','Готовность ямальских предпринимателей'].map(text=><li key={text}><span aria-hidden="true">↗</span>{text}</li>)}</ul><p className="strategy-note">Пять предпосылок развития, обозначенных в концепции проекта.</p></div></section>}

export function TerritorySpecializations(){return <section className="territories section-shell" aria-labelledby="territories-title"><div className="section-heading"><div><div className="section-label">У каждой территории — свой голос</div><h2 id="territories-title">Разные практики.<br/><em>Общий Ямал.</em></h2></div><p>Предлагаемая специализация территорий из концепции. Основа для поиска партнёров и будущих совместных проектов.</p></div><dl className="territory-list">{territories.map(([name,focus])=><div key={name}><dt>{name}</dt><dd>{focus}</dd></div>)}</dl></section>}

export function CandidateCore(){return <div className="candidate-core"><div className="candidate-intro"><span className="status-tag">Предварительное распределение</span><h3>Будущее ядро<br/>креативного Ямала</h3><div className="candidate-total"><strong>30</strong><span>кандидатов<br/>в концепции</span></div><p>От поиска талантов — к рабочей группе лидеров индустрий. Персональный состав появится после отбора и утверждения.</p></div><div><dl className="candidate-bars">{candidates.map(([name,count])=><div key={name}><dt>{name}</dt><dd><span className="candidate-bar" style={{width:`${count/5*100}%`}}/><strong>{count}</strong></dd></div>)}</dl><p className="strategy-note">Для Лабытнанги, Шурышкарского и Красноселькупского районов, Губкинского и Муравленко отдельные квоты в презентации не указаны. Распределение предварительное.</p></div></div>}

const benefits = [
  ['community','Единомышленники','Люди с разным опытом и одной целью — развивать креативную экономику Ямала.'],
  ['design','Поддержка проектов','Совместная проработка идей и поиск партнёров для реализации на Ямале и за его пределами.'],
  ['media','Рекламное сопровождение','Истории участников, публикации о проектах и совместные информационные кампании.'],
  ['expert','Обмен опытом','Разборы проектов, обратная связь от коллег, наставничество и обмен полезными контактами.'],
  ['partners','Новые связи и рынки','Коллаборации с брендами, культурными площадками и бизнесом. Подготовка к выходу на новые рынки.'],
  ['business','Общие инструменты','Цифровые помощники для подготовки материалов, планирования и повседневной работы команды.'],
] as const;
export function GroupBenefits(){return <div id="group-benefits" className="group-benefits"><div className="benefits-heading"><div className="section-label">Что даёт участие</div><h3>Одна цель.<br/><em>Больше возможностей.</em></h3><p>Такой мы видим поддержку участников рабочей группы. Конкретные форматы сопровождения будут согласовываться с командами.</p></div><div className="benefit-list">{benefits.map(([kind,title,text])=><article key={title}><RoleIcon kind={kind}/><div><h4>{title}</h4><p>{text}</p></div></article>)}</div><div className="group-resources"><a className="assistant-resource" href="https://помощник.site/" target="_blank" rel="noopener noreferrer"><span className="resource-label">Инструмент для участников</span><h4>Личный<br/>ассистент <span aria-hidden="true">↗</span></h4><p>Перейти к проекту «Личный ассистент» на помощник.site.</p><span className="resource-action">Открыть сервис ↗</span></a><div className="tender-resource"><span className="resource-label">Следующий этап · планируется</span><h4>ИИ-сотрудник по закупкам</h4><p>В дальнейшем добавим проект по работе с тендерами: ещё одно направление для поиска возможностей и развития проектов участников.</p><a className="resource-action" href="#submit">Узнать о запуске ↗</a></div></div><p className="strategy-note">Сейчас доступен переход к «Личному ассистенту». Единый вход и выдача доступа по статусу участника на этом сайте пока не подключены.</p></div>}

const market = [['Карта','Находим людей, бренды и возможности.'],['Отбор','Оцениваем опыт, идеи и готовность работать вместе.'],['Ядро','Объединяем лидеров и компетенции.'],['Проекты','Собираем команды и проверяем решения.'],['Продукт','Превращаем идею в готовое предложение.'],['Продвижение','Рассказываем о продукте и выходим к аудитории.'],['Продажи','Находим клиентов и развиваем бизнес.']];
export function TalentToMarket(){return <section className="market-section" aria-labelledby="market-title"><div className="section-shell"><div className="section-label">Система развития</div><h2 id="market-title">От таланта<br/><em>к рынку.</em></h2><ol className="market-path">{market.map(([title,text])=><li key={title}><h3>{title}</h3><p>{text}</p></li>)}</ol><p className="market-statement">Создаём систему, в которой талант Ямала превращается в продукт, бизнес и федеральный бренд.</p></div></section>}

const events = [
  ['Стратегическая сессия','Общая цель','Участники и партнёры согласуют приоритеты, форматы работы и задачи группы.','Общая дорожная карта'],
  ['Встречи в территориях','Люди и практики','Знакомство с локальными командами, сбор проектов и наполнение карты креативного Ямала.','База проектов и компетенций'],
  ['Презентации кандидатов','Формирование ядра','Питчи проектов и экспертное обсуждение по утверждённым условиям отбора.','Предложения по составу группы'],
  ['Проектная лаборатория','От идеи к продукту','Практические встречи команд и менторов: аудитория, продукт, партнёры и модель развития.','Паспорта проектов и планы запуска'],
  ['Редакционная встреча','Журнал «Ямал»','Сбор историй, знакомство с героями и обсуждение тем планируемого выпуска.','Редакционный план и пул авторов'],
  ['Демо-день и встречи с партнёрами','Выход к рынку','Презентация продуктов и брендов, обсуждение коллабораций и продвижения за пределами региона.','Новые партнёрства и следующие шаги'],
];
export function EventPlan(){return <section id="events" className="events section-shell" aria-labelledby="events-title"><div className="section-heading"><div><div className="section-label">Встречаться. Делать. Менять.</div><h2 id="events-title">План<br/><em>мероприятий.</em></h2></div><p>Предлагаемая программа запуска рабочей группы. Даты, площадки и условия участия будут опубликованы после согласования.</p></div><ol className="event-agenda">{events.map(([title,theme,text,result],i)=><li key={title}><span className="event-stage">Этап {String(i+1).padStart(2,'0')}</span><div><span className="event-theme">{theme}</span><h3>{title}</h3><p>{text}</p></div><div className="event-result"><span>Результат</span><p>{result}</p></div></li>)}</ol><a className="text-button" href="#submit">Предложить тему или формат встречи ↗</a></section>}
