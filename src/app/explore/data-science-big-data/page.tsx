
import type { Metadata } from 'next';
import DataScienceBigDataPageClient from './DataScienceBigDataPageClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Data Science & Big Data Analytics | Innovation Hub Explorer',
    description: 'Explore Data Science, Big Data, machine learning, AI applications, core technologies like Spark and Hadoop, challenges in data quality and privacy, and future trends like AutoML.',
    keywords: ['Data Science', 'Big Data', 'Machine Learning', 'AI', 'Analytics', 'Data Engineering', 'Predictive Modeling', 'Cloud Computing', 'Hadoop', 'Spark', 'Data Visualization', 'Business Intelligence'],
     openGraph: {
      title: 'Data Science & Big Data Analytics Deep Dive | Innovation Hub Explorer',
      description: 'Extracting insights from massive datasets using AI, advanced statistical methods, and scalable computing platforms.',
      url: '/explore/data-science-big-data',
      images: [
        {
          url: '/og-data-science.png', 
          width: 1200,
          height: 630,
          alt: 'Data Science and Big Data Analytics Abstract Visualization',
        },
      ],
    },
    twitter: {
      title: 'Data Science & Big Data Analytics Explained',
      description: 'Unlocking insights from the world of data: exploring tools, techniques, and applications.',
      images: ['/og-data-science.png'],
    },
    alternates: {
      canonical: '/explore/data-science-big-data',
    },
  };
}

export default function DataScienceBigDataPage() {
  return <DataScienceBigDataPageClient />;
}
