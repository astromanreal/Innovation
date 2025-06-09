
import Image from 'next/image';
import Link from 'next/link';
import {
  Signal, Milestone, Lightbulb, FlaskConical, Rocket, Brain, Users, Building, Globe, Puzzle, Scale, BookOpen, ArrowLeft, ExternalLink, Info as InfoIcon, CheckCircle, Cpu, Network, Smartphone, Server, TowerControl, Wifi, ShieldAlert, Users2, RadioTower, Satellite, Orbit, Factory, Layers, HeartPulse, Car, Recycle
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
  title: '5G & Next-Gen Connectivity | Innovation Hub Explorer',
  description: 'Explore 5G networks, 6G concepts, and their transformative impact on IoT, smart cities, autonomous vehicles, healthcare, and industrial automation. Learn about URLLC, eMBB, and mMTC.',
  keywords: ['5G', '6G', 'Wireless Connectivity', 'Mobile Networks', 'IoT', 'Edge Computing', 'Network Slicing', 'Telecommunications', 'URLLC', 'eMBB', 'mMTC', 'Smart Cities', 'Autonomous Vehicles', 'Future Wireless'],
  openGraph: {
    title: '5G & Next-Gen Connectivity Deep Dive | Innovation Hub Explorer',
    description: 'Dive into 5G, 6G, and future wireless technologies: exploring concepts, applications, and ethical considerations for a connected world.',
    url: '/explore/5g-next-gen-connectivity',
    images: [
      {
        url: '/og-5g-connectivity.png',
        width: 1200,
        height: 630,
        alt: '5G and Next-Gen Connectivity Abstract Visual',
      },
    ],
  },
  twitter: {
    title: '5G & Next-Gen Connectivity Explained | Innovation Hub Explorer',
    description: 'The future of wireless is here. Explore 5G, 6G, and beyond with key applications and insights.',
    images: ['/og-5g-connectivity.png'],
  },
  alternates: {
    canonical: '/explore/5g-next-gen-connectivity',
  },
};


const historicalTimelineData = [
  {
    id: '5g_ht1',
    era: 'Concept Era (1G-4G Development)',
    title: 'Evolution from Analog to Digital Mobile Networks',
    description: 'Early theoretical work on cellular networks and wireless communication principles. Development of 1G (analog) through 4G (LTE) mobile networks, laying the groundwork for future high-speed, high-capacity systems.',
    icon: <Lightbulb className="w-5 h-5 text-primary" />,
  },
  {
    id: '5g_ht2',
    era: 'Pioneering Developments (Early 5G Trials)',
    title: 'Initial 5G Trials & Key Technology Breakthroughs',
    description: 'Initial trials and deployments of 5G technology. Key breakthroughs in antenna design (Massive MIMO), spectrum utilization (mmWave), and network architectures (Network Function Virtualization - NFV, Software-Defined Networking - SDN).',
    icon: <FlaskConical className="w-5 h-5 text-primary" />,
  },
  {
    id: '5g_ht3',
    era: 'Growth & Adoption (Global 5G Expansion)',
    title: 'Global 5G Rollout & Ecosystem Development',
    description: 'Global expansion of 5G networks across numerous countries. Development and adoption of network slicing capabilities and edge computing infrastructures. IoT ecosystems begin to expand significantly with 5G connectivity.',
    icon: <Rocket className="w-5 h-5 text-primary" />,
  },
  {
    id: '5g_ht4',
    era: 'Modern Era (5G Advanced & 6G Research)',
    title: '5G Advanced, 6G Research & Commercial Use Cases',
    description: 'Research into 6G capabilities (terahertz communication, AI-driven networks, integrated sensing). Commercial use cases like autonomous vehicles, augmented reality, remote surgery, and smart manufacturing become more prevalent. Integration with satellite constellations and non-terrestrial networks (NTNs).',
    icon: <Brain className="w-5 h-5 text-primary" />,
  },
];

