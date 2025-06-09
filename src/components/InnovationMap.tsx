
'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { Map, Filter, Landmark, CalendarDays, Tag, Info, XCircle, MapPin, SlidersHorizontal, ThermometerSnowflake, Search } from 'lucide-react'; 
import { Section } from '@/components/Section';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch'; 

interface MilestoneData {
  id: number;
  country: string;
  sector: string;
  year: number;
  milestone: string;
  details: string;
  imageHint: string; 
}

const placeholderData: MilestoneData[] = [
  { id: 1, country: 'USA', sector: 'AI', year: 2023, milestone: 'Major AI Advancement in NLP', details: 'A new large language model demonstrated unprecedented capabilities in natural language understanding and generation, impacting various applications.', imageHint: 'AI brain network' },
  { id: 2, country: 'China', sector: 'Robotics', year: 2022, milestone: 'Robotics Manufacturing Hub Established', details: 'Significant government and private investment led to the creation of a world-class robotics manufacturing and R&D hub.', imageHint: 'robot factory arm' },
  { id: 3, country: 'Germany', sector: 'Quantum Computing', year: 2024, milestone: 'Quantum Research Initiative Launched', details: 'Germany launches a strategic national research program to accelerate advancements in quantum computing hardware and algorithms.', imageHint: 'quantum particle abstract' },
  { id: 4, country: 'India', sector: 'Bioengineering', year: 2023, milestone: 'Genomics Breakthrough in Disease Prediction', details: 'Researchers in India published findings on a novel genomic marker significantly improving early prediction of a prevalent disease.', imageHint: 'dna sequence medical' },
  { id: 5, country: 'USA', sector: 'AI', year: 2021, milestone: 'AI Ethics Framework Proposed by NIST', details: 'The National Institute of Standards and Technology (NIST) proposed a comprehensive framework for trustworthy AI development and deployment.', imageHint: 'ethics balance scale' },
  { id: 6, country: 'Japan', sector: 'Nanotechnology', year: 2023, milestone: 'Novel Nanomaterial for Efficient Solar Cells', details: 'Japanese scientists developed a new nanomaterial significantly boosting solar cell efficiency and durability.', imageHint: 'solar panel nano' },
  { id: 7, country: 'South Korea', sector: 'AR/VR', year: 2024, milestone: 'Nationwide 5G-Powered Metaverse Platform', details: 'South Korea launched an ambitious initiative for a nationwide metaverse platform leveraging its advanced 5G infrastructure.', imageHint: 'metaverse vr city' },
];

const countries = ['All', 'USA', 'China', 'Germany', 'India', 'Japan', 'South Korea', 'Other'];
const sectors = ['All', 'AI', 'Robotics', 'Quantum Computing', 'Bioengineering', 'Nanotechnology', 'AR/VR'];

const getPosition = (milestone: MilestoneData) => {
    let hash = 0;
    const str = milestone.country + milestone.sector + milestone.year;
    for (let i = 0; i < str.length; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash |= 0; 
    }
    const top = 15 + (Math.abs(hash) % 70);
    const left = 15 + (Math.abs(hash * 31) % 70); 
    return { top: `${top}%`, left: `${left}%` };
};


