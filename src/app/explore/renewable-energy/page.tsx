
import Image from 'next/image';
import Link from 'next/link';
import {
  Leaf, Sun, Wind, BatteryCharging, Network, Atom as AtomIcon, Recycle, 
  Milestone, Lightbulb, FlaskConical, Rocket, Brain, Users, Building, Globe, Puzzle, Scale, BookOpen, ArrowLeft, ExternalLink, Info as InfoIcon, CheckCircle, Users2, TrendingUp, Layers, Zap, Flag, Share2, UserCheck, Cpu, GraduationCap
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
    id: 're_ht1',
    era: 'Concept Era',
    title: 'Early Discoveries & Principles',
    description: 'Early discoveries in photovoltaic effects and aerodynamic principles related to wind power. Initial experiments with harnessing solar and wind energy on a small scale.',
    icon: <Lightbulb className="w-5 h-5 text-primary" />,
  },
  {
    id: 're_ht2',
    era: 'Pioneering Developments',
    title: 'First Commercial Units & Early Storage',
    description: 'Development and deployment of the first commercial solar panels (e.g., Bell Labs, 1954) and wind turbines. Early research into energy storage solutions like lead-acid batteries and rudimentary grid integration experiments.',
    icon: <FlaskConical className="w-5 h-5 text-primary" />,
  },
  {
    id: 're_ht3',
    era: 'Growth & Adoption',
    title: 'Global Capacity Expansion & Policy Support',
    description: 'Rapid growth of solar PV and wind energy capacity worldwide, driven by technological improvements and decreasing costs. Deployment of large-scale energy storage projects (e.g., pumped hydro, early Li-ion). Policy frameworks like feed-in tariffs and renewable portfolio standards incentivize adoption.',
    icon: <Rocket className="w-5 h-5 text-primary" />,
  },
  {
    id: 're_ht4',
    era: 'Modern Era',
    title: 'Advanced Technologies & Large-Scale Integration',
    description: 'Cutting-edge technologies like perovskite solar cells, floating offshore wind farms, and advanced battery chemistries (e.g., solid-state). Large-scale green hydrogen projects and integration of renewables into industrial processes. Emergence of AI and IoT for smart grid optimization and enhanced energy efficiency.',
    icon: <Brain className="w-5 h-5 text-primary" />,
  },
];

const presentApplicationsData = [
  {
    sector: 'Solar Power Applications',
    icon: <Sun className="w-7 h-7 text-primary" />,
    useCases: [
      'Residential rooftop solar systems and community solar farms empowering local energy generation.',
      'Utility-scale solar power plants supplying electricity to national and regional grids.',
      'Building-integrated photovoltaics (BIPV) and solar thermal for heating/cooling.',
    ],
    imageHint: "solar panels field sunny"
  },
  {
    sector: 'Wind Energy Deployment',
    icon: <Wind className="w-7 h-7 text-primary" />,
    useCases: [
      'Onshore wind farms providing clean energy to local communities and industries.',
      'Large-scale offshore wind projects leveraging stronger, more consistent winds for high capacity generation.',
      'Distributed wind systems for remote or off-grid power supply.',
    ],
    imageHint: "wind turbines offshore sea"
  },
  {
    sector: 'Energy Storage Systems',
    icon: <BatteryCharging className="w-7 h-7 text-primary" />,
    useCases: [
      'Lithium-ion batteries for grid-scale storage, electric vehicles, and residential backup power.',
      'Flow batteries and pumped hydro storage for long-duration energy storage needs.',
      'Emerging technologies like solid-state batteries, thermal storage, and advanced flywheel systems.',
    ],
    imageHint: "battery storage grid"
  },
   {
    sector: 'Smart Grids & Energy Management',
    icon: <Network className="w-7 h-7 text-primary" />,
    useCases: [
      'AI-powered real-time demand response and load balancing to optimize grid stability.',
      'Integration of distributed energy resources (DERs) like solar, wind, and EVs.',
      'Advanced metering infrastructure (AMI) for better energy monitoring and efficiency.',
    ],
    imageHint: "smart grid network city"
  },
   {
    sector: 'Green Hydrogen',
    icon: <AtomIcon className="w-7 h-7 text-primary" />, 
    useCases: [
      'Electrolyzer technologies producing hydrogen from water using renewable electricity.',
      'Hydrogen as a clean fuel for transportation (fuel cell vehicles), heavy industry (steel, chemicals), and long-term energy storage.',
      'Power-to-X concepts converting renewable energy into hydrogen-based synthetic fuels.',
    ],
    imageHint: "hydrogen electrolysis plant"
  }
];

