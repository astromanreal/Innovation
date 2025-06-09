
import PollPageClient from './PollPageClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quick Polls: Share Your Perspective | Innovation Hub Explorer',
  description: 'Engage with thought-provoking questions on innovation, technology, and ethics. Share your opinion, see community perspectives, and contribute to the conversation.',
  keywords: ['quick polls', 'innovation questions', 'technology polls', 'ethics polls', 'user engagement', 'community feedback', 'tech opinions', 'future trends polls'],
  openGraph: {
    title: 'Quick Polls: Share Your Perspective | Innovation Hub Explorer',
    description: 'Participate in quick polls and share your perspective on key innovation topics like AI, ethics, and future technologies.',
    url: '/poll',
    images: [
      {
        url: '/og-polls.png',
        width: 1200,
        height: 630,
        alt: 'Quick Polls on Innovation Hub Explorer - Share Your Perspective',
      },
    ],
  },
  twitter: {
    title: 'Quick Polls | Innovation Hub Explorer',
    description: 'Share your thoughts on innovation, tech, and ethics. See what the community thinks!',
    images: ['/og-polls.png'],
  },
  alternates: {
    canonical: '/poll',
  },
};

export default function PollPage() {
  return <PollPageClient />;
}
