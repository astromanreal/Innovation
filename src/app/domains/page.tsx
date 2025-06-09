
import { Section } from '@/components/Section';
import { Cpu, Bot, Atom, Blocks, Dna, MonitorSmartphone, BrainCircuit, Link as LinkIcon, Telescope, Satellite, Layers, ArrowRight, Wifi, ShieldCheck, Leaf, Sun, Wind, Signal, Handshake, Car, DatabaseZap, Wand2, Watch, HeartPulse, Cloud, Server, DollarSign, Building2, Printer, Tractor, Sprout, Wheat, Wrench, Rocket, Network, Grid } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import type { Metadata } from 'next';

const technologyDomainsData = {
  technologyDomains: [
    {
      id: "artificial-intelligence",
      title: "Artificial Intelligence",
      shortDescription: "Exploring machine learning, neural networks, and cognitive computing frontiers.",
      detailedOverview: "Dive into the evolution of Artificial Intelligence — from early expert systems to deep learning architectures and generative AI. Understand how machine learning algorithms mimic human cognition and how neural networks are powering automation in healthcare, finance, education, and more. Discover the ethics, limitations, and the roadmap toward Artificial General Intelligence (AGI).",
      exploreLink: "/explore/artificial-intelligence",
      icon: <BrainCircuit className="w-8 h-8 text-primary" />,
      imageUrl: "https://i.pinimg.com/736x/06/f5/79/06f5790766e1cb40f82fcfac22c75cad.jpg",
    },
    {
      id: "robotics-automation",
      title: "Robotics & Automation",
      shortDescription: "Advancements in automated systems, industrial robots, and human-robot collaboration.",
      detailedOverview: "Explore the rapidly advancing world of robotics, including autonomous vehicles, industrial automation, robotic surgery, and swarm robotics. Learn how robotics and AI are converging to create intelligent machines that collaborate with humans in manufacturing, logistics, and everyday life.",
      exploreLink: "/explore/robotics-automation",
      icon: <Bot className="w-8 h-8 text-primary" />,
      imageUrl: "https://i.pinimg.com/736x/e8/c0/d7/e8c0d7fba6aa12ba9fc682afae585c26.jpg",
    },
    {
      id: "quantum-computing",
      title: "Quantum Computing",
      shortDescription: "Harnessing quantum mechanics for next-generation computation and simulation.",
      detailedOverview: "Quantum computing is set to revolutionize problem-solving by leveraging superposition and entanglement. Discover breakthroughs from qubits and quantum supremacy to quantum cryptography and simulation of complex systems in chemistry and physics. Explore both hardware and software developments, and global race toward usable quantum processors.",
      exploreLink: "/explore/quantum-computing",
      icon: <Atom className="w-8 h-8 text-primary" />,
      imageUrl: "https://i.pinimg.com/736x/12/cd/ad/12cdad632c149e5f599dcaa96455849d.jpg",
    },
    {
      id: "blockchain-web3",
      title: "Blockchain & Web3",
      shortDescription: "Decentralized ledgers, smart contracts, and the future of the internet.",
      detailedOverview: "Delve into the decentralized world of blockchain technology, from the rise of cryptocurrencies to smart contracts, DeFi, and DAOs. Explore how Web3 reimagines the internet with transparency, user sovereignty, and peer-to-peer interaction at its core. Understand governance models, scalability issues, and the transition from Web2 to Web3.",
      exploreLink: "/explore/blockchain-web3",
      icon: <Blocks className="w-8 h-8 text-primary" />,
      imageUrl: "https://i.pinimg.com/736x/a1/50/b7/a150b7f52164212512b812276d9b93dd.jpg",
    },
    {
      id: "nanotechnology",
      title: "Nanotechnology",
      shortDescription: "Engineering materials and devices at the atomic and molecular scale.",
      detailedOverview: "Nanotechnology is transforming materials science, medicine, and electronics. Learn how manipulation at the nanoscale enables the creation of smart materials, drug delivery systems, and nano-electronics. Discover real-world applications like nanosensors, nanomedicine, and nano-coatings that enhance performance and durability.",
      exploreLink: "/explore/nanotechnology",
      icon: <Telescope className="w-8 h-8 text-primary" />, 
      imageUrl: "https://i.pinimg.com/736x/64/fd/6e/64fd6e92b72cde1c3e5664e7a1e988f3.jpg",
    },
    {
      id: "bioengineering-genomics",
      title: "Bioengineering & Genomics",
      shortDescription: "Merging biology with engineering, gene editing (like CRISPR), and synthetic life.",
      detailedOverview: "Bioengineering combines life sciences and technology to solve biological challenges. Discover advancements in CRISPR gene editing, synthetic biology, tissue engineering, and genomics. Learn how personalized medicine and bio-computing are reshaping healthcare and evolution.",
      exploreLink: "/explore/bioengineering-genomics",
      icon: <Dna className="w-8 h-8 text-primary" />,
      imageUrl: "https://i.pinimg.com/736x/e5/48/ca/e548ca03bb912f3fc85d4c612fdb3cfd.jpg",
    },
    {
      id: "ar-vr-metaverse",
      title: "AR/VR & Metaverse",
      shortDescription: "Creating immersive digital experiences, virtual worlds, and spatial computing.",
      detailedOverview: "Augmented Reality (AR) and Virtual Reality (VR) are redefining how we interact with information and environments. Explore technologies enabling the Metaverse — immersive platforms where digital avatars, virtual economies, and real-time collaboration coexist. Learn about gaming, simulation, remote work, and education applications.",
      exploreLink: "/explore/ar-vr-metaverse",
      icon: <MonitorSmartphone className="w-8 h-8 text-primary" />,
      imageUrl: "https://i.pinimg.com/736x/eb/f4/c6/ebf4c6fe6b15f7b4d96fb7f59a0712ba.jpg",
    },
    {
      id: "advanced-materials",
      title: "Advanced Materials",
      shortDescription: "Developing novel materials with unique properties for various applications.",
      detailedOverview: "Advanced materials research focuses on materials with extraordinary mechanical, electrical, or biological properties. Explore innovations in graphene, smart textiles, biomaterials, superconductors, and meta-materials, and how they’re applied in clean energy, aerospace, medicine, and construction.",
      exploreLink: "/explore/advanced-materials",
      icon: <Layers className="w-8 h-8 text-primary" />,
      imageUrl: "https://i.pinimg.com/736x/8e/21/60/8e2160722971313a942890107503576e.jpg",
    },
    {
      id: "space-technology",
      title: "Space Technology",
      shortDescription: "Innovations in satellite tech, reusable rockets, and space exploration.",
      detailedOverview: "Explore humanity’s quest to expand its reach into space. From reusable rockets and satellite mega-constellations to space mining and Mars colonization, this section covers the technologies fueling the new space race. Learn how agencies and private companies like NASA, ISRO, SpaceX, and Blue Origin are shaping interplanetary ambitions.",
      exploreLink: "/explore/space-technology",
      icon: <Satellite className="w-8 h-8 text-primary" />,
      imageUrl: "https://i.pinimg.com/736x/0b/ad/76/0bad76ab3862413a4ae861b7f55d4313.jpg",
    },
    {
      id: "internet-of-things",
      title: "Internet of Things (IoT)",
      shortDescription: "Connecting everyday devices for smart environments and automation.",
      detailedOverview: "The Internet of Things (IoT) connects physical devices to the internet, enabling them to collect and exchange data. This network of sensors, appliances, and machines drives smart homes, industrial automation, connected healthcare, and smart cities, transforming how we interact with our surroundings.",
      exploreLink: "/explore/internet-of-things",
      icon: <Wifi className="w-8 h-8 text-primary" />,
      imageUrl: "https://i.pinimg.com/736x/f1/86/50/f1865099f611ff49c57363e8ea788fe7.jpg",
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity",
      shortDescription: "Protecting digital infrastructure, data, and privacy from evolving cyber threats.",
      detailedOverview: "Cybersecurity encompasses technologies, processes, and practices designed to protect networks, devices, programs, and data from attack, damage, or unauthorized access. It's crucial for safeguarding businesses, governments, and individuals in an increasingly connected world.",
      exploreLink: "/explore/cybersecurity",
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      imageUrl: "https://i.pinimg.com/736x/e6/ec/86/e6ec86d140147e8dc72514dbd2af546f.jpg",
    },
    {
      id: "renewable-energy",
      title: "Renewable & Clean Energy",
      shortDescription: "Innovations in solar, wind, energy storage, smart grids, and green hydrogen.",
      detailedOverview: "Dive into the technologies powering a sustainable future, from solar and wind generation to advanced energy storage solutions, smart grid management, and the production and utilization of green hydrogen. Explore how these innovations are addressing climate change and reshaping global energy markets.",
      exploreLink: "/explore/renewable-energy",
      icon: <Leaf className="w-8 h-8 text-primary" />,
      imageUrl: "https://i.pinimg.com/736x/e0/96/32/e09632de56a5e4f061b5f4aff329662c.jpg",
    },
    {
      id: "5g-next-gen-connectivity",
      title: "5G & Next-Gen Connectivity",
      shortDescription: "Ultra-fast, low-latency wireless communication for a connected future.",
      detailedOverview: "Explore the transformative capabilities of 5G networks, including enhanced mobile broadband, massive IoT connectivity, and ultra-reliable low-latency communications. Discover how 5G and emerging 6G concepts are enabling smart cities, autonomous vehicles, advanced healthcare, and industrial automation.",
      exploreLink: "/explore/5g-next-gen-connectivity",
      icon: <Signal className="w-8 h-8 text-primary" />,
      imageUrl: "https://i.pinimg.com/736x/de/3b/bf/de3bbf058390bc9c5e30e01dd733bbc1.jpg",
    },
    {
      id: "human-computer-interaction",
      title: "Human-Computer Interaction (HCI)",
      shortDescription: "Designing intuitive interfaces beyond traditional inputs: voice, gesture, BCI.",
      detailedOverview: "Human-Computer Interaction (HCI) is the interdisciplinary field focusing on the design and use of computer technology, particularly the interfaces between people (users) and computers. It explores how users interact with machines through modalities like voice, gesture, touch, and even brain signals, aiming to make technology more usable, accessible, and engaging across various platforms.",
      exploreLink: "/explore/human-computer-interaction",
      icon: <Handshake className="w-8 h-8 text-primary" />,
      imageUrl: "https://i.pinimg.com/736x/c4/9a/41/c49a41bf1a457ecd8f04c96660d2bf9f.jpg",
    },
    {
      id: "autonomous-vehicles",
      title: "Autonomous Vehicles",
      shortDescription: "AI-driven cars, drones, and transport systems reshaping mobility.",
      detailedOverview: "Explore self-driving cars, delivery drones, and other autonomous transport systems that use AI and sensor technologies to navigate and operate without direct human control. Learn about their potential to reduce accidents, traffic congestion, emissions, and transform urban mobility.",
      exploreLink: "/explore/autonomous-vehicles",
      icon: <Car className="w-8 h-8 text-primary" />,
      imageUrl: "https://i.pinimg.com/736x/ed/37/e5/ed37e50e8bd1bd720c9505d6a4c0c534.jpg",
    },
    {
      id: "data-science-big-data",
      title: "Data Science & Big Data Analytics",
      shortDescription: "Extracting insights from massive datasets using AI and statistical methods.",
      detailedOverview: "Data Science combines math, statistics, programming, and domain knowledge to analyze large-scale data. Big Data Analytics processes vast, diverse datasets for pattern discovery and real-time decisions, powering forecasts, personalization, and strategic planning across industries.",
      exploreLink: "/explore/data-science-big-data",
      icon: <DatabaseZap className="w-8 h-8 text-primary" />,
      imageUrl: "https://i.pinimg.com/736x/e8/63/0b/e8630b4f5628033ef0e2fbab834a05fd.jpg",
    },
    {
      id: "synthetic-biology",
      title: "Synthetic Biology",
      shortDescription: "Designing and constructing new biological parts, devices, and systems.",
      detailedOverview: "Synthetic Biology applies engineering principles to biology, aiming to create new biological systems or re-design existing ones for useful purposes. It involves DNA synthesis, genetic circuit design, and has applications in medicine, materials, and sustainable energy.",
      exploreLink: "/explore/synthetic-biology",
      icon: <Dna className="w-8 h-8 text-primary" />, 
      imageUrl: "https://i.pinimg.com/736x/36/9a/fb/369afb5fe2e4034f97d9922ab06f26c2.jpg",
    },
    {
      id: "wearable-health-tech",
      title: "Wearable Technology & Health Tech",
      shortDescription: "Devices and systems for personalized health monitoring, therapy, and wellness.",
      detailedOverview: "Explore how wearable sensors, smart devices, and health tech platforms are revolutionizing personalized healthcare, enabling continuous health monitoring, digital therapeutics, telemedicine, and proactive wellness management through real-time data and AI-driven insights.",
      exploreLink: "/explore/wearable-health-tech",
      icon: <Watch className="w-8 h-8 text-primary" />,
      imageUrl: "https://i.pinimg.com/736x/af/e3/9e/afe39ea74448424b5071bdd437e67577.jpg",
    },
    {
      id: "edge-cloud-computing",
      title: "Edge & Cloud Computing",
      shortDescription: "Distributed architectures powering digital services from centralized clouds to the network fringe.",
      detailedOverview: "Cloud computing provides centralized resources over the internet, while edge computing brings processing closer to data sources. Together, they enable scalable, efficient solutions for IoT, real-time analytics, AI inference, and latency-sensitive applications, forming the backbone of modern digital infrastructure.",
      exploreLink: "/explore/edge-cloud-computing",
      icon: <Layers className="w-8 h-8 text-primary" />,
      imageUrl: "https://i.pinimg.com/736x/ae/70/96/ae7096e8c42185fbc1eda6b54eefa4f8.jpg",
    },
    {
      id: "fintech",
      title: "Financial Technology (FinTech)",
      shortDescription: "Innovating financial services with technology for payments, lending, investing, and more.",
      detailedOverview: "FinTech combines finance and technology to create efficient, accessible, and user-friendly financial services. It disrupts traditional banking with digital payments, neobanks, AI-driven lending, blockchain solutions like DeFi, and regulatory technology (RegTech).",
      exploreLink: "/explore/fintech",
      icon: <DollarSign className="w-8 h-8 text-primary" />,
      imageUrl: "https://i.pinimg.com/736x/fc/a0/b3/fca0b319c3414d9901173b6166e45785.jpg",
    },
    {
      id: "smart-cities",
      title: "Smart Cities & Urban Tech",
      shortDescription: "Integrating advanced technologies to improve urban life, infrastructure, and sustainability.",
      detailedOverview: "Smart Cities leverage IoT, data analytics, and digital platforms to create efficient, safe, and sustainable urban environments. This domain focuses on optimizing resources, traffic, energy, and public services, enhancing citizen engagement and fostering resilient city growth.",
      exploreLink: "/explore/smart-cities",
      icon: <Building2 className="w-8 h-8 text-primary" />,
      imageUrl: "https://i.pinimg.com/736x/21/e2/25/21e225b94e212c701c5ff5876675b6cc.jpg",
    },
    {
      id: "additive-manufacturing",
      title: "Additive Manufacturing (3D Printing)",
      shortDescription: "Creating objects layer by layer directly from digital models, transforming design and production.",
      detailedOverview: "Additive Manufacturing, commonly known as 3D Printing, revolutionizes how objects are created. By adding material layer by layer from digital designs, it enables complex geometries, rapid prototyping, on-demand production, and material efficiency across industries like aerospace, healthcare, and consumer goods.",
      exploreLink: "/explore/additive-manufacturing",
      icon: <Layers className="w-8 h-8 text-primary" />,
      imageUrl: "https://i.pinimg.com/736x/52/07/86/52078690761c224ef52d097b83b6ea5b.jpg",
    },
    {
      id: "agritech-food-technology",
      title: "Agritech & Food Technology",
      shortDescription: "Transforming agriculture and food production with technology for sustainability and efficiency.",
      detailedOverview: "Agritech and Food Technology integrate innovations like precision farming, IoT sensors, AI-driven analytics, vertical farming, and cellular agriculture to enhance crop yields, improve food quality, ensure supply chain transparency, and promote sustainable practices in response to global food security and climate challenges.",
      exploreLink: "/explore/agritech-food-technology",
      icon: <Wheat className="w-8 h-8 text-primary" />,
      imageUrl: "https://i.pinimg.com/736x/0c/5b/21/0c5b21181c1f9f7bb684995d6e672f69.jpg",
    },
  ]
};

