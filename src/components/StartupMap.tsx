
'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { Map, Filter, Building, Tag, Info, Link as LinkIcon, XCircle, Globe, Layers, DollarSign as DollarSignIcon, MapPin } from 'lucide-react';
import { Section } from '@/components/Section';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import type { HubData } from '@/app/startup/page'; // Import HubData


interface StartupMapProps {
  hubs: HubData[]; // Use the imported HubData
}

// Extract unique regions/sectors for filters (example logic)
const regions = ['All', 'North America', 'Europe', 'Asia', 'Middle East', 'Africa', 'South America', 'Oceania'];


const getPosition = (name: string, index: number) => {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash = (hash << 5) - hash + name.charCodeAt(i);
        hash |= 0; 
    }
    // Add index to hash to differentiate positions for hubs with same name or similar hash results
    hash = (hash + index * 100000) | 0; 

    const topVariance = (Math.abs(hash) % 20) - 10; // +/- 10%
    const leftVariance = (Math.abs(hash * 31) % 20) - 10; // +/- 10%
    
    const baseTop = 10 + (Math.abs(hash) % 70); 
    const baseLeft = 10 + (Math.abs(hash * 31) % 70);

    return { top: `${Math.min(90, Math.max(10, baseTop + topVariance))}%`, left: `${Math.min(90, Math.max(10, baseLeft + leftVariance))}%` };
};


