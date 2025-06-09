
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Section } from '@/components/Section';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BrainCircuit, Dna, Rocket, Leaf, TrendingUp, ExternalLink, Lightbulb, Search, AlertTriangle, Info, CalendarDays, Users, BookOpen } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useToast } from '@/hooks/use-toast';

interface Forecast {
  id: string;
  title: string;
  domain: string;
  timeHorizon: string; 
  description: string;
  potentialImpacts: string[];
  keyUncertainties: string[];
  icon: React.ReactNode;
  imageUrl: string; // Changed from imageHint to imageUrl
  learnMoreLinks?: { title: string; url: string }[];
}

const forecastsData: Forecast[] = [
  {
    id: 'fc1',
    title: 'Ubiquitous AI & Automation',
    domain: 'Artificial Intelligence',
    timeHorizon: '5-10 Years',
    description: 'AI assistants become deeply integrated into daily life and work. Automation powered by AI transforms industries like manufacturing, logistics, and customer service, leading to significant productivity gains but also workforce shifts.',
    potentialImpacts: ['Personalized digital experiences', 'Major shifts in job markets', 'Increased efficiency in various sectors', 'New ethical challenges around AI decision-making'],
    keyUncertainties: ['Rate of AGI development', 'Societal adaptation to automation', 'Regulatory frameworks for AI', 'Public trust and acceptance'],
    icon: <BrainCircuit className="w-8 h-8 text-primary" />,
    imageUrl: 'https://i.pinimg.com/736x/86/10/7e/86107ebb94a19b7134c6276b402cc25d.jpg',
    learnMoreLinks: [{ title: 'AI Impact Report (Conceptual)', url: '#' }]
  },
  {
    id: 'fc2',
    title: 'Personalized Genomic Medicine Mainstream',
    domain: 'Bioengineering & Genomics',
    timeHorizon: '10-20 Years',
    description: 'Treatments and preventative strategies tailored to an individual\'s genetic makeup become standard. CRISPR and other gene-editing tools mature for widespread therapeutic use, potentially eradicating certain genetic diseases.',
    potentialImpacts: ['Significant increase in lifespan and healthspan', 'Eradication of some hereditary diseases', 'Ethical debates on genetic enhancement', 'Transformation of pharmaceutical R&D'],
    keyUncertainties: ['Long-term safety of gene therapies', 'Cost and accessibility of treatments', 'Public perception and ethical boundaries', 'Data privacy of genomic information'],
    icon: <Dna className="w-8 h-8 text-primary" />,
    imageUrl: 'https://i.pinimg.com/736x/38/96/16/3896163f416a6a68346872636ad43cb8.jpg',
    learnMoreLinks: [{ title: 'Genomics Future Study (Conceptual)', url: '#' }]
  },
  {
    id: 'fc3',
    title: 'Commercial Space Economy Matures',
    domain: 'Space Technology',
    timeHorizon: '15-25 Years',
    description: 'Regular commercial flights to Low Earth Orbit (LEO), development of lunar bases, and initial resource extraction from asteroids. Space tourism becomes more accessible, and new industries emerge around in-space manufacturing and research.',
    potentialImpacts: ['New resource streams for Earth', 'Off-world habitats and research outposts', 'Rapid advancements in propulsion and life support', 'New legal and governance frameworks for space activities'],
    keyUncertainties: ['Cost reduction for space access', 'Technological breakthroughs for long-duration space travel', 'International cooperation vs. competition', 'Environmental impact of increased launches'],
    icon: <Rocket className="w-8 h-8 text-primary" />,
    imageUrl: 'https://i.pinimg.com/736x/39/8b/b0/398bb0df12de03c82f4edf2e7f0bcb29.jpg',
  },
  {
    id: 'fc4',
    title: 'Widespread Adoption of Advanced Climate Tech',
    domain: 'Climate Technology & Sustainability',
    timeHorizon: '10-20 Years',
    description: 'Scalable carbon capture technologies, next-generation energy storage, fusion energy pilot plants, and advanced sustainable materials become widely deployed, significantly impacting global efforts to combat climate change.',
    potentialImpacts: ['Drastic reduction in carbon emissions', 'Shift to a fully renewable energy economy', 'New sustainable industries and green jobs', 'Improved climate resilience globally'],
    keyUncertainties: ['Pace of technological scaling and cost reduction', 'Global policy commitments and implementation', 'Public investment in green infrastructure', 'Effectiveness of carbon capture at scale'],
    icon: <Leaf className="w-8 h-8 text-primary" />,
    imageUrl: 'https://i.pinimg.com/736x/19/99/14/199914519f9de9cb93ad4ee19ee479ef.jpg',
  },
];


