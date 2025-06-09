
import ToolsPlatformsPageClient from './ToolsPlatformsPageClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Developer Tools & Platforms',
  description: 'Explore a curated directory of essential open-source and commercial tools, frameworks, SDKs, and platforms across various technology domains like AI, Quantum Computing, Blockchain, and Web Development.',
  keywords: ['developer tools', 'software platforms', 'open source', 'frameworks', 'SDKs', 'AI tools', 'quantum computing tools', 'blockchain tools', 'development platforms', 'coding resources'],
  openGraph: {
    title: 'Developer Tools & Platforms | Innovation Hub Explorer',
    description: 'Discover essential tools and platforms for developers and researchers across leading tech domains.',
    url: '/tools',
    images: [
      {
        url: '/og-tools.png', // To be created by user
        width: 1200,
        height: 630,
        alt: 'Developer Tools & Platforms Directory',
      },
    ],
  },
  twitter: {
    title: 'Developer Tools & Platforms | Innovation Hub Explorer',
    description: 'Your guide to essential dev tools across AI, Quantum, Blockchain, and more.',
  },
  alternates: {
    canonical: '/tools',
  },
};

export default function ToolsPlatformsPage() {
  return <ToolsPlatformsPageClient />;
}
