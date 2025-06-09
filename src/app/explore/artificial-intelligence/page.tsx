
import Image from 'next/image';
import Link from 'next/link';
import {
  BrainCircuit, TrendingUp, Info as InfoIcon, Milestone, Users, Cpu, Trophy, MessageSquare, 
  Brain, Network, MessageCircle as MessageCircleIcon, Eye, Sparkles, ShieldQuestion, 
  HeartPulse, Banknote, GraduationCap, Car, Leaf, ShieldAlert, 
  Atom, Stethoscope, Copy, Zap, 
  Building, FlaskConical, Globe, 
  Bot, Dna, Scale, Rocket, 
  FileLock, Briefcase, BookOpen, Rss, ArrowRight, ArrowLeft, Lightbulb, CheckCircle, ExternalLink, ShieldCheck, Users2, Microscope, MessageCircleQuestion, CircleHelp, AlignLeft, ListChecks, SearchCheck, Wrench
} from 'lucide-react';
import { Section } from '@/components/Section';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableCaption } from '@/components/ui/table';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Artificial Intelligence (AI) Deep Dive | Innovation Hub Explorer',
  description: 'Explore the history, core concepts (Machine Learning, Deep Learning, NLP, Computer Vision, Generative AI), applications, future trends (AGI), and ethical considerations of Artificial Intelligence.',
  keywords: ['Artificial Intelligence', 'AI', 'Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Generative AI', 'AI Ethics', 'Future of AI', 'AGI', 'Neural Networks'],
  openGraph: {
    title: 'Artificial Intelligence Deep Dive | Innovation Hub Explorer',
    description: 'A comprehensive exploration of Artificial Intelligence: its history, applications, future potential, and ethical implications.',
    url: '/explore/artificial-intelligence',
    images: [
      {
        url: '/og-ai.png',
        width: 1200,
        height: 630,
        alt: 'Artificial Intelligence Deep Dive Conceptual Image',
      },
    ],
  },
  twitter: {
    title: 'Artificial Intelligence Deep Dive | Innovation Hub Explorer',
    description: 'Explore the multifaceted world of Artificial Intelligence, from machine learning to AGI.',
    images: ['/og-ai.png'],
  },
  alternates: {
    canonical: '/explore/artificial-intelligence',
  },
};

const historicalTimelineData = [
  {
    id: 'ht1',
    era: 'Concept & Philosophy',
    yearRange: '1940s–1955',
    title: 'Philosophical Roots & Turing Test',
    description: 'The conceptual groundwork for AI was laid, exploring the idea of synthetic reasoning. Alan Turing proposed the pivotal "Turing Test" in 1950, a benchmark for determining if a machine can exhibit intelligent behavior indistinguishable from that of a human.',
    icon: <Users2 className="w-5 h-5 text-primary" />,
  },
  {
    id: 'ht2',
    era: 'Early Development',
    yearRange: '1956–1970s',
    title: 'AI Coined & First Programs',
    description: 'The term “Artificial Intelligence” was formally coined at the Dartmouth Conference in 1956. This era saw the development of the first AI programs, primarily symbolic, capable of solving algebra problems, proving theorems, and playing games like checkers.',
    icon: <Cpu className="w-5 h-5 text-primary" />,
  },
  {
    id: 'ht3',
    era: 'AI Winter & Rethinking',
    yearRange: '1970s–1990s',
    title: 'Funding Challenges & Quiet Maturation',
    description: 'A period known as the “AI Winter” set in as early hype faded due to limitations in progress and reduced funding. However, during this time, expert systems and early neural network concepts continued to mature quietly in research labs.',
    icon: <Milestone className="w-5 h-5 text-primary" />,
  },
  {
    id: 'ht4',
    era: 'Machine Learning Emerges',
    yearRange: '1990s–2010s',
    title: 'Rise of ML & Deep Learning Breakthrough',
    description: 'The convergence of statistical techniques, increased computing power, and the internet fueled the rise of Machine Learning. A major breakthrough occurred in 2012 when AlexNet, a deep learning model, won the ImageNet challenge, showcasing the power of neural networks.',
    icon: <Brain className="w-5 h-5 text-primary" />,
  },
  {
    id: 'ht5',
    era: 'Modern Era',
    yearRange: '2015–Present',
    title: 'Generative AI & Scalable Applications',
    description: 'This era is characterized by the rapid advancement and adoption of transformers, generative AI models (like GPT and DALL·E), and sophisticated reinforcement learning (e.g., AlphaGo). Ethical debates, the need for explainability (XAI), and the deployment of scalable, real-time AI applications have also come to the forefront.',
    icon: <Sparkles className="w-5 h-5 text-primary" />,
  },
];

