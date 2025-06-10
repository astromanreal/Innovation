
'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Handshake, Milestone, Lightbulb, Brain, Users, Building, Globe, Puzzle, Scale, BookOpen, ArrowLeft, ExternalLink, Info as InfoIcon, CheckCircle, Cpu, Users2, Rocket,
  MicVocal, MousePointerSquare as TactileIcon, BrainCircuit, Gamepad2, HeartPulse, Laptop, MonitorSmartphone, Wand2, Share2, LockKeyhole, Accessibility, UsersRound, MessageSquareWarning,
  FlaskConical, Briefcase, TrendingUp, MapPin, GraduationCap
} from 'lucide-react';
import { Section } from '@/components/Section';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const historicalTimelineData = [
  {
    id: 'hci_ht1',
    era: 'Concept Era',
    title: 'Early Ideas & Cognitive Psychology',
    description: 'Early ideas about human factors in computing and ergonomics. Foundational theories in cognitive psychology relevant to interface design. Focus on making machines more usable.',
    icon: <Lightbulb className="w-5 h-5 text-primary" />,
  },
  {
    id: 'hci_ht2',
    era: 'Pioneering Developments',
    title: 'GUIs, Voice Recognition & Touch Screens',
    description: 'Introduction of graphical user interfaces (GUI) by Xerox PARC and Apple. Early research into voice recognition systems and the first touch screen technologies emerge.',
    icon: <FlaskConical className="w-5 h-5 text-primary" />,
  },
  {
    id: 'hci_ht3',
    era: 'Growth & Adoption',
    title: 'Mobile Devices, Multi-Touch & AI Integration',
    description: 'Expansion into mobile devices with multi-touch interfaces (smartphones, tablets). Advances in machine learning powering more sophisticated voice AI (Siri, Alexa) and early gesture recognition systems.',
    icon: <Rocket className="w-5 h-5 text-primary" />,
  },
  {
    id: 'hci_ht4',
    era: 'Modern Era',
    title: 'BCIs, Immersive Experiences & Wearables',
    description: 'Development of Brain-Computer Interfaces (BCIs) and neural interfaces. Integration with AR/VR systems for deeply immersive experiences. Emergence of advanced tactile feedback devices and sophisticated wearable technologies.',
    icon: <Brain className="w-5 h-5 text-primary" />,
  },
];

const presentApplicationsData = [
  {
    title: 'Assistive Technologies',
    icon: <Accessibility className="w-7 h-7 text-primary" />,
    description: 'BCIs helping people with disabilities communicate and control devices. Voice-controlled smart home assistants aiding accessibility for users with motor or visual impairments.',
    imageHint: "wheelchair user interface"
  },
  {
    title: 'Consumer Electronics',
    icon: <Gamepad2 className="w-7 h-7 text-primary" />,
    description: 'Gesture controls in gaming consoles (e.g., Nintendo Wii, Kinect) and smart TVs. Voice AI deeply integrated into smartphones (Google Assistant, Siri) and smart speakers.',
    imageHint: "smart home devices"
  },
  {
    title: 'Healthcare & Rehabilitation',
    icon: <HeartPulse className="w-7 h-7 text-primary" />,
    description: 'Neural prosthetics and brain-controlled robotic limbs restoring function. Virtual therapy environments using haptic feedback for rehabilitation and pain management.',
    imageHint: "robotic arm medical"
  },
  {
    title: 'Workplace Productivity',
    icon: <Laptop className="w-7 h-7 text-primary" />,
    description: 'Voice dictation and command systems improving workflow efficiency. Gesture and touch interfaces for collaborative virtual meetings and design software.',
    imageHint: "office collaboration tech"
  },
  {
    title: 'Immersive Entertainment',
    icon: <MonitorSmartphone className="w-7 h-7 text-primary" />, // Changed from VrHeadset
    description: 'VR/AR systems using full-body tracking, eye-tracking, and tactile gloves for realistic gaming and entertainment. Interactive museum exhibits and public installations using gesture and touch.',
    imageHint: "vr gaming experience"
  }
];

