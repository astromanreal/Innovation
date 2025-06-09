
'use client';

import { useState, useMemo, useEffect } from 'react';
import { Section } from '@/components/Section';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Library, Filter, Search, FileText, Users, CalendarDays, Download, BarChart2, ArrowRight, Edit, Wand2, ThumbsUp, Bookmark, Bell, XCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

interface ResearchItem {
  id: string;
  title: string;
  type: 'Paper' | 'Article' | 'Report';
  authors: string[];
  date: string;
  topic: string;
  abstract: string;
  url: string;
  imageUrl: string; // Changed from imageHint
  citations?: number;
  relatedWorksCount?: number;
}

interface VisualContent {
    id: string;
    title: string;
    type: 'Infographic' | 'Chart' | 'Presentation';
    topic: string;
    imageUrl: string;
    downloadUrl: string;
    // imageHint removed as specific URLs are provided
}

const allResearchItems: ResearchItem[] = [
  { id: 'r1', title: 'Advances in Neural Network Architectures for Vision Tasks', type: 'Paper', authors: ['A. Researcher', 'B. Scientist'], date: '2023-10-26', topic: 'AI', abstract: 'This paper explores novel architectures for deep neural networks, demonstrating significant improvements in image recognition and object detection benchmarks.', url: '#', imageUrl: 'https://i.pinimg.com/736x/07/61/31/076131a86e00e39b2530fdd2ce35600f.jpg', citations: 150, relatedWorksCount: 5 },
  { id: 'r2', title: 'Quantum Computing: State of the Art & Future Outlook 2024', type: 'Report', authors: ['Quantum Insights Inc.'], date: '2024-01-15', topic: 'Quantum Computing', abstract: 'A comprehensive report on the current progress, hardware development, algorithmic breakthroughs, and potential challenges in the field of quantum computing.', url: '#', imageUrl: 'https://i.pinimg.com/736x/a6/6d/62/a66d62c46983356f4ef103c65b69656f.jpg', citations: 75 },
  { id: 'r3', title: 'Ethical Considerations in Human Gene Editing: A Global Perspective', type: 'Article', authors: ['Dr. Ethica V.', 'Prof. Genus'], date: '2023-11-01', topic: 'Bioengineering', abstract: 'Discussion on the complex ethical landscape surrounding CRISPR-Cas9 technology, including therapeutic applications and germline modification debates.', url: '#', imageUrl: 'https://i.pinimg.com/736x/9d/3b/41/9d3b416f659e17ab7d81ef2833520a92.jpg' },
  { id: 'r4', title: 'The Transformative Role of Robotics in Modern Logistics', type: 'Article', authors: ['LogiBot Journal'], date: '2024-03-10', topic: 'Robotics', abstract: 'Analyzing the impact of automation and robotics on supply chain efficiency, warehouse management, and last-mile delivery solutions.', url: '#', imageUrl: 'https://i.pinimg.com/736x/8c/4e/66/8c4e66f7d6850b42aad6693855e6e3cd.jpg', relatedWorksCount: 3 },
  { id: 'r5', title: 'Decentralized Finance (DeFi): An In-Depth Analysis of Protocols and Risks', type: 'Report', authors: ['Crypto Analysis Group'], date: '2023-12-05', topic: 'Blockchain', abstract: 'An overview of prominent DeFi protocols, their mechanisms, associated risks (e.g., smart contract vulnerabilities, impermanent loss), and future potential.', url: '#', imageUrl: 'https://i.pinimg.com/736x/22/14/15/22141567a7255fcb3597ec9a60e26eec.jpg' },
  { id: 'r6', title: 'Nanomaterials for Next-Generation Energy Storage Solutions', type: 'Paper', authors: ['Nano Energy Lab'], date: '2024-02-20', topic: 'Nanotechnology', abstract: 'Investigating the use of novel nanomaterials in enhancing the performance, capacity, and lifespan of next-generation batteries and supercapacitors.', url: '#', imageUrl: 'https://i.pinimg.com/736x/2a/e0/ce/2ae0cefb4bc6915f2f469b7c00684d45.jpg', citations: 120 },
];

