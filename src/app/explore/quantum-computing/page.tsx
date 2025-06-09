
import Image from 'next/image';
import Link from 'next/link';
import {
  Atom, Cpu, Milestone, Lightbulb, FlaskConical, Rocket, Brain,
  DollarSign, Smartphone, Building, Users, Globe, Puzzle, Dna, Scale,
  BookOpen, Rss, ArrowLeft, ExternalLink, Info as InfoIcon, CheckCircle, Landmark, GraduationCap, Flag
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
  title: 'Quantum Computing Deep Dive',
  description: 'Explore the history, core concepts, applications in finance and chemistry, key players, future trends, and societal implications of Quantum Computing. A comprehensive guide to this transformative technology.',
  keywords: ['Quantum Computing', 'Qubits', 'Quantum Algorithms', 'Shor\'s Algorithm', 'Grover\'s Algorithm', 'Quantum Supremacy', 'Quantum Cryptography', 'Future of Computing', 'Quantum Mechanics'],
  openGraph: {
    title: 'Quantum Computing Deep Dive | Innovation Hub Explorer',
    description: 'Delve into the world of quantum computation, from foundational theories to future possibilities.',
    url: '/explore/quantum-computing',
     images: [
      {
        url: '/og-quantum.png', // Replace with an actual relevant image
        width: 1200,
        height: 630,
        alt: 'Quantum Computing Abstract Visualization',
      },
    ],
  },
  twitter: {
    title: 'Quantum Computing Deep Dive',
    description: 'Unraveling the complexities and potential of quantum computing.',
  },
  alternates: {
    canonical: '/explore/quantum-computing',
  },
};


const historicalTimelineData = [
  {
    id: 'qc_ht1',
    era: 'Concept Era',
    yearRange: '1980s–1990s',
    title: 'Theoretical Foundations',
    description: 'Richard Feynman (1981) proposed quantum simulation as a superior way to model physics. David Deutsch (1985) developed the first universal quantum computer model. Peter Shor\'s Algorithm (1994) for factoring large numbers exponentially faster than classical counterparts was introduced.',
    icon: <Lightbulb className="w-5 h-5 text-primary" />,
  },
  {
    id: 'qc_ht2',
    era: 'Pioneering Developments',
    yearRange: '2000s',
    title: 'Early Qubit Demonstrations & Algorithms',
    description: 'The first 2- and 3-qubit quantum gates were successfully demonstrated. IBM and Stanford developed basic quantum circuits in controlled lab environments. Grover’s algorithm proved faster unstructured search capabilities using quantum logic.',
    icon: <FlaskConical className="w-5 h-5 text-primary" />,
  },
  {
    id: 'qc_ht3',
    era: 'Growth & Adoption',
    yearRange: '2010s',
    title: 'Hardware Progress & Cloud Access',
    description: 'Superconducting qubits and trapped ions emerged as practical platforms. Google’s 72-qubit Bristlecone and IBM Q System One marked hardware progress. Cloud-accessible quantum computers like IBM Q Experience and Rigetti became available. Quantum cryptography (QKD) was tested in real-world settings.',
    icon: <Rocket className="w-5 h-5 text-primary" />,
  },
  {
    id: 'qc_ht4',
    era: 'Modern Era',
    yearRange: '2020s–Present',
    title: 'Quantum Supremacy & Ecosystem Growth',
    description: 'Google claimed "Quantum Supremacy" with Sycamore (2019), solving a task much faster than classical supercomputers. Open-source software stacks like Qiskit, Cirq, and PennyLane are driving accessibility. Multi-national investments and national quantum strategies shape the global race. Quantum startups and tech giants converge on hybrid quantum-classical algorithms.',
    icon: <Brain className="w-5 h-5 text-primary" />,
  },
];

const presentApplicationsData = [
  {
    sector: 'Finance & Optimization',
    icon: <DollarSign className="w-7 h-7 text-primary" />,
    examples: [
      'Quantum annealing optimizes large-scale investment portfolios.',
      'Monte Carlo simulations accelerate using quantum-enhanced techniques.',
      'Risk modeling, fraud detection, and derivative pricing explored by JPMorgan & Goldman Sachs.'
    ],
  },
  {
    sector: 'Drug Discovery & Chemistry',
    icon: <FlaskConical className="w-7 h-7 text-primary" />,
    examples: [
      'Simulation of molecular structures (e.g., caffeine, lithium hydride) using quantum hardware.',
      'Identifying protein folding pathways for precision drug design.',
      'Collaboration with pharma leaders like Roche and Biogen.'
    ],
  },
  {
    sector: 'Consumer Tech (Early Stage)',
    icon: <Smartphone className="w-7 h-7 text-primary" />,
    examples: [
      'Quantum-enhanced random number generators in secure communication.',
      'Educational quantum computing kits and gamified learning apps.',
      'Quantum backend APIs powering secure digital ID and password generation tools.'
    ],
  }
];

