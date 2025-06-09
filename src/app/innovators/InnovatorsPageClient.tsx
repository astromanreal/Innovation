
'use client';

import { useState, useMemo } from 'react';
import { Section } from '@/components/Section';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Users, Building, FlaskConical, Cpu, Globe, Search, Filter, ExternalLink, User, Star, Link as LinkIcon, Rocket, Milestone, Aperture, Landmark, Info, AlertCircle, XCircle, BrainCircuit } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Label } from '@/components/ui/label';

interface InnovatorEntry {
  id: string;
  name: string;
  category: 'Person' | 'Company' | 'Startup' | 'Research Institution' | 'Open Source Project' | 'Global Initiative';
  domain: string[]; // Can belong to multiple domains
  country: string;
  impactArea?: string[];
  description: string;
  keyAchievements: string[];
  imageUrl?: string;
  imageHint: string;
  learnMoreUrl?: string;
  logoIcon?: React.ReactNode;
}

const allInnovatorsData: InnovatorEntry[] = [
  {
    id: 'openai',
    name: 'OpenAI',
    category: 'Company',
    domain: ['AI'],
    country: 'USA',
    impactArea: ['NLP', 'Generative Models', 'AGI Research'],
    description: 'An AI research and deployment company. Known for creating GPT models, DALL·E, and pursuing Artificial General Intelligence.',
    keyAchievements: ['GPT-3 & GPT-4 development', 'DALL·E image generation', 'ChatGPT launch', 'Significant research in reinforcement learning'],
    imageHint: 'ai abstract network',
    learnMoreUrl: 'https://openai.com/',
    logoIcon: <Aperture className="w-6 h-6 text-primary" />
  },
  {
    id: 'deepmind',
    name: 'Google DeepMind',
    category: 'Company',
    domain: ['AI'],
    country: 'UK/USA',
    impactArea: ['Deep Learning', 'Reinforcement Learning', 'Scientific Discovery'],
    description: 'A leading AI research lab, now part of Google, known for breakthroughs like AlphaGo, AlphaFold, and general AI research.',
    keyAchievements: ['AlphaGo defeats Go champion', 'AlphaFold solves protein folding problem', 'Contributions to WaveNet (speech synthesis)'],
    imageHint: 'brain network science',
    learnMoreUrl: 'https://deepmind.google/',
    logoIcon: <BrainCircuit className="w-6 h-6 text-primary" />
  },
  {
    id: 'jennifer-doudna',
    name: 'Jennifer Doudna',
    category: 'Person',
    domain: ['Bioengineering', 'Biotechnology'],
    country: 'USA',
    impactArea: ['Gene Editing', 'CRISPR'],
    description: 'American biochemist who co-developed CRISPR-Cas9 gene editing technology, for which she received the Nobel Prize in Chemistry.',
    keyAchievements: ['Co-discovery of CRISPR-Cas9 mechanism', 'Pioneering work in gene editing applications', 'Nobel Prize in Chemistry (2020)'],
    imageHint: 'scientist portrait dna',
    learnMoreUrl: 'https://innovativegenomics.org/jennifer-doudna/',
    logoIcon: <User className="w-6 h-6 text-primary" />
  },
  {
    id: 'ibm-quantum',
    name: 'IBM Quantum',
    category: 'Company',
    domain: ['Quantum Computing'],
    country: 'USA',
    impactArea: ['Quantum Hardware', 'Quantum Software', 'Cloud Quantum Access'],
    description: 'A leader in quantum computing, providing cloud access to quantum processors and developing quantum hardware and software (Qiskit).',
    keyAchievements: ['First cloud-accessible quantum computer', 'Development of superconducting qubit processors (e.g., Condor, Osprey)', 'Qiskit open-source framework'],
    imageHint: 'quantum chip abstract',
    learnMoreUrl: 'https://www.ibm.com/quantum',
    logoIcon: <Cpu className="w-6 h-6 text-primary" />
  },
  {
    id: 'isro',
    name: 'ISRO (Indian Space Research Organisation)',
    category: 'Research Institution',
    domain: ['Space Technology'],
    country: 'India',
    impactArea: ['Satellite Launch', 'Planetary Exploration', 'Remote Sensing'],
    description: 'India\'s national space agency, known for cost-effective satellite launches, Mars Orbiter Mission (Mangalyaan), and Chandrayaan lunar missions.',
    keyAchievements: ['Mars Orbiter Mission', 'Chandrayaan missions to the Moon', 'Development of PSLV and GSLV launch vehicles', 'Successful soft landing on Moon\'s south pole (Chandrayaan-3)'],
    imageHint: 'rocket launch india flag',
    learnMoreUrl: 'https://www.isro.gov.in/',
    logoIcon: <Rocket className="w-6 h-6 text-primary" />
  },
  {
    id: 'huawei',
    name: 'Huawei',
    category: 'Company',
    domain: ['5G & Next-Gen Connectivity', 'AI', 'Smart Devices'],
    country: 'China',
    impactArea: ['Telecommunications Infrastructure', 'Consumer Electronics', 'Cloud Computing'],
    description: 'A global leader in telecommunications equipment and consumer electronics, particularly influential in 5G network development.',
    keyAchievements: ['Major contributor to 5G standards and infrastructure', 'Significant R&D in AI and cloud computing', 'Global smartphone manufacturer'],
    imageHint: '5g tower abstract',
    learnMoreUrl: 'https://www.huawei.com/',
    logoIcon: <Building className="w-6 h-6 text-primary" />
  },
  {
    id: 'mit-csail',
    name: 'MIT CSAIL',
    category: 'Research Institution',
    domain: ['AI', 'Robotics', 'Computer Science'],
    country: 'USA',
    impactArea: ['Fundamental CS Research', 'Robotics Innovation', 'AI Algorithms'],
    description: 'The Computer Science and Artificial Intelligence Laboratory at MIT, one of the world\'s largest and most respected research labs for computer science and AI. It has been a hub for numerous breakthroughs and influential researchers.',
    keyAchievements: ['Pioneering research in numerous CS and AI fields', 'Development of influential algorithms and systems', 'Incubator for many successful startups and technologies'],
    imageHint: 'mit building research',
    learnMoreUrl: 'https://www.csail.mit.edu/',
    logoIcon: <FlaskConical className="w-6 h-6 text-primary" />
  },
];

