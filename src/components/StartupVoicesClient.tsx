
'use client';

import { ExpertPerspectiveCard } from '@/components/ExpertPerspectiveCard';
import { Mic } from 'lucide-react';
import type { ReactNode } from 'react';
import type { EcosystemVoice } from '@/app/startup/page'; // Import the interface

interface StartupVoicesClientProps {
  voices: EcosystemVoice[];
}

export function StartupVoicesClient({ voices }: StartupVoicesClientProps) {
  if (!voices || voices.length === 0) {
    return (
      <p className="text-center text-muted-foreground">
        No expert insights available at the moment. Check back soon!
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {voices.map((voice, index) => (
        <ExpertPerspectiveCard
          key={index}
          name={voice.name}
          title={voice.title}
          affiliation={voice.affiliation}
          quote={voice.quote}
          buttonText={voice.buttonText}
          icon={<Mic className="w-6 h-6 text-accent" />} // Consistent Mic icon
        />
      ))}
    </div>
  );
}