const presentApplicationsData = [
  {
    title: 'Enhanced Mobile Broadband (eMBB)',
    icon: <Smartphone className="w-7 h-7 text-primary" />,
    description: 'Ultra-fast internet speeds for consumers enabling immersive experiences like 4K/8K video streaming, cloud gaming, and advanced VR/AR applications on mobile devices.',
    imageHint: "fast mobile streaming"
  },
  {
    title: 'Industrial IoT & Automation (mMTC & URLLC)',
    icon: <Factory className="w-7 h-7 text-primary" />,
    description: 'Smart factories leveraging massive IoT connectivity (mMTC) and ultra-reliable low-latency communication (URLLC) for robotics, real-time process control, and predictive maintenance.',
    imageHint: "factory robot arm"
  },
  {
    title: 'Smart Cities & Infrastructure',
    icon: <Building className="w-7 h-7 text-primary" />,
    description: 'Intelligent traffic management, public safety systems (e.g., smart surveillance), optimized energy grids, and efficient resource management through connected sensors and edge computing capabilities.',
    imageHint: "smart city network"
  },
  {
    title: 'Advanced Healthcare Solutions',
    icon: <HeartPulse className="w-7 h-7 text-primary" />,
    description: 'Remote patient monitoring, real-time data sharing for diagnostics, telemedicine consultations, and enabling remote robotic surgery with ultra-low latency communication.',
    imageHint: "doctor remote surgery"
  },
  {
    title: 'Autonomous Vehicles & V2X',
    icon: <Car className="w-7 h-7 text-primary" />,
    description: 'Vehicle-to-everything (V2X) communication enabling enhanced safety features, traffic coordination, and fully autonomous driving capabilities through reliable, low-latency networks.',
    imageHint: "self-driving car sensor"
  },
  {
    title: 'Network Slicing Use Cases',
    icon: <Layers className="w-7 h-7 text-primary" />,
    description: 'Customized virtual networks tailored for specific needs of enterprises (e.g., secure private networks), emergency services (e.g., priority communication), and entertainment providers (e.g., guaranteed bandwidth for live events).',
    imageHint: "network layers abstract"
  }
];

const keyPlayersData = {
  industryLeaders: [
    { name: 'ConnectX Technologies (Conceptual)', focus: 'Innovators in 5G infrastructure, equipment, and network solutions with global deployments.', icon: <TowerControl className="w-5 h-5 text-primary"/> },
    { name: 'Ericsson', focus: 'Major provider of 5G network equipment and services.', icon: <RadioTower className="w-5 h-5 text-primary"/> },
    { name: 'Nokia', focus: 'Key supplier of 5G technology, software, and services.', icon: <RadioTower className="w-5 h-5 text-primary"/> },
  ],
  researchInstitutions: [
    { name: 'Global Wireless Research Institute (Conceptual)', focus: 'Leading fundamental research on 6G concepts, terahertz communications, and AI integration.', icon: <FlaskConical className="w-5 h-5 text-primary"/> },
  ],
  globalInitiatives: [
    { name: 'International 5G Alliance (Conceptual)', focus: 'Promoting standardization, interoperability, and ethical considerations across the industry.', icon: <Globe className="w-5 h-5 text-primary"/> },
  ],
   otherMajorPlayers: [
    { name: 'Huawei', focus: 'Significant player in 5G infrastructure and R&D.', icon: <Cpu className="w-5 h-5 text-primary"/> },
    { name: 'Qualcomm', focus: 'Leader in 5G modem and chipset technology.', icon: <Cpu className="w-5 h-5 text-primary"/> },
    { name: 'Samsung', focus: 'Provider of 5G network solutions and devices.', icon: <Smartphone className="w-5 h-5 text-primary"/> },
    { name: 'Verizon', focus: 'Major US telecom operator deploying 5G services.', icon: <Signal className="w-5 h-5 text-primary"/> },
    { name: 'AT&T', focus: 'Key US telecom operator for 5G networks.', icon: <Signal className="w-5 h-5 text-primary"/> },
  ]
};

