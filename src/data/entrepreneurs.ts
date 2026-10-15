// Каталог предпринимателей, привязанный к городам карты ЯНАО.
// Источник данных пока не подключён. Записи с пометкой «макет» — заглушки для проверки интерфейса,
// их нужно удалить перед публикацией и заменить подтверждёнными данными.
// Категории предложены для обсуждения и не утверждены.

export const categories = [
  'Дизайн и мода',
  'Ремёсла и народные промыслы',
  'Архитектура и интерьер',
  'Медиа и digital',
  'Туризм и гостеприимство',
  'Образование и культура',
  'Гастрономия',
  'Другое',
] as const;

export type Category = (typeof categories)[number];

export type Entrepreneur = {
  id: string;
  name: string;
  cityId: string; // id города из src/data/map.ts
  category: Category;
  description?: string;
  url?: string;
  isSample?: boolean; // true = макетная запись, не реальный предприниматель
};

export const entrepreneurs: Entrepreneur[] = [
  {
    id: 'severny-kharakter',
    name: 'ООО «Северный характер»',
    cityId: 'salekhard',
    category: 'Дизайн и мода',
    description: 'бренд одежды «Северный мерч»',
    url: 'https://xn--b1afbatsfxeb9ezb.xn--p1ai/',
  },
  { id: 'sample-1', name: 'Макет: текстильная мастерская', cityId: 'salekhard', category: 'Дизайн и мода', isSample: true },
  { id: 'sample-2', name: 'Макет: студия керамики', cityId: 'salekhard', category: 'Ремёсла и народные промыслы', isSample: true },
  { id: 'sample-3', name: 'Макет: digital-агентство', cityId: 'urengoy', category: 'Медиа и digital', isSample: true },
];