export default function FutureForecastsPageClient() {
  const [currentForecasts, setCurrentForecasts] = useState<Forecast[]>(forecastsData);
  const { toast } = useToast();

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 space-y-12 md:space-y-16">
      <header className="text-center mb-12 md:mb-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-primary flex items-center justify-center gap-3">
          <TrendingUp className="w-10 h-10" /> Future Forecasts & Technological Horizons
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Explore expert predictions, speculative scenarios, and emerging trends across key technology domains. This section delves into the potential long-term impacts of innovation, offering glimpses into what the future might hold.
        </p>
      </header>

      <Section title="Emerging Trends & Predictions" titleIcon={<Lightbulb className="w-6 h-6 text-primary" />} description="Deep dive into specific technological forecasts.">
        {currentForecasts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {currentForecasts.map((forecast) => (
              <Card key={forecast.id} className="flex flex-col bg-card border-border hover:shadow-xl hover:border-primary/40 transition-all duration-300 ease-in-out group rounded-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                      {forecast.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {forecast.title}
                      </CardTitle>
                      <CardDescription className="text-xs pt-1">
                        <Badge variant="secondary" className="mr-2">{forecast.domain}</Badge>
                        <Badge variant="outline">Horizon: {forecast.timeHorizon}</Badge>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow space-y-3 text-sm">
                  <p className="text-muted-foreground line-clamp-4 group-hover:line-clamp-none transition-all">{forecast.description}</p>
                  
                  <Accordion type="single" collapsible className="w-full text-xs">
                    <AccordionItem value="impacts" className="border-none">
                      <AccordionTrigger className="py-2 text-primary hover:text-primary/80 hover:no-underline text-xs [&[data-state=open]>svg]:text-primary">Potential Impacts</AccordionTrigger>
                      <AccordionContent className="pt-1 pb-2 text-muted-foreground">
                        <ul className="list-disc list-inside space-y-1">
                          {forecast.potentialImpacts.map((impact, idx) => <li key={idx}>{impact}</li>)}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="uncertainties" className="border-none">
                      <AccordionTrigger className="py-2 text-primary hover:text-primary/80 hover:no-underline text-xs [&[data-state=open]>svg]:text-primary">Key Uncertainties</AccordionTrigger>
                      <AccordionContent className="pt-1 pb-2 text-muted-foreground">
                        <ul className="list-disc list-inside space-y-1">
                          {forecast.keyUncertainties.map((uncertainty, idx) => <li key={idx}>{uncertainty}</li>)}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <div className="relative w-full h-40 rounded-md overflow-hidden mt-3 border bg-secondary">
                    <Image src={forecast.imageUrl} alt={`${forecast.title} visual representation`} fill={true} className="object-cover" />
                  </div>

                </CardContent>
                <CardFooter className="pt-4 border-t border-border">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    onClick={() => {
                      const firstLink = forecast.learnMoreLinks?.[0];
                      if (firstLink && firstLink.url !== '#') {
                        window.open(firstLink.url, '_blank');
                      } else {
                        toast({
                          title: "Content Coming Soon",
                          description: `Detailed information and resources for "${forecast.title}" are planned for a future update.`,
                        });
                      }
                    }}
                  >
                    {forecast.learnMoreLinks?.[0]?.title || 'More Info (Soon)'}
                    {forecast.learnMoreLinks?.[0]?.url !== '#' && <ExternalLink className="ml-2 h-3 w-3" />}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="text-center text-muted-foreground p-6 md:p-8 border-dashed border-border bg-muted/20 rounded-lg">
            <CardContent className="p-0">
                <Search className="w-10 h-10 text-primary/50 mx-auto mb-3" />
                <p className="text-md">No forecasts match your current criteria. Check back later or broaden your search.</p>
            </CardContent>
          </Card>
        )}
      </Section>

      <Section title="Contribute Your Forecast" titleIcon={<Users className="w-6 h-6 text-primary" />} description="Have insights on future trends? We plan to allow community contributions and expert submissions." className="bg-muted/30 py-8 rounded-xl text-center">
        <Button variant="secondary" disabled>Submit a Forecast (Planned Feature)</Button>
        <p className="text-xs text-muted-foreground mt-2">Help us build a collective vision of tomorrow's technology.</p>
      </Section>

      <Section title="Disclaimer" titleIcon={<AlertTriangle className="w-6 h-6 text-primary" />} description="Important considerations about these forecasts." className="bg-muted/30 py-8 rounded-xl">
        <CardContent className="text-sm text-muted-foreground text-center">
          <p>The forecasts presented here are speculative and based on current trends, expert opinions, and analyses. They are intended for informational and discussion purposes only and should not be taken as definitive predictions. The future is inherently uncertain, and actual developments may vary significantly.</p>
        </CardContent>
      </Section>
    </div>
  );
}
