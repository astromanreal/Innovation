
'use client'; 

import Image from 'next/image';
import Link from 'next/link';
import {
  Cloud, Layers, Server, Milestone, Lightbulb, FlaskConical, Rocket, Brain, Users, Building, Globe, Puzzle, Scale, BookOpen, ArrowLeft, ExternalLink, Info as InfoIcon, CheckCircle, Cpu, Users2, TrendingUp, Settings2, Network as NetworkIcon, ShieldCheck, Zap, Atom as AtomIcon, Signal, FileText, MessageSquareWarning, UsersRound, Package, Database, Wifi, Smartphone, GraduationCap, Recycle
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
import { useToast } from '@/hooks/use-toast'; 
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Edge & Cloud Computing | Innovation Hub Explorer',
    description: 'Explore Edge and Cloud Computing: concepts, evolution, applications in IoT and AI, core technologies, challenges, and future trends in distributed computing architectures.',
    keywords: ['Edge Computing', 'Cloud Computing', 'Distributed Systems', 'Serverless', 'Microservices', 'IoT', 'AI at the Edge', 'Hybrid Cloud', 'Multi-Cloud', '5G Computing'],
     openGraph: {
      title: 'Edge & Cloud Computing Deep Dive | Innovation Hub Explorer',
      description: 'Exploring distributed computing architectures for modern digital services, from centralized clouds to processing at the network fringe.',
      url: '/explore/edge-cloud-computing',
      images: [
        {
          url: '/og-edge-cloud.png',
          width: 1200,
          height: 630,
          alt: 'Edge and Cloud Computing Abstract Visualization',
        },
      ],
    },
    twitter: {
      title: 'Edge & Cloud Computing Explained',
      description: 'The backbone of modern digital infrastructure: Understanding edge and cloud computing synergies.',
      images: ['/og-edge-cloud.png'],
    },
    alternates: {
      canonical: '/explore/edge-cloud-computing',
    },
  };
}

const historicalTimelineData = [
  {
    id: 'ecc_ht1',
    era: 'Early Centralized Computing',
    title: 'Mainframes & Early Client-Server Models',
    description: 'Dominated by large mainframe systems for batch processing. Client-server architectures began to emerge, distributing some processing tasks.',
    icon: <Server className="w-5 h-5 text-primary" />,
  },
  {
    id: 'ecc_ht2',
    era: 'Emergence of Cloud Computing',
    title: 'Virtualization, SaaS, PaaS, IaaS & Rise of Cloud Providers',
    description: 'Virtualization technologies enabled efficient resource sharing. Software-as-a-Service (SaaS), Platform-as-a-Service (PaaS), and Infrastructure-as-a-Service (IaaS) models became prominent. Major cloud providers like AWS, Azure, and GCP established global infrastructure.',
    icon: <Cloud className="w-5 h-5 text-primary" />,
  },
  {
    id: 'ecc_ht3',
    era: 'Need for Edge Computing',
    title: 'IoT Growth, Real-Time Demands & Bandwidth Constraints',
    description: 'The explosion of Internet of Things (IoT) devices generated massive data volumes. Real-time applications (e.g., autonomous vehicles, AR/VR) required lower latency. Bandwidth limitations to centralized clouds became apparent.',
    icon: <Cpu className="w-5 h-5 text-primary" />,
  },
  {
    id: 'ecc_ht4',
    era: 'Hybrid & Multi-Cloud Approaches',
    title: 'Combining Public, Private, and Edge Environments',
    description: 'Organizations adopted hybrid cloud strategies (mixing on-premises and public cloud) and multi-cloud approaches (using services from multiple public cloud providers) for flexibility, resilience, and cost optimization. Edge computing became an integral part of this distributed architecture.',
    icon: <Layers className="w-5 h-5 text-primary" />,
  },
];