const coreConceptsData = [
  { title: 'Machine Learning', icon: <Brain className="w-7 h-7 text-primary" />, description: 'Statistical algorithms trained on data to identify patterns and make predictions. Supervised, unsupervised, and reinforcement learning are its core paradigms.'},
  { title: 'Neural Networks & Deep Learning', icon: <Network className="w-7 h-7 text-primary" />, description: 'Inspired by the human brain, these multi-layered networks learn hierarchical data representations, driving image recognition, speech synthesis, and language translation.' },
  { title: 'Natural Language Processing (NLP)', icon: <MessageCircleIcon className="w-7 h-7 text-primary" />, description: 'Empowers machines to understand, interpret, and generate human language. Powers chatbots, sentiment analysis, and real-time translation services.' },
  { title: 'Computer Vision', icon: <Eye className="w-7 h-7 text-primary" />, description: 'Enables machines to "see" and interpret visual information from the world, used in facial recognition, medical imaging, autonomous vehicles, and object detection.' },
  { title: 'Generative AI', icon: <Sparkles className="w-7 h-7 text-primary" />, description: 'Algorithms capable of generating novel content such as text, images, audio, and code. Examples include ChatGPT, Midjourney, and Sora by OpenAI.' },
  { title: 'Explainable AI (XAI)', icon: <ShieldQuestion className="w-7 h-7 text-primary" />, description: 'A set of tools and techniques designed to make AI decision-making processes interpretable, transparent, and trustworthy. Crucial for applications in healthcare, finance, and law.' },
];

const applicationsData = [
  { sector: 'Healthcare', application: 'Early diagnosis from imaging (X-rays, MRIs), drug discovery acceleration, personalized treatment plans, virtual health assistants, robotic surgery.', icon: <HeartPulse className="w-5 h-5 text-accent"/> },
  { sector: 'Finance', application: 'Advanced fraud detection systems, algorithmic trading strategies, AI-powered credit scoring models, personalized financial advice, automated claims processing.', icon: <Banknote className="w-5 h-5 text-accent"/> },
  { sector: 'Education', application: 'Personalized learning paths tailored to student needs, automated grading systems, AI tutors providing instant feedback, intelligent content creation tools.', icon: <GraduationCap className="w-5 h-5 text-accent"/> },
  { sector: 'Transportation', application: 'Development of self-driving cars and autonomous vehicles, traffic flow optimization, predictive maintenance for vehicles and infrastructure, logistics route planning.', icon: <Car className="w-5 h-5 text-accent"/> },
  { sector: 'Agriculture', application: 'Precision agriculture through crop monitoring via drones/satellites, AI-driven yield prediction, automated irrigation and pest control systems, soil health analysis.', icon: <Leaf className="w-5 h-5 text-accent"/> },
  { sector: 'Cybersecurity', application: 'Proactive threat detection and anomaly identification, behavioral authentication systems, automated incident response, AI-powered vulnerability assessment.', icon: <ShieldAlert className="w-5 h-5 text-accent"/> },
];

const emergingFrontiersData = [
    { title: 'AI + Quantum Computing', description: 'Combining AI\'s probabilistic models with quantum computing\'s immense processing power to tackle previously unsolvable problems in fields like drug discovery, materials science, and complex system simulation.', icon: <Atom className="w-7 h-7 text-primary"/> },
    { title: 'AI in Precision Medicine', description: 'Leveraging AI for real-time genomic analysis, personalized cancer treatments, predictive diagnostics based on individual patient data, and tailoring therapies for maximum efficacy and minimal side effects.', icon: <Stethoscope className="w-7 h-7 text-primary"/> },
    { title: 'Digital Twins', description: 'Creating sophisticated, AI-powered virtual replicas of physical assets, processes, or systems. Used in manufacturing for process optimization, aerospace for predictive maintenance, and urban planning for smart city development.', icon: <Copy className="w-7 h-7 text-primary"/> },
    { title: 'Brain–Machine Interfaces (BMI)', description: 'Developing direct communication pathways between the human brain and computers (e.g., Neuralink). Expanding human-computer symbiosis for therapeutic applications and potentially cognitive enhancement.', icon: <Zap className="w-7 h-7 text-primary"/> },
];

