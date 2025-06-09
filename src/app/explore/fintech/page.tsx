
import type { Metadata } from 'next';
import FinTechPageClient from './FinTechPageClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Financial Technology (FinTech) | Innovation Hub Explorer',
    description: 'Explore FinTech: digital payments, neobanks, AI in lending, DeFi, RegTech. Understand core technologies, challenges, future trends, and key players in financial services innovation.',
    keywords: ['FinTech', 'Financial Technology', 'Digital Payments', 'Neobanks', 'DeFi', 'Blockchain Finance', 'AI Lending', 'RegTech', 'InsurTech', 'Open Banking'],
    openGraph: {
      title: 'Financial Technology (FinTech) Deep Dive | Innovation Hub Explorer',
      description: 'Transforming financial services through technology: digital payments, neobanks, AI, DeFi, and more.',
      url: '/explore/fintech',
      images: [
        {
          url: '/og-fintech.png',
          width: 1200,
          height: 630,
          alt: 'FinTech Abstract Concepts and Digital Finance Visualization',
        },
      ],
    },
    twitter: {
      title: 'FinTech Explained | Innovation Hub Explorer',
      description: 'The evolution of money and finance: A deep dive into Financial Technology innovations.',
      images: ['/og-fintech.png'],
    },
    alternates: {
      canonical: '/explore/fintech',
    },
  };
}

export default function FinTechPage() {
  return <FinTechPageClient />;
}