const keyPlayersData = {
  industryLeaders: [
    { name: 'NeuroSync Labs (Conceptual)', focus: 'Pioneering consumer-grade brain-computer interface devices and software platforms for wellness and assistive tech.', icon: <BrainCircuit className="w-5 h-5 text-primary"/> },
    { name: 'Microsoft', focus: 'HoloLens (Mixed Reality), Windows Ink, Surface Dial, accessibility features.', icon: <Laptop className="w-5 h-5 text-primary"/> },
    { name: 'Google', focus: 'Voice AI (Google Assistant), Android OS interactions, Material Design.', icon: <MicVocal className="w-5 h-5 text-primary"/> },
    { name: 'Meta', focus: 'Quest VR headsets, AR research, haptic feedback technologies (Reality Labs).', icon: <MonitorSmartphone className="w-5 h-5 text-primary"/> }, // Changed from VrHeadset
  ],
  researchInstitutions: [
    { name: 'Center for Advanced Interaction Research (Conceptual)', focus: 'Multidisciplinary research on next-gen interfaces combining AI, neuroscience, design ethics, and cognitive psychology.', icon: <FlaskConical className="w-5 h-5 text-primary"/> },
    { name: 'MIT Media Lab', focus: 'Fluid Interfaces Group, Tangible Media Group - research in novel interaction paradigms.', icon: <GraduationCap className="w-5 h-5 text-primary"/> },
  ],
  globalInitiatives: [
    { name: 'Human Interface Consortium (Conceptual)', focus: 'Promoting open standards for HCI, ethical practices in data collection for interaction models, and fostering collaboration in HCI development.', icon: <Globe className="w-5 h-5 text-primary"/> },
    { name: 'OpenBCI', focus: 'Develops open-source hardware and software for brain-computer interfacing, promoting accessibility and research.', icon: <Share2 className="w-5 h-5 text-primary"/> },
  ],
};

const futureTrendsData = [
    { title: 'High-Bandwidth BCIs', description: 'Fully non-invasive, high-bandwidth Brain-Computer Interfaces enabling seamless mind-to-machine communication for control and creative expression.', icon: <BrainCircuit className="w-7 h-7 text-primary"/> },
    { title: 'AI-Driven Predictive Interfaces', description: 'AI systems that learn user patterns and adapt interfaces in real-time to anticipate needs, streamline tasks, and reduce cognitive load.', icon: <Wand2 className="w-7 h-7 text-primary"/> },
    { title: 'Advanced Haptics', description: 'Sophisticated tactile feedback systems capable of simulating a wide range of textures, temperatures, and forces for deeply immersive and informative experiences.', icon: <TactileIcon className="w-7 h-7 text-primary"/> },
    { title: 'Context-Aware Ambient Computing', description: 'Seamless integration of HCI into environments where technology fades into the background, responding intelligently to user presence and implicit cues.', icon: <MapPin className="w-7 h-7 text-primary"/>},
];

const ethicalSocietalData = [
  { title: 'Neural Data Privacy & Security', description: 'Protecting highly sensitive neural data collected by BCIs from unauthorized access, misuse, and ensuring robust security protocols.', icon: <LockKeyhole className="w-5 h-5 text-destructive" /> },
  { title: 'Accessibility & Digital Divide', description: 'Ensuring that advanced HCI technologies are designed inclusively, reducing barriers for differently-abled users and avoiding a new digital divide.', icon: <Accessibility className="w-5 h-5 text-destructive" /> },
  { title: 'Psychological & Cognitive Impact', description: 'Addressing the long-term psychological effects of deeply immersive and continuously connected human-machine interfaces on attention, cognition, and social interaction.', icon: <Brain className="w-5 h-5 text-destructive" /> },
  { title: 'Autonomy and Control', description: 'Navigating ethical dilemmas related to AI-driven interfaces that may influence user decisions or reduce perceived autonomy.', icon: <Scale className="w-5 h-5 text-destructive" /> },
];

const exploreFurtherData = [
  { name: "ACM SIGCHI (Special Interest Group on CHI)", url: "https://sigchi.org/", imageHint: "acm logo conference" },
  { name: "Nielsen Norman Group (Usability Research)", url: "https://www.nngroup.com/", imageHint: "nngroup logo ux" },
  { name: "Interaction Design Foundation", url: "https://www.interaction-design.org/", imageHint: "idf logo education" },
  { name: "BCI Society", url: "https://bcisociety.org/", imageHint: "bci society logo brain" },
];