const keyPlayersData = {
  industryLeaders: [
    { name: 'OpenAI', focus: 'GPT, Codex, DALL·E, Sora', icon: <Sparkles className="w-5 h-5 text-primary"/>, url: "https://openai.com/" },
    { name: 'DeepMind (Google)', focus: 'AlphaFold, AlphaGo, Gemini', icon: <Brain className="w-5 h-5 text-primary"/>, url: "https://deepmind.google/" },
    { name: 'NVIDIA', focus: 'AI hardware (GPUs), CUDA, AI platforms', icon: <Cpu className="w-5 h-5 text-primary"/>, url: "https://www.nvidia.com/en-us/ai-data-science/" },
    { name: 'Microsoft', focus: 'Azure AI, Copilot, GitHub Copilot', icon: <Globe className="w-5 h-5 text-primary"/>, url: "https://www.microsoft.com/ai" },
    { name: 'Meta AI', focus: 'Llama, PyTorch, computer vision research', icon: <Network className="w-5 h-5 text-primary"/>, url: "https://ai.meta.com/" },
    { name: 'IBM Watson', focus: 'Enterprise AI, NLP, data analytics', icon: <MessageSquare className="w-5 h-5 text-primary"/>, url: "https://www.ibm.com/watson" },
  ],
  researchInstitutions: [
    { name: 'MIT CSAIL', focus: 'Broad AI research, robotics, ML', icon: <GraduationCap className="w-5 h-5 text-primary"/>, url: "https://www.csail.mit.edu/" },
    { name: 'Stanford AI Lab (SAIL)', focus: 'Deep learning, NLP, vision, healthcare AI', icon: <GraduationCap className="w-5 h-5 text-primary"/>, url: "http://ai.stanford.edu/" },
    { name: 'Berkeley AI Research (BAIR)', focus: 'Robotics, reinforcement learning, responsible AI', icon: <GraduationCap className="w-5 h-5 text-primary"/>, url: "https://bair.berkeley.edu/" },
    { name: 'Carnegie Mellon University (CMU) AI', focus: 'Autonomous systems, AI ethics, language tech', icon: <GraduationCap className="w-5 h-5 text-primary"/>, url: "https://www.cs.cmu.edu/research/artificial-intelligence" },
  ],
  globalInitiatives: [
    { name: 'Partnership on AI', focus: 'Multi-stakeholder organization for responsible AI development and deployment.', icon: <Users className="w-5 h-5 text-primary"/>, url: "https://partnershiponai.org/" },
    { name: 'OECD AI Principles', focus: 'Intergovernmental guidelines for trustworthy AI systems that are human-centric.', icon: <Scale className="w-5 h-5 text-primary"/>, url: "https://oecd.ai/en/ai-principles" },
    { name: 'UNESCO Recommendation on the Ethics of AI', focus: 'Global standard-setting instrument for AI ethics.', icon: <Globe className="w-5 h-5 text-primary"/>, url: "https://www.unesco.org/en/artificial-intelligence/ethics" },
  ],
};

const futureTrendsData = [
    { title: 'Artificial General Intelligence (AGI)', description: 'The pursuit of AI with human-like general cognitive abilities across diverse tasks. While still largely theoretical, AGI poses profound questions about intelligence and consciousness.', icon: <Bot className="w-7 h-7 text-primary"/> },
    { title: 'AI + Synthetic Biology', description: 'AI algorithms designing and engineering novel biological systems, proteins, or even entire organisms for applications in medicine, climate solutions, and materials science.', icon: <Dna className="w-7 h-7 text-primary"/> },
    { title: 'Ethical AI Frameworks & Governance', description: 'Developing robust frameworks, regulations, and auditing mechanisms for bias mitigation, fairness, transparency, accountability, and safety in AI systems.', icon: <Scale className="w-7 h-7 text-primary"/> },
    { title: 'AI in the Metaverse & Web3', description: 'AI powering intelligent avatars, creating dynamic virtual worlds, enabling new forms of human-computer interaction, and managing decentralized autonomous organizations (DAOs).', icon: <Rocket className="w-7 h-7 text-primary"/> },
];

