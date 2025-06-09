
import Image from 'next/image';
import Link from 'next/link';
import {
  Dna, Milestone, Lightbulb, FlaskConical, Rocket, Brain, DollarSign, Leaf, Users, Building, Globe, Puzzle, Scale, BookOpen, ArrowLeft, ExternalLink, Info as InfoIcon, CheckCircle, TestTubeDiagonal, Users2, Microscope, Settings2, HeartPulse, Sun, Zap, Flag, ShieldCheck, FileLock, GraduationCap
} from 'lucide-react';
import { Section } from '@/components/Section';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bioengineering & Genomics Deep Dive | Innovation Hub Explorer',
  description: 'Explore gene editing (CRISPR), synthetic biology, tissue engineering, and genomic sequencing. Discover applications in medicine, agriculture, and environmental science, along with future trends and ethical considerations.',
  keywords: ['Bioengineering', 'Genomics', 'CRISPR', 'Gene Editing', 'Synthetic Biology', 'Personalized Medicine', 'Biotechnology', 'DNA Sequencing', 'Tissue Engineering', 'Genetic Engineering'],
  openGraph: {
    title: 'Bioengineering & Genomics Deep Dive | Innovation Hub Explorer',
    description: 'Delve into the transformative world of bioengineering, genomics, gene editing, and synthetic biology.',
    url: '/explore/bioengineering-genomics',
    images: [
      {
        url: '/og-bioengineering-genomics.png',
        width: 1200,
        height: 630,
        alt: 'Bioengineering and Genomics Abstract Visualization',
      },
    ],
  },
  twitter: {
    title: 'Bioengineering & Genomics Deep Dive Explained',
    description: 'Exploring the frontiers of life sciences, gene editing, and engineering biology.',
    images: ['/og-bioengineering-genomics.png'],
  },
  alternates: {
    canonical: '/explore/bioengineering-genomics',
  },
};


const historicalTimelineData = [
  {
    id: 'bg_ht1',
    era: 'Concept Era (Early 20th Century)',
    title: 'Foundational Discoveries in Molecular Biology & Genetics',
    description: 'Early 20th century: foundational discoveries in molecular biology and genetics, such as the structure of DNA. Initial engineering applications merging biology with technology.',
    icon: <Lightbulb className="w-5 h-5 text-primary" />,
  },
  {
    id: 'bg_ht2',
    era: 'Pioneering Developments (1970s–1990s)',
    title: 'Recombinant DNA & Early Gene Editing',
    description: 'Development of recombinant DNA technology, first gene editing tools. Early synthetic biology projects and tissue engineering experiments.',
    icon: <FlaskConical className="w-5 h-5 text-primary" />,
  },
  {
    id: 'bg_ht3',
    era: 'Growth & Adoption (Early 2000s)',
    title: 'CRISPR & High-Throughput Sequencing',
    description: 'Rise of CRISPR and high-throughput sequencing technologies. Expansion of biotech startups and clinical applications of gene therapy.',
    icon: <Rocket className="w-5 h-5 text-primary" />,
  },
  {
    id: 'bg_ht4',
    era: 'Modern Era (2010s–Present)',
    title: 'Scalable Editing, Synthetic Organisms & AI Integration',
    description: 'Current focus on scalable gene editing, synthetic organisms, personalized genomics, and integration with AI. Breakthroughs in engineered tissues, bio-computing, and bioinformatics.',
    icon: <Brain className="w-5 h-5 text-primary" />,
  },
];

const presentApplicationsData = [
  {
    sector: 'Healthcare & Medicine',
    icon: <HeartPulse className="w-7 h-7 text-primary" />,
    title: 'Precision Gene Therapies & Diagnostics',
    description: 'Precision gene therapies and diagnostic tools enable tailored treatments for genetic diseases and cancer.',
    example: 'CRISPR-based therapies entering clinical trials to treat sickle cell anemia and inherited blindness.',
  },
  {
    sector: 'Agriculture & Environment',
    icon: <Leaf className="w-7 h-7 text-primary" />,
    title: 'Enhanced Crops & Bioremediation',
    description: 'Genetically engineered crops for drought resistance, pest resistance, and enhanced nutrition. Synthetic biology microbes developed for bioremediation.',
    example: 'Golden Rice engineered to produce Vitamin A; Microbes designed to break down plastic pollutants.',
  },
  {
    sector: 'Consumer Biotechnology',
    icon: <Users2 className="w-7 h-7 text-primary" />,
    title: 'Personalized Genomics & Health Monitoring',
    description: 'Personalized genomic tests and at-home health monitoring kits powered by engineered biological sensors.',
    example: 'Direct-to-consumer genetic testing platforms offering ancestry and health risk insights; Continuous glucose monitors with bio-sensors.',
  }
];