const presentApplicationsData = [
  {
    title: 'Cloud Platforms & Services',
    icon: <Cloud className="w-7 h-7 text-primary" />,
    description: 'Running enterprise IT workloads (databases, ERPs), processing big data analytics, hosting scalable web applications, and delivering software-as-a-service.',
    imageHint: "cloud servers data center"
  },
  {
    title: 'Edge Computing Use Cases',
    icon: <Cpu className="w-7 h-7 text-primary" />,
    description: 'Smart factories for real-time quality control, autonomous vehicles for on-board decision making, real-time video analytics for security, and low-latency augmented reality experiences.',
    imageHint: "edge server iot device"
  },
  {
    title: 'Serverless & Microservices',
    icon: <Package className="w-7 h-7 text-primary" />,
    description: 'Building event-driven applications that scale automatically (serverless functions), and developing resilient backend systems composed of independent microservices.',
    imageHint: "microservices architecture diagram"
  },
  {
    title: 'Hybrid & Multi-Cloud Deployments',
    icon: <Layers className="w-7 h-7 text-primary" />,
    description: 'Implementing disaster recovery solutions across different clouds, optimizing workload placement based on cost or performance, and meeting regulatory compliance for data residency.',
    imageHint: "hybrid cloud diagram"
  },
  {
    title: 'AI & ML at the Edge',
    icon: <Brain className="w-7 h-7 text-primary" />,
    description: 'Performing on-device AI inference (e.g., on smartphones, industrial sensors), reducing cloud dependency for latency-critical AI applications, and enhancing data privacy.',
    imageHint: "ai chip edge device"
  }
];

const coreTechnologiesData = [
    { title: 'Cloud Infrastructure', description: 'Virtual machines, containers (Docker, Kubernetes), serverless functions, object storage (e.g., S3), and managed database services.', icon: <Server className="w-6 h-6 text-accent"/>},
    { title: 'Edge Devices & Gateways', description: 'IoT sensors, specialized edge servers, microcontrollers, 5G-enabled devices, and intelligent gateways for data aggregation and preprocessing.', icon: <Smartphone className="w-6 h-6 text-accent"/>},
    { title: 'Networking Technologies', description: 'Software-Defined Networking (SDN), Software-Defined WAN (SD-WAN), 5G/6G networks, Content Delivery Networks (CDNs), and secure network fabrics.', icon: <NetworkIcon className="w-6 h-6 text-accent"/>},
    { title: 'Orchestration & Management', description: 'Kubernetes for container orchestration, OpenShift, cloud management platforms (e.g., AWS Management Console, Azure Portal), Infrastructure as Code (IaC) tools.', icon: <Settings2 className="w-6 h-6 text-accent"/>},
    { title: 'Data Processing & Analytics', description: 'Stream processing (Kafka, Flink), batch processing (Spark), distributed databases, data lakes, and AI/ML frameworks at both cloud and edge.', icon: <Database className="w-6 h-6 text-accent"/>},
];


const keyPlayersData = {
  cloudProviders: [
    { name: 'Amazon Web Services (AWS)', focus: 'Leading IaaS, PaaS, SaaS provider; extensive global infrastructure.', icon: <Cloud className="w-5 h-5 text-primary"/> },
    { name: 'Microsoft Azure', focus: 'Comprehensive cloud platform with strong enterprise and hybrid cloud focus.', icon: <Cloud className="w-5 h-5 text-primary"/> },
    { name: 'Google Cloud Platform (GCP)', focus: 'Strengths in data analytics, AI/ML, and Kubernetes.', icon: <Cloud className="w-5 h-5 text-primary"/> },
  ],
  edgeComputingLeaders: [
    { name: 'Cisco', focus: 'Edge networking hardware and software solutions.', icon: <NetworkIcon className="w-5 h-5 text-primary"/> },
    { name: 'NVIDIA', focus: 'Edge AI hardware (Jetson) and AI software platforms.', icon: <Cpu className="w-5 h-5 text-primary"/> },
    { name: 'Cloudflare', focus: 'Edge CDN, security, and serverless compute at the edge.', icon: <Wifi className="w-5 h-5 text-primary"/> },
  ],
  startupsAndInnovators: [
    { name: 'Vapor IO', focus: 'Edge data centers and infrastructure solutions.', icon: <Server className="w-5 h-5 text-primary"/> },
    { name: 'EdgeConneX', focus: 'Global data center solutions at the edge of the network.', icon: <Server className="w-5 h-5 text-primary"/> },
  ],
  researchInstitutions: [
    { name: 'MIT CSAIL (Conceptual Stand-in)', focus: 'Research in distributed systems, cloud architectures, and edge intelligence.', icon: <FlaskConical className="w-5 h-5 text-primary"/> },
    { name: 'Stanford Distributed Systems Group (Conceptual Stand-in)', focus: 'Focus on scalability, reliability, and security in large-scale systems.', icon: <FlaskConical className="w-5 h-5 text-primary"/> },
  ]
};

