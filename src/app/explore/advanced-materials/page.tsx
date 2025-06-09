
import Image from 'next/image';
import Link from 'next/link';
import {
  Layers, Milestone, Lightbulb, Brain, Users, Building, Globe, Puzzle, Scale, BookOpen, ArrowLeft, ExternalLink, Info as InfoIcon, CheckCircle, FlaskConical, Cpu, Rocket, ShieldAlert, Users2, Aperture, Flag, GraduationCap
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
  title: 'Advanced Materials Deep Dive | Innovation Hub Explorer',
  description: 'Explore advanced materials: nanomaterials, biomaterials, metamaterials, and composites. Learn about concepts, history, applications in aerospace and biomedicine, future trends, and ethical considerations.',
  keywords: ['Advanced Materials', 'Nanomaterials', 'Biomaterials', 'Metamaterials', 'Composites', 'Material Science', 'Graphene', 'Smart Materials', 'Innovation Materials'],
  openGraph: {
    title: 'Advanced Materials Deep Dive | Innovation Hub Explorer',
    description: 'Discover the science and application of advanced materials transforming industries worldwide.',
    url: '/explore/advanced-materials',
     images: [
      {
        url: '/og-advanced-materials.png',
        width: 1200,
        height: 630,
        alt: 'Advanced Materials Abstract Visualization',
      },
    ],
  },
  twitter: {
    title: 'Advanced Materials Deep Dive Explained',
    description: 'Exploring the cutting edge of material science and its transformative applications.',
    images: ['/og-advanced-materials.png'],
  },
  alternates: {
    canonical: '/explore/advanced-materials',
  },
};


const historicalTimelineData = [
  {
    id: 'am_ht1',
    era: 'Concept Era',
    title: 'Foundational Studies & Early Theories',
    description: 'Foundational studies in crystallography, quantum mechanics, and early polymer science set the theoretical groundwork for understanding and manipulating material properties at a deeper level.',
    icon: <Lightbulb className="w-5 h-5 text-primary" />,
  },
  {
    id: 'am_ht2',
    era: 'Pioneering Developments (Mid-20th Century)',
    title: 'Discovery of Key Material Classes',
    description: 'Discovery of semiconductors, understanding of superconductivity, development of carbon fibers, and early composites in mid-20th century labs laid the foundation for many modern advanced materials.',
    icon: <FlaskConical className="w-5 h-5 text-primary" />,
  },
  {
    id: 'am_ht3',
    era: 'Growth & Adoption (1990s–2010s)',
    title: 'Nanotech, Bioengineering & Ceramics Boom',
    description: 'Rapid R&D in nanotechnology, bioengineering materials (biocompatible implants, tissue scaffolds), and advanced ceramics led to new applications and commercial products.',
    icon: <Rocket className="w-5 h-5 text-primary" />,
  },
  {
    id: 'am_ht4',
    era: 'Modern Era (Present)',
    title: 'AI in Discovery & Programmable Matter',
    description: 'Application of AI in materials discovery accelerates the identification of novel materials. Widespread research and use of 2D materials like graphene, and development of responsive and programmable matter.',
    icon: <Brain className="w-5 h-5 text-primary" />,
  },
];

const presentApplicationsData = [
  {
    sector: 'Aerospace & Defense',
    icon: <Rocket className="w-7 h-7 text-primary" />,
    useCase: 'Lightweight carbon composites for aircraft structures, heat-resistant superalloys for jet engines, and radar-absorbing stealth materials.',
  },
  {
    sector: 'Biomedical Engineering',
    icon: <FlaskConical className="w-7 h-7 text-primary" />,
    useCase: 'Smart biomaterials for targeted drug delivery, self-healing implants, biocompatible coatings, and advanced bio-scaffolds for tissue regeneration.',
  },
  {
    sector: 'Electronics & Wearables',
    icon: <Cpu className="w-7 h-7 text-primary" />,
    useCase: 'Flexible displays using organic LEDs (OLEDs), graphene-based batteries for enhanced performance, shape-memory polymers in smart textiles, and conductive inks for printed electronics.',
  }
];

