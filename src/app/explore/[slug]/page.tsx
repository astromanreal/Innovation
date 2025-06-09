
import { Section } from '@/components/Section';
import { ArrowLeft, Lightbulb, Building, Users, Milestone, FlaskConical, Atom, BrainCircuit, Cpu, Bot, Blocks, Dna, MonitorSmartphone, Telescope, Satellite, Layers, CalendarDays, CheckCircle, Zap, ArrowRight, Link as LinkIconLucide, FileLock, Wifi, ShieldCheck, Leaf, Sun, Wind, Signal, Handshake, Car, DatabaseZap, Watch, Cloud, Server, DollarSign, Building2, Printer, Tractor, Wheat } from 'lucide-react'; 
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import type { Metadata } from 'next';

const technologyDomainsData = {
  technologyDomains: [
    { id: "artificial-intelligence", title: "Artificial Intelligence", shortDescription: "Exploring machine learning, neural networks, and cognitive computing frontiers.", detailedOverview: "Dive into the evolution of Artificial Intelligence — from early expert systems to deep learning architectures and generative AI. Understand how machine learning algorithms mimic human cognition and how neural networks are powering automation in healthcare, finance, education, and more. Discover the ethics, limitations, and the roadmap toward Artificial General Intelligence (AGI).", exploreLink: "/explore/artificial-intelligence", icon: <BrainCircuit className="w-10 h-10 text-primary" />, imageHint: "circuit brain abstract", keywords: "AI, Machine Learning, Deep Learning, Neural Networks, AGI" },
    { id: "robotics-automation", title: "Robotics & Automation", shortDescription: "Advancements in automated systems, industrial robots, and human-robot collaboration.", detailedOverview: "Explore the rapidly advancing world of robotics, including autonomous vehicles, industrial automation, robotic surgery, and swarm robotics. Learn how robotics and AI are converging to create intelligent machines that collaborate with humans in manufacturing, logistics, and everyday life.", exploreLink: "/explore/robotics-automation", icon: <Bot className="w-10 h-10 text-primary" />, imageHint: "robot arm factory", keywords: "Robotics, Automation, Industrial Robots, Cobots, Autonomous Systems" },
    { id: "quantum-computing", title: "Quantum Computing", shortDescription: "Harnessing quantum mechanics for next-generation computation and simulation.", detailedOverview: "Quantum computing is set to revolutionize problem-solving by leveraging superposition and entanglement. Discover breakthroughs from qubits and quantum supremacy to quantum cryptography and simulation of complex systems in chemistry and physics. Explore both hardware and software developments, and global race toward usable quantum processors.", exploreLink: "/explore/quantum-computing", icon: <Atom className="w-10 h-10 text-primary" />, imageHint: "quantum particle entanglement", keywords: "Quantum Computing, Qubits, Superposition, Entanglement, Quantum Algorithms" },
    { id: "blockchain-web3", title: "Blockchain & Web3", shortDescription: "Decentralized ledgers, smart contracts, and the future of the internet.", detailedOverview: "Delve into the decentralized world of blockchain technology, from the rise of cryptocurrencies to smart contracts, DeFi, and DAOs. Explore how Web3 reimagines the internet with transparency, user sovereignty, and peer-to-peer interaction at its core. Understand governance models, scalability issues, and the transition from Web2 to Web3.", exploreLink: "/explore/blockchain-web3", icon: <Blocks className="w-10 h-10 text-primary" />, imageHint: "digital chain network", keywords: "Blockchain, Web3, Cryptocurrency, Smart Contracts, DeFi, DAO, Decentralization" },
    { id: "nanotechnology", title: "Nanotechnology", shortDescription: "Engineering materials and devices at the atomic and molecular scale.", detailedOverview: "Nanotechnology is transforming materials science, medicine, and electronics. Learn how manipulation at the nanoscale enables the creation of smart materials, drug delivery systems, and nano-electronics. Discover real-world applications like nanosensors, nanomedicine, and nano-coatings that enhance performance and durability.", exploreLink: "/explore/nanotechnology", icon: <Telescope className="w-10 h-10 text-primary" />, imageHint: "molecule structure nano", keywords: "Nanotechnology, Nanomaterials, Nanoscience, Nanoelectronics, Nanomedicine" },
    { id: "bioengineering-genomics", title: "Bioengineering & Genomics", shortDescription: "Merging biology with engineering, gene editing (like CRISPR), and synthetic life.", detailedOverview: "Bioengineering combines life sciences and technology to solve biological challenges. Discover advancements in CRISPR gene editing, synthetic biology, tissue engineering, and genomics. Learn how personalized medicine and bio-computing are reshaping healthcare and evolution.", exploreLink: "/explore/bioengineering-genomics", icon: <Dna className="w-10 h-10 text-primary" />, imageHint: "dna sequence genetics", keywords: "Bioengineering, Genomics, CRISPR, Gene Editing, Synthetic Biology, Biotechnology" },
    { id: "ar-vr-metaverse", title: "AR/VR & Metaverse", shortDescription: "Creating immersive digital experiences, virtual worlds, and spatial computing.", detailedOverview: "Augmented Reality (AR) and Virtual Reality (VR) are redefining how we interact with information and environments. Explore technologies enabling the Metaverse — immersive platforms where digital avatars, virtual economies, and real-time collaboration coexist. Learn about gaming, simulation, remote work, and education applications.", exploreLink: "/explore/ar-vr-metaverse", icon: <MonitorSmartphone className="w-10 h-10 text-primary" />, imageHint: "vr headset metaverse", keywords: "AR, VR, Metaverse, Augmented Reality, Virtual Reality, Spatial Computing, Immersive Technology" },
    { id: "advanced-materials", title: "Advanced Materials", shortDescription: "Developing novel materials with unique properties for various applications.", detailedOverview: "Advanced materials research focuses on materials with extraordinary mechanical, electrical, or biological properties. Explore innovations in graphene, smart textiles, biomaterials, superconductors, and meta-materials, and how they’re applied in clean energy, aerospace, medicine, and construction.", exploreLink: "/explore/advanced-materials", icon: <Layers className="w-10 h-10 text-primary" />, imageHint: "graphene structure material", keywords: "Advanced Materials, Nanomaterials, Biomaterials, Metamaterials, Composites, Graphene" },
    { id: "space-technology", title: "Space Technology", shortDescription: "Innovations in satellite tech, reusable rockets, and space exploration.", detailedOverview: "Explore humanity’s quest to expand its reach into space. From reusable rockets and satellite mega-constellations to space mining and Mars colonization, this section covers the technologies fueling the new space race. Learn how agencies and private companies like NASA, ISRO, SpaceX, and Blue Origin are shaping interplanetary ambitions.", exploreLink: "/explore/space-technology", icon: <Satellite className="w-10 h-10 text-primary" />, imageHint: "rocket launch space", keywords: "Space Technology, Satellites, Rockets, Space Exploration, NASA, SpaceX" },
    { id: "internet-of-things", title: "Internet of Things (IoT)", shortDescription: "Connecting everyday devices for smart environments and automation.", detailedOverview: "The Internet of Things (IoT) connects physical devices to the internet, enabling them to collect and exchange data. This network of sensors, appliances, and machines drives smart homes, industrial automation, connected healthcare, and smart cities, transforming how we interact with our surroundings.", exploreLink: "/explore/internet-of-things", icon: <Wifi className="w-10 h-10 text-primary" />, imageHint: "connected devices network", keywords: "IoT, Internet of Things, Smart Devices, Connected Devices, IIoT, Smart Home" },
    { id: "cybersecurity", title: "Cybersecurity", shortDescription: "Protecting digital infrastructure, data, and privacy from evolving cyber threats.", detailedOverview: "Cybersecurity encompasses technologies, processes, and practices designed to protect networks, devices, programs, and data from attack, damage, or unauthorized access.", exploreLink: "/explore/cybersecurity", icon: <ShieldCheck className="w-10 h-10 text-primary" />, imageHint: "digital shield lock", keywords: "Cybersecurity, Data Privacy, Network Security, Threat Detection, Encryption" },
    { id: "renewable-energy", title: "Renewable & Clean Energy", shortDescription: "Innovations in solar, wind, energy storage, smart grids, and green hydrogen.", detailedOverview: "Dive into the technologies powering a sustainable future, from solar and wind generation to advanced energy storage solutions, smart grid management, and the production and utilization of green hydrogen.", exploreLink: "/explore/renewable-energy", icon: <Leaf className="w-10 h-10 text-primary" />, imageHint: "solar panels wind turbines", keywords: "Renewable Energy, Clean Energy, Solar Power, Wind Energy, Energy Storage, Green Hydrogen" },
    { id: "5g-next-gen-connectivity", title: "5G & Next-Gen Connectivity", shortDescription: "Ultra-fast, low-latency wireless communication for a connected future.", detailedOverview: "Explore the transformative capabilities of 5G networks, including enhanced mobile broadband, massive IoT connectivity, and ultra-reliable low-latency communications. Discover how 5G and emerging 6G concepts are enabling smart cities, autonomous vehicles, advanced healthcare, and industrial automation.", exploreLink: "/explore/5g-next-gen-connectivity", icon: <Signal className="w-10 h-10 text-primary" />, imageHint: "network waves signal", keywords: "5G, 6G, Wireless Connectivity, Mobile Networks, IoT Connectivity, Low Latency" },
    { id: "human-computer-interaction", title: "Human-Computer Interaction (HCI)", shortDescription: "Designing intuitive interfaces beyond traditional inputs: voice, gesture, BCI.", detailedOverview: "Human-Computer Interaction (HCI) is the interdisciplinary field focusing on the design and use of computer technology, particularly the interfaces between people (users) and computers. It explores how users interact with machines through modalities like voice, gesture, touch, and even brain signals, aiming to make technology more usable, accessible, and engaging across various platforms.", exploreLink: "/explore/human-computer-interaction", icon: <Handshake className="w-10 h-10 text-primary" />, imageHint: "interface human tech", keywords: "HCI, Human-Computer Interaction, UX, UI, Voice AI, Gesture Control, BCI" },
    { id: "autonomous-vehicles", title: "Autonomous Vehicles", shortDescription: "AI-driven cars, drones, and transport systems reshaping mobility.", detailedOverview: "Explore self-driving cars, delivery drones, and other autonomous transport systems that use AI and sensor technologies to navigate and operate without direct human control. Learn about their potential to reduce accidents, traffic congestion, emissions, and transform urban mobility.", exploreLink: "/explore/autonomous-vehicles", icon: <Car className="w-10 h-10 text-primary" />, imageHint: "self-driving car future", keywords: "Autonomous Vehicles, Self-Driving Cars, Drones, AI in Transportation, Mobility" },
    { id: "data-science-big-data", title: "Data Science & Big Data Analytics", shortDescription: "Extracting insights from massive datasets using AI and statistical methods.", detailedOverview: "Data Science combines math, statistics, programming, and domain knowledge to analyze large-scale data. Big Data Analytics processes vast, diverse datasets for pattern discovery and real-time decisions, powering forecasts, personalization, and strategic planning across industries.", exploreLink: "/explore/data-science-big-data", icon: <DatabaseZap className="w-10 h-10 text-primary" />, imageHint: "data network abstract", keywords: "Data Science, Big Data, Analytics, Machine Learning, Data Mining, Business Intelligence" },
    { id: "synthetic-biology", title: "Synthetic Biology", shortDescription: "Designing and constructing new biological parts, devices, and systems.", detailedOverview: "Synthetic Biology applies engineering principles to biology, aiming to create new biological systems or re-design existing ones for useful purposes. It involves DNA synthesis, genetic circuit design, and has applications in medicine, materials, and sustainable energy.", exploreLink: "/explore/synthetic-biology", icon: <Dna className="w-10 h-10 text-primary" />, imageHint: "dna engineering abstract", keywords: "Synthetic Biology, SynBio, Genetic Engineering, BioBricks, Programmable Biology" },
    { id: "wearable-health-tech", title: "Wearable Technology & Health Tech", shortDescription: "Devices for personalized health monitoring, therapy, and wellness.", detailedOverview: "Explore how wearable sensors, smart devices, and health tech platforms are revolutionizing personalized healthcare, enabling continuous health monitoring, digital therapeutics, telemedicine, and proactive wellness management.", exploreLink: "/explore/wearable-health-tech", icon: <Watch className="w-10 h-10 text-primary" />, imageHint: "smartwatch health app", keywords: "Wearable Technology, Health Tech, Digital Health, mHealth, Biosensors, Telemedicine" },
    { id: "edge-cloud-computing", title: "Edge & Cloud Computing", shortDescription: "Distributed architectures powering digital services from centralized clouds to the network fringe.", detailedOverview: "Cloud computing provides centralized resources over the internet, while edge computing brings processing closer to data sources. Together, they enable scalable, efficient solutions for IoT, real-time analytics, AI inference, and latency-sensitive applications, forming the backbone of modern digital infrastructure.", exploreLink: "/explore/edge-cloud-computing", icon: <Layers className="w-10 h-10 text-primary" />, imageHint: "cloud network edge", keywords: "Edge Computing, Cloud Computing, Distributed Systems, Serverless, Fog Computing" },
    { id: "fintech", title: "Financial Technology (FinTech)", shortDescription: "Innovating financial services with technology for payments, lending, investing, and more.", detailedOverview: "FinTech combines finance and technology to create efficient, accessible, and user-friendly financial services. It disrupts traditional banking with digital payments, neobanks, AI-driven lending, blockchain solutions like DeFi, and regulatory technology (RegTech).", exploreLink: "/explore/fintech", icon: <DollarSign className="w-10 h-10 text-primary" />, imageHint: "financial chart technology", keywords: "FinTech, Financial Technology, Digital Payments, Neobanks, DeFi, InsurTech, RegTech" },
    { id: "smart-cities", title: "Smart Cities & Urban Tech", shortDescription: "Integrating advanced technologies to improve urban life, infrastructure, and sustainability.", detailedOverview: "Smart Cities leverage IoT, data analytics, and digital platforms to create efficient, safe, and sustainable urban environments. This domain focuses on optimizing resources, traffic, energy, and public services, enhancing citizen engagement and fostering resilient city growth.", exploreLink: "/explore/smart-cities", icon: <Building2 className="w-10 h-10 text-primary" />, imageHint: "city skyline network", keywords: "Smart Cities, Urban Tech, IoT in Cities, Smart Infrastructure, Sustainable Cities" },
    { id: "additive-manufacturing", title: "Additive Manufacturing (3D Printing)", shortDescription: "Creating objects layer by layer directly from digital models.", detailedOverview: "Additive Manufacturing, often called 3D Printing, is a process that builds three-dimensional objects from a digital file by adding material layer by layer. It enables complex designs, rapid prototyping, and on-demand production across various industries.", exploreLink: "/explore/additive-manufacturing", icon: <Layers className="w-10 h-10 text-primary" />, imageHint: "3d printer abstract", keywords: "Additive Manufacturing, 3D Printing, Rapid Prototyping, FDM, SLA, SLS" },
    { id: "agritech-food-technology", title: "Agritech & Food Technology", shortDescription: "Transforming agriculture and food production with technology for sustainability and efficiency.", detailedOverview: "Agritech and Food Technology integrate innovations like precision farming, IoT sensors, AI-driven analytics, vertical farming, and cellular agriculture to enhance crop yields, improve food quality, ensure supply chain transparency, and promote sustainable practices in response to global food security and climate challenges.", exploreLink: "/explore/agritech-food-technology", icon: <Wheat className="w-10 h-10 text-primary" />, imageHint: "farm modern technology", keywords: "Agritech, Food Tech, Precision Farming, Sustainable Agriculture, Cellular Agriculture" },
  ]
};

