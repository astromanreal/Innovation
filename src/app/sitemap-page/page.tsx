
import Link from 'next/link';
import { getSitemapEntries } from '@/app/sitemap';
import { Section } from '@/components/Section';
import { List } from 'lucide-react';
import type { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Sitemap | Innovation Hub Explorer',
  description: 'An overview of all pages available on the Innovation Hub Explorer platform. Easily navigate to key sections and technology domain deep dives.',
  keywords: ['sitemap', 'navigation', 'all pages', 'site structure', 'innovation hub explorer sitemap', 'explore pages', 'site navigation'],
  openGraph: {
    title: 'Sitemap | Innovation Hub Explorer',
    description: 'Explore all pages on our platform for easy navigation and discovery of content on technology and innovation.',
    url: '/sitemap-page',
    images: [
      {
        url: '/og-sitemap.png',
        width: 1200,
        height: 630,
        alt: 'Sitemap of Innovation Hub Explorer',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/sitemap-page',
  }
};

function generatePageName(url: string, baseUrl: string): string {
  let path = url.replace(baseUrl, '');
  if (path === '' || path === '/') return 'Homepage';

  path = path.startsWith('/') ? path.substring(1) : path;
  
  if (path.startsWith('explore/')) {
    const domainSlug = path.replace('explore/', '');
    return `Explore: ${domainSlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}`;
  }
  
  return path.split(/[\/-]/).map(segment => segment.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')).join(' - ');
}


export default async function SitemapDisplayPage() {
  const sitemapEntries = await getSitemapEntries();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:9002';

  // Categorize entries
  const mainPages = sitemapEntries.filter(
    entry => !entry.url.includes('/explore/') && entry.priority && entry.priority >= 0.8 && entry.url !== `${baseUrl}/sitemap-page` && entry.url !== `${baseUrl}/profile` && entry.url !== `${baseUrl}/settings`
  ).sort((a,b) => (b.priority || 0) - (a.priority || 0));

  const explorePages = sitemapEntries.filter(
    entry => entry.url.includes('/explore/')
  ).sort((a,b) => generatePageName(a.url, baseUrl).localeCompare(generatePageName(b.url, baseUrl)));

  const utilityPages = sitemapEntries.filter(
    entry => (entry.priority && entry.priority < 0.8) || entry.url === `${baseUrl}/sitemap-page` || entry.url === `${baseUrl}/profile` || entry.url === `${baseUrl}/settings`
  ).sort((a,b) => generatePageName(a.url, baseUrl).localeCompare(generatePageName(b.url, baseUrl)));


  const renderLinks = (entries: typeof sitemapEntries) => (
    <ul className="list-none space-y-2 columns-1 sm:columns-2 lg:columns-3 gap-x-6">
      {entries.map((entry) => {
        const path = new URL(entry.url).pathname;
        const name = generatePageName(entry.url, baseUrl);
        return (
          <li key={entry.url} className="break-inside-avoid">
            <Link href={path} className="text-primary hover:underline text-sm">
              {name}
            </Link>
          </li>
        );
      })}
    </ul>
  );

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 space-y-12">
      <header className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-3 flex items-center justify-center gap-2">
          <List className="w-8 h-8" /> Site Map
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          An overview of all major sections and pages available on the Innovation Hub Explorer.
        </p>
      </header>

      {mainPages.length > 0 && (
        <Section title="Main Navigation" description="Key areas of the Innovation Hub Explorer.">
          <Card className="bg-card">
            <CardContent className="pt-6">
              {renderLinks(mainPages)}
            </CardContent>
          </Card>
        </Section>
      )}

      {explorePages.length > 0 && (
        <Section title="Technology Domain Deep Dives" description="Explore specific technology fields in detail.">
          <Card className="bg-card">
            <CardContent className="pt-6">
              {renderLinks(explorePages)}
            </CardContent>
          </Card>
        </Section>
      )}

      {utilityPages.length > 0 && (
        <Section title="Utility & Information Pages" description="Other useful pages on the platform.">
          <Card className="bg-card">
            <CardContent className="pt-6">
              {renderLinks(utilityPages)}
            </CardContent>
          </Card>
        </Section>
      )}
    </div>
  );
}