const challengesEthicsData = [
  { title: 'Data Privacy & Security', description: 'Protecting data across distributed environments, managing complex access controls, ensuring end-to-end encryption, and addressing varying jurisdictional regulations.', icon: <ShieldCheck className="w-5 h-5 text-destructive" /> },
  { title: 'Latency & Reliability', description: 'Managing network failures, ensuring consistent performance for latency-sensitive applications, and balancing workloads effectively between edge and cloud resources.', icon: <Zap className="w-5 h-5 text-destructive" /> },
  { title: 'Vendor Lock-in & Interoperability', description: 'Avoiding over-reliance on a single cloud provider, ensuring portability of applications and data, and promoting open standards for seamless integration across different platforms.', icon: <Puzzle className="w-5 h-5 text-destructive" /> },
  { title: 'Environmental Impact', description: 'Addressing the significant energy consumption of large-scale data centers, promoting green cloud computing initiatives, and optimizing energy efficiency at the edge.', icon: <Globe className="w-5 h-5 text-destructive" /> },
  { title: 'Regulatory Compliance', description: 'Adhering to diverse data protection regulations (e.g., GDPR, HIPAA, CCPA) across different regions, and managing complexities of cross-border data flows.', icon: <Scale className="w-5 h-5 text-destructive" /> },
];

const futureTrendsData = [
    { title: 'Deep 5G/6G & Edge Integration', description: 'Ultra-low latency applications becoming widespread, enabling massive IoT deployments, real-time robotic control, and immersive tactile internet experiences.', icon: <Signal className="w-7 h-7 text-primary"/> },
    { title: 'Sophisticated AI & ML at the Edge', description: 'More powerful and efficient on-device AI capabilities, widespread adoption of federated learning for privacy-preserving model training, and real-time intelligent automation.', icon: <Brain className="w-7 h-7 text-primary"/> },
    { title: 'Serverless Evolution', description: 'Increased adoption and sophistication of serverless architectures for event-driven applications, reducing operational overhead and improving scalability.', icon: <Layers className="w-7 h-7 text-primary"/> },
    { title: 'Hybrid Quantum-Classical Cloud', description: 'Emergence of cloud services offering access to quantum computing resources, enabling hybrid algorithms that leverage both classical and quantum capabilities for complex problems.', icon: <AtomIcon className="w-7 h-7 text-primary"/> },
    { title: 'Green Computing & Sustainability', description: 'Stronger focus on sustainable data center designs, energy-efficient edge devices, and AI-driven optimization of energy consumption across distributed infrastructures.', icon: <Recycle className="w-7 h-7 text-primary"/> },
];