const keyPlayersData = {
  industryLeaders: [
    { name: 'SolarFuture Inc. (Conceptual)', focus: 'Pioneer in next-generation photovoltaic materials (e.g., perovskites, tandem cells) and advanced solar panel manufacturing technologies.', icon: <Building className="w-5 h-5 text-primary"/> },
  ],
  researchInstitutions: [
    { name: 'Global Renewable Energy Institute (Conceptual)', focus: 'Conducting breakthrough research on advanced energy storage solutions, smart grid technologies, and green hydrogen production methods.', icon: <FlaskConical className="w-5 h-5 text-primary"/> },
  ],
  globalInitiatives: [
    { name: 'International Clean Energy Alliance (Conceptual)', focus: 'Coordinates global efforts, policy advocacy, and technology standards for renewable energy adoption. Promotes knowledge sharing and capacity building.', icon: <Globe className="w-5 h-5 text-primary"/> },
  ],
  majorIndustryPlayers: [ 
    { name: 'Tesla', focus: 'Energy storage (Powerwall, Megapack), solar panels, EV integration.', icon: <Cpu className="w-5 h-5 text-primary" /> },
    { name: 'Vestas Wind Systems', focus: 'Leading global manufacturer of wind turbines.', icon: <Wind className="w-5 h-5 text-primary" /> },
    { name: 'Siemens Gamesa', focus: 'Major player in wind turbine manufacturing and offshore wind projects.', icon: <Wind className="w-5 h-5 text-primary" /> },
    { name: 'First Solar', focus: 'Manufacturer of thin-film solar panels.', icon: <Sun className="w-5 h-5 text-primary" /> },
  ]
};

const futureTrendsData = [
    { title: 'Next-Gen Solar Technologies', description: 'Emerging solar technologies like tandem cells, perovskites, transparent solar, and building-integrated photovoltaics (BIPV) boosting efficiency and applications.', icon: <Sun className="w-7 h-7 text-primary"/> },
    { title: 'Advanced Offshore & Floating Wind', description: 'Larger, more efficient offshore wind turbines and development of floating wind farm technologies for deep-water deployment.', icon: <Wind className="w-7 h-7 text-primary"/> },
    { title: 'Solid-State & Next-Gen Batteries', description: 'Breakthroughs in solid-state battery chemistries and other novel storage solutions offering higher energy density, safety, and longer lifespans.', icon: <BatteryCharging className="w-7 h-7 text-primary"/> },
    { title: 'AI in Energy Optimization', description: 'Increased use of AI and machine learning for predictive maintenance of renewable assets, grid balancing, and optimizing energy consumption patterns.', icon: <Brain className="w-7 h-7 text-primary"/> },
];

const ethicalSocietalData = [
  { title: 'Energy Equity & Access', description: 'Addressing challenges in providing affordable and reliable clean energy access to underserved and developing regions globally.', icon: <Users className="w-5 h-5 text-destructive" /> },
  { title: 'Material Sourcing & Recycling', description: 'Managing the environmental and social impacts of sourcing raw materials (e.g., rare earths, lithium) for renewable technologies and developing sustainable end-of-life recycling processes.', icon: <Recycle className="w-5 h-5 text-destructive" /> },
  { title: 'Policy & Public Acceptance', description: 'Navigating policy shifts, securing long-term investments, and fostering public acceptance and community engagement for large-scale renewable energy projects.', icon: <Scale className="w-5 h-5 text-destructive" /> },
  { title: 'Grid Stability & Land Use', description: 'Ensuring grid stability with high penetration of intermittent renewables and balancing land use requirements for large solar and wind farms with ecological and agricultural needs.', icon: <Network className="w-5 h-5 text-destructive" /> },
];

const exploreFurtherData = [
  { name: "IRENA (Int. Renewable Energy Agency)", url: "https://www.irena.org/", imageHint: "irena logo global" },
  { name: "NREL (National Renewable Energy Lab)", url: "https://www.nrel.gov/", imageHint: "nrel logo research" },
  { name: "BloombergNEF", url: "https://about.bnef.com/", imageHint: "bloomberg logo finance" },
  { name: "REN21", url: "https://www.ren21.net/", imageHint: "ren21 logo report" },
];


