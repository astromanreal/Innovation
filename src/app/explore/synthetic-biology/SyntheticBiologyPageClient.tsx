
'use client'; 

import Image from 'next/image';
import Link from 'next/link';
import {
  Dna, Milestone, Lightbulb, FlaskConical, Rocket, Brain, Users, Building, Globe, Puzzle, Scale, BookOpen, ArrowLeft, ExternalLink, Info as InfoIcon, CheckCircle, Settings2, Cpu, Network, Printer, Laptop, Archive, Users2, GraduationCap, ShieldCheck, ShieldAlert, FileText, MessageSquareWarning, UsersRound, TrendingUp, Zap, Eye, Wand2, Factory, Satellite, HeartPulse, Leaf, Layers, Recycle, DatabaseZap, Planet as PlanetIcon
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
import { useToast } from '@/hooks/use-toast'; 

const historicalTimelineData = [
  {
    id: 'sb_ht1',
    era: 'Concept Era',
    title: 'Foundational Discoveries & Early Ideas',
    description: 'The first synthetic gene was created in the 1970s. Early ideas around engineering biology and understanding DNA structure laid the groundwork. Concepts of genome editing began to emerge.',
    icon: <Lightbulb className="w-5 h-5 text-primary" />,
  },
  {
    id: 'sb_ht2',
    era: 'Engineering Biology Principles',
    title: 'Standardization & Programmable Cells',
    description: 'The idea of cells as programmable machines took root. Development of BioBricks and other standardization efforts. Founding of the iGEM competition fostered a community around synthetic biology.',
    icon: <FlaskConical className="w-5 h-5 text-primary" />,
  },
  {
    id: 'sb_ht3',
    era: 'From Biology to Design Discipline',
    title: 'CRISPR, CAD Tools & Automation',
    description: 'The emergence and refinement of CRISPR-Cas9 technology revolutionized gene editing. Computer-Aided Design (CAD) tools for biology and automation in labs accelerated the Design-Build-Test-Learn (DBTL) cycle.',
    icon: <Rocket className="w-5 h-5 text-primary" />,
  },
  {
    id: 'sb_ht4',
    era: 'Modern Era & Scalability',
    title: 'AI Integration, Biofoundries & Advanced Applications',
    description: 'Integration of AI/ML for predictive design and pathway optimization. Rise of biofoundries for high-throughput construction and testing. Focus on scalable applications in medicine, materials, and agriculture.',
    icon: <Brain className="w-5 h-5 text-primary" />,
  },
];

const presentApplicationsData = [
  {
    title: 'Healthcare & Medicine',
    icon: <HeartPulse className="w-7 h-7 text-primary" />,
    description: 'Engineered probiotics for gut health, synthetic vaccines with improved efficacy, programmable gene therapies for genetic disorders, and microbial biosensors for rapid diagnostics.',
    imageHint: "medical lab gene therapy"
  },
  {
    title: 'Agriculture & Food',
    icon: <Leaf className="w-7 h-7 text-primary" />,
    description: 'Nitrogen-fixing microbes to reduce fertilizer use, lab-grown meat as a sustainable protein source, biofertilizers to enhance soil health, and synthetic flavorings and fragrances.',
    imageHint: "lab grown meat agriculture"
  },
  {
    title: 'Sustainable Materials',
    icon: <Layers className="w-7 h-7 text-primary" />,
    description: 'Bio-manufactured spider silk proteins for high-performance textiles, mycelium-based materials for packaging and construction, and bioplastics derived from renewable resources.',
    imageHint: "sustainable biomaterials texture"
  },
  {
    title: 'Environment & Energy',
    icon: <Recycle className="w-7 h-7 text-primary" />,
    description: 'Engineered microbes for carbon capture and sequestration, biosensors for detecting environmental pollutants, and biofuel production from algae or waste streams.',
    imageHint: "algae biofuel bioreactor"
  },
   {
    title: 'Data Storage & Bio-computing',
    icon: <DatabaseZap className="w-7 h-7 text-primary" />,
    description: 'Encoding vast amounts of digital data into DNA molecules for long-term archival, and developing biological computing systems using genetic circuits.',
    imageHint: "dna data storage abstract"
  }
];

const coreTechnologiesData = [
  { title: 'DNA Synthesis & Editing', description: 'Technologies like CRISPR/Cas systems, Gibson assembly, and Golden Gate cloning for precise DNA manipulation. High-throughput DNA writing enables construction of large genetic constructs.', icon: <Dna className="w-6 h-6 text-accent"/>},
  { title: 'Genetic Circuit Design', description: 'Engineering biological systems that perform logical operations (e.g., toggle switches, logic gates, feedback loops) using genes, proteins, and RNA components.', icon: <Network className="w-6 h-6 text-accent"/>},
  { title: 'Biofabrication & Bioprinting', description: 'Techniques like 3D bioprinting to create tissues and organs, development of hybrid living materials, and scaffold engineering for regenerative medicine.', icon: <Printer className="w-6 h-6 text-accent"/>}, 
  { title: 'Computational Tools & AI', description: 'Software for modeling genetic networks (e.g., SBOL, CellDesigner), AI/ML for pathway prediction, gene expression tuning, and automating the design process.', icon: <Laptop className="w-6 h-6 text-accent"/>},
  { title: 'Standardization & Modularity', description: 'Development of standardized biological parts (e.g., BioBricks), part registries (e.g., OpenWetWare), and modular assembly methods to simplify and accelerate design.', icon: <Archive className="w-6 h-6 text-accent"/>}, 
];


const keyPlayersData = {
  academicLeaders: [
    { name: 'MIT Synthetic Biology Center', focus: 'Leading research in foundational tools, genetic circuit design, and applications in health and environment.', icon: <GraduationCap className="w-5 h-5 text-primary"/> },
    { name: 'Wyss Institute (Harvard)', focus: 'Biologically inspired engineering, developing new materials, diagnostic devices, and therapeutic technologies.', icon: <GraduationCap className="w-5 h-5 text-primary"/> },
    { name: 'J. Craig Venter Institute', focus: 'Pioneering work in synthetic genomics, including the creation of the first synthetic bacterial cell.', icon: <GraduationCap className="w-5 h-5 text-primary"/> },
  ],
  startupsAndCompanies: [
    { name: 'Ginkgo Bioworks', focus: 'Organism engineering and biofoundry services for various industries, including agriculture, pharmaceuticals, and chemicals.', icon: <Building className="w-5 h-5 text-primary"/> },
    { name: 'Twist Bioscience', focus: 'High-throughput DNA synthesis and gene writing technologies.', icon: <Building className="w-5 h-5 text-primary"/> },
    { name: 'Synthego', focus: 'CRISPR-based genome engineering solutions and tools for research and therapeutics.', icon: <Building className="w-5 h-5 text-primary"/> },
  ],
  openScienceMovements: [
    { name: 'iGEM Foundation', focus: 'International Genetically Engineered Machine competition, fostering education, collaboration, and open science in synthetic biology.', icon: <Globe className="w-5 h-5 text-primary"/> },
    { name: 'BioHackspaces & Community Labs', focus: 'Grassroots initiatives providing access to biotech tools and promoting citizen science in synthetic biology.', icon: <Users className="w-5 h-5 text-primary"/> },
  ],
};

const challengesEthicsData = [
  { title: 'Biosafety & Containment', description: 'Ensuring that engineered organisms do not escape into the environment and cause unintended harm. Developing robust biocontainment strategies.', icon: <ShieldCheck className="w-5 h-5 text-destructive" /> },
  { title: 'Biosecurity & Dual-Use', description: 'Addressing the risk that synthetic biology tools could be misused for malicious purposes, such as creating bioweapons or harmful agents.', icon: <ShieldAlert className="w-5 h-5 text-destructive" /> },
  { title: 'Regulatory Gaps & Oversight', description: 'Developing adaptive regulatory frameworks that can keep pace with rapid innovation while addressing safety, ethical, and societal concerns (e.g., GMO labeling, synthetic organism release).', icon: <FileText className="w-5 h-5 text-destructive" /> },
  { title: 'Ethical Debates & Societal Impact', description: 'Discussions around creating synthetic life forms, patenting living organisms, de-extinction projects, and the definition of life itself.', icon: <MessageSquareWarning className="w-5 h-5 text-destructive" /> },
  { title: 'Public Perception & Engagement', description: 'Building public trust through transparency, education, and inclusive dialogue about the benefits and risks of synthetic biology.', icon: <UsersRound className="w-5 h-5 text-destructive" /> },
];

const futureDirectionsData = [
    { title: 'Programmable Cells as Therapies', description: 'Engineering custom immune cells (e.g., CAR-T cells) and designing genetic circuits for personalized medicine, targeting diseases like cancer and autoimmune disorders.', icon: <Zap className="w-7 h-7 text-primary"/> },
    { title: 'Living Sensors & Smart Materials', description: 'Developing bio-integrated materials and living sensors that can detect environmental changes, self-repair, or produce valuable compounds in real time.', icon: <Eye className="w-7 h-7 text-primary"/> },
    { title: 'Artificial Life & Minimal Cells', description: 'Constructing fully synthetic organisms from the ground up or creating minimal cells with only essential genes to understand fundamental life processes and create custom bioproduction chassis.', icon: <Wand2 className="w-7 h-7 text-primary"/> },
    { title: 'Biofoundries & Automation', description: 'Scaling up biological design and manufacturing through automated robotic labs (biofoundries) and AI-driven experimental design, accelerating the DBTL cycle.', icon: <Factory className="w-7 h-7 text-primary"/> },
    { title: 'Space Bioengineering', description: 'Engineering microbes and plants to support long-duration space missions, such as producing oxygen, recycling waste, growing food, or creating construction materials on other planets.', icon: <PlanetIcon className="w-7 h-7 text-primary"/> }, 
];

const exploreFurtherData = [
  { category: "Courses & Learning", items: [
      { name: "Synthetic Biology (MIT OpenCourseWare)", url: "https://ocw.mit.edu/courses/20-020-introduction-to-biological-engineering-design-spring-2009/", imageHint: "mit logo online course" },
      { name: "iGEM Learning Tracks & Resources", url: "https://igem.org/Education", imageHint: "igem logo community" },
      { name: "Coursera Synthetic Biology Specialization", url: "https://www.coursera.org/specializations/synthetic-biology", imageHint: "coursera logo certificate" }
  ]},
  { category: "Books", items: [
      { name: "Regenesis by George Church", url: "https://www.amazon.com/Regenesis-Synthetic-Biology-Will-Reinvent/dp/046507570X", imageHint: "book cover science biology" },
      { name: "Synthetic Biology: A Very Short Introduction", url: "https://global.oup.com/academic/product/synthetic-biology-a-very-short-introduction-9780198795573", imageHint: "book cover intro biology" },
  ]},
  { category: "Communities & Conferences", items: [
      { name: "SynBioBeta Conference", url: "https://synbiobeta.com/", imageHint: "conference logo biotech" },
      { name: "iGEM Grand Jamboree", url: "https://jamboree.igem.org/", imageHint: "igem competition event" },
      { name: "Biodesign Challenge", url: "https://www.biodesignchallenge.org/", imageHint: "design challenge logo" }
  ]},
  { category: "Open-Source Tools & Labs", items: [
      { name: "Benchling Platform", url: "https://www.benchling.com/", imageHint: "benchling logo software" },
      { name: "OpenWetWare", url: "https://openwetware.org/", imageHint: "wiki logo open science" },
      { name: "SBOL Standards", url: "https://sbolstandard.org/", imageHint: "sbol logo data" }
  ]}
];


export default function SyntheticBiologyPageClient() {
  const { toast } = useToast();

  const handleResourceClick = (url: string, name: string) => {
    if (url === "#") {
      toast({
        title: "Resource Link Pending",
        description: `Details for "${name}" will be available soon.`,
      });
      return false; 
    }
    return true; 
  };

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
          <Dna className="w-16 h-16 md:w-20 md:h-20 text-primary mx-auto md:mx-0 flex-shrink-0" />
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
              Synthetic Biology
            </h1>
            <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto md:mx-0">
              Merging biology, engineering, and computational science to design and construct new biological parts, devices, and systems.
            </p>
          </div>
        </div>
      </header>

      <Section title="Comprehensive Overview" titleIcon={<InfoIcon className="w-6 h-6 text-primary"/>} description="Introducing synthetic biology as a revolutionary field." className="bg-muted/30">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-6 items-center">
            <div className="md:col-span-4 space-y-4">
                <p className="text-base text-muted-foreground">
                  Synthetic Biology is an interdisciplinary area of research that applies engineering principles to biology. It aims to design and construct new biological parts, devices, and systems, or to re-design existing, natural biological systems for useful purposes. It often involves a bottom-up approach, constructing components from scratch, rather than just modifying existing ones.
                </p>
                 <div>
                    <h4 className="font-semibold text-md text-primary mb-1">Core Focus Areas:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        <li>Genetic circuit design and implementation.</li>
                        <li>DNA synthesis, assembly, and genome engineering.</li>
                        <li>Creation of living materials and biomolecular computing.</li>
                        <li>Development of environmental and therapeutic biosensors.</li>
                    </ul>
                </div>
                <p className="text-base text-muted-foreground">
                  This field holds immense potential to solve grand challenges in medicine (programmable therapies), environment (sustainable materials, carbon capture), and energy (biofuels). It's paving the way for programmable life forms and sustainable alternatives to synthetic chemicals.
                </p>
            </div>
             <div className="md:col-span-3">
                <Image src="https://placehold.co/600x400.png" alt="Synthetic Biology Abstract Visual" width={600} height={400} className="rounded-md object-cover w-full shadow-lg border border-border" data-ai-hint="dna engineering abstract" />
            </div>
        </div>
      </Section>
      
      <Section title="Foundations and Evolution" titleIcon={<Milestone className="w-6 h-6 text-primary"/>} description="Tracing the rise of synthetic biology within modern biotechnology and genomics.">
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

      <Section title="Current Applications" titleIcon={<CheckCircle className="w-6 h-6 text-primary"/>} description="Highlighting how synthetic biology is already impacting diverse sectors.">
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

      <Section title="Core Technologies & Techniques" titleIcon={<Settings2 className="w-6 h-6 text-primary"/>} description="Detailing the tools and frameworks powering synthetic biology.">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreTechnologiesData.map((tech) => (
            <Card key={tech.title} className="flex flex-col h-full hover:shadow-lg transition-shadow group bg-card">
              <CardHeader className="items-center text-center">
                <div className="p-3 bg-accent/10 rounded-full mb-2 group-hover:bg-accent/20 transition-colors">{tech.icon}</div>
                <CardTitle className="text-md group-hover:text-accent transition-colors">{tech.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow text-center">
                 <p className="text-xs text-muted-foreground">{tech.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>


      <Section title="Key Innovators & Ecosystem Players" titleIcon={<Users2 className="w-6 h-6 text-primary"/>} description="Recognizing organizations and pioneers shaping the field.">
        <div className="space-y-6">
            <div>
                <h3 className="text-xl font-semibold mb-3 text-primary flex items-center gap-2"><GraduationCap className="w-5 h-5"/>Academic Leaders</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {keyPlayersData.academicLeaders.map(leader => (
                    <Card key={leader.name} className="p-4 bg-card hover:shadow-md flex flex-col justify-between">
                      <div className="flex items-center gap-3 mb-2">
                        {leader.icon}
                        <CardTitle className="text-md">{leader.name}</CardTitle>
                      </div>
                      <p className="text-xs text-muted-foreground">{leader.focus}</p>
                    </Card>
                ))}
                </div>
            </div>
            <div>
                <h3 className="text-xl font-semibold mb-3 text-primary flex items-center gap-2"><Building className="w-5 h-5"/>Startups & Companies</h3>
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {keyPlayersData.startupsAndCompanies.map(company => (
                    <Card key={company.name} className="p-4 bg-card hover:shadow-md flex flex-col justify-between">
                      <div className="flex items-center gap-3 mb-2">
                        {company.icon}
                        <CardTitle className="text-md">{company.name}</CardTitle>
                      </div>
                      <p className="text-xs text-muted-foreground">{company.focus}</p>
                    </Card>
                ))}
                </div>
            </div>
             <div>
                <h3 className="text-xl font-semibold mb-3 text-primary flex items-center gap-2"><Globe className="w-5 h-5"/>Open Science Movements & Communities</h3>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {keyPlayersData.openScienceMovements.map(movement => (
                    <Card key={movement.name} className="p-4 bg-card hover:shadow-md flex flex-col justify-between">
                      <div className="flex items-center gap-3 mb-2">
                        {movement.icon}
                        <CardTitle className="text-md">{movement.name}</CardTitle>
                      </div>
                      <p className="text-xs text-muted-foreground">{movement.focus}</p>
                    </Card>
                ))}
                </div>
            </div>
        </div>
      </Section>

      <Section title="Challenges & Bioethics" titleIcon={<Scale className="w-6 h-6 text-primary"/>} description="Discussing risks, regulatory concerns, and ethical implications.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {challengesEthicsData.map((item) => (
            <Card key={item.title} className="bg-card hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-center gap-3 space-y-0 pb-2">
                     <div className="p-2 bg-destructive/10 rounded-full">{item.icon}</div>
                    <CardTitle className="text-md font-semibold text-destructive">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Future Directions & Opportunities" titleIcon={<TrendingUp className="w-6 h-6 text-primary"/>} description="Exploring where synthetic biology could lead us in the coming decades.">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {futureDirectionsData.map((trend) => (
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
        <blockquote className="mt-8 border-l-4 border-primary pl-4 italic text-muted-foreground">
            Synthetic biology reimagines life as a designable technology, requiring careful stewardship and visionary thinking to unlock its immense potential for a sustainable and healthier future.
        </blockquote>
      </Section>
      
      <Section title="Explore Further: Resources & Learning Paths" titleIcon={<BookOpen className="w-6 h-6 text-primary"/>} description="Curated resources to deepen your understanding of Synthetic Biology." className="bg-muted/30">
        <div className="space-y-8">
            {exploreFurtherData.map(categoryItem => (
                <div key={categoryItem.category}>
                    <h3 className="text-xl font-semibold mb-4 text-primary">{categoryItem.category}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {categoryItem.items.map(resource => (
                             <Card key={resource.name} className="bg-card hover:shadow-md">
                                <CardContent className="p-4 flex flex-col items-center justify-center text-center h-full">
                                    <h4 className="font-semibold text-md mb-2">{resource.name}</h4>
                                     <Button
                                      variant="link"
                                      size="sm"
                                      className="text-primary hover:underline p-0 h-auto"
                                      onClick={(e) => {
                                        if (!handleResourceClick(resource.url, resource.name)) {
                                          e.preventDefault();
                                        }
                                      }}
                                      asChild={resource.url !== "#"}
                                    >
                                      {resource.url !== "#" ? (
                                        <Link href={resource.url} target="_blank" rel="noopener noreferrer">
                                          Visit Resource <ExternalLink className="inline-block ml-1 h-3 w-3"/>
                                        </Link>
                                      ) : (
                                        <span>
                                          Visit Resource (Soon) <ExternalLink className="inline-block ml-1 h-3 w-3 opacity-50"/>
                                        </span>
                                      )}
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            ))}
        </div>
      </Section>
    </div>
  );
}
