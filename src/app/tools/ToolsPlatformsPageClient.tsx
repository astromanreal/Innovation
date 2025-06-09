
'use client';

import { useState, useMemo, useEffect } from 'react';
import { Section } from '@/components/Section';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Wrench, Filter, Search, ExternalLink, Github, XCircle, Code, Database, Settings, Cpu } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Label } from '@/components/ui/label';

interface ToolPlatformEntry {
  id: string;
  name: string;
  domain: string; // e.g., "AI", "Quantum Computing", "Blockchain", "Web Development", "Bioengineering"
  category: 'Library' | 'Framework' | 'Platform' | 'IDE' | 'SDK' | 'Tool';
  description: string;
  keyFeatures: string[];
  useCases?: string[];
  targetUsers?: string[];
  language?: string; // e.g., "Python", "JavaScript", "C++", "Go", "Q#", "Solidity"
  license?: string; // e.g., "Open Source (MIT)", "Commercial", "Apache 2.0"
  officialUrl: string;
  repoUrl?: string;
  logoImageHint: string; // keywords for placeholder image search
  communityMetrics?: string; // Conceptual: "Stars: 10k+, Users: 1M+"
}

const allToolsPlatforms: ToolPlatformEntry[] = [
  // AI
  { id: 'tp1', name: 'TensorFlow', domain: 'AI', category: 'Framework', description: 'An end-to-end open-source platform for machine learning. It has a comprehensive, flexible ecosystem of tools, libraries, and community resources.', keyFeatures: ['Flexible architecture', 'Distributed training', 'Deployment on various platforms (CPUs, GPUs, TPUs)'], language: 'Python, C++', license: 'Apache 2.0', officialUrl: 'https://www.tensorflow.org/', repoUrl: 'https://github.com/tensorflow/tensorflow', logoImageHint: 'ai neural network', communityMetrics: "Stars: 170k+" },
  { id: 'tp2', name: 'PyTorch', domain: 'AI', category: 'Framework', description: 'An open source machine learning framework that accelerates the path from research prototyping to production deployment.', keyFeatures: ['Dynamic computational graphs', 'Strong GPU acceleration', 'Extensive community support'], language: 'Python, C++', license: 'BSD-style', officialUrl: 'https://pytorch.org/', repoUrl: 'https://github.com/pytorch/pytorch', logoImageHint: 'ai deep learning', communityMetrics: "Stars: 70k+" },
  { id: 'tp3', name: 'Hugging Face Transformers', domain: 'AI', category: 'Library', description: 'State-of-the-art Natural Language Processing for PyTorch, TensorFlow, and JAX. Provides thousands of pre-trained models.', keyFeatures: ['Access to SOTA models', 'Easy fine-tuning', 'Tokenizers and pipelines'], language: 'Python', license: 'Apache 2.0', officialUrl: 'https://huggingface.co/docs/transformers/index', repoUrl: 'https://github.com/huggingface/transformers', logoImageHint: 'nlp text generation' },
  // Quantum Computing
  { id: 'tp4', name: 'Qiskit', domain: 'Quantum Computing', category: 'SDK', description: 'An open-source SDK for working with quantum computers at the level of pulses, circuits, and application modules.', keyFeatures: ['Quantum circuit design', 'Simulation', 'Access to IBM Quantum hardware'], language: 'Python', license: 'Apache 2.0', officialUrl: 'https://qiskit.org/', repoUrl: 'https://github.com/Qiskit/qiskit', logoImageHint: 'quantum circuit qubit' },
  { id: 'tp5', name: 'Microsoft Quantum Development Kit (QDK)', domain: 'Quantum Computing', category: 'SDK', description: 'Includes the Q# programming language, simulators, and resources for learning and developing quantum applications.', keyFeatures: ['Q# language', 'Azure Quantum integration', 'Rich libraries'], language: 'Q#, Python, C#', license: 'MIT', officialUrl: 'https://azure.microsoft.com/en-us/solutions/quantum-computing/', repoUrl: 'https://github.com/microsoft/qsharp-compiler', logoImageHint: 'quantum algorithm code' },
  // Blockchain
  { id: 'tp6', name: 'Hardhat', domain: 'Blockchain', category: 'Framework', description: 'An Ethereum development environment for professionals. Compile, deploy, test, and debug your smart contracts.', keyFeatures: ['Local Ethereum network', 'Debugging tools', 'Plugin ecosystem'], language: 'JavaScript, TypeScript', license: 'MIT', officialUrl: 'https://hardhat.org/', repoUrl: 'https://github.com/NomicFoundation/hardhat', logoImageHint: 'ethereum smart contract' },
  { id: 'tp7', name: 'Truffle Suite', domain: 'Blockchain', category: 'Framework', description: 'A world-class development environment, testing framework, and asset pipeline for blockchains using the Ethereum Virtual Machine (EVM).', keyFeatures: ['Smart contract compilation & deployment', 'Automated testing', 'Ganache local blockchain'], language: 'JavaScript, Solidity', license: 'MIT', officialUrl: 'https://trufflesuite.com/', repoUrl: 'https://github.com/trufflesuite/truffle', logoImageHint: 'blockchain development tools' },
  // Web Development
  { id: 'tp8', name: 'React', domain: 'Web Development', category: 'Library', description: 'A JavaScript library for building user interfaces, particularly single-page applications.', keyFeatures: ['Component-based architecture', 'Virtual DOM', 'Large ecosystem'], language: 'JavaScript, TypeScript', license: 'MIT', officialUrl: 'https://react.dev/', repoUrl: 'https://github.com/facebook/react', logoImageHint: 'web ui components' },
  { id: 'tp9', name: 'Next.js', domain: 'Web Development', category: 'Framework', description: 'The React Framework for Production. Next.js gives you the best developer experience with all the features you need for production.', keyFeatures: ['Server-side rendering', 'Static site generation', 'API routes', 'File-system routing'], language: 'JavaScript, TypeScript', license: 'MIT', officialUrl: 'https://nextjs.org/', repoUrl: 'https://github.com/vercel/next.js', logoImageHint: 'web app framework' },
  // Bioengineering / Bioinformatics
  { id: 'tp10', name: 'Biopython', domain: 'Bioengineering', category: 'Library', description: 'A set of freely available tools for biological computation written in Python by an international team of developers.', keyFeatures: ['Sequence analysis', 'Phylogenetics', 'Access to online databases'], language: 'Python', license: 'Biopython License Agreement', officialUrl: 'https://biopython.org/', repoUrl: 'https://github.com/biopython/biopython', logoImageHint: 'dna sequence analysis' },
  { id: 'tp11', name: 'Galaxy Project', domain: 'Bioengineering', category: 'Platform', description: 'An open, web-based platform for accessible, reproducible, and transparent computational biological research.', keyFeatures: ['Workflow management', 'Large tool suite', 'Data sharing'], language: 'Python, JavaScript', license: 'Academic Free License', officialUrl: 'https://galaxyproject.org/', repoUrl: 'https://github.com/galaxyproject/galaxy', logoImageHint: 'bioinformatics workflow' },
];