const allDomains = ['All', ...new Set(allInnovatorsData.flatMap(innovator => innovator.domain))].sort();
const allCategories = ['All', ...new Set(allInnovatorsData.map(innovator => innovator.category))].sort();
const allCountries = ['All', ...new Set(allInnovatorsData.map(innovator => innovator.country))].sort();
const allImpactAreas = ['All', ...new Set(allInnovatorsData.flatMap(innovator => innovator.impactArea || []))].sort();

export default function InnovatorsPageClient() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCountry, setSelectedCountry] = useState('All');
  const [selectedImpactArea, setSelectedImpactArea] = useState('All');

  const filteredInnovators = useMemo(() => {
    return allInnovatorsData.filter(innovator => {
      const searchLower = searchTerm.toLowerCase();
      const matchesSearch = searchTerm === '' ||
        innovator.name.toLowerCase().includes(searchLower) ||
        innovator.description.toLowerCase().includes(searchLower) ||
        innovator.keyAchievements.some(ach => ach.toLowerCase().includes(searchLower));
      
      const matchesDomain = selectedDomain === 'All' || innovator.domain.includes(selectedDomain);
      const matchesCategory = selectedCategory === 'All' || innovator.category === selectedCategory;
      const matchesCountry = selectedCountry === 'All' || innovator.country === selectedCountry;
      const matchesImpactArea = selectedImpactArea === 'All' || (innovator.impactArea && innovator.impactArea.includes(selectedImpactArea));

      return matchesSearch && matchesDomain && matchesCategory && matchesCountry && matchesImpactArea;
    }).sort((a,b) => a.name.localeCompare(b.name));
  }, [searchTerm, selectedDomain, selectedCategory, selectedCountry, selectedImpactArea]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedDomain('All');
    setSelectedCategory('All');
    setSelectedCountry('All');
    setSelectedImpactArea('All');
  };

  const getIconForCategory = (category: InnovatorEntry['category']) => {
    switch(category) {
      case 'Person': return <User className="w-5 h-5 text-primary"/>;
      case 'Company': return <Building className="w-5 h-5 text-primary"/>;
      case 'Startup': return <Rocket className="w-5 h-5 text-primary"/>;
      case 'Research Institution': return <FlaskConical className="w-5 h-5 text-primary"/>;
      case 'Open Source Project': return <Globe className="w-5 h-5 text-primary"/>;
      case 'Global Initiative': return <Users className="w-5 h-5 text-primary"/>;
      default: return <Star className="w-5 h-5 text-primary"/>;
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 space-y-12 md:space-y-16">
      <header className="text-center mb-12 md:mb-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-primary flex items-center justify-center gap-3">
          <Users className="w-10 h-10" /> Key Innovators & Trailblazers
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Discover the people, companies, and institutions driving progress across critical technology domains worldwide.
        </p>
      </header>

      <Section title="Filter Innovators" titleIcon={<Filter className="w-5 h-5 text-primary" />} description="Refine your search by domain, category, country, or impact area." className="bg-muted/30 p-6 rounded-xl shadow-none hover:shadow-none">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 items-end">
          <div className="space-y-1.5 md:col-span-2 lg:col-span-3">
            <Label htmlFor="search-innovators">Search by Name or Keyword</Label>
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                    id="search-innovators"
                    placeholder="e.g., OpenAI, Jennifer Doudna, Quantum..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-background h-10"
                />
            </div>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="domain-select-innovators">Tech Domain</Label>
            <Select value={selectedDomain} onValueChange={setSelectedDomain}>
              <SelectTrigger id="domain-select-innovators" className="bg-background h-10"><SelectValue placeholder="All Domains" /></SelectTrigger>
              <SelectContent>{allDomains.map(d => <SelectItem key={d} value={d}>{d}</SelectItem>)}</SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="category-select-innovators">Category</Label>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger id="category-select-innovators" className="bg-background h-10"><SelectValue placeholder="All Categories" /></SelectTrigger>
              <SelectContent>{allCategories.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="country-select-innovators">Country</Label>
            <Select value={selectedCountry} onValueChange={setSelectedCountry}>
              <SelectTrigger id="country-select-innovators" className="bg-background h-10"><SelectValue placeholder="All Countries" /></SelectTrigger>
              <SelectContent>{allCountries.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
            </Select>
          </div>
           <div className="space-y-1.5">
            <Label htmlFor="impact-select-innovators">Impact Area</Label>
            <Select value={selectedImpactArea} onValueChange={setSelectedImpactArea}>
              <SelectTrigger id="impact-select-innovators" className="bg-background h-10"><SelectValue placeholder="All Impact Areas" /></SelectTrigger>
              <SelectContent>{allImpactAreas.map(area => <SelectItem key={area} value={area}>{area}</SelectItem>)}</SelectContent>
            </Select>
          </div>
          <Button onClick={clearFilters} variant="outline" className="w-full md:w-auto md:col-start-2 lg:col-start-3 h-10">
            <XCircle className="mr-2 h-4 w-4" /> Clear Filters
          </Button>
        </div>
      </Section>

      <Section title="Innovator Profiles" titleIcon={<Star className="w-6 h-6 text-primary" />} description={`Displaying ${filteredInnovators.length} of ${allInnovatorsData.length} innovators.`} className="rounded-xl">
        {filteredInnovators.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredInnovators.map((innovator) => (
              <Card key={innovator.id} className="flex flex-col bg-card border-border hover:shadow-xl hover:border-primary/40 transition-all duration-300 ease-in-out group rounded-lg">
                 <CardHeader className="pb-3">
                  <div className="flex justify-between items-start mb-2">
                     <div className="flex items-center gap-2">
                        {innovator.logoIcon || getIconForCategory(innovator.category)}
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">{innovator.name}</CardTitle>
                     </div>
                     <Badge variant="secondary" className="text-xs">{innovator.category}</Badge>
                  </div>
                  <CardDescription className="text-xs pt-1">
                    <span className="font-semibold">Domains:</span> {innovator.domain.join(', ')} | <span className="font-semibold">Country:</span> {innovator.country}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow space-y-2 text-sm">
                  <p className="text-muted-foreground line-clamp-3 group-hover:line-clamp-none transition-all">
                    {innovator.description}
                  </p>
                  <div>
                    <h4 className="font-semibold text-xs text-muted-foreground mb-0.5">Key Achievements:</h4>
                    <ul className="list-disc list-inside pl-4 text-xs text-card-foreground/90">
                      {innovator.keyAchievements.slice(0, 2).map((ach, i) => <li key={i} className="line-clamp-1">{ach}</li>)}
                      {innovator.keyAchievements.length > 2 && <li className="italic">+{innovator.keyAchievements.length - 2} more</li>}
                    </ul>
                  </div>
                  {innovator.impactArea && innovator.impactArea.length > 0 && (
                    <div className="pt-1">
                      <h4 className="font-semibold text-xs text-muted-foreground mb-0.5">Impact Areas:</h4>
                      <div className="flex flex-wrap gap-1">
                        {innovator.impactArea.slice(0, 3).map(area => <Badge key={area} variant="outline" className="text-xs">{area}</Badge>)}
                        {innovator.impactArea.length > 3 && <Badge variant="outline" className="text-xs">+{innovator.impactArea.length - 3} more</Badge>}
                      </div>
                    </div>
                  )}
                </CardContent>
                <CardFooter className="pt-4 border-t border-border">
                  {innovator.learnMoreUrl ? (
                    <a href={innovator.learnMoreUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        Learn More <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  ) : (
                     <Button variant="outline" size="sm" className="w-full" disabled>Details Unavailable</Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
           <Card className="text-center text-muted-foreground p-6 md:p-8 border-dashed border-border bg-muted/20 rounded-lg">
            <CardContent className="p-0">
              <Search className="w-10 h-10 text-primary/50 mx-auto mb-3" />
              <p className="text-md">No innovators match your current filter criteria. Please try broadening your search.</p>
            </CardContent>
          </Card>
        )}
      </Section>
      
      <Section title="Nominate an Innovator" titleIcon={<User className="w-6 h-6 text-primary" />} description="This feature is not yet implemented. We plan to allow community nominations." className="bg-muted/30 py-8 rounded-xl text-center">
        <Button variant="secondary" disabled>Nominate (Planned Feature)</Button>
         <p className="text-xs text-muted-foreground mt-2">Help us recognize the individuals and organizations shaping the future.</p>
      </Section>
    </div>
  );
}