export default function RenewableEnergyPage() {
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
          <Leaf className="w-16 h-16 md:w-20 md:h-20 text-primary mx-auto md:mx-0 flex-shrink-0" />
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
              Renewable & Clean Energy Technologies
            </h1>
            <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto md:mx-0">
              Innovations in solar, wind, energy storage, smart grids, and green hydrogen powering a sustainable future.
            </p>
          </div>
        </div>
      </header>

      <Section title="Comprehensive Overview" titleIcon={<InfoIcon className="w-6 h-6 text-primary"/>} description="Understanding the essentials of renewable and clean energy technologies." className="bg-muted/30">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-6 items-center">
            <div className="md:col-span-4 space-y-4">
                <p className="text-base text-muted-foreground">
                  Renewable and Clean Energy Technologies are critical solutions to meet global energy demands sustainably while mitigating climate change and reducing environmental impact. These technologies harness naturally replenishing resources like sunlight, wind, and geothermal heat, or utilize processes that significantly lower carbon emissions compared to traditional fossil fuels.
                </p>
                 <div>
                    <h4 className="font-semibold text-md text-primary mb-1">Core Focus Areas:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        <li>Solar power technologies (photovoltaics, concentrated solar power, solar thermal).</li>
                        <li>Wind energy systems (onshore and offshore turbines, airborne wind energy).</li>
                        <li>Energy storage solutions (batteries, pumped hydro, thermal storage, green hydrogen).</li>
                        <li>Smart grids and advanced energy management systems for efficient distribution.</li>
                        <li>Green hydrogen production (electrolysis) and its utilization in various sectors.</li>
                        <li>Other renewables like geothermal, hydropower, biomass, and ocean energy.</li>
                    </ul>
                </div>
                <p className="text-base text-muted-foreground">
                  The global adoption of these technologies is transforming energy markets, driving policy changes, improving air quality, and creating new economic opportunities while addressing the urgent need for a transition to a low-carbon economy.
                </p>
            </div>
             <div className="md:col-span-3">
                <Image src="https://placehold.co/600x400.png" alt="Renewable Energy Montage" width={600} height={400} className="rounded-md object-cover w-full shadow-lg border border-border" data-ai-hint="solar panels wind turbines grid" />
            </div>
        </div>
      </Section>
      
      <Section title="Detailed Visual Representation" titleIcon={<Milestone className="w-6 h-6 text-primary"/>} description="Illustrating the historical development and milestones in renewable and clean energy technology." className="bg-muted/30">
         <Image src="https://placehold.co/800x450.png" alt="Renewable Energy Timeline Infographic" width={800} height={450} className="rounded-md object-cover w-full shadow-lg border border-border" data-ai-hint="timeline energy history infographic" />
         <p className="text-xs text-muted-foreground text-center mt-2">(Placeholder for dynamic infographic: Historical Timeline, Technology Evolution, Adoption Rates)</p>
      </Section>

      <Section title="Historical Timeline" titleIcon={<Milestone className="w-6 h-6 text-primary"/>} description="Key milestones in the development of Renewable & Clean Energy.">
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

      <Section title="Present Applications" titleIcon={<CheckCircle className="w-6 h-6 text-primary"/>} description="How renewable and clean energy technologies are currently applied.">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {presentApplicationsData.map((app_item) => (
            <Card key={app_item.sector} className="flex flex-col h-full hover:shadow-lg transition-shadow group bg-card">
              <CardHeader className="items-center text-center">
                <div className="p-3 bg-primary/10 rounded-full mb-2 group-hover:bg-primary/20 transition-colors">{app_item.icon}</div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">{app_item.sector}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow text-center">
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground text-left">
                    {app_item.useCases.map((useCase, index) => <li key={index}>{useCase}</li>)}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Key Players & Leaders" titleIcon={<Users2 className="w-6 h-6 text-primary"/>} description="Organizations shaping the Renewable Energy landscape.">
        <div className="space-y-6">
            <div>
                <h3 className="text-xl font-semibold mb-3 text-primary flex items-center gap-2"><Building className="w-5 h-5"/>Industry Leaders &amp; Major Players</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[...keyPlayersData.industryLeaders, ...keyPlayersData.majorIndustryPlayers].map(leader => (
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

      <Section title="Future Trends & Speculation" titleIcon={<TrendingUp className="w-6 h-6 text-primary"/>} description="What’s next for Renewable & Clean Energy?">
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
      
      <Section title="Societal & Ethical Evolution" titleIcon={<Scale className="w-6 h-6 text-primary"/>} description="Navigating the complex societal implications of the clean energy transition.">
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
          The transition to renewable and clean energy is essential for a sustainable planet, requiring technological innovation, supportive policies, and global collaboration to overcome challenges and ensure equitable benefits.
        </blockquote>
      </Section>

       <Section title="Explore Related Research" titleIcon={<BookOpen className="w-6 h-6 text-primary"/>} description="Dive deeper into renewable energy research, reports, and initiatives." className="text-center bg-muted/30">
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
    title: 'Renewable & Clean Energy Deep Dive | Innovation Hub Explorer',
    description: 'Explore innovations in solar, wind, energy storage, smart grids, green hydrogen, and their role in a sustainable future.',
    keywords: ['Renewable Energy', 'Clean Energy', 'Solar Power', 'Wind Energy', 'Energy Storage', 'Smart Grid', 'Green Hydrogen', 'Sustainability'],
  };
}