function getDomainData(slug: string) {
  const domain = technologyDomainsData.technologyDomains.find(d => d.id === slug);
  if (!domain) {
    return null;
  }

  // Illustrative placeholder data, enhanced for clarity
  const additionalData = {
    timeline: [
      { year: 'Concept Era', event: `Illustrative: Foundational ideas related to ${domain.title} begin to form. Early theoretical work explores possibilities.`, icon: <Lightbulb className="w-5 h-5 text-primary" /> },
      { year: 'Pioneering Developments', event: `Illustrative: Key experiments and early prototypes demonstrate the potential of ${domain.title}. First practical implementations appear in labs.`, icon: <FlaskConical className="w-5 h-5 text-primary" /> },
      { year: 'Growth & Adoption', event: `Illustrative: Significant R&D advancements in ${domain.title}. Wider research community forms, and initial industry interest grows.`, icon: <Milestone className="w-5 h-5 text-primary" /> },
      { year: 'Modern Era', event: `Illustrative: Current state-of-the-art applications of ${domain.title} show widespread impact. Ongoing innovation continues to push boundaries.`, icon: <CheckCircle className="w-5 h-5 text-green-500" /> },
    ],
    applications: [
      { name: `Key Application of ${domain.title} in Industry A`, description: `Illustrative: ${domain.title} is transforming Industry A by [specific example, e.g., 'improving diagnostic accuracy' or 'optimizing supply chains']. This leads to significant efficiency gains and new service possibilities.`, icon: <Zap className="w-5 h-5 text-accent" />, sector: 'Industry A' },
      { name: `Groundbreaking Use Case for ${domain.title} in Sector B`, description: `Illustrative: In Sector B, ${domain.title} enables [specific example, e.g., 'personalized consumer experiences' or 'sustainable manufacturing processes'], showcasing its versatility.`, icon: <Zap className="w-5 h-5 text-accent" />, sector: 'Sector B' },
      { name: `Emerging Consumer Application of ${domain.title}`, description: `Illustrative: ${domain.title} is starting to impact everyday consumer products through [specific example, e.g., 'smarter home devices' or 'enhanced entertainment'].`, icon: <Zap className="w-5 h-5 text-accent" />, sector: 'Consumer Tech' },
    ],
    leaders: [
      { name: `Leading Corp in ${domain.title}`, type: 'Leading Company (Illustrative)', focus: `Pioneering commercial applications and product development in ${domain.title}. Known for extensive R&D and market reach in this field.`, icon: <Building className="w-5 h-5 text-secondary-foreground" /> },
      { name: `Global Research Institute for ${domain.title.split(' ')[0]}`, type: 'Top Research Group (Illustrative)', focus: `Pushing the boundaries of fundamental ${domain.title} research. Publishes influential papers and collaborates internationally on ${domain.title} projects.`, icon: <Users className="w-5 h-5 text-secondary-foreground" /> },
      { name: `Open ${domain.title.split(' ')[0]} Standard Initiative`, type: 'Global Initiative (Illustrative)', focus: `Fostering collaboration, developing open standards, and addressing ethical considerations relevant to the ${domain.title} field.`, icon: <Users className="w-5 h-5 text-secondary-foreground" /> },
    ],
    futureTrends: [
      { trend: `Next-Gen Advancements in ${domain.title}`, description: `Illustrative: Expected breakthroughs in ${domain.title} focusing on [e.g., 'increased power and efficiency', 'novel integration methods', 'new material properties'].`, icon: <Lightbulb className="w-5 h-5 text-primary" /> },
      { trend: `Cross-Disciplinary Impact of ${domain.title}`, description: `Illustrative: Exploring how ${domain.title} will intersect with and revolutionize other fields like [e.g., 'healthcare', 'finance', 'education', 'environmental science'].`, icon: <Lightbulb className="w-5 h-5 text-primary" /> },
      { trend: `Societal & Ethical Evolution with ${domain.title}`, description: `Illustrative: Potential long-term, transformative possibilities and the evolving ethical landscape driven by advancements in ${domain.title}.`, icon: <Lightbulb className="w-5 h-5 text-primary" /> },
    ],
  };

  return { ...domain, ...additionalData };
}

