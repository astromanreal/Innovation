
'use client';

import { useState, useMemo, useEffect } from 'react';
import { Section } from '@/components/Section';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { Twitter, BarChart3, Edit, HelpCircle, Lightbulb, Send, Users, CheckCircle, ArrowRight, Brain, ThumbsUp } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

interface Poll {
  id: string;
  category: string;
  question: string;
  options: string[];
  answer: string; // Correct answer or the answer to be highlighted
  explanation: string;
}

const allPolls: Poll[] = [
  {
    "id": "poll001",
    "category": "AI & Future Intelligence",
    "question": "Do you think Artificial General Intelligence (AGI) will surpass human intelligence by 2050?",
    "options": [
      "Yes, significantly",
      "Maybe, but just barely",
      "Unlikely before 2100",
      "Never"
    ],
    "answer": "Maybe, but just barely",
    "explanation": "Experts predict AGI may emerge mid-21st century, but exact timelines vary widely. The rate of AI advancement is rapid, but achieving true general intelligence presents immense scientific and engineering challenges."
  },
  {
    "id": "poll002",
    "category": "Tech Ethics",
    "question": "Should AI systems be held legally accountable for autonomous actions?",
    "options": [
      "Yes, with strict regulations",
      "No, responsibility lies with creators",
      "Depends on situation",
      "Undecided"
    ],
    "answer": "Depends on situation",
    "explanation": "Legal accountability for AI is complex. Current frameworks often assign responsibility to human creators or operators, but as AI autonomy increases, new legal precedents and regulations are being debated globally."
  },
  {
    "id": "poll003",
    "category": "Innovation & Society",
    "question": "Which technology will most transform daily life by 2035?",
    "options": [
      "AI Assistants",
      "AR/VR Experiences",
      "Quantum Computing",
      "Brain-Computer Interfaces"
    ],
    "answer": "AI Assistants",
    "explanation": "AI assistants are rapidly integrating into various aspects of daily life, from personal organization to complex problem-solving, suggesting a profound impact on communication, work, and leisure in the near future."
  },
  {
    "id": "poll004",
    "category": "Sustainability",
    "question": "Would you support paying a tech tax to reduce e-waste and fund recycling?",
    "options": [
      "Yes, definitely",
      "Maybe, if it's reasonable",
      "No, companies should pay",
      "Not sure"
    ],
    "answer": "Shared responsibility is a common theme", // Adjusted answer for neutrality
    "explanation": "E-waste is a growing global concern. Many experts and policymakers advocate for shared responsibility models, involving consumers, manufacturers, and governments in managing the lifecycle of electronic products."
  },
  {
    "id": "poll005",
    "category": "Bioethics",
    "question": "Should human gene editing (e.g., CRISPR) be allowed for enhancing intelligence?",
    "options": [
      "Yes, if proven safe",
      "Only for disease prevention",
      "No, unethical",
      "Undecided"
    ],
    "answer": "Only for disease prevention",
    "explanation": "The global scientific and ethical consensus currently prioritizes the therapeutic use of gene editing for disease prevention and treatment, while raising significant concerns about its application for human enhancement due to complex societal and ethical implications."
  },
  {
    "id": "poll006",
    "category": "Privacy & Surveillance",
    "question": "Would you accept constant facial recognition in public areas for increased security?",
    "options": [
      "Yes, for safety",
      "Only with strict oversight",
      "No, it invades privacy",
      "Depends on location"
    ],
    "answer": "Only with strict oversight",
    "explanation": "The use of facial recognition in public spaces involves a trade-off between security benefits and privacy rights. Many legal and ethical discussions emphasize the need for strict oversight, transparency, and clear guidelines to prevent misuse."
  },
  {
    "id": "poll007",
    "category": "Digital Economy",
    "question": "Do you trust decentralized finance (DeFi) more than traditional banking?",
    "options": [
      "Yes, it's the future",
      "Somewhat, still risky",
      "No, prefer banks",
      "Not sure what DeFi is"
    ],
    "answer": "Somewhat, still risky",
    "explanation": "DeFi offers innovative financial services but is still an emerging field with inherent risks, including smart contract vulnerabilities, regulatory uncertainties, and market volatility. Traditional banking offers established regulatory protections."
  },
  {
    "id": "poll008",
    "category": "Space Tech",
    "question": "Should nations invest more in space exploration or Earth sustainability?",
    "options": [
      "More in space",
      "More in Earth",
      "Balance both",
      "Let private companies lead"
    ],
    "answer": "Balance both",
    "explanation": "Space exploration can yield scientific discoveries and technologies beneficial for Earth, while addressing Earth's sustainability challenges is crucial for humanity's future. Many argue for a balanced approach that leverages synergies between the two."
  },
  {
    "id": "poll009",
    "category": "Workforce & Automation",
    "question": "Are you worried that AI/robots will replace your job in the next 10 years?",
    "options": [
      "Yes, very concerned",
      "Somewhat",
      "Not at all",
      "Already happening"
    ],
    "answer": "Somewhat",
    "explanation": "The impact of AI and automation on the workforce varies by industry and role. While some jobs may be automated, new ones are often created, emphasizing the need for continuous learning, reskilling, and adaptation."
  },
  {
    "id": "poll010",
    "category": "AI Rights & Ethics",
    "question": "If a machine becomes conscious, should it be given basic rights?",
    "options": [
      "Yes, like sentient beings",
      "Only limited rights",
      "No, it's still a machine",
      "Need more discussion"
    ],
    "answer": "Need more discussion",
    "explanation": "The prospect of machine consciousness raises profound philosophical, ethical, and legal questions. Defining consciousness in AI and determining appropriate rights would require extensive interdisciplinary discussion and societal consensus."
  }
];

