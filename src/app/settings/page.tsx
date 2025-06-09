
import SettingsPageClient from './SettingsPageClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Application Settings',
  description: 'Manage your application settings, preferences, and account configurations on the Innovation Hub Explorer.',
  keywords: ['settings', 'preferences', 'account configuration', 'application settings', 'theme settings', 'privacy controls', 'user interests'],
   openGraph: {
    title: 'Settings | Innovation Hub Explorer',
    description: 'Configure your application preferences, theme, and more.',
    url: '/settings',
  },
  twitter: {
    title: 'Settings | Innovation Hub Explorer',
    description: 'Manage your application settings.',
  },
  robots: { 
    index: true, // Changed to true as settings page is a core feature
    follow: true,
  },
  alternates: {
    canonical: '/settings',
  },
};

export default function SettingsPage() {
  return <SettingsPageClient />;
}
