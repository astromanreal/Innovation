
'use client'; // Add this directive for useToast

import Image from 'next/image';
import Link from 'next/link';
import {
  HeartPulse, Watch, Milestone, Lightbulb, FlaskConical, Rocket, Brain, Users, Building, Globe, Puzzle, Scale, BookOpen, ArrowLeft, ExternalLink, Info as InfoIcon, CheckCircle, Cpu, Users2, TrendingUp, Settings2, BarChart3, FileText, Briefcase, Code2, Cloud, Filter, UsersRound, Zap, MessageSquareWarning, CalendarCheck2, ShoppingBag, Landmark, GraduationCap, ShieldCheck, Bluetooth, Wifi, BatteryCharging, Apple, Activity, Smartphone, Network, Search 
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
    id: 'wht_ht1',
    era: 'Early Devices',
    title: 'Emergence of Basic Health Trackers',
    description: 'Early concepts of wearable health monitoring. Development of simple step counters, basic heart rate monitors, and the first consumer pulse oximeters. Focus on fitness and general wellness.',
    icon: <Lightbulb className="w-5 h-5 text-primary" />,
  },
  {
    id: 'wht_ht2',
    era: 'Rise of Smart Wearables',
    title: 'Smartwatches, Fitness Bands & CGM',
    description: 'Introduction of smartwatches (e.g., early Pebble, Apple Watch) and sophisticated fitness bands (e.g., Fitbit). Continuous Glucose Monitors (CGM) begin to gain traction for diabetes management. Increased sensor integration and mobile app connectivity.',
    icon: <Smartphone className="w-5 h-5 text-primary" />,
  },
  {
    id: 'wht_ht3',
    era: 'From Wellness to Clinical Applications',
    title: 'Digital Therapeutics & Remote Patient Monitoring',
    description: 'FDA approvals for digital therapeutics (DTx) for various conditions. Expansion of remote patient monitoring (RPM) systems, allowing healthcare providers to track patient data outside of clinical settings. Wearables start generating clinical-grade data.',
    icon: <Rocket className="w-5 h-5 text-primary" />,
  },
  {
    id: 'wht_ht4',
    era: 'Telemedicine Evolution & AI Integration',
    title: 'Advanced Telehealth & AI-Powered Insights',
    description: 'Telemedicine evolves from simple phone calls to integrated video platforms with data sharing. AI and machine learning are increasingly used to analyze wearable data for personalized insights, early disease detection, and risk prediction.',
    icon: <Brain className="w-5 h-5 text-primary" />,
  },
];

const currentApplicationsData = [
  {
    title: 'Consumer Wellness',
    icon: <Activity className="w-7 h-7 text-primary" />,
    description: 'Fitness tracking (steps, calories, activity levels), sleep monitoring and analysis, stress management apps using heart rate variability (HRV), and guided mindfulness exercises.',
    imageHint: "smartwatch fitness app"
  },
  {
    title: 'Chronic Disease Management',
    icon: <HeartPulse className="w-7 h-7 text-primary" />,
    description: 'Continuous glucose monitors (CGMs) for diabetes, wearable ECG for atrial fibrillation detection, smart inhalers for asthma, and remote monitoring for hypertension and heart failure.',
    imageHint: "glucose monitor medical"
  },
  {
    title: 'Telemedicine & Remote Care',
    icon: <Users className="w-7 h-7 text-primary" />,
    description: 'Virtual doctor consultations via video call, remote patient monitoring platforms integrating wearable data, AI-assisted triage and diagnostics, and virtual physical therapy sessions.',
    imageHint: "doctor video call patient"
  },
  {
    title: 'Digital Therapeutics (DTx)',
    icon: <Brain className="w-7 h-7 text-primary" />,
    description: 'FDA-cleared software applications delivering evidence-based therapeutic interventions for conditions like depression, anxiety, insomnia, ADHD, and substance use disorder.',
    imageHint: "mobile app therapy brain"
  },
  {
    title: 'Clinical Trials & Research',
    icon: <FlaskConical className="w-7 h-7 text-primary" />,
    description: 'Collecting real-time, continuous data from participants in clinical trials, monitoring patient adherence to treatment protocols, and identifying novel digital biomarkers.',
    imageHint: "research lab data analysis"
  }
];