const keyPlayersData = {
  industryLeaders: [
    { name: 'Innovatech BioCorp (Conceptual)', focus: 'Commercializing gene editing platforms and synthetic biology applications. Known for extensive R&D and partnerships with healthcare and agricultural sectors.', type: 'Leading Company', icon: <Building className="w-5 h-5 text-primary" /> },
  ],
  researchInstitutions: [
    { name: 'Global Institute for Genomic Engineering (Conceptual)', focus: 'Front-runner in fundamental bioengineering research, CRISPR tool development, and synthetic genomics. Renowned for international collaborations and influential publications.', type: 'Top Research Group', icon: <Microscope className="w-5 h-5 text-primary" /> },
  ],
  globalInitiatives: [
    { name: 'Open Bioethics & Safety Standards (Conceptual)', focus: 'Develops ethical frameworks, regulatory standards, and collaborative platforms for responsible bioengineering practices. Addresses public concerns around biosafety, biosecurity, and ethical genome editing.', type: 'Global Initiative', icon: <Globe className="w-5 h-5 text-primary" /> },
  ],
};

const futureTrendsData = [
    { title: 'Enhanced Gene Editing Precision', description: 'Advancements like base editing and prime editing for safer and more accurate genomic modifications.', icon: <Settings2 className="w-7 h-7 text-primary"/> },
    { title: 'Synthetic Life Forms', description: 'Creation of engineered organisms with novel functions for applications in medicine, materials, and energy.', icon: <Zap className="w-7 h-7 text-primary"/> },
    { title: 'AI-Powered Biodesign', description: 'Integration with AI for predictive genomics, accelerated drug discovery, and automated bio-design.', icon: <Brain className="w-7 h-7 text-primary"/> },
    { title: 'Regenerative Medicine', description: 'Using tissue engineering and stem cell therapies to repair or replace damaged tissues and organs.', icon: <HeartPulse className="w-7 h-7 text-primary"/> },
];

const ethicalSocietalData = [
  { title: 'Germline Editing & Human Enhancement', description: 'Debates surrounding modifications to the human germline and the potential for non-therapeutic enhancements.', icon: <Scale className="w-5 h-5 text-destructive" /> },
  { title: 'Biosafety & Biosecurity', description: 'Ensuring the safe development and containment of engineered organisms and preventing misuse of powerful bio-tools.', icon: <ShieldCheck className="w-5 h-5 text-destructive" /> },
  { title: 'Equitable Access to Therapies', description: 'Addressing concerns about the affordability and accessibility of cutting-edge genomic therapies worldwide.', icon: <Users className="w-5 h-5 text-destructive" /> },
  { title: 'Data Privacy in Genomics', description: 'Protecting sensitive genetic information obtained through sequencing and personalized medicine initiatives.', icon: <FileLock className="w-5 h-5 text-destructive" /> },
];


