
'use client';

import { useState, useMemo } from 'react';
import { Section } from '@/components/Section';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Filter, Search, Lightbulb, FileText, XCircle } from 'lucide-react';
import { Label } from '@/components/ui/label'; 
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'; // Added missing Select imports
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface GlossaryTerm {
  id: string;
  term: string;
  definition: string;
  category: string; 
  relatedTerms?: string[];
}

const glossaryData: GlossaryTerm[] = [
  { id: 'g1', term: 'Artificial Intelligence (AI)', definition: 'The theory and development of computer systems able to perform tasks normally requiring human intelligence, such as visual perception, speech recognition, decision-making, and translation between languages.', category: 'AI', relatedTerms: ['Machine Learning', 'Deep Learning', 'AGI'] },
  { id: 'g2', term: 'Machine Learning (ML)', definition: 'A subset of AI that provides systems the ability to automatically learn and improve from experience without being explicitly programmed.', category: 'AI', relatedTerms: ['Supervised Learning', 'Unsupervised Learning', 'Reinforcement Learning'] },
  { id: 'g3', term: 'Blockchain', definition: 'A decentralized, distributed, and often public digital ledger consisting of records called blocks that is used to record transactions across many computers so that any involved block cannot be altered retroactively, without the alteration of all subsequent blocks.', category: 'Blockchain', relatedTerms: ['Cryptocurrency', 'Smart Contract', 'DeFi'] },
  { id: "g4", term: "Quantum Computing", definition: "A type of computation that harnesses the collective properties of quantum states, such as superposition, interference, and entanglement, to perform calculations. Quantum computers are believed to be able to solve certain computational problems substantially faster than classical computers.", category: "Quantum Computing", relatedTerms: ["Qubit", "Superposition", "Entanglement"] },
  { id: "g5", term: "CRISPR (Clustered Regularly Interspaced Short Palindromic Repeats)", definition: "A family of DNA sequences found in the genomes of prokaryotic organisms such as bacteria and archaea. These sequences are derived from DNA fragments of bacteriophages that had previously infected the prokaryote and are used to detect and destroy DNA from similar bacteriophages during subsequent infections. They form the basis of a powerful gene editing technology.", category: "Bioengineering", relatedTerms: ["Gene Editing", "Cas9", "Genomics"] },
  { id: "g6", term: "Internet of Things (IoT)", definition: "The network of physical objects—'things'—that are embedded with sensors, software, and other technologies for the purpose of connecting and exchanging data with other devices and systems over the Internet.", category: "General Tech", relatedTerms: ["Smart Devices", "Sensors", "Connectivity"] },
  { id: 'g7', term: 'AGI (Artificial General Intelligence)', definition: 'A hypothetical type of intelligent agent that can learn to accomplish any intellectual task that human beings can.', category: 'AI', relatedTerms: ['AI', 'Singularity'] },
  { id: 'g8', term: 'Qubit', definition: 'The basic unit of quantum information—the quantum version of the classical binary bit. A qubit can be in a superposition of 0 and 1.', category: 'Quantum Computing', relatedTerms: ['Quantum Computing', 'Superposition'] },
  { id: 'g9', term: 'Smart Contract', definition: 'Self-executing contracts with the terms of the agreement directly written into code. They run on a blockchain, meaning they are stored on a decentralized and distributed network.', category: 'Blockchain', relatedTerms: ['Blockchain', 'Ethereum', 'DeFi'] },
  { id: 'g10', term: 'Generative AI', definition: 'A type of artificial intelligence system capable of generating text, images, or other media in response to prompts. Models like GPT and DALL-E are examples.', category: 'AI', relatedTerms: ['AI', 'Large Language Model (LLM)'] },
];

const allCategories = ['All', ...new Set(glossaryData.map(item => item.category))].sort();

