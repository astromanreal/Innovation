
import Image from 'next/image';
import Link from 'next/link';
import {
  MonitorSmartphone, Milestone, Lightbulb, Brain, Users, Building, Globe, Puzzle, Scale, BookOpen, ArrowLeft, ExternalLink, Info as InfoIcon, CheckCircle, HeartPulse, DraftingCompass, ShoppingBag, Zap, Link2 as LinkIconLucide, Rocket, Users2, MapPin, Layers, ShieldCheck, Flag, FlaskConical, GraduationCap
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
  title: 'AR/VR & Metaverse Deep Dive | Innovation Hub Explorer',
  description: 'Explore Augmented Reality (AR), Virtual Reality (VR), and the Metaverse: concepts, history, applications in healthcare & AEC, key players, future trends like spatial AI, and ethical considerations.',
  keywords: ['AR', 'VR', 'Metaverse', 'Augmented Reality', 'Virtual Reality', 'XR', 'Spatial Computing', 'Immersive Technology', 'Digital Twins', 'Web3', 'Future Internet'],
  openGraph: {
    title: 'AR/VR & Metaverse Deep Dive | Innovation Hub Explorer',
    description: 'Journey into immersive digital experiences, virtual worlds, and the future of spatial computing and the Metaverse.',
    url: '/explore/ar-vr-metaverse',
     images: [
      {
        url: '/og-arvr-metaverse.png', 
        width: 1200,
        height: 630,
        alt: 'AR/VR and Metaverse Concept Visualization',
      },
    ],
  },
  twitter: {
    title: 'AR/VR & Metaverse Deep Dive Explained',
    description: 'Exploring the next generation of digital interaction: AR, VR, and the Metaverse.',
    images: ['/og-arvr-metaverse.png'],
  },
  alternates: {
    canonical: '/explore/ar-vr-metaverse',
  },
};


const historicalTimelineData = [
  {
    id: 'arvr_ht1',
    era: 'Concept Era',
    title: 'Early Visions & Theoretical Models',
    description: 'Early visions from science fiction (e.g., "Snow Crash") and theoretical models of immersive computing like Morton Heilig\'s Sensorama (1962). Early cybernetics concepts laid groundwork for human-computer interaction.',
    icon: <Lightbulb className="w-5 h-5 text-primary" />,
  },
  {
    id: 'arvr_ht2',
    era: 'Pioneering Developments (1960s–1980s)',
    title: 'First HMDs & VR Labs',
    description: 'Ivan Sutherland developed the first head-mounted display (HMD), "The Sword of Damocles" (1968). Early VR labs at NASA and universities explored flight simulation and telepresence. Myron Krueger\'s "Videoplace" demonstrated early AR concepts.',
    icon: <FlaskConical className="w-5 h-5 text-primary" />,
  },
  {
    id: 'arvr_ht3',
    era: 'Growth & Adoption (1990s–2010s)',
    title: 'Consumer VR & AR Applications Emerge',
    description: 'Rise of consumer-grade VR devices like Oculus Rift (2012) and HTC Vive (2016). Augmented Reality applications gain popularity, notably Pokémon Go (2016). Development of XR (Extended Reality) platforms and tools begins.',
    icon: <Rocket className="w-5 h-5 text-primary" />,
  },
  {
    id: 'arvr_ht4',
    era: 'Modern Era (2015s–Present)',
    title: 'Metaverse Platforms & Ecosystem Integration',
    description: 'Integration of AI, 5G, blockchain, and Web3 technologies into immersive digital ecosystems. Birth of Metaverse platforms like Meta Horizon Worlds, Decentraland, Spatial, and Roblox. Increased focus on enterprise applications and creator economies.',
    icon: <Brain className="w-5 h-5 text-primary" />,
  },
];

