
'use client';

import { Section } from '@/components/Section';
import { Flag, Target, Megaphone, Link as LinkIcon, ExternalLink, BookOpen, Search, Filter as FilterIcon, XCircle } from 'lucide-react'; // Added Search, FilterIcon, XCircle
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { useState, useMemo } from 'react'; // Added hooks
import { Input } from '@/components/ui/input'; // Added Input
import { Label } from '@/components/ui/label'; // Added Label
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'; // Added Select

interface Strategy {
  id: string;
  country: string;
  title: string;
  focus: string;
  description: string;
  icon?: React.ReactNode; 
  status?: 'Active' | 'Proposed' | 'Completed' | 'Ongoing'; 
  learnMoreLink?: string; 
  yearLaunched?: number; // Added year
}

const strategiesData: Strategy[] = [
  {
    id: 'india-quantum',
    country: 'India',
    title: 'National Quantum Mission (NQM)',
    focus: 'Quantum Computing & Communication',
    description: 'Aims to foster R&D, build quantum hardware, develop applications in computing, communication, and sensing, and position India as a global quantum leader.',
    icon: <Flag className="text-orange-500 w-5 h-5"/>,
    status: 'Active',
    learnMoreLink: 'https://dst.gov.in/national-quantum-mission',
    yearLaunched: 2023
  },
  {
    id: 'us-chips',
    country: 'USA',
    title: 'CHIPS and Science Act',
    focus: 'Semiconductor Manufacturing & R&D',
    description: 'Boosts American semiconductor research, development, manufacturing, and workforce development to strengthen national security and supply chain resilience.',
    icon: <Flag className="text-blue-600 w-5 h-5"/>,
    status: 'Active',
    learnMoreLink: 'https://www.commerce.gov/chips',
    yearLaunched: 2022
  },
  {
    id: 'eu-ai',
    country: 'European Union',
    title: 'EU AI Act',
    focus: 'AI Regulation & Ethics',
    description: 'Aims to establish a harmonized legal framework for Artificial Intelligence, categorizing AI systems by risk level to ensure safety and fundamental rights.',
    icon: <Flag className="text-yellow-500 w-5 h-5"/>, 
    status: 'Proposed', 
    learnMoreLink: 'https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai',
    yearLaunched: 2021 // Year of proposal
  },
   {
    id: 'china-ai-2030',
    country: 'China',
    title: 'Next Generation AI Development Plan',
    focus: 'AI Leadership & Integration',
    description: 'Outlines China\'s comprehensive strategy to become a global leader in AI theory, technology, and application across various sectors by 2030.',
    icon: <Flag className="text-red-600 w-5 h-5"/>,
    status: 'Ongoing', // Typically these are multi-year plans
    yearLaunched: 2017
  },
   {
    id: 'uk-innovation-strategy',
    country: 'United Kingdom',
    title: 'UK Innovation Strategy',
    focus: 'Broad Innovation Ecosystem',
    description: 'A long-term plan to make the UK a global hub for innovation by 2035, focusing on private sector investment, talent, and key technologies.',
    icon: <Flag className="text-blue-700 w-5 h-5"/>, 
    status: 'Active',
    learnMoreLink: 'https://www.gov.uk/government/publications/uk-innovation-strategy-leading-the-future-by-creating-it',
    yearLaunched: 2021
  },
];

const allCountries = ['All', ...new Set(strategiesData.map(s => s.country))].sort();
const allFocusAreas = ['All', ...new Set(strategiesData.map(s => s.focus))].sort();
const allStatuses = ['All', 'Active', 'Proposed', 'Completed', 'Ongoing'];


