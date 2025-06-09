
import type { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';

export const metadata: Metadata = { 
  title: 'Contact Us | Innovation Hub Explorer',
  description: 'Get in touch with the Innovation Hub Explorer team for questions, feedback, or collaboration opportunities. Reach out via form, email, or social media.',
  keywords: ['contact us', 'support', 'feedback', 'collaboration', 'innovation hub contact', 'tech support', 'inquiry'],
  openGraph: {
    title: 'Contact Us | Innovation Hub Explorer',
    description: 'Reach out to us for inquiries, feedback, or partnership ideas related to technology and innovation.',
    url: '/contact',
    images: [
      {
        url: '/og-contact.png', 
        width: 1200,
        height: 630,
        alt: 'Contact Innovation Hub Explorer',
      },
    ],
  },
  twitter: {
    title: 'Contact Us | Innovation Hub Explorer',
    description: 'Connect with the Innovation Hub Explorer team for your tech and innovation queries.',
    images: ['/og-contact.png'],
  },
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
