
import type { Metadata } from 'next';
import HumanComputerInteractionPageClient from './HumanComputerInteractionPageClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Human-Computer Interaction (HCI) | Innovation Hub Explorer',
    description: 'Explore Human-Computer Interaction: core concepts, history, applications in assistive tech and VR/AR, future trends like BCIs, and ethical considerations.',
    keywords: ['HCI', 'Human-Computer Interaction', 'BCI', 'Brain-Computer Interface', 'Gesture Recognition', 'Voice AI', 'Haptics', 'User Experience', 'UX', 'Interaction Design'],
    openGraph: {
      title: 'Human-Computer Interaction (HCI) | Innovation Hub Explorer',
      description: 'Delve into the future of how humans interact with technology, from voice and gesture to brain-computer interfaces.',
      url: '/explore/human-computer-interaction',
      images: [
        {
          url: '/og-hci.png', // To be created by user
          width: 1200,
          height: 630,
          alt: 'Human-Computer Interaction Abstract Visualization',
        },
      ],
    },
    twitter: {
      title: 'Human-Computer Interaction (HCI) | Innovation Hub Explorer',
      description: 'Exploring the next generation of human-machine interfaces and experiences.',
      images: ['/og-hci.png'], // To be created by user
    },
    alternates: {
      canonical: '/explore/human-computer-interaction',
    },
  };
}

export default function HumanComputerInteractionPage() {
  return <HumanComputerInteractionPageClient />;
}
