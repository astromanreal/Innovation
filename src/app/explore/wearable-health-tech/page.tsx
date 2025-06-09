
import type { Metadata } from 'next';
import WearableHealthTechPageClient from './WearableHealthTechPageClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Wearable Technology & Health Tech | Innovation Hub Explorer',
    description: 'Explore wearable devices, health tech, biosensors, digital therapeutics, telemedicine, and their impact on personalized healthcare and wellness.',
    keywords: ['Wearable Technology', 'Health Tech', 'Digital Health', 'Biosensors', 'Telemedicine', 'Digital Therapeutics', 'mHealth', 'Personalized Medicine'],
     openGraph: {
      title: 'Wearable Technology & Health Tech | Innovation Hub Explorer',
      description: 'Transforming personalized healthcare and wellness through innovative devices.',
      url: '/explore/wearable-health-tech',
      images: [
        {
          url: '/og-wearable-health.png',
          width: 1200,
          height: 630,
          alt: 'Wearable Technology and Health Tech Concepts',
        },
      ],
    },
    twitter: {
      title: 'Wearable Technology & Health Tech',
      description: 'The future of personalized health monitoring and care.',
      images: ['/og-wearable-health.png'],
    },
    alternates: {
      canonical: '/explore/wearable-health-tech',
    },
  };
}

export default function WearableHealthTechPage() {
  return <WearableHealthTechPageClient />;
}