const futureTrendsData = [
    { title: '6G Vision & Terahertz Waves', description: 'Exploring 6G concepts including terahertz (THz) communication for extreme bandwidth, AI-native network design, holographic communications, and integrated sensing capabilities.', icon: <Orbit className="w-7 h-7 text-primary"/> },
    { title: 'AI-Driven Network Automation', description: 'Increased use of Artificial Intelligence and Machine Learning for autonomous network management, predictive optimization, self-healing capabilities, and enhanced security.', icon: <Brain className="w-7 h-7 text-primary"/> },
    { title: 'Ultra-Reliable Low-Latency (URLLC) Evolution', description: 'Further advancements in URLLC to support mission-critical applications like industrial control, remote surgery, and real-time autonomous systems with even greater reliability.', icon: <Server className="w-7 h-7 text-primary"/> },
    { title: 'Non-Terrestrial Networks (NTN)', description: 'Integration of satellite constellations (LEO, MEO, GEO) with terrestrial 5G/6G networks to provide ubiquitous global coverage and enhance network resilience.', icon: <Satellite className="w-7 h-7 text-primary"/> },
];

const ethicalSocietalData = [
  { title: 'Data Privacy & Security', description: 'Addressing heightened privacy and security challenges due to the massive increase in connected devices and data flow in hyper-connected environments.', icon: <ShieldAlert className="w-5 h-5 text-destructive" /> },
  { title: 'Digital Divide & Equitable Access', description: 'Ensuring that the benefits of advanced connectivity reach all populations, bridging the digital divide rather than exacerbating existing inequalities.', icon: <Users className="w-5 h-5 text-destructive" /> },
  { title: 'Environmental Impact & Sustainability', description: 'Managing the energy consumption of expanding network infrastructure and promoting sustainable practices in the manufacturing and deployment of 5G/6G technologies.', icon: <Recycle className="w-5 h-5 text-destructive" /> },
  { title: 'Spectrum Management & Policy', description: 'Navigating complex spectrum allocation policies and international coordination to ensure efficient use of radio frequencies for current and future wireless technologies.', icon: <Scale className="w-5 h-5 text-destructive" /> },
];

const exploreFurtherData = [
  { name: "3GPP (3rd Generation Partnership Project)", url: "https://www.3gpp.org/", imageHint: "3gpp logo standards" },
  { name: "GSMA Intelligence", url: "https://www.gsmaintelligence.com/", imageHint: "gsma logo mobile" },
  { name: "IEEE Communications Society", url: "https://www.comsoc.org/", imageHint: "ieee logo communication" },
  { name: "Next G Alliance (ATIS)", url: "https://nextgalliance.org/", imageHint: "next g alliance logo" },
];