export default function PollPageClient() {
  const [currentPollIndex, setCurrentPollIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | undefined>(undefined);
  const [voteSubmitted, setVoteSubmitted] = useState(false);
  const [suggestion, setSuggestion] = useState('');
  const { toast } = useToast();
  
  const [answeredPollsCount, setAnsweredPollsCount] = useState(0);
  const [answeredPollIds, setAnsweredPollIds] = useState<Set<string>>(new Set());

  const currentPoll = allPolls[currentPollIndex];

  const handleVoteSubmit = () => {
    if (!selectedOption) {
      toast({
        title: 'No Option Selected',
        description: 'Please select an answer before submitting.',
        variant: 'destructive',
      });
      return;
    }
    setVoteSubmitted(true);

    if (!answeredPollIds.has(currentPoll.id)) {
      setAnsweredPollIds(prevIds => new Set(prevIds).add(currentPoll.id));
      setAnsweredPollsCount(prevCount => prevCount + 1);
    }

    toast({
      title: 'Vote Submitted!',
      description: 'Thank you for sharing your perspective.',
    });
  };

  const handleSuggestionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!suggestion.trim()) {
      toast({
        title: 'Empty Suggestion',
        description: 'Please enter your suggestion or feedback.',
        variant: 'destructive',
      });
      return;
    }
    console.log('Suggestion submitted:', suggestion); // Placeholder for actual submission
    setSuggestion('');
    toast({
      title: 'Suggestion Received!',
      description: 'Thank you for your feedback.',
    });
  };

  const handleNextPoll = () => {
    setVoteSubmitted(false);
    setSelectedOption(undefined);
    setCurrentPollIndex((prevIndex) => (prevIndex + 1) % allPolls.length);
  };

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 space-y-12 md:space-y-16">
      <header className="text-center mb-12 md:mb-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-primary flex items-center justify-center gap-3">
          <HelpCircle className="w-10 h-10" /> Quick Polls: Share Your Perspective
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Engage with thought-provoking questions on innovation, technology, and ethics. Share your opinion and see what others think!
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        
        <div className="md:col-span-3 space-y-6">
            <Card className="bg-muted/30 sticky top-20">
                <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2"><BarChart3 className="w-5 h-5 text-primary"/>Your Activity</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">
                        Polls Answered This Session: <span className="font-semibold text-primary">{answeredPollsCount}</span>
                    </p>
                    <p className="text-xs text-muted-foreground italic mt-2">(Poll activity is for the current session. Full filtering and history are planned enhancements.)</p>
                </CardContent>
            </Card>
        </div>

        <main className="md:col-span-9 space-y-8">
           {currentPoll ? (
            <Section title={`Current Poll: ${currentPoll.category}`} titleIcon={<Lightbulb className="w-6 h-6 text-primary" />} className="bg-card">
                <CardHeader className="pt-0">
                     <CardTitle className="text-xl md:text-2xl">{currentPoll.question}</CardTitle>
                     <CardDescription className="text-sm text-muted-foreground pt-1">
                         Category: <Badge variant="secondary">{currentPoll.category}</Badge>
                     </CardDescription>
                </CardHeader>
                <CardContent>
                    <RadioGroup value={selectedOption} onValueChange={setSelectedOption} className="space-y-3" disabled={voteSubmitted}>
                    {currentPoll.options.map((option, index) => (
                        <div key={`${currentPoll.id}-opt-${index}`} className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-muted/50 transition-colors data-[state=checked]:bg-primary/10 data-[state=checked]:border-primary cursor-pointer"
                            onClick={() => !voteSubmitted && setSelectedOption(option)}
                        >
                        <RadioGroupItem value={option} id={`${currentPoll.id}-opt-${index}`} />
                        <Label htmlFor={`${currentPoll.id}-opt-${index}`} className="text-base font-normal flex-1 cursor-pointer">{option}</Label>
                        </div>
                    ))}
                    </RadioGroup>
                </CardContent>
                <CardFooter className="flex-col sm:flex-row justify-between items-center gap-3">
                    <Button onClick={handleVoteSubmit} disabled={voteSubmitted || !selectedOption} className="w-full sm:w-auto text-base py-3 px-6">
                        {voteSubmitted ? (<><CheckCircle className="mr-2 h-5 w-5"/>Vote Submitted!</>) : 'Submit Vote'}
                    </Button>
                    {voteSubmitted && (
                        <Button onClick={handleNextPoll} variant="outline" className="w-full sm:w-auto text-base py-3 px-6">Next Poll <ArrowRight className="ml-2 h-5 w-5"/></Button>
                    )}
                </CardFooter>
            </Section>
           ) : (
             <Card className="text-center text-muted-foreground p-6 md:p-8 border-dashed border-border bg-muted/20 rounded-lg">
                <CardContent className="p-0">
                    <HelpCircle className="w-10 h-10 text-primary/50 mx-auto mb-3" />
                    <p className="text-md">No polls available at the moment. Please check back later.</p>
                </CardContent>
            </Card>
           )}

            {voteSubmitted && currentPoll && (
                <Section title="Poll Results & Insights" titleIcon={<ThumbsUp className="w-6 h-6 text-primary" />} description="Learn more about this topic." className="bg-card">
                    <CardContent className="space-y-6">
                        <div>
                            <h4 className="text-md font-semibold mb-2 text-secondary-foreground">Community Responses:</h4>
                            <div className="text-sm text-muted-foreground bg-secondary p-4 rounded-md border">
                                Community responses will be visualized here (e.g., bar chart or pie chart). For now, thank you for your participation!
                            </div>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-2 text-secondary-foreground flex items-center gap-2"><Brain className="w-5 h-5 text-accent"/>Recommended Answer / Expert Insight:</h4>
                            <Card className="bg-muted/50 p-4 border-accent/30">
                                <p className="text-md font-semibold text-primary mb-1">{currentPoll.answer}</p>
                                <p className="text-muted-foreground text-sm">{currentPoll.explanation}</p>
                            </Card>
                        </div>
                    </CardContent>
                </Section>
            )}

            <Section title="Suggest a Poll or Share Feedback" titleIcon={<Edit className="w-6 h-6 text-primary" />} description="Your input helps us grow! Have an idea for a future poll or feedback on this feature? Let us know." className="bg-card">
                <form onSubmit={handleSuggestionSubmit}>
                    <CardContent>
                    <Label htmlFor="suggestion" className="sr-only">Your Suggestion or Feedback</Label>
                    <Textarea
                        id="suggestion"
                        value={suggestion}
                        onChange={(e) => setSuggestion(e.target.value)}
                        placeholder="Type your poll question idea, topic suggestion, or general feedback here..."
                        rows={4}
                        className="text-base"
                    />
                    </CardContent>
                    <CardFooter>
                    <Button type="submit" className="w-full sm:w-auto text-base py-3 px-6">
                        <Send className="mr-2 h-5 w-5" />
                        Submit Suggestion
                    </Button>
                    </CardFooter>
                </form>
            </Section>
            
             <Section title="Connect & Explore More" titleIcon={<Users className="w-5 h-5 text-primary" />} description="Help spread the conversation or dive deeper into related topics." className="bg-muted/30 text-center">
                <CardContent className="flex flex-col items-center gap-4">
                    <p className="text-sm text-muted-foreground">Enjoyed these polls? Share your thoughts or explore related content.</p>
                    <div className="flex flex-wrap justify-center gap-3">
                        <Button variant="outline" onClick={() => toast({ title: "Coming Soon!", description: "Sharing on X will be available in a future update."})}>
                           <Twitter className="mr-2 h-4 w-4" /> Share on X (Future)
                        </Button>
                        <Button variant="outline" asChild><Link href="/research">Explore Research Library</Link></Button>
                    </div>
                </CardContent>
            </Section>
        </main>
      </div>
    </div>
  );
}
