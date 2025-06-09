
import Image from 'next/image';
import Link from 'next/link';
import {
  ShieldCheck, Milestone, Lightbulb, FlaskConical, Rocket, Brain, Users, Building, Globe, Puzzle, Scale, BookOpen, ArrowLeft, ExternalLink, Info as InfoIcon, CheckCircle, Cpu, ScanSearch, KeyRound, Bug, Network, ShieldHalf, Atom, BrainCircuit, Blocks, Flag, ShieldAlert, Users2, GraduationCap
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
  title: 'Cybersecurity Deep Dive | Innovation Hub Explorer',
  description: 'Explore cybersecurity essentials: threat detection, cryptography, ethical hacking, zero trust architectures. Learn about future trends like quantum-resistant crypto and AI in defense, plus ethical considerations.',
  keywords: ['Cybersecurity', 'Data Security', 'Network Security', 'Threat Detection', 'Cryptography', 'Ethical Hacking', 'Zero Trust', 'AI in Cybersecurity', 'Information Security', 'Cyber Defense'],
  openGraph: {
    title: 'Cybersecurity Deep Dive | Innovation Hub Explorer',
    description: 'A comprehensive guide to understanding and navigating the world of cybersecurity, from foundational principles to advanced defense strategies.',
    url: '/explore/cybersecurity',
     images: [
      {
        url: '/og-cybersecurity.png',
        width: 1200,
        height: 630,
        alt: 'Cybersecurity Abstract Visualization',
      },
    ],
  },
  twitter: {
    title: 'Cybersecurity Deep Dive Explained',
    description: 'Protecting our digital world: exploring the essentials of cybersecurity, from cryptography to AI-driven defense.',
    images: ['/og-cybersecurity.png'],
  },
  alternates: {
    canonical: '/explore/cybersecurity',
  },
};


const historicalTimelineData = [
  {
    id: 'cs_ht1',
    era: 'Concept Era',
    title: 'Early Understanding & Cryptography Origins',
    description: 'Basic password protection concepts emerge. Early theoretical frameworks for securing digital communication and foundational cryptographic principles are developed.',
    icon: <Lightbulb className="w-5 h-5 text-primary" />,
  },
  {
    id: 'cs_ht2',
    era: 'Pioneering Developments',
    title: 'First Antivirus, Firewalls & Encryption Algorithms',
    description: 'Development of the first antivirus software, firewalls, and intrusion detection systems. Key encryption algorithms like RSA and AES are introduced. Ethical hacking concepts begin to form.',
    icon: <FlaskConical className="w-5 h-5 text-primary" />,
  },
  {
    id: 'cs_ht3',
    era: 'Growth & Adoption',
    title: 'Corporate Adoption & Regulatory Frameworks',
    description: 'Cybersecurity protocols adopted by corporations and governments. Rise of Security Operation Centers (SOCs) and managed security services. Emergence of regulations like GDPR, HIPAA, and frameworks like NIST, ISO.',
    icon: <Rocket className="w-5 h-5 text-primary" />,
  },
  {
    id: 'cs_ht4',
    era: 'Modern Era',
    title: 'AI-Driven Defense & Zero Trust',
    description: 'Zero trust security models become prominent. AI-driven threat detection and cloud security solutions advance. Cybersecurity focus expands to IoT, mobile devices, and industrial control systems. Growth of cybersecurity workforce and certifications.',
    icon: <Brain className="w-5 h-5 text-primary" />,
  },
];

const presentApplicationsData = [
  {
    title: 'Threat Detection and Prevention',
    icon: <ScanSearch className="w-7 h-7 text-primary" />,
    points: [
      'AI and machine learning for anomaly and zero-day exploit detection.',
      'Endpoint Detection and Response (EDR) tools.',
    ],
    imageHint: "security scan abstract"
  },
  {
    title: 'Cryptography',
    icon: <KeyRound className="w-7 h-7 text-primary" />,
    points: [
      'Protecting data at rest and in transit using strong encryption.',
      'Public Key Infrastructure (PKI), digital signatures, and blockchain security.',
    ],
    imageHint: "encryption key lock"
  },
  {
    title: 'Ethical Hacking & Penetration Testing',
    icon: <Bug className="w-7 h-7 text-primary" />,
    points: [
      'Simulating attacks to find vulnerabilities before malicious actors.',
      'Red team vs. blue team exercises to improve defenses.',
    ],
    imageHint: "hacker code bug"
  },
  {
    title: 'Zero Trust Architectures',
    icon: <Network className="w-7 h-7 text-primary" />,
    points: [
      '“Never trust, always verify” approach to network access.',
      'Micro-segmentation, continuous authentication, and least privilege policies.',
    ],
    imageHint: "network nodes shield"
  },
  {
    title: 'Cyber Defense Strategies',
    icon: <ShieldHalf className="w-7 h-7 text-primary" />,
    points: [
        'Incident response planning and disaster recovery.',
        'Cyber threat intelligence sharing and collaborative defense.',
    ],
    imageHint: "shield defense strategy"
  }
];

