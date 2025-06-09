
import Image from 'next/image';
import Link from 'next/link';
import {
  Car, Bot, Milestone, Lightbulb, FlaskConical, Rocket, Brain, Users, Building, Globe, Puzzle, Scale, BookOpen, ArrowLeft, ExternalLink, Info as InfoIcon, CheckCircle, Cpu, Users2, Network, ShieldAlert, Truck, Package, TramFront, Factory, MapPin, CarFront, Wrench, Gavel, UsersRound, Building2, DollarSign, TrendingUp, Airplay, Plane, BrainCircuit, GraduationCap
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
  title: 'Autonomous Vehicles & Transportation | Innovation Hub Explorer',
  description: 'Explore self-driving cars, autonomous drones, smart transportation systems. Discover the technology, applications, challenges (technical, legal, ethical), and future impact of AVs.',
  keywords: ['Autonomous Vehicles', 'Self-Driving Cars', 'Smart Transportation', 'AV Technology', 'Mobility-as-a-Service', 'V2X', 'Logistics Automation', 'Drone Delivery', 'Robotics in Transport'],
  openGraph: {
    title: 'Autonomous Vehicles & Future Transportation | Innovation Hub Explorer',
    description: 'A deep dive into autonomous vehicles: self-driving cars, drones, and the technologies reshaping mobility, logistics, and urban planning.',
    url: '/explore/autonomous-vehicles',
    images: [
      {
        url: '/og-autonomous-vehicles.png',
        width: 1200,
        height: 630,
        alt: 'Autonomous Vehicles and Transportation Systems',
      },
    ],
  },
  twitter: {
    title: 'Autonomous Vehicles Explained | Innovation Hub Explorer',
    description: 'The future of mobility: Self-driving cars, drones, and smart transport solutions.',
    images: ['/og-autonomous-vehicles.png'],
  },
  alternates: {
    canonical: '/explore/autonomous-vehicles',
  },
};

const historicalTimelineData = [
  {
    id: 'av_ht1',
    era: 'Concept & Early Research',
    title: 'Pioneering Autonomous Vehicle Projects',
    description: 'Early autonomous vehicle projects like the DARPA Grand Challenge laid foundational groundwork. Development of early sensor technologies and AI algorithms for navigation.',
    icon: <Lightbulb className="w-5 h-5 text-primary" />,
  },
  {
    id: 'av_ht2',
    era: 'Technological Breakthroughs',
    title: 'Lidar, Computer Vision & Deep Learning',
    description: 'Introduction of Lidar, significant improvements in computer vision, and the application of deep learning for perception tasks. Development of real-time decision-making algorithms and sensor fusion techniques.',
    icon: <FlaskConical className="w-5 h-5 text-primary" />,
  },
  {
    id: 'av_ht3',
    era: 'Growth & Pilot Deployments',
    title: 'Commercial Trials & Drone Emergence',
    description: 'Commercial trials by companies like Tesla, Waymo, and Uber ATG. Emergence of autonomous drones for delivery, surveillance, and logistics operations.',
    icon: <Rocket className="w-5 h-5 text-primary" />,
  },
  {
    id: 'av_ht4',
    era: 'Modern Era & Future Directions',
    title: 'V2X Communication & Regulatory Progress',
    description: 'Focus on Vehicle-to-Everything (V2X) communication for cooperative driving. Progress in regulatory frameworks and safety validation standards. Integration into smart urban transport ecosystems.',
    icon: <Brain className="w-5 h-5 text-primary" />,
  },
];

const presentApplicationsData = [
  {
    title: 'Passenger Vehicles',
    icon: <CarFront className="w-7 h-7 text-primary" />,
    description: 'Semi-autonomous driving features (e.g., Tesla Autopilot, GM Super Cruise) are common. Fully autonomous taxis and shuttles are being piloted in select cities.',
    imageHint: "self-driving car city"
  },
  {
    title: 'Logistics & Delivery',
    icon: <Truck className="w-7 h-7 text-primary" />,
    description: 'Autonomous trucks are tested for long-haul freight to improve efficiency and safety. Delivery drones and ground robots handle last-mile delivery.',
    imageHint: "autonomous truck highway"
  },
  {
    title: 'Public Transportation',
    icon: <TramFront className="w-7 h-7 text-primary" />,
    description: 'Driverless buses and trams operate on fixed routes in some urban areas. AI-driven smart traffic management systems optimize flow and reduce congestion.',
    imageHint: "driverless bus city"
  },
  {
    title: 'Industrial & Specialized Vehicles',
    icon: <Factory className="w-7 h-7 text-primary" />,
    description: 'Autonomous mining trucks, agricultural equipment (tractors, harvesters), and warehouse robots enhance productivity and safety in industrial settings.',
    imageHint: "autonomous mining truck"
  },
  {
    title: 'Urban Mobility',
    icon: <MapPin className="w-7 h-7 text-primary" />,
    description: 'Mobility-as-a-Service (MaaS) platforms are emerging, integrating autonomous vehicle options for shared rides and on-demand transport.',
    imageHint: "city map navigation"
  }
];

