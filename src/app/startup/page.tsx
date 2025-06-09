
import { Section } from '@/components/Section';
import { Globe, Landmark, Lightbulb, Users, Building as BuildingIcon, DollarSign, TrendingUp, BarChart3, Eye, Mic, SearchCheck, BookOpen, ArrowRight, ThumbsUp, Rocket as RocketIcon, UsersRound, Shield, AlertTriangle, CheckSquare, Drama, LineChart, MapPin, GraduationCap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HubCard } from '@/components/HubCard';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { EcosystemComparisonClient } from '@/components/EcosystemComparisonClient'; 
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { StartupVoicesClient } from '@/components/StartupVoicesClient';
import { StartupSpotlightCard } from '@/components/StartupSpotlightCard'; // New import
import { Package, Dna as DnaIcon, BrainCircuit as AiIcon } from 'lucide-react'; // For sample icons


export interface HubData {
  id: string;
  name: string;
  description: string;
  imageHint: string;
  learnMoreLink: string; 
  keySectors: string[];
  successStories: string[]; 
  incubatorsAcceleratorsVCs: string[]; 
  policyEducationLinks: string[]; 
  coordinates?: { lat: number; lon: number };
  innovationRank?: string; 
  totalStartups?: string; 
  gdpContribution?: string; 
  unicornsCount?: number;
  sectorStrengthsVisual?: string; 
  cultureAndTalent?: string[]; 
  policyAndRegulationDetails?: string[]; 
  isEmergingHub?: boolean;
}

