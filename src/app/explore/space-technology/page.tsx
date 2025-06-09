
import Image from 'next/image';
import Link from 'next/link';
import {
  Satellite, Milestone, Lightbulb, Rocket, Brain, Users, Building, Globe, Puzzle, Scale, BookOpen, ArrowLeft, ExternalLink, Info as InfoIcon, CheckCircle, Cpu, Users2, Landmark, Telescope, DraftingCompass, TestTubeDiagonal, ShieldCheck, Flag, FlaskConical, GraduationCap
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
    id: 'st_ht1',
    era: 'Concept Era',
    title: 'Early Rocketry & Astronautics',
    description: 'Early rocketry theories by Tsiolkovsky and Goddard; foundational physics and astronautics concepts establishing the theoretical basis for space travel.',
    icon: <Lightbulb className="w-5 h-5 text-primary" />,
  },
  {
    id: 'st_ht2',
    era: 'Pioneering Developments',
    title: 'First Satellites & Human Spaceflight',
    description: 'Launch of Sputnik, the first artificial satellite. Yuri Gagarin becomes the first human in space. The Apollo moon landings mark a giant leap for mankind. Early satellite communications systems established.',
    icon: <Rocket className="w-5 h-5 text-primary" />,
  },
  {
    id: 'st_ht3',
    era: 'Growth & Adoption',
    title: 'Reusable Rockets & Global Navigation',
    description: 'Development of reusable rockets like the Space Shuttle. GPS satellites enable global navigation. Mars rovers begin exploring the red planet. International Space Station (ISS) becomes a hub for collaborative research.',
    icon: <Milestone className="w-5 h-5 text-primary" />,
  },
  {
    id: 'st_ht4',
    era: 'Modern Era',
    title: 'Commercial Spaceflight & Mega-Constellations',
    description: 'Rise of commercial spaceflight (SpaceX, Blue Origin). Development of satellite mega-constellations (e.g., Starlink) for global internet. Lunar return missions (Artemis program) and ambitious plans for Mars colonization.',
    icon: <Brain className="w-5 h-5 text-primary" />,
  },
];

const presentApplicationsData = [
  {
    sector: 'Telecommunications & Internet',
    icon: <Satellite className="w-7 h-7 text-primary" />,
    useCase: 'Satellite constellations (e.g., Starlink, OneWeb) providing global broadband internet access, especially to remote and underserved areas, and supporting IoT connectivity.',
  },
  {
    sector: 'Earth Observation & Climate Monitoring',
    icon: <Globe className="w-7 h-7 text-primary" />,
    useCase: 'High-resolution satellites tracking climate change impacts (ice melt, deforestation), monitoring natural disasters, and optimizing agricultural land use with precision data.',
  },
  {
    sector: 'Navigation & Location Services',
    icon: <Landmark className="w-7 h-7 text-primary" />,
    useCase: 'GPS, GLONASS, Galileo, and BeiDou systems enabling precise navigation for consumer devices, transportation logistics, autonomous vehicles, and smart city applications.',
  }
];

const keyPlayersData = {
  industryLeaders: [
    { name: 'Innovatech Corp (Conceptual)', focus: 'Known for cutting-edge reusable rocket technology and satellite manufacturing with a broad commercial footprint in launch services and earth observation.', icon: <Building className="w-5 h-5 text-primary"/> },
  ],
  researchInstitutions: [
    { name: 'Global Research Institute for Astronautics (Conceptual)', focus: 'Leading fundamental research in advanced propulsion systems, space materials science, and autonomous robotic systems for deep space exploration.', icon: <FlaskConical className="w-5 h-5 text-primary"/> },
  ],
  globalInitiatives: [
    { name: 'Orbital Collaboration Alliance (Conceptual)', focus: 'Promotes open data sharing from Earth observation satellites, standardization for in-orbit servicing, and ethical frameworks for sustainable space development and debris mitigation.', icon: <Globe className="w-5 h-5 text-primary"/> },
  ],
};

const futureTrendsData = [
    { title: 'Advanced Propulsion Systems', description: 'Development of nuclear thermal propulsion, solar electric propulsion, and other advanced systems for faster interplanetary travel.', icon: <Rocket className="w-7 h-7 text-primary"/> },
    { title: 'In-Space Resource Utilization (ISRU)', description: 'Technologies for mining resources like water ice and minerals from the Moon, Mars, and asteroids to support long-duration missions and space habitats.', icon: <DraftingCompass className="w-7 h-7 text-primary"/> },
    { title: 'Orbital Manufacturing & Assembly', description: 'Building and assembling large structures, satellites, and spacecraft in orbit using robotic systems and 3D printing, reducing launch constraints.', icon: <Cpu className="w-7 h-7 text-primary"/> },
    { title: 'Space-Based Solar Power', description: 'Harvesting solar energy in space and beaming it to Earth as a clean and continuous power source.', icon: <TestTubeDiagonal className="w-7 h-7 text-primary"/> }, 
];

