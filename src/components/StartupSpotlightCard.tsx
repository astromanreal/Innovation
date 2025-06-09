
'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, ExternalLink, Rocket } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export interface StartupSpotlightEntry {
  id: string;
  name: string;
  domain: string;
  description: string;
  imageHint: string; // Will remain for data consistency, not used for rendering
  learnMoreUrl: string;
  logoIcon?: ReactNode;
}

interface StartupSpotlightCardProps {
  startup: StartupSpotlightEntry;
}

export function StartupSpotlightCard({ startup }: StartupSpotlightCardProps) {
  const { toast } = useToast();

  const handleLearnMoreClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (startup.learnMoreUrl === '#') {
      e.preventDefault();
      toast({
        title: "Coming Soon!",
        description: `Detailed profiles for startups like "${startup.name}" are planned.`,
      });
    }
  };

  return (
    <Card className="flex flex-col bg-card border-border hover:shadow-xl hover:border-primary/40 transition-all duration-300 ease-in-out group rounded-lg overflow-hidden">
      <CardHeader className="pb-3 pt-5"> {/* Adjusted padding */}
        <div className="flex justify-between items-start mb-2">
          <div className="flex items-center gap-2">
            {startup.logoIcon || <Rocket className="w-7 h-7 text-primary" />}
            <CardTitle className="text-lg group-hover:text-primary transition-colors">{startup.name}</CardTitle>
          </div>
          <Badge variant="secondary" className="text-xs">{startup.domain}</Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-grow space-y-2 pt-0"> {/* Adjusted padding */}
        {/* Image placeholder removed */}
        <p className="text-sm text-muted-foreground line-clamp-3 group-hover:line-clamp-none transition-all">
          {startup.description}
        </p>
      </CardContent>
      <CardFooter className="mt-auto pt-4 pb-5 border-t border-border"> {/* Adjusted padding */}
        <Link href={startup.learnMoreUrl} passHref legacyBehavior={startup.learnMoreUrl === '#' ? undefined : false} className="w-full">
          <Button
            variant="outline"
            size="sm"
            className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
            onClick={handleLearnMoreClick}
          >
            Learn More
            {startup.learnMoreUrl !== '#' && <ExternalLink className="ml-2 h-4 w-4" />}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