const keyPlayersData = {
  industryLeaders: [
    { name: 'Innovatech Corp (Conceptual)', focus: 'Hybrid quantum-classical platforms, quantum-as-a-service APIs, partnerships in finance and pharma.', icon: <Building className="w-5 h-5 text-primary"/> },
    { name: 'IBM Quantum', focus: 'Superconducting qubit hardware, Qiskit, IBM Quantum Experience cloud platform.', icon: <Cpu className="w-5 h-5 text-primary"/> },
    { name: 'Google Quantum AI', focus: 'Sycamore processor, quantum supremacy research, Cirq framework.', icon: <Brain className="w-5 h-5 text-primary"/> },
    { name: 'Rigetti Computing', focus: 'Full-stack quantum computing, Aspen series processors, Quantum Cloud Services.', icon: <Atom className="w-5 h-5 text-primary"/> },
  ],
  researchInstitutions: [
    { name: 'Global Research Institute for Quantum Systems (Conceptual)', focus: 'Topological qubits, quantum memory, scalable architectures, foundational research.', icon: <FlaskConical className="w-5 h-5 text-primary"/> },
    { name: 'MIT Center for Theoretical Physics', focus: 'Quantum information theory, algorithm development.', icon: <GraduationCap className="w-5 h-5 text-primary"/> },
    { name: 'University of Waterloo - Institute for Quantum Computing', focus: 'Broad research from fundamental to applied quantum tech.', icon: <GraduationCap className="w-5 h-5 text-primary"/> },
  ],
  globalInitiatives: [
    { name: 'Open Quantum Standards Alliance (Conceptual)', focus: 'Interoperable software, ethical frameworks, error correction standards, quantum communication protocols.', icon: <Globe className="w-5 h-5 text-primary"/> },
    { name: 'Quantum Economic Development Consortium (QED-C)', focus: 'Industry-driven consortium to enable and grow the U.S. quantum industry.', icon: <Users className="w-5 h-5 text-primary"/> },
    { name: 'European Quantum Flagship', focus: 'Large-scale, long-term research and innovation initiative.', icon: <Flag className="w-5 h-5 text-primary"/> },
  ],
};

const futureTrendsData = [
    { title: 'Fault-Tolerant Quantum Computing', description: 'Achieving fully error-corrected logical qubits, a major step towards practical, large-scale quantum computers.', icon: <Puzzle className="w-7 h-7 text-primary"/> },
    { title: 'Topological Qubits', description: 'Developing more stable and less error-prone qubit systems, potentially revolutionizing hardware design.', icon: <Atom className="w-7 h-7 text-primary"/> },
    { title: 'Quantum Cloud Platforms Evolution', description: 'Expansion of cloud platforms offering access to thousands of interconnected, high-quality qubits.', icon: <Cpu className="w-7 h-7 text-primary"/> },
    { title: 'AI & Machine Learning Synergy', description: 'Quantum-enhanced neural networks for accelerated model training and solving complex AI problems.', icon: <Brain className="w-7 h-7 text-primary"/> },
    { title: 'Materials Science Breakthroughs', description: 'Designing and discovering novel materials, such as high-temperature superconductors, with quantum simulations.', icon: <FlaskConical className="w-7 h-7 text-primary"/> },
    { title: 'Healthcare Revolution', description: 'Personalized medicine through large-scale genomic simulations and rapid drug discovery.', icon: <Dna className="w-7 h-7 text-primary"/> },
];

const ethicalSocietalData = [
  { title: 'Post-Quantum Cryptography (PQC)', description: 'The race to develop and standardize new cryptographic algorithms resistant to quantum attacks, crucial for future cybersecurity.', icon: <Scale className="w-5 h-5 text-destructive" /> },
  { title: 'Inequality in Access', description: 'Addressing the "quantum divide" to ensure fair global access to quantum resources and prevent concentration of power.', icon: <Users className="w-5 h-5 text-destructive" /> },
  { title: 'Governance & Geopolitics', description: 'Navigating the complexities of technological supremacy, national security implications, and fostering international collaboration ("quantum diplomacy").', icon: <Globe className="w-5 h-5 text-destructive" /> },
  { title: 'Workforce Development', description: 'Building a skilled quantum workforce through education and training programs to meet the demands of this emerging field.', icon: <Building className="w-5 h-5 text-destructive" /> },
];

