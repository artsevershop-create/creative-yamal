import type { Metadata } from 'next';
import './globals.css';
import './regional.css';
import './motion.css';
import './editorial.css';
import './strategy.css';

export const metadata: Metadata = {
  title: 'Креативный Ямал — люди, идеи, проекты',
  description: 'Демонстрационный прототип цифровой платформы креативных индустрий Ямала.',
  openGraph: {
    title: 'Креативный Ямал',
    description: 'Люди. Идеи. Проекты. На весь мир.',
    locale: 'ru_RU',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