const hubs: HubData[] = [
  {
    id: 'silicon-valley',
    name: 'Silicon Valley, USA',
    description: 'The undisputed global epicenter of technological innovation, venture capital, and groundbreaking startups that have redefined industries worldwide. Known for its risk-taking culture and deep talent pool.',
    imageHint: 'golden gate bridge tech',
    learnMoreLink: '#silicon-valley-details',
    keySectors: ['Software', 'AI/ML', 'Semiconductors', 'Biotech', 'Internet Services', 'Cloud Computing', 'Autonomous Vehicles'],
    successStories: ['Google (Alphabet)', 'Apple', 'Meta', 'Nvidia', 'Intel', 'HP', 'Salesforce', 'Netflix', 'Airbnb', 'Uber', 'Lyft', 'Tesla', 'OpenAI', 'Stripe'],
    incubatorsAcceleratorsVCs: ['Y Combinator', 'Stanford StartX', 'Plug and Play', '500 Global', 'Andreessen Horowitz (a16z)', 'Sequoia Capital', 'Kleiner Perkins', 'Accel', 'Lightspeed Venture Partners'],
    policyEducationLinks: ['Stanford University', 'UC Berkeley', 'Caltech (nearby)', 'US Patent and Trademark Office (USPTO)'],
    coordinates: { lat: 37.4, lon: -122.1 },
    innovationRank: 'Global #1',
    totalStartups: '40,000+',
    gdpContribution: '>25% of California GDP (approx)',
    unicornsCount: 200, 
    cultureAndTalent: ['Highly skilled tech workforce', 'Strong entrepreneurial culture', 'World-class universities', 'Diverse talent pool'],
    policyAndRegulationDetails: ['Relatively business-friendly', 'Strong IP protection', 'Access to massive US market', 'High cost of living/operation'],
    isEmergingHub: false,
    sectorStrengthsVisual: "Leading in AI, Software, and Cloud."
  },
  {
    id: 'tel-aviv',
    name: 'Tel Aviv, Israel',
    description: 'Globally recognized as "Silicon Wadi," Tel Aviv is a powerhouse in cybersecurity, deep tech, and R&D, characterized by its innovation-driven military tech spillover and high density of startups.',
    imageHint: 'tel aviv beach skyline',
    learnMoreLink: '#tel-aviv-details',
    keySectors: ['Cybersecurity', 'Fintech', 'AI', 'Healthtech', 'Mobility', 'AgriTech', 'Defense Tech', 'SaaS'],
    successStories: ['Wix', 'Mobileye (Intel)', 'Check Point Software', 'ironSource (Unity)', 'CyberArk', 'Waze (Google)', 'Monday.com', 'Gett', 'SolarEdge'],
    incubatorsAcceleratorsVCs: ['8200 EISP', 'Techstars Tel Aviv', 'The Junction (by F2 Capital)', 'Viola Ventures', 'Pitango VC', 'OurCrowd', 'aMoon Fund', 'TLV Partners'],
    policyEducationLinks: ['Technion - Israel Institute of Technology', 'Tel Aviv University', 'Weizmann Institute of Science', 'Israel Innovation Authority'],
    coordinates: { lat: 32.1, lon: 34.8 },
    innovationRank: 'Top 10 Global',
    totalStartups: '6,000+',
    unicornsCount: 90, 
    cultureAndTalent: ['Highly educated workforce (many engineers)', 'Strong military tech background', 'Resilient and direct culture'],
    policyAndRegulationDetails: ['Government R&D grants', 'Supportive startup ecosystem', 'Global market focus due to small local market'],
    isEmergingHub: false,
    sectorStrengthsVisual: "Cybersecurity & Deep Tech dominate."
  },
  {
    id: 'bangalore',
    name: 'Bangalore (Bengaluru), India',
    description: 'India\'s leading technology hub, renowned for its vast IT services industry, rapidly growing software development scene, and a vibrant, booming startup ecosystem focusing on scale and local solutions.',
    imageHint: 'bangalore tech park modern',
    learnMoreLink: '#bangalore-details',
    keySectors: ['IT Services', 'Software Development', 'E-commerce', 'Fintech', 'EdTech', 'SaaS', 'DeepTech', 'Gaming'],
    successStories: ['Infosys', 'Wipro', 'Flipkart (Walmart)', 'Ola Cabs', 'Swiggy', 'Byju\'s', 'Zerodha', 'Razorpay', 'CRED', 'PhonePe', 'Meesho'],
    incubatorsAcceleratorsVCs: ['Axilor Ventures', 'Microsoft for Startups', 'Sequoia Surge', 'Accel Partners India', 'Kalaari Capital', 'Lightspeed India', 'Blume Ventures'],
    policyEducationLinks: ['Indian Institute of Science (IISc)', 'IIM Bangalore', 'IITs (various)', 'Startup India initiative', 'Digital India program'],
    coordinates: { lat: 12.9, lon: 77.6 },
    innovationRank: 'Major Asian Hub',
    totalStartups: '15,000+',
    unicornsCount: 70, 
    cultureAndTalent: ['Large pool of engineering talent', 'Growing product mindset', 'Young demographic'],
    policyAndRegulationDetails: ['Government initiatives to boost startups', 'Improving ease of doing business', 'Large domestic market'],
    isEmergingHub: false,
    sectorStrengthsVisual: "IT Services & E-commerce excel."
  },
  {
    id: 'berlin',
    name: 'Berlin, Germany',
    description: 'A diverse, creative, and international European startup capital with a strong focus on B2C, SaaS, and deep tech. Known for its affordability (historically) and vibrant arts scene influencing innovation.',
    imageHint: 'brandenburg gate night berlin',
    learnMoreLink: '#berlin-details',
    keySectors: ['E-commerce', 'Fintech', 'Mobility', 'SaaS', 'FoodTech', 'Deep Tech', 'Creator Economy', 'HealthTech'],
    successStories: ['Zalando', 'N26', 'Delivery Hero', 'SoundCloud', 'Trade Republic', 'HelloFresh', 'Celonis', 'Contentful', 'Tier Mobility'],
    incubatorsAcceleratorsVCs: ['Rocket Internet', 'Project A Ventures', 'Point Nine Capital', 'Factory Berlin', 'Cherry Ventures', 'Earlybird Venture Capital', 'Target Global'],
    policyEducationLinks: ['Humboldt University of Berlin', 'TU Berlin', 'Freie Universität Berlin', 'Digital Hub Initiative (Germany)'],
    coordinates: { lat: 52.5, lon: 13.4 },
    innovationRank: 'Top European Hub',
    totalStartups: '5,000+',
    unicornsCount: 30,
    isEmergingHub: false,
  },
  {
    id: 'singapore',
    name: 'Singapore',
    description: 'A major global finance, logistics, and deep tech hub strategically connecting East and West, renowned for its strong government support, efficiency, and focus on innovation.',
    imageHint: 'singapore gardens bay future',
    learnMoreLink: '#singapore-details',
    keySectors: ['Fintech', 'Logistics & Supply Chain', 'Biotech & MedTech', 'Deep Tech (AI, Robotics)', 'Smart City Solutions', 'E-commerce', 'AgriFood Tech'],
    successStories: ['Grab', 'Sea Group (Shopee, Garena)', 'Lazada (Alibaba)', 'Trax Technologies', 'Patsnap', 'Carousell', 'PropertyGuru', 'Ninja Van'],
    incubatorsAcceleratorsVCs: ['Enterprise Singapore (ESG)', 'Antler', 'Vertex Ventures SE Asia & India', 'NUS Enterprise', 'Wavemaker Partners', 'Monk\'s Hill Ventures', 'SGInnovate'],
    policyEducationLinks: ['National University of Singapore (NUS)', 'Nanyang Technological University (NTU)', 'A*STAR', 'SMART Alliance (MIT)'],
    coordinates: { lat: 1.35, lon: 103.8 },
    innovationRank: 'Leading Global Financial & Tech Hub',
    totalStartups: '4,000+',
    unicornsCount: 20,
    isEmergingHub: false,
  },
  {
    id: 'shenzhen',
    name: 'Shenzhen, China',
    description: 'Globally famed as the "Silicon Valley of Hardware," Shenzhen is unparalleled for its rapid prototyping capabilities, vast manufacturing ecosystem, and innovation in telecommunications and consumer electronics.',
    imageHint: 'shenzhen skyline night tech',
    learnMoreLink: '#shenzhen-details',
    keySectors: ['Hardware Manufacturing', 'Electronics', 'Telecommunications (5G)', 'AI', 'Drones', 'Robotics', 'IoT', 'New Energy Vehicles'],
    successStories: ['Huawei', 'Tencent', 'DJI', 'BYD', 'OnePlus', 'ZTE', 'Royole', 'UBTECH Robotics', 'Mindray'],
    incubatorsAcceleratorsVCs: ['HAX Accelerator (Hardware)', 'TusStar', 'SCGC Group (Shenzhen Capital Group)', 'IDG Capital', 'Legend Capital', 'Matrix Partners China', 'Qianhai Shenzhen-Hong Kong Youth Innovation Hub'],
    policyEducationLinks: ['Shenzhen University', 'Southern University of Science and Technology (SUSTech)', 'HKUST (Shenzhen)', 'Greater Bay Area initiative'],
    coordinates: { lat: 22.5, lon: 114.1 },
    innovationRank: 'Global Hardware Capital',
    totalStartups: '10,000+',
    unicornsCount: 40,
    isEmergingHub: false,
  },
  {
    id: 'nairobi',
    name: 'Nairobi, Kenya',
    description: 'Affectionately known as "Silicon Savannah," Nairobi is a leading African hub for mobile technology, fintech innovation (especially mobile money), and impact-driven startups addressing local and regional challenges.',
    imageHint: 'nairobi city center innovation',
    learnMoreLink: '#nairobi-details',
    keySectors: ['Fintech (Mobile Money)', 'Agritech', 'Renewable Energy', 'EdTech', 'Healthtech', 'Logistics & E-commerce', 'InsurTech'],
    successStories: ['M-Pesa (Safaricom)', 'Twiga Foods', 'Cellulant', 'Africa\'s Talking', 'Sendy', 'Copia Global', 'SunCulture', 'Wasoko (Sokowatch)', 'Gro Intelligence'],
    incubatorsAcceleratorsVCs: ['iHub Nairobi', 'Nailab', 'Villgro Kenya', 'Savannah Fund', 'Novastar Ventures', 'Catalyst Fund', 'Partech Africa', 'Flat6Labs'],
    policyEducationLinks: ['University of Nairobi', 'Strathmore University (iLabAfrica)', 'Konza Technopolis', 'Kenya Vision 2030'],
    coordinates: { lat: -1.28, lon: 36.8 },
    innovationRank: 'Leading African Hub',
    totalStartups: '700+',
    unicornsCount: 3,
    isEmergingHub: true,
  },
  {
    id: 'sao-paulo',
    name: 'São Paulo, Brazil',
    description: 'Latin America\'s largest economic center and a burgeoning startup ecosystem, particularly strong in Fintech, E-commerce, and SaaS solutions tailored for the Brazilian and LATAM markets.',
    imageHint: 'sao paulo skyline avenida paulista',
    learnMoreLink: '#sao-paulo-details',
    keySectors: ['Fintech', 'E-commerce', 'SaaS', 'AgriTech', 'EdTech', 'HealthTech'],
    successStories: ['Nubank', 'PagSeguro', 'StoneCo', 'iFood', 'QuintoAndar', 'Loft', 'Creditas'],
    incubatorsAcceleratorsVCs: ['Cubo Itaú', 'Wayra Brazil (Telefónica)', 'Canary', 'Monashees', 'Kaszek Ventures', 'ACE Startups'],
    policyEducationLinks: ['University of São Paulo (USP)', 'FGV', 'UNICAMP', 'Startup Brasil (past initiative), various state-level supports'],
    coordinates: { lat: -23.55, lon: -46.63 },
    innovationRank: 'Leading LATAM Hub',
    totalStartups: '2,700+',
    unicornsCount: 15,
    isEmergingHub: true,
  },
  {
    id: 'tallinn',
    name: 'Tallinn, Estonia',
    description: 'A leading digital nation with a highly advanced e-governance system, fostering a dynamic startup scene strong in Fintech, SaaS, and cybersecurity. Known for its e-Residency program.',
    imageHint: 'tallinn old town digital',
    learnMoreLink: '#tallinn-details',
    keySectors: ['Fintech', 'SaaS', 'Cybersecurity', 'E-governance Solutions', 'Mobility Tech'],
    successStories: ['Skype (early roots)', 'Wise (formerly TransferWise)', 'Bolt', 'Pipedrive', 'Playtech', 'Veriff'],
    incubatorsAcceleratorsVCs: ['Startup Wise Guys', 'Tehnopol Startup Incubator', 'Buildit Accelerator', 'Karma Ventures', 'Superangel', 'Tera Ventures'],
    policyEducationLinks: ['Tallinn University of Technology (TalTech)', 'University of Tartu', 'e-Residency Program', 'Startup Estonia'],
    coordinates: { lat: 59.43, lon: 24.75 },
    innovationRank: 'Baltic Innovation Leader',
    totalStartups: '1,200+',
    unicornsCount: 10,
    isEmergingHub: true,
  },
];