const categorizedTechnologyDomains = [
  {
    categoryTitle: "Foundational Computing",
    categoryDescription: "Powering intelligence, computation, and data-driven breakthroughs.",
    categoryIcon: <Cpu className="w-7 h-7 text-primary" />,
    domainIds: ["artificial-intelligence", "quantum-computing", "edge-cloud-computing", "data-science-big-data"]
  },
  {
    categoryTitle: "Engineering & Fabrication",
    categoryDescription: "Building the future with smarter machines and revolutionary materials.",
    categoryIcon: <Layers className="w-7 h-7 text-primary" />,
    domainIds: ["robotics-automation", "additive-manufacturing", "nanotechnology", "advanced-materials"]
  },
  {
    categoryTitle: "Bio & Health Tech",
    categoryDescription: "Blending life sciences with cutting-edge technology for human well-being.",
    categoryIcon: <HeartPulse className="w-7 h-7 text-primary" />,
    domainIds: ["bioengineering-genomics", "synthetic-biology", "wearable-health-tech"]
  },
  {
    categoryTitle: "Energy & Environment",
    categoryDescription: "Innovating for a sustainable, resilient, and greener planet.",
    categoryIcon: <Leaf className="w-7 h-7 text-primary" />,
    domainIds: ["renewable-energy", "agritech-food-technology", "smart-cities"]
  },
  {
    categoryTitle: "Connectivity & Infrastructure",
    categoryDescription: "Enabling a hyperconnected digital world.",
    categoryIcon: <Wifi className="w-7 h-7 text-primary" />,
    domainIds: ["internet-of-things", "5g-next-gen-connectivity", "blockchain-web3"]
  },
  {
    categoryTitle: "UX & Immersive Tech",
    categoryDescription: "Redefining how we interact with machines, data, and digital worlds.",
    categoryIcon: <Handshake className="w-7 h-7 text-primary" />,
    domainIds: ["human-computer-interaction", "ar-vr-metaverse"]
  },
  {
    categoryTitle: "Mobility & Space",
    categoryDescription: "Transforming how we move—on Earth and beyond.",
    categoryIcon: <Rocket className="w-7 h-7 text-primary" />,
    domainIds: ["autonomous-vehicles", "space-technology"]
  },
  {
    categoryTitle: "Finance & Cybersecurity",
    categoryDescription: "Securing the digital world and revolutionizing financial systems.",
    categoryIcon: <ShieldCheck className="w-7 h-7 text-primary" />,
    domainIds: ["fintech", "cybersecurity"]
  }
];

