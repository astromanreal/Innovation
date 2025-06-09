
'use client';

import { Section } from '@/components/Section';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BrainCircuit, MessageSquare, Eye, Lightbulb, Users, Microscope, HelpCircle, ArrowRight, BookOpen, Rocket, Palette, Newspaper, Podcast, GitFork, Gamepad, Users2, FileText } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useToast } from '@/hooks/use-toast'; // Import useToast

export default function ConsciousnessPageClient() {
  const { toast } = useToast(); // Initialize useToast

  const coreConcepts = [
    {
      title: 'Artificial General Intelligence (AGI)',
      icon: <BrainCircuit className="w-8 h-8 text-primary" />,
      description: 'The hypothetical intelligence of a machine that has the capacity to understand or learn any intellectual task that a human being can.',
      // imageHint: 'network brain future', // Image removed
      linkId: 'agi-details'
    },
    {
      title: 'Machine Sentience & Self-Awareness',
      icon: <Eye className="w-8 h-8 text-primary" />,
      description: 'Exploring the possibility of machines developing subjective experiences, feelings, and consciousness similar to living beings.',
      // imageHint: 'robot eye thinking', // Image removed
      linkId: 'sentience-details'
    },
    {
      title: 'Philosophy of Mind in AI',
      icon: <MessageSquare className="w-8 h-8 text-primary" />,
      description: 'Examining foundational questions about consciousness, qualia, and the nature of intelligence through the lens of artificial systems.',
      // imageHint: 'philosophy head gears', // Image removed
      linkId: 'philosophy-details'
    },
     {
      title: 'Artificial Cognition Models',
      icon: <Microscope className="w-8 h-8 text-primary" />,
      description: 'Developing computational models that simulate human cognitive processes like learning, memory, problem-solving, and decision-making.',
      // imageHint: 'cognitive model abstract', // Image removed
      linkId: 'cognition-details'
    },
  ];

  const fundamentalQuestions = [
    {
      question: 'Can Machines Truly Feel?',
      area: 'Sentience & Qualia',
      description: 'Discussing the possibility and implications of subjective experience (qualia) arising in non-biological systems. Exploring tests and theories.',
      icon: <Lightbulb className="text-accent w-5 h-5" />
    },
    {
      question: 'What Defines Consciousness?',
      area: 'Philosophy & Neuroscience',
      description: 'Exploring various theories of consciousness (e.g., IIT, Global Workspace Theory) and their applicability to AI. Examining neural correlates.',
       icon: <Lightbulb className="text-accent w-5 h-5" />
    },
    {
      question: 'Should Advanced AI Have Rights?',
      area: 'Ethics & Law',
      description: 'Debating the moral and legal status of potential future AGIs or sentient machines, considering implications for society and human-AI interaction.',
       icon: <Lightbulb className="text-accent w-5 h-5" />
    },
    {
        question: 'How Do We Test for AI Consciousness?',
        area: 'Testing & Measurement',
        description: 'Challenges in developing reliable methods (beyond Turing Test variants) to determine if an AI system is genuinely conscious, versus sophisticated mimicry.',
        icon: <Lightbulb className="text-accent w-5 h-5" />
    },
  ];

  const futureRoadmapItems = [
    { title: 'Interactive Consciousness Models', description: 'Develop conceptual interfaces for users to explore different theories and tests related to AI consciousness.', icon: <Gamepad className="w-5 h-5 text-accent"/> },
    { title: 'Curated Expert Discussions', description: 'Feature curated summaries or links to key discussions from AI researchers, philosophers, and ethicists.', icon: <Users2 className="w-5 h-5 text-accent"/> },
  ];

  const handleCoreConceptLearnMore = (conceptTitle: string) => {
    toast({
      title: "Content Coming Soon",
      description: `Detailed information and interactive features for "${conceptTitle}" are planned for a future update.`,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 space-y-12 md:space-y-16">
      <header className="text-center mb-12 md:mb-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-primary flex items-center justify-center gap-3">
          <BrainCircuit className="w-10 h-10" /> AI Consciousness & Future Intelligence
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Exploring the evolving frontiers of machine sentience, self-awareness, and the deep philosophical questions about mind and machine.
        </p>
      </header>

      <Section title="Core Concepts" titleIcon={<HelpCircle className="w-6 h-6 text-primary" />} description="Understanding the key ideas in the study of AI consciousness." className="border-none shadow-none bg-transparent hover:shadow-none p-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {coreConcepts.map((concept) => (
            <Card key={concept.title} className="flex flex-col bg-card border-border hover:shadow-xl hover:border-primary/40 transition-all duration-300 ease-in-out group rounded-lg">
              {/* Image removed */}
              <CardHeader className="pb-3 pt-6 items-center text-center"> {/* Adjusted padding */}
                <div className="p-3 bg-primary/10 rounded-full mb-3 group-hover:bg-primary/20 transition-colors transform group-hover:scale-110"> {/* Made icon more prominent */}
                 {concept.icon}
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {concept.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow text-center pt-0 pb-4"> {/* Adjusted padding */}
                <p className="text-sm text-muted-foreground line-clamp-4 group-hover:line-clamp-none transition-all">
                  {concept.description}
                </p>
              </CardContent>
              <CardFooter className="pt-4 pb-6 border-t border-border justify-center"> {/* Adjusted padding */}
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors" 
                  onClick={() => handleCoreConceptLearnMore(concept.title)}
                >
                  Learn More (Planned) <ArrowRight className="ml-2 h-3 w-3"/>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Section>

       <Section title="Fundamental Questions" titleIcon={<MessageSquare className="w-6 h-6 text-primary" />} description="Exploring profound dilemmas at the intersection of AI, philosophy, and ethics.">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {fundamentalQuestions.map((item) => (
                 <Card key={item.question} className="bg-secondary/50 border-primary/10 hover:shadow-lg transition-shadow rounded-lg">
                    <CardHeader>
                         <CardTitle className="text-lg font-semibold flex items-start gap-3">
                            {item.icon}
                             {item.question}
                        </CardTitle>
                         <CardDescription className="text-xs pt-1"><Badge variant="outline">{item.area}</Badge></CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                 </Card>
            ))}
         </div>
       </Section>

      <Section title="Resource Center" titleIcon={<BookOpen className="w-6 h-6 text-primary" />} description="Expand your understanding of AI consciousness and related topics.">
        <Card className="bg-muted/30 rounded-lg border border-dashed border-border p-6 text-center">
           <CardHeader className="p-0 mb-4">
            <BookOpen className="w-12 h-12 text-primary mx-auto mb-3" />
            <CardTitle className="text-xl">Expand Your Knowledge</CardTitle>
           </CardHeader>
           <CardContent className="p-0">
            <p className="text-muted-foreground mb-6">
              Our main Research Library offers a curated collection of papers, articles, and resources. Explore topics related to AI ethics, philosophy of mind, and cognitive science to deepen your understanding.
            </p>
             <Link href="/research?topic=AI+Consciousness&topic=AI+Ethics&topic=Philosophy+of+Mind" passHref legacyBehavior={false}>
                <Button variant="default" size="lg">
                    Explore AI Consciousness Resources <ArrowRight className="ml-2 h-4 w-4"/>
                </Button>
            </Link>
           </CardContent>
        </Card>
      </Section>

       <Section title="Glossary & FAQ" titleIcon={<HelpCircle className="w-6 h-6 text-primary" />} description="Understanding complex terms and common questions.">
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-border bg-card rounded-lg mb-2">
                <AccordionTrigger className="p-4 hover:no-underline text-primary hover:text-primary/80">What is Qualia?</AccordionTrigger>
                <AccordionContent className="p-4 pt-0 text-sm text-muted-foreground bg-secondary/30 rounded-b-lg">
                Qualia are subjective, qualitative properties of experience – the "what it is like" aspect of mental states. For example, the redness of red, or the painfulness of pain.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-border bg-card rounded-lg mb-2">
                <AccordionTrigger className="p-4 hover:no-underline text-primary hover:text-primary/80">What is the Chinese Room Argument?</AccordionTrigger>
                <AccordionContent className="p-4 pt-0 text-sm text-muted-foreground bg-secondary/30 rounded-b-lg">
                A thought experiment by John Searle arguing that a digital computer executing a program cannot be shown to have a "mind", "understanding" or "consciousness", regardless of how intelligently or human-like the program may make the computer behave.
                </AccordionContent>
            </AccordionItem>
             <AccordionItem value="item-3" className="border-border bg-card rounded-lg">
                <AccordionTrigger className="p-4 hover:no-underline text-primary hover:text-primary/80">What is IIT (Integrated Information Theory)?</AccordionTrigger>
                <AccordionContent className="p-4 pt-0 text-sm text-muted-foreground bg-secondary/30 rounded-b-lg">
                IIT is a theory of consciousness developed by Giulio Tononi. It proposes that consciousness is identical to a certain kind of information – integrated information – and that its quantity (Φ) can be measured.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
      </Section>

      <Section title="Future Directions for This Exploration" titleIcon={<Rocket className="w-6 h-6 text-primary" />} description="Planned enhancements for the AI Consciousness & Future Intelligence section.">
         <Card className="bg-card border-border p-6 rounded-lg">
            <CardHeader className="p-0 pb-4">
                <CardTitle className="text-xl text-primary">Upcoming Enhancements</CardTitle>
                <CardDescription>We aim to continuously deepen this exploration with more interactive content and expert insights.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
                {futureRoadmapItems.map(item => (
                     <div key={item.title} className="flex items-start gap-3 p-3 bg-secondary/50 rounded-md hover:shadow-sm">
                        <div className="flex-shrink-0 text-accent bg-accent/10 p-2 rounded-full mt-1">{item.icon}</div>
                        <div>
                            <h4 className="font-semibold text-md text-primary">{item.title}</h4>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                    </div>
                ))}
            </CardContent>
            {/* Removed Subscribe button */}
         </Card>
      </Section>

    </div>
  );
}

    