export default function GlossaryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredTerms = useMemo(() => {
    return glossaryData.filter(item => {
      const matchesSearch = searchTerm === '' ||
        item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.definition.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    }).sort((a, b) => a.term.localeCompare(b.term));
  }, [searchTerm, selectedCategory]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <header className="text-center mb-12 md:mb-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-primary flex items-center justify-center gap-3">
          <BookOpen className="w-10 h-10" /> Innovation Glossary
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Your A-Z guide to understanding the key terms and concepts shaping the world of technology and innovation.
        </p>
      </header>

      <Section title="Filter & Search Terms" titleIcon={<Filter className="w-5 h-5 text-primary" />} description="Find specific terms quickly or browse by category." className="mb-12 bg-muted/30 p-6 rounded-xl shadow-none hover:shadow-none">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
          <div className="md:col-span-2 space-y-1.5">
            <Label htmlFor="search-glossary">Search Term or Definition</Label>
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                    id="search-glossary"
                    placeholder="e.g., AI, Blockchain, Qubit..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-background h-10"
                />
            </div>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="category-glossary-select">Category</Label>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger id="category-glossary-select" className="bg-background h-10"><SelectValue placeholder="All Categories" /></SelectTrigger>
                <SelectContent>
                    {allCategories.map(category => (
                        <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                </SelectContent>
            </Select>
          </div>
           <Button onClick={clearFilters} variant="outline" className="md:col-start-3 h-10">
            <XCircle className="mr-2 h-4 w-4" /> Clear Filters
          </Button>
        </div>
      </Section>

      <Section title="Glossary Entries" titleIcon={<FileText className="w-6 h-6 text-primary" />} description={`Displaying ${filteredTerms.length} of ${glossaryData.length} terms.`} className="rounded-xl">
        {filteredTerms.length > 0 ? (
           <Accordion type="multiple" className="w-full space-y-3">
            {filteredTerms.map((item) => (
                <AccordionItem key={item.id} value={item.id} className="border-none">
                    <Card className="overflow-hidden border-border hover:border-primary/30 transition-colors duration-300 bg-card">
                        <AccordionTrigger className="p-4 hover:bg-accent/10 hover:no-underline [&[data-state=open]]:bg-accent/20 w-full rounded-t-md text-left">
                        <div className="flex items-center gap-3">
                            <Lightbulb className="w-5 h-5 text-primary flex-shrink-0"/>
                            <div>
                                <h4 className="text-md font-semibold text-primary">{item.term}</h4>
                                <Badge variant="secondary" className="mt-1 text-xs">{item.category}</Badge>
                            </div>
                        </div>
                        </AccordionTrigger>
                        <AccordionContent className="p-4 text-sm text-muted-foreground bg-secondary/30 rounded-b-md border-t border-border">
                        <p className="mb-2">{item.definition}</p>
                        {item.relatedTerms && item.relatedTerms.length > 0 && (
                            <div className="mt-2">
                                <strong className="text-xs text-foreground">Related Terms:</strong>
                                <div className="flex flex-wrap gap-1 mt-1">
                                    {item.relatedTerms.map(rt => <Badge key={rt} variant="outline" className="text-xs">{rt}</Badge>)}
                                </div>
                            </div>
                        )}
                        </AccordionContent>
                    </Card>
                </AccordionItem>
            ))}
          </Accordion>
        ) : (
          <Card className="text-center text-muted-foreground p-6 md:p-8 border-dashed border-border bg-muted/20 rounded-lg">
            <CardContent className="p-0">
                <Search className="w-10 h-10 text-primary/50 mx-auto mb-3" />
                <p className="text-md">No glossary terms match your current filter criteria. Please adjust your search.</p>
            </CardContent>
          </Card>
        )}
      </Section>
      
      <Section title="Contribute to the Glossary" titleIcon={<Lightbulb className="w-6 h-6 text-primary" />} description="This feature is not yet implemented." className="bg-muted/30 py-8 rounded-xl text-center">
         <p className="text-muted-foreground mb-4">We plan to allow community contributions and suggestions in the future.</p>
        <Button variant="secondary" disabled>Suggest a Term (Planned)</Button>
      </Section>
    </div>
  );
}
