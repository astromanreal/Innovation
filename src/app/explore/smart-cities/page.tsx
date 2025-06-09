
'use client'; // Add this directive for useToast

import Image from 'next/image';
import Link from 'next/link';
import {
  Building2, Milestone, Lightbulb, Rocket, Brain, Users, Building, Globe, Puzzle, Scale, BookOpen, ArrowLeft, ExternalLink, Info as InfoIcon, CheckCircle, Cpu, Users2, TrendingUp, Settings2, Network, ShieldCheck, Zap, MapPin, DatabaseZap, Wifi, Smartphone, FileText, MessageSquareWarning, UsersRound, BarChart3,
  Leaf, Cloud, Signal, FlaskConical, Eye, Recycle, Car, Layers, GraduationCap
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
import { useToast } from '@/hooks/use-toast'; // Import useToast

// Metadata is handled by generateMetadata

const historicalTimelineData = [
  {
    id: 'sc_ht1',
    era: 'Traditional Urban Infrastructure',
    title: 'Manual Systems & Early Digitalization',
    description: 'Cities managed with manual systems for utilities, transport, and public services. Early adoption of isolated digital tools like traffic control signals and basic surveillance began.',
    icon: <Lightbulb className="w-5 h-5 text-primary" />,
  },
  {
    id: 'sc_ht2',
    era: 'Emergence of Digital Urban Technologies',
    title: 'Sensor Networks & GIS',
    description: 'Wider adoption of sensors for environmental monitoring and traffic flow. Geographic Information Systems (GIS) became crucial for urban planning. Early data collection for public services.',
    icon: <FlaskConical className="w-5 h-5 text-primary" />,
  },
  {
    id: 'sc_ht3',
    era: 'IoT & Data-Driven Cities',
    title: 'Connected Infrastructure & Big Data Platforms',
    description: 'Deployment of city-wide IoT sensor networks, development of big data platforms for urban analytics, and increased use of cloud computing for managing city services. Smart grid and smart water management pilots.',
    icon: <Rocket className="w-5 h-5 text-primary" />,
  },
  {
    id: 'sc_ht4',
    era: 'Citizen-Centric & AI-Powered Approaches',
    title: 'Participatory Governance & AI Optimization',
    description: 'Focus on citizen engagement through digital platforms and mobile apps. AI and machine learning applied to optimize traffic, energy consumption, public safety, and resource allocation. Emergence of digital twin concepts for cities.',
    icon: <Brain className="w-5 h-5 text-primary" />,
  },
];

const presentApplicationsData = [
  {
    title: 'IoT-Enabled Infrastructure',
    icon: <Wifi className="w-7 h-7 text-primary" />,
    description: 'Smart lighting that adjusts to traffic and pedestrian flow, smart grids for efficient energy distribution, intelligent water management systems to detect leaks, and optimized waste collection routes based on sensor data.',
    imageHint: "smart city lights grid"
  },
  {
    title: 'Traffic & Mobility Management',
    icon: <MapPin className="w-7 h-7 text-primary" />,
    description: 'Adaptive traffic signals that respond to real-time conditions, public transit tracking apps, smart parking solutions, and initial integration of autonomous vehicle fleets for public transport.',
    imageHint: "traffic management city"
  },
  {
    title: 'Environmental Monitoring',
    icon: <Leaf className="w-7 h-7 text-primary" />,
    description: 'Networks of air quality and noise pollution sensors, systems for urban heat island mitigation, smart irrigation for green spaces, and monitoring of water bodies for pollution.',
    imageHint: "city park sensors"
  },
  {
    title: 'Citizen Engagement Platforms',
    icon: <Users className="w-7 h-7 text-primary" />,
    description: 'Mobile applications for citizens to report issues (e.g., potholes, broken lights), digital town hall meetings, e-governance portals for accessing public services, and open data initiatives.',
    imageHint: "community engagement app"
  }
];

const coreTechnologiesData = [
    { title: 'Internet of Things (IoT)', description: 'Vast networks of interconnected sensors, actuators, and devices collecting real-time data on urban conditions and infrastructure performance.', icon: <Wifi className="w-6 h-6 text-accent"/>},
    { title: 'Big Data & Analytics', description: 'Platforms and algorithms for processing, analyzing, and deriving actionable insights from massive streams of urban data (traffic, energy, environmental).', icon: <DatabaseZap className="w-6 h-6 text-accent"/>},
    { title: 'Artificial Intelligence & ML', description: 'Machine learning models for predictive maintenance, traffic flow optimization, energy demand forecasting, public safety anomaly detection, and resource allocation.', icon: <Brain className="w-6 h-6 text-accent"/>},
    { title: 'Cloud Computing', description: 'Scalable and resilient platforms for storing vast amounts of urban data, hosting smart city applications, and delivering digital services to citizens and city operators.', icon: <Cloud className="w-6 h-6 text-accent"/>},
    { title: '5G & Next-Gen Connectivity', description: 'High-speed, low-latency wireless communication networks essential for supporting massive IoT deployments, real-time data transfer, and autonomous systems in urban environments.', icon: <Signal className="w-6 h-6 text-accent"/>},
];

const keyPlayersData = {
  leadingCompanies: [
    { name: 'Cisco Smart+Connected Communities', focus: 'Integrated digital platforms and networking solutions for urban services.', icon: <Building className="w-5 h-5 text-primary"/> },
    { name: 'Siemens Smart Infrastructure', focus: 'Technologies for smart grids, building automation, and efficient transportation.', icon: <Building className="w-5 h-5 text-primary"/> },
    { name: 'IBM Smarter Cities (Legacy)', focus: 'Early pioneer in using data analytics and AI for urban problem-solving.', icon: <Building className="w-5 h-5 text-primary"/> },
  ],
  cityExamples: [
    { name: 'Singapore', focus: 'Comprehensive "Smart Nation" initiative focusing on digital government, smart mobility, and sustainability.', icon: <Globe className="w-5 h-5 text-primary"/> },
    { name: 'Barcelona', focus: 'Leader in IoT deployments for urban services, open data platforms, and citizen engagement.', icon: <Globe className="w-5 h-5 text-primary"/> },
    { name: 'Amsterdam', focus: 'Strong focus on sustainability, smart mobility, and collaborative innovation projects.', icon: <Globe className="w-5 h-5 text-primary"/> },
  ],
  researchInstitutions: [
     { name: 'MIT Senseable City Lab', focus: 'Explores how digital technologies are changing the way people live and their implications for urban planning.', icon: <FlaskConical className="w-5 h-5 text-primary"/> },
     { name: 'Urban Institute', focus: 'Research on urban policy, social and economic issues in cities, including technology adoption.', icon: <FlaskConical className="w-5 h-5 text-primary"/> },
  ],
};

const challengesEthicsData = [
  { title: 'Data Privacy & Security', description: 'Protecting citizens\' personal data collected by ubiquitous sensors and platforms. Securing critical urban infrastructure from cyberattacks.', icon: <ShieldCheck className="w-5 h-5 text-destructive" /> },
  { title: 'Digital Divide & Inclusion', description: 'Ensuring equitable access to smart city benefits and digital services for all demographics, avoiding the creation of new inequalities.', icon: <Users className="w-5 h-5 text-destructive" /> },
  { title: 'Surveillance & Civil Liberties', description: 'Balancing the use of monitoring technologies for public safety and efficiency with concerns about mass surveillance and its impact on civil liberties.', icon: <Eye className="w-5 h-5 text-destructive" /> },
  { title: 'Interoperability & Standards', description: 'Integrating diverse technologies from multiple vendors, ensuring data can be shared and systems can work together seamlessly. Lack of universal standards.', icon: <Puzzle className="w-5 h-5 text-destructive" /> },
  { title: 'Sustainability & Environmental Impact', description: 'Managing the energy consumption of smart city infrastructure and the lifecycle of electronic devices. Avoiding unintended negative ecological consequences from large-scale tech deployments.', icon: <Recycle className="w-5 h-5 text-destructive" /> },
];

const futureTrendsData = [
    { title: 'AI-Driven Urban Management', description: 'Highly autonomous city operations, with AI optimizing resource allocation, emergency response, and predictive maintenance for infrastructure in real-time.', icon: <Brain className="w-7 h-7 text-primary"/> },
    { title: 'Advanced Smart Mobility', description: 'Widespread adoption of autonomous public transport and delivery drones, integrated traffic management systems, and mobility-as-a-service platforms.', icon: <Car className="w-7 h-7 text-primary"/> },
    { title: 'Urban Digital Twins', description: 'Creation of comprehensive, dynamic virtual models of cities for advanced planning, infrastructure management, environmental simulation, and disaster response training.', icon: <Layers className="w-7 h-7 text-primary"/> },
    { title: 'Green & Resilient Cities', description: 'Technology-enabled climate adaptation strategies, hyper-local renewable energy grids, circular economy initiatives, and data-driven urban resilience planning.', icon: <Leaf className="w-7 h-7 text-primary"/> },
    { title: 'Enhanced Citizen Participation', description: 'Next-generation e-governance tools, potentially including blockchain-based voting systems, immersive digital town halls, and gamified civic engagement platforms.', icon: <Users2 className="w-7 h-7 text-primary"/> },
];

const exploreFurtherData = [
  { category: "Courses & Certifications", items: [
      { name: "Smart Cities – Management of Smart Urban Infrastructures (Coursera)", url: "https://www.coursera.org/learn/smart-cities-management-infrastructures", imageHint: "coursera logo online course" },
      { name: "IEEE Smart Cities Program", url: "https://smartcities.ieee.org/", imageHint: "ieee logo certificate" },
  ]},
  { category: "Books & Publications", items: [
      { name: "Smart Cities: Big Data, Civic Hackers, and the Quest for a New Utopia by Anthony Townsend", url: "https://www.amazon.com/Smart-Cities-Hackers-Quest-Utopia/dp/0393349780", imageHint: "book cover city tech" },
      { name: "Journal of Urban Technology", url: "https://www.tandfonline.com/loi/cjut20", imageHint: "journal cover urban" },
  ]},
  { category: "Conferences & Events", items: [
      { name: "Smart City Expo World Congress", url: "https://www.smartcityexpo.com/", imageHint: "conference logo global" },
      { name: "IoT Solutions World Congress", url: "https://www.iotsworldcongress.com/", imageHint: "iot congress logo" }, 
  ]},
  { category: "Open Platforms & Tools", items: [
      { name: "Open311 (Civic Issue Tracking)", url: "https://www.open311.org/", imageHint: "open311 logo api" },
      { name: "CitySDK", url: "https://www.citysdk.eu/", imageHint: "citysdk logo data" },
      { name: "Local Government Open Data Portals (Example: NYC OpenData)", url: "https://opendata.cityofnewyork.us/", imageHint: "data portal chart" }
  ]}
];

export default function SmartCitiesPage() {
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
          <Building2 className="w-16 h-16 md:w-20 md:h-20 text-primary mx-auto md:mx-0 flex-shrink-0" />
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
              Smart Cities & Urban Tech
            </h1>
            <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto md:mx-0">
              Integrating advanced technologies to improve urban life quality, optimize infrastructure, and foster sustainable city growth.
            </p>
          </div>
        </div>
      </header>

      <Section title="Comprehensive Overview" titleIcon={<InfoIcon className="w-6 h-6 text-primary"/>} description="Understanding the core concepts and societal impact of smart urban environments." className="bg-muted/30">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-6 items-center">
            <div className="md:col-span-4 space-y-4">
                <p className="text-base text-muted-foreground">
                  Smart Cities & Urban Technology represent the convergence of digital innovation with urban planning and management. By leveraging technologies like the Internet of Things (IoT), big data analytics, artificial intelligence (AI), and high-speed connectivity, cities aim to create more efficient, sustainable, resilient, and livable environments for their citizens.
                </p>
                 <div>
                    <h4 className="font-semibold text-md text-primary mb-1">Key Focus Areas:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        <li>IoT-enabled infrastructure for real-time monitoring and control.</li>
                        <li>Intelligent traffic and mobility management systems.</li>
                        <li>Environmental monitoring and data-driven sustainability initiatives.</li>
                        <li>Digital citizen engagement platforms and e-governance services.</li>
                    </ul>
                </div>
                 <p className="text-base text-muted-foreground">
                  The global trend of rapid urbanization presents significant challenges in resource management, traffic congestion, energy consumption, and public service delivery. Smart city solutions offer pathways to address these challenges by enabling data-informed decision-making, optimizing resource allocation, and enhancing the overall quality of urban life.
                </p>
            </div>
             <div className="md:col-span-3">
                <Image src="https://placehold.co/600x400.png" alt="Smart City Abstract Visual" width={600} height={400} className="rounded-md object-cover w-full shadow-lg border border-border" data-ai-hint="futuristic city skyline network" />
            </div>
        </div>
      </Section>
      
      <Section title="Historical Evolution & Foundations" titleIcon={<Milestone className="w-6 h-6 text-primary"/>} description="Tracing the development from traditional city management to the smart city paradigm.">
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

      <Section title="Current Applications" titleIcon={<CheckCircle className="w-6 h-6 text-primary"/>} description="Showcasing how smart technologies improve real-world urban living.">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"> 
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

      <Section title="Core Technologies & Tools" titleIcon={<Cpu className="w-6 h-6 text-primary"/>} description="The enabling technologies behind smart urban systems.">
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

      <Section title="Key Innovators & Industry Leaders" titleIcon={<Users2 className="w-6 h-6 text-primary"/>} description="Organizations and initiatives driving smart city innovation.">
        <div className="space-y-6">
            <div>
                <h3 className="text-xl font-semibold mb-3 text-primary flex items-center gap-2"><Building className="w-5 h-5"/>Leading Companies</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {keyPlayersData.leadingCompanies.map(player => (
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
                <h3 className="text-xl font-semibold mb-3 text-primary flex items-center gap-2"><Globe className="w-5 h-5"/>City Examples</h3>
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {keyPlayersData.cityExamples.map(city => (
                    <Card key={city.name} className="p-4 bg-card hover:shadow-md flex flex-col justify-between">
                      <div className="flex items-center gap-3 mb-2">
                        {city.icon}
                        <CardTitle className="text-md">{city.name}</CardTitle>
                      </div>
                      <p className="text-xs text-muted-foreground">{city.focus}</p>
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

      <Section title="Challenges & Ethical Considerations" titleIcon={<Scale className="w-6 h-6 text-primary"/>} description="Discussing risks and societal issues in smart city implementations.">
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

      <Section title="Future Trends & Opportunities" titleIcon={<TrendingUp className="w-6 h-6 text-primary"/>} description="Exploring upcoming innovations and evolving directions in urban tech.">
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
            The future of urban living will be increasingly shaped by intelligent, connected, and sustainable technologies, requiring careful planning and citizen-centric design to realize their full potential.
        </blockquote>
      </Section>
      
      <Section title="Explore Further: Resources & Learning" titleIcon={<BookOpen className="w-6 h-6 text-primary"/>} description="Curated resources to deepen your understanding of Smart Cities & Urban Tech." className="bg-muted/30">
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

export async function generateMetadata() {
  return {
    title: 'Smart Cities & Urban Tech | Innovation Hub Explorer',
    description: 'Explore smart city technologies, IoT-enabled infrastructure, intelligent mobility, environmental monitoring, and the future of urban living.',
    keywords: ['Smart Cities', 'Urban Technology', 'IoT', 'Smart Infrastructure', 'Intelligent Mobility', 'Citizen Engagement', 'Sustainable Cities', 'Urban Innovation'],
    openGraph: {
      title: 'Smart Cities & Urban Tech | Innovation Hub Explorer',
      description: 'Integrating advanced technologies for better urban life.',
      url: '/explore/smart-cities',
      images: [
        {
          url: '/og-smart-cities.png', 
          width: 1200,
          height: 630,
          alt: 'Smart Cities and Urban Technology Visualization',
        },
      ],
    },
    twitter: {
      title: 'Smart Cities & Urban Tech',
      description: 'The future of urban innovation.',
    },
    alternates: {
      canonical: '/explore/smart-cities',
    },
  };
}
