
import type { Metadata } from 'next';
import SmartCitiesPageClient from './SmartCitiesPageClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Smart Cities & Urban Tech | Innovation Hub Explorer',
    description: 'Explore smart city technologies, IoT-enabled infrastructure, intelligent mobility, environmental monitoring, and the future of urban living.',
    keywords: ['Smart Cities', 'Urban Technology', 'IoT', 'Smart Infrastructure', 'Intelligent Mobility', 'Citizen Engagement', 'Sustainable Cities', 'Urban Innovation'],
    openGraph: {
      title: 'Smart Cities & Urban Tech | Innovation Hub Explorer',
      description: 'Integrating advanced technologies for better urban life.',
      url: '/explore/smart-cities',
      images: [
        {
          url: '/og-smart-cities.png', 
          width: 1200,
          height: 630,
          alt: 'Smart Cities and Urban Technology Visualization',
        },
      ],
    },
    twitter: {
      title: 'Smart Cities & Urban Tech',
      description: 'The future of urban innovation.',
      images: ['/og-smart-cities.png'],
    },
    alternates: {
      canonical: '/explore/smart-cities',
    },
  };
}

export default function SmartCitiesPage() {
  return <SmartCitiesPageClient />;
}