const keyPlayersData = {
  industryLeaders: [
    { name: 'NanoForge Labs (Conceptual)', focus: 'Renowned for scalable production of nanomaterials and commercial applications in electronics and sustainable energy solutions.', icon: <Building className="w-5 h-5 text-primary"/> },
  ],
  researchInstitutions: [
    { name: 'Maxwell Institute of Materials Science (Conceptual)', focus: 'Global leader in theoretical and applied materials science, publishing foundational research on 2D materials, quantum interfaces, and metamaterials.', icon: <FlaskConical className="w-5 h-5 text-primary"/> },
  ],
  globalInitiatives: [
    { name: 'Materials Innovation Consortium (MIC) (Conceptual)', focus: 'Drives open data collaboration, ethical frameworks, and sustainability protocols in materials design and lifecycle management. Promotes circular economy principles.', icon: <Globe className="w-5 h-5 text-primary"/> },
  ],
};

const futureTrendsData = [
    { title: 'AI-Driven Materials Discovery', description: 'Utilizing machine learning and AI to rapidly design, predict properties, and discover novel materials with desired functionalities.', icon: <Brain className="w-7 h-7 text-primary"/> },
    { title: 'Bio-Synthetic & Living Materials', description: 'Developing materials that are grown, self-assemble, or are derived from biological processes, offering sustainability and unique adaptive properties.', icon: <Layers className="w-7 h-7 text-primary"/> },
    { title: 'Programmable Matter & Metamaterials', description: 'Creating materials whose properties can be dynamically altered in response to external stimuli, enabling shape-shifting, tunable optics, and adaptive functionalities.', icon: <Aperture className="w-7 h-7 text-primary"/> },
    { title: 'Zero-Waste & Circular Fabrication', description: 'Innovating manufacturing processes like additive manufacturing (3D printing) with advanced materials to minimize waste and enable a circular economy.', icon: <Puzzle className="w-7 h-7 text-primary"/> },
];

const ethicalSocietalData = [
  { title: 'Lifecycle & Recyclability', description: 'Addressing challenges around the environmental impact, safe disposal, and recyclability of novel advanced materials.', icon: <ShieldAlert className="w-5 h-5 text-destructive" /> },
  { title: 'Material Equity & Access', description: 'Ensuring equitable access to the benefits of advanced materials and addressing potential disparities in resource availability and technological adoption.', icon: <Globe className="w-5 h-5 text-destructive" /> },
  { title: 'Dual-Use & Safety Concerns', description: 'Managing potential risks associated with materials that could have harmful applications or unforeseen long-term health effects.', icon: <Scale className="w-5 h-5 text-destructive" /> },
];

const exploreFurtherData = [
  { name: "Materials Project", url: "https://materialsproject.org/", imageHint: "database logo science" },
  { name: "Nature Materials Journal", url: "https://www.nature.com/nmat/", imageHint: "journal cover science" },
  { name: "Advanced Materials (Journal by Wiley)", url: "https://onlinelibrary.wiley.com/journal/15214095", imageHint: "journal logo tech" },
];


