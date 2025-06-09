
import Image from 'next/image';
import Link from 'next/link';
import {
  Blocks, Milestone, Lightbulb, Rocket, Brain, DollarSign, Home, Building, Users, Globe, Puzzle, ShieldCheck, Landmark,
  Dna, Scale, BookOpen, Rss, ArrowLeft, ExternalLink, Info as InfoIcon, CheckCircle, Cpu, DatabaseZap, Link as LinkIconLucide, Flag, ShieldAlert, FlaskConical, GraduationCap
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
  title: 'Blockchain & Web3 Deep Dive | Innovation Hub Explorer',
  description: 'Explore decentralized ledgers, smart contracts, DeFi, DAOs, NFTs, and the future of a user-owned internet. Delve into history, applications, key players, trends, and ethical considerations of Blockchain and Web3.',
  keywords: ['Blockchain', 'Web3', 'Decentralization', 'Smart Contracts', 'DeFi', 'DAO', 'NFT', 'Cryptocurrency', 'Ethereum', 'IPFS', 'Distributed Ledger Technology', 'User-Owned Internet'],
  openGraph: {
    title: 'Blockchain & Web3 Deep Dive | Innovation Hub Explorer',
    description: 'Unpacking the technologies behind a decentralized, user-sovereign internet, including smart contracts, DeFi, DAOs, and NFTs.',
    url: '/explore/blockchain-web3',
    images: [
      {
        url: '/og-blockchain-web3.png',
        width: 1200,
        height: 630,
        alt: 'Blockchain and Web3 Abstract Visualization',
      },
    ],
  },
  twitter: {
    title: 'Blockchain & Web3 Deep Dive Explained',
    description: 'Exploring the future of the internet with blockchain technology, DeFi, NFTs, and Web3 principles.',
    images: ['/og-blockchain-web3.png'],
  },
  alternates: {
    canonical: '/explore/blockchain-web3',
  },
};


const historicalTimelineData = [
  {
    id: 'bw_ht1',
    era: 'Concept Era',
    yearRange: '1990s–2008',
    title: 'Cryptographic Chains & Early Ideas',
    description: 'Stuart Haber & W. Scott Stornetta propose a cryptographically secured chain of blocks (1991). Concepts like "b-money" and "Bit Gold" explore decentralized digital currencies (1998). Satoshi Nakamoto publishes the Bitcoin whitepaper (2008).',
    icon: <Lightbulb className="w-5 h-5 text-primary" />,
  },
  {
    id: 'bw_ht2',
    era: 'Pioneering Developments',
    yearRange: '2009–2015',
    title: 'Bitcoin Launch & Ethereum Emergence',
    description: 'Bitcoin network launches with the first block mined (2009). Ethereum is proposed and subsequently launched, introducing smart contract capabilities (2013–2015). Altcoins like Litecoin and Ripple appear, alongside early cryptocurrency exchanges.',
    icon: <Cpu className="w-5 h-5 text-primary" />,
  },
  {
    id: 'bw_ht3',
    era: 'Growth & Adoption',
    yearRange: '2016–2020',
    title: 'ICO Boom, Layer 2 & DeFi',
    description: 'The Initial Coin Offering (ICO) boom (2017) popularizes blockchain project crowdfunding. Development of Layer 2 scaling solutions (e.g., Plasma, Lightning Network) begins. Early DeFi protocols (e.g., MakerDAO, Compound) are introduced. NFT and DAO concepts mature.',
    icon: <Rocket className="w-5 h-5 text-primary" />,
  },
  {
    id: 'bw_ht4',
    era: 'Modern Era',
    yearRange: '2021–Present',
    title: 'NFT Explosion, Web3 Protocols & Scalability',
    description: 'NFTs gain mainstream attention via digital art and gaming (2021). Web3 protocols like IPFS, Filecoin, and Lens Protocol gain traction. Ethereum transitions to Proof of Stake (The Merge), improving energy efficiency. Rise of modular chains, zero-knowledge proofs, and sophisticated on-chain governance. Major brands and governments explore blockchain.',
    icon: <Brain className="w-5 h-5 text-primary" />,
  },
];

