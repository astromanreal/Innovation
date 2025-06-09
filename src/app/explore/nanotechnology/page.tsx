
import Image from 'next/image';
import Link from 'next/link';
import {
  Telescope, Milestone, Lightbulb, FlaskConical, Rocket, Brain, DollarSign, Smartphone, Building, Users, Globe, Puzzle, Scale, BookOpen, ArrowLeft, ExternalLink, Info as InfoIcon, CheckCircle, Layers, Atom, Cpu, Zap, ScanSearch, Microscope, ShieldAlert, Flag, GraduationCap, Eye
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

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Nanotechnology Deep Dive | Innovation Hub Explorer',
    description: 'Explore the world of nanotechnology: core concepts, history, applications in medicine and electronics, future trends like nanomedicine and quantum nanophotonics, and ethical considerations.',
    keywords: ['Nanotechnology', 'Nanomaterials', 'Nanoscience', 'Nanoelectronics', 'Nanomedicine', 'Quantum Dots', 'Molecular Engineering', 'Nanobots', 'Nanofabrication'],
    openGraph: {
        title: 'Nanotechnology Deep Dive | Innovation Hub Explorer',
        description: 'Delve into engineering at the atomic scale: nanomaterials, nanomedicine, nanoelectronics, and future applications.',
        url: '/explore/nanotechnology',
        images: [
            {
            url: '/og-nanotechnology.png',
            width: 1200,
            height: 630,
            alt: 'Nanotechnology and Molecular Structures Visualization',
            },
        ],
    },
    twitter: {
        title: 'Nanotechnology Explained | Innovation Hub Explorer',
        description: 'The science of the small: Exploring nanotechnology, its applications, and its future.',
        images: ['/og-nanotechnology.png'],
    },
    alternates: {
        canonical: '/explore/nanotechnology',
    },
  };
}

const historicalTimelineData = [
  {
    id: 'nano_ht1',
    era: 'Concept Era (1959 - 1970s)',
    title: 'Feynman\'s Vision & Early Tools',
    description: 'Richard Feynman\'s 1959 talk "There\'s Plenty of Room at the Bottom" laid conceptual groundwork. Development of fundamental theories and early characterization tools like the scanning tunneling microscope (STM) in the early 1980s were crucial.',
    icon: <Lightbulb className="w-5 h-5 text-primary" />,
  },
  {
    id: 'nano_ht2',
    era: 'Pioneering Developments (1980s–1990s)',
    title: 'Discoveries & Nanoscale Fabrication',
    description: 'Breakthroughs such as the discovery of fullerenes (1985) and carbon nanotubes (1991). Development of atomic force microscopy (AFM). First nanoscale devices and materials were fabricated in laboratories.',
    icon: <FlaskConical className="w-5 h-5 text-primary" />,
  },
  {
    id: 'nano_ht3',
    era: 'Growth & Adoption (Early 2000s)',
    title: 'Research Expansion & Early Products',
    description: 'Significant expansion of research funding and establishment of dedicated nanotechnology centers worldwide. Early industry adoption began, with products like nanoscale coatings and medical nanoparticles entering the market.',
    icon: <Rocket className="w-5 h-5 text-primary" />,
  },
  {
    id: 'nano_ht4',
    era: 'Modern Era (2010s–Present)',
    title: 'Integration & Advanced Applications',
    description: 'Focus on scalable manufacturing, integration into consumer electronics, and advanced medical devices. Advances in nanophotonics, nano-bio interfaces, quantum dots, and environmental nanotechnology.',
    icon: <Brain className="w-5 h-5 text-primary" />,
  },
];

const presentApplicationsData = [
  {
    sector: 'Healthcare',
    icon: <FlaskConical className="w-7 h-7 text-primary" />,
    title: 'Targeted Drug Delivery & Diagnostics',
    description: 'Nanotechnology enables highly targeted drug delivery systems that improve efficacy while reducing side effects. Diagnostic nanosensors allow for early disease detection.',
    example: 'Liposomal nanoparticles delivering chemotherapy agents directly to tumor cells; quantum dots for bio-imaging.',
  },
  {
    sector: 'Electronics',
    icon: <Cpu className="w-7 h-7 text-primary" />,
    title: 'Nanoelectronics & Advanced Semiconductors',
    description: 'Nanoelectronics is pushing the boundaries of miniaturization, enhancing device speed, power efficiency, and creating new functionalities.',
    example: 'Graphene-based transistors, nanoscale memory devices, quantum dot displays for vibrant colors.',
  },
  {
    sector: 'Consumer Tech & Materials',
    icon: <Smartphone className="w-7 h-7 text-primary" />,
    title: 'Enhanced Materials & Products',
    description: 'Nanotech-enabled products improve durability, functionality, and user experience in everyday items.',
    example: 'Self-cleaning surfaces, anti-scratch coatings for screens, lightweight yet strong nanocomposites in sports equipment, UV-blocking nanoparticles in sunscreens.',
  }
];

const keyPlayersData = {
  industryLeaders: [
    { name: 'Innovatech Corp (Conceptual)', focus: 'Pioneering commercial nano-enabled products in coatings, electronics, and healthcare. Known for extensive R&D and global market presence.', icon: <Building className="w-5 h-5 text-primary"/> },
  ],
  researchInstitutions: [
    { name: 'Global Research Institute for Nanoscale Science (Conceptual)', focus: 'Leading fundamental research in nanomaterials, characterization techniques, and nanoscale devices. Publishes influential papers and drives international collaboration.', icon: <FlaskConical className="w-5 h-5 text-primary"/> },
  ],
  globalInitiatives: [
    { name: 'Open Nanotech Standards Initiative (Conceptual)', focus: 'Develops open frameworks for nanotech development, ethical guidelines, and safety standards. Facilitates interdisciplinary cooperation and public engagement.', icon: <Globe className="w-5 h-5 text-primary"/> },
  ],
};

