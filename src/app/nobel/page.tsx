
import NobelPageClient from './NobelPageClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nobel Prize Insights: Science & Technology | Innovation Hub Explorer',
  description: 'Explore Nobel Prize-winning discoveries in science and technology. Learn about their impact on humanity, the laureates behind them, and the fascinating stories of innovation.',
  keywords: ['Nobel Prize', 'science breakthroughs', 'technology innovations', 'physics Nobel', 'chemistry Nobel', 'medicine Nobel', 'laureates', 'scientific discovery', 'innovation history'],
  openGraph: {
    title: 'Nobel Prize Insights: Science & Technology | Innovation Hub Explorer',
    description: 'Discover Nobel-winning breakthroughs in Physics, Chemistry, and Medicine, their global impact, and the laureates who made them possible.',
    url: '/nobel',
     images: [
      {
        url: '/og-nobel-insights.png',
        width: 1200,
        height: 630,
        alt: 'Exploring Nobel Prize Winning Discoveries in Science and Technology',
      },
    ],
  },
  twitter: {
    title: 'Nobel Prize Insights: Science & Technology | Innovation Hub Explorer',
    description: 'Explore Nobel-winning discoveries, their impact, and the inspiring laureates.',
    images: ['/og-nobel-insights.png'],
  },
  alternates: {
    canonical: '/nobel',
  },
};

export default function NobelPage() {
  return <NobelPageClient />;
}