export default function HumanComputerInteractionPageClient() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12 space-y-12 md:space-y-16">
      <header className="mb-8">
        <div className="mb-6">
          <Link href="/domains" passHref legacyBehavior>
            <Button variant="outline" size="sm" className="hover:bg-accent hover:text-accent-foreground">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Domains
            </Button>
          </Link>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
          <Handshake className="w-16 h-16 md:w-20 md:h-20 text-primary mx-auto md:mx-0 flex-shrink-0" />
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
              Human-Computer Interaction (HCI)
            </h1>
            <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto md:mx-0">
              The study and design of interfaces that enable effective communication between humans and machines—moving beyond traditional inputs to more natural, immersive, and intuitive interactions.
            </p>
          </div>
        </div>
      </header>

      <Section title="Comprehensive Overview" titleIcon={<InfoIcon className="w-6 h-6 text-primary"/>} description="Understanding the essentials of Human-Computer Interaction." className="bg-muted/30">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-6 items-center">
            <div className="md:col-span-4 space-y-4">
                <p className="text-base text-muted-foreground">
                  Human-Computer Interaction (HCI) is an interdisciplinary field combining computer science, cognitive psychology, design, and engineering to enhance usability and user experience. It focuses on the evolution of interfaces from command-line and graphical user interfaces (GUIs) towards more natural modalities like gesture, voice, and even direct brain signals.
                </p>
                 <div>
                    <h4 className="font-semibold text-md text-primary mb-1">Core Focus Areas:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        <li><BrainCircuit className="inline w-4 h-4 mr-1 text-accent"/>Brain-Computer Interfaces (BCI): Direct neural communication.</li>
                        <li><Handshake className="inline w-4 h-4 mr-1 text-accent"/>Gesture Recognition: Interpreting human motions via sensors.</li>
                        <li><MicVocal className="inline w-4 h-4 mr-1 text-accent"/>Voice AI: Natural language processing for commands and conversation.</li>
                        <li><TactileIcon className="inline w-4 h-4 mr-1 text-accent"/>Tactile/Haptic Feedback: Simulating touch for immersion.</li>
                    </ul>
                </div>
                <p className="text-base text-muted-foreground">
                  HCI matters because it improves accessibility, productivity, and engagement across all computing platforms. It enables new possibilities in AR/VR, assistive technologies, and smart environments, ultimately fostering a more seamless symbiosis between humans and machines that enhances daily life, work, entertainment, and healthcare.
                </p>
            </div>
             <div className="md:col-span-3">
                <Image src="https://placehold.co/600x400.png" alt="HCI Abstract Visual" width={600} height={400} className="rounded-md object-cover w-full shadow-lg border border-border" data-ai-hint="abstract interface human tech" />
            </div>
        </div>
      </Section>
      
      <Section title="Detailed Visual Representation" titleIcon={<Milestone className="w-6 h-6 text-primary"/>} description="Tracing the evolution of HCI technologies and major breakthroughs." className="bg-muted/30">
         <Image src="https://placehold.co/800x450.png" alt="HCI Timeline Infographic Placeholder" width={800} height={450} className="rounded-md object-cover w-full shadow-lg border border-border" data-ai-hint="timeline interface evolution" />
         <p className="text-xs text-muted-foreground text-center mt-2">(Placeholder for dynamic infographic: HCI Evolution, Key Inventions, Paradigm Shifts)</p>
      </Section>

      <Section title="Historical Timeline" titleIcon={<Milestone className="w-6 h-6 text-primary"/>} description="Key milestones in the development of Human-Computer Interaction.">
        <Accordion type="single" collapsible className="w-full space-y-3">
          {historicalTimelineData.map((item) => (
            <AccordionItem key={item.id} value={item.id} className="border-none">
              <Card className="overflow-hidden border-border hover:border-primary/30 transition-colors duration-300">
                <AccordionTrigger className="p-4 hover:bg-accent/10 hover:no-underline [&[data-state=open]]:bg-accent/20 w-full rounded-t-md text-left">
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <div>
                      <h4 className="text-md font-semibold text-primary">{item.title}</h4>
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

      <Section title="Present Applications" titleIcon={<CheckCircle className="w-6 h-6 text-primary"/>} description="How HCI technologies are currently used across various domains.">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {presentApplicationsData.map((app_item) => (
            <Card key={app_item.title} className="flex flex-col h-full hover:shadow-lg transition-shadow group bg-card">
              <CardHeader className="items-center text-center">
                <div className="p-3 bg-primary/10 rounded-full mb-2 group-hover:bg-primary/20 transition-colors">{app_item.icon}</div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">{app_item.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow text-center">
                 <p className="text-sm text-muted-foreground">{app_item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Key Players & Leaders" titleIcon={<Users2 className="w-6 h-6 text-primary"/>} description="Organizations shaping the HCI landscape.">
        <div className="space-y-6">
            <div>
                <h3 className="text-xl font-semibold mb-3 text-primary flex items-center gap-2"><Building className="w-5 h-5"/>Industry Leaders & Notables</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {keyPlayersData.industryLeaders.map(leader => (
                    <Card key={leader.name} className="p-4 text-center bg-card hover:shadow-md flex flex-col justify-between">
                    <div>
                        <div className="flex justify-center mb-2">{leader.icon}</div>
                        <CardTitle className="text-md mb-1">{leader.name}</CardTitle>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{leader.focus}</p>
                    </Card>
                ))}
                </div>
            </div>
            <div>
                <h3 className="text-xl font-semibold mb-3 text-primary flex items-center gap-2"><FlaskConical className="w-5 h-5"/>Research Institutions</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {keyPlayersData.researchInstitutions.map(inst => (
                    <Card key={inst.name} className="p-4 text-center bg-card hover:shadow-md flex flex-col justify-between">
                    <div>
                        <div className="flex justify-center mb-2">{inst.icon}</div>
                        <CardTitle className="text-md mb-1">{inst.name}</CardTitle>
                         <Badge variant="secondary" className="mb-2">Top Research Group</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{inst.focus}</p>
                    </Card>
                ))}
                </div>
            </div>
            <div>
                <h3 className="text-xl font-semibold mb-3 text-primary flex items-center gap-2"><Globe className="w-5 h-5"/>Global Initiatives & Open Source</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {keyPlayersData.globalInitiatives.map(init => (
                    <Card key={init.name} className="p-4 text-center bg-card hover:shadow-md flex flex-col justify-between">
                    <div>
                        <div className="flex justify-center mb-2">{init.icon}</div>
                        <CardTitle className="text-md mb-1">{init.name}</CardTitle>
                        <Badge variant="secondary" className="mb-2">{init.name.includes('OpenBCI') ? 'Open Source Project' : 'Global Initiative'}</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{init.focus}</p>
                    </Card>
                ))}
                </div>
            </div>
        </div>
      </Section>

      <Section title="Future Trends & Speculation" titleIcon={<Rocket className="w-6 h-6 text-primary"/>} description="What’s next for Human-Computer Interaction?">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {futureTrendsData.map((trend) => (
            <Card key={trend.title} className="flex flex-col h-full hover:shadow-lg transition-shadow group bg-card">
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
         <div className="mt-6 space-y-3">
            <h4 className="font-semibold text-lg text-primary">Cross-Disciplinary Impact:</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground pl-4">
                <li>Combining HCI with AI, robotics, and bioengineering to create intelligent assistive systems and personalized experiences.</li>
                <li>New paradigms for education (adaptive learning interfaces), remote work (immersive collaboration), and social interaction (empathetic AI companions).</li>
            </ul>
         </div>
      </Section>
      
      <Section title="Societal & Ethical Evolution" titleIcon={<Scale className="w-6 h-6 text-primary"/>} description="Navigating the complex societal implications of advanced human-machine interfaces.">
        <div className="space-y-4">
          {ethicalSocietalData.map((item) => (
            <Card key={item.title} className="flex items-start gap-4 p-4 bg-card hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 text-destructive bg-destructive/10 p-2.5 rounded-full mt-1">{item.icon}</div>
              <div>
                <h4 className="font-semibold text-md text-destructive">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
        <blockquote className="mt-6 border-l-4 border-primary pl-4 italic text-muted-foreground">
          HCI development must prioritize user well-being, inclusivity, and ethical considerations to ensure technology empowers rather than diminishes human agency and experience.
        </blockquote>
      </Section>

       <Section title="Explore Related Research" titleIcon={<BookOpen className="w-6 h-6 text-primary"/>} description="Dive deeper into HCI research, landmark studies, and design principles." className="text-center bg-muted/30">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {exploreFurtherData.map(resource => (
                <Card key={resource.name} className="bg-card hover:shadow-md">
                <CardContent className="p-4 flex flex-col items-center justify-center text-center h-full">
                    <h4 className="font-semibold text-md mb-2">{resource.name}</h4>
                    <Link href={resource.url} passHref legacyBehavior>
                        <a target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                        Visit Website <ExternalLink className="inline-block ml-1 h-3 w-3"/>
                        </a>
                    </Link>
                </CardContent>
                </Card>
            ))}
            </div>
        </Section>
    </div>
  );
}