export interface EcosystemVoice {
  name: string;
  title: string;
  affiliation: string;
  quote: string;
  buttonText: string;
}

const ecosystemVoices: EcosystemVoice[] = [
  {
    name: "Dr. Elara Vance (Conceptual)",
    title: "VC & Ecosystem Analyst",
    affiliation: "Global Innovations Capital",
    quote: "The most resilient startup ecosystems are those that foster deep collaboration between academia, industry, and government, creating a fertile ground for continuous innovation.",
    buttonText: "Read Full Interview (Soon)",
  },
  {
    name: "Kenji Tanaka (Conceptual)",
    title: "Serial Entrepreneur",
    affiliation: "Founder, InnovateX & ConnectSphere",
    quote: "Access to early-stage talent and a culture that isn't afraid of failure are more critical than capital in the initial phases of building a disruptive startup.",
    buttonText: "View Founder Story (Soon)",
  },
  {
    name: "Prof. Lena Petrova (Conceptual)",
    title: "University Tech Transfer Lead",
    affiliation: "Tech Advancement University",
    quote: "Bridging the gap between academic research and market-ready products is a persistent challenge, but vital for ecosystem growth. Strong IP policies and incubation support are essential.",
    buttonText: "Explore University Impact (Soon)",
  }
];

export interface StartupSpotlightEntry {
  id: string;
  name: string;
  domain: string;
  description: string;
  imageHint: string;
  learnMoreUrl: string;
  logoIcon?: ReactNode;
}

