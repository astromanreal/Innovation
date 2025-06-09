
'use client'; 

import Image from 'next/image';
import Link from 'next/link';
import {
  DollarSign, Landmark, Milestone, Lightbulb, Cpu, Smartphone, Bitcoin, Users, Building, Globe, Scale, TrendingUp, BookOpen, ArrowLeft, ExternalLink, Info as InfoIcon, CheckCircle, CreditCard, ShieldCheck, Brain, Layers, Briefcase, Settings2, BarChart3, Zap, MessageSquareWarning, UsersRound, CalendarCheck2, ShoppingBag, FlaskConical, Handshake, Car, DatabaseZap, Watch, Cloud, Server, Network, LockKeyhole, Accessibility, Home, Banknote, LineChart, UserCheck, FileText, Search, GraduationCap
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
// Removed: import type { Metadata } from 'next';

// Metadata function is moved to page.tsx

const historicalTimelineData = [
  {
    id: 'ft_ht1',
    era: 'Traditional Banking Legacy',
    title: 'Branch-Based Systems & Physical Transactions',
    description: 'Dominated by physical branches, manual processes, traditional credit systems, and cash-based or check-based transactions.',
    icon: <Landmark className="w-5 h-5 text-primary" />,
  },
  {
    id: 'ft_ht2',
    era: 'Early Digital Innovations (Late 20th Century)',
    title: 'ATMs, Online Banking & EFT',
    description: 'Introduction of Automated Teller Machines (ATMs), early forms of online banking, and Electronic Fund Transfers (EFTs) began digitizing basic banking services.',
    icon: <Cpu className="w-5 h-5 text-primary" />,
  },
  {
    id: 'ft_ht3',
    era: 'Rise of Mobile Payments & E-commerce (2000s)',
    title: 'PayPal, Early Mobile Wallets & Online Commerce Platforms',
    description: 'PayPal revolutionized online payments. Early mobile payment solutions and e-commerce platforms spurred digital transaction growth.',
    icon: <Smartphone className="w-5 h-5 text-primary" />,
  },
  {
    id: 'ft_ht4',
    era: 'Advent of Neobanks & Blockchain (2010s-Present)',
    title: 'Digital-Only Banks, Bitcoin & DeFi Emergence',
    description: 'Digital-only Neobanks (e.g., Revolut, N26) challenged traditional models. Bitcoin\'s inception (2009) introduced blockchain technology, followed by smart contracts and the rise of Decentralized Finance (DeFi).',
    icon: <Bitcoin className="w-5 h-5 text-primary" />,
  },
];

const currentApplicationsData = [
  {
    title: 'Digital Payments & Wallets',
    icon: <CreditCard className="w-7 h-7 text-primary" />,
    description: 'Contactless payments (NFC), peer-to-peer (P2P) transfer apps (Venmo, Cash App), mobile wallets (Apple Pay, Google Pay), and QR code-based systems.',
    imageHint: "mobile payment phone tap"
  },
  {
    title: 'Neobanks & Digital Banking',
    icon: <Home className="w-7 h-7 text-primary" />,
    description: 'Fully digital banking experiences with features like instant account opening, no-fee/low-fee services, AI-powered chatbots for customer support, and budgeting tools.',
    imageHint: "online banking dashboard"
  },
  {
    title: 'AI-Driven Lending & Credit Scoring',
    icon: <LineChart className="w-7 h-7 text-primary" />,
    description: 'Utilizing alternative data sources (e.g., social media, utility payments) and AI algorithms for faster, more inclusive loan approvals and sophisticated risk assessment.',
    imageHint: "ai algorithm chart"
  },
  {
    title: 'Decentralized Finance (DeFi)',
    icon: <Layers className="w-7 h-7 text-primary" />,
    description: 'Blockchain-based protocols for lending, borrowing, yield farming, decentralized exchanges (DEXs), and automated market makers (AMMs) without traditional intermediaries.',
    imageHint: "defi blockchain network"
  },
  {
    title: 'Regulatory Technology (RegTech)',
    icon: <ShieldCheck className="w-7 h-7 text-primary" />,
    description: 'AI and automation tools for compliance monitoring, Anti-Money Laundering (AML) checks, Know Your Customer (KYC) verification, and fraud detection in real-time.',
    imageHint: "security compliance check"
  }
];

const coreTechnologiesData = [
  { title: 'Blockchain & DLT', description: 'Enables transparency, security, immutability, and automation of financial agreements through smart contracts.', icon: <Bitcoin className="w-6 h-6 text-accent"/>},
  { title: 'Artificial Intelligence & ML', description: 'Powers personalized financial advice, algorithmic trading, fraud detection, risk analytics, and customer service chatbots.', icon: <Brain className="w-6 h-6 text-accent"/>},
  { title: 'Cloud Computing & APIs', description: 'Provides scalable infrastructure, allows for rapid deployment of new services, and facilitates easy integration between different financial platforms via APIs (Open Banking).', icon: <Cloud className="w-6 h-6 text-accent"/>},
  { title: 'Big Data Analytics', description: 'Analyzes vast amounts of financial and behavioral data for customer insights, market trend prediction, credit scoring, and personalized product offerings.', icon: <DatabaseZap className="w-6 h-6 text-accent"/>},
  { title: 'Biometric Security', description: 'Utilizes facial recognition, fingerprint scanning, voice recognition, and behavioral biometrics for secure authentication and fraud prevention.', icon: <UserCheck className="w-6 h-6 text-accent"/>},
];

const keyPlayersData = {
  leadingCompanies: [
    { name: 'Stripe', focus: 'Online payment processing for internet businesses.', icon: <CreditCard className="w-5 h-5 text-primary"/> },
    { name: 'Square (Block)', focus: 'Payment solutions, point-of-sale systems, Cash App.', icon: <Smartphone className="w-5 h-5 text-primary"/> },
    { name: 'Revolut', focus: 'Global neobank offering banking, crypto, and trading.', icon: <Banknote className="w-5 h-5 text-primary"/> },
    { name: 'Robinhood', focus: 'Commission-free stock and crypto trading platform.', icon: <TrendingUp className="w-5 h-5 text-primary"/> },
    { name: 'Coinbase', focus: 'Major cryptocurrency exchange and wallet provider.', icon: <Bitcoin className="w-5 h-5 text-primary"/> },
  ],
  emergingStartups: [
    { name: 'Plaid', focus: 'API platform connecting bank accounts to FinTech apps.', icon: <Network className="w-5 h-5 text-primary"/> }, 
    { name: 'Affirm', focus: 'Buy Now, Pay Later (BNPL) services.', icon: <DollarSign className="w-5 h-5 text-primary"/> },
    { name: 'Chainalysis', focus: 'Blockchain analysis for compliance and investigations.', icon: <Search className="w-5 h-5 text-primary"/> },
  ],
  financialInstitutions: [
    { name: 'JPMorgan Chase (Digital)', focus: 'Investing heavily in digital banking, AI, and blockchain.', icon: <Landmark className="w-5 h-5 text-primary"/> },
    { name: 'Goldman Sachs (Marcus)', focus: 'Consumer digital banking and lending platform.', icon: <Landmark className="w-5 h-5 text-primary"/> },
  ],
  regulatoryBodies: [
     { name: 'Financial Conduct Authority (FCA, UK)', focus: 'Regulates financial services firms and markets in the UK, fosters innovation sandboxes.', icon: <Scale className="w-5 h-5 text-primary"/> },
     { name: 'Global FinTech Hubs Federation', focus: 'Network of FinTech hubs promoting collaboration and best practices.', icon: <Globe className="w-5 h-5 text-primary"/> },
  ]
};

const challengesEthicsData = [
  { title: 'Data Privacy & Security', description: 'Protecting sensitive financial data from breaches, ensuring robust encryption, and adhering to strict data privacy regulations like GDPR and CCPA.', icon: <ShieldCheck className="w-5 h-5 text-destructive" /> },
  { title: 'Regulatory Compliance', description: 'Navigating a complex and evolving web of financial regulations across different jurisdictions, including AML/KYC requirements and consumer protection laws.', icon: <Scale className="w-5 h-5 text-destructive" /> },
  { title: 'Financial Inclusion vs. Exclusion', description: 'Ensuring that FinTech solutions genuinely benefit underserved populations and do not inadvertently create new barriers or exacerbate existing inequalities.', icon: <Users className="w-5 h-5 text-destructive" /> },
  { title: 'Algorithmic Bias & Fairness', description: 'Preventing discrimination in AI-driven lending, credit scoring, and other financial decisions by addressing biases in data and algorithms.', icon: <MessageSquareWarning className="w-5 h-5 text-destructive" /> },
  { title: 'Fraud & Cybercrime', description: 'Counteracting increasingly sophisticated cyber attacks, phishing scams, and financial fraud targeting both consumers and FinTech platforms.', icon: <LockKeyhole className="w-5 h-5 text-destructive" /> },
];

const futureTrendsData = [
    { title: 'AI-Powered Personalized Finance', description: 'Hyper-personalized wealth management, robo-advisors, and AI-driven financial planning tools tailored to individual needs and goals.', icon: <Brain className="w-7 h-7 text-primary"/> },
    { title: 'Central Bank Digital Currencies (CBDCs)', description: 'Governments exploring and piloting digital versions of their fiat currencies, potentially transforming payment systems and monetary policy.', icon: <Landmark className="w-7 h-7 text-primary"/> },
    { title: 'Expansion of DeFi & Tokenization', description: 'Broader adoption of decentralized finance protocols, tokenization of real-world assets (RWAs), and new financial instruments built on NFTs.', icon: <Bitcoin className="w-7 h-7 text-primary"/> },
    { title: 'Integration with IoT & Smart Devices', description: 'Automated payments triggered by IoT devices (e.g., smart appliances reordering supplies), and real-time financial monitoring integrated into everyday objects.', icon: <Smartphone className="w-7 h-7 text-primary"/> },
    { title: 'Quantum Computing & Security', description: 'Preparing for the potential impact of quantum computing on existing cryptographic security, and developing quantum-resistant algorithms for future financial systems.', icon: <Cpu className="w-7 h-7 text-primary"/> }, 
];

const exploreFurtherData = [
  { category: "Certifications & Courses", items: [
      { name: "FinTech Foundations and Overview (edX)", url: "https://www.edx.org/learn/fintech", imageHint: "edx logo certificate" },
      { name: "CFA Institute FinTech Certificate", url: "https://www.cfainstitute.org/en/programs/certificate-programs/fintech", imageHint: "cfa logo finance" },
      { name: "FinTech Specialization (Coursera)", url: "https://www.coursera.org/specializations/fintech", imageHint: "coursera logo online course"}
  ]},
  { category: "Books & Publications", items: [
      { name: "The FINTECH Book by Susanne Chishti & Janos Barberis", url: "https://www.amazon.com/FINTECH-Book-Financial-Technology-Investing/dp/1119218875", imageHint: "book cover fintech" },
      { name: "PwC Global FinTech Report", url: "https://www.pwc.com/fintech", imageHint: "pwc logo report" },
      { name: "Deloitte FinTech Insights", url: "https://www2.deloitte.com/global/en/pages/financial-services/topics/fintech.html", imageHint: "deloitte logo business" }
  ]},
  { category: "Conferences & Meetups", items: [
      { name: "Money20/20", url: "https://www.money2020.com/", imageHint: "money2020 logo conference" },
      { name: "FinTech Connect", url: "https://www.fintechconnect.com/", imageHint: "conference logo connect" },
      { name: "Local FinTech Hubs (Example: Innovate Finance UK)", url: "https://www.innovatefinance.com/", imageHint: "community logo finance" }
  ]},
  { category: "Open Source & Developer Tools", items: [
      { name: "Open Banking APIs (Example: UK Open Banking)", url: "https://www.openbanking.org.uk/", imageHint: "api logo open" },
      { name: "Hyperledger (Blockchain)", url: "https://www.hyperledger.org/", imageHint: "hyperledger logo code" },
      { name: "Stripe API Documentation", url: "https://stripe.com/docs/api", imageHint: "stripe logo developer" }
  ]}
];

export default function FinTechPageClient() {
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
          <DollarSign className="w-16 h-16 md:w-20 md:h-20 text-primary mx-auto md:mx-0 flex-shrink-0" />
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
              Financial Technology (FinTech)
            </h1>
            <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto md:mx-0">
              Transforming financial services by innovating how money is managed, moved, and invested globally.
            </p>
          </div>
        </div>
      </header>

      <Section title="Comprehensive Overview" titleIcon={<InfoIcon className="w-6 h-6 text-primary"/>} description="Understanding the core concepts and societal impact of FinTech." className="bg-muted/30">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-6 items-center">
            <div className="md:col-span-4 space-y-4">
                <p className="text-base text-muted-foreground">
                  Financial Technology (FinTech) integrates innovative technologies into the financial services industry to improve and automate the delivery and use of financial products. It disrupts traditional models by offering faster, cheaper, more accessible, and user-friendly solutions, empowering both consumers and businesses.
                </p>
                 <div>
                    <h4 className="font-semibold text-md text-primary mb-1">Key Focus Areas:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        <li>Digital payments, mobile wallets, and peer-to-peer transfers.</li>
                        <li>Neobanks and challenger banks offering digital-first banking experiences.</li>
                        <li>AI and machine learning for credit scoring, lending, and personalized financial advice.</li>
                        <li>Blockchain technology and decentralized finance (DeFi) for transparent and secure transactions.</li>
                        <li>Regulatory technology (RegTech) for compliance and fraud prevention.</li>
                    </ul>
                </div>
            </div>
             <div className="md:col-span-3">
                <Image src="https://placehold.co/600x400.png" alt="FinTech Abstract Visual" width={600} height={400} className="rounded-md object-cover w-full shadow-lg border border-border" data-ai-hint="financial charts technology" />
            </div>
        </div>
      </Section>
      
      <Section title="Historical Evolution & Foundations" titleIcon={<Milestone className="w-6 h-6 text-primary"/>} description="Tracing the journey from traditional banking to the FinTech revolution.">
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

      <Section title="Current Applications" titleIcon={<CheckCircle className="w-6 h-6 text-primary"/>} description="How FinTech technologies are reshaping various financial sectors today.">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentApplicationsData.map((app_item) => (
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

      <Section title="Core Technologies & Tools" titleIcon={<Settings2 className="w-6 h-6 text-primary"/>} description="The foundational and enabling technologies behind FinTech innovations.">
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

      <Section title="Key Innovators & Industry Leaders" titleIcon={<Users2 className="w-6 h-6 text-primary"/>} description="Influential companies, institutions, and regulatory bodies in the FinTech landscape.">
        <div className="space-y-6">
            <div>
                <h3 className="text-xl font-semibold mb-3 text-primary flex items-center gap-2"><Briefcase className="w-5 h-5"/>Leading Companies</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
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
                <h3 className="text-xl font-semibold mb-3 text-primary flex items-center gap-2"><Zap className="w-5 h-5"/>Emerging Startups</h3>
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {keyPlayersData.emergingStartups.map(company => (
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
                <h3 className="text-xl font-semibold mb-3 text-primary flex items-center gap-2"><Landmark className="w-5 h-5"/>Financial Institutions Embracing FinTech</h3>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {keyPlayersData.financialInstitutions.map(startup => (
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
                <h3 className="text-xl font-semibold mb-3 text-primary flex items-center gap-2"><Scale className="w-5 h-5"/>Regulatory Bodies & Alliances</h3>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {keyPlayersData.regulatoryBodies.map(inst => (
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

      <Section title="Challenges & Ethical Considerations" titleIcon={<Scale className="w-6 h-6 text-primary"/>} description="Navigating risks, compliance, and ethical dilemmas in the FinTech space.">
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

      <Section title="Future Trends & Opportunities" titleIcon={<TrendingUp className="w-6 h-6 text-primary"/>} description="Exploring upcoming innovations and the evolution of financial technology.">
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
            FinTech is rapidly evolving, driven by technological breakthroughs and changing consumer expectations. Its future lies in creating even more personalized, secure, and inclusive financial ecosystems.
        </blockquote>
      </Section>
      
      <Section title="Explore Further: Resources & Learning" titleIcon={<BookOpen className="w-6 h-6 text-primary"/>} description="Curated resources to deepen your understanding of Financial Technology." className="bg-muted/30">
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