export function StartupMap({ hubs }: StartupMapProps) {
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedSectorFilter, setSelectedSectorFilter] = useState('All');
  const [selectedHub, setSelectedHub] = useState<HubData | null>(null);

  const allSectors = useMemo(() => {
    return ['All', ...new Set(hubs.flatMap(hub => hub.keySectors).filter(Boolean))].sort();
  }, [hubs]);

  const filteredHubs = useMemo(() => {
    let data = hubs;
    if (selectedRegion !== 'All') {
      data = data.filter(h => {
        // This is a simplified region filter. A real app would have more robust geo-mapping or region tags in HubData.
        if (selectedRegion === 'North America' && (h.name.includes('USA') || h.name.includes('Canada'))) return true;
        if (selectedRegion === 'Europe' && (h.name.includes('Germany') || h.name.includes('UK') || h.name.includes('Estonia') || h.name.includes('France'))) return true;
        if (selectedRegion === 'Asia' && (h.name.includes('China') || h.name.includes('India') || h.name.includes('Singapore')|| h.name.includes('Japan'))) return true;
        if (selectedRegion === 'Middle East' && (h.name.includes('Israel') || h.name.includes('UAE'))) return true;
        if (selectedRegion === 'Africa' && (h.name.includes('Kenya') || h.name.includes('Nigeria')|| h.name.includes('South Africa'))) return true;
        if (selectedRegion === 'South America' && (h.name.includes('Brazil') || h.name.includes('Argentina'))) return true;
        return false; 
      });
    }
    if (selectedSectorFilter !== 'All') {
      data = data.filter(h => h.keySectors.some(s => s.toLowerCase().includes(selectedSectorFilter.toLowerCase())));
    }
    return data;
  }, [hubs, selectedRegion, selectedSectorFilter]);


  const handleMapClick = (hub: HubData) => {
    setSelectedHub(hub);
    const element = document.getElementById(`${hub.id}-details`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  const clearFilters = () => {
    setSelectedRegion('All');
    setSelectedSectorFilter('All');
    setSelectedHub(null);
  }

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-6">
        <Card className="lg:col-span-1 bg-muted/30 border-border p-5 rounded-lg">
            <CardHeader className="p-0 pb-4">
                <CardTitle className="flex items-center gap-2 text-lg"><Filter className="w-5 h-5 text-primary"/> Filter Hubs</CardTitle>
                 <CardDescription className="text-xs">Refine map markers. Future: maturity, funding size filters.</CardDescription>
            </CardHeader>
            <CardContent className="p-0 space-y-4">
               <div>
                 <label htmlFor="region-select" className="text-sm font-medium mb-1 block">Region</label>
                  <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                    <SelectTrigger id="region-select" className="bg-background mt-1"><SelectValue placeholder="Select Region" /></SelectTrigger>
                    <SelectContent>{regions.map(r => <SelectItem key={r} value={r}>{r}</SelectItem>)}</SelectContent>
                  </Select>
               </div>
               <div>
                 <label htmlFor="sector-filter-select" className="text-sm font-medium mb-1 block">Key Sector Focus</label>
                 <Select value={selectedSectorFilter} onValueChange={setSelectedSectorFilter}>
                    <SelectTrigger id="sector-filter-select" className="bg-background mt-1"><SelectValue placeholder="Select Sector" /></SelectTrigger>
                    <SelectContent>{allSectors.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
                  </Select>
               </div>
              <Button onClick={clearFilters} variant="outline" size="sm" className="w-full mt-2">
                <XCircle className="mr-2 h-4 w-4" /> Clear Filters
              </Button>
            </CardContent>
        </Card>

        <div className="lg:col-span-2">
          <div className="aspect-[16/10] bg-secondary rounded-lg flex items-center justify-center text-muted-foreground overflow-hidden relative border border-border shadow-inner group">
            <Image
              src="https://placehold.co/800x500.png?text=Startup+World+Map"
              alt="World Map showing startup ecosystems"
              layout="fill"
              objectFit="cover"
              className="opacity-50 group-hover:opacity-70 transition-opacity"
              data-ai-hint="world map network business"
            />
             <div className="absolute inset-0 pointer-events-none">
                 {filteredHubs.map((hub, index) => ( // Added index for unique key in getPosition if names repeat
                    <button
                        key={hub.id}
                        onClick={(e) => { e.stopPropagation(); handleMapClick(hub); }}
                        className={`absolute pointer-events-auto p-1.5 bg-accent/80 hover:bg-accent text-accent-foreground rounded-full shadow-lg hover:scale-110 transform transition-all focus:outline-none focus:ring-2 focus:ring-ring ring-offset-2 ring-offset-secondary cursor-pointer animate-pulse hover:animate-none`}
                        style={getPosition(hub.name, index)} // Pass index to getPosition
                        aria-label={`View details for ${hub.name}`}
                        title={hub.name}
                    >
                        <MapPin className="w-4 h-4"/>
                    </button>
                 ))}
             </div>
             <p className="absolute bottom-3 right-3 text-xs bg-background/80 px-2 py-1 rounded-md shadow">
                Interactive Map. Future: Heatmap, compare mode.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8">
         <h4 className="font-semibold mb-4 text-xl text-primary">Selected Hub Quick View</h4>
         {selectedHub ? (
           <Card className="bg-background border-accent/30 shadow-lg animate-in fade-in-50">
                <CardHeader>
                    <CardTitle className="text-lg md:text-xl flex items-start gap-3">
                        <Building className="w-6 h-6 text-accent mt-1 flex-shrink-0"/>
                        {selectedHub.name}
                    </CardTitle>
                    <CardDescription className="text-sm text-muted-foreground pt-1 line-clamp-2">
                        {selectedHub.description}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                     <div className="text-sm text-muted-foreground mb-3">
                        <span className="font-semibold text-card-foreground">Key Stats: </span>
                        {selectedHub.unicornsCount && <Badge variant="outline" className="mr-1 mb-1">Unicorns: {selectedHub.unicornsCount}</Badge>}
                        {selectedHub.totalStartups && <Badge variant="outline" className="mr-1 mb-1">Startups: {selectedHub.totalStartups}</Badge>}
                    </div>
                     <div className="text-sm text-muted-foreground mb-3">
                        <span className="font-semibold text-card-foreground">Key Sectors: </span>
                        {selectedHub.keySectors.slice(0, 3).map((sector, i) => (
                            <Badge key={i} variant="secondary" className="mr-1 mb-1">{sector}</Badge>
                        ))}
                        {selectedHub.keySectors.length > 3 && <Badge variant="outline">+{selectedHub.keySectors.length - 3} more</Badge>}
                    </div>
                     <Button variant="outline" size="sm" className="mr-2" onClick={() => handleMapClick(selectedHub)}>
                        Go to Full Profile Below
                        <LinkIcon className="ml-2 h-4 w-4" />
                    </Button>
                </CardContent>
                <CardFooter>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 p-0 h-auto" onClick={() => setSelectedHub(null)}>
                         <XCircle className="mr-2 h-4 w-4" /> Clear Selection
                    </Button>
                </CardFooter>
           </Card>
         ) : (
             <Card className="text-center text-muted-foreground p-6 md:p-8 border-dashed border-border bg-muted/20 rounded-lg">
                 <CardContent className="p-0">
                     <Info className="w-10 h-10 text-primary/50 mx-auto mb-3" />
                    <p className="text-md">
                        {filteredHubs.length > 0
                        ? 'Select a marker on the map or adjust filters to view hub details here and scroll to its profile.'
                        : 'No startup hubs match the current filters. Try broadening your search criteria.'}
                    </p>
                 </CardContent>
            </Card>
         )}
      </div>
    </>
  );
}
