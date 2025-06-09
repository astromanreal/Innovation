
'use client';

import { useState, useMemo } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from '@/components/ui/dialog';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import type { HubData } from '@/app/startup/page';
import { useToast } from '@/hooks/use-toast';
import { BarChart3, CheckCircle, DollarSign, Info, Landmark, Milestone, Users, XCircle } from 'lucide-react';

interface EcosystemComparisonClientProps {
  hubs: HubData[];
}

export function EcosystemComparisonClient({ hubs }: EcosystemComparisonClientProps) {
  const [selectedHub1Id, setSelectedHub1Id] = useState<string | undefined>(undefined);
  const [selectedHub2Id, setSelectedHub2Id] = useState<string | undefined>(undefined);
  const [showComparison, setShowComparison] = useState(false);
  const { toast } = useToast();

  const selectedHub1 = useMemo(() => hubs.find(h => h.id === selectedHub1Id), [hubs, selectedHub1Id]);
  const selectedHub2 = useMemo(() => hubs.find(h => h.id === selectedHub2Id), [hubs, selectedHub2Id]);

  const handleCompare = () => {
    if (!selectedHub1Id || !selectedHub2Id) {
      toast({ title: "Selection Incomplete", description: "Please select two ecosystems to compare.", variant: "destructive" });
      return;
    }
    if (selectedHub1Id === selectedHub2Id) {
      toast({ title: "Invalid Selection", description: "Please select two different ecosystems to compare.", variant: "destructive" });
      return;
    }
    setShowComparison(true);
  };

  const ComparisonItem = ({ label, value1, value2, icon }: { label: string; value1?: string | number | string[]; value2?: string | number | string[]; icon?: React.ReactNode }) => (
    <>
      <div className="col-span-2 text-sm font-medium text-muted-foreground flex items-center gap-2 py-2 border-b">{icon}{label}</div>
      <div className="text-sm py-2 border-b">{Array.isArray(value1) ? value1.join(', ') : (value1 ?? 'N/A')}</div>
      <div className="text-sm py-2 border-b">{Array.isArray(value2) ? value2.join(', ') : (value2 ?? 'N/A')}</div>
    </>
  );

  return (
    <Card className="bg-muted/30 border-dashed">
      <CardContent className="pt-6 text-center">
        <BarChart3 className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
        <p className="text-muted-foreground mb-4">Select two ecosystems from the dropdowns below to see a side-by-side comparison of their key metrics and characteristics.</p>
        <div className="flex flex-wrap justify-center items-end gap-4 my-4">
          <div className="space-y-1.5 text-left">
            <Label htmlFor="hub1-select">Ecosystem 1</Label>
            <Select value={selectedHub1Id} onValueChange={setSelectedHub1Id}>
              <SelectTrigger id="hub1-select" className="w-[220px] bg-background"><SelectValue placeholder="Select Hub 1" /></SelectTrigger>
              <SelectContent>
                {hubs.map(hub => <SelectItem key={hub.id} value={hub.id}>{hub.name}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5 text-left">
            <Label htmlFor="hub2-select">Ecosystem 2</Label>
            <Select value={selectedHub2Id} onValueChange={setSelectedHub2Id}>
              <SelectTrigger id="hub2-select" className="w-[220px] bg-background"><SelectValue placeholder="Select Hub 2" /></SelectTrigger>
              <SelectContent>
                {hubs.map(hub => <SelectItem key={hub.id} value={hub.id}>{hub.name}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <Dialog open={showComparison} onOpenChange={setShowComparison}>
            <DialogTrigger asChild>
              <Button onClick={handleCompare} className="h-10">Compare</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[900px] max-h-[80vh] flex flex-col">
              <DialogHeader>
                <DialogTitle className="text-xl">
                  Comparing: {selectedHub1?.name || 'Hub 1'} vs. {selectedHub2?.name || 'Hub 2'}
                </DialogTitle>
              </DialogHeader>
              {selectedHub1 && selectedHub2 && (
                <div className="overflow-y-auto pr-2 flex-grow">
                  <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                    <div>
                      <h3 className="font-semibold text-lg text-primary">{selectedHub1.name}</h3>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-primary">{selectedHub2.name}</h3>
                    </div>
                    <Separator className="col-span-2 my-1" />

                    <ComparisonItem label="Description" value1={selectedHub1.description} value2={selectedHub2.description} icon={<Info className="w-4 h-4" />} />
                    <ComparisonItem label="Key Sectors" value1={selectedHub1.keySectors.join(', ')} value2={selectedHub2.keySectors.join(', ')} icon={<Landmark className="w-4 h-4" />} />
                    <ComparisonItem label="Innovation Rank" value1={selectedHub1.innovationRank} value2={selectedHub2.innovationRank} icon={<Milestone className="w-4 h-4" />} />
                    <ComparisonItem label="Total Startups" value1={selectedHub1.totalStartups} value2={selectedHub2.totalStartups} icon={<Users className="w-4 h-4" />} />
                    <ComparisonItem label="Unicorns Count" value1={selectedHub1.unicornsCount} value2={selectedHub2.unicornsCount} icon={<CheckCircle className="w-4 h-4" />} />
                    <ComparisonItem label="GDP Contribution (Approx)" value1={selectedHub1.gdpContribution} value2={selectedHub2.gdpContribution} icon={<DollarSign className="w-4 h-4" />} />
                    <ComparisonItem label="Culture & Talent (Highlights)" value1={selectedHub1.cultureAndTalent?.slice(0, 2).join('; ')} value2={selectedHub2.cultureAndTalent?.slice(0, 2).join('; ')} icon={<Users className="w-4 h-4" />} />
                    <ComparisonItem label="Policy & Regulation (Highlights)" value1={selectedHub1.policyAndRegulationDetails?.slice(0, 2).join('; ')} value2={selectedHub2.policyAndRegulationDetails?.slice(0, 2).join('; ')} icon={<Landmark className="w-4 h-4" />} />
                     <ComparisonItem label="Success Stories (Examples)" value1={selectedHub1.successStories.slice(0,2).join(', ')} value2={selectedHub2.successStories.slice(0,2).join(', ')} icon={<Milestone className="w-4 h-4" />} />
                     <ComparisonItem label="Incubators/VCs (Examples)" value1={selectedHub1.incubatorsAcceleratorsVCs.slice(0,2).join(', ')} value2={selectedHub2.incubatorsAcceleratorsVCs.slice(0,2).join(', ')} icon={<DollarSign className="w-4 h-4" />} />
                  </div>
                </div>
              )}
              <DialogFooter className="mt-auto pt-4 border-t">
                <DialogClose asChild>
                  <Button type="button" variant="outline">Close</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <CardDescription className="text-xs text-muted-foreground mt-4">This feature provides a high-level comparison. For detailed analysis, refer to the individual hub profiles (coming soon).</CardDescription>
      </CardContent>
    </Card>
  );
}
