
import type { Metadata } from 'next';
import AdditiveManufacturingPageClient from './AdditiveManufacturingPageClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Additive Manufacturing (3D Printing) | Innovation Hub Explorer',
    description: 'Explore Additive Manufacturing (3D Printing): concepts, evolution, applications in aerospace and healthcare, core technologies, challenges, and future trends.',
    keywords: ['Additive Manufacturing', '3D Printing', 'Rapid Prototyping', 'Stereolithography', 'SLS', 'FDM', 'Bioprinting', 'Materials Science'],
    openGraph: {
      title: 'Additive Manufacturing (3D Printing) | Innovation Hub Explorer',
      description: 'Creating objects layer by layer directly from digital models.',
      url: '/explore/additive-manufacturing',
      images: [
        {
          url: '/og-additive-manufacturing.png',
          width: 1200,
          height: 630,
          alt: 'Additive Manufacturing Process Visualization',
        },
      ],
    },
    twitter: {
      title: 'Additive Manufacturing (3D Printing)',
      description: 'The future of making things.',
      images: ['/og-additive-manufacturing.png'],
    },
    alternates: {
      canonical: '/explore/additive-manufacturing',
    },
  };
}

export default function AdditiveManufacturingPage() {
  return <AdditiveManufacturingPageClient />;
}