const keyPlayersData = {
  industryLeaders: [
    { name: 'Waymo (Google)', focus: 'Pioneer in fully autonomous passenger vehicles with large-scale pilot deployments in several US cities.', icon: <Car className="w-5 h-5 text-primary"/> },
    { name: 'Tesla', focus: 'Industry leader in semi-autonomous driving systems (Autopilot, FSD) with vast real-world data collection.', icon: <Car className="w-5 h-5 text-primary"/> },
    { name: 'Aurora Innovation', focus: 'Developing full-stack autonomous driving software and hardware for trucks and passenger mobility.', icon: <Cpu className="w-5 h-5 text-primary"/> },
    { name: 'NVIDIA', focus: 'Provides AI hardware (Drive platforms) and software solutions powering many autonomous vehicle systems.', icon: <Cpu className="w-5 h-5 text-primary"/> },
  ],
  researchInitiatives: [
    { name: 'DARPA (Defense Advanced Research Projects Agency)', focus: 'Historically funded pivotal AV challenges that spurred innovation. Continues research in advanced AI and robotics for defense applications.', icon: <Users2 className="w-5 h-5 text-primary"/> },
    { name: 'EU Autonomous Vehicle Projects (e.g., L3Pilot)', focus: 'Large-scale European initiatives testing and validating automated driving functions on public roads, fostering collaboration.', icon: <Globe className="w-5 h-5 text-primary"/> },
  ],
};

const challengesData = [
  { title: 'Technical Hurdles', description: 'Handling unpredictable "edge case" scenarios, sensor limitations in adverse weather (snow, fog, heavy rain), and ensuring robust cybersecurity against attacks.', icon: <Wrench className="w-5 h-5 text-destructive" /> },
  { title: 'Legal & Regulatory Issues', description: 'Defining liability in accidents involving AVs, establishing clear certification and safety standards for deployment, and addressing data privacy concerns.', icon: <Gavel className="w-5 h-5 text-destructive" /> },
  { title: 'Ethical Considerations', description: 'Programming ethical decision-making for AVs in unavoidable accident scenarios (e.g., "trolley problem" variants), and ensuring equitable access to autonomous mobility.', icon: <Scale className="w-5 h-5 text-destructive" /> },
  { title: 'Infrastructure & Integration', description: 'Updating road infrastructure (signage, lane markings, V2I comms) for AV compatibility, and ensuring interoperability between different AV manufacturers and systems.', icon: <Network className="w-5 h-5 text-destructive" /> },
];

const futureTrendsData = [
    { title: 'AI-Enhanced Perception & Prediction', description: 'Significant improvements in AI algorithms leading to near human-or-better perception, prediction of pedestrian/vehicle behavior, and robust Level 4/5 autonomy.', icon: <BrainCircuit className="w-7 h-7 text-primary"/> },
    { title: 'Smart City Integration', description: 'Deep integration with smart city infrastructure via 5G/6G networks, enabling real-time traffic optimization, V2X communication, and coordinated fleet management.', icon: <Building2 className="w-7 h-7 text-primary"/> },
    { title: 'Urban Air Mobility (UAM)', description: 'Development and deployment of autonomous flying taxis (eVTOLs) for short-distance urban and inter-city travel, potentially alleviating ground congestion.', icon: <Plane className="w-7 h-7 text-primary"/> },
    { title: 'Transformative Societal Impact', description: 'Reduced accidents, lower emissions (with EV AVs), redesigned urban layouts, new mobility-as-a-service business models, and changes in transportation workforce dynamics.', icon: <TrendingUp className="w-7 h-7 text-primary"/> },
];

const exploreFurtherData = [
  { name: "SAE Levels of Driving Automation", url: "https://www.sae.org/blog/sae-j3016-update", imageHint: "sae logo document" },
  { name: "Waymo Safety Report", url: "https://waymo.com/safety/", imageHint: "waymo logo safety" },
  { name: "RAND Corporation AV Research", url: "https://www.rand.org/topics/automated-vehicles.html", imageHint: "rand logo report" },
  { name: "The Verge - Transportation", url: "https://www.theverge.com/transportation", imageHint: "news logo tech" },
];