export default function DomainDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  
  const dedicatedPages = [
    "artificial-intelligence", 
    "robotics-automation", 
    "quantum-computing", 
    "blockchain-web3", 
    "nanotechnology", 
    "bioengineering-genomics", 
    "ar-vr-metaverse", 
    "advanced-materials",
    "space-technology",
    "internet-of-things",
    "cybersecurity",
    "renewable-energy",
    "5g-next-gen-connectivity",
    "human-computer-interaction",
    "autonomous-vehicles",
    "data-science-big-data",
    "synthetic-biology",
    "wearable-health-tech",
    "edge-cloud-computing",
    "fintech",
    "smart-cities",
    "additive-manufacturing",
    "agritech-food-technology"
  ];

  if (dedicatedPages.includes(slug)) {
    return null; 
  }

  const domainData = getDomainData(slug);

  if (!domainData) {
    notFound();
  }
  
  const { title, detailedOverview, imageHint, timeline, applications, leaders, futureTrends, icon: domainIcon, shortDescription } = domainData;

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
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="p-3 bg-primary/10 rounded-lg">{domainIcon}</div>
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
            {title}
            </h1>
            <p className="text-lg text-muted-foreground mt-1">{shortDescription}</p>
            <Badge variant="outline" className="mt-2">Generic Overview Page</Badge>
          </div>
        </div>
      </header>

      <Section title="Comprehensive Overview" description={`Illustrative understanding of the core concepts and significance of ${title}. Dedicated pages offer more depth.`} className="bg-card rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-7 gap-8 items-center">
              <div className="md:col-span-4">
                <p className="text-base text-foreground leading-relaxed selection:bg-primary/20">
                     {detailedOverview}
                 </p>
                 <p className="text-sm text-muted-foreground mt-3 italic">
                    Note: This is a general overview. Specific sub-domains and cutting-edge research would be explored further on a dedicated page for {title}.
                 </p>
              </div>
             <div className="md:col-span-3">
                 <Image
                    src={`https://placehold.co/800x500.png`}
                    alt={`Visual representation of ${title}`}
                    width={800}
                    height={500}
                    className="object-cover w-full h-auto rounded-lg shadow-lg border border-border"
                    data-ai-hint={imageHint}
                    priority
                />
             </div>
          </div>
      </Section>

      <Section title="Illustrative Historical Timeline" titleIcon={<CalendarDays className="w-6 h-6 text-primary" />} description={`Key conceptual milestones in the development of ${title}.`} className="rounded-xl">
        <div className="relative pl-8 before:absolute before:inset-y-0 before:w-1 before:bg-border before:left-3.5 rounded-lg">
          {timeline.map((item, index) => (
            <div key={index} className="relative mb-8 last:mb-0 group">
               <div className="absolute -left-[calc(2.1rem-2px)] top-0 flex items-center justify-center w-10 h-10 bg-background rounded-full border-2 border-primary shadow-md group-hover:scale-110 transition-transform">
                 {item.icon || <Milestone className="w-5 h-5 text-primary"/>}
               </div>
              <div className="ml-6 p-4 border border-border rounded-lg bg-card hover:shadow-md transition-shadow">
                <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-1">{item.year}</p>
                <h4 className="text-md font-semibold text-foreground mb-1">{item.event}</h4>
              </div>
            </div>
          ))}
        </div>
      </Section>

       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <Section title="Illustrative Present Applications" titleIcon={<Zap className="w-6 h-6 text-primary" />} description={`Examples of how ${title} might be used today across various sectors.`} className="rounded-xl">
                <div className="space-y-6">
                    {applications.map((app, index) => (
                    <Card key={index} className="bg-secondary/50 hover:shadow-lg transition-shadow border-accent/30 rounded-lg">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-3">
                          {app.icon || <Zap className="w-5 h-5 text-accent"/>}
                          {app.name}
                        </CardTitle>
                        <CardDescription><Badge variant="outline">{app.sector}</Badge></CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{app.description}</p>
                      </CardContent>
                    </Card>
                    ))}
                </div>
            </Section>

            <Section title="Illustrative Key Players & Leaders" titleIcon={<Building className="w-6 h-6 text-primary" />} description={`Conceptual organizations that might shape the ${title} landscape.`} className="rounded-xl">
                 <div className="space-y-6">
                    {leaders.map((leader, index) => (
                        <Card key={index} className="bg-secondary/50 hover:shadow-lg transition-shadow border-secondary-foreground/20 rounded-lg">
                          <CardHeader>
                            <CardTitle className="text-lg flex items-center gap-3">
                                {leader.icon || (leader.type === 'Leading Company' ? <Building className="w-5 h-5 text-secondary-foreground"/> : <Users className="w-5 h-5 text-secondary-foreground"/>)}
                                <div>
                                  {leader.name}
                                  <span className="block text-xs font-normal text-muted-foreground mt-0.5">({leader.type})</span>
                                </div>
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground">{leader.focus}</p>
                          </CardContent>
                        </Card>
                    ))}
                </div>
            </Section>
       </div>

      <Section title="Illustrative Future Trends & Speculation" titleIcon={<Lightbulb className="w-6 h-6 text-primary" />} description={`What might be next for ${title}? Exploring potential advancements and impacts.`} className="rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {futureTrends.map((trend, index) => (
                <Card key={index} className="bg-card border-primary/20 hover:shadow-lg transition-shadow h-full flex flex-col rounded-lg">
                    <CardHeader className="pb-3">
                        <CardTitle className="text-lg font-semibold flex items-center gap-2">
                           {trend.icon || <Lightbulb className="w-5 h-5 text-primary"/>}
                            {trend.trend}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-sm text-muted-foreground">{trend.description}</p>
                    </CardContent>
                     <CardFooter className="pt-4 border-t border-border">
                        <Button variant="link" size="sm" className="p-0 h-auto text-xs text-primary/80 hover:text-primary">
                            Speculate More (Placeholder) <ArrowRight className="ml-1 h-3 w-3"/>
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
         <div className="mt-8 border-t border-border pt-6 text-center">
            <p className="text-md text-muted-foreground">
                The journey of {title} is ongoing. Further research and potential societal impacts are continuously evolving. For more specific details, dedicated exploration pages are the primary resource.
            </p>
             <Link href="/research" passHref legacyBehavior>
                <Button variant="link" className="mt-2 text-primary">Explore Related Research <ArrowRight className="ml-2 h-4 w-4"/></Button>
            </Link>
        </div>
      </Section>
    </div>
  );
}