const exploreFurtherData = [
  { category: "Courses & Certifications", items: [
      { name: "AWS Certified Solutions Architect", url: "https://aws.amazon.com/certification/certified-solutions-architect-associate/", imageHint: "aws logo certificate" },
      { name: "Google Cloud Professional Cloud Architect", url: "https://cloud.google.com/certification/cloud-architect", imageHint: "google cloud logo" },
      { name: "Coursera: Cloud Computing Specialization", url: "https://www.coursera.org/specializations/cloud-computing", imageHint: "coursera logo online course" }
  ]},
  { category: "Books & Articles", items: [
      { name: "Cloud Computing: Concepts, Technology & Architecture by Thomas Erl", url: "https://www.amazon.com/Cloud-Computing-Concepts-Technology-Architecture/dp/0133387526", imageHint: "book cover cloud architecture" },
      { name: "IEEE Transactions on Cloud Computing", url: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=6245519", imageHint: "ieee journal cover" },
  ]},
  { category: "Conferences & Communities", items: [
      { name: "AWS re:Invent", url: "https://reinvent.awsevents.com/", imageHint: "aws reinvent logo" },
      { name: "Google Cloud Next", url: "https://cloud.withgoogle.com/next", imageHint: "google next logo" },
      { name: "KubeCon + CloudNativeCon", url: "https://www.cncf.io/kubecon-cloudnativecon/", imageHint: "kubecon logo conference" }
  ]},
  { category: "Open Source Projects & SDKs", items: [
      { name: "Kubernetes", url: "https://kubernetes.io/", imageHint: "kubernetes logo container" },
      { name: "OpenFaaS (Serverless)", url: "https://www.openfaas.com/", imageHint: "openfaas logo function" },
      { name: "EdgeX Foundry (IoT Edge)", url: "https://www.edgexfoundry.org/", imageHint: "edgex logo iot" }
  ]}
];


export default function EdgeCloudComputingPage() {
  const { toast } = useToast();

  const handleResourceClick = (url: string, name: string) => {
    if (url === "#") {
      toast({
        title: "Resource Link Pending",
        description: `Details for "${name}" will be available soon.`,
      });
      return false; 
    }
    return true; 
  };

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
              Edge & Cloud Computing
            </h1>
            <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto md:mx-0">
              Exploring distributed computing architectures that power today's digital services, from centralized clouds to processing at the network fringe.
            </p>
          </div>
        </div>
      </header>

      <Section title="Comprehensive Overview" titleIcon={<InfoIcon className="w-6 h-6 text-primary"/>} description="Understanding the synergy between centralized cloud resources and decentralized edge capabilities." className="bg-muted/30">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-6 items-center">
            <div className="md:col-span-4 space-y-4">
                <p className="text-base text-muted-foreground">
                  Cloud computing delivers centralized, on-demand computing resources—from applications to data centers—over the internet. Edge computing complements this by bringing computation and data storage closer to the sources of data generation, such as IoT devices or local user interactions. This distributed paradigm is critical for enabling scalable, flexible, and efficient solutions for modern digital services, especially those requiring real-time analytics, low latency (like autonomous systems and AR/VR), and efficient bandwidth usage.
                </p>
                 <div>
                    <h4 className="font-semibold text-md text-primary mb-1">Core Focus Areas:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        <li>Cloud platforms (AWS, Azure, GCP) offering IaaS, PaaS, SaaS.</li>
                        <li>Serverless computing and microservices architectures.</li>
                        <li>Edge AI for on-device inference and IoT data processing.</li>
                        <li>Hybrid and multi-cloud strategies for optimized infrastructure.</li>
                    </ul>
                </div>
            </div>
             <div className="md:col-span-3">
                <Image src="https://placehold.co/600x400.png" alt="Edge and Cloud Computing Abstract Visual" width={600} height={400} className="rounded-md object-cover w-full shadow-lg border border-border" data-ai-hint="cloud network edge devices" />
            </div>
        </div>
      </Section>
      
      <Section title="Historical Evolution & Foundations" titleIcon={<Milestone className="w-6 h-6 text-primary"/>} description="Tracing the shift from centralized mainframes to distributed cloud and edge architectures.">
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

      <Section title="Current Applications" titleIcon={<CheckCircle className="w-6 h-6 text-primary"/>} description="How edge and cloud computing power various industries and technologies today.">
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

      <Section title="Core Technologies & Tools" titleIcon={<Settings2 className="w-6 h-6 text-primary"/>} description="Foundational technologies enabling modern distributed computing architectures.">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreTechnologiesData.map((tech) => (
            <Card key={tech.title} className="flex flex-col h-full hover:shadow-lg transition-shadow group bg-card">
              <CardHeader className="items-center text-center">
                <div className="p-3 bg-accent/10 rounded-full mb-2 group-hover:bg-accent/20 transition-colors">{tech.icon}</div>
                <CardTitle className="text-md group-hover:text-accent transition-colors">{tech.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow text-center">
                 <p className="text-xs text-muted-foreground">{tech.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Key Innovators & Industry Leaders" titleIcon={<Users2 className="w-6 h-6 text-primary"/>} description="Major companies and research groups driving innovation in edge and cloud.">
        <div className="space-y-6">
            <div>
                <h3 className="text-xl font-semibold mb-3 text-primary flex items-center gap-2"><Cloud className="w-5 h-5"/>Cloud Providers</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {keyPlayersData.cloudProviders.map(player => (
                    <Card key={player.name} className="p-4 bg-card hover:shadow-md flex flex-col justify-between">
                      <div className="flex items-center gap-3 mb-2">
                        {player.icon}
                        <CardTitle className="text-md">{player.name}</CardTitle>
                      </div>
                      <p className="text-xs text-muted-foreground">{player.focus}</p>
                    </Card>
                ))}
                </div>
            </div>
            <div>
                <h3 className="text-xl font-semibold mb-3 text-primary flex items-center gap-2"><Cpu className="w-5 h-5"/>Edge Computing Leaders</h3>
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {keyPlayersData.edgeComputingLeaders.map(company => (
                    <Card key={company.name} className="p-4 bg-card hover:shadow-md flex flex-col justify-between">
                      <div className="flex items-center gap-3 mb-2">
                        {company.icon}
                        <CardTitle className="text-md">{company.name}</CardTitle>
                      </div>
                      <p className="text-xs text-muted-foreground">{company.focus}</p>
                    </Card>
                ))}
                </div>
            </div>
            <div>
                <h3 className="text-xl font-semibold mb-3 text-primary flex items-center gap-2"><Rocket className="w-5 h-5"/>Startups & Innovators</h3>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {keyPlayersData.startupsAndInnovators.map(startup => (
                    <Card key={startup.name} className="p-4 bg-card hover:shadow-md flex flex-col justify-between">
                      <div className="flex items-center gap-3 mb-2">
                        {startup.icon}
                        <CardTitle className="text-md">{startup.name}</CardTitle>
                      </div>
                      <p className="text-xs text-muted-foreground">{startup.focus}</p>
                    </Card>
                ))}
                </div>
            </div>
             <div>
                <h3 className="text-xl font-semibold mb-3 text-primary flex items-center gap-2"><FlaskConical className="w-5 h-5"/>Research Institutions</h3>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {keyPlayersData.researchInstitutions.map(inst => (
                    <Card key={inst.name} className="p-4 bg-card hover:shadow-md flex flex-col justify-between">
                      <div className="flex items-center gap-3 mb-2">
                        {inst.icon}
                        <CardTitle className="text-md">{inst.name}</CardTitle>
                      </div>
                      <p className="text-xs text-muted-foreground">{inst.focus}</p>
                    </Card>
                ))}
                </div>
            </div>
        </div>
      </Section>

      <Section title="Challenges & Ethical Considerations" titleIcon={<Scale className="w-6 h-6 text-primary"/>} description="Obstacles and ethical aspects in adopting and managing distributed computing.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {challengesEthicsData.map((item) => (
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

      <Section title="Future Trends & Opportunities" titleIcon={<TrendingUp className="w-6 h-6 text-primary"/>} description="Upcoming advancements and the evolving landscape of edge and cloud computing.">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
         <blockquote className="mt-8 border-l-4 border-primary pl-4 italic text-muted-foreground">
            The convergence of edge and cloud computing, fueled by AI and next-gen connectivity, is set to unlock unprecedented levels of efficiency, intelligence, and innovation across all aspects of the digital world.
        </blockquote>
      </Section>
      
      <Section title="Explore Further: Resources & Learning" titleIcon={<BookOpen className="w-6 h-6 text-primary"/>} description="Curated resources to deepen your understanding of Edge & Cloud Computing." className="bg-muted/30">
        <div className="space-y-8">
            {exploreFurtherData.map(categoryItem => (
                <div key={categoryItem.category}>
                    <h3 className="text-xl font-semibold mb-4 text-primary">{categoryItem.category}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {categoryItem.items.map(resource => (
                             <Card key={resource.name} className="bg-card hover:shadow-md">
                                <CardContent className="p-4 flex flex-col items-center justify-center text-center h-full">
                                    <h4 className="font-semibold text-md mb-2">{resource.name}</h4>
                                     <Button
                                      variant="link"
                                      size="sm"
                                      className="text-primary hover:underline p-0 h-auto"
                                      onClick={(e) => {
                                        if (!handleResourceClick(resource.url, resource.name)) {
                                          e.preventDefault();
                                        }
                                      }}
                                      asChild={resource.url !== "#"}
                                    >
                                      {resource.url !== "#" ? (
                                        <Link href={resource.url} target="_blank" rel="noopener noreferrer">
                                          Visit Resource <ExternalLink className="inline-block ml-1 h-3 w-3"/>
                                        </Link>
                                      ) : (
                                        <span>
                                          Visit Resource (Soon) <ExternalLink className="inline-block ml-1 h-3 w-3 opacity-50"/>
                                        </span>
                                      )}
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            ))}
        </div>
      </Section>
    </div>
  );
}