const futureTrendsData = [
    { title: 'Nanomedicine Revolution', description: 'Personalized nanobots for disease diagnosis and treatment, advanced in-vivo imaging, and regenerative medicine using nanomaterials.', icon: <FlaskConical className="w-7 h-7 text-primary"/> },
    { title: 'Nanomaterials for Sustainability', description: 'Highly efficient catalysts for green chemistry, advanced membranes for water purification, and materials for CO2 capture and conversion.', icon: <Layers className="w-7 h-7 text-primary"/> },
    { title: 'Quantum Nanophotonics', description: 'Integrating quantum phenomena with nanophotonic devices for ultra-secure communication, advanced sensing, and quantum computing components.', icon: <Atom className="w-7 h-7 text-primary"/> },
    { title: '3D Nanofabrication', description: 'Advanced techniques for printing complex three-dimensional structures at the nanoscale, enabling novel devices and metamaterials.', icon: <ScanSearch className="w-7 h-7 text-primary"/> },
];

const ethicalSocietalData = [
  { title: 'Environmental & Health Safety (EHS)', description: 'Assessing the lifecycle impact of engineered nanomaterials on ecosystems and human health, developing safe handling and disposal protocols.', icon: <ShieldAlert className="w-5 h-5 text-destructive" /> },
  { title: 'Privacy & Surveillance with Nanosensors', description: 'Concerns over the potential misuse of ubiquitous, tiny nanosensors for pervasive monitoring and data collection.', icon: <Eye className="w-5 h-5 text-destructive" /> },
  { title: 'Equitable Access & Global Divide', description: 'Ensuring that the benefits of nanotechnology are accessible globally and do not exacerbate existing inequalities.', icon: <Users className="w-5 h-5 text-destructive" /> },
  { title: 'Regulatory Frameworks', description: 'Developing agile and adaptive regulatory frameworks to keep pace with rapid innovation while ensuring safety and ethical use.', icon: <Scale className="w-5 h-5 text-destructive" /> },
];


export default function NanotechnologyPage() {
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
          <Telescope className="w-16 h-16 md:w-20 md:h-20 text-primary mx-auto md:mx-0 flex-shrink-0" />
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
              Nanotechnology
            </h1>
            <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto md:mx-0">
              Engineering materials and devices at the atomic and molecular scale.
            </p>
          </div>
        </div>
      </header>

      <Section title="Comprehensive Overview" titleIcon={<InfoIcon className="w-6 h-6 text-primary"/>} description="Introducing nanotechnology, its core concepts, and transformative potential." className="bg-muted/30">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-6 items-center">
            <div className="md:col-span-4 space-y-4">
                <p className="text-base text-muted-foreground">
                    Nanotechnology involves manipulating matter at dimensions between approximately 1 and 100 nanometers—the scale of atoms and molecules—enabling unprecedented control over material properties and device function.
                </p>
                <div>
                    <h4 className="font-semibold text-md text-primary mb-1">Core Concepts:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        <li>Nanoscale phenomena: Quantum effects, significantly increased surface area to volume ratio, dominant molecular interactions.</li>
                        <li>Fabrication techniques: Bottom-up assembly (building from atoms/molecules), top-down lithography (carving from larger materials), self-assembly processes.</li>
                    </ul>
                </div>
                <p className="text-base text-muted-foreground">
                    This precise control allows the design of smart materials with enhanced strength, conductivity, or reactivity. Applications span medicine (targeted drug delivery, diagnostic nanosensors), electronics (nanoelectronics, faster semiconductors), and materials science (durable nano-coatings, self-cleaning surfaces). Nanotechnology is driving innovation across diverse fields, poised to reshape industries from healthcare to manufacturing.
                </p>
            </div>
             <div className="md:col-span-3">
                <Image src="https://placehold.co/600x400.png" alt="Nanotechnology Abstract Visual" width={600} height={400} className="rounded-md object-cover w-full shadow-lg border border-border" data-ai-hint="abstract molecular structure" />
            </div>
        </div>
      </Section>

      <Section title="Historical Timeline" titleIcon={<Milestone className="w-6 h-6 text-primary"/>} description="Key milestones tracing the evolution of Nanotechnology.">
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

      <Section title="Key Players & Leaders" titleIcon={<Globe className="w-6 h-6 text-primary"/>} description="Influential organizations shaping nanotechnology.">
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

       <Section title="Conclusion & Call to Action" titleIcon={<BookOpen className="w-6 h-6 text-primary"/>} description="Nanotechnology’s journey is one of rapid growth and profound potential." className="text-center bg-muted/30">
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Continuous research, ethical vigilance, and international collaboration are essential for responsible advancement and harnessing the full benefits of nanotechnology for society.
            </p>
            <Link href="/research?topic=Nanotechnology" passHref legacyBehavior={false}>
                <Button size="lg" variant="default">
                    Explore Related Research <ExternalLink className="ml-2 h-4 w-4"/>
                </Button>
            </Link>
        </Section>

    </div>
  );
}