const presentApplicationsData = [
  {
    sector: 'Healthcare & Medicine',
    icon: <HeartPulse className="w-7 h-7 text-primary" />,
    useCase: 'VR-based surgical simulations for training, AR-assisted diagnostics during procedures, remote patient monitoring with AR overlays, and VR therapy for phobia/PTSD treatments and pain management.',
  },
  {
    sector: 'Architecture, Engineering & Construction (AEC)',
    icon: <DraftingCompass className="w-7 h-7 text-primary" />,
    useCase: 'Immersive 3D design walkthroughs for clients, collaborative virtual planning sessions for global teams, AR overlays on construction sites for real-time quality checks and progress tracking.',
  },
  {
    sector: 'Social, Retail & Entertainment',
    icon: <ShoppingBag className="w-7 h-7 text-primary" />,
    useCase: 'Virtual showrooms for products, avatar-driven social platforms and events, AR try-on experiences for fashion and cosmetics, immersive advertising campaigns, and virtual concerts/experiences.',
  }
];

const keyPlayersData = {
  industryLeaders: [
    { name: 'Meta (formerly Facebook)', focus: 'Building platforms like Horizon Worlds, innovating on VR hardware (Meta Quest), and heavily investing in the Metaverse ecosystem. Key focus on social VR and creator tools.', icon: <Building className="w-5 h-5 text-primary"/> },
  ],
  researchInstitutions: [
    { name: 'MIT Media Lab – Fluid Interfaces Group (Conceptual stand-in)', focus: 'Conducting cutting-edge research on spatial interfaces, wearable computing, human-computer interaction, and tangible AR/VR experiences. (Note: MIT Media Lab has multiple relevant groups, this is a representative name).', icon: <FlaskConical className="w-5 h-5 text-primary"/> },
  ],
  globalInitiatives: [
    { name: 'XR Open Forum (Conceptual)', focus: 'Driving open-source standards, ethical frameworks, and interoperability protocols for immersive technologies and the Metaverse. Aims to foster a collaborative and accessible ecosystem.', icon: <Globe className="w-5 h-5 text-primary"/> },
  ],
};

const futureTrendsData = [
    { title: 'Lightweight AR Glasses & Advanced Haptics', description: 'Development of socially acceptable, all-day wearable AR glasses. Full-body haptic suits and advanced sensory feedback for deeper immersion.', icon: <Zap className="w-7 h-7 text-primary"/> },
    { title: 'Real-Time Spatial AI & Digital Twins', description: 'AI-powered understanding and mapping of physical environments in real-time. Creation of ultra-realistic, dynamic digital twins of cities, factories, and even biological systems.', icon: <Layers className="w-7 h-7 text-primary"/> },
    { title: 'Neural Interfaces & Cognitive Immersion', description: 'Advancements in Brain-Computer Interfaces (BCIs) for direct thought-to-action control in virtual environments, leading to deeper cognitive immersion.', icon: <Brain className="w-7 h-7 text-primary"/> },
    { title: 'Decentralized Metaverse & Web3 Integration', description: 'User-owned assets (NFTs), decentralized identity, and community-governed virtual worlds built on Web3 principles, fostering creator economies.', icon: <Globe className="w-7 h-7 text-primary"/> },
];

const ethicalSocietalData = [
  { title: 'Digital Identity & Avatar Representation', description: 'Complexities of self-representation in virtual spaces, avatar ethics, and the potential for identity theft or misrepresentation.', icon: <Users2 className="w-5 h-5 text-destructive" /> },
  { title: 'Data Privacy in Immersive Environments', description: 'Collection of vast amounts of biometric and behavioral data (eye-tracking, movements, interactions) and the need for robust privacy safeguards.', icon: <ShieldCheck className="w-5 h-5 text-destructive" /> },
  { title: 'Behavioral Manipulation & Addiction', description: 'Potential for persuasive technologies within immersive worlds to manipulate user behavior, and concerns about addiction to hyper-realistic virtual experiences.', icon: <Scale className="w-5 h-5 text-destructive" /> },
  { title: 'Accessibility & Digital Divide', description: 'Ensuring equitable access to AR/VR technologies and Metaverse platforms to avoid exacerbating existing societal inequalities.', icon: <Users className="w-5 h-5 text-destructive" /> },
];