const coreTechnologiesData = [
    { title: 'Biosensors & Biometric Sensors', description: 'Optical (PPG for heart rate), electrochemical (glucose, lactate), accelerometers & gyroscopes (motion), temperature, and GSR sensors.', icon: <Settings2 className="w-6 h-6 text-accent"/>},
    { title: 'Connectivity & Data Transmission', description: 'Bluetooth Low Energy (BLE) for power efficiency, Wi-Fi, NFC for payments/pairing, and emerging 5G/6G for massive device support and low latency.', icon: <Bluetooth className="w-6 h-6 text-accent"/>},
    { title: 'AI & Machine Learning', description: 'Algorithms for predictive analytics (e.g., fall detection, disease risk), anomaly detection in health patterns, personalized recommendations, and image analysis in telehealth.', icon: <Brain className="w-6 h-6 text-accent"/>},
    { title: 'Cloud Platforms & Data Integration', description: 'Secure cloud storage for health data, interoperability standards (FHIR, HL7), telehealth platforms, and electronic health record (EHR) integration.', icon: <Cloud className="w-6 h-6 text-accent"/>},
    { title: 'Power & Form Factor Innovations', description: 'Flexible electronics for comfortable wear, energy harvesting (solar, kinetic), miniaturized components, and advanced battery technologies for longer device life.', icon: <BatteryCharging className="w-6 h-6 text-accent"/>},
];

const keyPlayersData = {
  techGiants: [
    { name: 'Apple', focus: 'Apple Watch (ECG, blood oxygen, fall detection), HealthKit platform.', icon: <Apple className="w-5 h-5 text-primary"/> },
    { name: 'Google (Fitbit)', focus: 'Fitbit trackers and smartwatches, Google Fit platform, AI health research.', icon: <Users className="w-5 h-5 text-primary"/> },
    { name: 'Garmin', focus: 'Specialized fitness and outdoor wearables, advanced GPS and health metrics.', icon: <Watch className="w-5 h-5 text-primary"/> },
  ],
  medicalDeviceCompanies: [
    { name: 'Medtronic', focus: 'Implantable medical devices, remote monitoring solutions, insulin pumps.', icon: <Building className="w-5 h-5 text-primary"/> },
    { name: 'Dexcom', focus: 'Leader in continuous glucose monitoring (CGM) systems for diabetes.', icon: <Building className="w-5 h-5 text-primary"/> },
    { name: 'Philips Healthcare', focus: 'Patient monitoring systems, telehealth solutions, diagnostic imaging.', icon: <Building className="w-5 h-5 text-primary"/> },
  ],
  startupsAndInnovators: [
    { name: 'Omada Health', focus: 'Digital therapeutics for chronic condition management (diabetes, hypertension).', icon: <Zap className="w-5 h-5 text-primary"/> },
    { name: 'Biofourmis', focus: 'AI-powered remote patient monitoring and digital therapeutics.', icon: <Zap className="w-5 h-5 text-primary"/> },
    { name: 'Whoop', focus: 'Subscription-based fitness and recovery tracker focused on advanced analytics.', icon: <Zap className="w-5 h-5 text-primary"/> },
  ],
   academicResearch: [
    { name: 'Stanford Wearable Biosensors Lab (Conceptual)', focus: 'Research on novel biosensor technologies and data analytics for health.', icon: <GraduationCap className="w-5 h-5 text-primary"/> },
    { name: 'MIT Media Lab (Various Groups)', focus: 'Exploration of affective computing, personal informatics, and innovative wearable interfaces.', icon: <GraduationCap className="w-5 h-5 text-primary"/> },
  ]
};

const challengesEthicsData = [
  { title: 'Data Privacy & Security', description: 'Protecting highly sensitive personal health information (PHI) from breaches and unauthorized access. Ensuring compliance with regulations like HIPAA (US) and GDPR (EU).', icon: <ShieldCheck className="w-5 h-5 text-destructive" /> },
  { title: 'Accuracy & Reliability', description: 'Ensuring clinical-grade accuracy and reliability of wearable sensors and algorithms, especially for diagnostic or treatment purposes. Reducing false positives/negatives.', icon: <MessageSquareWarning className="w-5 h-5 text-destructive" /> },
  { title: 'User Adoption & Accessibility', description: 'Designing user-friendly devices and interfaces for diverse populations (elderly, less tech-savvy). Addressing affordability and bridging digital divides to ensure equitable access.', icon: <UsersRound className="w-5 h-5 text-destructive" /> },
  { title: 'Regulatory & Approval Processes', description: 'Navigating complex regulatory pathways (e.g., FDA, CE marking) for medical-grade wearables and digital health solutions. Balancing innovation speed with safety and efficacy.', icon: <Scale className="w-5 h-5 text-destructive" /> },
  { title: 'Ethical Use of Data', description: 'Obtaining informed consent for data collection and use. Ensuring data ownership transparency. Preventing algorithmic bias and potential discrimination based on health data.', icon: <Puzzle className="w-5 h-5 text-destructive" /> }, 
];