export default function AdvancedMaterialsPage() {
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
          <Layers className="w-16 h-16 md:w-20 md:h-20 text-primary mx-auto md:mx-0 flex-shrink-0" />
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
              Advanced Materials
            </h1>
            <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto md:mx-0">
              Developing novel materials with unique properties for transformative applications.
            </p>
          </div>
        </div>
      </header>

      <Section title="Comprehensive Overview" titleIcon={<InfoIcon className="w-6 h-6 text-primary"/>} description="Understanding the core concepts and significance of Advanced Materials." className="bg-muted/30">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-6 items-center">
            <div className="md:col-span-4 space-y-4">
                <p className="text-base text-muted-foreground">
                  Advanced materials possess superior or tailored properties—mechanical strength, electrical conductivity, biocompatibility, thermal stability—that go beyond conventional materials. Research spans fields such as nanomaterials, biomaterials, metamaterials, and smart composites. These innovations are revolutionizing sectors including energy, aerospace, healthcare, electronics, and infrastructure.
                </p>
                 <div>
                    <h4 className="font-semibold text-md text-primary mb-1">Core Concepts:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        <li>Nanoscale phenomena: quantum effects, surface area to volume ratio.</li>
                        <li>Fabrication: bottom-up assembly, top-down lithography, self-assembly.</li>
                        <li>Properties: Enhanced strength, conductivity, reactivity, biocompatibility.</li>
                    </ul>
                </div>
                <p className="text-base text-muted-foreground">
                  These fields drive innovations in sustainable energy, next-generation electronics, personalized medicine, and resilient infrastructure.
                </p>
            </div>
             <div className="md:col-span-3">
                <Image src="https://placehold.co/600x400.png" alt="Abstract visualization of advanced material structures" width={600} height={400} className="rounded-md object-cover w-full shadow-lg border border-border" data-ai-hint="abstract material structure" />
            </div>
        </div>
      </Section>
      
      <Section title="Detailed Visual Representation" titleIcon={<Aperture className="w-6 h-6 text-primary"/>} description="Categories, properties, and applications of advanced materials." className="bg-muted/30">
         <Image src="https://placehold.co/800x450.png" alt="Infographic showing categories and applications of advanced materials" width={800} height={450} className="rounded-md object-cover w-full shadow-lg border border-border" data-ai-hint="materials infographic chart" />
         <p className="text-xs text-muted-foreground text-center mt-2">(Placeholder for dynamic infographic: categories, properties, application domains)</p>
      </Section>


      <Section title="Historical Timeline" titleIcon={<Milestone className="w-6 h-6 text-primary"/>} description="Key milestones in the development of Advanced Materials.">
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

      <Section title="Present Applications" titleIcon={<CheckCircle className="w-6 h-6 text-primary"/>} description="How Advanced Materials are being used today across sectors.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {presentApplicationsData.map((app_sector) => (
            <Card key={app_sector.sector} className="flex flex-col h-full hover:shadow-lg transition-shadow group bg-card">
              <CardHeader className="items-center text-center">
                <div className="p-3 bg-primary/10 rounded-full mb-2 group-hover:bg-primary/20 transition-colors">{app_sector.icon}</div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">{app_sector.sector}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow text-center">
                <p className="text-sm text-muted-foreground">{app_sector.useCase}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Key Players & Leaders" titleIcon={<Globe className="w-6 h-6 text-primary"/>} description="Organizations shaping the Advanced Materials landscape.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {keyPlayersData.industryLeaders.map(leader => (
                <Card key={leader.name} className="p-4 text-center bg-card hover:shadow-md flex flex-col justify-between">
                  <div>
                    <div className="flex justify-center mb-2">{leader.icon}</div>
                    <CardTitle className="text-md mb-1">{leader.name}</CardTitle>
                    <Badge variant="secondary" className="mb-2">Leading Company</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{leader.focus}</p>
                </Card>
            ))}
            {keyPlayersData.researchInstitutions.map(inst => (
                <Card key={inst.name} className="p-4 text-center bg-card hover:shadow-md flex flex-col justify-between">
                 <div>
                    <div className="flex justify-center mb-2">{inst.icon}</div>
                    <CardTitle className="text-md mb-1">{inst.name}</CardTitle>
                    <Badge variant="secondary" className="mb-2">Top Research Group</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{inst.focus}</p>
                </Card>
            ))}
             {keyPlayersData.globalInitiatives.map(init => (
                <Card key={init.name} className="p-4 text-center bg-card hover:shadow-md flex flex-col justify-between">
                  <div>
                    <div className="flex justify-center mb-2">{init.icon}</div>
                    <CardTitle className="text-md mb-1">{init.name}</CardTitle>
                    <Badge variant="secondary" className="mb-2">Global Initiative</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{init.focus}</p>
                </Card>
            ))}
        </div>
      </Section>

      <Section title="Future Trends & Speculation" titleIcon={<Rocket className="w-6 h-6 text-primary"/>} description="What’s next for Advanced Materials?">
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
        <blockquote className="mt-6 border-l-4 border-primary pl-4 italic text-muted-foreground">
          As we engineer new materials, the boundaries between biology, chemistry, and physics continue to blur — opening new realms of innovation and responsibility.
        </blockquote>
      </Section>
      
      <Section title="Societal & Ethical Evolution" titleIcon={<Scale className="w-6 h-6 text-primary"/>} description="Navigating the complex societal implications of advanced material science.">
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

       <Section title="Explore Related Research" titleIcon={<BookOpen className="w-6 h-6 text-primary"/>} description="Dive deeper into the science of advanced materials." className="text-center bg-muted/30">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {exploreFurtherData.map(resource => (
                <Card key={resource.name} className="bg-card hover:shadow-md">
                <CardContent className="p-4 flex flex-col items-center justify-center text-center h-full">
                    <h4 className="font-semibold text-md mb-2">{resource.name}</h4>
                    <Link href={resource.url} passHref legacyBehavior={false}>
                         <Button variant="link" size="sm" asChild>
                            <a target="_blank" rel="noopener noreferrer">
                                Visit Website <ExternalLink className="inline-block ml-1 h-3 w-3"/>
                            </a>
                         </Button>
                    </Link>
                </CardContent>
                </Card>
            ))}
            </div>
        </Section>

    </div>
  );
}
