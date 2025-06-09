
import { Section } from '@/components/Section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Target, Users, History, Rocket, Info, CheckCircle, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Innovation Hub Explorer',
  description: 'Learn about the mission, vision, target audience, development background, and future roadmap of the Innovation Hub Explorer platform. Discover our commitment to exploring human ingenuity.',
  keywords: ['about innovation hub', 'mission statement', 'vision innovation', 'technology exploration platform', 'future tech insights', 'innovation community'],
  openGraph: {
    title: 'About | Innovation Hub Explorer',
    description: 'Discover our mission to map human ingenuity, our vision for the future of innovation exploration, and the team behind this platform.',
    url: '/about',
    images: [
      {
        url: '/og-about.png',
        width: 1200,
        height: 630,
        alt: 'About Innovation Hub Explorer Platform',
      },
    ],
  },
  twitter: {
    title: 'About | Innovation Hub Explorer',
    description: 'Our mission, vision, and what drives the Innovation Hub Explorer. Learn more about our journey.',
    images: ['/og-about.png'],
  },
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  const targetAudience = [
    { name: 'Researchers & Academics', icon: <Users className="w-6 h-6 text-primary" />, description: 'Seeking data, trends, and insights into specific technology fields and innovation patterns.' },
    { name: 'Students & Educators', icon: <Users className="w-6 h-6 text-primary" />, description: 'Learning about the history, present, and future of innovation and its societal impact.' },
    { name: 'Policymakers & Strategists', icon: <Users className="w-6 h-6 text-primary" />, description: 'Understanding global tech landscapes, national initiatives, and policy implications.' },
    { name: 'Tech Enthusiasts & Futurists', icon: <Users className="w-6 h-6 text-primary" />, description: 'Exploring the cutting edge of technology and potential future societal transformations.' },
    { name: 'Investors & Entrepreneurs', icon: <Users className="w-6 h-6 text-primary" />, description: 'Identifying opportunities, understanding ecosystem dynamics, and tracking emerging trends.' },
    { name: 'Journalists & Writers', icon: <Users className="w-6 h-6 text-primary" />, description: 'Finding context and data for stories on innovation, technology, and science.' },
  ];

  const futureRoadmap = [
    { item: 'Enhanced Data Visualizations', description: 'More interactive charts and deeper data dives across all sections, offering customizable views.', icon: <Rocket className="w-5 h-5 text-accent" /> },
    { item: 'Collaborative Features', description: 'Allowing expert contributions, peer reviews, and community-driven content curation.', icon: <Rocket className="w-5 h-5 text-accent" /> },
    { item: 'API Access for Researchers', description: 'Providing structured data access for academic and research purposes under specific guidelines.', icon: <Rocket className="w-5 h-5 text-accent" /> },
    { item: 'Personalized Dashboards', description: 'User accounts with customizable views, content tracking, and tailored recommendations.', icon: <Rocket className="w-5 h-5 text-accent" /> },
    { item: 'Deeper AI Integration', description: 'Expanding AI recommendations, generating summaries, and enabling natural language queries for data exploration.', icon: <Rocket className="w-5 h-5 text-accent" /> },
    { item: 'Expanded Content Modules', description: 'Adding new sections on topics like patents, funding trends, and detailed case studies of innovations.', icon: <Rocket className="w-5 h-5 text-accent" /> },
  ];

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 space-y-12 md:space-y-16">
      <header className="text-center mb-12 md:mb-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-primary flex items-center justify-center gap-3">
          <Info className="w-10 h-10" /> About Innovation Hub Explorer
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Understanding our mission, who we serve, and our ambitious vision for mapping the frontiers of human ingenuity.
        </p>
         <div className="relative w-full h-48 md:h-64 rounded-lg shadow-lg overflow-hidden mt-8">
            <Image
                src="https://placehold.co/1200x400.png"
                alt="Abstract representation of innovation and global connections"
                fill={true}
                className="object-cover opacity-80"
                data-ai-hint="abstract connections network"
                priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        </div>
      </header>

      <Section title="Our Mission & Vision" titleIcon={<Target className="w-6 h-6 text-primary" />} description="Our core purpose and future aspirations in charting the course of innovation.">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
                <div>
                    <h3 className="text-xl font-semibold mb-2 text-primary flex items-center gap-2"><Target className="w-5 h-5"/>Mission</h3>
                    <p className="text-muted-foreground leading-relaxed">
                    To provide a comprehensive, accessible, and dynamic platform for exploring the multifaceted landscape of global innovation. We aim to map the evolution of human ingenuity, track technological breakthroughs, understand startup ecosystems, and engage with the ethical dimensions of progress.
                    </p>
                </div>
                 <div>
                     <h3 className="text-xl font-semibold mb-2 text-primary flex items-center gap-2"><Rocket className="w-5 h-5"/>Vision</h3>
                     <p className="text-muted-foreground leading-relaxed">
                     To become the definitive digital resource for understanding and navigating the frontiers of science, technology, and innovation, fostering informed discussion, inspiring the next generation of innovators, and facilitating global collaboration.
                     </p>
                 </div>
             </div>
             <div className="text-center md:text-left">
             </div>
         </div>
      </Section>

      <Section title="Who We Serve" titleIcon={<Users className="w-6 h-6 text-primary" />} description="Our platform is designed for a diverse range of users passionate about innovation.">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {targetAudience.map((audience, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow rounded-lg">
              <CardHeader className="items-center text-center">
                <div className="p-3 bg-primary/10 rounded-full mb-3">{audience.icon}</div>
                <CardTitle className="text-lg font-semibold">
                  {audience.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground">{audience.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

       <Section title="Development Background" titleIcon={<History className="w-6 h-6 text-primary" />} description="The genesis and guiding principles of the Innovation Hub Explorer.">
          <Card className="bg-secondary/50 p-6 rounded-lg border-none shadow-sm">
            <p className="text-muted-foreground leading-relaxed">
                Innovation Hub Explorer was conceived as a digital tool to synthesize and visualize the complex, rapidly evolving world of technological and scientific progress. It emerged from the need for a centralized, curated platform that connects disparate information sources – from historical milestones and academic research to startup activity, national strategies, and ethical considerations.
            </p>
            <p className="text-muted-foreground mt-4 leading-relaxed">
                Developed using modern web technologies (Next.js, React, Tailwind CSS) and powered by AI for content suggestions and future analytical capabilities, the platform aims to continuously improve its data aggregation, analysis, and presentation methods. Our goal is to offer valuable, actionable insights to our diverse user base. While currently maintained by a core team, future plans involve community contributions and institutional partnerships to expand its scope and depth.
            </p>
             <div className="mt-6 text-center text-sm text-muted-foreground italic">
                Conceptualized and developed by the Firebase Studio Prototyping Team.
             </div>
          </Card>
       </Section>

      <Section title="Future Roadmap" titleIcon={<Rocket className="w-6 h-6 text-primary" />} description="Exciting features and enhancements planned to make the Hub even more valuable.">
        <div className="space-y-4">
          {futureRoadmap.map((item, index) => (
            <Card key={index} className="flex items-start gap-4 p-4 border-border rounded-md bg-card hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 text-accent bg-accent/10 p-2 rounded-full mt-1">{item.icon}</div>
                <div>
                <h4 className="font-semibold text-md text-primary">{item.item}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
            </Card>
          ))}
        </div>
         <div className="mt-8 border-t border-border pt-6 text-center">
            <p className="text-md text-muted-foreground">
                We are constantly working to improve and expand the Innovation Hub Explorer. Your feedback is valuable!
            </p>
             <Link href="/contact" passHref legacyBehavior={false}>
                <Button variant="link" className="mt-2 text-primary">
                    Share Your Feedback <ExternalLink className="ml-2 h-4 w-4"/>
                </Button>
            </Link>
        </div>
      </Section>

        <Section title="Get Involved or Learn More" titleIcon={<Users className="w-6 h-6 text-primary" />} className="text-center bg-muted/30 py-12">
          <p className="text-lg text-muted-foreground mb-6">Interested in collaborating, providing feedback, or have questions about our platform?</p>
          <Link href="/contact" passHref legacyBehavior={false}>
             <Button size="lg" className="text-lg px-8 py-3">Contact Us</Button>
          </Link>
        </Section>
    </div>
  );
}
