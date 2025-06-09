
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2, Wand2, Sparkles } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from './ui/card';

const discoveryPages = [
  '/domains',
  '/startup',
  '/nobel',
  '/technology',
  '/innovation',
  '/consciousness',
  '/research',
  '/tools',
  '/poll',
  '/glossary',
  '/future-forecasts',
  '/explore/artificial-intelligence',
  '/explore/quantum-computing',
  '/explore/bioengineering-genomics',
  '/explore/robotics-automation',
  '/explore/blockchain-web3',
  '/explore/nanotechnology',
  '/explore/ar-vr-metaverse',
  '/explore/advanced-materials',
  '/explore/space-technology',
  '/explore/internet-of-things',
  '/explore/cybersecurity',
  '/explore/renewable-energy',
  '/explore/5g-next-gen-connectivity',
  '/explore/human-computer-interaction',
  '/explore/autonomous-vehicles',
  '/explore/data-science-big-data',
  '/explore/synthetic-biology',
  '/explore/wearable-health-tech',
  '/explore/edge-cloud-computing',
  '/explore/fintech',
  '/explore/smart-cities',
  '/explore/additive-manufacturing',
  '/explore/agritech-food-technology',
  '/about',
  '/contact',
];

export function AiRecommendations() {
  const { toast } = useToast();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  function onSurpriseMe() {
    setIsLoading(true);
    
    const randomIndex = Math.floor(Math.random() * discoveryPages.length);
    const randomPage = discoveryPages[randomIndex];

    let pageName = randomPage.split('/').pop()?.replace(/-/g, ' ') || 'a new discovery';
    if (pageName === 'page' || pageName === '') pageName = randomPage.split('/')[1]?.replace(/-/g, ' ') || 'a section';
    const capitalizedPageName = pageName.charAt(0).toUpperCase() + pageName.slice(1);


    toast({
      title: 'Embarking on a Discovery!',
      description: `Taking you to explore: ${capitalizedPageName}...`,
    });

    setTimeout(() => {
      router.push(randomPage);
      setIsLoading(false); 
    }, 700); 
  }

  return (
    <Card className="bg-card shadow-xl border-primary/20 overflow-hidden">
      <CardHeader className="bg-primary/5 p-6">
        <CardTitle className="text-2xl font-semibold flex items-center gap-3 text-primary">
          <Sparkles className="w-7 h-7" />
          Discover Your Next Exploration
        </CardTitle>
        <CardDescription className="text-base text-muted-foreground">
          Not sure where to begin? Let serendipity guide you to an interesting topic within the Innovation Hub!
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6 flex justify-center">
        <Button 
            type="button" 
            variant="default" 
            size="lg" 
            onClick={onSurpriseMe} 
            disabled={isLoading} 
            className="shadow-md hover:shadow-lg transition-shadow text-lg px-8 py-3.5"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Plotting Course...
            </>
          ) : (
            <>
              <Wand2 className="mr-2 h-5 w-5" />
              Surprise Me!
            </>
          )}
        </Button>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <p className="text-xs text-muted-foreground text-center w-full">
          Click the button above to be navigated to a randomly selected, fascinating page within our platform.
        </p>
      </CardFooter>
    </Card>
  );
}

    