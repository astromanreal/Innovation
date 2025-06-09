
import type { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:9002';

// Function to generate sitemap entries, reusable for the sitemap display page
export async function getSitemapEntries(): Promise<MetadataRoute.Sitemap> {
  const staticPagePaths = [
    { path: '', priority: 1.0, changeFrequency: 'daily' },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/consciousness', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/contact', priority: 0.7, changeFrequency: 'yearly' },
    { path: '/domains', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/future-forecasts', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/innovation', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/innovators', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/nobel', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/poll', priority: 0.6, changeFrequency: 'weekly' },
    { path: '/profile', priority: 0.3, changeFrequency: 'yearly' }, // Lower priority, less frequent changes
    { path: '/research', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/settings', priority: 0.4, changeFrequency: 'yearly' }, // Lower priority
    { path: '/startup', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/technology', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/tools', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/privacy', priority: 0.5, changeFrequency: 'yearly' },
    { path: '/terms', priority: 0.5, changeFrequency: 'yearly' },
    { path: '/sitemap-page', priority: 0.6, changeFrequency: 'monthly' }
  ];

  const staticPages = staticPagePaths.map((page) => ({
    url: `${BASE_URL}${page.path}`,
    lastModified: new Date().toISOString(),
    changeFrequency: page.changeFrequency as MetadataRoute.Sitemap[0]['changeFrequency'],
    priority: page.priority,
  }));

  const dedicatedExplorePageSlugs = [
    "artificial-intelligence", 
    "robotics-automation", 
    "quantum-computing", 
    "blockchain-web3", 
    "nanotechnology", 
    "bioengineering-genomics", 
    "ar-vr-metaverse", 
    "advanced-materials",
    "space-technology",
    "internet-of-things",
    "cybersecurity",
    "renewable-energy",
    "5g-next-gen-connectivity",
    "human-computer-interaction",
    "autonomous-vehicles",
    "data-science-big-data",
    "synthetic-biology",
    "wearable-health-tech",
    "edge-cloud-computing",
    "fintech",
    "smart-cities",
    "additive-manufacturing",
    "agritech-food-technology"
  ];

  const dedicatedExplorePages = dedicatedExplorePageSlugs.map(slug => ({
    url: `${BASE_URL}/explore/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as MetadataRoute.Sitemap[0]['changeFrequency'],
    priority: 0.7,
  }));
  
  return [...staticPages, ...dedicatedExplorePages].sort((a, b) => (b.priority || 0) - (a.priority || 0));
}

// Default export for Next.js sitemap.xml generation
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return getSitemapEntries();
}