export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const domainData = getDomainData(params.slug);

  if (!domainData) {
    return {
        title: 'Technology Domain | Innovation Hub Explorer',
        description: 'Explore various technology domains and their impact.',
    };
  }

  const { title, shortDescription, keywords: domainKeywords, exploreLink } = domainData;
  const fullTitle = `${title} | Technology Domain`;
  const description = `Explore ${title}: ${shortDescription} Delve into its illustrative history, applications, key players, and future trends.`;
  const keywords = domainKeywords ? `${domainKeywords}, technology, innovation, ${title}` : `technology, innovation, ${title}`;

  return {
    title: fullTitle,
    description: description,
    keywords: keywords.split(', '), 
    openGraph: {
      title: fullTitle,
      description: description,
      url: exploreLink, 
    },
    twitter: {
      title: fullTitle,
      description: description,
    },
    alternates: {
      canonical: exploreLink,
    },
  };
}

export async function generateStaticParams() {
  const dedicatedPages = [
    "artificial-intelligence", 
    "robotics-automation", 
    "quantum-computing", 
    "blockchain-web3", 
    "nanotechnology", 
    "bioengineering-genomics", 
    "ar-vr-metaverse", 
    "advanced-materials",
    "space-technology",
    "internet-of-things",
    "cybersecurity",
    "renewable-energy",
    "5g-next-gen-connectivity",
    "human-computer-interaction",
    "autonomous-vehicles",
    "data-science-big-data",
    "synthetic-biology",
    "wearable-health-tech",
    "edge-cloud-computing",
    "fintech",
    "smart-cities",
    "additive-manufacturing",
    "agritech-food-technology"
  ];
  return technologyDomainsData.technologyDomains
    .filter(domain => !dedicatedPages.includes(domain.id))
    .map((domain) => ({
      slug: domain.id,
    }));
}
    
