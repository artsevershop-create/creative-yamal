'use client';
import { useEffect, useState } from 'react';

const emptyDraft={name:'',email:'',project:'',contribution:'',topic:'Рабочая группа'};
export function ApplicationForm(){
  const [draft,setDraft]=useState(emptyDraft);
  const [notice,setNotice]=useState('');
  useEffect(()=>{try{const saved=JSON.parse(localStorage.getItem('yamal-group-draft')||'null');if(saved&&['name','email','project','contribution'].every(k=>typeof saved[k]==='string'))setDraft({...emptyDraft,...saved});}catch{}},[]);
  function saveDraft(){try{localStorage.setItem('yamal-group-draft',JSON.stringify(draft));setNotice('Черновик сохранён в этом браузере. Чтобы отправить заявку, нажмите «Отправить заявку».');}catch{setNotice('Не удалось сохранить черновик. Скопируйте текст перед закрытием страницы.');}}
  return <form action="https://formsubmit.co/artsevershop@gmail.com" method="POST">
    <input type="hidden" name="_subject" value="Новая заявка — Креативный Ямал"/>
    <input type="hidden" name="_template" value="table"/>
    <input type="hidden" name="_next" value="https://artsevershop-create.github.io/creative-yamal/thanks/"/>
    <input type="text" name="_honey" className="form-honeypot" tabIndex={-1} autoComplete="off" aria-hidden="true"/>
    <label>Тема обращения<select name="Тема обращения" value={draft.topic} onChange={e=>setDraft({...draft,topic:e.target.value})}>{['Рабочая группа','Проект для карты ЯНАО','История для журнала «Ямал»','Мероприятия','Yamal Native Design','Creative Export Yamal','ИИ-сотрудник по закупкам','Другое сотрудничество'].map(topic=><option key={topic}>{topic}</option>)}</select></label>
    <label>Как вас зовут<input name="Имя" autoComplete="name" required maxLength={150} value={draft.name} onChange={e=>setDraft({...draft,name:e.target.value})} placeholder="Имя и фамилия"/></label>
    <label>Электронная почта<input name="email" type="email" autoComplete="email" required maxLength={254} value={draft.email} onChange={e=>setDraft({...draft,email:e.target.value})} placeholder="you@example.ru"/></label>
    <label>Ваш проект и связь с Ямалом<textarea name="Проект и связь с Ямалом" required maxLength={10000} rows={4} value={draft.project} onChange={e=>setDraft({...draft,project:e.target.value})} placeholder="Что вы делаете? Добавьте ссылки на работы или опишите предложение."/></label>
    <label>Чем готовы помочь рабочей группе<textarea name="Вклад в работу группы" maxLength={5000} rows={3} value={draft.contribution} onChange={e=>setDraft({...draft,contribution:e.target.value})} placeholder="Экспертиза, идеи, направления сотрудничества"/></label>
    <label className="form-consent"><input type="checkbox" name="Согласие на отправку" value="Да" required/><span>Согласен передать указанные данные команде «Креативный Ямал» через FormSubmit для рассмотрения обращения и ответа на него.</span></label>
    <div className="form-actions"><button className="button button-dark" type="submit">Отправить заявку <span aria-hidden="true">↗</span></button><button className="text-button" type="button" onClick={saveDraft}>Сохранить черновик</button></div>
    <p className="form-notice" role="status">{notice}</p>
    <p className="form-delivery-note">Отправка проходит через FormSubmit с проверкой от спама. Если сервис недоступен, напишите напрямую: <a href="mailto:artsevershop@gmail.com">artsevershop@gmail.com</a>.</p>
  </form>;
}
