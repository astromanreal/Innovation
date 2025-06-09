
'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from '@/components/ui/card';
import { ArrowRight, FlaskConical, TrendingUp, DollarSign, Users, Building, Shield, UsersRound, BarChart3, MapPin, Info } from 'lucide-react';
import type { HubData } from '@/app/startup/page'; 
import { useToast } from '@/hooks/use-toast';

interface HubCardProps {
  hub: HubData;
}

export function HubCard({ hub }: HubCardProps) {
  const { toast } = useToast();

  const handleViewProfileClick = () => {
    toast({
      title: "Feature In Development",
      description: `Full profiles for startup hubs like ${hub.name} are coming soon!`,
    });
  };

  return (
    <Card id={`${hub.id}-details`} className="flex flex-col bg-card border-border hover:shadow-xl hover:border-primary/40 transition-all duration-300 ease-in-out group rounded-lg overflow-hidden transform hover:-translate-y-1">
      {/* Image component and its wrapper div removed */}
      
      <CardHeader className="p-5 pb-3">
        <div className="flex justify-between items-start mb-2">
            <CardTitle className="text-lg font-bold text-primary group-hover:text-primary/90">{hub.name}</CardTitle>
            {hub.isEmergingHub && <Badge variant="default">Emerging Hub</Badge>}
        </div>
        <CardDescription className="text-xs text-muted-foreground line-clamp-2"> {/* Removed group-hover:line-clamp-none */}
            {hub.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="p-5 pt-2 flex flex-col flex-grow space-y-3 text-xs"> {/* Adjusted pt-0 to pt-2 as image removed space */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs mb-2">
            {hub.innovationRank && <div className="flex items-center gap-1.5"><TrendingUp className="w-3.5 h-3.5 text-accent"/> Rank: <span className="font-medium text-card-foreground">{hub.innovationRank}</span></div>}
            {hub.totalStartups && <div className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5 text-accent"/> Startups: <span className="font-medium text-card-foreground">{hub.totalStartups}</span></div>}
            {hub.gdpContribution && <div className="flex items-center gap-1.5"><DollarSign className="w-3.5 h-3.5 text-accent"/> GDP Impact: <span className="font-medium text-card-foreground">{hub.gdpContribution}</span></div>}
            {hub.unicornsCount !== undefined && <div className="flex items-center gap-1.5"><TrendingUp className="w-3.5 h-3.5 text-accent"/> Unicorns: <span className="font-medium text-card-foreground">{hub.unicornsCount}</span></div>}
        </div>
        
        <div>
            <h4 className="font-semibold mb-1 flex items-center gap-1.5 text-sm"><FlaskConical className="w-4 h-4 text-accent"/> Key Sectors:</h4>
            <div className="flex flex-wrap gap-1">
                {hub.keySectors.slice(0,3).map((sector, index) => ( // Show 3 sectors initially
                    <Badge key={index} variant="secondary" className="text-xs font-normal">{sector}</Badge>
                ))}
                {hub.keySectors.length > 3 && <Badge variant="outline" className="text-xs font-normal">+{hub.keySectors.length - 3} more</Badge>}
            </div>
        </div>

        {hub.sectorStrengthsVisual && (
             <div>
                <h4 className="font-semibold mb-1 flex items-center gap-1.5 text-sm"><BarChart3 className="w-4 h-4 text-accent"/> Sector Strengths:</h4>
                <p className="text-muted-foreground text-xs italic">{hub.sectorStrengthsVisual}</p>
             </div>
        )}
        
        <div>
            <h4 className="font-semibold mb-1 flex items-center gap-1.5 text-sm"><TrendingUp className="w-4 h-4 text-accent"/> Notable Companies:</h4>
            <p className="text-muted-foreground line-clamp-1">{hub.successStories.slice(0, 2).join(', ')}{hub.successStories.length > 2 ? `, +${hub.successStories.length-2} more...` : ''}</p>
        </div>
        
        <div>
            <h4 className="font-semibold mb-1 flex items-center gap-1.5 text-sm"><Building className="w-4 h-4 text-accent"/> Support Infrastructure:</h4>
            <p className="text-muted-foreground line-clamp-1">{hub.incubatorsAcceleratorsVCs.slice(0, 2).join(', ')}{hub.incubatorsAcceleratorsVCs.length > 2 ? `, +${hub.incubatorsAcceleratorsVCs.length-2} more...` : ''}</p>
        </div>

        {hub.cultureAndTalent && hub.cultureAndTalent.length > 0 && (
            <div>
                <h4 className="font-semibold mb-1 flex items-center gap-1.5 text-sm"><UsersRound className="w-4 h-4 text-accent"/> Culture & Talent:</h4>
                <ul className="list-disc list-inside pl-1 text-muted-foreground line-clamp-1">
                    {hub.cultureAndTalent.slice(0,1).map((item, i) => <li key={i}>{item}</li>)}
                    {hub.cultureAndTalent.length > 1 && <li>+{hub.cultureAndTalent.length - 1} more aspects...</li>}
                </ul>
            </div>
        )}

        {hub.policyAndRegulationDetails && hub.policyAndRegulationDetails.length > 0 && (
             <div>
                <h4 className="font-semibold mb-1 flex items-center gap-1.5 text-sm"><Shield className="w-4 h-4 text-accent"/> Policy & Regulation:</h4>
                 <ul className="list-disc list-inside pl-1 text-muted-foreground line-clamp-1">
                    {hub.policyAndRegulationDetails.slice(0,1).map((item, i) => <li key={i}>{item}</li>)}
                    {hub.policyAndRegulationDetails.length > 1 && <li>+{hub.policyAndRegulationDetails.length - 1} more details...</li>}
                </ul>
            </div>
        )}

      </CardContent>
      <CardFooter className="mt-auto pt-4 border-t border-border">
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors" 
          onClick={handleViewProfileClick}
        >
            View Full Profile (Soon)
            <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