export function NationalStrategies() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('All');
  const [selectedFocus, setSelectedFocus] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');

  const filteredStrategies = useMemo(() => {
    return strategiesData.filter(strategy => {
      const matchesSearch = searchTerm === '' ||
        strategy.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        strategy.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCountry = selectedCountry === 'All' || strategy.country === selectedCountry;
      const matchesFocus = selectedFocus === 'All' || strategy.focus === selectedFocus;
      const matchesStatus = selectedStatus === 'All' || strategy.status === selectedStatus;
      return matchesSearch && matchesCountry && matchesFocus && matchesStatus;
    }).sort((a,b) => (b.yearLaunched || 0) - (a.yearLaunched || 0)); // Sort by most recent
  }, [searchTerm, selectedCountry, selectedFocus, selectedStatus]);
  
  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCountry('All');
    setSelectedFocus('All');
    setSelectedStatus('All');
  }

  return (
    <>
      <Card className="mb-6 bg-muted/30 border-border p-5 rounded-lg">
        <CardHeader className="p-0 pb-4">
          <CardTitle className="flex items-center gap-2 text-lg"><FilterIcon className="w-5 h-5 text-primary"/> Filter National Initiatives</CardTitle>
          <CardDescription className="text-xs pt-1">Refine the list of strategies by country, focus, status, or keywords.</CardDescription>
        </CardHeader>
        <CardContent className="p-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-end">
          <div className="space-y-1.5 lg:col-span-3">
            <Label htmlFor="strategy-search-term">Keyword Search</Label>
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                    id="strategy-search-term"
                    placeholder="Search title, description..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-background h-10"
                />
            </div>
          </div>
          <div className='space-y-1.5'>
            <Label htmlFor="strategy-country-select">Country</Label>
            <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                <SelectTrigger id="strategy-country-select" className="h-10 bg-background"><SelectValue placeholder="Country" /></SelectTrigger>
                <SelectContent>{allCountries.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
            </Select>
          </div>
          <div className='space-y-1.5'>
            <Label htmlFor="strategy-focus-select">Focus Area</Label>
            <Select value={selectedFocus} onValueChange={setSelectedFocus}>
                <SelectTrigger id="strategy-focus-select" className="h-10 bg-background"><SelectValue placeholder="Focus" /></SelectTrigger>
                <SelectContent>{allFocusAreas.map(f => <SelectItem key={f} value={f}>{f}</SelectItem>)}</SelectContent>
            </Select>
          </div>
           <div className='space-y-1.5'>
            <Label htmlFor="strategy-status-select">Status</Label>
            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger id="strategy-status-select" className="h-10 bg-background"><SelectValue placeholder="Status" /></SelectTrigger>
                <SelectContent>{allStatuses.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
            </Select>
          </div>
          <Button onClick={clearFilters} variant="outline" size="sm" className="h-10 w-full sm:w-auto lg:col-start-3">
            <XCircle className="mr-2 h-4 w-4"/> Clear Filters
          </Button>
        </CardContent>
      </Card>

      {filteredStrategies.length > 0 ? (
        <div className="space-y-6">
          {filteredStrategies.map((strategy) => (
            <Card key={strategy.id} className="bg-background border-border hover:shadow-lg hover:border-primary/30 transition-all duration-300 ease-in-out group rounded-lg">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start mb-1">
                  <CardTitle className="text-lg flex items-center gap-2 group-hover:text-primary transition-colors">
                    {strategy.icon || <Flag className="w-5 h-5 text-primary"/>}
                    {strategy.title}
                  </CardTitle>
                  {strategy.status && <Badge variant={strategy.status === 'Active' || strategy.status === 'Ongoing' ? 'default' : 'secondary'} className="text-xs shrink-0">{strategy.status}</Badge>}
                </div>
                 <CardDescription className="text-sm pt-1 space-x-2">
                    <span>{strategy.country}</span>
                    <Badge variant="outline">{strategy.focus}</Badge>
                    {strategy.yearLaunched && <Badge variant="outline" className="font-mono">Launched: {strategy.yearLaunched}</Badge>}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-clamp-3 group-hover:line-clamp-none transition-all">{strategy.description}</p>
              </CardContent>
               <CardFooter className="pt-3 border-t border-border">
                  {strategy.learnMoreLink ? (
                      <a href={strategy.learnMoreLink} target="_blank" rel="noopener noreferrer" className="w-full">
                          <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                              Learn More <ExternalLink className="ml-2 h-4 w-4" />
                          </Button>
                      </a>
                  ) : (
                      <Button variant="outline" size="sm" disabled className="w-full">
                          Details Unavailable <BookOpen className="ml-2 h-4 w-4" />
                      </Button>
                  )}
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="text-center text-muted-foreground p-6 md:p-8 border-dashed border-border bg-muted/20 rounded-lg">
            <CardContent className="p-0">
             <Megaphone className="w-10 h-10 text-primary/50 mx-auto mb-3" />
            <p className="text-md">No national initiatives match the current filters. Try broadening your search criteria.</p>
            </CardContent>
        </Card>
      )}
      <p className="text-xs text-muted-foreground text-center pt-4">
          This is a representative list. More strategies, detailed analysis, comparison tools, and update subscriptions are planned for future enhancements.
      </p>
    </>
  );
}