const allVisualContent: VisualContent[] = [
  { id: 'v1', title: 'AI Investment Trends 2024: A Global Snapshot', type: 'Chart', topic: 'AI', imageUrl: 'https://i.pinimg.com/736x/e1/67/d3/e167d3a496d6c60198e5f819f5bfa6e2.jpg', downloadUrl: '#' },
  { id: 'v2', title: 'Infographic: Timeline of Quantum Computing Milestones', type: 'Infographic', topic: 'Quantum Computing', imageUrl: 'https://i.pinimg.com/736x/23/77/29/23772960415b01c66b5cecbca2c64684.jpg', downloadUrl: '#' },
  { id: 'v3', title: 'Blockchain Adoption Rates by Industry Sector', type: 'Chart', topic: 'Blockchain', imageUrl: 'https://i.pinimg.com/736x/3b/f1/29/3bf129cb5387d75791ff73bdb696e168.jpg', downloadUrl: '#' },
  { id: 'v4', title: 'The Evolution of Robotics: Key Developments', type: 'Presentation', topic: 'Robotics', imageUrl: 'https://i.pinimg.com/736x/0b/e9/cb/0be9cb592acf253b37c1d5a4c23970e4.jpg', downloadUrl: '#' },
];

const allTopics = ['All', ...new Set([...allResearchItems.map(item => item.topic), ...allVisualContent.map(item => item.topic)])].sort();
const allAuthors = ['All', ...new Set(allResearchItems.flatMap(item => item.authors))].sort();
const allResourceTypes = ['All', 'Paper', 'Article', 'Report', 'Infographic', 'Chart', 'Presentation'];

