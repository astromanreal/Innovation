
import Image from 'next/image';
import Link from 'next/link';
import { Cpu, Bot, Atom, Blocks, Dna, MonitorSmartphone, Handshake, Globe, ShieldCheck, Brain as BrainIcon, Map, Milestone, Award, Wand2, BrainCircuit, ArrowRight, Users, Sparkles, BarChart3, MessageSquare, SlidersHorizontal, BookOpen } from 'lucide-react';
import { Section } from '@/components/Section';
import { AiRecommendations } from '@/components/AiRecommendations';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Home | Innovation Hub Explorer',
  description: 'Explore tomorrow’s thinking, today. Discover technological breakthroughs, ethical insights, startup ecosystems, and the future of human ingenuity with the Innovation Hub Explorer.',
  keywords: ['homepage', 'innovation hub', 'technology explorer', 'AI ethics', 'future tech', 'emerging technologies', 'science discovery', 'startup ecosystem'],
  openGraph: {
    title: 'Innovation Hub Explorer - Explore Tomorrow’s Thinking, Today',
    description: 'Your dynamic gateway to the frontiers of human ingenuity, technological advancements, and ethical discussions.',
    url: '/',
    images: [
      {
        url: '/og-homepage-dynamic.png', 
        width: 1200,
        height: 630,
        alt: 'Innovation Hub Explorer - Dynamic Gateway',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Innovation Hub Explorer - Explore Tomorrow’s Thinking, Today',
    description: 'Discover the frontiers of human ingenuity and technological advancements.',
     images: ['/og-homepage-dynamic.png'],
  },
  alternates: {
    canonical: '/',
  },
};


export default function Home() {
  const mainSections = [
    { name: 'Technology Domains', icon: <Cpu className="w-7 h-7 text-primary" />, href: '/domains', description: 'Explore key fields like AI, Quantum, Bioengineering, and more.', featuredArticle: 'The Rise of Neuromorphic Computing' },
    { name: 'Startup Ecosystems', icon: <Globe className="w-7 h-7 text-primary" />, href: '/startup', description: 'Discover innovation hotspots from Silicon Valley to emerging ecosystems.', featuredArticle: 'Nairobi\'s Fintech Boom' },
    { name: 'Nobel Prize Insights', icon: <Award className="w-7 h-7 text-primary" />, href: '/nobel', description: 'Learn from groundbreaking ideas that earned the Nobel Prize.', featuredArticle: 'Unpacking CRISPR Science' },
    { name: 'Tech Ethics & Impact', icon: <ShieldCheck className="w-7 h-7 text-primary" />, href: '/technology', description: 'Navigate the responsibilities and challenges of innovation.', featuredArticle: 'Algorithmic Bias Explained' },
  ];

  const quickAccessHubs = [
    { name: "Explore Tech Domains", href: "/domains", icon: <Cpu /> },
    { name: "Visit Research Library", href: "/research", icon: <BookOpen /> },
    { name: "Share Your Perspective", href: "/poll", icon: <MessageSquare /> },
    { name: "Track Global Initiatives", href: "/innovation", icon: <Map /> }
  ];

  return (
    <div className="container mx-auto px-4 py-8 md:py-12"> 
      
      <section className="mb-12 md:mb-20 text-center relative overflow-hidden rounded-xl p-8 md:p-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10 shadow-xl">
         <div className="absolute inset-0 opacity-5 dark:opacity-3">
            {/* Decorative background, can be removed or replaced with a subtle pattern image if desired */}
         </div>
        <div className="relative z-10">
            <Wand2 className="w-16 h-16 text-primary mx-auto mb-6 animate-pulse" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary leading-tight [text-shadow:_0_2px_4px_rgba(0,0,0,0.1)]">
             Explore Tomorrow’s Thinking, Today
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
            A dynamic digital platform capturing the ever-expanding frontier of innovation. Explore how creativity, science, and technology intersect to shape our collective future.
            </p>
            <Link href="#discover-next">
                <Button size="lg" className="text-lg px-10 py-3.5 shadow-lg hover:shadow-primary/30 transition-shadow">
                    Start Your Journey <ArrowRight className="ml-2 h-5 w-5"/>
                </Button>
            </Link>
        </div>
      </section>

      
      <div id="discover-next" className="mb-12 md:mb-20">
        <AiRecommendations />
      </div>

      
      <Section title="Featured Exploration Gateways" titleIcon={<Sparkles className="w-7 h-7 text-primary" />} description="Begin your journey into key areas of innovation." className="mb-12 md:mb-20 border-none shadow-none bg-transparent hover:shadow-none p-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {mainSections.map((section) => (
            <Link key={section.name} href={section.href} passHref legacyBehavior={false}>
              <Card className="h-full flex flex-col hover:shadow-xl hover:border-primary/50 transition-all duration-300 ease-in-out cursor-pointer group transform hover:-translate-y-1">
                <CardHeader className="items-center text-center">
                   <div className="p-4 bg-primary/10 rounded-full mb-3 group-hover:bg-primary/20 transition-colors transform group-hover:scale-110">
                     {section.icon}
                   </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{section.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow text-center space-y-2">
                  <p className="text-sm text-muted-foreground">{section.description}</p>
                  <div className="pt-2 text-xs text-accent italic group-hover:text-primary/80 transition-colors">
                      Explore: {section.featuredArticle}
                  </div>
                </CardContent>
                <CardFooter className="justify-center pt-4 border-t mt-auto">
                  <Button variant="ghost" size="sm" className="group-hover:text-primary transition-colors text-foreground/80">
                    Explore Section <ArrowRight className="ml-2 h-4 w-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                  </Button>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      
      <Section title="The Horizon of Intelligence: AI Consciousness" titleIcon={<BrainCircuit className="w-7 h-7 text-primary" />} description="What does it mean for a machine to be aware? Explore one of technology's most profound questions." className="mb-12 md:mb-20 bg-gradient-to-r from-secondary via-card to-secondary/50 shadow-xl rounded-xl">
        <div className="flex flex-col items-center gap-6 p-6 md:p-8 text-center">
            {/* Image placeholder removed */}
            <div className="w-full space-y-4">
                <p className="text-2xl md:text-3xl font-semibold text-primary/90 italic">
                    "Can machines dream, feel, or truly understand?"
                </p>
                <p className="text-muted-foreground">
                    Delve into the philosophical, ethical, and technological frontiers of artificial general intelligence (AGI), machine sentience, and the nature of mind itself.
                </p>
                <Link href="/consciousness">
                    <Button size="lg" variant="default" className="shadow-md hover:shadow-lg transition-shadow">
                        Dive Deeper into AI Consciousness <BrainIcon className="ml-2 h-5 w-5"/>
                    </Button>
                </Link>
            </div>
        </div>
      </Section>

       
      <Section title="Quick Access Points" titleIcon={<SlidersHorizontal className="w-7 h-7 text-primary" />} description="Jump directly into major content zones of the Hub." className="mb-12 md:mb-20 bg-card shadow-lg">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
          {quickAccessHubs.map((hub) => (
            <Link key={hub.name} href={hub.href} passHref legacyBehavior={false}>
              <Button variant="outline" size="lg" className="w-full h-auto py-4 flex flex-col items-center justify-center text-center gap-2 hover:bg-primary/5 hover:border-primary transition-all duration-200 group">
                {React.cloneElement(hub.icon, {className: "w-7 h-7 text-primary group-hover:text-primary/80 transition-colors"})}
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{hub.name}</span>
              </Button>
            </Link>
          ))}
        </div>
      </Section>

    </div>
  );
}