const presentApplicationsData = [
  {
    sector: 'Finance & Banking',
    icon: <DollarSign className="w-7 h-7 text-primary" />,
    examples: [
      'DeFi Platforms offer borrowing, lending, and staking without traditional banks.',
      'Stablecoins (e.g., USDC, DAI) enable on-chain transactions with minimal volatility.',
      'Tokenized assets and cross-border settlements are becoming efficient and secure.'
    ],
  },
  {
    sector: 'Healthcare & Data Privacy',
    icon: <Dna className="w-7 h-7 text-primary" />,
    examples: [
      'Blockchain enables patient-owned health records with granular access controls.',
      'Verifiable clinical trials and tamper-proof data logs improve transparency.',
      'DAOs organize rare disease communities for research and funding.'
    ],
  },
  {
    sector: 'Consumer Tech – Ownership & Identity',
    icon: <Home className="w-7 h-7 text-primary" />,
    examples: [
      'Decentralized identity (DID) wallets like MetaMask and Lens Profiles.',
      'NFTs in gaming allow asset portability and resale across ecosystems.',
      'Creators monetize directly through smart contracts and royalty automation.'
    ],
  }
];

const keyPlayersData = {
  industryLeaders: [
    { name: 'Innovatech Corp (Conceptual)', focus: 'Champions Web3 interoperability and enterprise-grade blockchain solutions. Offers cross-chain APIs, NFT infrastructure, and DeFi integration kits.', icon: <Building className="w-5 h-5 text-primary"/> },
    { name: 'Ethereum Foundation', focus: 'Supports the development and stewardship of the Ethereum protocol and ecosystem.', icon: <Blocks className="w-5 h-5 text-primary"/> },
    { name: 'Chainlink Labs', focus: 'Develops decentralized oracle networks connecting smart contracts to real-world data.', icon: <LinkIconLucide className="w-5 h-5 text-primary"/> },
  ],
  researchInstitutions: [
    { name: 'Global Research Institute for Distributed Systems (Conceptual)', focus: 'Explores cutting-edge cryptography (e.g., zk-SNARKs, homomorphic encryption), blockchain scalability, and digital democracy models. Known for publishing breakthrough papers on Layer 1 consensus mechanisms.', icon: <FlaskConical className="w-5 h-5 text-primary"/> },
    { name: 'IC3 (Initiative for Cryptocurrencies and Contracts)', focus: 'Academic research initiative across multiple universities.', icon: <GraduationCap className="w-5 h-5 text-primary"/> },
  ],
  globalInitiatives: [
    { name: 'Open Web3 Standards Consortium (Conceptual)', focus: 'Coordinates open protocols for wallets, bridges, and identity systems. Collaborates on ethics in algorithmic governance and transparency in DAO structures.', icon: <Globe className="w-5 h-5 text-primary"/> },
    { name: 'Hyperledger Foundation', focus: 'Hosts enterprise-grade blockchain software projects and tools.', icon: <Users className="w-5 h-5 text-primary"/> },
  ],
};

const futureTrendsData = [
    { title: 'Modular Blockchains', description: 'Specialized chains for execution, settlement, and data availability (e.g., Celestia, Avail) for enhanced scalability.', icon: <Blocks className="w-7 h-7 text-primary"/> },
    { title: 'ZK-Rollups & Privacy Tech', description: 'Zero-Knowledge proofs for scalable and private transactions and computations on blockchains.', icon: <ShieldCheck className="w-7 h-7 text-primary"/> },
    { title: 'Quantum-Safe Cryptography', description: 'Developing cryptographic algorithms resistant to potential attacks from future quantum computers.', icon: <Puzzle className="w-7 h-7 text-primary"/> },
    { title: 'AI–Web3 Integration', description: 'AI agents interacting with smart contracts, decentralized data markets, and AI-powered DAOs.', icon: <Brain className="w-7 h-7 text-primary"/> },
    { title: 'Real-World Asset Tokenization (RWA)', description: 'Bringing traditional assets like real estate, art, and commodities onto the blockchain for liquidity and fractional ownership.', icon: <Landmark className="w-7 h-7 text-primary"/> },
    { title: 'Decentralized Social Media (DeSo)', description: 'User-owned social graphs, censorship-resistant platforms, and new monetization models for creators (e.g., Lens Protocol, Farcaster).', icon: <Users className="w-7 h-7 text-primary"/> },
];

