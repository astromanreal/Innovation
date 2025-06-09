
import Image from 'next/image';
import Link from 'next/link';
import {
  Bot, Rocket, Milestone, Cpu, Factory, HeartPulse, Package, Users, Home as HomeIcon, Building, FlaskConical, Globe, Lightbulb, Zap, BookOpen, ArrowLeft, ExternalLink, CheckCircle, Info as InfoIcon, Brain, Scale
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
  title: 'Robotics & Automation Deep Dive',
  description: 'Explore the history, core concepts, applications in manufacturing and healthcare, future trends like soft robotics and edge AI, and ethical considerations of Robotics and Automation.',
  keywords: ['Robotics', 'Automation', 'AI in Robotics', 'Industrial Robots', 'Cobots', 'Autonomous Systems', 'Future of Robotics', 'Smart Manufacturing', 'Surgical Robots'],
  openGraph: {
    title: 'Robotics & Automation Deep Dive | Innovation Hub Explorer',
    description: 'A comprehensive guide to the world of robotics and automation.',
    url: '/explore/robotics-automation',
    images: [
      {
        url: '/og-robotics.png', // Replace with an actual relevant image
        width: 1200,
        height: 630,
        alt: 'Robotics and Automation Abstract Visualization',
      },
    ],
  },
  twitter: {
    title: 'Robotics & Automation Deep Dive',
    description: 'Exploring the intelligence behind modern machines.',
  },
  alternates: {
    canonical: '/explore/robotics-automation',
  },
};


const historicalTimelineData = [
  {
    id: 'htr1',
    era: 'Concept Era',
    yearRange: '1940s–1960s',
    title: 'Theoretical Foundations & Early Automation',
    description: 'Alan Turing’s work on machine reasoning and early cybernetics concepts by Norbert Wiener laid theoretical groundwork. First industrial automation began appearing in automotive factories, showcasing feedback systems.',
    icon: <Brain className="w-5 h-5 text-primary" />,
  },
  {
    id: 'htr2',
    era: 'Pioneering Developments',
    yearRange: '1970s–1980s',
    title: 'First Mobile & Industrial Robots',
    description: 'Shakey the Robot (1966–1972) became the first mobile robot to reason about its actions. SCARA & PUMA arms revolutionized manufacturing automation with sensor-based feedback.',
    icon: <Cpu className="w-5 h-5 text-primary" />,
  },
  {
    id: 'htr3',
    era: 'Growth & Adoption',
    yearRange: '1990s–2000s',
    title: 'Humanoids, Surgical Bots & AGVs',
    description: 'Honda\'s ASIMO (2000) showcased advanced humanoid motion. Robotics saw widespread use in automotive and semiconductor industries. Surgical robotics like the da Vinci system emerged, and AGVs became common in warehousing.',
    icon: <Milestone className="w-5 h-5 text-primary" />,
  },
  {
    id: 'htr4',
    era: 'Modern Era',
    yearRange: '2010–Present',
    title: 'AI Integration & Real-World Mobility',
    description: 'Boston Dynamics’ Spot and Atlas demonstrated impressive real-world mobility. Amazon Robotics scaled warehouse automation. Swarm robotics found applications in agriculture and disaster response. AI is now deeply integrated for perception, planning, and action.',
    icon: <Bot className="w-5 h-5 text-primary" />,
  },
];

const presentApplicationsData = [
    {
        title: 'Industry 4.0 & Smart Manufacturing',
        icon: <Factory className="w-7 h-7 text-primary" />,
        description: 'Precision assembly by collaborative robots (Cobots), predictive maintenance via robotic sensors, and hyper-efficient production lines integrated with IoT and AI. Key in automotive, electronics, and aerospace.',
    },
    {
        title: 'Healthcare & Surgery',
        icon: <HeartPulse className="w-7 h-7 text-primary" />,
        description: 'Robotic-assisted interventions for high-precision, minimally invasive procedures (e.g., Da Vinci). Rehabilitation robots aid recovery, and AI enhances diagnostics with robotic imaging.',
    },
    {
        title: 'Logistics & Warehousing',
        icon: <Package className="w-7 h-7 text-primary" />,
        description: 'Automated fulfillment centers with self-navigating robots sorting and transporting packages. Robotic arms perform bin picking using computer vision, enabling 24/7 autonomous supply chain optimization.',
    },
    {
        title: 'Human-Robot Collaboration',
        icon: <Users className="w-7 h-7 text-primary" />,
        description: 'Exoskeletons support physically demanding jobs. Assistive robots are used in eldercare and public services. Robotic baristas, delivery bots, and reception assistants are emerging.',
    },
    {
        title: 'Consumer Technology',
        icon: <HomeIcon className="w-7 h-7 text-primary" />,
        description: 'Everyday automation like robot vacuum cleaners and lawnmowers with LIDAR navigation. Personal companion robots with speech and emotion detection. DIY robotics kits foster education.',
    }
];

