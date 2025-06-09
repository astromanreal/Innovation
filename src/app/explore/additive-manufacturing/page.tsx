
'use client'; // Add this directive for useToast

import Image from 'next/image';
import Link from 'next/link';
import {
  Layers, Printer, Milestone, Lightbulb, FlaskConical, Rocket, Brain, Users, Building, Globe, Puzzle, Scale, BookOpen, ArrowLeft, ExternalLink, Info as InfoIcon, CheckCircle, Cpu, Users2, TrendingUp, Settings2, Atom as AtomIcon, Car, ShoppingBag, HeartPulse, Dna, Building2, Recycle, Component, AlertTriangle, ListChecks, SearchCheck
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
import { useToast } from '@/hooks/use-toast'; // Import useToast

// Metadata is handled by generateMetadata

const historicalTimelineData = [
  {
    id: 'am_ht1',
    era: 'Early Concepts (1980s)',
    title: 'Invention of Stereolithography (SLA)',
    description: 'Chuck Hull invents stereolithography, the first commercial 3D printing technology, patenting it in 1986 and co-founding 3D Systems.',
    icon: <Lightbulb className="w-5 h-5 text-primary" />,
  },
  {
    id: 'am_ht2',
    era: 'Pioneering Technologies (Late 1980s - 1990s)',
    title: 'Development of SLS and FDM',
    description: 'Selective Laser Sintering (SLS) developed at UT Austin by Carl Deckard. Scott Crump invents Fused Deposition Modeling (FDM) and co-founds Stratasys. Early applications focus on rapid prototyping.',
    icon: <FlaskConical className="w-5 h-5 text-primary" />,
  },
  {
    id: 'am_ht3',
    era: 'Growth & Diversification (2000s)',
    title: 'Material Expansion & Industry Adoption',
    description: 'Expansion of printable materials beyond plastics to include metals and ceramics. Increased adoption in aerospace, automotive, and medical fields for tooling and custom parts. Open-source RepRap project begins, democratizing FDM technology.',
    icon: <Rocket className="w-5 h-5 text-primary" />,
  },
  {
    id: 'am_ht4',
    era: 'Modern Era & Industrialization (2010s-Present)',
    title: 'Advanced Applications & Scalability',
    description: 'Rise of metal AM for end-use parts, bioprinting research intensifies. Focus on scalability, automation, integration with AI for design (DfAM), and development of industry-specific standards and certifications.',
    icon: <Component className="w-5 h-5 text-primary" />,
  },
];

const presentApplicationsData = [
  {
    title: 'Rapid Prototyping & Design',
    icon: <Printer className="w-7 h-7 text-primary" />,
    description: 'Quickly creating physical models from CAD designs for form, fit, and function testing, significantly accelerating product development cycles across all industries.',
    imageHint: "3d printed prototype hand"
  },
  {
    title: 'Aerospace & Defense',
    icon: <Rocket className="w-7 h-7 text-primary" />,
    description: 'Manufacturing lightweight components with complex internal geometries (e.g., fuel nozzles, brackets) from high-performance metal alloys, reducing weight and improving fuel efficiency.',
    imageHint: "rocket engine 3d part"
  },
  {
    title: 'Healthcare & Bioprinting',
    icon: <HeartPulse className="w-7 h-7 text-primary" />,
    description: 'Creating patient-specific surgical guides, custom implants (e.g., cranial, orthopedic), dental restorations, and pioneering research into 3D bioprinting of tissues and organoids.',
    imageHint: "3d printed medical implant"
  },
  {
    title: 'Automotive & Industrial',
    icon: <Car className="w-7 h-7 text-primary" />,
    description: 'Producing custom tools, jigs, and fixtures for manufacturing lines, as well as end-use parts for vehicles, specialized machinery, and consumer goods, enabling mass customization.',
    imageHint: "car part 3d print"
  },
  {
    title: 'Consumer Products',
    icon: <ShoppingBag className="w-7 h-7 text-primary" />,
    description: 'Enabling personalized and customized products such as footwear, eyewear, jewelry, fashion accessories, and hobbyist creations with intricate designs.',
    imageHint: "custom 3d printed shoes"
  }
];

const coreTechnologiesData = [
  { title: 'Fused Deposition Modeling (FDM)', description: 'Extrusion-based process where thermoplastic filaments are melted and deposited layer by layer. Widely used for prototyping and hobbyist applications.', icon: <Cpu className="w-6 h-6 text-accent"/>},
  { title: 'Stereolithography (SLA)', description: 'Uses a UV laser to cure photopolymer resins layer by layer, known for high accuracy and smooth surface finish. Ideal for detailed prototypes and molds.', icon: <Lightbulb className="w-6 h-6 text-accent"/>},
  { title: 'Selective Laser Sintering (SLS) / Melting (SLM)', description: 'Powder bed fusion techniques using a laser to sinter or melt powdered materials (polymers or metals) layer by layer. Produces strong, functional parts.', icon: <AtomIcon className="w-6 h-6 text-accent"/>},
  { title: 'Direct Metal Laser Sintering (DMLS) / Electron Beam Melting (EBM)', description: 'Similar to SLS/SLM but specifically for metals, EBM uses an electron beam in a vacuum. Used for high-strength metal parts in aerospace and medical.', icon: <AtomIcon className="w-6 h-6 text-accent"/>},
  { title: 'Bioprinting', description: 'Specialized techniques to deposit living cells, biomaterials (bioinks), and growth factors layer by layer to create tissue-like structures and potentially functional organs.', icon: <Dna className="w-6 h-6 text-accent"/>},
  { title: 'Materials Innovation', description: 'Development of advanced polymers, metal alloys (titanium, aluminum, stainless steel), ceramics, composites, and specialized bioinks for diverse AM applications.', icon: <FlaskConical className="w-6 h-6 text-accent"/>},
];


const keyPlayersData = {
  leadingCompanies: [
    { name: 'Stratasys', focus: 'Pioneer in FDM and PolyJet technologies, broad range of printers and materials.', icon: <Building className="w-5 h-5 text-primary"/> },
    { name: '3D Systems', focus: 'Inventor of SLA, offers diverse AM solutions including SLS, metal printing.', icon: <Building className="w-5 h-5 text-primary"/> },
    { name: 'EOS', focus: 'Leading provider of SLS and DMLS systems for industrial applications.', icon: <Building className="w-5 h-5 text-primary"/> },
    { name: 'Carbon', focus: 'Known for Digital Light Synthesis (DLS) technology for fast, high-resolution polymer printing.', icon: <Building className="w-5 h-5 text-primary"/> },
    { name: 'Desktop Metal', focus: 'Focus on metal AM solutions, including binder jetting and bound metal deposition.', icon: <Building className="w-5 h-5 text-primary"/> },
  ],
  researchInstitutions: [
    { name: 'MIT Additive Manufacturing Lab (Conceptual)', focus: 'Research in novel AM processes, materials, and computational design tools.', icon: <FlaskConical className="w-5 h-5 text-primary"/> },
    { name: 'Fraunhofer Institute for Laser Technology (ILT)', focus: 'Develops laser-based AM processes for metals and polymers.', icon: <FlaskConical className="w-5 h-5 text-primary"/> },
  ],
  startupsAndInnovators: [
     { name: 'Organovo (Legacy example)', focus: 'Early pioneer in bioprinting tissues for research and therapeutic applications.', icon: <Building className="w-5 h-5 text-primary"/> },
     { name: 'Relativity Space', focus: 'Utilizing large-scale metal 3D printing for rocket manufacturing.', icon: <Rocket className="w-5 h-5 text-primary"/> },
  ]
};

const challengesLimitationsData = [
  { title: 'Material Constraints & Costs', description: 'Limited range and properties of printable materials compared to traditional manufacturing. High cost of specialized powders and resins.', icon: <AlertTriangle className="w-5 h-5 text-destructive" /> },
  { title: 'Production Speed & Scalability', description: 'Generally slower than mass production methods like injection molding for large volumes. Scaling up production while maintaining quality is challenging.', icon: <Cpu className="w-5 h-5 text-destructive" /> },
  { title: 'Quality, Repeatability & Post-Processing', description: 'Ensuring consistent part quality, surface finish, and dimensional accuracy. Often requires significant post-processing steps.', icon: <Settings2 className="w-5 h-5 text-destructive" /> },
  { title: 'Design for AM (DfAM) Expertise', description: 'Requires specialized knowledge to design parts that leverage the full potential of AM and overcome its limitations.', icon: <Puzzle className="w-5 h-5 text-destructive" /> },
  { title: 'Regulatory & Certification Hurdles', description: 'Developing industry standards and certification processes, especially for critical parts in aerospace, medical, and automotive sectors.', icon: <ListChecks className="w-5 h-5 text-destructive" /> },
];

const futureTrendsData = [
    { title: 'Multi-Material & Functional Printing', description: 'Printing objects with multiple materials and embedded functionalities (e.g., electronics, sensors) in a single process.', icon: <Component className="w-7 h-7 text-primary"/> },
    { title: 'Large-Scale Additive Manufacturing', description: '3D printing entire building structures, large aerospace components, and maritime parts, enabled by robotic AM systems.', icon: <Building2 className="w-7 h-7 text-primary"/> },
    { title: 'Advanced Bioprinting & Regenerative Medicine', description: 'Moving towards printing functional tissues and eventually complex organs for transplantation and drug testing.', icon: <HeartPulse className="w-7 h-7 text-primary"/> },
    { title: 'AI & Automation Integration', description: 'AI-driven design optimization (generative design), in-process monitoring and quality control, and fully automated AM workflows.', icon: <Brain className="w-7 h-7 text-primary"/> },
    { title: 'Circular Economy & Sustainability', description: 'Increased use of recycled and bio-based materials, localized on-demand production reducing transportation, and optimized designs minimizing material waste.', icon: <Recycle className="w-7 h-7 text-primary"/> },
];

const exploreFurtherData = [
  { category: "Courses & Certifications", items: [
      { name: "Additive Manufacturing (MIT OpenCourseWare)", url: "https://ocw.mit.edu/courses/2-810-manufacturing-processes-and-systems-spring-2020/pages/additive-manufacturing/", imageHint: "mit logo online course" },
      { name: "3D Printing Specialization (Coursera - University of Illinois)", url: "https://www.coursera.org/specializations/3d-printing", imageHint: "coursera logo certificate" },
  ]},
  { category: "Books & Publications", items: [
      { name: "Additive Manufacturing Technologies by Ian Gibson et al.", url: "https://www.amazon.com/Additive-Manufacturing-Technologies-Ian-Gibson/dp/1493921123", imageHint: "book cover 3d printing" },
      { name: "Wohlers Report (Industry Analysis)", url: "https://wohlersassociates.com/product/wohlers-report-2024/", imageHint: "report cover industry data" },
  ]},
  { category: "Conferences & Events", items: [
      { name: "RAPID + TCT Conference", url: "https://www.rapid3devent.com/", imageHint: "conference logo manufacturing" },
      { name: "Formnext", url: "https://formnext.mesago.com/", imageHint: "formnext logo trade show" },
  ]},
  { category: "Open Source & Software", items: [
      { name: "Cura (Slicer Software)", url: "https://ultimaker.com/software/ultimaker-cura/", imageHint: "cura logo software" },
      { name: "PrusaSlicer", url: "https://www.prusa3d.com/prusaslicer/", imageHint: "prusa logo 3d printer" },
      { name: "Autodesk Fusion 360 (CAD/CAM)", url: "https://www.autodesk.com/products/fusion-360/overview", imageHint: "autodesk logo software design" }
  ]}
];

export default function AdditiveManufacturingPage() {
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
          <Layers className="w-16 h-16 md:w-20 md:h-20 text-primary mx-auto md:mx-0 flex-shrink-0" />
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
              Additive Manufacturing (3D Printing)
            </h1>
            <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto md:mx-0">
              Exploring the revolutionary process of creating objects layer by layer directly from digital models, transforming design and production.
            </p>
          </div>
        </div>
      </header>

      <Section title="Comprehensive Overview" titleIcon={<InfoIcon className="w-6 h-6 text-primary"/>} description="Understanding the fundamentals and impact of Additive Manufacturing." className="bg-muted/30">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-6 items-center">
            <div className="md:col-span-4 space-y-4">
                <p className="text-base text-muted-foreground">
                  Additive Manufacturing (AM), widely known as 3D printing, is a transformative approach to industrial production that enables the creation of physical objects from three-dimensional digital models by successively adding material layer by layer. This contrasts with traditional subtractive manufacturing processes that remove material from a larger block.
                </p>
                 <div>
                    <h4 className="font-semibold text-md text-primary mb-1">Key Advantages & Focus Areas:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        <li>Enables rapid prototyping, accelerating design iteration cycles.</li>
                        <li>Allows for the creation of complex geometries and internal structures not possible with conventional methods.</li>
                        <li>Supports on-demand manufacturing, reducing lead times and inventory costs.</li>
                        <li>Potential for significant material waste reduction.</li>
                        <li>Key areas include materials innovation (metals, polymers, ceramics, bioinks), bioprinting, aerospace, automotive, and customized consumer/medical products.</li>
                    </ul>
                </div>
            </div>
             <div className="md:col-span-3">
                <Image src="https://placehold.co/600x400.png" alt="Additive Manufacturing Process Visual" width={600} height={400} className="rounded-md object-cover w-full shadow-lg border border-border" data-ai-hint="3d printer abstract layers" />
            </div>
        </div>
      </Section>
      
      <Section title="Historical Evolution & Foundations" titleIcon={<Milestone className="w-6 h-6 text-primary"/>} description="Tracing the development of 3D printing technology from early concepts to industrial applications.">
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

      <Section title="Current Applications" titleIcon={<CheckCircle className="w-6 h-6 text-primary"/>} description="Showcasing how AM is transforming various fields today.">
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

      <Section title="Core Technologies & Techniques" titleIcon={<Settings2 className="w-6 h-6 text-primary"/>} description="Explaining the main 3D printing technologies and materials in use.">
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

      <Section title="Key Innovators & Industry Leaders" titleIcon={<Users2 className="w-6 h-6 text-primary"/>} description="Companies and research groups pioneering additive manufacturing.">
        <div className="space-y-6">
            <div>
                <h3 className="text-xl font-semibold mb-3 text-primary flex items-center gap-2"><Building className="w-5 h-5"/>Leading Companies</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
                {keyPlayersData.leadingCompanies.map(player => (
                    <Card key={player.name} className="p-4 bg-card hover:shadow-md flex flex-col justify-between">
                      <div className="flex items-center gap-3 mb-2">
                        {player.icon}
                        <CardTitle className="text-md">{player.name}</CardTitle>
                      </div>
                      <p className="text-xs text-muted-foreground">{player.focus}</p>
                    </Card>
                ))}
                </div>
            </div>
            <div>
                <h3 className="text-xl font-semibold mb-3 text-primary flex items-center gap-2"><FlaskConical className="w-5 h-5"/>Research Institutions</h3>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {keyPlayersData.researchInstitutions.map(inst => (
                    <Card key={inst.name} className="p-4 bg-card hover:shadow-md flex flex-col justify-between">
                      <div className="flex items-center gap-3 mb-2">
                        {inst.icon}
                        <CardTitle className="text-md">{inst.name}</CardTitle>
                      </div>
                      <p className="text-xs text-muted-foreground">{inst.focus}</p>
                    </Card>
                ))}
                </div>
            </div>
            <div>
                <h3 className="text-xl font-semibold mb-3 text-primary flex items-center gap-2"><Rocket className="w-5 h-5"/>Notable Startups & Innovators</h3>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {keyPlayersData.startupsAndInnovators.map(startup => (
                    <Card key={startup.name} className="p-4 bg-card hover:shadow-md flex flex-col justify-between">
                      <div className="flex items-center gap-3 mb-2">
                        {startup.icon}
                        <CardTitle className="text-md">{startup.name}</CardTitle>
                      </div>
                      <p className="text-xs text-muted-foreground">{startup.focus}</p>
                    </Card>
                ))}
                </div>
            </div>
        </div>
      </Section>

      <Section title="Challenges & Limitations" titleIcon={<AlertTriangle className="w-6 h-6 text-primary"/>} description="Current barriers and ongoing research challenges in AM.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {challengesLimitationsData.map((item) => (
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

      <Section title="Future Trends & Opportunities" titleIcon={<TrendingUp className="w-6 h-6 text-primary"/>} description="Exploring emerging advancements and new frontiers in additive manufacturing.">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
      </Section>
      
      <Section title="Explore Further: Resources & Learning" titleIcon={<BookOpen className="w-6 h-6 text-primary"/>} description="Curated resources to deepen your understanding of Additive Manufacturing." className="bg-muted/30">
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

export async function generateMetadata() {
  return {
    title: 'Additive Manufacturing (3D Printing) | Innovation Hub Explorer',
    description: 'Explore Additive Manufacturing (3D Printing): concepts, evolution, applications in aerospace and healthcare, core technologies, challenges, and future trends.',
    keywords: ['Additive Manufacturing', '3D Printing', 'Rapid Prototyping', 'Stereolithography', 'SLS', 'FDM', 'Bioprinting', 'Materials Science'],
    openGraph: {
      title: 'Additive Manufacturing (3D Printing) | Innovation Hub Explorer',
      description: 'Creating objects layer by layer directly from digital models.',
      url: '/explore/additive-manufacturing',
      images: [
        {
          url: '/og-additive-manufacturing.png',
          width: 1200,
          height: 630,
          alt: 'Additive Manufacturing Process Visualization',
        },
      ],
    },
    twitter: {
      title: 'Additive Manufacturing (3D Printing)',
      description: 'The future of making things.',
    },
    alternates: {
      canonical: '/explore/additive-manufacturing',
    },
  };
}
