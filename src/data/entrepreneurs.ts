// Каталог предпринимателей, привязанный к городам карты ЯНАО.
// Записи добавляются по мере поступления подтверждённых заявок.
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
};

export const entrepreneurs: Entrepreneur[] = [
  {
    id: 'severny-kharakter',
    name: 'ООО «Северный характер»',
    cityId: 'salekhard',
    category: 'Дизайн и мода',
    description: 'Бренд одежды «Северный мерч».',
    url: 'https://xn--b1afbatsfxeb9ezb.xn--p1ai/',
  },
];