export default function BioengineeringGenomicsPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12 space-y-12 md:space-y-16">
      <header className="mb-8">
        <div className="mb-6">
          <Link href="/domains" passHref legacyBehavior={false}>
            <Button variant="outline" size="sm" className="hover:bg-accent hover:text-accent-foreground">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Domains
            </Button>
          </Link>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
          <Dna className="w-16 h-16 md:w-20 md:h-20 text-primary mx-auto md:mx-0 flex-shrink-0" />
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
              Bioengineering & Genomics
            </h1>
            <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto md:mx-0">
              Merging biology with engineering, gene editing (like CRISPR), and synthetic life.
            </p>
          </div>
        </div>
      </header>

      <Section title="Comprehensive Overview" titleIcon={<InfoIcon className="w-6 h-6 text-primary"/>} description="Introducing Bioengineering & Genomics, their foundational concepts, and transformative impact." className="bg-muted/30">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-6 items-center">
            <div className="md:col-span-4 space-y-4">
                <p className="text-base text-muted-foreground">
                  Bioengineering integrates biology with engineering principles to design solutions for complex biological challenges. Genomics focuses on decoding, editing, and engineering genetic material to understand life and develop new therapies.
                </p>
                <div>
                    <h4 className="font-semibold text-md text-primary mb-1">Core Concepts:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        <li>Gene editing techniques (CRISPR-Cas9, TALENs, ZFNs).</li>
                        <li>Synthetic biology: designing and building new biological parts and systems.</li>
                        <li>Tissue engineering and regenerative medicine.</li>
                        <li>Genomic sequencing and analysis technologies.</li>
                    </ul>
                </div>
                 <p className="text-base text-muted-foreground">
                    These fields drive personalized medicine, bio-computing, synthetic life forms, and advanced diagnostics. Applications span healthcare (gene therapy), agriculture (GMOs), and environmental solutions (bioremediation). Bioengineering & Genomics are revolutionizing our ability to understand and manipulate life, creating new possibilities across diverse sectors.
                </p>
            </div>
             <div className="md:col-span-3">
                <Image src="https://placehold.co/600x400.png" alt="Abstract visualization of DNA and bioengineering concepts" width={600} height={400} className="rounded-md object-cover w-full shadow-lg border border-border" data-ai-hint="abstract dna molecule" />
            </div>
        </div>
      </Section>

      <Section title="Historical Timeline" titleIcon={<Milestone className="w-6 h-6 text-primary"/>} description="Key milestones tracing the evolution of Bioengineering & Genomics.">
        <Accordion type="single" collapsible className="w-full space-y-3">
          {historicalTimelineData.map((item) => (
            <AccordionItem key={item.id} value={item.id} className="border-none">
              <Card className="overflow-hidden border-border hover:border-primary/30 transition-colors duration-300">
                <AccordionTrigger className="p-4 hover:bg-accent/10 hover:no-underline [&[data-state=open]]:bg-accent/20 w-full rounded-t-md text-left">
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <div>
                      <h4 className="text-md font-semibold text-primary">{item.title}</h4>
                      <p className="text-xs text-muted-foreground">{item.era}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="p-4 text-sm text-muted-foreground bg-secondary/30 rounded-b-md border-t border-border">
                  <p>{item.description}</p>
                </AccordionContent>
              </Card>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>

      <Section title="Present Applications" titleIcon={<CheckCircle className="w-6 h-6 text-primary"/>} description="Showcasing real-world uses and demonstrating impact.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {presentApplicationsData.map((app_sector) => (
            <Card key={app_sector.title} className="flex flex-col h-full hover:shadow-lg transition-shadow group bg-card">
              <CardHeader className="items-center text-center">
                <div className="p-3 bg-primary/10 rounded-full mb-2 group-hover:bg-primary/20 transition-colors">{app_sector.icon}</div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">{app_sector.title}</CardTitle>
                <CardDescription className="text-sm"><Badge variant="outline">{app_sector.sector}</Badge></CardDescription>
              </CardHeader>
              <CardContent className="flex-grow text-center space-y-2">
                <p className="text-sm text-muted-foreground">{app_sector.description}</p>
                <p className="text-xs text-accent">Example: {app_sector.example}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Key Players & Leaders" titleIcon={<Globe className="w-6 h-6 text-primary"/>} description="Influential organizations shaping bioengineering and genomics.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...keyPlayersData.industryLeaders, ...keyPlayersData.researchInstitutions, ...keyPlayersData.globalInitiatives].map(player => (
                <Card key={player.name} className="p-4 text-center bg-card hover:shadow-md flex flex-col justify-between">
                  <div>
                    <div className="mb-3 flex justify-center">{player.icon}</div>
                    <CardTitle className="text-md mb-1">{player.name}</CardTitle>
                    <Badge variant="secondary" className="mb-2">{player.type}</Badge>
                  </div>
                   <p className="text-xs text-muted-foreground mt-1">{player.focus}</p>
                </Card>
            ))}
        </div>
      </Section>

      <Section title="Future Trends & Speculation" titleIcon={<Rocket className="w-6 h-6 text-primary"/>} description="Anticipated breakthroughs and cross-sector impacts.">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {futureTrendsData.map((trend) => (
            <Card key={trend.title} className="flex flex-col h-full hover:shadow-lg transition-shadow group bg-card">
              <CardHeader className="items-center text-center">
                <div className="p-3 bg-primary/10 rounded-full mb-2 group-hover:bg-primary/20 transition-colors">{trend.icon}</div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">{trend.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow text-center">
                 <p className="text-sm text-muted-foreground">{trend.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
      
      <Section title="Societal & Ethical Evolution" titleIcon={<Scale className="w-6 h-6 text-primary"/>} description="Navigating the complex societal implications.">
        <div className="space-y-4">
          {ethicalSocietalData.map((item) => (
            <Card key={item.title} className="flex items-start gap-4 p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 text-destructive bg-destructive/10 p-2.5 rounded-full mt-1">{item.icon}</div>
              <div>
                <h4 className="font-semibold text-md text-destructive">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

       <Section title="Conclusion & Call to Action" titleIcon={<BookOpen className="w-6 h-6 text-primary"/>} description="Bioengineering & Genomics continue to evolve rapidly, shaping the future." className="text-center bg-muted/30">
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Ethical oversight and collaborative research are crucial to harness benefits responsibly.
            </p>
            <Link href="/research?topic=Bioengineering+Genomics" passHref legacyBehavior={false}>
                <Button size="lg" variant="default">
                    Explore Related Research <ExternalLink className="ml-2 h-4 w-4"/>
                </Button>
            </Link>
        </Section>

    </div>
  );
}