const spotlightStartups: StartupSpotlightEntry[] = [
  {
    id: 'ss1',
    name: 'SynthoBio Solutions',
    domain: 'Bioengineering',
    description: 'Developing novel synthetic organisms for sustainable material production and bioremediation. Exploring pathways for carbon-neutral chemical synthesis.',
    imageHint: 'synthetic biology lab future',
    learnMoreUrl: '#',
    logoIcon: <DnaIcon className="w-7 h-7 text-green-500" />
  },
  {
    id: 'ss2',
    name: 'QuantumLeap AI',
    domain: 'AI & Quantum Computing',
    description: 'Leveraging quantum-inspired algorithms to accelerate machine learning model training and solve complex optimization problems for enterprise clients.',
    imageHint: 'quantum ai abstract network',
    learnMoreUrl: '#',
    logoIcon: <AiIcon className="w-7 h-7 text-blue-500" />
  },
  {
    id: 'ss3',
    name: 'LogiChain Systems',
    domain: 'Blockchain & Logistics',
    description: 'Building a transparent and efficient global supply chain platform using distributed ledger technology to enhance traceability and reduce fraud.',
    imageHint: 'blockchain supply chain cargo',
    learnMoreUrl: '#',
    logoIcon: <Package className="w-7 h-7 text-orange-500" />
  },
];


