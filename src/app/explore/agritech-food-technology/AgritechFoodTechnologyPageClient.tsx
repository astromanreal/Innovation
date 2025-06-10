
'use client'; 

import Image from 'next/image';
import Link from 'next/link';
import {
  Leaf, Tractor, Milestone, Lightbulb, FlaskConical, Rocket, Brain, Users, Building, Globe, Puzzle, Scale, BookOpen, ArrowLeft, ExternalLink, Info as InfoIcon, CheckCircle, Cpu, Users2, TrendingUp, Settings2, Network, ShieldCheck, Zap, MapPin, DatabaseZap, Wifi, Smartphone, FileText, MessageSquareWarning, UsersRound, BarChart3, Dna, Factory, Drone as DroneIcon, Link as LinkIconLucide, DollarSign, Wrench, Gavel, Recycle, Sprout, Beaker, PackageSearch, Bot, Wheat, GraduationCap
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

const historicalTimelineData = [
  {
    id: 'aft_ht1',
    era: 'Early Mechanization (Late 19th - Mid 20th Century)',
    title: 'Introduction of Tractors & Mechanized Tools',
    description: 'The advent of tractors, combine harvesters, and other mechanized equipment significantly increased farming efficiency and reduced manual labor, transforming agricultural landscapes.',
    icon: <Tractor className="w-5 h-5 text-primary" />,
  },
  {
    id: 'aft_ht2',
    era: 'Green Revolution (Mid-Late 20th Century)',
    title: 'High-Yield Varieties, Fertilizers & Pesticides',
    description: 'Development and widespread adoption of high-yield crop varieties, synthetic fertilizers, and pesticides led to dramatic increases in global food production, albeit with environmental considerations.',
    icon: <FlaskConical className="w-5 h-5 text-primary" />,
  },
  {
    id: 'aft_ht3',
    era: 'Digital Revolution & Early Biotech (Late 20th - Early 21st Century)',
    title: 'GPS, Early Sensors & Genetic Engineering',
    description: 'Adoption of GPS for precision farming, initial sensor deployments for soil and crop monitoring, and the first commercial applications of genetic engineering in crops (e.g., pest resistance).',
    icon: <Cpu className="w-5 h-5 text-primary" />,
  },
  {
    id: 'aft_ht4',
    era: 'Modern Era & Advanced Innovations (2010s-Present)',
    title: 'AI, IoT, CRISPR & Cellular Agriculture',
    description: 'Integration of AI and IoT for data-driven farming, widespread use of CRISPR for precise gene editing, and the emergence of cellular agriculture for lab-grown meat and alternative proteins. Increased focus on sustainability and food system resilience.',
    icon: <Brain className="w-5 h-5 text-primary" />,
  },
];

const presentApplicationsData = [
  {
    title: 'Precision Agriculture',
    icon: <MapPin className="w-7 h-7 text-primary" />,
    description: 'Utilizing GPS, drones, IoT sensors, and AI to monitor soil conditions, crop health, and weather patterns for optimized irrigation, fertilization, and pest control, leading to higher yields and reduced waste.',
    imageHint: "drone farm field"
  },
  {
    title: 'Vertical & Controlled Environment Farming',
    icon: <Building className="w-7 h-7 text-primary" />,
    description: 'Growing crops in stacked layers or integrated into buildings using hydroponics, aeroponics, and LED lighting. Enables year-round local food production with reduced water usage and land footprint.',
    imageHint: "vertical farm indoor lights"
  },
  {
    title: 'Lab-Grown Meat & Alternative Proteins',
    icon: <Beaker className="w-7 h-7 text-primary" />,
    description: 'Developing meat and dairy products through cellular agriculture (culturing animal cells) and plant-based alternatives to reduce environmental impact and address ethical concerns of traditional livestock farming.',
    imageHint: "lab grown meat petri dish"
  },
  {
    title: 'Supply Chain Transparency & Food Safety',
    icon: <PackageSearch className="w-7 h-7 text-primary" />,
    description: 'Using blockchain technology for traceability of food products from farm to table, enhancing food safety, reducing fraud, and providing consumers with verifiable information about origin and production methods.',
    imageHint: "blockchain supply chain food"
  },
  {
    title: 'AI & Data Analytics in Farming',
    icon: <DatabaseZap className="w-7 h-7 text-primary" />,
    description: 'Applying machine learning algorithms to analyze vast agricultural datasets for predictive insights on crop yields, disease outbreaks, market trends, and optimizing resource allocation for sustainable practices.',
    imageHint: "data analytics farm chart"
  }
];

const coreTechnologiesData = [
  { title: 'IoT & Sensor Networks', description: 'Real-time data collection on soil moisture, nutrient levels, weather, pest presence, and livestock health, enabling data-driven decisions.', icon: <Wifi className="w-6 h-6 text-accent"/>},
  { title: 'Drones & Robotics', description: 'Automated tasks like crop monitoring (imaging, NDVI), precision spraying, planting, harvesting, and robotic milking or feeding in livestock farming.', icon: <DroneIcon className="w-6 h-6 text-accent"/>},
  { title: 'Genetic Engineering & CRISPR', description: 'Developing crops with enhanced traits like drought tolerance, disease resistance, improved nutritional value, and longer shelf life using precise gene editing tools.', icon: <Dna className="w-6 h-6 text-accent"/>},
  { title: 'Cellular Agriculture & Bioprocessing', description: 'Techniques for culturing animal cells to produce meat, seafood, and dairy products without traditional farming. Bioreactors and fermentation for producing alternative proteins and food ingredients.', icon: <Factory className="w-6 h-6 text-accent"/>},
  { title: 'Blockchain & AI Platforms', description: 'Secure and transparent data sharing across the food supply chain. AI algorithms for optimizing farm management, predicting market demands, and improving food quality control.', icon: <Network className="w-6 h-6 text-accent"/>},
];

const keyPlayersData = {
  leadingCompanies: [
    { name: 'Indigo Agriculture', focus: 'Microbial technologies for sustainable crop production.', icon: <Building className="w-5 h-5 text-primary"/> },
    { name: 'AeroFarms', focus: 'Leader in vertical farming and aeroponic technology.', icon: <Building className="w-5 h-5 text-primary"/> },
    { name: 'Upside Foods (formerly Memphis Meats)', focus: 'Pioneer in developing cultivated meat products.', icon: <Building className="w-5 h-5 text-primary"/> },
    { name: 'Plenty', focus: 'Indoor vertical farming company focusing on sustainable agriculture.', icon: <Building className="w-5 h-5 text-primary"/> },
  ],
  researchInstitutions: [
    { name: 'Rothamsted Research (UK)', focus: 'Longest-running agricultural research station, focusing on sustainable agriculture and crop science.', icon: <FlaskConical className="w-5 h-5 text-primary"/> },
    { name: 'Wageningen University & Research (Netherlands)', focus: 'Leading institution in food, agriculture, and environmental science.', icon: <FlaskConical className="w-5 h-5 text-primary"/> },
    { name: 'MIT Media Lab (OpenAg Initiative - legacy)', focus: 'Explored controlled environment agriculture and open-source food computers.', icon: <FlaskConical className="w-5 h-5 text-primary"/> },
  ],
  startupsAndInnovators: [
     { name: 'Numerous Cellular Agriculture Startups', focus: 'Developing cultured meat, seafood, dairy, and other animal products (e.g., Perfect Day, BlueNalu).', icon: <Zap className="w-5 h-5 text-primary"/> },
     { name: 'Precision Farming Tech Providers', focus: 'Companies offering drone services, IoT sensors, farm management software (e.g., Farmers Business Network, Semios).', icon: <Zap className="w-5 h-5 text-primary"/> },
  ]
};

const challengesLimitationsData = [
  { title: 'High Initial Investment Costs', description: 'Advanced agritech solutions like vertical farms, robotic systems, and precision sensors require significant upfront capital, potentially limiting adoption by smaller farms.', icon: <DollarSign className="w-5 h-5 text-destructive" /> },
  { title: 'Technological Complexity & Skill Gap', description: 'Operating and maintaining sophisticated agritech tools requires specialized knowledge and training, creating a skill gap in the agricultural workforce.', icon: <Wrench className="w-5 h-5 text-destructive" /> },
  { title: 'Regulatory & Ethical Hurdles', description: 'Lengthy approval processes for genetically modified crops and novel food products (e.g., lab-grown meat). Ethical debates around gene editing and cellular agriculture.', icon: <Gavel className="w-5 h-5 text-destructive" /> },
  { title: 'Data Privacy & Security', description: 'Collection of vast amounts of farm and consumer data raises concerns about privacy, ownership, and cybersecurity risks in connected agricultural systems.', icon: <ShieldCheck className="w-5 h-5 text-destructive" /> },
  { title: 'Environmental Trade-offs', description: 'While aiming for sustainability, some technologies like energy-intensive vertical farms or certain bioprocessing methods can have their own environmental footprints if not managed carefully.', icon: <Recycle className="w-5 h-5 text-destructive" /> },
];

const futureTrendsData = [
    { title: 'AI-Driven Autonomous Farming', description: 'Fully automated farms utilizing AI-powered robots for planting, monitoring, harvesting, and decision-making, operating 24/7 with minimal human intervention.', icon: <Bot className="w-7 h-7 text-primary"/> },
    { title: 'Expanded Cellular Agriculture', description: 'A wider range of cultured animal products (meat, seafood, dairy, eggs, leather) becoming commercially available, alongside sophisticated plant-based and fermentation-derived alternatives.', icon: <Beaker className="w-7 h-7 text-primary"/> },
    { title: 'Sustainable Resource Management', description: 'Advanced water recycling systems, energy-efficient controlled environments, microbial soil health enhancement, and closed-loop nutrient systems.', icon: <Recycle className="w-7 h-7 text-primary"/> },
    { title: 'Global Food Supply Chain Integration', description: 'End-to-end traceability and transparency powered by advanced blockchain networks, IoT sensors, and AI analytics, improving food safety, reducing waste, and ensuring fair trade.', icon: <Network className="w-7 h-7 text-primary"/> },
    { title: 'Climate-Resilient Crops & Systems', description: 'Crops engineered to withstand extreme weather conditions (drought, heat, floods), and farming systems designed for climate adaptation and carbon sequestration.', icon: <Sprout className="w-7 h-7 text-primary"/> },
];

const exploreFurtherData = [
  { category: "Courses & Certifications", items: [
      { name: "Digital Agriculture (Wageningen University on edX)", url: "https://www.edx.org/learn/agriculture/wageningen-university-research-digital-agriculture-farming-for-the-future", imageHint: "wageningen logo online course" },
      { name: "Agricultural Biotechnology (Coursera - Cornell)", url: "https://www.coursera.org/learn/agricultural-biotechnology", imageHint: "coursera logo cornell" },
  ]},
  { category: "Books & Publications", items: [
      { name: "The Future of Food by Amanda Little", url: "https://www.amazon.com/Future-Food-Search-Sustainable-Nourishment/dp/0393357767", imageHint: "book cover food future" },
      { name: "Nature Food (Journal)", url: "https://www.nature.com/natfood/", imageHint: "nature journal food" },
  ]},
  { category: "Conferences & Industry Events", items: [
      { name: "World Agri-Tech Innovation Summit", url: "https://worldagritechusa.com/", imageHint: "conference logo agriculture" },
      { name: "Future Food-Tech", url: "https://futurefoodtechsf.com/", imageHint: "food tech event logo" },
  ]},
  { category: "Open Platforms & Tools", items: [
      { name: "FarmOS (Open Source Farm Management)", url: "https://farmos.org/", imageHint: "farmos logo software" },
      { name: "AgriWebb (Livestock Management)", url: "https://www.agriwebb.com/", imageHint: "agriwebb logo farm" }, 
  ]}
];

export default function AgritechFoodTechnologyPageClient() {
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
          <Wheat className="w-16 h-16 md:w-20 md:h-20 text-primary mx-auto md:mx-0 flex-shrink-0" />
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
              Agritech & Food Technology
            </h1>
            <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto md:mx-0">
              Transforming agriculture and food production for sustainability, efficiency, and global food security.
            </p>
          </div>
        </div>
      </header>

      <Section title="Comprehensive Overview" titleIcon={<InfoIcon className="w-6 h-6 text-primary"/>} description="Understanding the fusion of technology with agriculture and food systems." className="bg-muted/30">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-6 items-center">
            <div className="md:col-span-4 space-y-4">
                <p className="text-base text-muted-foreground">
                  Agritech (Agricultural Technology) and Food Technology encompass a broad range of innovations designed to optimize farming processes, enhance crop yields, create novel food products, and improve the transparency and efficiency of food supply chains. These fields are crucial for addressing global challenges such as population growth, climate change, resource scarcity, and the demand for safer, more nutritious food.
                </p>
                 <div>
                    <h4 className="font-semibold text-md text-primary mb-1">Key Focus Areas:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        <li>Precision farming utilizing sensors, drones, IoT, and AI for data-driven decisions.</li>
                        <li>Vertical farming, hydroponics, and other controlled environment agriculture (CEA) methods.</li>
                        <li>Development of lab-grown meat, plant-based alternatives, and other novel protein sources.</li>
                        <li>Blockchain and AI applications for enhancing food traceability and safety.</li>
                        <li>Biotechnological advancements for crop improvement and sustainable inputs.</li>
                    </ul>
                </div>
            </div>
             <div className="md:col-span-3">
                <Image src="https://placehold.co/600x400.png" alt="Agritech & Food Tech Abstract Visual" width={600} height={400} className="rounded-md object-cover w-full shadow-lg border border-border" data-ai-hint="modern farm technology drone" />
            </div>
        </div>
      </Section>
      
      <Section title="Historical Evolution & Foundations" titleIcon={<Milestone className="w-6 h-6 text-primary"/>} description="Tracing the journey from traditional farming to modern digital and biological innovations.">
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

      <Section title="Current Applications" titleIcon={<CheckCircle className="w-6 h-6 text-primary"/>} description="Showcasing how Agritech and Food Technology are applied worldwide today.">
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

      <Section title="Core Technologies & Techniques" titleIcon={<Settings2 className="w-6 h-6 text-primary"/>} description="The foundational technologies underpinning innovations in Agritech and Food Tech.">
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

      <Section title="Key Innovators & Industry Leaders" titleIcon={<Users2 className="w-6 h-6 text-primary"/>} description="Influential organizations and companies driving progress in Agritech and Food Tech.">
        <div className="space-y-6">
            <div>
                <h3 className="text-xl font-semibold mb-3 text-primary flex items-center gap-2"><Building className="w-5 h-5"/>Leading Companies</h3>
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
                <h3 className="text-xl font-semibold mb-3 text-primary flex items-center gap-2"><FlaskConical className="w-5 h-5"/>Research Institutions</h3>
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
             <div>
                <h3 className="text-xl font-semibold mb-3 text-primary flex items-center gap-2"><Zap className="w-5 h-5"/>Startups & Innovators</h3>
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
        </div>
      </Section>

      <Section title="Challenges & Limitations" titleIcon={<Scale className="w-6 h-6 text-primary"/>} description="Current barriers to widespread adoption and scalability in Agritech and Food Tech.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {challengesLimitationsData.map((item) => (
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

      <Section title="Future Trends & Opportunities" titleIcon={<TrendingUp className="w-6 h-6 text-primary"/>} description="Exploring upcoming innovations and growth areas in Agritech and Food Tech.">
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
            Agritech and Food Technology are pivotal in shaping a future where food production is more sustainable, resilient, and equitable, meeting the needs of a growing global population while respecting planetary boundaries.
        </blockquote>
      </Section>
      
      <Section title="Explore Further: Resources & Learning Paths" titleIcon={<BookOpen className="w-6 h-6 text-primary"/>} description="Curated resources to deepen your understanding of Agritech & Food Technology." className="bg-muted/30">
        <div className="space-y-8">
            {exploreFurtherData.map(categoryItem => (
                <div key={categoryItem.category}>
                    <h3 className="text-xl font-semibold mb-4 text-primary">{categoryItem.category}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4"> 
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