const ethicalChallengesData = [
  { title: 'Bias & Fairness', description: 'Addressing and mitigating discrimination arising from biased datasets or algorithmic design in areas like hiring, lending, and criminal justice.', icon: <Scale className="w-5 h-5 text-destructive" /> },
  { title: 'Transparency & Explainability (XAI)', description: 'Making AI decision-making processes understandable and auditable, especially in critical applications where trust and accountability are paramount.', icon: <ShieldQuestion className="w-5 h-5 text-destructive" /> },
  { title: 'Privacy & Surveillance', description: 'Balancing the benefits of AI-driven data analysis with individual rights to privacy, and navigating the implications of widespread AI-powered surveillance technologies.', icon: <FileLock className="w-5 h-5 text-destructive" /> },
  { title: 'Job Displacement & Economic Impact', description: 'Understanding how AI-driven automation affects employment, the demand for new skills, and the potential need for societal adjustments like universal basic income.', icon: <Briefcase className="w-5 h-5 text-destructive" /> },
  { title: 'AI Weaponization & Autonomous Systems', description: 'Preventing the misuse of AI in autonomous weapons systems (LAWS) and ensuring human control and ethical oversight in military and security applications.', icon: <ShieldAlert className="w-5 h-5 text-destructive" /> },
  { title: 'Accountability & Responsibility', description: 'Determining who is responsible when AI systems cause harm or make errors, and establishing clear lines of accountability for AI developers, deployers, and users.', icon: <CircleHelp className="w-5 h-5 text-destructive" /> },
];

const exploreFurtherData = [
  { type: "Book", title: "Life 3.0: Being Human in the Age of Artificial Intelligence", author: "Max Tegmark", url: "https://www.amazon.com/Life-3-0-Being-Artificial-Intelligence/dp/0141981806", imageHint: "book space universe" },
  { type: "Book", title: "Human Compatible: Artificial Intelligence and the Problem of Control", author: "Stuart Russell", url: "https://www.amazon.com/Human-Compatible-Artificial-Intelligence-Problem/dp/0525558616", imageHint: "book robot human" },
  { type: "Journal", title: "Nature Machine Intelligence", description: "Publishes high-quality research in machine intelligence.", url: "https://www.nature.com/natmachintell/", imageHint: "journal cover brain" },
  { type: "News/Blog", title: "MIT Technology Review - AI", description: "News and analysis on AI breakthroughs and impact.", url: "https://www.technologyreview.com/artificial-intelligence/", imageHint: "news tech abstract" },
  { type: "Community/Archive", title: "arXiv cs.AI (Cornell University)", description: "Open-access archive for scholarly articles in AI.", url: "https://arxiv.org/list/cs.AI/recent", imageHint: "archive papers research" },
  { type: "Community/Forum", title: "AI Alignment Forum", description: "Community discussing AI safety and alignment research.", url: "https://www.alignmentforum.org/", imageHint: "forum discussion people" },
];

