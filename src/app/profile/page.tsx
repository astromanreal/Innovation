
import { Section } from '@/components/Section';
import { User } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'User Profile | Innovation Hub Explorer',
  description: 'View and manage your user profile settings and preferences on the Innovation Hub Explorer. This feature is currently under development.',
  keywords: ['profile', 'user settings', 'account management', 'preferences', 'my account'],
  openGraph: {
    title: 'User Profile | Innovation Hub Explorer',
    description: 'Manage your profile and preferences. Note: Full functionality is planned for a future update.',
    url: '/profile',
    images: [
      {
        url: '/og-profile.png',
        width: 1200,
        height: 630,
        alt: 'User Profile Page - Innovation Hub Explorer',
      },
    ],
  },
  twitter: {
    title: 'User Profile | Innovation Hub Explorer',
    description: 'Your profile settings and preferences area.',
    images: ['/og-profile.png'],
  },
  robots: { 
    index: false, // Keep as noindex for now as it's a placeholder
    follow: true,
  },
  alternates: {
    canonical: '/profile',
  },
};

export default function ProfilePage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12 space-y-12">
      <Section title="User Profile" titleIcon={<User className="w-6 h-6 text-primary"/>} description="View and manage your profile information. Full functionality is planned for future updates.">
        <div className="text-center py-10 bg-muted/30 rounded-lg border border-dashed">
          <p className="text-muted-foreground">User profile details, personalized content suggestions, and saved items will be available here once user accounts are implemented.</p>
           <p className="text-sm text-muted-foreground mt-4">(Placeholder Page: User Account Features Coming Soon)</p>
        </div>
      </Section>
    </div>
  );
}