const keyPlayersData = {
  industryLeaders: [
    { name: 'Innovatech Cyber Solutions (Conceptual)', focus: 'Cutting-edge AI cybersecurity platforms and managed security services.', icon: <Building className="w-5 h-5 text-primary"/> },
    { name: 'Microsoft Security', focus: 'Comprehensive security solutions across cloud, endpoint, and identity.', icon: <Building className="w-5 h-5 text-primary"/> },
    { name: 'Palo Alto Networks', focus: 'Network security, cloud security, and endpoint protection.', icon: <Building className="w-5 h-5 text-primary"/> },
  ],
  researchInstitutions: [
    { name: 'Global Cybersecurity Research Institute (Conceptual)', focus: 'Leading foundational research, vulnerability discovery, and open-source security tools.', icon: <FlaskConical className="w-5 h-5 text-primary"/> },
    { name: 'SANS Institute', focus: 'Cybersecurity research, training, and certification.', icon: <FlaskConical className="w-5 h-5 text-primary"/> },
  ],
  globalInitiatives: [
    { name: 'Open Cybersecurity Alliance (OCA)', focus: 'Promoting collaboration, interoperability, and open standards in cybersecurity.', icon: <Globe className="w-5 h-5 text-primary"/> },
    { name: 'FIRST (Forum of Incident Response and Security Teams)', focus: 'Global community for incident response teams.', icon: <Globe className="w-5 h-5 text-primary"/> },
  ],
};

const futureTrendsData = [
    { title: 'Quantum-Resistant Cryptography', description: 'Developing cryptographic algorithms to prepare for threats from future quantum computers.', icon: <Atom className="w-7 h-7 text-primary"/> },
    { title: 'AI-Powered Autonomous Defense', description: 'AI systems that can autonomously detect, analyze, and respond to cyber threats in real-time.', icon: <BrainCircuit className="w-7 h-7 text-primary"/> },
    { title: 'Blockchain for Decentralized Security', description: 'Utilizing blockchain for decentralized identity management, secure data sharing, and enhancing IoT security.', icon: <Blocks className="w-7 h-7 text-primary"/> },
    { title: 'Cybersecurity in Smart Cities & IoT', description: 'Securing interconnected IoT devices and critical infrastructure in smart cities from evolving cyber threats.', icon: <ShieldCheck className="w-7 h-7 text-primary"/> },
];

const ethicalSocietalData = [
  { title: 'Privacy vs. Security', description: 'Balancing the need for security monitoring with individual rights to privacy in a hyperconnected world.', icon: <Scale className="w-5 h-5 text-destructive" /> },
  { title: 'Data Ownership & Sovereignty', description: 'Ethical considerations around who owns and controls personal and organizational data, especially across borders.', icon: <Users className="w-5 h-5 text-destructive" /> },
  { title: 'Cyber Warfare & Espionage', description: 'The ethics of state-sponsored cyber attacks, digital espionage, and the development of offensive cyber capabilities.', icon: <ShieldAlert className="w-5 h-5 text-destructive" /> },
  { title: 'Bias in AI Security Tools', description: 'Addressing potential biases in AI-driven security tools that could lead to unfair targeting or misidentification of threats.', icon: <Puzzle className="w-5 h-5 text-destructive" /> },
];

const exploreFurtherData = [
  { name: "NIST Cybersecurity Framework", url: "https://www.nist.gov/cyberframework", imageHint: "nist logo document" },
  { name: "OWASP Foundation", url: "https://owasp.org/", imageHint: "owasp logo web" },
  { name: "Krebs on Security", url: "https://krebsonsecurity.com/", imageHint: "news blog security" },
  { name: "Dark Reading", url: "https://www.darkreading.com/", imageHint: "magazine logo tech" },
];