export default function ArtificialIntelligencePage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12 space-y-12 md:space-y-16">
      <header className="mb-8">
        <div className="mb-6">
          <Link href="/domains" passHref legacyBehavior={false}>
            <Button variant="outline" size="sm" className="hover:bg-accent hover:text-accent-foreground">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Domains
            </Button>
          </Link>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
          <BrainCircuit className="w-16 h-16 md:w-20 md:h-20 text-primary mx-auto md:mx-0 flex-shrink-0" />
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
              Artificial Intelligence (AI) – Deep Dive
            </h1>
            <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto md:mx-0">
              Artificial Intelligence is the simulation of human intelligence in machines that are programmed to think, learn, adapt, and act. It’s reshaping how we live, work, and perceive reality.
            </p>
          </div>
        </div>
      </header>

      <Section title="AI Overview Visualized" titleIcon={<InfoIcon className="w-6 h-6 text-primary"/>} description="A glance at AI subfields and its evolutionary path." className="bg-muted/30">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader><CardTitle className="text-lg">AI Subfields</CardTitle></CardHeader>
            <CardContent>
              <Image src="https://placehold.co/600x400.png" alt="Infographic illustrating Artificial Intelligence subfields like Machine Learning, NLP, and Computer Vision" width={600} height={400} className="rounded-md object-cover w-full" data-ai-hint="ai subfields chart" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle className="text-lg">AI Evolution at a Glance</CardTitle></CardHeader>
            <CardContent>
              <Image src="https://placehold.co/600x400.png" alt="Conceptual animated timeline slider showing key AI milestones" width={600} height={400} className="rounded-md object-cover w-full" data-ai-hint="timeline slider animation" />
              <p className="text-xs text-muted-foreground mt-2 text-center">Future: Interactive animated timeline.</p>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section title="Historical Timeline of AI" titleIcon={<Milestone className="w-6 h-6 text-primary"/>} description="Key milestones tracing the evolution of Artificial Intelligence.">
        <Accordion type="single" collapsible className="w-full space-y-3">
          {historicalTimelineData.map((item) => (
            <AccordionItem key={item.id} value={item.id} className="border-none">
              <Card className="overflow-hidden border-border hover:border-primary/30 transition-colors duration-300">
                <AccordionTrigger className="p-4 hover:bg-accent/10 hover:no-underline [&[data-state=open]]:bg-accent/20 w-full rounded-t-md text-left">
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <div>
                      <h4 className="text-md font-semibold text-primary">{item.title} ({item.yearRange})</h4>
                      <p className="text-xs text-muted-foreground">{item.era}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="p-4 text-sm text-muted-foreground bg-secondary/30 rounded-b-md border-t border-border">
                  <p>{item.description}</p>
                </AccordionContent>
              </Card>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>

      <Section title="Core Concepts & Technologies" titleIcon={<Lightbulb className="w-6 h-6 text-primary"/>} description="Understanding the fundamental building blocks of AI.">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreConceptsData.map((concept) => (
            <Card key={concept.title} className="flex flex-col h-full hover:shadow-lg transition-shadow group">
              <CardHeader className="items-center text-center">
                <div className="p-3 bg-primary/10 rounded-full mb-2 group-hover:bg-primary/20 transition-colors">{concept.icon}</div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">{concept.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow text-center">
                <p className="text-sm text-muted-foreground">{concept.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Key AI Tools & Platforms" titleIcon={<Wrench className="w-6 h-6 text-primary"/>} description="Essential software and frameworks for AI development and research.">
        <Card className="bg-muted/30 border-dashed">
            <CardContent className="pt-6 text-center">
                <Wrench className="w-12 h-12 text-muted-foreground mx-auto mb-4"/>
                <p className="text-muted-foreground mb-4">A comprehensive directory of AI tools, libraries, and platforms is available in our dedicated "Tools & Platforms" section. This includes popular frameworks like TensorFlow, PyTorch, and libraries from Hugging Face.</p>
                <Link href="/tools?domain=AI" passHref legacyBehavior={false}>
                    <Button variant="default">
                        Explore AI Tools & Platforms <ArrowRight className="ml-2 h-4 w-4"/>
                    </Button>
                </Link>
            </CardContent>
        </Card>
      </Section>

      <Section title="Present-Day Applications" titleIcon={<CheckCircle className="w-6 h-6 text-primary"/>} description="How AI is transforming various industries today.">
        <Card className="overflow-x-auto">
            <Table>
                <TableCaption>A summary of AI applications across key sectors.</TableCaption>
                <TableHeader>
                    <TableRow>
                    <TableHead className="w-[150px]">Sector</TableHead>
                    <TableHead>AI Application Examples</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {applicationsData.map((app) => (
                    <TableRow key={app.sector} className="hover:bg-muted/50">
                        <TableCell className="font-medium flex items-center gap-2 py-3">
                            {app.icon} {app.sector}
                        </TableCell>
                        <TableCell className="py-3 text-sm text-muted-foreground">{app.application}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Card>
      </Section>

      <Section title="Emerging Frontiers in AI" titleIcon={<FlaskConical className="w-6 h-6 text-primary"/>} description="Exploring the cutting edge of AI research and development.">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {emergingFrontiersData.map((frontier) => (
            <Card key={frontier.title} className="flex flex-col h-full hover:shadow-lg transition-shadow group">
              <CardHeader className="items-center text-center">
                <div className="p-3 bg-primary/10 rounded-full mb-2 group-hover:bg-primary/20 transition-colors">{frontier.icon}</div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">{frontier.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow text-center">
                <p className="text-sm text-muted-foreground">{frontier.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Key Players & Ecosystem" titleIcon={<Globe className="w-6 h-6 text-primary"/>} description="Organizations and initiatives driving AI innovation globally.">
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-secondary-foreground flex items-center gap-2"><Building className="w-5 h-5 text-primary"/>Industry Leaders</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {keyPlayersData.industryLeaders.map(leader => (
                <Card key={leader.name} className="p-3 text-center bg-card hover:shadow-md">
                    <Link href={leader.url} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2">
                        <div className="p-2 bg-primary/5 rounded-full">{leader.icon}</div>
                        <p className="text-sm font-medium hover:underline">{leader.name}</p>
                    </Link>
                    <p className="text-xs text-muted-foreground mt-1">{leader.focus}</p>
                </Card>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-secondary-foreground flex items-center gap-2"><Microscope className="w-5 h-5 text-primary"/>Research Institutions</h3>
             <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {keyPlayersData.researchInstitutions.map(inst => (
                <Card key={inst.name} className="p-3 text-center bg-card hover:shadow-md">
                    <Link href={inst.url} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2">
                        <div className="p-2 bg-primary/5 rounded-full">{inst.icon}</div>
                        <p className="text-sm font-medium hover:underline">{inst.name}</p>
                    </Link>
                    <p className="text-xs text-muted-foreground mt-1">{inst.focus}</p>
                </Card>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-secondary-foreground flex items-center gap-2"><Users className="w-5 h-5 text-primary"/>Global Initiatives</h3>
            <div className="space-y-3">
                {keyPlayersData.globalInitiatives.map(init => (
                    <Card key={init.name} className="p-4 bg-card hover:shadow-md">
                        <Link href={init.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group/link">
                            <div className="p-2 bg-primary/10 rounded-full">{init.icon}</div>
                            <div>
                                <h4 className="text-md font-semibold group-hover/link:underline">{init.name}</h4>
                                <p className="text-sm text-muted-foreground">{init.focus}</p>
                            </div>
                        </Link>
                    </Card>
                ))}
            </div>
          </div>
        </div>
      </Section>

      <Section title="Future Trends & Speculations" titleIcon={<Rocket className="w-6 h-6 text-primary"/>} description="Peering into the potential futures shaped by AI.">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {futureTrendsData.map((trend) => (
            <Card key={trend.title} className="flex flex-col h-full hover:shadow-lg transition-shadow group">
              <CardHeader className="items-center text-center">
                <div className="p-3 bg-primary/10 rounded-full mb-2 group-hover:bg-primary/20 transition-colors">{trend.icon}</div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">{trend.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow text-center">
                 <p className="text-sm text-muted-foreground">{trend.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Ethical Challenges & Considerations" titleIcon={<ShieldCheck className="w-6 h-6 text-primary"/>} description="Navigating the complex moral landscape of AI.">
        <div className="space-y-4">
          {ethicalChallengesData.map((challenge) => (
            <Card key={challenge.title} className="flex items-start gap-4 p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 text-destructive bg-destructive/10 p-2.5 rounded-full mt-1">{challenge.icon}</div>
              <div>
                <h4 className="font-semibold text-md text-destructive">{challenge.title}</h4>
                <p className="text-sm text-muted-foreground">{challenge.description}</p>
              </div>
            </Card>
          ))}
        </div>
        <blockquote className="mt-6 border-l-4 border-primary pl-4 italic text-muted-foreground">
          Developing AI responsibly requires ongoing dialogue, robust ethical frameworks, and a commitment to human-centric values.
        </blockquote>
      </Section>

      <Section title="Learn More & Stay Updated" titleIcon={<BookOpen className="w-6 h-6 text-primary"/>} description="Resources for deeper understanding and ongoing learning.">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exploreFurtherData.map(item => (
            <Card key={item.title} className="flex flex-col h-full hover:shadow-lg transition-shadow group">
              <CardHeader>
                <div className="relative w-full h-32 rounded-md overflow-hidden mb-2 border bg-secondary">
                  <Image src={`https://placehold.co/400x200.png`} alt={`Cover for ${item.title}`} layout="fill" objectFit="cover" data-ai-hint={item.imageHint} />
                </div>
                <CardTitle className="text-md group-hover:text-primary transition-colors">{item.title}</CardTitle>
                {item.author && <CardDescription className="text-xs">By {item.author}</CardDescription>}
                <Badge variant="outline" className="mt-1 text-xs w-fit">{item.type}</Badge>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground line-clamp-3">{item.description}</p>
              </CardContent>
              <CardFooter className="pt-3 border-t">
                <Link href={item.url} target="_blank" rel="noopener noreferrer" className="w-full" passHref legacyBehavior={false}>
                  <Button variant="link" size="sm" className="w-full justify-start p-0 h-auto text-primary">
                    Visit Resource <ExternalLink className="ml-1 h-3 w-3" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Section>

    </div>
  );
}