export const metadata: Metadata = {
  title: 'Technology Domains',
  description: 'Explore key technology domains like AI, Robotics, Quantum Computing, Blockchain, Nanotechnology, Bioengineering, AR/VR, Advanced Materials, Space Technology, Cybersecurity, Internet of Things (IoT), Renewable Energy, 5G & Next-Gen Connectivity, Human-Computer Interaction (HCI), Autonomous Vehicles, Data Science & Big Data Analytics, Synthetic Biology, Edge & Cloud Computing, FinTech, Smart Cities & Urban Tech, Additive Manufacturing (3D Printing), Agritech & Food Technology, and Wearable Technology & Health Tech, organized by transformative categories.',
  keywords: technologyDomainsData.technologyDomains.map(d => d.title).join(', ') + ', technology categories, innovation',
  openGraph: {
    title: 'Technology Domain Categories | Innovation Hub Explorer',
    description: 'Discover and explore a wide range of pivotal technology domains shaping our future.',
    url: '/domains',
  },
  twitter: {
    title: 'Technology Domain Categories | Innovation Hub Explorer',
    description: 'Explore key technology domains and their impact.',
  },
  alternates: {
    canonical: '/domains',
  },
};


export default function DomainsPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <header className="text-center mb-12 md:mb-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-primary flex items-center justify-center gap-2">
          <Grid className="w-10 h-10" /> Explore by Innovation Category
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Technology is reshaping our world across every frontier—from computing and biology to energy and space. Dive into the core technology domains, organized by the transformative categories driving the future.
        </p>
      </header>

      <div className="space-y-12 md:space-y-16">
        {categorizedTechnologyDomains.map((category) => {
          const domainsInCategory = technologyDomainsData.technologyDomains.filter(domain => 
            category.domainIds.includes(domain.id)
          );

          if (domainsInCategory.length === 0) return null;

          return (
            <Section 
              key={category.categoryTitle} 
              title={category.categoryTitle} 
              titleIcon={category.categoryIcon}
              description={category.categoryDescription}
              className="bg-card border-border rounded-xl shadow-sm"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {domainsInCategory.map((domain) => (
                  <Card key={domain.id} className="flex flex-col bg-background border-border hover:shadow-xl hover:border-primary/40 transition-all duration-300 ease-in-out group overflow-hidden rounded-lg">
                    <div className="relative w-full h-48 overflow-hidden">
                      <Image
                        src={domain.imageUrl}
                        alt={`${domain.title} abstract visual representation`}
                        width={600}
                        height={300}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-in-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                    <CardHeader className="pt-4">
                        <div className="mb-2">{domain.icon}</div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                            {domain.title}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {domain.shortDescription}
                      </p>
                    </CardContent>
                    <CardFooter className="mt-auto pt-4 border-t border-border">
                      <Link href={domain.exploreLink} passHref legacyBehavior>
                        <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          Explore {domain.title}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </Section>
          );
        })}
      </div>
    </div>
  );
}
    

    











