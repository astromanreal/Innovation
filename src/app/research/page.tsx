
import ResearchLibraryClient from './ResearchLibraryClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Research & Resources Library',
  description: 'Browse and filter a curated collection of academic papers, articles, reports, and visual resources on technology, innovation, and scientific breakthroughs.',
  keywords: ['research library', 'academic papers', 'technology reports', 'innovation articles', 'scientific resources', 'data visualization', 'infographics'],
  openGraph: {
    title: 'Research Library | Innovation Hub Explorer',
    description: 'Access a curated collection of research on innovation and technology.',
    url: '/research',
    images: [
      {
        url: '/og-research.png', // Replace with an actual relevant image
        width: 1200,
        height: 630,
        alt: 'Research & Resources Library',
      },
    ],
  },
  twitter: {
    title: 'Research Library | Innovation Hub Explorer',
    description: 'Explore papers, reports, and visual resources on innovation.',
  },
  alternates: {
    canonical: '/research',
  },
};

export default function ResearchLibraryPage() {
  return <ResearchLibraryClient />;
}