const allDomains = ['All', ...new Set(allToolsPlatforms.map(tool => tool.domain))].sort();
const allCategories = ['All', ...new Set(allToolsPlatforms.map(tool => tool.category))].sort();
const allLanguages = ['All', ...new Set(allToolsPlatforms.map(tool => tool.language).filter(Boolean) as string[])].sort();
const allLicenses = ['All', ...new Set(allToolsPlatforms.map(tool => tool.license).filter(Boolean) as string[])].sort();


export default function ToolsPlatformsPageClient() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLanguage, setSelectedLanguage] = useState('All');
  const [selectedLicense, setSelectedLicense] = useState('All');

  const filteredTools = useMemo(() => {
    return allToolsPlatforms.filter(tool => {
      const searchLower = searchTerm.toLowerCase();
      const matchesSearch = searchTerm === '' ||
        tool.name.toLowerCase().includes(searchLower) ||
        tool.description.toLowerCase().includes(searchLower) ||
        tool.keyFeatures.some(f => f.toLowerCase().includes(searchLower));
      const matchesDomain = selectedDomain === 'All' || tool.domain === selectedDomain;
      const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
      const matchesLanguage = selectedLanguage === 'All' || tool.language === selectedLanguage;
      const matchesLicense = selectedLicense === 'All' || tool.license === selectedLicense;
      return matchesSearch && matchesDomain && matchesCategory && matchesLanguage && matchesLicense;
    }).sort((a,b) => a.name.localeCompare(b.name));
  }, [searchTerm, selectedDomain, selectedCategory, selectedLanguage, selectedLicense]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedDomain('All');
    setSelectedCategory('All');
    setSelectedLanguage('All');
    setSelectedLicense('All');
  };

  const getIconForDomain = (domain: string) => {
    switch (domain) {
        case 'AI': return <Cpu className="w-4 h-4" />;
        case 'Quantum Computing': return <Settings className="w-4 h-4" />; // Or Atom icon
        case 'Blockchain': return <Database className="w-4 h-4" />; // Or Link icon
        case 'Web Development': return <Code className="w-4 h-4" />;
        case 'Bioengineering': return <Wrench className="w-4 h-4" />; // Or Dna icon
        default: return <Wrench className="w-4 h-4" />;
    }
  }


  return (
    <div className="container mx-auto px-4 py-8 md:py-12 space-y-12 md:space-y-16">
      <header className="text-center mb-12 md:mb-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-primary flex items-center justify-center gap-3">
          <Wrench className="w-10 h-10" /> Developer Tools & Platforms
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Discover essential tools, frameworks, and platforms across major technology domains. Filter by your needs and explore resources to accelerate your innovation.
        </p>
      </header>

      <Section title="Filter & Search Tools" titleIcon={<Filter className="w-5 h-5 text-primary" />} description="Find the right tools for your project by specifying domain, category, language, or license type." className="bg-muted/30 p-6 rounded-xl shadow-none hover:shadow-none">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 items-end">
          <div className="space-y-1.5 md:col-span-2 lg:col-span-3">
            <Label htmlFor="search-tools">Search Tools</Label>
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                    id="search-tools"
                    placeholder="Search by name, description, feature..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-background h-10"
                />
            </div>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="domain-select">Domain</Label>
            <Select value={selectedDomain} onValueChange={setSelectedDomain}>
              <SelectTrigger id="domain-select" className="bg-background h-10"><SelectValue placeholder="Select Domain" /></SelectTrigger>
              <SelectContent>{allDomains.map(d => <SelectItem key={d} value={d}>{d}</SelectItem>)}</SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="category-select">Category</Label>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger id="category-select" className="bg-background h-10"><SelectValue placeholder="Select Category" /></SelectTrigger>
              <SelectContent>{allCategories.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="language-select">Language</Label>
            <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
              <SelectTrigger id="language-select" className="bg-background h-10"><SelectValue placeholder="Select Language" /></SelectTrigger>
              <SelectContent>{allLanguages.map(l => <SelectItem key={l} value={l}>{l}</SelectItem>)}</SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="license-select">License</Label>
            <Select value={selectedLicense} onValueChange={setSelectedLicense}>
              <SelectTrigger id="license-select" className="bg-background h-10"><SelectValue placeholder="Select License" /></SelectTrigger>
              <SelectContent>{allLicenses.map(l => <SelectItem key={l} value={l}>{l}</SelectItem>)}</SelectContent>
            </Select>
          </div>
          <Button onClick={clearFilters} variant="outline" className="w-full md:w-auto md:col-start-2 lg:col-start-3 h-10">
            <XCircle className="mr-2 h-4 w-4" /> Clear Filters
          </Button>
        </div>
      </Section>

      <Section title="Curated Tools & Platforms" titleIcon={<Wrench className="w-6 h-6 text-primary" />} description={`Showing ${filteredTools.length} of ${allToolsPlatforms.length} resources.`} className="rounded-xl">
        {filteredTools.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredTools.map((tool) => (
              <Card key={tool.id} className="flex flex-col bg-card border-border hover:shadow-xl hover:border-primary/40 transition-all duration-300 ease-in-out group rounded-lg">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start mb-2">
                    <div className="relative w-12 h-12 rounded-md overflow-hidden border bg-secondary flex items-center justify-center text-primary">
                        {/* Placeholder logo generation */}
                        <Image src={`https://placehold.co/64x64.png?text=${tool.name.substring(0,2).toUpperCase()}`} alt={`${tool.name} logo`} layout="fill" objectFit="contain" data-ai-hint={tool.logoImageHint} className="p-1"/>
                    </div>
                    <div className="flex flex-col items-end space-y-1">
                        <Badge variant="secondary" className="text-xs">{tool.domain}</Badge>
                        <Badge variant="outline" className="text-xs">{tool.category}</Badge>
                    </div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">{tool.name}</CardTitle>
                  <CardDescription className="text-xs pt-1 line-clamp-2 group-hover:line-clamp-none transition-all">
                    {tool.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow space-y-2 text-sm">
                  <div>
                    <h4 className="font-semibold text-xs text-muted-foreground mb-0.5">Key Features:</h4>
                    <ul className="list-disc list-inside pl-4 text-xs text-card-foreground">
                      {tool.keyFeatures.slice(0, 2).map((feature, i) => <li key={i}>{feature}</li>)}
                      {tool.keyFeatures.length > 2 && <li>+{tool.keyFeatures.length - 2} more</li>}
                    </ul>
                  </div>
                  {tool.language && <p className="text-xs"><span className="font-semibold text-muted-foreground">Language:</span> {tool.language}</p>}
                  {tool.license && <p className="text-xs"><span className="font-semibold text-muted-foreground">License:</span> {tool.license}</p>}
                   {tool.communityMetrics && <p className="text-xs text-muted-foreground italic">{tool.communityMetrics}</p>}
                </CardContent>
                <CardFooter className="pt-4 border-t border-border flex flex-col sm:flex-row gap-2">
                  <a href={tool.officialUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex-1">
                    <Button variant="default" size="sm" className="w-full">
                      Official Site <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                  {tool.repoUrl && (
                    <a href={tool.repoUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex-1">
                      <Button variant="outline" size="sm" className="w-full">
                        <Github className="mr-2 h-4 w-4" /> Repository
                      </Button>
                    </a>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="text-center text-muted-foreground p-6 md:p-8 border-dashed border-border bg-muted/20 rounded-lg">
            <CardContent className="p-0">
              <Wrench className="w-10 h-10 text-primary/50 mx-auto mb-3" />
              <p className="text-md">No tools or platforms match your current filter criteria. Please try broadening your search or clearing filters.</p>
            </CardContent>
          </Card>
        )}
      </Section>
      
      <Section title="Contribute to the Directory" titleIcon={<Github className="w-6 h-6 text-primary" />} description="Know a tool or platform that should be listed? We plan to add a community contribution feature." className="bg-muted/30 py-8 rounded-xl text-center">
        <Button variant="secondary" disabled>Suggest a Tool (Planned Feature)</Button>
        <p className="text-xs text-muted-foreground mt-2">Help us grow this resource for the developer and researcher community!</p>
      </Section>
    </div>
  );
}