const ethicalSocietalData = [
  { title: 'Redefinition of Digital Property', description: 'NFTs and Web3 challenge traditional notions of ownership and intellectual property in the digital realm.', icon: <Scale className="w-5 h-5 text-destructive" /> },
  { title: 'Financial Inclusion & Sovereignty', description: 'DeFi aims to provide permissionless financial services, potentially empowering unbanked populations but also introducing new risks.', icon: <DollarSign className="w-5 h-5 text-destructive" /> },
  { title: 'Regulatory Challenges', description: 'Governments worldwide grapple with regulating cryptocurrencies, DeFi, and DAOs, balancing innovation with consumer protection and financial stability.', icon: <Building className="w-5 h-5 text-destructive" /> },
  { title: 'Scalability & User Experience', description: 'Overcoming technical hurdles in transaction speed, cost, and ease-of-use is crucial for mass adoption of Web3 technologies.', icon: <Cpu className="w-5 h-5 text-destructive" /> },
  { title: 'Misuse & Scams', description: 'The decentralized and often anonymous nature of Web3 can be exploited for illicit activities, requiring robust security measures and user education.', icon: <ShieldAlert className="w-5 h-5 text-destructive" /> },
];

const exploreFurtherData = [
  { name: "Ethereum.org", url: "https://ethereum.org/", imageHint: "ethereum logo official" },
  { name: "Web3 Foundation", url: "https://web3.foundation/", imageHint: "web3 foundation logo" },
  { name: "Chainlink Research", url: "https://research.chain.link/", imageHint: "chainlink research logo" },
  { name: "Gitcoin DAO", url: "https://gitcoin.co/", imageHint: "gitcoin logo community" },
];


