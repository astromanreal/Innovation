
'use client';

import { useState, useMemo } from 'react';
import { Section } from '@/components/Section';
import { Milestone, Filter, CalendarDays, Tag, ChevronDown, XCircle, Search } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface TimelineEvent {
  id: number;
  year: string; 
  era?: string; 
  sector: string;
  event: string;
  description: string;
}

const timelineEventsData: TimelineEvent[] = [
  { id: 1, year: '1950', era: 'Foundational Concepts', sector: 'AI', event: 'Turing Test Proposed', description: 'Alan Turing proposes the "Imitation Game," a test of a machine\'s ability to exhibit intelligent behaviour equivalent to, or indistinguishable from, that of a human.' },
  { id: 2, year: '1956', era: 'Foundational Concepts', sector: 'AI', event: 'AI Coined at Dartmouth Workshop', description: 'The term "Artificial Intelligence" is formally coined by John McCarthy and others, marking a pivotal moment in the field.' },
  { id: 3, year: '1969', era: 'Early Networks', sector: 'Networking', event: 'ARPANET Established', description: 'The Advanced Research Projects Agency Network (ARPANET), the precursor to the modern internet, is launched by the US Department of Defense.' },
  { id: 4, year: '1983', era: 'BioTech Revolution', sector: 'Bioengineering', event: 'PCR Invented', description: 'Kary Mullis invents the Polymerase Chain Reaction (PCR) technique, revolutionizing molecular biology and genetic research.' },
  { id: 5, year: '1991', era: 'The Web Emerges', sector: 'Networking', event: 'World Wide Web Goes Public', description: 'Tim Berners-Lee releases the World Wide Web software to the public, making the internet accessible to a broader audience.' },
  { id: 6, year: '2008', era: 'Decentralization Begins', sector: 'Blockchain', event: 'Bitcoin Whitepaper Published', description: 'The pseudonymous Satoshi Nakamoto publishes the whitepaper outlining the Bitcoin peer-to-peer electronic cash system.' },
  { id: 7, year: '2012', era: 'BioTech Revolution', sector: 'Bioengineering', event: 'CRISPR Gene Editing Demonstrated', description: 'Jennifer Doudna and Emmanuelle Charpentier demonstrate the transformative potential of CRISPR-Cas9 for precise gene editing.' },
  { id: 8, year: '2015', era: 'AI Advancement', sector: 'AI', event: 'DeepMind\'s AlphaGo Beats Champion', description: 'Google DeepMind\'s AI defeats Go world champion Lee Sedol, showcasing significant advancements in deep learning and reinforcement learning.' },
  { id: 9, year: '2020', era: 'Quantum Frontiers', sector: 'Quantum Computing', event: 'Significant Quantum Supremacy Claims', description: 'Various research groups claim demonstrations of quantum computers outperforming classical supercomputers on specific, narrow tasks.' },
  { id: 10, year: '2022', era: 'Immersive Worlds', sector: 'AR/VR', event: 'Rise of Metaverse Concepts', description: 'Major tech companies heavily invest in and promote the idea of interconnected, persistent virtual worlds, fueling AR/VR development.' },
];

const sectors = ['All', 'AI', 'Robotics', 'Quantum Computing', 'Blockchain', 'Networking', 'Bioengineering', 'AR/VR', 'Nanotechnology'];
const eras = ['All', ...new Set(timelineEventsData.map(e => e.era).filter(Boolean) as string[])];


