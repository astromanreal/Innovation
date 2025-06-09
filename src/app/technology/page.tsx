
import { Section } from '@/components/Section';
import { ShieldCheck, DatabaseZap, Recycle, Users, Scale, Eye, TestTubeDiagonal, MessageSquare, HelpCircle, BookOpen, Globe, Landmark, Zap, BarChart3, Edit, ThumbsUp, AlertTriangle, Brain, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { EthicalTopicCard } from '@/components/EthicalTopicCard';
import type { ReactNode } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import type { Metadata } from 'next';
import { ExpertPerspectiveCard } from '@/components/ExpertPerspectiveCard'; // Import the new component

export const metadata: Metadata = {
  title: 'Technology Ethics & Responsibility',
  description: 'Explore ethical challenges in AI, data privacy, bioethics, sustainability, and more. Engage with case studies, expert perspectives, and global insights on responsible innovation.',
  keywords: ['technology ethics', 'AI ethics', 'data privacy', 'bioethics', 'algorithmic bias', 'responsible innovation', 'surveillance', 'sustainability'],
  openGraph: {
    title: 'Technology Ethics & Responsibility | Innovation Hub Explorer',
    description: 'Navigating the moral landscape of technological advancements.',
    url: '/technology',
     images: [
      {
        url: '/og-ethics.png', 
        width: 1200,
        height: 630,
        alt: 'Technology Ethics and Responsibility Abstract Visualization',
      },
    ],
  },
  twitter: {
    title: 'Technology Ethics & Responsibility',
    description: 'Exploring the ethical impact of technology.',
  },
  alternates: {
    canonical: '/technology',
  },
};

interface EthicalTopicData {
  title: string;
  icon: ReactNode;
  description: string;
  caseStudyLink: string; 
}

const regulationsAndGuidelines = [
  {
    id: 'gdpr',
    title: 'GDPR (General Data Protection Regulation)',
    category: 'Data Privacy',
    summary: 'EU law on data protection and privacy for all individuals within the European Union and the European Economic Area. It addresses the transfer of personal data outside the EU and EEA areas.',
    link: 'https://gdpr-info.eu/'
  },
  {
    id: 'ccpa',
    title: 'CCPA/CPRA (California Consumer Privacy Act/California Privacy Rights Act)',
    category: 'Data Privacy',
    summary: 'State statute intended to enhance privacy rights and consumer protection for residents of California, United States.',
    link: 'https://oag.ca.gov/privacy/ccpa'
  },
  {
    id: 'ieee-ethics',
    title: 'IEEE Ethically Aligned Design',
    category: 'AI Ethics',
    summary: 'A comprehensive guide offering insights and recommendations to inspire the creation of ethical and responsible autonomous and intelligent systems.',
    link: 'https://ethicsinaction.ieee.org/'
  },
  {
    id: 'unesco-ai-ethics',
    title: 'UNESCO Recommendation on the Ethics of AI',
    category: 'AI Ethics',
    summary: 'The first global standard-setting instrument on the ethics of artificial intelligence, adopted by UNESCO\'s Member States.',
    link: 'https://www.unesco.org/en/artificial-intelligence/ethics'
  }
];

const furtherReadingResources = [
    { title: "Weapons of Math Destruction by Cathy O'Neil", type: "Book", description: "Explores how big data increases inequality and threatens democracy.", imageHint: "book data bias", link: "https://www.amazon.com/Weapons-Math-Destruction-Increases-Inequality/dp/0553418815" },
    { title: "The Age of Surveillance Capitalism by Shoshana Zuboff", type: "Book", description: "Examines the new form of capitalism that monetizes personal data.", imageHint: "book surveillance capitalism", link: "https://www.amazon.com/Age-Surveillance-Capitalism-Future-Frontier/dp/1610395697" },
    { title: "Radical AI Podcast", type: "Podcast", description: "Features interviews with thinkers on AI ethics, technology, and society.", imageHint: "podcast microphone audio", link: "https://www.radicalai.org/" },
    { title: "AI Ethics Lab", type: "Organization", description: "Conducts research and provides resources on ethical AI.", imageHint: "lab research computer", link: "https://aiethicslab.com/" },
];

const futureEthicalChallenges = [
    { title: "Quantum Computing Ethics", description: "Implications of quantum computers breaking current encryption, AI advancement, and equitable access.", icon: <Zap className="w-5 h-5 text-destructive" /> },
    { title: "Neurotechnology & BCIs", description: "Privacy of thoughts, cognitive liberty, potential for manipulation, and defining human enhancement.", icon: <Brain className="w-5 h-5 text-destructive" /> },
    { title: "Advanced AI & AGI Governance", description: "Developing robust governance and control mechanisms for highly autonomous or potentially superintelligent AI.", icon: <AlertTriangle className="w-5 h-5 text-destructive" /> },
    { title: "Deepfake Legislation & Reality", description: "Combating sophisticated AI-generated misinformation and its impact on trust and societal stability.", icon: <Users className="w-5 h-5 text-destructive" /> },
];


export default function TechnologyEthicsPage() {
  const ethicalTopics: EthicalTopicData[] = [
    {
      title: 'Data Privacy & Surveillance',
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      description: 'Navigating data collection, usage, consent, protection, and the implications of increasing surveillance capabilities. Examining GDPR, CCPA, and encryption.',
      caseStudyLink: '#' 
    },
    {
      title: 'Algorithmic Bias & Fairness',
      icon: <Scale className="w-8 h-8 text-primary" />,
      description: 'Addressing biases embedded in AI algorithms that can lead to discrimination in hiring, loan applications, facial recognition, and content moderation.',
      caseStudyLink: '#'
    },
    {
      title: 'AI & Workforce Automation',
      icon: <Users className="w-8 h-8 text-primary" />,
      description: 'Exploring societal shifts from automation: job displacement, the need for reskilling/upskilling, universal basic income debates, and the future of work.',
      caseStudyLink: '#'
    },
    {
      title: 'Environmental Sustainability',
      icon: <Recycle className="w-8 h-8 text-primary" />,
      description: 'Considering the tech environmental footprint: e-waste, data center energy consumption, sustainable design, and the potential of Green Tech.',
      caseStudyLink: '#'
    },
    {
      title: 'Misinformation & Platforms',
      icon: <DatabaseZap className="w-8 h-8 text-primary" />, 
      description: 'The role and responsibility of tech platforms in curbing the spread of false information, deepfakes, and their impact on society and democracy.',
      caseStudyLink: '#'
    },
    {
       title: 'Bioethics & Emerging Tech',
       icon: <TestTubeDiagonal className="w-8 h-8 text-primary" />,
       description: 'Ethical considerations surrounding genetic engineering (CRISPR), synthetic biology, neurotechnology, and human enhancement.',
       caseStudyLink: '#'
    },
     {
       title: 'Autonomous Systems Ethics',
       icon: <Eye className="w-8 h-8 text-primary" />,
       description: 'Ethical dilemmas in self-driving cars, autonomous weapons ("killer robots"), and AI decision-making in critical life-or-death situations.',
       caseStudyLink: '#'
    }
  ];
  
  const expertPerspectives = [
    {
      name: "Dr. Anya Sharma (Conceptual)",
      title: "AI Ethicist",
      affiliation: "Future of Humanity Institute",
      quote: "The true challenge of AI lies not in its capability, but in our capacity to imbue it with our deepest values. Transparency and accountability must be the bedrock of intelligent systems.",
      buttonText: "Read Full Perspective",
      icon: <Brain className="w-6 h-6 text-accent" />
    },
    {
      name: "Prof. Ben Carter (Conceptual)",
      title: "Technology Law & Policy Scholar",
      affiliation: "Stanford University",
      quote: "Effective governance of emerging technologies requires proactive, adaptive legal frameworks that can anticipate challenges without stifling innovation. International collaboration is key.",
      buttonText: "Explore Policy Insights",
      icon: <Scale className="w-6 h-6 text-accent" />
    }
  ];


  return (
    <div className="container mx-auto px-4 py-8 md:py-12 space-y-12 md:space-y-16">
      <header className="text-center mb-12 md:mb-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-primary flex items-center justify-center gap-3">
          <ShieldCheck className="w-10 h-10" /> Technology Ethics & Responsibility
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          As technology reshapes our world, understanding its ethical impact becomes crucial. This page invites users to explore pressing ethical issues, real-world dilemmas, and the debates guiding responsible innovation.
        </p>
      </header>

       <Section title="Explore Key Ethical Topics" titleIcon={<HelpCircle className="w-6 h-6 text-primary" />} description="Dive into specific areas of concern and discussion. Detailed case studies for each topic are planned." className="border-none shadow-none bg-transparent hover:shadow-none p-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {ethicalTopics.map((topic, index) => (
              <EthicalTopicCard key={index} topic={topic} />
            ))}
          </div>
       </Section>
       
       <Section title="Regulations & Guidelines Corner" titleIcon={<Landmark className="w-6 h-6 text-primary" />} description="Mapping the evolving legal and policy frameworks governing technology.">
        <Accordion type="multiple" className="w-full space-y-3">
          {regulationsAndGuidelines.map((item) => (
            <AccordionItem key={item.id} value={item.id} className="border-none">
              <Card className="overflow-hidden border-border hover:border-primary/30 transition-colors duration-300">
                <AccordionTrigger className="p-4 hover:bg-accent/10 hover:no-underline [&[data-state=open]]:bg-accent/20 w-full rounded-t-md text-left">
                  <div className="flex items-center gap-3">
                    <Landmark className="w-5 h-5 text-primary"/>
                    <div>
                      <h4 className="text-md font-semibold text-primary">{item.title}</h4>
                      <p className="text-xs text-muted-foreground">Category: {item.category}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="p-4 text-sm text-muted-foreground bg-secondary/30 rounded-b-md border-t border-border">
                  <p className="mb-2">{item.summary}</p>
                  <Link href={item.link} target="_blank" rel="noopener noreferrer" passHref legacyBehavior={false}>
                    <Button variant="link" size="sm" className="p-0 h-auto">Learn More <ExternalLink className="ml-1 h-3 w-3"/></Button>
                  </Link>
                </AccordionContent>
              </Card>
            </AccordionItem>
          ))}
        </Accordion>
        <p className="text-xs text-muted-foreground text-center mt-4">Note: This is a summary. Always refer to official sources for complete legal texts and updates.</p>
       </Section>

        <Section title="Expert Perspectives" titleIcon={<Users className="w-6 h-6 text-primary" />} description="Illustrative insights from conceptual ethicists, technologists, and policymakers. Actual content is planned.">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {expertPerspectives.map((expert, index) => (
              <ExpertPerspectiveCard 
                key={index}
                name={expert.name}
                title={expert.title}
                affiliation={expert.affiliation}
                quote={expert.quote}
                buttonText={expert.buttonText}
                icon={expert.icon}
              />
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">
            Full interviews, commentaries, and links to relevant talks from leading thinkers are planned for future updates.
          </p>
        </Section>

        <Section title="Community Engagement" titleIcon={<MessageSquare className="w-6 h-6 text-primary" />} description="Join the conversation on complex ethical issues. Share your thoughts in our polls.">
             <Card className="bg-muted/30 border-dashed border-border text-center py-12">
                <CardContent>
                    <MessageSquare className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground mb-4">Participate in polls and contribute to discussions on pressing ethical topics. A moderated forum is planned for deeper engagement.</p>
                    <Button variant="secondary" asChild>
                        <Link href="/poll">Participate in Polls</Link>
                    </Button>
                </CardContent>
            </Card>
        </Section>

        <Section title="Further Reading & Resources" titleIcon={<BookOpen className="w-6 h-6 text-primary" />} description="Curated list of books, articles, podcasts, and organizations for deeper exploration.">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {furtherReadingResources.map((item, index) => (
                    <Card key={index} className="flex flex-col bg-card hover:shadow-lg transition-shadow">
                         <CardHeader className="pb-3">
                            <CardTitle className="text-md">{item.title}</CardTitle>
                            <CardDescription><Badge variant="outline">{item.type}</Badge></CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-sm text-muted-foreground line-clamp-3">{item.description}</p>
                        </CardContent>
                        <CardFooter className="pt-3 border-t">
                            <Link href={item.link} target="_blank" rel="noopener noreferrer" className="w-full" passHref legacyBehavior={false}>
                                <Button variant="link" size="sm" className="w-full justify-start p-0 h-auto text-primary">
                                    Learn More <ExternalLink className="ml-1 h-3 w-3" />
                                </Button>
                            </Link>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </Section>

        <Section title="Future Outlook & Emerging Issues" titleIcon={<Zap className="w-6 h-6 text-primary" />} description="Keeping an eye on the horizon of technological ethics.">
           <div className="space-y-4">
            {futureEthicalChallenges.map((challenge, index) => (
                <Card key={index} className="flex items-center gap-4 p-4 bg-card hover:shadow-md transition-shadow">
                    <div className="flex-shrink-0 text-destructive bg-destructive/10 p-2.5 rounded-full">{challenge.icon}</div>
                    <div>
                        <h4 className="font-semibold text-md text-destructive">{challenge.title}</h4>
                        <p className="text-sm text-muted-foreground">{challenge.description}</p>
                    </div>
                </Card>
            ))}
           </div>
           <Card className="mt-6 bg-muted/30 text-center py-6">
             <CardContent>
                <p className="text-muted-foreground">Stay informed. New ethical debates emerge as technology advances. A newsletter feature is planned for future updates.</p>
             </CardContent>
           </Card>
        </Section>

    </div>
  );
}