export default function CybersecurityPage() {
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
          <ShieldCheck className="w-16 h-16 md:w-20 md:h-20 text-primary mx-auto md:mx-0 flex-shrink-0" />
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
              Cybersecurity
            </h1>
            <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto md:mx-0">
              Protecting digital infrastructure, data, and privacy from evolving cyber threats.
            </p>
          </div>
        </div>
      </header>

      <Section title="Comprehensive Overview" titleIcon={<InfoIcon className="w-6 h-6 text-primary"/>} description="The critical discipline of safeguarding our digital world." className="bg-muted/30">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-6 items-center">
            <div className="md:col-span-4 space-y-4">
                <p className="text-base text-muted-foreground">
                  Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. These cyberattacks are usually aimed at accessing, changing, or destroying sensitive information; extorting money from users; or interrupting normal business processes.
                </p>
                 <div>
                    <h4 className="font-semibold text-md text-primary mb-1">Core Focus Areas:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        <li>Threat detection, prevention, and response.</li>
                        <li>Cryptography for secure communication and data protection.</li>
                        <li>Ethical hacking and penetration testing to identify vulnerabilities.</li>
                        <li>Zero trust architectures to minimize attack surfaces.</li>
                        <li>Developing robust cyber defense strategies for organizations.</li>
                    </ul>
                </div>
                <p className="text-base text-muted-foreground">
                  Effective cybersecurity measures are critical for businesses, governments, critical infrastructure, and individuals to protect against financial loss, reputational damage, and privacy breaches.
                </p>
            </div>
             <div className="md:col-span-3">
                <Image src="https://placehold.co/600x400.png" alt="Abstract visual representing cybersecurity concepts like digital shields and network locks" width={600} height={400} className="rounded-md object-cover w-full shadow-lg border border-border" data-ai-hint="digital shield network lock" />
            </div>
        </div>
      </Section>
      
      <Section title="Detailed Visual Representation" titleIcon={<Milestone className="w-6 h-6 text-primary"/>} description="Evolution and major milestones in cybersecurity." className="bg-muted/30">
         <Image src="https://placehold.co/800x450.png" alt="Infographic showing the timeline and evolution of cybersecurity threats and defenses" width={800} height={450} className="rounded-md object-cover w-full shadow-lg border border-border" data-ai-hint="timeline security history" />
         <p className="text-xs text-muted-foreground text-center mt-2">(Placeholder for dynamic infographic: Historical Timeline, Threat Landscape Evolution)</p>
      </Section>

      <Section title="Historical Timeline" titleIcon={<Milestone className="w-6 h-6 text-primary"/>} description="Key milestones in the development of Cybersecurity.">
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

      <Section title="Present Applications" titleIcon={<CheckCircle className="w-6 h-6 text-primary"/>} description="How Cybersecurity technologies and practices are used today.">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {presentApplicationsData.map((app_item) => (
            <Card key={app_item.title} className="flex flex-col h-full hover:shadow-lg transition-shadow group bg-card">
              <CardHeader className="items-center text-center">
                <div className="p-3 bg-primary/10 rounded-full mb-2 group-hover:bg-primary/20 transition-colors">{app_item.icon}</div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">{app_item.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow text-center">
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground text-left">
                    {app_item.points.map((point, index) => <li key={index}>{point}</li>)}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Key Players & Leaders" titleIcon={<Users2 className="w-6 h-6 text-primary"/>} description="Organizations shaping the Cybersecurity landscape.">
        <div className="space-y-6">
            <div>
                <h3 className="text-xl font-semibold mb-3 text-primary flex items-center gap-2"><Building className="w-5 h-5"/>Industry Leaders</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {keyPlayersData.industryLeaders.map(leader => (
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
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{init.focus}</p>
                    </Card>
                ))}
                </div>
            </div>
        </div>
      </Section>

      <Section title="Future Trends & Speculation" titleIcon={<Rocket className="w-6 h-6 text-primary"/>} description="What’s next for Cybersecurity?">
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
      
      <Section title="Societal & Ethical Evolution" titleIcon={<Scale className="w-6 h-6 text-primary"/>} description="Navigating the complex societal implications of cybersecurity measures.">
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
          Cybersecurity is a constantly evolving field requiring continuous adaptation to new threats and a commitment to ethical practices to protect our digital society.
        </blockquote>
      </Section>

       <Section title="Explore Related Research" titleIcon={<BookOpen className="w-6 h-6 text-primary"/>} description="Dive deeper into cybersecurity research, frameworks, and news." className="text-center bg-muted/30">
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