export function TechTimeline() {
   const [startYear, setStartYear] = useState('');
   const [endYear, setEndYear] = useState('');
   const [selectedSector, setSelectedSector] = useState('All');
   const [selectedEra, setSelectedEra] = useState('All');
   const [searchTerm, setSearchTerm] = useState('');

   const filteredEvents = useMemo(() => {
        let data = timelineEventsData;
        const startY = parseInt(startYear);
        const endY = parseInt(endYear);

        if (!isNaN(startY)) {
            data = data.filter(item => parseInt(item.year) >= startY);
        }
        if (!isNaN(endY)) {
            data = data.filter(item => parseInt(item.year) <= endY);
        }
        if (selectedSector !== 'All') {
            data = data.filter(item => item.sector === selectedSector);
        }
        if (selectedEra !== 'All') {
            data = data.filter(item => item.era === selectedEra);
        }
        if (searchTerm) {
            data = data.filter(item => 
                item.event.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.sector.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        return data.sort((a, b) => parseInt(a.year) - parseInt(b.year));
   }, [startYear, endYear, selectedSector, selectedEra, searchTerm]);

   const clearFilters = () => {
        setStartYear('');
        setEndYear('');
        setSelectedSector('All');
        setSelectedEra('All');
        setSearchTerm('');
   }

  return (
    <>
      <Card className="mb-6 bg-muted/30 border-border p-5 rounded-lg">
        <CardHeader className="p-0 pb-4">
            <CardTitle className="flex items-center gap-2 text-lg"><Filter className="w-5 h-5 text-primary"/> Filter Timeline Events</CardTitle>
            <CardDescription className="text-xs pt-1">Refine the timeline by year range, sector, era, or keywords.</CardDescription>
        </CardHeader>
        <CardContent className="p-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-end">
           <div className='space-y-1.5'>
               <Label htmlFor="timeline-search-term">Keyword Search</Label>
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                        id="timeline-search-term"
                        placeholder="Search events, sectors..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 bg-background h-10"
                    />
                 </div>
           </div>
           <div className='grid grid-cols-2 gap-2'>
                <div className='space-y-1.5'>
                    <Label htmlFor="start-year">Start Year</Label>
                    <Input id="start-year" type="number" placeholder="e.g., 1950" value={startYear} onChange={(e) => setStartYear(e.target.value)} className="h-10 bg-background"/>
                </div>
                <div className='space-y-1.5'>
                    <Label htmlFor="end-year">End Year</Label>
                    <Input id="end-year" type="number" placeholder="e.g., 2024" value={endYear} onChange={(e) => setEndYear(e.target.value)} className="h-10 bg-background"/>
                </div>
           </div>
           <div className='grid grid-cols-2 gap-2 items-end'>
                <div className='space-y-1.5'>
                    <Label htmlFor="timeline-sector-select">Sector</Label>
                    <Select value={selectedSector} onValueChange={setSelectedSector}>
                        <SelectTrigger id="timeline-sector-select" className="h-10 bg-background"><SelectValue placeholder="Sector" /></SelectTrigger>
                        <SelectContent>{sectors.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
                    </Select>
                </div>
                <div className='space-y-1.5'>
                    <Label htmlFor="timeline-era-select">Era</Label>
                    <Select value={selectedEra} onValueChange={setSelectedEra}>
                        <SelectTrigger id="timeline-era-select" className="h-10 bg-background"><SelectValue placeholder="Era" /></SelectTrigger>
                        <SelectContent>{eras.map(e => <SelectItem key={e} value={e}>{e}</SelectItem>)}</SelectContent>
                    </Select>
                </div>
           </div>
            <Button onClick={clearFilters} variant="outline" size="sm" className="h-10 w-full sm:w-auto lg:col-start-3">
                <XCircle className="mr-2 h-4 w-4"/> Clear Filters
            </Button>
        </CardContent>
      </Card>

      {filteredEvents.length > 0 ? (
           <div className="space-y-3 relative pl-4 before:absolute before:inset-y-0 before:w-0.5 before:bg-border before:left-6 rounded-lg">
            <Accordion type="single" collapsible className="w-full">
                {filteredEvents.map((item) => (
                    <AccordionItem key={item.id} value={`item-${item.id}`} className="border-none mb-3">
                        <Card className="overflow-hidden border-border hover:border-primary/30 transition-colors duration-300 bg-background">
                        <AccordionTrigger className="p-4 hover:bg-accent/10 hover:no-underline [&[data-state=open]]:bg-accent/20 w-full rounded-t-md">
                           <div className="flex items-center w-full">
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[calc(50%-2px)] z-10 flex items-center justify-center w-9 h-9 bg-background rounded-full border-2 border-primary shadow-md">
                                    <Milestone className="w-4 h-4 text-primary"/>
                                </div>
                               <div className="ml-8 flex-1 text-left space-y-0.5">
                                   <p className="text-md font-semibold text-primary group-hover:text-primary/90">{item.event}</p>
                                   <div className="text-xs text-muted-foreground space-x-2">
                                       <Badge variant="secondary" className="font-mono">{item.year}</Badge>
                                       <Badge variant="outline">{item.sector}</Badge>
                                       {item.era && <Badge variant="outline" className="hidden sm:inline-flex">{item.era}</Badge>}
                                   </div>
                               </div>
                           </div>
                        </AccordionTrigger>
                        <AccordionContent className="p-4 text-sm text-muted-foreground bg-secondary/30 rounded-b-md border-t border-border">
                            <p className="mb-2">{item.description || 'No further details available for this milestone.'}</p>
                            {/* Placeholder for future image/video/links */}
                            <div className="text-xs italic text-muted-foreground/70">Future: Related media and publication links will appear here.</div>
                        </AccordionContent>
                        </Card>
                    </AccordionItem>
                ))}
            </Accordion>
            </div>
      ) : (
         <Card className="text-center text-muted-foreground p-6 md:p-8 border-dashed border-border bg-muted/20 rounded-lg">
            <CardContent className="p-0">
             <CalendarDays className="w-10 h-10 text-primary/50 mx-auto mb-3" />
            <p className="text-md">No events match the current filters. Try adjusting the year range, sector, era, or search term.</p>
            </CardContent>
        </Card>
      )}
       <p className="text-xs text-muted-foreground text-center mt-4">Future enhancements: Thematic grouping, animated progression, links to detailed pages.</p>
    </>
  );
}