export function InnovationMap() {
  const [selectedCountry, setSelectedCountry] = useState('All');
  const [selectedSector, setSelectedSector] = useState('All');
  const [selectedYear, setSelectedYear] = useState('');
  const [showHeatmap, setShowHeatmap] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMilestone, setSelectedMilestone] = useState<MilestoneData | null>(null);

  const filteredData = useMemo(() => {
    let data = placeholderData;
    if (selectedCountry !== 'All') {
      data = data.filter(item => item.country === selectedCountry);
    }
    if (selectedSector !== 'All') {
      data = data.filter(item => item.sector === selectedSector);
    }
    if (selectedYear) {
       const yearNum = parseInt(selectedYear);
       if (!isNaN(yearNum)) {
          data = data.filter(item => item.year === yearNum);
       }
    }
    if (searchTerm) {
        data = data.filter(item => 
            item.milestone.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.details.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
    return data;
  }, [selectedCountry, selectedSector, selectedYear, searchTerm]);

  const handleMapClick = (item: MilestoneData) => {
    setSelectedMilestone(item);
  }

  const clearFilters = () => {
    setSelectedCountry('All');
    setSelectedSector('All');
    setSelectedYear('');
    setSearchTerm('');
    setShowHeatmap(false);
    setSelectedMilestone(null);
  }

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 mb-6">
        <Card className="lg:col-span-4 bg-muted/30 border-border p-5 rounded-lg">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="flex items-center gap-2 text-lg"><Filter className="w-5 h-5 text-primary"/> Filter Milestones</CardTitle>
            <CardDescription className="text-xs pt-1">Refine map markers and displayed information.</CardDescription>
          </CardHeader>
          <CardContent className="p-0 space-y-3">
            <div>
             <Label htmlFor="map-search-term" className="text-sm font-medium">Keyword Search</Label>
                <div className="relative mt-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                        id="map-search-term"
                        placeholder="Search milestones..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 bg-background h-10"
                    />
                 </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                    <Label htmlFor="country-select" className="text-sm font-medium">Country/Region</Label>
                    <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                        <SelectTrigger id="country-select" className="bg-background mt-1 h-10"><SelectValue placeholder="Select Country" /></SelectTrigger>
                        <SelectContent>{countries.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
                    </Select>
                </div>
                <div>
                    <Label htmlFor="sector-select" className="text-sm font-medium">Sector/Domain</Label>
                    <Select value={selectedSector} onValueChange={setSelectedSector}>
                        <SelectTrigger id="sector-select" className="bg-background mt-1 h-10"><SelectValue placeholder="Select Sector" /></SelectTrigger>
                        <SelectContent>{sectors.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
                    </Select>
                </div>
            </div>
            <div>
                <Label htmlFor="year-input" className="text-sm font-medium">Year (exact)</Label>
                <Input
                    id="year-input"
                    type="number"
                    placeholder="e.g., 2023"
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="bg-background mt-1 h-10"
                />
            </div>
            <div className="flex items-center space-x-2 pt-2">
                <Switch id="heatmap-toggle" checked={showHeatmap} onCheckedChange={setShowHeatmap} disabled />
                <Label htmlFor="heatmap-toggle" className="text-sm font-medium">Show Heatmap (Future)</Label>
                <ThermometerSnowflake className="w-4 h-4 text-muted-foreground" />
            </div>
            <Button onClick={clearFilters} variant="outline" size="sm" className="w-full mt-3 h-10">
              <XCircle className="mr-2 h-4 w-4" /> Clear All Filters
            </Button>
          </CardContent>
        </Card>

        <div className="lg:col-span-8">
          <div className="aspect-[16/10] bg-secondary rounded-lg flex items-center justify-center text-muted-foreground overflow-hidden relative border border-border shadow-inner group">
            <Image
              src="https://placehold.co/800x500.png"
              alt="World Map showing innovation hotspots"
              layout="fill"
              objectFit="cover"
              className={`opacity-50 group-hover:opacity-70 transition-opacity ${showHeatmap ? 'blur-sm' : ''}`}
              data-ai-hint="world map connections data"
            />
            {showHeatmap && (
                <div className="absolute inset-0 flex items-center justify-center bg-primary/10 backdrop-blur-sm">
                    <p className="text-primary font-semibold text-lg p-4 bg-background/80 rounded-md shadow-lg">Heatmap Overlay (Future Feature)</p>
                </div>
            )}
             <div className="absolute inset-0 pointer-events-none">
                 {!showHeatmap && filteredData.map((item) => (
                    <button
                        key={item.id}
                        onClick={(e) => { e.stopPropagation(); handleMapClick(item); }}
                        className={`absolute pointer-events-auto p-1 bg-primary/80 hover:bg-primary text-primary-foreground rounded-full shadow-lg hover:scale-110 transform transition-all focus:outline-none focus:ring-2 focus:ring-ring ring-offset-2 ring-offset-secondary cursor-pointer animate-pulse hover:animate-none`}
                        style={getPosition(item)}
                        aria-label={`View milestone: ${item.milestone}`}
                        title={`${item.milestone} (${item.country}, ${item.year})`}
                    >
                      <MapPin className="w-4 h-4" />
                    </button>
                 ))}
             </div>
             <p className="absolute bottom-3 right-3 text-xs bg-background/80 px-2 py-1 rounded-md shadow">
                {showHeatmap ? "Heatmap Mode (Conceptual)" : "Interactive Map (Click Markers for Details)"}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8">
         <h4 className="font-semibold mb-4 text-xl text-primary">Milestone Details</h4>
         {selectedMilestone ? (
           <Card className="bg-background border-primary/30 shadow-lg animate-in fade-in-50">
                <CardHeader>
                    <CardTitle className="text-lg md:text-xl flex items-start gap-3">
                        <Landmark className="w-6 h-6 text-primary mt-1 flex-shrink-0"/>
                        <div>
                            {selectedMilestone.milestone}
                            <Badge variant="secondary" className="ml-2 align-middle">{selectedMilestone.country}</Badge>
                        </div>
                    </CardTitle>
                     <CardDescription className="text-sm text-muted-foreground flex items-center gap-4 pt-1">
                       <span className='flex items-center gap-1.5'><Tag className="w-4 h-4"/> {selectedMilestone.sector}</span>
                       <span className='flex items-center gap-1.5'><CalendarDays className="w-4 h-4"/> {selectedMilestone.year}</span>
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-base text-foreground leading-relaxed">{selectedMilestone.details}</p>
                    <div className="relative w-full h-40 mt-4 rounded-md overflow-hidden border">
                         <Image 
                            src={`https://placehold.co/400x200.png`}
                            alt={`Visual for ${selectedMilestone.milestone}`}
                            layout="fill"
                            objectFit="cover"
                            data-ai-hint={selectedMilestone.imageHint} 
                        />
                    </div>
                </CardContent>
                <CardFooter>
                     <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 p-0 h-auto" onClick={() => setSelectedMilestone(null)}>
                         <XCircle className="mr-2 h-4 w-4" /> Clear Selection
                    </Button>
                </CardFooter>
           </Card>
         ) : (
             <Card className="text-center text-muted-foreground p-6 md:p-8 border-dashed border-border bg-muted/20 rounded-lg">
                <CardContent className="p-0">
                 <Info className="w-10 h-10 text-primary/50 mx-auto mb-3" />
                <p className="text-md">
                    {filteredData.length > 0
                    ? 'Select a marker on the map or adjust filters to view detailed information about an innovation milestone.'
                    : 'No milestones match the current filters. Try broadening your search criteria.'}
                </p>
                </CardContent>
            </Card>
         )}
      </div>
       <p className="text-xs text-muted-foreground text-center mt-4">
          Note: The map functionality is illustrative. Markers and data are placeholders. Future enhancements include a fully interactive map with real-time data integration, heatmap views for innovation density, and connection to detailed initiative pages.
      </p>
    </>
  );
}
