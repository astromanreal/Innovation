
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { ExternalLink, Brain, Scale } from 'lucide-react'; // Added Brain, Scale
import type { ReactNode } from 'react';

interface ExpertPerspectiveCardProps {
  name: string;
  title: string;
  affiliation: string;
  quote: string;
  buttonText: string;
  icon: ReactNode; // Added icon prop
}

export function ExpertPerspectiveCard({ name, title, affiliation, quote, buttonText, icon }: ExpertPerspectiveCardProps) {
  const { toast } = useToast();

  const handleButtonClick = () => {
    toast({
      title: "Feature In Development",
      description: `Detailed content for "${name}" is planned for a future update.`,
    });
  };

  return (
    <Card className="bg-card hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          {icon}
          <div>
            <CardTitle className="text-lg">{name}</CardTitle>
            <CardDescription className="text-xs">{title}, {affiliation}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground italic">
          "{quote}"
        </p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" onClick={handleButtonClick}>
          {buttonText} <ExternalLink className="ml-2 h-4 w-4 opacity-70" />
        </Button>
      </CardFooter>
    </Card>
  );
}
