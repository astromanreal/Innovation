
import type { Metadata } from 'next';
import SyntheticBiologyPageClient from './SyntheticBiologyPageClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Synthetic Biology | Innovation Hub Explorer',
    description: 'Explore the field of Synthetic Biology: designing and constructing new biological parts, devices, and systems. Discover applications, technologies, ethical considerations, and future trends.',
    keywords: ['Synthetic Biology', 'SynBio', 'Genetic Engineering', 'CRISPR', 'BioBricks', 'Biofoundry', 'Living Materials', 'Programmable Cells'],
     openGraph: {
      title: 'Synthetic Biology | Innovation Hub Explorer',
      description: 'Designing and constructing new biological parts, devices, and systems.',
      url: '/explore/synthetic-biology',
      images: [
        {
          url: '/og-synthetic-biology.png', 
          width: 1200,
          height: 630,
          alt: 'Synthetic Biology Abstract Visualization',
        },
      ],
    },
    twitter: {
      title: 'Synthetic Biology | Innovation Hub Explorer',
      description: 'The engineering of biology for new solutions.',
      images: ['/og-synthetic-biology.png'],
    },
    alternates: {
      canonical: '/explore/synthetic-biology',
    },
  };
}

export default function SyntheticBiologyPage() {
  return <SyntheticBiologyPageClient />;
}