const exploreFurtherData = [
  { name: "Qiskit by IBM", url: "https://qiskit.org/", imageHint: "qiskit logo" },
  { name: "Google Quantum AI", url: "https://quantumai.google/", imageHint: "google quantum logo" },
  { name: "Quantum Open Source Foundation (QOSF)", url: "https://qosf.org/", imageHint: "qosf logo" },
  { name: "arXiv Quantum Physics (quant-ph)", url: "https://arxiv.org/list/quant-ph/recent", imageHint: "arxiv logo paper" },
];


export default function QuantumComputingPage() {
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
          <Atom className="w-16 h-16 md:w-20 md:h-20 text-primary mx-auto md:mx-0 flex-shrink-0" />
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
              Quantum Computing – Deep Dive
            </h1>
            <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto md:mx-0">
              Quantum computing leverages the principles of quantum mechanics—superposition, entanglement, and quantum interference—to perform computations that would be infeasible for classical computers. It enables breakthroughs in cryptography, materials science, machine learning, and optimization.
            </p>
          </div>
        </div>
      </header>

      <Section title="Comprehensive Overview" titleIcon={<InfoIcon className="w-6 h-6 text-primary"/>} description="The Quantum Leap in Computational Power." className="bg-muted/30">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
                <p className="text-base text-muted-foreground mb-4">
                    Key foundational components include:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li><strong>Qubits:</strong> Quantum analogs of classical bits, capable of representing 0, 1, or a superposition of both.</li>
                    <li><strong>Quantum Gates:</strong> Fundamental operations manipulating qubits, analogous to classical logic gates.</li>
                    <li><strong>Quantum Algorithms:</strong> Specialized algorithms like Shor’s (factoring) and Grover’s (search) that offer exponential speedups.</li>
                    <li><strong>Error Correction & Decoherence Mitigation:</strong> Critical challenges in maintaining quantum states.</li>
                    <li><strong>Quantum Supremacy/Advantage:</strong> Performing tasks classical computers cannot achieve in practical timeframes.</li>
                </ul>
            </div>
            <Image src="https://placehold.co/600x400.png" alt="Abstract visualization of Quantum Computing concepts" width={600} height={400} className="rounded-md object-cover w-full shadow-lg border border-border" data-ai-hint="quantum abstract entanglement" />
        </div>
      </Section>

      <Section title="Historical Timeline of Quantum Computing" titleIcon={<Milestone className="w-6 h-6 text-primary"/>} description="Key milestones tracing the evolution of Quantum Computing.">
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

      <Section title="Present-Day Applications (Proof-of-Concept & Early Stage)" titleIcon={<CheckCircle className="w-6 h-6 text-primary"/>} description="How Quantum Computing is beginning to show potential across various sectors.">
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

      <Section title="Key Players & Ecosystem" titleIcon={<Globe className="w-6 h-6 text-primary"/>} description="Organizations and initiatives driving Quantum Computing innovation globally.">
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-secondary-foreground flex items-center gap-2"><Building className="w-5 h-5 text-primary"/>Industry Leaders</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
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
             <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
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

      <Section title="Future Trends & Speculations" titleIcon={<Rocket className="w-6 h-6 text-primary"/>} description="Peering into the potential futures shaped by Quantum Computing.">
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

      <Section title="Societal & Ethical Evolution" titleIcon={<Scale className="w-6 h-6 text-primary"/>} description="Navigating the complex societal implications of quantum advancements.">
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
          The quantum revolution brings immense promise but also demands careful consideration of its ethical and societal impact to ensure equitable and responsible development.
        </blockquote>
      </Section>

      <Section title="Explore Further" titleIcon={<BookOpen className="w-6 h-6 text-primary"/>} description="Resources for deeper understanding and ongoing learning in Quantum Computing.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {exploreFurtherData.map(resource => (
            <Card key={resource.name} className="bg-card hover:shadow-md">
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-md">{resource.name}</h4>
                  <Link href={resource.url} passHref legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline">
                      Visit Website <ExternalLink className="inline-block ml-1 h-3 w-3"/>
                    </a>
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