const keyPlayersData = [
  { name: 'Innovatech Corp', type: 'Leading Company', focus: 'Known for its cutting-edge humanoid assistants and industrial automation solutions, Innovatech leads the global market with agile robotic platforms designed for both heavy-duty industry and service sectors.', icon: <Building className="w-6 h-6 text-primary"/> },
  { name: 'Global Research Institute for Intelligent Machines', type: 'Top Research Group', focus: 'Focuses on adaptive control systems, robotic ethics, and next-gen mobility. They pioneered multi-agent swarm control and publish foundational robotics research.', icon: <FlaskConical className="w-6 h-6 text-primary"/> },
  { name: 'Open Standard Robotics Initiative', type: 'Global Initiative', focus: 'Working to ensure open-source collaboration and safety standards across robotic ecosystems, including the RoboEthics Protocol and the Universal Robotics API framework.', icon: <Globe className="w-6 h-6 text-primary"/> },
];

const futureTrendsData = [
    { title: 'Soft Robotics', description: 'Bio-inspired, flexible machines interacting safely with humans and delicate environments.', icon: <Zap className="w-7 h-7 text-primary"/> },
    { title: 'Edge AI in Robotics', description: 'Real-time decision-making on-device without cloud dependency, enhancing autonomy and responsiveness.', icon: <Cpu className="w-7 h-7 text-primary"/> },
    { title: 'Self-Repairing Robots', description: 'Robots capable of self-diagnosis and repair, crucial for extreme or remote environments.', icon: <Rocket className="w-7 h-7 text-primary"/> },
    { title: 'Neuro-Robotics', description: 'Brain-computer interfaces (BCIs) controlling robotic limbs, merging neuroscience with robotics.', icon: <Brain className="w-7 h-7 text-primary"/> },
];

const exploreFurtherData = [
  { name: "IEEE Robotics & Automation Society", url: "https://www.ieee-ras.org/", imageHint: "ieee logo official" },
  { name: "Open Robotics", url: "https://www.openrobotics.org/", imageHint: "open robotics logo" },
  { name: "RoboCup Federation", url: "https://www.robocup.org/", imageHint: "robocup logo soccer" },
  { name: "ETH Zurich - Robotics & Perception Group", url: "https://rpg.ifi.uzh.ch/", imageHint: "eth zurich logo lab" },
];


