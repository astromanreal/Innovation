
'use client';

import { useState, useMemo, useEffect } from 'react';
import { Section } from '@/components/Section';
import { Award, Users, FlaskConical, Milestone, Globe, BookOpen, Lightbulb, Atom, ArrowRight, Filter, CalendarDays, ExternalLink, Drama, Search, MapPin, TrendingUp, ShieldCheck, Info, HelpCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import type { ReactNode } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface NobelInsight {
  id: string;
  title: string;
  prizeYear: number;
  field: 'Physiology or Medicine' | 'Physics' | 'Chemistry' | 'Interdisciplinary';
  laureates: { name: string; bio: string; nationality?: string; affiliations?: string[]; multipleWins?: boolean }[];
  principle: string;
  impactGlobal: string; 
  impactIndustry: string; 
  icon: ReactNode;
  learnMoreUrl: string;
}

const insights: NobelInsight[] = [
  {
    id: 'penicillin',
    title: 'Discovery of Penicillin',
    prizeYear: 1945,
    field: 'Physiology or Medicine',
    laureates: [
      { name: 'Alexander Fleming', bio: 'Scottish physician and microbiologist, noted for his discovery of penicillin.', nationality: 'Scottish', affiliations: ['St Mary\'s Hospital, London'] },
      { name: 'Ernst Chain', bio: 'German-British biochemist, co-recipient for work on penicillin.', nationality: 'German-British', affiliations: ['University of Oxford'] },
      { name: 'Howard Florey', bio: 'Australian pharmacologist and pathologist, shared the prize for developing penicillin for medical use.', nationality: 'Australian', affiliations: ['University of Oxford'] }
    ],
    principle: 'Identification of penicillin, an antibiotic derived from Penicillium mold, which inhibits bacterial growth by interfering with cell wall synthesis.',
    impactGlobal: 'Revolutionized bacterial infection treatment, dramatically reducing mortality rates from diseases like pneumonia, syphilis, and wound infections worldwide.',
    impactIndustry: 'Paved the way for the entire antibiotic industry, leading to the development of numerous other life-saving drugs and significantly impacting pharmaceutical manufacturing.',
    icon: <FlaskConical className="w-6 h-6 text-primary" />,
    learnMoreUrl: 'https://www.nobelprize.org/prizes/medicine/1945/summary/'
  },
  {
    id: 'transistor',
    title: 'Invention of the Transistor',
    prizeYear: 1956,
    field: 'Physics',
    laureates: [
        { name: 'John Bardeen', bio: 'American physicist and engineer, the only person awarded the Nobel Prize in Physics twice (also in 1972 for superconductivity).', nationality: 'American', affiliations: ['Bell Labs'], multipleWins: true },
        { name: 'Walter Brattain', bio: 'American physicist who worked on surface states and the transistor effect.', nationality: 'American', affiliations: ['Bell Labs'] },
        { name: 'William Shockley', bio: 'American physicist and inventor, key figure in the development of the transistor.', nationality: 'American', affiliations: ['Bell Labs'] }
    ],
    principle: 'Development of the transistor effect in semiconductors, allowing amplification and switching of electronic signals with a solid-state device, replacing bulky vacuum tubes.',
    impactGlobal: 'Became the fundamental building block of all modern electronics, leading to the digital revolution and a connected world.',
    impactIndustry: 'Enabled the creation of smaller, cheaper, and more reliable electronic devices: computers, radios, TVs, and later, integrated circuits, microprocessors, and smartphones.',
    icon: <Atom className="w-6 h-6 text-primary" />,
    learnMoreUrl: 'https://www.nobelprize.org/prizes/physics/1956/summary/'
  },
  {
    id: 'dna-structure',
    title: 'Structure of DNA',
    prizeYear: 1962,
    field: 'Physiology or Medicine',
    laureates: [
        { name: 'Francis Crick', bio: 'British molecular biologist, biophysicist, and neuroscientist.', nationality: 'British', affiliations: ['University of Cambridge'] },
        { name: 'James Watson', bio: 'American molecular biologist, geneticist and zoologist.', nationality: 'American', affiliations: ['University of Cambridge', 'Harvard University'] },
        { name: 'Maurice Wilkins', bio: 'New Zealand-born British physicist and molecular biologist, contributed key X-ray diffraction data.', nationality: 'New Zealander/British', affiliations: ['King\'s College London'] }
    ],
    principle: 'Elucidation of the double helix structure of deoxyribonucleic acid (DNA), revealing the molecular mechanism for genetic information storage, replication, and transmission.',
    impactGlobal: 'Unlocked the secrets of heredity, evolution, and molecular biology, transforming our understanding of life itself.',
    impactIndustry: 'Foundation for genetic engineering, biotechnology (e.g., recombinant DNA technology), DNA fingerprinting, personalized medicine, and the entire genomics industry.',
    icon: <FlaskConical className="w-6 h-6 text-primary" />,
    learnMoreUrl: 'https://www.nobelprize.org/prizes/medicine/1962/summary/'
  },
  {
    id: 'crispr',
    title: 'Development of CRISPR-Cas9',
    prizeYear: 2020,
    field: 'Chemistry',
    laureates: [
        { name: 'Emmanuelle Charpentier', bio: 'French professor and researcher in microbiology, genetics, and biochemistry.', nationality: 'French', affiliations: ['Max Planck Unit for the Science of Pathogens'] },
        { name: 'Jennifer Doudna', bio: 'American biochemist known for her pioneering work in CRISPR gene editing.', nationality: 'American', affiliations: ['University of California, Berkeley'] }
    ],
    principle: 'Development of the CRISPR-Cas9 genetic scissors, a precise, programmable, and versatile tool for modifying DNA in living organisms by targeting specific gene sequences.',
    impactGlobal: 'Offers unprecedented potential for treating inherited diseases, developing new diagnostics, and addressing global challenges like food security and infectious diseases. Also sparked significant ethical discussions.',
    impactIndustry: 'Revolutionized genetic research and biotechnology. Catalyst for numerous startups in gene therapy, drug discovery, diagnostics, and agricultural biotechnology.',
    icon: <FlaskConical className="w-6 h-6 text-primary" />,
    learnMoreUrl: 'https://www.nobelprize.org/prizes/chemistry/2020/summary/'
  },
   {
    id: 'blue-led',
    title: 'Invention of Blue LEDs',
    prizeYear: 2014,
    field: 'Physics',
    laureates: [
        { name: 'Isamu Akasaki', bio: 'Japanese engineer and physicist specializing in semiconductor technology.', nationality: 'Japanese', affiliations: ['Meijo University', 'Nagoya University'] },
        { name: 'Hiroshi Amano', bio: 'Japanese physicist and engineer, known for work on gallium nitride.', nationality: 'Japanese', affiliations: ['Nagoya University'] },
        { name: 'Shuji Nakamura', bio: 'Japanese-American electronic engineer and inventor, specialized in LED technology.', nationality: 'Japanese/American', affiliations: ['University of California, Santa Barbara'] }
    ],
    principle: 'Invention of efficient blue light-emitting diodes (LEDs) using gallium nitride semiconductors, completing the triad of primary colors (red, green, blue) needed for bright, energy-saving white light sources.',
    impactGlobal: 'Enabled a new generation of energy-efficient LED lighting, significantly reducing global electricity consumption and CO2 emissions related to lighting.',
    impactIndustry: 'Led to brighter, more efficient screens for smartphones, TVs, and computers. Key technology for Blu-ray players, automotive lighting, and advancements in water purification using UV LEDs.',
    icon: <Lightbulb className="w-6 h-6 text-primary" />,
    learnMoreUrl: 'https://www.nobelprize.org/prizes/physics/2014/summary/'
  },
   {
    id: 'quasicrystals',
    title: 'Discovery of Quasicrystals',
    prizeYear: 2011,
    field: 'Chemistry', 
    laureates: [
        { name: 'Dan Shechtman', bio: 'Israeli physicist who discovered quasicrystals in the early 1980s, initially met with skepticism.', nationality: 'Israeli', affiliations: ['Technion – Israel Institute of Technology'] }
    ],
    principle: 'Discovery of quasicrystals, materials with ordered but non-repeating (aperiodic) atomic structures, challenging long-held crystallographic paradigms that stated crystals must have periodic structures.',
    impactGlobal: 'Fundamentally changed the definition and understanding of solid matter and crystal structures.',
    impactIndustry: 'Quasicrystals have found applications in non-stick coatings (e.g., for frying pans), surgical instruments, LED lights, and other areas due to their unique properties like hardness, low friction, and corrosion resistance.',
    icon: <Atom className="w-6 h-6 text-primary" />,
    learnMoreUrl: 'https://www.nobelprize.org/prizes/chemistry/2011/summary/'
  },
];

const fields = ['All', 'Physiology or Medicine', 'Physics', 'Chemistry', 'Interdisciplinary'];
const years = ['All', ...Array.from(new Set(insights.map(i => i.prizeYear.toString()))).sort((a, b) => parseInt(b) - parseInt(a))];


export default function NobelPageClient() {
  const [selectedField, setSelectedField] = useState('All');
  const [selectedYear, setSelectedYear] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredInsights = useMemo(() => {
    return insights.filter(insight => {
      const fieldMatch = selectedField === 'All' || insight.field === selectedField;
      const yearMatch = selectedYear === 'All' || insight.prizeYear.toString() === selectedYear;
      const searchMatch = searchTerm === '' ||
        insight.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        insight.principle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        insight.impactGlobal.toLowerCase().includes(searchTerm.toLowerCase()) ||
        insight.impactIndustry.toLowerCase().includes(searchTerm.toLowerCase()) ||
        insight.laureates.some(l => l.name.toLowerCase().includes(searchTerm.toLowerCase()));
      return fieldMatch && yearMatch && searchMatch;
    }).sort((a,b) => b.prizeYear - a.prizeYear);
  }, [selectedField, selectedYear, searchTerm]);

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <header className="text-center mb-12 md:mb-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-primary flex items-center justify-center gap-3">
         <Award className="w-10 h-10" /> Nobel Prize Insights: Science & Technology
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Where the world's most profound scientific breakthroughs come alive. Uncover the stories behind Nobel-recognized discoveries—from life-saving antibiotics to the quantum leap of CRISPR. Learn about the science, meet the laureates, and explore how each breakthrough reshaped the world.
        </p>
      </header>

      <Section title="Filter Discoveries" titleIcon={<Filter className="w-5 h-5 text-primary" />} description="Narrow down insights by field, year, or keywords." className="mb-12 bg-muted/30">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-end">
          <div className="space-y-1.5">
            <Label htmlFor="search-nobel">Search</Label>
            <Input id="search-nobel" placeholder="e.g., CRISPR, Fleming, DNA" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="field-select">Scientific Domain</Label>
            <Select value={selectedField} onValueChange={setSelectedField}>
              <SelectTrigger id="field-select"><SelectValue placeholder="Filter by Field" /></SelectTrigger>
              <SelectContent>{fields.map(f => <SelectItem key={f} value={f}>{f}</SelectItem>)}</SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
             <Label htmlFor="year-select">Prize Year</Label>
             <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger id="year-select"><SelectValue placeholder="Filter by Year" /></SelectTrigger>
                <SelectContent>{years.map(y => <SelectItem key={y} value={y}>{y}</SelectItem>)}</SelectContent>
             </Select>
          </div>
        </div>
      </Section>
      

      <Section title="Discovery Deep Dives" titleIcon={<Search className="w-6 h-6 text-primary" />} description="Explore groundbreaking discoveries recognized by the Nobel Prize." className="rounded-xl">
        {filteredInsights.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filteredInsights.map((insight) => (
                <Card key={insight.id} className="flex flex-col bg-card border-border hover:shadow-xl hover:border-primary/40 transition-all duration-300 ease-in-out group rounded-lg">
                    <CardHeader className="pt-5 pb-3">
                        <div className="flex justify-between items-start mb-2">
                            <div className="flex items-center gap-2 text-primary text-sm">
                                {insight.icon} 
                                <span className="uppercase tracking-wider">{insight.field}</span>
                            </div>
                            <Badge variant="secondary" className="text-sm">{insight.prizeYear}</Badge>
                        </div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                            {insight.title}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow space-y-3 text-sm pt-0"> 
                        <div>
                            <h4 className="font-semibold mb-1 flex items-center gap-1.5 text-sm text-primary"><Lightbulb className="w-4 h-4"/> Scientific Principle:</h4>
                            <p className="text-xs text-muted-foreground line-clamp-3 group-hover:line-clamp-none transition-all">{insight.principle}</p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-1 flex items-center gap-1.5 text-sm text-primary"><Users className="w-4 h-4"/> Laureates:</h4>
                            <ul className="space-y-0.5">
                            {insight.laureates.map((laureate, idx) => (
                                <li key={idx} className="text-xs text-muted-foreground ml-2">
                                    <span className="font-medium text-card-foreground">{laureate.name}</span>
                                    {laureate.nationality && ` (${laureate.nationality})`}
                                    {laureate.affiliations && laureate.affiliations.length > 0 && ` - ${laureate.affiliations.join(', ')}`}
                                    {laureate.multipleWins && <Badge variant="outline" className="ml-1 text-xs">Multiple Wins</Badge>}
                                </li>
                            ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-1 flex items-center gap-1.5 text-sm text-primary"><Globe className="w-4 h-4"/> Global Impact:</h4>
                            <p className="text-xs text-muted-foreground line-clamp-2 group-hover:line-clamp-none transition-all">{insight.impactGlobal}</p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-1 flex items-center gap-1.5 text-sm text-primary"><FlaskConical className="w-4 h-4"/> Industry Application:</h4>
                            <p className="text-xs text-muted-foreground line-clamp-2 group-hover:line-clamp-none transition-all">{insight.impactIndustry}</p>
                        </div>
                    </CardContent>
                    <CardFooter className="pt-4 pb-5 border-t border-border"> 
                    <a href={insight.learnMoreUrl} target="_blank" rel="noopener noreferrer" className='w-full'>
                        <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            Learn More on NobelPrize.org
                            <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                    </a>
                    </CardFooter>
                </Card>
                ))}
            </div>
            ) : (
             <Card className="text-center text-muted-foreground p-6 md:p-8 border-dashed border-border bg-muted/20 rounded-lg">
                <CardContent className="p-0">
                    <Search className="w-10 h-10 text-primary/50 mx-auto mb-3" />
                    <p className="text-md">No Nobel insights match your current filter criteria. Please adjust your search.</p>
                </CardContent>
            </Card>
            )}
      </Section>
      
      <Section title="Hidden Gems & Controversial Moments" titleIcon={<Drama className="w-6 h-6 text-primary" />} description="Explore lesser-known stories and discussions around the Nobel Prizes." className="my-12">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-primary hover:text-primary/80">Did You Know? Rosalind Franklin's Contribution</AccordionTrigger>
            <AccordionContent>
              Rosalind Franklin's X-ray diffraction images were crucial to Watson and Crick's discovery of the DNA double helix, though she was not awarded the Nobel Prize, as it is not awarded posthumously and she had passed away before the prize was given for this work. Her contribution is widely recognized as pivotal.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-primary hover:text-primary/80">Ethical Debates: CRISPR-Cas9</AccordionTrigger>
            <AccordionContent>
              The development of CRISPR-Cas9 gene editing technology has sparked intense ethical debates regarding its use in human germline editing, potential for designer babies, and off-target effects. Global discussions continue on establishing guidelines.
            </AccordionContent>
          </AccordionItem>
           <AccordionItem value="item-3">
            <AccordionTrigger className="text-primary hover:text-primary/80">Missed Recognitions: Lise Meitner</AccordionTrigger>
            <AccordionContent>
              Lise Meitner, a physicist who was central to the discovery of nuclear fission and coined the term "fission," was overlooked for the Nobel Prize in Chemistry awarded for this discovery in 1944, which went solely to Otto Hahn. Many historians and scientists consider this a significant omission.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Section>

       <Section title="Official & External Resources" titleIcon={<HelpCircle className="w-6 h-6 text-primary" />} description="Further your exploration with these resources." className="my-12">
          <Card className="bg-card p-6 rounded-lg shadow-sm">
            <CardContent className="space-y-3">
                <p className="text-muted-foreground">While each discovery card links directly to NobelPrize.org, consider these additional avenues for deeper research:</p>
                <ul className="list-disc list-inside space-y-2 text-sm">
                    <li><a href="https://www.nobelprize.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">The Official Nobel Prize Website</a>: For full laureate biographies, lectures, and educational materials.</li>
                    <li><span className="text-foreground">Peer-Reviewed Journals</span>: Search for original papers and reviews in journals like Nature, Science, Cell, The Lancet, Physical Review Letters, etc., related to specific discoveries.</li>
                    <li><span className="text-foreground">Educational Platforms</span>: Look for courses or lectures on platforms like Coursera, edX, Khan Academy, and YouTube channels of universities or scientific institutions.</li>
                </ul>
            </CardContent>
          </Card>
      </Section>

    </div>
  );
}

    