export const metadata: Metadata = {
  title: 'Global Startup Ecosystems',
  description: 'Explore global startup innovation engines. Discover key hubs like Silicon Valley, Tel Aviv, Bangalore, Berlin, and emerging ecosystems. Understand trends and what drives startup success worldwide.',
  keywords: ['startup ecosystems', 'innovation hubs', 'venture capital', 'tech startups', 'Silicon Valley', 'Silicon Wadi', 'Fintech', 'AI startups', 'global innovation'],
  openGraph: {
    title: 'Global Startup Ecosystems | Innovation Hub Explorer',
    description: 'Navigate the world\'s most active startup cities and understand the engines of innovation.',
    url: '/startup',
     images: [
      {
        url: '/og-startup.png', 
        width: 1200,
        height: 630,
        alt: 'Global Startup Ecosystems Map',
      },
    ],
  },
  twitter: {
    title: 'Global Startup Ecosystems',
    description: 'Explore global innovation engines and startup hubs.',
  },
  alternates: {
    canonical: '/startup',
  },
};

export default function StartupPage() {
  const emergingHubs = hubs.filter(hub => hub.isEmergingHub);
  const establishedHubs = hubs.filter(hub => !hub.isEmergingHub);

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 space-y-12 md:space-y-16">
      <header className="text-center mb-12 md:mb-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-primary flex items-center justify-center gap-3">
          <RocketIcon className="w-10 h-10" /> Global Startup Ecosystems: The Innovation Engines
        </h1>
        <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
          Where bold ideas meet funding, talent, and momentum. Navigate through the most active startup cities across continents—understand what powers them, who leads them, and why they matter.
        </p>
      </header>

      <Section title="Ecosystem Explorer: Profiles of Global Hubs" titleIcon={<Landmark className="w-6 h-6 text-primary" />} description="Deep dives into the DNA of the world’s top startup environments. Click on a hub card for more details (full profiles coming soon).">
        <h3 className="text-2xl font-semibold mb-6 mt-4 text-secondary-foreground flex items-center gap-2"><ThumbsUp className="w-6 h-6 text-accent"/> Established Powerhouses</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {establishedHubs.map((hub) => (
            <HubCard key={hub.id} hub={hub} />
          ))}
        </div>
        {emergingHubs.length > 0 && (
          <>
            <h3 className="text-2xl font-semibold mb-6 mt-12 text-secondary-foreground flex items-center gap-2"><TrendingUp className="w-6 h-6 text-accent"/> Rising Stars: Emerging Hubs</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {emergingHubs.map((hub) => (
                <HubCard key={hub.id} hub={hub} />
              ))}
            </div>
          </>
        )}
      </Section>

      <Section title="Compare Ecosystems" titleIcon={<BarChart3 className="w-6 h-6 text-primary" />} description="Put startup hubs head-to-head. Select two hubs to see their key metrics side-by-side.">
        <EcosystemComparisonClient hubs={hubs} />
      </Section>

      <Section title="Ecosystem Trends & Insights" titleIcon={<LineChart className="w-6 h-6 text-primary" />} description="Unpack the global narrative with data stories. (Interactive data visualizations are planned).">
         <Card className="bg-muted/50 border-dashed">
            <CardContent className="pt-6 text-center">
                <LineChart className="w-12 h-12 text-muted-foreground mx-auto mb-4"/>
                <p className="text-muted-foreground mb-4">This section will feature interactive graphs and analyses on topics such as trending sectors, funding hotspots, and M&A trends once data integration is complete.</p>
                <CardDescription className="text-xs text-muted-foreground">Check back for visual deep dives into global startup trends.</CardDescription>
            </CardContent>
         </Card>
      </Section>

      <Section title="Understanding Startup Dynamics" titleIcon={<Lightbulb className="w-6 h-6 text-primary" />} description="What truly drives startup ecosystems to thrive? Exploring key factors.">
        <Accordion type="single" collapsible className="w-full space-y-3">
          {[
            { id: "talent", title: "Talent & Culture", icon: <UsersRound className="text-accent w-5 h-5" />, text: "Access to a skilled and diverse workforce, strong entrepreneurial mindset, risk-taking culture, collaborative environments, and quality of life. Metrics like 'brain gain vs. brain drain' and university rankings play a role." },
            { id: "capital", title: "Capital & Policy", icon: <DollarSign className="text-accent w-5 h-5" />, text: "Availability and flow of venture capital, angel investor networks, government grants and incentives, favorable tax policies, and ease of doing business." },
            { id: "university", title: "University–Startup Bridges", icon: <GraduationCap className="text-accent w-5 h-5" />, text: "Strong connections between academic research and commercialization, university spin-offs, IP transfer mechanisms, and talent pipelines from higher education." },
            { id: "infrastructure", title: "Support Infrastructure", icon: <BuildingIcon className="text-accent w-5 h-5" />, text: "Presence of quality incubators, accelerators, co-working spaces, mentorship programs, and industry-specific support organizations." },
            { id: "resilience", title: "Resilience & Crisis Response", icon: <Shield className="text-accent w-5 h-5" />, text: "The ability of ecosystems to adapt to economic shocks, global events, and maintain momentum through community support and policy adjustments." },
          ].map(factor => (
            <AccordionItem key={factor.id} value={factor.id} className="border-none">
               <Card className="bg-secondary/50 hover:shadow-md transition-shadow">
                    <AccordionTrigger className="p-4 hover:no-underline text-left">
                        <div className="flex items-center gap-3 text-md font-semibold text-primary">
                            {factor.icon} {factor.title}
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="p-4 pt-0 text-sm text-muted-foreground">
                        {factor.text}
                    </AccordionContent>
               </Card>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>

      <Section title="Voices from the Ground" titleIcon={<Mic className="w-6 h-6 text-primary" />} description="Illustrative insights from founders, investors, and ecosystem builders. Full interviews and more perspectives are planned.">
        <StartupVoicesClient voices={ecosystemVoices} />
      </Section>

      <Section title="Startups Spotlight" titleIcon={<SearchCheck className="w-6 h-6 text-primary" />} description="A showcase of illustrative promising startups worldwide. An interactive directory with detailed profiles is planned.">
        {spotlightStartups.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {spotlightStartups.map((startup) => (
              <StartupSpotlightCard key={startup.id} startup={startup} />
            ))}
          </div>
        ) : (
          <Card className="bg-muted/50 border-dashed">
            <CardContent className="pt-6 text-center">
              <SearchCheck className="w-12 h-12 text-muted-foreground mx-auto mb-4"/>
              <p className="text-muted-foreground">No startup spotlights available at the moment. Check back soon for featured innovators!</p>
            </CardContent>
          </Card>
        )}
      </Section>

       <Section title="Glossary & Playbook" titleIcon={<BookOpen className="w-6 h-6 text-primary" />} description="Understand ecosystem lingo and structure. (Content is currently being expanded).">
        <Card className="bg-muted/50 border-dashed">
            <CardHeader>
                <CardTitle className="text-lg">Key Startup Terminology</CardTitle>
            </CardHeader>
          <CardContent className="pt-2 text-left space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                <div><strong className="text-primary">Unicorn:</strong> <span className="text-muted-foreground text-sm">A privately held startup company valued at over $1 billion.</span></div>
                <div><strong className="text-primary">Venture Capital (VC):</strong> <span className="text-muted-foreground text-sm">Financing that investors provide to startup companies and small businesses perceived to have long-term growth potential.</span></div>
                <div><strong className="text-primary">IPO (Initial Public Offering):</strong> <span className="text-muted-foreground text-sm">The process by which a private company can go public by sale of its stocks to general public.</span></div>
                <div><strong className="text-primary">Accelerator:</strong> <span className="text-muted-foreground text-sm">A program that provides early-stage startups with mentorship, funding, and resources, typically in exchange for equity.</span></div>
                <div><strong className="text-primary">CAC (Customer Acquisition Cost):</strong> <span className="text-muted-foreground text-sm">The cost associated with convincing a consumer to buy a product or service.</span></div>
            </div>
            <CardDescription className="text-xs text-muted-foreground mt-4 italic">More terms and regional startup guides will be added.</CardDescription>
          </CardContent>
        </Card>
      </Section>

    </div>
  );
}
