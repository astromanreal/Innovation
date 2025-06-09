
import Image from 'next/image';
import Link from 'next/link';
import {
  Wifi, Milestone, Lightbulb, Brain, Users, Building, Globe, Puzzle, Scale, BookOpen, ArrowLeft, ExternalLink, Info as InfoIcon, CheckCircle, Cpu, Rocket, ShieldCheck, Users2, Home, Factory, MapPin, HeartPulse, Signal, Recycle, BrainCircuit, FlaskConical, Network, GraduationCap
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

const historicalTimelineData = [
  {
    id: 'iot_ht1',
    era: 'Concept Era (Late 20th Century)',
    title: 'Early Visions & RFID',
    description: 'Ideas of interconnected devices emerge. Early use of Radio-Frequency Identification (RFID) for tracking. Kevin Ashton coins the term "Internet of Things" in 1999, envisioning a system where the internet connects to the physical world via ubiquitous sensors.',
    icon: <Lightbulb className="w-5 h-5 text-primary" />,
  },
  {
    id: 'iot_ht2',
    era: 'Pioneering Developments (2000s)',
    title: 'First Smart Devices & Experimental Networks',
    description: 'The first internet-connected appliances, like LG\'s Internet Refrigerator, appear. Emergence of low-power wireless protocols such as Zigbee. Growth of sensor networks for academic and industrial research.',
    icon: <FlaskConical className="w-5 h-5 text-primary" />,
  },
  {
    id: 'iot_ht3',
    era: 'Growth & Adoption (2010s)',
    title: 'Consumer IoT & Industrial IoT (IIoT) Takes Off',
    description: 'Proliferation of consumer smart home devices (e.g., Nest thermostats, Amazon Echo). Industrial IoT (IIoT) gains traction in manufacturing, logistics, and energy sectors. Significant platform development and standardization efforts.',
    icon: <Rocket className="w-5 h-5 text-primary" />,
  },
  {
    id: 'iot_ht4',
    era: 'Modern Era (2020s–Present)',
    title: 'AIoT, Edge Computing & Massive IoT Scale',
    description: 'Deep integration of AI with IoT (AIoT) for intelligent automation. Rise of edge computing for real-time data processing. 5G technology enables massive device connectivity. Increased focus on IoT security, interoperability, and advanced data analytics.',
    icon: <Brain className="w-5 h-5 text-primary" />,
  },
];

const presentApplicationsData = [
  {
    sector: 'Smart Homes & Buildings',
    icon: <Home className="w-7 h-7 text-primary" />,
    useCase: 'Automated lighting, climate control (smart thermostats), security systems (smart locks, cameras), voice-activated assistants (Alexa, Google Home), energy management, and connected appliances for enhanced convenience and efficiency.',
  },
  {
    sector: 'Industrial IoT (IIoT) & Manufacturing',
    icon: <Factory className="w-7 h-7 text-primary" />,
    useCase: 'Predictive maintenance for machinery reducing downtime, supply chain optimization, real-time asset tracking, automated quality control using sensor data, smart agriculture (precision farming), and connected logistics.',
  },
  {
    sector: 'Smart Cities & Environmental Monitoring',
    icon: <MapPin className="w-7 h-7 text-primary" />,
    useCase: 'Intelligent traffic management systems, smart parking solutions, optimized waste collection routes, public safety enhancements through surveillance, air and water quality monitoring, and smart grids for efficient energy distribution.',
  },
   {
    sector: 'Healthcare (IoMT - Internet of Medical Things)',
    icon: <HeartPulse className="w-7 h-7 text-primary" />,
    useCase: 'Remote patient monitoring via wearable devices, smart medical implants, automated drug dispensing systems, real-time location tracking of medical equipment and staff in hospitals, and improved diagnostic accuracy.',
  }
];

const keyPlayersData = {
  industryLeaders: [
    { name: 'ConnectX Solutions (Conceptual)', focus: 'Provides end-to-end IoT platforms, from device connectivity and management to advanced data analytics, serving smart city, industrial, and healthcare sectors.', icon: <Building className="w-5 h-5 text-primary"/> },
  ],
  researchInstitutions: [
    { name: 'Global IoT Research Lab (Conceptual)', focus: 'Focuses on advanced sensor technologies, low-power wide-area networks (LPWANs), secure IoT architectures, and the integration of edge AI for real-time IoT data processing.', icon: <FlaskConical className="w-5 h-5 text-primary"/> },
  ],
  globalInitiatives: [
    { name: 'OpenConnect IoT Alliance (Conceptual)', focus: 'Drives interoperability standards (e.g., Matter), data privacy frameworks, and ethical guidelines for responsible IoT deployment globally. Facilitates collaboration between industry and academia.', icon: <Globe className="w-5 h-5 text-primary"/> },
  ],
};

const futureTrendsData = [
    { title: 'AIoT (AI + IoT) Synergies', description: 'Deeper integration of Artificial Intelligence and Machine Learning for enhanced data analysis, predictive insights, autonomous decision-making by IoT devices, and smarter automation across all sectors.', icon: <BrainCircuit className="w-7 h-7 text-primary"/> },
    { title: '5G/6G Connectivity & Massive IoT', description: 'Next-generation wireless networks (5G and future 6G) enabling ultra-low latency, higher bandwidth, and connectivity for billions of IoT devices, fostering new real-time applications like autonomous vehicles and immersive AR/VR.', icon: <Signal className="w-7 h-7 text-primary"/> },
    { title: 'Enhanced Security & Privacy by Design', description: 'Development of robust end-to-end security protocols, blockchain for IoT data integrity and device identity, and privacy-preserving techniques (e.g., federated learning) to address growing cybersecurity concerns.', icon: <ShieldCheck className="w-7 h-7 text-primary"/> },
    { title: 'IoT in Sustainability & Circular Economy', description: 'IoT enabling efficient resource management, smart grids, precision agriculture to reduce waste, environmental monitoring for pollution control, and tracking products throughout their lifecycle to support a circular economy.', icon: <Recycle className="w-7 h-7 text-primary"/> },
];

const exploreFurtherData = [
  { name: "IoT World Today", url: "https://www.iotworldtoday.com/", imageHint: "iot news logo" },
  { name: "IEEE Internet of Things Journal", url: "https://ieee-iotj.org/", imageHint: "ieee journal cover" },
  { name: "LoRa Alliance", url: "https://lora-alliance.org/", imageHint: "lora alliance logo" },
  { name: "GSMA IoT", url: "https://www.gsma.com/iot/", imageHint: "gsma logo mobile" },
];


export default function InternetOfThingsPage() {
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
          <Wifi className="w-16 h-16 md:w-20 md:h-20 text-primary mx-auto md:mx-0 flex-shrink-0" />
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
              Internet of Things (IoT)
            </h1>
            <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto md:mx-0">
              Connecting the physical and digital worlds to create smarter environments and enable intelligent automation.
            </p>
          </div>
        </div>
      </header>

      <Section title="Comprehensive Overview" titleIcon={<InfoIcon className="w-6 h-6 text-primary"/>} description="Understanding the core concepts and significance of the Internet of Things." className="bg-muted/30">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-6 items-center">
            <div className="md:col-span-4 space-y-4">
                <p className="text-base text-muted-foreground">
                  The Internet of Things (IoT) connects everyday objects and devices to the internet, enabling them to collect and exchange data to create smarter environments and automate processes. This interconnected web of 'things' ranges from simple sensors to complex industrial machinery, transforming how we live, work, and interact with the world around us.
                </p>
                 <div>
                    <h4 className="font-semibold text-md text-primary mb-1">Key Components:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        <li>Devices/Sensors: Collecting data from the physical environment.</li>
                        <li>Connectivity: Protocols like Wi-Fi, Bluetooth, Cellular (4G/5G), LoRaWAN, NB-IoT.</li>
                        <li>Data Processing Platforms: Cloud platforms (AWS IoT, Azure IoT) and Edge Computing.</li>
                        <li>Applications & User Interfaces: Dashboards, mobile apps for control and insights.</li>
                    </ul>
                </div>
                <p className="text-base text-muted-foreground">
                  IoT drives efficiency, provides valuable insights from data, enhances user experiences, and enables new business models across various sectors including smart homes, cities, industrial automation, healthcare, and agriculture. As IoT technology continues to evolve with advancements in AI, 5G, and edge computing, its potential to create a more connected and intelligent world is vast.
                </p>
            </div>
             <div className="md:col-span-3">
                <Image src="https://placehold.co/600x400.png" alt="IoT Abstract Visual" width={600} height={400} className="rounded-md object-cover w-full shadow-lg border border-border" data-ai-hint="connected devices network" />
            </div>
        </div>
      </Section>
      
      <Section title="Detailed Visual Representation" titleIcon={<Network className="w-6 h-6 text-primary"/>} description="Evolution of IoT technology through major milestones." className="bg-muted/30">
         <Image src="https://placehold.co/800x450.png" alt="IoT Evolution Infographic Placeholder" width={800} height={450} className="rounded-md object-cover w-full shadow-lg border border-border" data-ai-hint="iot timeline infographic" />
         <p className="text-xs text-muted-foreground text-center mt-2">(Placeholder for dynamic infographic: IoT Milestones, Technology Stack, Growth Projections)</p>
      </Section>


      <Section title="Historical Timeline" titleIcon={<Milestone className="w-6 h-6 text-primary"/>} description="Key milestones in the development of the Internet of Things.">
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

      <Section title="Present Applications" titleIcon={<CheckCircle className="w-6 h-6 text-primary"/>} description="How IoT is currently used across various sectors with detailed examples.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

      <Section title="Key Players & Leaders" titleIcon={<Users2 className="w-6 h-6 text-primary"/>} description="Organizations shaping the IoT landscape.">
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

      <Section title="Future Trends & Speculation" titleIcon={<Rocket className="w-6 h-6 text-primary"/>} description="What’s next for the Internet of Things?">
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
          The Internet of Things is rapidly expanding, knitting together our physical and digital realities. Its future hinges on secure, interoperable, and ethically designed systems.
        </blockquote>
      </Section>
      
      <Section title="Societal & Ethical Evolution" titleIcon={<Scale className="w-6 h-6 text-primary"/>} description="Navigating the complex societal implications of a hyper-connected world.">
        <div className="space-y-4">
            <Card className="flex items-start gap-4 p-4 bg-card hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 text-destructive bg-destructive/10 p-2.5 rounded-full mt-1"><ShieldCheck className="w-5 h-5 text-destructive"/></div>
                <div><h4 className="font-semibold text-md text-destructive">Data Privacy & Security</h4><p className="text-sm text-muted-foreground">Managing vast amounts of personal and sensitive data, protecting against breaches, and ensuring user consent and control.</p></div>
            </Card>
            <Card className="flex items-start gap-4 p-4 bg-card hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 text-destructive bg-destructive/10 p-2.5 rounded-full mt-1"><Puzzle className="w-5 h-5 text-destructive"/></div>
                <div><h4 className="font-semibold text-md text-destructive">Interoperability & Standardization</h4><p className="text-sm text-muted-foreground">Overcoming fragmentation between different IoT devices, platforms, and communication protocols to enable seamless integration.</p></div>
            </Card>
             <Card className="flex items-start gap-4 p-4 bg-card hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 text-destructive bg-destructive/10 p-2.5 rounded-full mt-1"><Users className="w-5 h-5 text-destructive"/></div>
                <div><h4 className="font-semibold text-md text-destructive">Digital Divide & Accessibility</h4><p className="text-sm text-muted-foreground">Ensuring equitable access to IoT benefits and preventing the creation of new societal divides based on connectivity or tech literacy.</p></div>
            </Card>
        </div>
      </Section>

       <Section title="Explore Related Research" titleIcon={<BookOpen className="w-6 h-6 text-primary"/>} description="Dive deeper into IoT technologies, standards, and applications." className="text-center bg-muted/30">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {exploreFurtherData.map(resource => (
                <Card key={resource.name} className="bg-card hover:shadow-md">
                <CardContent className="p-4 flex flex-col items-center justify-center text-center h-full">
                    <h4 className="font-semibold text-md mb-2">{resource.name}</h4>
                    <Link href={resource.url} passHref legacyBehavior>
                        <a target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                        Visit Website <ExternalLink className="inline-block ml-1 h-3 w-3"/>
                        </a>
                    </Link>
                </CardContent>
                </Card>
            ))}
            </div>
        </Section>

    </div>
  );
}

export async function generateMetadata() {
  return {
    title: 'Internet of Things (IoT) Deep Dive | Innovation Hub Explorer',
    description: 'Explore the Internet of Things: core concepts, history, applications in smart homes, industry, and healthcare, future trends, and ethical considerations.',
    keywords: ['IoT', 'Internet of Things', 'Smart Devices', 'IIoT', 'Connectivity', 'Sensors', 'Edge Computing', 'AIoT'],
  };
}