const futureTrendsData = [
    { title: 'Next-Gen Biosensors', description: 'Implantable sensors for continuous monitoring, biochemical sensors for real-time biomarker tracking (e.g., hormones, stress), and multi-modal devices integrating diverse sensor types.', icon: <Zap className="w-7 h-7 text-primary"/> },
    { title: 'Integrated Health Ecosystems', description: 'Seamless data flow between wearables, electronic health records (EHRs), telehealth platforms, and AI-powered care assistants, creating a holistic view of patient health.', icon: <Network className="w-7 h-7 text-primary"/> },
    { title: 'Personalized Medicine & Predictive Care', description: 'AI algorithms leveraging wearable data to provide highly personalized health recommendations, early warnings for disease onset, and tailored treatment plans.', icon: <Brain className="w-7 h-7 text-primary"/> },
    { title: 'AR/VR in Health & Wellness', description: 'Augmented Reality for surgical assistance and medical training. Virtual Reality for pain management, mental health therapy (e.g., exposure therapy), and fitness experiences.', icon: <Watch className="w-7 h-7 text-primary"/> }, 
    { title: 'Global Health & Emerging Markets', description: 'Expanding access to remote monitoring, diagnostics, and telehealth services in underserved regions and developing countries, leveraging increasingly affordable wearable tech.', icon: <Globe className="w-7 h-7 text-primary"/> },
];

const exploreFurtherData = [
  { category: "Courses & Learning", items: [
      { name: "Digital Health Specialization (Coursera)", url: "https://www.coursera.org/specializations/digital-health", imageHint: "coursera logo online course" },
      { name: "Wearable Technologies (edX various)", url: "https://www.edx.org/learn/wearable-technology", imageHint: "edx logo certificate" },
  ]},
  { category: "Books & Publications", items: [
      { name: "The Patient Will See You Now by Eric Topol", url: "https://www.amazon.com/Patient-Will-See-You-Now/dp/0465054749", imageHint: "book cover medical future" },
      { name: "npj Digital Medicine (Journal)", url: "https://www.nature.com/npjdigitalmed/", imageHint: "journal cover health" },
  ]},
  { category: "Communities & Conferences", items: [
      { name: "HIMSS Global Health Conference", url: "https://www.himss.org/global-conference", imageHint: "himss logo conference" },
      { name: "Connected Health Conference", url: "https://www.connectedhealthconf.org/", imageHint: "conference logo connected" },
      { name: "Wearable Technologies Conference", url: "https://www.wearable-technologies.com/", imageHint: "wearable tech logo event" }
  ]},
  { category: "Open Platforms & Developer Tools", items: [
      { name: "Apple HealthKit", url: "https://developer.apple.com/healthkit/", imageHint: "apple logo developer" },
      { name: "Google Fit APIs", url: "https://developers.google.com/fit", imageHint: "google fit logo api" },
  ]}
];