const ethicalSocietalData = [
  { title: 'Space Debris Mitigation', description: 'Addressing the growing problem of orbital debris to ensure the long-term safety and sustainability of space activities.', icon: <Puzzle className="w-5 h-5 text-destructive" /> },
  { title: 'Equitable Access to Space', description: 'Ensuring that the benefits of space exploration and technology are shared globally and do not widen existing inequalities.', icon: <Users className="w-5 h-5 text-destructive" /> },
  { title: 'Planetary Protection', description: 'Preventing biological contamination of other celestial bodies and protecting Earth from potential extraterrestrial hazards.', icon: <ShieldCheck className="w-5 h-5 text-destructive" /> },
  { title: 'International Space Law & Governance', description: 'Developing and adapting legal frameworks to govern activities in space, including resource extraction, militarization, and private enterprise.', icon: <Scale className="w-5 h-5 text-destructive" /> },
];


export default function SpaceTechnologyPage() {
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
          <Satellite className="w-16 h-16 md:w-20 md:h-20 text-primary mx-auto md:mx-0 flex-shrink-0" />
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
              Space Technology
            </h1>
            <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto md:mx-0">
              Innovations in satellite technology, reusable rockets, and space exploration.
            </p>
          </div>
        </div>
      </header>

      <Section titleIcon={<InfoIcon className="w-6 h-6 text-primary"/>} title="Comprehensive Overview" description="Understanding the core concepts and significance of Space Technology." className="bg-muted/30">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-6 items-center">
            <div className="md:col-span-4 space-y-4">
                 <p className="text-base text-muted-foreground">
                    Space Technology encompasses the tools, methods, and systems enabling humanity’s exploration and utilization of environments beyond Earth. From reusable launch vehicles to satellite mega-constellations and ambitious plans for space resource utilization, this field is pivotal to expanding human presence in the cosmos and understanding our universe. Explore how government agencies like NASA, ISRO, ESA, and private pioneers such as SpaceX, Blue Origin, and Rocket Lab are accelerating interplanetary ambitions and commercializing space.
                </p>
            </div>
            <div className="md:col-span-3">
                <Image src="https://placehold.co/600x400.png" alt="Space Technology Abstract Visual" width={600} height={400} className="rounded-md object-cover w-full shadow-lg border border-border" data-ai-hint="rocket launch galaxy satellite" />
            </div>
        </div>
      </Section>
      
      <Section titleIcon={<Telescope className="w-6 h-6 text-primary"/>} title="Detailed Visual Representation" description="Illustrating key technologies and mission types." className="bg-muted/30">
         <Image src="https://placehold.co/800x450.png" alt="Space Technology Infographic Placeholder" width={800} height={450} className="rounded-md object-cover w-full shadow-lg border border-border" data-ai-hint="space infographic rocket satellite" />
         <p className="text-xs text-muted-foreground text-center mt-2">(Placeholder for infographic: propulsion, satellite types, exploration missions)</p>
      </Section>


      <Section titleIcon={<Milestone className="w-6 h-6 text-primary"/>} title="Historical Timeline" description="Key milestones in the development of Space Technology.">
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

      <Section titleIcon={<CheckCircle className="w-6 h-6 text-primary"/>} title="Present Applications" description="How Space Technology is being used today across various sectors.">
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

      <Section titleIcon={<Users2 className="w-6 h-6 text-primary"/>} title="Key Players & Leaders" description="Organizations shaping the Space Technology landscape.">
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

      <Section titleIcon={<Rocket className="w-6 h-6 text-primary"/>} title="Future Trends & Speculation" description="What’s next for Space Technology?">
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
          Space Technology continues to evolve rapidly, promising to reshape humanity’s role in the universe while posing new challenges and ethical questions.
        </blockquote>
      </Section>
      
      <Section titleIcon={<Scale className="w-6 h-6 text-primary"/>} title="Societal & Ethical Evolution" description="Navigating the complex societal implications of advancing space endeavors.">
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

       <Section titleIcon={<BookOpen className="w-6 h-6 text-primary"/>} title="Explore Related Research" description="Curated links to leading space journals, global mission databases, and research platforms." className="text-center bg-muted/30">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
                {name: "NASA Technical Reports", url: "https://ntrs.nasa.gov/", imageHint: "nasa logo report"},
                {name: "ESA Science & Exploration", url: "https://www.esa.int/Science_Exploration", imageHint: "esa logo galaxy"},
                {name: "SpaceNews", url: "https://spacenews.com/", imageHint: "news logo satellite"}
            ].map(resource => (
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
    title: 'Space Technology Deep Dive | Innovation Hub Explorer',
    description: 'Explore innovations in satellite technology, reusable rockets, space exploration, future trends, and ethical considerations.',
    keywords: ['Space Technology', 'Satellites', 'Rockets', 'Space Exploration', 'NASA', 'SpaceX', 'Mars Colonization', 'Commercial Spaceflight'],
  };
}
