
'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface EthicalTopic {
  title: string;
  icon: ReactNode;
  description: string;
  caseStudyLink: string;
}

interface EthicalTopicCardProps {
  topic: EthicalTopic;
}

export function EthicalTopicCard({ topic }: EthicalTopicCardProps) {
  const { toast } = useToast();

  const handleExploreClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (topic.caseStudyLink === '#') {
      e.preventDefault(); 
      toast({
        title: "Case Studies Coming Soon!",
        description: `Detailed case studies for "${topic.title}" are being developed and will be available in a future update.`,
      });
    }
  };

  return (
    <Card className="flex flex-col bg-card border-border hover:shadow-xl hover:border-primary/40 transition-all duration-300 ease-in-out group rounded-lg overflow-hidden">
      <CardHeader className="pt-6 pb-4"> 
        <div className="mb-3 flex items-center gap-2"> 
            {topic.icon}
            <CardTitle className="text-xl group-hover:text-primary transition-colors">
            {topic.title}
            </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow pt-0 pb-4"> 
        <p className="text-sm text-muted-foreground line-clamp-4 group-hover:line-clamp-none transition-all">
          {topic.description}
        </p>
      </CardContent>
      <CardFooter className="mt-auto pt-4 pb-6 border-t border-border"> 
        <Link href={topic.caseStudyLink} passHref legacyBehavior={topic.caseStudyLink === '#' ? undefined : false} className="w-full">
          <Button
            variant="outline"
            size="sm"
            className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
            onClick={handleExploreClick}
          >
            Explore Cases
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
