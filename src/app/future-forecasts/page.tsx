
import FutureForecastsPageClient from './FutureForecastsPageClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Future Forecasts & Technological Horizons | Innovation Hub Explorer',
  description: 'Explore expert predictions, speculative scenarios, and emerging trends across key technology domains like AI, Bioengineering, Space Tech, and Climate Tech. Understand potential long-term impacts.',
  keywords: ['future forecasts', 'technological trends', 'speculative technology', 'emerging tech', 'AI future', 'biotech horizons', 'space exploration outlook', 'climate tech predictions', 'long-term innovation'],
  openGraph: {
    title: 'Future Forecasts & Technological Horizons | Innovation Hub Explorer',
    description: 'Discover predictions and speculative scenarios for future technological advancements in AI, Bioengineering, Space, and Climate Tech.',
    url: '/future-forecasts',
    images: [
      {
        url: '/og-future-forecasts.png', 
        width: 1200,
        height: 630,
        alt: 'Future Forecasts and Technological Horizons Visualization',
      },
    ],
  },
  twitter: {
    title: 'Future Forecasts | Innovation Hub Explorer',
    description: 'Exploring the technological horizons of tomorrow: AI, Bioengineering, Space, and Climate Tech.',
    images: ['/og-future-forecasts.png'],
  },
  alternates: {
    canonical: '/future-forecasts',
  },
};


export default function FutureForecastsPage() {
  return <FutureForecastsPageClient />;
}