export default function ARVRMetaversePage() {
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
          <MonitorSmartphone className="w-16 h-16 md:w-20 md:h-20 text-primary mx-auto md:mx-0 flex-shrink-0" />
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
              AR/VR & Metaverse
            </h1>
            <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto md:mx-0">
              Creating immersive digital experiences, virtual worlds, and spatial computing.
            </p>
          </div>
        </div>
      </header>

      <Section title="Comprehensive Overview" titleIcon={<Brain className="w-6 h-6 text-primary"/>} description="Understanding the core concepts and significance of AR/VR & the Metaverse." className="bg-muted/30">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-6 items-center">
            <div className="md:col-span-4 space-y-4">
                <p className="text-base text-muted-foreground">
                  Augmented Reality (AR) overlays digital content onto the physical world, while Virtual Reality (VR) immerses users in fully simulated environments. These technologies, combined with spatial computing and blockchain infrastructure, power the Metaverse — persistent, shared digital realms. Explore their role in reshaping entertainment, education, remote collaboration, digital economies, and beyond.
                </p>
            </div>
             <div className="md:col-span-3">
                <Image src="https://placehold.co/600x400.png" alt="Abstract visualization of AR/VR and Metaverse concepts" width={600} height={400} className="rounded-md object-cover w-full shadow-lg border border-border" data-ai-hint="vr headset abstract city" />
            </div>
        </div>
      </Section>
      
      <Section title="Detailed Visual Representation" titleIcon={<MapPin className="w-6 h-6 text-primary"/>} description="Mapping technologies, platforms, and hardware behind immersive experiences." className="bg-muted/30">
         <Image src="https://placehold.co/800x450.png" alt="Infographic detailing AR/VR and Metaverse technologies" width={800} height={450} className="rounded-md object-cover w-full shadow-lg border border-border" data-ai-hint="metaverse infographic technology" />
         <p className="text-xs text-muted-foreground text-center mt-2">(Placeholder for detailed infographic)</p>
      </Section>


      <Section title="Historical Timeline" titleIcon={<Milestone className="w-6 h-6 text-primary"/>} description="Key milestones in the development of AR/VR & the Metaverse.">
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

      <Section title="Present Applications" titleIcon={<CheckCircle className="w-6 h-6 text-primary"/>} description="How AR/VR & the Metaverse are being used today across sectors.">
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

      <Section title="Key Players & Leaders" titleIcon={<Globe className="w-6 h-6 text-primary"/>} description="Organizations shaping the AR/VR & the Metaverse landscape.">
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

      <Section title="Future Trends & Speculation" titleIcon={<Rocket className="w-6 h-6 text-primary"/>} description="What’s next for AR/VR & the Metaverse?">
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
          The future of AR/VR & the Metaverse depends on responsible innovation, inclusive design, and evolving societal norms.
        </blockquote>
      </Section>
      
      <Section title="Societal & Ethical Evolution" titleIcon={<Scale className="w-6 h-6 text-primary"/>} description="Navigating the complex societal implications of immersive technologies.">
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

       <Section title="Explore Related Research" titleIcon={<BookOpen className="w-6 h-6 text-primary"/>} description="Dive deeper into the technical and societal aspects of immersive technologies." className="text-center bg-muted/30">
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Find peer-reviewed journals, white papers, and research projects exploring this rapidly evolving domain.
            </p>
            <Link href="/research?topic=AR/VR" passHref legacyBehavior={false}>
                <Button size="lg" variant="default">
                    Find AR/VR Research <ExternalLink className="ml-2 h-4 w-4"/>
                </Button>
            </Link>
        </Section>

    </div>
  );
}