export default function BlockchainWeb3Page() {
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
          <Blocks className="w-16 h-16 md:w-20 md:h-20 text-primary mx-auto md:mx-0 flex-shrink-0" />
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
              Blockchain & Web3
            </h1>
            <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto md:mx-0">
              Redefining Trust and Ownership in the Digital Age. Exploring decentralized ledgers, smart contracts, and the future of an interoperable, user-sovereign internet.
            </p>
          </div>
        </div>
      </header>

      <Section title="Comprehensive Overview" titleIcon={<InfoIcon className="w-6 h-6 text-primary"/>} description="Empowering users with sovereignty through cryptographic security and decentralized systems." className="bg-muted/30">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
                <p className="text-base text-muted-foreground mb-4">
                    Blockchain and Web3 technologies decentralize control of data, assets, and identity. They empower users with sovereignty through **cryptographically secure ledgers**, **smart contracts**, and **decentralized autonomous organizations (DAOs)**. Web3 envisions a **transparent**, **permissionless**, and **interoperable** internet ecosystem where value can be exchanged natively and securely without intermediaries.
                </p>
                <h4 className="font-semibold text-md text-primary mb-2">Core elements include:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    <li>Immutable records for trustless transactions (Blockchain ledgers)</li>
                    <li>Programmable, self-executing agreements (Smart contracts)</li>
                    <li>Peer-to-peer financial services (Decentralized finance - DeFi)</li>
                    <li>Community-governed protocols and organizations (DAOs)</li>
                    <li>Unique digital assets verified by blockchain (NFTs)</li>
                    <li>User-owned digital presence (Web3 Identity & Wallets)</li>
                </ul>
            </div>
            <Image src="https://placehold.co/600x400.png" alt="Abstract visualization of Blockchain network and Web3 concepts" width={600} height={400} className="rounded-md object-cover w-full shadow-lg border border-border" data-ai-hint="blockchain network web3" />
        </div>
      </Section>

      <Section title="Historical Timeline" titleIcon={<Milestone className="w-6 h-6 text-primary"/>} description="Key milestones tracing the evolution of Blockchain and Web3.">
        <Accordion type="single" collapsible className="w-full space-y-3">
          {historicalTimelineData.map((item) => (
            <AccordionItem key={item.id} value={item.id} className="border-none">
              <Card className="overflow-hidden border-border hover:border-primary/30 transition-colors duration-300">
                <AccordionTrigger className="p-4 hover:bg-accent/10 hover:no-underline [&[data-state=open]]:bg-accent/20 w-full rounded-t-md text-left">
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <div>
                      <h4 className="text-md font-semibold text-primary">{item.title} ({item.yearRange})</h4>
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

      <Section title="Present-Day Applications" titleIcon={<CheckCircle className="w-6 h-6 text-primary"/>} description="How Blockchain & Web3 are being utilized across various sectors today.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {presentApplicationsData.map((app_sector) => (
            <Card key={app_sector.sector} className="flex flex-col h-full hover:shadow-lg transition-shadow group bg-card">
              <CardHeader className="items-center text-center">
                <div className="p-3 bg-primary/10 rounded-full mb-2 group-hover:bg-primary/20 transition-colors">{app_sector.icon}</div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">{app_sector.sector}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow space-y-2">
                <ul className="list-disc list-inside text-sm text-muted-foreground">
                    {app_sector.examples.map((ex, idx) => <li key={idx}>{ex}</li>)}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Key Players & Ecosystem" titleIcon={<Globe className="w-6 h-6 text-primary"/>} description="Organizations and initiatives driving Blockchain & Web3 innovation.">
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-secondary-foreground flex items-center gap-2"><Building className="w-5 h-5 text-primary"/>Industry Leaders</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {keyPlayersData.industryLeaders.map(leader => (
                <Card key={leader.name} className="p-3 text-center bg-card hover:shadow-md flex flex-col justify-between">
                  <div>
                    <div className="flex justify-center mb-2">{leader.icon}</div>
                    <p className="text-sm font-medium">{leader.name}</p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{leader.focus}</p>
                </Card>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-secondary-foreground flex items-center gap-2"><FlaskConical className="w-5 h-5 text-primary"/>Research Institutions</h3>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {keyPlayersData.researchInstitutions.map(inst => (
                <Card key={inst.name} className="p-3 text-center bg-card hover:shadow-md flex flex-col justify-between">
                  <div>
                    <div className="flex justify-center mb-2">{inst.icon}</div>
                    <p className="text-sm font-medium">{inst.name}</p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{inst.focus}</p>
                </Card>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-secondary-foreground flex items-center gap-2"><Users className="w-5 h-5 text-primary"/>Global Initiatives</h3>
            <div className="space-y-3">
                {keyPlayersData.globalInitiatives.map(init => (
                    <Card key={init.name} className="p-4 bg-card hover:shadow-md flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-full">{init.icon}</div>
                        <div>
                            <h4 className="text-md font-semibold">{init.name}</h4>
                            <p className="text-sm text-muted-foreground">{init.focus}</p>
                        </div>
                    </Card>
                ))}
            </div>
          </div>
        </div>
      </Section>

      <Section title="Future Trends & Speculations" titleIcon={<Rocket className="w-6 h-6 text-primary"/>} description="Peering into the potential next wave of Blockchain & Web3.">
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
      </Section>

      <Section title="Societal & Ethical Evolution" titleIcon={<Scale className="w-6 h-6 text-primary"/>} description="Navigating the complex societal implications of decentralized technologies.">
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

      <Section title="Explore Further" titleIcon={<BookOpen className="w-6 h-6 text-primary"/>} description="Resources for deeper understanding in Blockchain & Web3.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {exploreFurtherData.map(resource => (
            <Card key={resource.name} className="bg-card hover:shadow-md">
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-md">{resource.name}</h4>
                  <Link href={resource.url} passHref legacyBehavior={false}>
                      <Button variant="link" size="sm" asChild className="text-xs p-0 h-auto">
                        <a target="_blank" rel="noopener noreferrer">
                            Visit Website <ExternalLink className="inline-block ml-1 h-3 w-3"/>
                        </a>
                      </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

    </div>
  );
}
