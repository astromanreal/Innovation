
import ConsciousnessPageClient from './ConsciousnessPageClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Consciousness & Future Intelligence | Innovation Hub Explorer',
  description: 'Explore AI sentience, AGI, self-awareness, the philosophy of artificial minds, ethical debates, and key questions about the future of intelligence and machine consciousness.',
  keywords: ['AI consciousness', 'AGI', 'machine sentience', 'artificial general intelligence', 'philosophy of mind', 'AI ethics', 'future intelligence', 'self-aware AI', 'machine consciousness', 'robot rights'],
  openGraph: {
    title: 'AI Consciousness & Future Intelligence | Innovation Hub Explorer',
    description: 'Delve into the frontiers of machine sentience, AGI, and the philosophical questions surrounding artificial minds and the potential for conscious AI.',
    url: '/consciousness',
     images: [
      {
        url: '/og-consciousness.png', 
        width: 1200,
        height: 630,
        alt: 'AI Consciousness and Future Intelligence Exploration',
      },
    ],
  },
  twitter: {
    title: 'AI Consciousness & Future Intelligence Deep Dive',
    description: 'Exploring AI sentience, AGI, machine consciousness, and the future of intelligence.',
    images: ['/og-consciousness.png'],
  },
  alternates: {
    canonical: '/consciousness',
  },
};

export default function ConsciousnessPage() {
  return <ConsciousnessPageClient />;
}
