
import type { Metadata } from 'next';
import AgritechFoodTechnologyPageClient from './AgritechFoodTechnologyPageClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Agritech & Food Technology | Innovation Hub Explorer',
    description: 'Explore how advanced technologies are transforming agriculture and food production for sustainability, efficiency, and food security.',
    keywords: ['Agritech', 'Food Technology', 'Precision Farming', 'Vertical Farming', 'Lab-Grown Meat', 'Cellular Agriculture', 'Sustainable Agriculture', 'Food Supply Chain'],
    openGraph: {
      title: 'Agritech & Food Technology | Innovation Hub Explorer',
      description: 'Innovations transforming agriculture and food production.',
      url: '/explore/agritech-food-technology',
      images: [
        {
          url: '/og-agritech.png',
          width: 1200,
          height: 630,
          alt: 'Agritech and Food Technology Abstract Visualization',
        },
      ],
    },
    twitter: {
      title: 'Agritech & Food Technology',
      description: 'The future of farming and food.',
      images: ['/og-agritech.png'],
    },
    alternates: {
      canonical: '/explore/agritech-food-technology',
    },
  };
}

export default function AgritechFoodTechnologyPage() {
  return <AgritechFoodTechnologyPageClient />;
}
