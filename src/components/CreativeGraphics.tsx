type IconKind = 'business' | 'design' | 'media' | 'culture' | 'expert' | 'community' | 'partners';

export function RoleIcon({kind}:{kind:IconKind}){
  const drawings = {
    business: <><path d="M15 53V34h14v19M33 53V24h14v29M51 53V13h14v40M12 64h56"/><path d="m16 22 17-9 13 2 17-9m-10 0h10v10"/></>,
    design: <><path d="m19 54 6-19L53 7l14 14-28 28-20 5Zm6-19 14 14M47 13l14 14M16 64h48"/><circle cx="19" cy="54" r="3"/></>,
    media: <><rect x="21" y="20" width="38" height="35" rx="8"/><path d="m35 30 13 8-13 8V30ZM14 24a26 26 0 0 0 0 28M66 24a26 26 0 0 1 0 28M8 14a40 40 0 0 0 0 48M72 14a40 40 0 0 1 0 48"/></>,
    culture: <><path d="M12 60 40 12l28 48H12Zm0 0 28-26 28 26M40 12v48M24 60V43m32 17V43M12 68h56"/><path d="m29 24 11-8 11 8"/></>,
    expert: <><path d="m40 8 8 20 22 2-17 15 5 22-18-12-18 12 5-22-17-15 22-2 8-20Z"/><circle cx="40" cy="39" r="9"/></>,
    community: <><circle cx="40" cy="20" r="9"/><circle cx="17" cy="34" r="7"/><circle cx="63" cy="34" r="7"/><path d="M25 63V48a15 15 0 0 1 30 0v15H25ZM8 62V52a9 9 0 0 1 13-8m51 18V52a9 9 0 0 0-13-8"/></>,
    partners: <><path d="m10 28 30-16 30 16H10Zm5 34h50M10 69h60M20 34v22m13-22v22m14-22v22m13-22v22"/><circle cx="40" cy="23" r="2"/></>,
  };
  return <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{drawings[kind]}</svg>;
}

const members = [
  ['business','Предприниматели','Локальные бренды, продукты и новые рынки.'],
  ['culture','Мастера и культура','Ремёсла, наследие и современное искусство.'],
  ['media','Digital и медиа','Технологии, контент и новые форматы.'],
  ['community','Сообщества и туризм','Люди, маршруты и события, которые объединяют.'],
  ['expert','Эксперты и менторы','Образование, опыт и поддержка команд.'],
  ['partners','Партнёры и инвесторы','Бизнес, органы власти и ресурсы для развития.'],
] as const;

export function WorkingGroup(){return <div className="group-members creative-group"><div className="group-intro"><h3>Рабочая группа</h3><p>Разные компетенции.<br/>Общее движение вперёд.</p></div><div className="member-grid">{members.map(([kind,title,text],i)=><article className="member-card" key={kind}><div className="member-symbol"><RoleIcon kind={kind}/><span>{String(i+1).padStart(2,'0')}</span></div><h4>{title}</h4><p>{text}</p></article>)}</div><p className="group-caption">Будущая площадка для диалога, совместных проектов и реализации инициатив.</p></div>}

export function NorthernEditorial(){return <div className="northern-editorial"><div className="north-photo north-photo-wide" role="img" aria-label="Художественный образ человека в северном ландшафте"/><div className="north-photo north-photo-detail" role="img" aria-label="Художественный портрет с оленем из предоставленных референсов"/><div className="north-editorial-caption"><span>Север — в людях.</span><small>Визуальная концепция · образы из референсов</small></div></div>}
