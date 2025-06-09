
import { TechTimeline } from '@/components/TechTimeline';
import { NationalStrategies } from '@/components/NationalStrategies';
import { Section } from '@/components/Section';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { 
    Map, 
    Milestone, 
    Flag, 
    TrendingUp, 
    Globe, 
    Filter as FilterIcon,
    BarChart3, 
    BookOpen, 
    Users, 
    Rocket as RocketIcon, 
    ImageIcon, 
    Link as LinkIconLucide, 
    AlertTriangle,
    CheckSquare,
    Drama,
    MessageSquare,
    SlidersHorizontal, 
    Info,
    ExternalLink
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Global Innovation Tracker',
  description: 'Explore global innovation trends, historical milestones, national technology strategies, and data visualizations with interactive maps and timelines.',
  keywords: ['innovation tracker', 'global innovation', 'technology trends', 'tech milestones', 'national strategies', 'data visualization', 'innovation map', 'tech timeline'],
  openGraph: {
    title: 'Global Innovation Tracker | Innovation Hub Explorer',
    description: 'Visualize and understand global innovation with interactive tools and curated insights.',
    url: '/innovation',
     images: [
      {
        url: '/og-innovation-tracker.png', 
        width: 1200,
        height: 630,
        alt: 'Global Innovation Tracker Visualization',
      },
    ],
  },
  twitter: {
    title: 'Global Innovation Tracker',
    description: 'Explore global innovation trends with interactive maps and timelines.',
  },
  alternates: {
    canonical: '/innovation',
  },
};

export default function InnovationPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12 space-y-12 md:space-y-16">
      <header className="text-center mb-12 md:mb-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-primary flex items-center justify-center gap-3">
          <Globe className="w-10 h-10" /> Global Innovation Tracker
        </h1>
        <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
          Your gateway to exploring global tech breakthroughs, trends, and strategies through rich data visualization and curated insights.
        </p>
      </header>

      <Section 
        title="Technology Evolution Timeline" 
        titleIcon={<Milestone className="w-6 h-6 text-primary" />}
        description="Trace key breakthroughs using filters and keyword search. Expand event details for more information. Future enhancements include links to publications and animated views."
        className="bg-card"
      >
        <TechTimeline />
      </Section>
      
      <Section 
        title="National Tech Initiatives Dashboard" 
        titleIcon={<Flag className="w-6 h-6 text-primary" />}
        description="Discover key government strategies and national technology initiatives. Filter by country or focus area. Detailed initiative pages and comparison tools are planned."
        className="bg-card"
      >
        <NationalStrategies />
      </Section>

      <Section 
        title="Data Insights & Analytics" 
        titleIcon={<BarChart3 className="w-6 h-6 text-primary" />}
        description="This section will be developed to feature interactive dashboards on R&D investment, patent filings, and sector growth. Customizable views and report downloads are planned to provide deeper analytical capabilities."
      >
        <Card className="bg-muted/50 border-dashed">
          <CardContent className="pt-6 text-center">
            <BarChart3 className="w-12 h-12 text-muted-foreground mx-auto mb-4"/>
            <p className="text-muted-foreground mb-4">Interactive dashboards for exploring R&D spending, patent trends, and innovation output metrics are planned for this area. Stay tuned for customizable views and report downloads.</p>
          </CardContent>
        </Card>
      </Section>

      <Section 
        title="Future Feature Roadmap" 
        titleIcon={<RocketIcon className="w-6 h-6 text-primary" />}
        description="Stay informed about planned enhancements for the Innovation Tracker, including funding trends, patent landscapes, expert interviews, and AI-driven insights."
      >
        <Card className="bg-muted/50">
          <CardHeader>
            <CardTitle>What's Next for the Tracker?</CardTitle>
            <CardDescription>We're continuously working to enhance this platform.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
              <li>Advanced filtering across timeline and initiatives (unified panel).</li>
              <li>Deep dives into global funding trends and patent landscapes.</li>
              <li>Mapping cross-sector innovation networks and collaborations.</li>
              <li>Expert interviews and live webinars on innovation policy and strategy.</li>
              <li>Enhanced AI-driven insights and predictive trend analysis.</li>
              <li>Contextual learning modules with case studies.</li>
            </ul>
             <p className="text-xs text-muted-foreground mt-4">Community collaboration features are also under consideration for future development.</p>
          </CardContent>
        </Card>
      </Section>
      
      <Section 
        title="Linkages to Authoritative Sources" 
        titleIcon={<LinkIconLucide className="w-6 h-6 text-primary" />}
        description="Connecting you to primary research, government portals, and expert analyses for deeper dives. Each milestone and initiative aims to link to trusted external references."
      >
        <Card className="bg-muted/50">
            <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">This section will expand with curated links to patent databases, research repositories, and key industry reports to complement the information presented.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Link href="https://www.wipo.int/global_innovation_index/en/" target="_blank" rel="noopener noreferrer" passHref legacyBehavior={false}>
                        <Button variant="outline" className="w-full justify-start gap-2">
                            <Globe className="w-4 h-4"/> WIPO Global Innovation Index <ExternalLink className="w-3 h-3 opacity-70"/>
                        </Button>
                    </Link>
                    <Link href="https://www.oecd.org/sti/" target="_blank" rel="noopener noreferrer" passHref legacyBehavior={false}>
                        <Button variant="outline" className="w-full justify-start gap-2">
                            <TrendingUp className="w-4 h-4"/> OECD Science, Technology & Innovation <ExternalLink className="w-3 h-3 opacity-70"/>
                        </Button>
                    </Link>
                </div>
            </CardContent>
        </Card>
      </Section>

    </div>
  );
}
