
'use client'; 

import Image from 'next/image';
import Link from 'next/link';
import {
  DatabaseZap, Milestone, Lightbulb, Brain, Users, Building, Globe, Puzzle, Scale, BookOpen, ArrowLeft, ExternalLink, Info as InfoIcon, CheckCircle, Cpu, Users2, TrendingUp, Settings2, BarChart3, FileText, Briefcase, Code2, Cloud, Filter, UsersRound, Zap, MessageSquareWarning, CalendarCheck2, HeartPulse, ShoppingBag, FlaskConical, Landmark, GraduationCap, ShieldCheck
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

const evolutionEras = [
  {
    id: 'ds_evo1',
    era: 'Historical Origins',
    title: 'Emergence from Statistics & Early BI',
    description: 'Data science roots trace back to statistics, operations research, and early computer science. The early 2000s saw the rise of Business Intelligence (BI) systems, laying groundwork for data-driven decision making.',
    icon: <Lightbulb className="w-5 h-5 text-primary" />,
  },
  {
    id: 'ds_evo2',
    era: 'The Big Data Boom',
    title: 'Data Explosion & Distributed Systems',
    description: 'A massive increase in data from social media, sensors, web logs, and IoT devices. This era saw the advent of distributed computing frameworks like Hadoop and Spark to handle this volume, velocity, and variety.',
    icon: <Cloud className="w-5 h-5 text-primary" />,
  },
  {
    id: 'ds_evo3',
    era: 'Integration with AI & Machine Learning',
    title: 'Predictive Power & Automation',
    description: 'Machine learning models became central for classification, regression, clustering, and prediction. AI techniques enabled real-time learning from streaming data and automated complex analytical tasks.',
    icon: <Brain className="w-5 h-5 text-primary" />,
  },
  {
    id: 'ds_evo4',
    era: 'Democratization of Data Science',
    title: 'Broader Access & Citizen Data Scientists',
    description: 'Rise of user-friendly self-service analytics tools, low-code/no-code platforms, and cloud-based services. Increased data literacy across organizations led to the emergence of "citizen data scientists".',
    icon: <UsersRound className="w-5 h-5 text-primary" />,
  },
];

const currentApplicationsData = [
  {
    sector: 'Business & Finance',
    icon: <Briefcase className="w-7 h-7 text-primary" />,
    examples: ['Customer segmentation & churn prediction', 'Algorithmic trading & fraud detection', 'Personalized recommendation engines', 'Supply chain optimization'],
    imageHint: "financial chart graph"
  },
  {
    sector: 'Healthcare & Genomics',
    icon: <HeartPulse className="w-7 h-7 text-primary" />, 
    examples: ['Predictive diagnostics from medical imaging', 'Drug discovery & clinical trial optimization', 'Patient outcome modeling & personalized medicine', 'Genomic data analysis for disease research'],
    imageHint: "medical research dna"
  },
  {
    sector: 'Retail & Marketing',
    icon: <ShoppingBag className="w-7 h-7 text-primary" />, 
    examples: ['Dynamic pricing strategies', 'Marketing campaign A/B testing', 'Customer sentiment analysis from social media', 'Inventory management & demand forecasting'],
    imageHint: "retail store online"
  },
  {
    sector: 'Scientific Research',
    icon: <FlaskConical className="w-7 h-7 text-primary" />,
    examples: ['Climate change modeling & simulation', 'Particle physics data analysis (e.g., CERN)', 'Epidemiological studies & disease spread modeling', 'Astronomical data processing'],
    imageHint: "science lab research"
  },
  {
    sector: 'Governance & Public Policy',
    icon: <Landmark className="w-7 h-7 text-primary" />, 
    examples: ['Smart city planning & resource optimization', 'Public health surveillance & outbreak tracking', 'Crime pattern analysis & prediction', 'Optimizing public transportation routes'],
    imageHint: "city planning map"
  }
];

const coreTechnologiesData = [
    { title: 'Data Collection & Engineering', description: 'ETL (Extract, Transform, Load) pipelines, API integration, sensor data ingestion, web scraping, data cleaning and preparation.', icon: <Settings2 className="w-6 h-6 text-accent"/>},
    { title: 'Data Storage & Processing', description: 'Distributed file systems (e.g., HDFS), data lakes & warehouses, NoSQL databases, stream processing (e.g., Kafka), and batch processing frameworks (e.g., Spark, Flink).', icon: <Cloud className="w-6 h-6 text-accent"/>},
    { title: 'Machine Learning Pipelines', description: 'Supervised and unsupervised learning algorithms, model training & validation, hyperparameter tuning, feature engineering, MLOps for deployment and monitoring.', icon: <Brain className="w-6 h-6 text-accent"/>},
    { title: 'Data Visualization & Storytelling', description: 'Dashboards, interactive charts, BI tools (e.g., Tableau, Power BI), libraries (e.g., Matplotlib, Seaborn, Plotly, D3.js) for communicating insights effectively.', icon: <BarChart3 className="w-6 h-6 text-accent"/>},
    { title: 'Cloud & Edge Platforms', description: 'Scalable cloud computing services (AWS, Azure, GCP), specialized data science platforms (Databricks, Snowflake), and edge analytics for real-time processing near data sources.', icon: <Cpu className="w-6 h-6 text-accent"/>},
    { title: 'Advanced Analytics Techniques', description: 'Time series forecasting, Natural Language Processing (NLP), computer vision, anomaly detection, graph analytics, reinforcement learning, and causal inference.', icon: <Zap className="w-6 h-6 text-accent"/>},
];

const keyInnovatorsData = {
  openSourceTools: [
    { name: 'Python Ecosystem', focus: 'Pandas, NumPy, Scikit-learn, TensorFlow, PyTorch', icon: <Code2 className="w-5 h-5 text-primary"/> },
    { name: 'R Language', focus: 'Statistical computing, visualization (ggplot2)', icon: <Code2 className="w-5 h-5 text-primary"/> },
    { name: 'Apache Spark', focus: 'Large-scale data processing engine', icon: <Zap className="w-5 h-5 text-primary"/> },
    { name: 'Jupyter Ecosystem', focus: 'Notebooks for interactive computing', icon: <FileText className="w-5 h-5 text-primary"/> },
  ],
  commercialPlatforms: [
    { name: 'Databricks', focus: 'Unified analytics platform (Spark-based)', icon: <Building className="w-5 h-5 text-primary"/> },
    { name: 'Snowflake', focus: 'Cloud data platform', icon: <Cloud className="w-5 h-5 text-primary"/> },
    { name: 'Tableau / Power BI', focus: 'Business intelligence & visualization', icon: <BarChart3 className="w-5 h-5 text-primary"/> },
    { name: 'Palantir', focus: 'Big data analytics for enterprise & government', icon: <Building className="w-5 h-5 text-primary"/> },
  ],
  majorContributors: [
    { name: 'Google AI / DeepMind', focus: 'Pioneering AI/ML research and applications', icon: <Brain className="w-5 h-5 text-primary"/> },
    { name: 'Microsoft Research', focus: 'Broad research in data, AI, and cloud', icon: <Building className="w-5 h-5 text-primary"/> },
    { name: 'Kaggle Community', focus: 'Platform for data science competitions & collaboration', icon: <Users className="w-5 h-5 text-primary"/> },
    { name: 'Academic Institutions', focus: 'MIT, Stanford, Berkeley, CMU etc. driving foundational research', icon: <GraduationCap className="w-5 h-5 text-primary"/> }, 
  ],
};

const challengesEthicsData = [
  { title: 'Data Quality & Bias', description: 'Ensuring data accuracy, completeness, and representativeness. Mitigating biases in datasets and algorithms that can lead to unfair or discriminatory outcomes.', icon: <Filter className="w-5 h-5 text-destructive" /> },
  { title: 'Privacy & Security', description: 'Protecting sensitive personal and corporate data. Complying with regulations like GDPR, CCPA, HIPAA. Implementing robust security measures against breaches.', icon: <ShieldCheck className="w-5 h-5 text-destructive" /> },
  { title: 'Model Explainability & Interpretability', description: 'Understanding and explaining the decisions made by complex "black-box" AI models, crucial for trust, accountability, and debugging.', icon: <MessageSquareWarning className="w-5 h-5 text-destructive" /> },
  { title: 'Data Ownership & Fair Use', description: 'Navigating legal and ethical frameworks around who owns data, who can access it, and how it can be monetized or used for societal benefit.', icon: <Scale className="w-5 h-5 text-destructive" /> },
  { title: 'Scalability & Performance', description: 'Efficiently processing and analyzing petabytes or exabytes of data at real-time or near real-time speeds while maintaining accuracy and cost-effectiveness.', icon: <Cpu className="w-5 h-5 text-destructive" /> },
];

const futureDirectionsData = [
    { title: 'Automated Machine Learning (AutoML)', description: 'Tools and platforms that automate the end-to-end process of applying machine learning, making advanced analytics more accessible to non-experts.', icon: <Zap className="w-7 h-7 text-primary"/> },
    { title: 'Real-Time & Streaming Analytics', description: 'Analyzing data as it is generated (e.g., from IoT sensors, financial markets, social media) for instant insights and automated actions.', icon: <CalendarCheck2 className="w-7 h-7 text-primary"/> },
    { title: 'Federated & Privacy-Preserving Learning', description: 'Training ML models across decentralized data sources (e.g., on user devices) without directly accessing or centralizing sensitive raw data.', icon: <ShieldCheck className="w-7 h-7 text-primary"/> },
    { title: 'Human-in-the-Loop Systems', description: 'Combining human expertise and intuition with algorithmic power for complex, high-stakes decision-making, ensuring oversight and continuous improvement.', icon: <Users className="w-7 h-7 text-primary"/> },
    { title: 'Integration with Emerging Tech', description: 'Synergies between data science and IoT, AR/VR analytics, synthetic data generation, quantum-enhanced data processing, and AI ethics frameworks.', icon: <Puzzle className="w-7 h-7 text-primary"/> },
];

const exploreFurtherData = [
  { category: "MOOCs & Courses", items: [
      { name: "Applied Data Science Specialization (IBM on Coursera)", url: "https://www.coursera.org/specializations/applied-data-science", imageHint: "coursera logo online course" },
      { name: "Harvard CS109 Data Science", url: "https://cs109.org/", imageHint: "harvard logo university" },
      { name: "fast.ai - Practical Deep Learning for Coders", url: "https://www.fast.ai/", imageHint: "fastai logo code" }
  ]},
  { category: "Books", items: [
      { name: "Data Science from Scratch by Joel Grus", url: "https://www.oreilly.com/library/view/data-science-from/9781492041122/", imageHint: "book cover python" },
      { name: "The Signal and the Noise by Nate Silver", url: "https://www.penguinrandomhouse.com/books/214921/the-signal-and-the-noise-by-nate-silver/", imageHint: "book cover statistics" },
      { name: "Storytelling with Data by Cole Nussbaumer Knaflic", url: "https://www.storytellingwithdata.com/books", imageHint: "book cover visualization" }
  ]},
  { category: "Communities & Competitions", items: [
      { name: "Kaggle", url: "https://www.kaggle.com/", imageHint: "kaggle logo competition" },
      { name: "DataTau News Aggregator", url: "http://www.datatau.com/", imageHint: "news logo data" },
      { name: "r/datascience (Reddit)", url: "https://www.reddit.com/r/datascience/", imageHint: "reddit logo community" }
  ]},
  { category: "Notable Case Studies", items: [
      { name: "Netflix Prize & Recommendation System", url: "https://en.wikipedia.org/wiki/Netflix_Prize", imageHint: "netflix logo movie" },
      { name: "Google Flu Trends (and its lessons)", url: "https://en.wikipedia.org/wiki/Google_Flu_Trends", imageHint: "google logo search" },
      { name: "Uber's Surge Pricing & Demand Prediction", url: "https://www.uber.com/blog/engineering/research/tag/dynamic-pricing/", imageHint: "uber logo car" }
  ]}
];

export default function DataScienceBigDataPageClient() {
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
          <DatabaseZap className="w-16 h-16 md:w-20 md:h-20 text-primary mx-auto md:mx-0 flex-shrink-0" />
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
              Data Science & Big Data Analytics
            </h1>
            <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto md:mx-0">
              Extracting actionable insights from massive datasets, powered by advanced statistical methods, AI, and scalable computing platforms.
            </p>
          </div>
        </div>
      </header>

      <Section title="Comprehensive Overview" titleIcon={<InfoIcon className="w-6 h-6 text-primary"/>} description="Understanding Data Science as a transformative discipline." className="bg-muted/30">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-6 items-center">
            <div className="md:col-span-4 space-y-4">
                <p className="text-base text-muted-foreground">
                  Data Science is an interdisciplinary field that combines mathematics, statistics, programming, and domain knowledge to analyze large-scale data and generate insights. Big Data Analytics provides the techniques and technologies to process extremely large, diverse, and fast-moving datasets for pattern discovery and real-time decision-making.
                </p>
                 <div>
                    <h4 className="font-semibold text-md text-primary mb-1">Core Themes:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        <li>Data engineering and machine learning pipelines.</li>
                        <li>Exploratory data analysis and impactful visualization.</li>
                        <li>Cloud-based distributed processing platforms (e.g., Spark, Hadoop).</li>
                        <li>Predictive modeling for forecasting and prescriptive analytics for decision support.</li>
                    </ul>
                </div>
                <p className="text-base text-muted-foreground">
                  It powers everything from business forecasts to scientific simulations, driving critical decisions in finance, healthcare, marketing, and climate science. It enables personalization, automation, and strategic planning across industries.
                </p>
            </div>
             <div className="md:col-span-3">
                <Image src="https://placehold.co/600x400.png" alt="Abstract visualization representing data science and big data concepts" width={600} height={400} className="rounded-md object-cover w-full shadow-lg border border-border" data-ai-hint="abstract data network" />
            </div>
        </div>
      </Section>
      
      <Section title="Foundations and Evolution" titleIcon={<Milestone className="w-6 h-6 text-primary"/>} description="How data science evolved from statistics and informatics.">
        <Accordion type="single" collapsible className="w-full space-y-3">
          {evolutionEras.map((item) => (
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

      <Section title="Current Applications" titleIcon={<CheckCircle className="w-6 h-6 text-primary"/>} description="Transforming industries and scientific research today.">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentApplicationsData.map((app_item) => (
            <Card key={app_item.sector} className="flex flex-col h-full hover:shadow-lg transition-shadow group bg-card">
              <CardHeader className="items-center text-center">
                <div className="p-3 bg-primary/10 rounded-full mb-2 group-hover:bg-primary/20 transition-colors">{app_item.icon}</div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">{app_item.sector}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow text-center">
                 <ul className="list-disc list-inside text-sm text-muted-foreground text-left space-y-1">
                    {app_item.examples.map((example, idx) => <li key={idx}>{example}</li>)}
                 </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Core Technologies & Techniques" titleIcon={<Cpu className="w-6 h-6 text-primary"/>} description="Major components of modern data science and big data architecture.">
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

      <Section title="Key Innovators & Ecosystem Players" titleIcon={<Users2 className="w-6 h-6 text-primary"/>} description="Influential companies, tools, and contributors in the data science world.">
        <div className="space-y-6">
            <div>
                <h3 className="text-xl font-semibold mb-3 text-primary flex items-center gap-2"><Code2 className="w-5 h-5"/>Open Source Tools</h3>
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {keyInnovatorsData.openSourceTools.map(tool => (
                    <Card key={tool.name} className="p-3 text-center bg-card hover:shadow-md flex flex-col justify-between">
                      <div>
                        <div className="flex justify-center mb-2">{tool.icon}</div>
                        <CardTitle className="text-sm mb-1">{tool.name}</CardTitle>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">{tool.focus}</p>
                    </Card>
                ))}
                </div>
            </div>
            <div>
                <h3 className="text-xl font-semibold mb-3 text-primary flex items-center gap-2"><Building className="w-5 h-5"/>Commercial Platforms</h3>
                 <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {keyInnovatorsData.commercialPlatforms.map(platform => (
                    <Card key={platform.name} className="p-3 text-center bg-card hover:shadow-md flex flex-col justify-between">
                     <div>
                        <div className="flex justify-center mb-2">{platform.icon}</div>
                        <CardTitle className="text-sm mb-1">{platform.name}</CardTitle>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">{platform.focus}</p>
                    </Card>
                ))}
                </div>
            </div>
             <div>
                <h3 className="text-xl font-semibold mb-3 text-primary flex items-center gap-2"><Globe className="w-5 h-5"/>Major Contributors & Communities</h3>
                 <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {keyInnovatorsData.majorContributors.map(contrib => (
                    <Card key={contrib.name} className="p-3 text-center bg-card hover:shadow-md flex flex-col justify-between">
                      <div>
                        <div className="flex justify-center mb-2">{contrib.icon}</div>
                        <CardTitle className="text-sm mb-1">{contrib.name}</CardTitle>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">{contrib.focus}</p>
                    </Card>
                ))}
                </div>
            </div>
        </div>
      </Section>

      <Section title="Challenges & Ethics" titleIcon={<Scale className="w-6 h-6 text-primary"/>} description="Critical technical bottlenecks and ethical dilemmas in data usage.">
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

      <Section title="Future Directions & Opportunities" titleIcon={<TrendingUp className="w-6 h-6 text-primary"/>} description="Where data science is heading and its potential to reshape the future.">
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
      </Section>
      
      <Section title="Explore Further: Resources & Learning Paths" titleIcon={<BookOpen className="w-6 h-6 text-primary"/>} description="Curated resources to deepen your understanding of Data Science." className="bg-muted/30">
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
        <blockquote className="mt-8 border-l-4 border-primary pl-4 italic text-muted-foreground">
            Data Science is a rapidly evolving field. Continuous learning and engagement with the community are key to staying at the forefront of innovation.
        </blockquote>
      </Section>
    </div>
  );
}
