
import type { Metadata } from 'next';
import EdgeCloudComputingPageClient from './EdgeCloudComputingPageClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Edge & Cloud Computing | Innovation Hub Explorer',
    description: 'Explore Edge and Cloud Computing: concepts, evolution, applications in IoT and AI, core technologies, challenges, and future trends in distributed computing architectures.',
    keywords: ['Edge Computing', 'Cloud Computing', 'Distributed Systems', 'Serverless', 'Microservices', 'IoT', 'AI at the Edge', 'Hybrid Cloud', 'Multi-Cloud', '5G Computing'],
     openGraph: {
      title: 'Edge & Cloud Computing Deep Dive | Innovation Hub Explorer',
      description: 'Exploring distributed computing architectures for modern digital services, from centralized clouds to processing at the network fringe.',
      url: '/explore/edge-cloud-computing',
      images: [
        {
          url: '/og-edge-cloud.png',
          width: 1200,
          height: 630,
          alt: 'Edge and Cloud Computing Abstract Visualization',
        },
      ],
    },
    twitter: {
      title: 'Edge & Cloud Computing Explained',
      description: 'The backbone of modern digital infrastructure: Understanding edge and cloud computing synergies.',
      images: ['/og-edge-cloud.png'],
    },
    alternates: {
      canonical: '/explore/edge-cloud-computing',
    },
  };
}

export default function EdgeCloudComputingPage() {
  return <EdgeCloudComputingPageClient />;
}