export default function AutonomousVehiclesPage() {
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
          <Car className="w-16 h-16 md:w-20 md:h-20 text-primary mx-auto md:mx-0 flex-shrink-0" />
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
              Autonomous Vehicles & Transportation
            </h1>
            <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto md:mx-0">
              Reshaping mobility by reducing human intervention and enhancing safety, efficiency, and accessibility through AI and advanced sensor technologies.
            </p>
          </div>
        </div>
      </header>

      <Section title="Comprehensive Overview" titleIcon={<InfoIcon className="w-6 h-6 text-primary"/>} description="Understanding the core concepts and societal impact of autonomous mobility." className="bg-muted/30">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-6 items-center">
            <div className="md:col-span-4 space-y-4">
                <p className="text-base text-muted-foreground">
                  Autonomous Vehicles (AVs), including self-driving cars, delivery drones, and automated public transport, utilize sophisticated AI, sensor fusion (Lidar, radar, cameras, GPS), and decision-making algorithms to navigate and operate without direct human control. They promise to revolutionize mobility by significantly reducing accidents caused by human error, alleviating traffic congestion, lowering emissions (especially when electric), and increasing accessibility for the elderly, disabled, and those without personal vehicles.
                </p>
                 <div>
                    <h4 className="font-semibold text-md text-primary mb-1">Core Focus Areas:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        <li>AI-driven navigation and real-time decision-making.</li>
                        <li>Sensor fusion for robust environmental perception.</li>
                        <li>Development of regulatory and ethical frameworks.</li>
                        <li>Integration with smart city infrastructure and V2X communication.</li>
                        <li>Ensuring cybersecurity and system resilience.</li>
                    </ul>
                </div>
                <p className="text-base text-muted-foreground">
                  The impact spans safer roads, transformed urban planning, new logistics paradigms, and evolving business models around mobility-as-a-service.
                </p>
            </div>
             <div className="md:col-span-3">
                <Image src="https://placehold.co/600x400.png" alt="Autonomous Vehicle Concept Visual" width={600} height={400} className="rounded-md object-cover w-full shadow-lg border border-border" data-ai-hint="self-driving car future city" />
            </div>
        </div>
      </Section>
      
      <Section title="Historical & Technical Evolution" titleIcon={<Milestone className="w-6 h-6 text-primary"/>} description="Tracing the development of autonomous vehicle technology from early research to current advances." className="bg-muted/30">
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

      <Section title="Present Applications" titleIcon={<CheckCircle className="w-6 h-6 text-primary"/>} description="How autonomous transportation technologies are being applied today.">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {presentApplicationsData.map((app_item) => (
            <Card key={app_item.title} className="flex flex-col h-full hover:shadow-lg transition-shadow group bg-card">
              <CardHeader className="items-center text-center">
                <div className="p-3 bg-primary/10 rounded-full mb-2 group-hover:bg-primary/20 transition-colors">{app_item.icon}</div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">{app_item.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow text-center">
                 <p className="text-sm text-muted-foreground">{app_item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Key Players & Innovators" titleIcon={<Users2 className="w-6 h-6 text-primary"/>} description="Leading companies, research labs, and initiatives advancing autonomous transportation.">
        <div className="space-y-6">
            <div>
                <h3 className="text-xl font-semibold mb-3 text-primary flex items-center gap-2"><Building className="w-5 h-5"/>Industry Leaders</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                {keyPlayersData.industryLeaders.map(leader => (
                    <Card key={leader.name} className="p-4 bg-card hover:shadow-md flex flex-col justify-between">
                      <div className="flex items-center gap-3 mb-2">
                        {leader.icon}
                        <CardTitle className="text-md">{leader.name}</CardTitle>
                      </div>
                      <p className="text-xs text-muted-foreground">{leader.focus}</p>
                    </Card>
                ))}
                </div>
            </div>
            <div>
                <h3 className="text-xl font-semibold mb-3 text-primary flex items-center gap-2"><FlaskConical className="w-5 h-5"/>Research & Government Initiatives</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {keyPlayersData.researchInitiatives.map(inst => (
                    <Card key={inst.name} className="p-4 bg-card hover:shadow-md flex flex-col justify-between">
                      <div className="flex items-center gap-3 mb-2">
                        {inst.icon}
                        <CardTitle className="text-md">{inst.name}</CardTitle>
                      </div>
                       <Badge variant="secondary" className="mb-2 self-start">Research/Govt. Initiative</Badge>
                      <p className="text-xs text-muted-foreground">{inst.focus}</p>
                    </Card>
                ))}
                </div>
            </div>
        </div>
      </Section>

      <Section title="Challenges & Regulatory Frameworks" titleIcon={<ShieldAlert className="w-6 h-6 text-primary"/>} description="Discussing technical, legal, ethical, and societal hurdles to widespread AV adoption.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {challengesData.map((item) => (
            <Card key={item.title} className="bg-card hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-center gap-3 space-y-0 pb-2">
                     <div className="p-2 bg-destructive/10 rounded-full">{item.icon}</div>
                    <CardTitle className="text-md font-semibold text-destructive">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Future Trends & Impact" titleIcon={<TrendingUp className="w-6 h-6 text-primary"/>} description="Exploring emerging technologies and long-term societal transformations driven by autonomous transportation.">
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
      
      <Section title="Explore Related Research & Resources" titleIcon={<BookOpen className="w-6 h-6 text-primary"/>} description="Access technical papers, government reports, pilot studies, and case examples." className="text-center bg-muted/30">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
