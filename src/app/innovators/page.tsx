
import InnovatorsPageClient from './InnovatorsPageClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Key Innovators & Companies | Innovation Hub Explorer',
  description: 'Explore influential people, companies, startups, and research institutions shaping major technology domains globally. Filter by domain, entity type, and country to discover innovation leaders.',
  keywords: ['innovators', 'tech companies', 'research institutions', 'startups', 'AI leaders', 'quantum pioneers', 'biotech innovators', 'global technology', 'innovation leaders', 'tech pioneers'],
  openGraph: {
    title: 'Key Innovators & Companies | Innovation Hub Explorer',
    description: 'Discover the people and organizations driving global technological advancements and shaping the future of innovation.',
    url: '/innovators',
    images: [
      {
        url: '/og-innovators.png',
        width: 1200,
        height: 630,
        alt: 'Key Innovators & Companies Driving Global Technology',
      },
    ],
  },
  twitter: {
    title: 'Key Innovators & Companies | Innovation Hub Explorer',
    description: 'Meet the minds and organizations shaping our technological future. Explore leaders in AI, biotech, quantum, and more.',
    images: ['/og-innovators.png'],
  },
  alternates: {
    canonical: '/innovators',
  },
};

export default function InnovatorsPage() {
  return <InnovatorsPageClient />;
}