export default function NextGenConnectivityPage() {
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
          <Signal className="w-16 h-16 md:w-20 md:h-20 text-primary mx-auto md:mx-0 flex-shrink-0" />
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
              5G & Next-Gen Connectivity
            </h1>
            <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto md:mx-0">
              Transformative enablers of ultra-fast, low-latency, and highly reliable wireless communication, powering the future digital economy.
            </p>
          </div>
        </div>
      </header>

      <Section title="Comprehensive Overview" titleIcon={<InfoIcon className="w-6 h-6 text-primary"/>} description="Understanding 5G and the evolution towards future wireless networks." className="bg-muted/30">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-6 items-center">
            <div className="md:col-span-4 space-y-4">
                <p className="text-base text-muted-foreground">
                  5G, the fifth generation of wireless networks, delivers significantly enhanced mobile broadband, supports massive Internet of Things (IoT) connectivity, and provides ultra-reliable low-latency communications (URLLC). Beyond 5G, research into 6G and subsequent generations aims to further revolutionize connectivity with capabilities like terahertz communication, AI-native networks, and integrated sensing.
                </p>
                 <div>
                    <h4 className="font-semibold text-md text-primary mb-1">Core Focus Areas:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        <li>5G infrastructure: small cells, mmWave spectrum, Massive MIMO antennas.</li>
                        <li>Network slicing for customized virtual networks.</li>
                        <li>Edge computing for low-latency data processing.</li>
                        <li>IoT enablement across smart cities, industry, and healthcare.</li>
                        <li>Emerging 6G concepts: AI-driven networks, THz bands, non-terrestrial networks.</li>
                    </ul>
                </div>
                <p className="text-base text-muted-foreground">
                  These advancements are crucial for fueling the digital economy, enabling smart environments, and accelerating innovation in autonomous systems, immersive experiences, and industrial automation.
                </p>
            </div>
             <div className="md:col-span-3">
                <Image src="https://placehold.co/600x400.png" alt="Abstract visualization of a 5G Network with city backdrop" width={600} height={400} className="rounded-md object-cover w-full shadow-lg border border-border" data-ai-hint="network waves city" />
            </div>
        </div>
      </Section>
      
      <Section title="Detailed Visual Representation" titleIcon={<Milestone className="w-6 h-6 text-primary"/>} description="Evolution of wireless communication from early concepts to 5G and beyond." className="bg-muted/30">
         <Image src="https://placehold.co/800x450.png" alt="Infographic showing the evolution of wireless mobile network generations" width={800} height={450} className="rounded-md object-cover w-full shadow-lg border border-border" data-ai-hint="timeline mobile network" />
         <p className="text-xs text-muted-foreground text-center mt-2">(Placeholder for dynamic infographic: Historical Timeline, Technology Generations, Spectrum Allocation)</p>
      </Section>

      <Section title="Historical Timeline" titleIcon={<Milestone className="w-6 h-6 text-primary"/>} description="Key milestones in the development of 5G & Next-Gen Connectivity.">
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

      <Section title="Present Applications" titleIcon={<CheckCircle className="w-6 h-6 text-primary"/>} description="How 5G and next-gen connectivity are being applied today.">
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

      <Section title="Key Players & Leaders" titleIcon={<Users2 className="w-6 h-6 text-primary"/>} description="Organizations shaping the 5G & Next-Gen Connectivity landscape.">
        <div className="space-y-6">
            <div>
                <h3 className="text-xl font-semibold mb-3 text-primary flex items-center gap-2"><Building className="w-5 h-5"/>Industry Leaders &amp; Major Players</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[...keyPlayersData.industryLeaders, ...keyPlayersData.otherMajorPlayers].map(leader => (
                    <Card key={leader.name} className="p-4 text-center bg-card hover:shadow-md flex flex-col justify-between">
                    <div>
                        <div className="flex justify-center mb-2">{leader.icon}</div>
                        <CardTitle className="text-md mb-1">{leader.name}</CardTitle>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{leader.focus}</p>
                    </Card>
                ))}
                </div>
            </div>
            <div>
                <h3 className="text-xl font-semibold mb-3 text-primary flex items-center gap-2"><FlaskConical className="w-5 h-5"/>Research Institutions</h3>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                </div>
            </div>
            <div>
                <h3 className="text-xl font-semibold mb-3 text-primary flex items-center gap-2"><Globe className="w-5 h-5"/>Global Initiatives</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
            </div>
        </div>
      </Section>

      <Section title="Future Trends & Speculation" titleIcon={<Rocket className="w-6 h-6 text-primary"/>} description="What’s next for 5G & Next-Gen Connectivity?">
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
      
      <Section title="Societal & Ethical Evolution" titleIcon={<Scale className="w-6 h-6 text-primary"/>} description="Navigating the complex societal implications of advanced wireless technologies.">
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
        <blockquote className="mt-6 border-l-4 border-primary pl-4 italic text-muted-foreground">
          The evolution of wireless connectivity promises a hyper-connected world, necessitating proactive strategies for security, equity, and ethical governance to harness its full potential responsibly.
        </blockquote>
      </Section>

       <Section title="Explore Related Research" titleIcon={<BookOpen className="w-6 h-6 text-primary"/>} description="Dive deeper into 5G/6G research, standards, and industry reports." className="text-center bg-muted/30">
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