export default function RoboticsAutomationPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12 space-y-12 md:space-y-16">
      <header className="mb-8">
        <div className="mb-6">
          <Link href="/domains" passHref legacyBehavior>
            <Button variant="outline" size="sm" className="hover:bg-accent hover:text-accent-foreground">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Domains
            </Button>
          </Link>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
          <Bot className="w-16 h-16 md:w-20 md:h-20 text-primary mx-auto md:mx-0 flex-shrink-0" />
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
              Robotics & Automation – Deep Dive
            </h1>
            <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto md:mx-0">
              Robotics & Automation represent the synergy between mechanical systems and intelligent control. From self-navigating drones to AI-assisted surgical bots, the field has evolved into a cornerstone of modern industry and daily life. This domain combines hardware engineering, control theory, computer science, and machine learning to build systems that can perceive, decide, and act.
            </p>
          </div>
        </div>
      </header>

      <Section title="Comprehensive Overview" titleIcon={<InfoIcon className="w-6 h-6 text-primary"/>} description="Unveiling the Intelligence Behind Machines" className="bg-muted/30">
         <p className="text-base text-muted-foreground mb-4">
            Key areas of exploration include autonomous mobile robots (AMRs), human-robot interaction (HRI), swarm robotics and distributed control, collaborative robots (Cobots), automated logistics and manufacturing, and AI-integrated robotic perception and planning.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader><CardTitle className="text-lg">Autonomous Mobile Robots (AMRs)</CardTitle></CardHeader>
            <CardContent>
              <Image src="https://placehold.co/600x400.png" alt="Autonomous mobile robot navigating a factory floor" width={600} height={400} className="rounded-md object-cover w-full" data-ai-hint="amr factory navigation" />
              <p className="text-sm text-muted-foreground mt-2">AMRs intelligently navigating complex environments in logistics and manufacturing.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle className="text-lg">Human-Robot Interaction (HRI)</CardTitle></CardHeader>
            <CardContent>
              <Image src="https://placehold.co/600x400.png" alt="Human and robot working collaboratively in a shared workspace" width={600} height={400} className="rounded-md object-cover w-full" data-ai-hint="human cobot collaboration" />
              <p className="text-sm text-muted-foreground mt-2">Designing intuitive and safe collaboration between humans and robots.</p>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section title="Historical Timeline" titleIcon={<Milestone className="w-6 h-6 text-primary"/>} description="Tracing the evolution of robotics and automation through key breakthroughs.">
        <Accordion type="single" collapsible className="w-full space-y-3">
          {historicalTimelineData.map((item) => (
            <AccordionItem key={item.id} value={item.id} className="border-none">
              <Card className="overflow-hidden border-border hover:border-primary/30 transition-colors duration-300">
                <AccordionTrigger className="p-4 hover:bg-accent/10 hover:no-underline [&[data-state=open]]:bg-accent/20 w-full rounded-t-md text-left">
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <div>
                      <h4 className="text-md font-semibold text-primary">{item.title} ({item.yearRange})</h4>
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

      <Section title="Present-Day Applications" titleIcon={<CheckCircle className="w-6 h-6 text-primary"/>} description="How robotics and automation are transforming industries today.">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {presentApplicationsData.map((app) => (
            <Card key={app.title} className="flex flex-col h-full hover:shadow-lg transition-shadow group bg-card">
              <CardHeader className="items-center text-center">
                <div className="p-3 bg-primary/10 rounded-full mb-2 group-hover:bg-primary/20 transition-colors">{app.icon}</div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">{app.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow text-center">
                <p className="text-sm text-muted-foreground">{app.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Key Players & Leaders" titleIcon={<Building className="w-6 h-6 text-primary"/>} description="Organizations at the forefront of robotics and automation.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {keyPlayersData.map((player) => (
            <Card key={player.name} className="bg-card hover:shadow-lg transition-shadow flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                    {player.icon}
                    <CardTitle className="text-lg">{player.name}</CardTitle>
                </div>
                <Badge variant="secondary">{player.type}</Badge>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground">{player.focus}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Future Trends & Speculation" titleIcon={<Lightbulb className="w-6 h-6 text-primary"/>} description="Peering into the potential futures shaped by robotics and automation.">
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
         <Card className="mt-8 bg-muted/30">
            <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2"><Scale className="w-5 h-5 text-primary"/>Societal & Ethical Evolution</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p><strong>Job Transformation:</strong> Redefinition of labor across skill spectrums as automation capabilities expand.</p>
                <p><strong>Regulatory Frameworks:</strong> Developing standards for autonomous accountability, safety, and ethical deployment, especially for critical systems.</p>
                <p><strong>Cultural Integration:</strong> Navigating changing societal norms around robot cohabitation, assistance in daily life, and trust in autonomous systems.</p>
            </CardContent>
         </Card>
      </Section>

      <Section title="Explore Further" titleIcon={<BookOpen className="w-6 h-6 text-primary"/>} description="Resources for deeper understanding and ongoing learning in robotics.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {exploreFurtherData.map(resource => (
            <Card key={resource.name} className="bg-card hover:shadow-md">
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-md">{resource.name}</h4>
                  <Link href={resource.url} passHref legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline">
                      Visit Website <ExternalLink className="inline-block ml-1 h-3 w-3"/>
                    </a>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

    </div>
  );
}