export default function WearableHealthTechPage() {
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
          <HeartPulse className="w-16 h-16 md:w-20 md:h-20 text-primary mx-auto md:mx-0 flex-shrink-0" />
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
              Wearable Technology & Health Tech
            </h1>
            <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto md:mx-0">
              Transforming personalized healthcare, wellness, and medical monitoring through innovative devices and integrated systems.
            </p>
          </div>
        </div>
      </header>

      <Section title="Comprehensive Overview" titleIcon={<InfoIcon className="w-6 h-6 text-primary"/>} description="Understanding the essentials of wearable and health technologies." className="bg-muted/30">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-6 items-center">
            <div className="md:col-span-4 space-y-4">
                <p className="text-base text-muted-foreground">
                  Wearable Technology and Health Tech encompass devices and integrated systems designed to monitor health metrics, deliver therapies, and enhance wellness in real time. This rapidly evolving field is driven by growing consumer demand for health insights, a shift towards preventive and personalized medicine, and seamless integration with smartphones, cloud platforms, and AI.
                </p>
                 <div>
                    <h4 className="font-semibold text-md text-primary mb-1">Core Focus Areas:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        <li>Advanced biosensors (monitoring heart rate, glucose, oxygen, activity, sleep).</li>
                        <li>Digital therapeutics (software-based interventions) and telemedicine platforms.</li>
                        <li>Secure health data integration, management, and exchange.</li>
                        <li>AI-driven analytics for personalized insights and predictive health.</li>
                    </ul>
                </div>
            </div>
             <div className="md:col-span-3">
                <Image src="https://placehold.co/600x400.png" alt="Wearable Health Tech Abstract Visual" width={600} height={400} className="rounded-md object-cover w-full shadow-lg border border-border" data-ai-hint="smartwatch health data" />
            </div>
        </div>
      </Section>
      
      <Section title="Historical Evolution & Foundations" titleIcon={<Milestone className="w-6 h-6 text-primary"/>} description="Tracing the development from simple trackers to complex medical devices.">
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

      <Section title="Current Applications" titleIcon={<CheckCircle className="w-6 h-6 text-primary"/>} description="Real-world use cases across consumer health, clinical care, and research.">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentApplicationsData.map((app_item) => (
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

      <Section title="Core Technologies & Tools" titleIcon={<Cpu className="w-6 h-6 text-primary"/>} description="The underlying technologies enabling wearable and health tech innovation.">
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

      <Section title="Key Innovators & Industry Leaders" titleIcon={<Users2 className="w-6 h-6 text-primary"/>} description="Organizations pushing the boundaries in wearable health technology.">
        <div className="space-y-6">
            <div>
                <h3 className="text-xl font-semibold mb-3 text-primary flex items-center gap-2"><Briefcase className="w-5 h-5"/>Tech Giants</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {keyPlayersData.techGiants.map(player => (
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
                <h3 className="text-xl font-semibold mb-3 text-primary flex items-center gap-2"><Building className="w-5 h-5"/>Medical Device Companies</h3>
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {keyPlayersData.medicalDeviceCompanies.map(company => (
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
                <h3 className="text-xl font-semibold mb-3 text-primary flex items-center gap-2"><Zap className="w-5 h-5"/>Startups & Innovators</h3>
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
            <div>
                <h3 className="text-xl font-semibold mb-3 text-primary flex items-center gap-2"><GraduationCap className="w-5 h-5"/>Academic & Research Institutions</h3>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {keyPlayersData.academicResearch.map(inst => (
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
        </div>
      </Section>

      <Section title="Challenges & Ethical Considerations" titleIcon={<Scale className="w-6 h-6 text-primary"/>} description="Hurdles and responsibilities in wearable health technology.">
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

      <Section title="Future Trends & Opportunities" titleIcon={<TrendingUp className="w-6 h-6 text-primary"/>} description="Exploring how wearable and health tech will evolve.">
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
      
      <Section title="Explore Further: Resources & Learning" titleIcon={<BookOpen className="w-6 h-6 text-primary"/>} description="Curated resources to deepen your knowledge." className="bg-muted/30">
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
    title: 'Wearable Technology & Health Tech | Innovation Hub Explorer',
    description: 'Explore wearable devices, health tech, biosensors, digital therapeutics, telemedicine, and their impact on personalized healthcare and wellness.',
    keywords: ['Wearable Technology', 'Health Tech', 'Digital Health', 'Biosensors', 'Telemedicine', 'Digital Therapeutics', 'mHealth', 'Personalized Medicine'],
     openGraph: {
      title: 'Wearable Technology & Health Tech | Innovation Hub Explorer',
      description: 'Transforming personalized healthcare and wellness through innovative devices.',
      url: '/explore/wearable-health-tech',
      images: [
        {
          url: '/og-wearable-health.png',
          width: 1200,
          height: 630,
          alt: 'Wearable Technology and Health Tech Concepts',
        },
      ],
    },
    twitter: {
      title: 'Wearable Technology & Health Tech',
      description: 'The future of personalized health monitoring and care.',
    },
    alternates: {
      canonical: '/explore/wearable-health-tech',
    },
  };
}