export default function ResearchLibraryClient() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [selectedAuthor, setSelectedAuthor] = useState('All');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [currentYear, setCurrentYear] = useState<number | null>(null);
  const { toast } = useToast();

  useEffect(() => {
      setCurrentYear(new Date().getFullYear());
  }, []);

  const filteredResearchItems = useMemo(() => {
    if (selectedType !== 'All' && !['Paper', 'Article', 'Report'].includes(selectedType)) return [];
    return allResearchItems.filter(item => {
      const matchesSearch = searchTerm === '' ||
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.abstract.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.authors.some(author => author.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesTopic = selectedTopic === 'All' || item.topic === selectedTopic;
      const matchesAuthor = selectedAuthor === 'All' || item.authors.includes(selectedAuthor);
      const matchesDate = selectedDate === '' || item.date.startsWith(selectedDate);
      const matchesType = selectedType === 'All' || item.type === selectedType;
      return matchesSearch && matchesTopic && matchesAuthor && matchesDate && matchesType;
    }).sort((a, b) => b.date.localeCompare(a.date));
  }, [searchTerm, selectedTopic, selectedAuthor, selectedDate, selectedType]);

   const filteredVisualContent = useMemo(() => {
    if (selectedType !== 'All' && !['Infographic', 'Chart', 'Presentation'].includes(selectedType)) return [];
    return allVisualContent.filter(item => {
        const matchesTopic = selectedTopic === 'All' || item.topic === selectedTopic;
        const matchesSearch = searchTerm === '' || item.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesType = selectedType === 'All' || item.type === selectedType;
        return matchesTopic && matchesSearch && matchesType;
    });
  }, [selectedTopic, searchTerm, selectedType]);

  const handleResourceClick = (url: string, title: string, isDownload: boolean = false) => {
    if (url === '#') {
      toast({
        title: "Resource Pending",
        description: `The full ${isDownload ? 'downloadable content' : 'resource'} for "${title}" will be available soon.`,
      });
      return false;
    }
    return true;
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedTopic('All');
    setSelectedAuthor('All');
    setSelectedDate('');
    setSelectedType('All');
  };


  return (
    <div className="container mx-auto px-4 py-8 md:py-12 space-y-12 md:space-y-16">
      <header className="text-center mb-12 md:mb-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-primary flex items-center justify-center gap-3">
          <Library className="w-10 h-10" /> Research &amp; Resources Library
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Explore a curated collection of papers, articles, reports, and visual resources covering the landscape of innovation. Use the filters to narrow your search.
        </p>
      </header>

       <Section title="Filter Resources" titleIcon={<Filter className="w-5 h-5 text-primary"/>} description="Refine the library content based on your criteria. Advanced filters for date range and open access are planned." className="bg-muted/30 p-6 rounded-xl shadow-none hover:shadow-none">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 items-end">
            <div className="space-y-1.5 md:col-span-2 lg:col-span-3">
                <Label htmlFor="search-term">Search Term</Label>
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                        id="search-term"
                        placeholder="Keywords, title, author..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 bg-background h-10"
                    />
                 </div>
            </div>
            <div className="space-y-1.5">
                <Label htmlFor="topic-select">Topic</Label>
                <Select value={selectedTopic} onValueChange={setSelectedTopic}>
                    <SelectTrigger id="topic-select" className="bg-background h-10"><SelectValue placeholder="Select Topic" /></SelectTrigger>
                    <SelectContent>{allTopics.map(topic => (<SelectItem key={topic} value={topic}>{topic}</SelectItem>))}</SelectContent>
                </Select>
            </div>
            <div className="space-y-1.5">
                 <Label htmlFor="author-select">Author (for papers/articles)</Label>
                <Select value={selectedAuthor} onValueChange={setSelectedAuthor}>
                    <SelectTrigger id="author-select" className="bg-background h-10"><SelectValue placeholder="Select Author" /></SelectTrigger>
                    <SelectContent>{allAuthors.map(author => (<SelectItem key={author} value={author}>{author}</SelectItem>))}</SelectContent>
                </Select>
            </div>
            <div className="space-y-1.5">
                 <Label htmlFor="date-input">Date (YYYY or YYYY-MM)</Label>
                 <div className="relative">
                     <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                        id="date-input"
                        placeholder={`e.g., ${currentYear ?? '2024'} or ${currentYear ?? '2024'}-03`}
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="pl-10 bg-background h-10"
                    />
                 </div>
            </div>
            <div className="space-y-1.5">
                <Label htmlFor="type-select">Resource Type</Label>
                <Select value={selectedType} onValueChange={setSelectedType}>
                    <SelectTrigger id="type-select" className="bg-background h-10"><SelectValue placeholder="Select Type" /></SelectTrigger>
                    <SelectContent>{allResourceTypes.map(type => (<SelectItem key={type} value={type}>{type}</SelectItem>))}</SelectContent>
                </Select>
            </div>
             <Button onClick={clearFilters} variant="outline" className="w-full md:w-auto lg:col-span-1 lg:col-start-3 h-10 flex items-center">
                <XCircle className="mr-2 h-4 w-4" /> Clear Filters
            </Button>
         </div>
       </Section>

      {(selectedType === 'All' || ['Paper', 'Article', 'Report'].includes(selectedType)) && (
      <Section title="Research Collection" titleIcon={<FileText className="w-6 h-6 text-primary" />} description={`Browse academic papers, insightful articles, and comprehensive reports. ${filteredResearchItems.length} item(s) found.`} className="rounded-xl">
        {filteredResearchItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredResearchItems.map((item) => (
              <Card key={item.id} className="flex flex-col bg-card border-border hover:shadow-xl hover:border-primary/40 transition-all duration-300 ease-in-out group rounded-lg">
                <CardHeader className="pb-3">
                 <div className="relative w-full h-32 rounded-md overflow-hidden mb-3 border bg-secondary">
                    <Image src={item.imageUrl} alt={`${item.title} thumbnail`} layout="fill" objectFit="cover" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors flex items-start gap-2">
                    <FileText className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-xs pt-1 space-y-1">
                    <div><Badge variant="outline" className="mr-2">{item.type}</Badge><Badge variant="secondary">{item.topic}</Badge></div>
                    <div><Users className="inline w-3.5 h-3.5 mr-1"/> {item.authors.join(', ')}</div>
                    <div><CalendarDays className="inline w-3.5 h-3.5 mr-1"/> {new Date(item.date).toLocaleDateString()}</div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow space-y-2">
                  <p className="text-sm text-muted-foreground line-clamp-3 group-hover:line-clamp-none transition-all">
                    {item.abstract}
                  </p>
                  <div className="text-xs text-muted-foreground space-x-2">
                    {item.citations && <span>Cited by: {item.citations}</span>}
                    {item.relatedWorksCount && <span>Related: {item.relatedWorksCount}</span>}
                  </div>
                </CardContent>
                <CardFooter className="pt-4 border-t border-border">
                    <Button
                        variant="outline"
                        size="sm"
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                        onClick={(e) => {
                            if (!handleResourceClick(item.url, item.title)) {
                                e.preventDefault();
                            } else {
                                if (item.url !== '#') window.open(item.url, '_blank');
                            }
                        }}
                        asChild={item.url !== '#'}
                    >
                      {item.url !== '#' ? (
                        <Link href={item.url} target="_blank" rel="noopener noreferrer">
                            Read More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      ) : (
                        <span>Read More <ArrowRight className="ml-2 h-4 w-4" /></span>
                      )}
                    </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="text-center text-muted-foreground p-6 md:p-8 border-dashed border-border bg-muted/20 rounded-lg">
            <CardContent className="p-0">
                <FileText className="w-10 h-10 text-primary/50 mx-auto mb-3" />
                <p>No research items match the current filters. Please adjust your search criteria or try a broader selection.</p>
            </CardContent>
          </Card>
        )}
      </Section>
      )}

      {(selectedType === 'All' || ['Infographic', 'Chart', 'Presentation'].includes(selectedType)) && (
        <Section title="Visual Content Library" titleIcon={<BarChart2 className="w-6 h-6 text-primary" />} description={`Explore infographics, charts, and presentations. ${filteredVisualContent.length} item(s) found.`} className="rounded-xl">
            {filteredVisualContent.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {filteredVisualContent.map((viz) => (
                    <Card key={viz.id} className="flex flex-col bg-card border-border hover:shadow-xl hover:border-primary/40 transition-all duration-300 ease-in-out group rounded-lg overflow-hidden">
                        <div className="relative w-full h-48 overflow-hidden">
                            <Image
                                src={viz.imageUrl}
                                alt={viz.title}
                                width={600}
                                height={300}
                                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-in-out"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        </div>
                        <CardHeader className="pb-2 pt-4">
                            <CardTitle className="text-lg group-hover:text-primary transition-colors flex items-start gap-2">
                                {viz.type === 'Chart' ? <BarChart2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" /> : <FileText className="w-5 h-5 text-accent mt-1 flex-shrink-0" />}
                                {viz.title}
                            </CardTitle>
                             <CardDescription className="text-xs pt-1">
                                <Badge variant="outline" className="mr-2">{viz.type}</Badge>
                                <Badge variant="secondary">{viz.topic}</Badge>
                            </CardDescription>
                        </CardHeader>
                        <CardFooter className="pt-4 mt-auto border-t border-border">
                            <Button
                                variant="outline"
                                size="sm"
                                className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                                onClick={(e) => {
                                    if (!handleResourceClick(viz.downloadUrl, viz.title, true)) {
                                        e.preventDefault();
                                    } else {
                                       if (viz.downloadUrl !== '#') window.open(viz.downloadUrl, '_blank');
                                    }
                                }}
                                asChild={viz.downloadUrl !== '#'}
                            >
                               {viz.downloadUrl !== '#' ? (
                                 <Link href={viz.downloadUrl} target="_blank" rel="noopener noreferrer">
                                    <Download className="mr-2 h-4 w-4" /> Download
                                 </Link>
                               ) : (
                                 <span><Download className="mr-2 h-4 w-4" /> Download</span>
                               )}
                            </Button>
                        </CardFooter>
                    </Card>
                    ))}
                </div>
             ) : (
                <Card className="text-center text-muted-foreground p-6 md:p-8 border-dashed border-border bg-muted/20 rounded-lg">
                    <CardContent className="p-0">
                        <BarChart2 className="w-10 h-10 text-primary/50 mx-auto mb-3" />
                        <p>No visual content items match the current filters. Please adjust your search criteria or try a broader selection.</p>
                    </CardContent>
                </Card>
            )}
        </Section>
      )}

      <Section title="Future Library Enhancements" titleIcon={<Wand2 className="w-6 h-6 text-primary" />} description="We plan to introduce personalized recommendations, user-saved items, alerts for new resources, and community contributions to make this library even more valuable." className="bg-muted/30 py-8 rounded-xl text-center">
        <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" disabled><Bookmark className="mr-2 h-4 w-4"/> My Saved Items (Planned)</Button>
            <Button variant="outline" disabled><Bell className="mr-2 h-4 w-4"/> Manage Alerts (Planned)</Button>
            <Button variant="secondary" disabled><Edit className="mr-2 h-4 w-4" /> Contribute Resource (Planned)</Button>
        </div>
      </Section>
    </div>
  );
}

