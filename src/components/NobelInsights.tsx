import { Section } from '@/components/Section';
import { Award, Lightbulb } from 'lucide-react';

export function NobelInsights() {
  const insights = [
    { title: 'Discovery of Penicillin', field: 'Physiology or Medicine', impact: 'Revolutionized treatment of bacterial infections.' },
    { title: 'Theory of Relativity', field: 'Physics (Conceptual)', impact: 'Fundamentally changed our understanding of space, time, gravity.' },
    { title: 'Structure of DNA', field: 'Physiology or Medicine', impact: 'Foundation of modern genetics and biotechnology.' },
  ];

  return (
    <Section title="Nobel Prize Insights" titleIcon={<Award />} description="Groundbreaking ideas that shaped our world.">
       <ul className="space-y-4">
        {insights.map((insight, index) => (
          <li key={index} className="p-3 border rounded-md bg-secondary/50">
            <div className="flex items-center mb-1">
               <Lightbulb className="h-4 w-4 mr-2 text-primary" />
              <h4 className="text-sm font-semibold">{insight.title}</h4>
            </div>
            <p className="text-xs text-muted-foreground mb-1">{insight.field}</p>
            <p className="text-sm">{insight.impact}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
