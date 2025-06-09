
'use client';

import { useState, useMemo } from 'react';
import { Section } from '@/components/Section';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Users, Building, FlaskConical, Cpu, Globe, Search, Filter, ExternalLink, User, Star, Link as LinkIcon, Rocket, Milestone, Aperture, Landmark, Info, AlertCircle, XCircle, BrainCircuit } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Label } from '@/components/ui/label';

interface InnovatorEntry {
  id: string;
  name: string;
  category: 'Person' | 'Company' | 'Startup' | 'Research Institution' | 'Open Source Project' | 'Global Initiative';
  domain: string[]; // Can belong to multiple domains
  country: string;
  impactArea?: string[];
  description: string;
  keyAchievements: string[];
  imageUrl?: string;
  imageHint: string;
  learnMoreUrl?: string;
  logoIcon?: React.ReactNode;
}

const allInnovatorsData: InnovatorEntry[] = [
  {
    id: 'openai',
    name: 'OpenAI',
    category: 'Company',
    domain: ['AI'],
    country: 'USA',
    impactArea: ['NLP', 'Generative Models', 'AGI Research'],
    description: 'An AI research and deployment company. Known for creating GPT models, DALL·E, and pursuing Artificial General Intelligence.',
    keyAchievements: ['GPT-3 & GPT-4 development', 'DALL·E image generation', 'ChatGPT launch', 'Significant research in reinforcement learning'],
    imageHint: 'ai abstract network',
    learnMoreUrl: 'https://openai.com/',
    logoIcon: <Aperture className="w-6 h-6 text-primary" />
  },
  {
    id: 'deepmind',
    name: 'Google DeepMind',
    category: 'Company',
    domain: ['AI'],
    country: 'UK/USA',
    impactArea: ['Deep Learning', 'Reinforcement Learning', 'Scientific Discovery'],
    description: 'A leading AI research lab, now part of Google, known for breakthroughs like AlphaGo, AlphaFold, and general AI research.',
    keyAchievements: ['AlphaGo defeats Go champion', 'AlphaFold solves protein folding problem', 'Contributions to WaveNet (speech synthesis)'],
    imageHint: 'brain network science',
    learnMoreUrl: 'https://deepmind.google/',
    logoIcon: <BrainCircuit className="w-6 h-6 text-primary" />
  },
  {
    id: 'jennifer-doudna',
    name: 'Jennifer Doudna',
    category: 'Person',
    domain: ['Bioengineering', 'Biotechnology'],
    country: 'USA',
    impactArea: ['Gene Editing', 'CRISPR'],
    description: 'American biochemist who co-developed CRISPR-Cas9 gene editing technology, for which she received the Nobel Prize in Chemistry.',
    keyAchievements: ['Co-discovery of CRISPR-Cas9 mechanism', 'Pioneering work in gene editing applications', 'Nobel Prize in Chemistry (2020)'],
    imageHint: 'scientist portrait dna',
    learnMoreUrl: 'https://innovativegenomics.org/jennifer-doudna/',
    logoIcon: <User className="w-6 h-6 text-primary" />
  },
  {
    id: 'ibm-quantum',
    name: 'IBM Quantum',
    category: 'Company',
    domain: ['Quantum Computing'],
    country: 'USA',
    impactArea: ['Quantum Hardware', 'Quantum Software', 'Cloud Quantum Access'],
    description: 'A leader in quantum computing, providing cloud access to quantum processors and developing quantum hardware and software (Qiskit).',
    keyAchievements: ['First cloud-accessible quantum computer', 'Development of superconducting qubit processors (e.g., Condor, Osprey)', 'Qiskit open-source framework'],
    imageHint: 'quantum chip abstract',
    learnMoreUrl: 'https://www.ibm.com/quantum',
    logoIcon: <Cpu className="w-6 h-6 text-primary" />
  },
  {
    id: 'isro',
    name: 'ISRO (Indian Space Research Organisation)',
    category: 'Research Institution',
    domain: ['Space Technology'],
    country: 'India',
    impactArea: ['Satellite Launch', 'Planetary Exploration', 'Remote Sensing'],
    description: 'India\'s national space agency, known for cost-effective satellite launches, Mars Orbiter Mission (Mangalyaan), and Chandrayaan lunar missions.',
    keyAchievements: ['Mars Orbiter Mission', 'Chandrayaan missions to the Moon', 'Development of PSLV and GSLV launch vehicles', 'Successful soft landing on Moon\'s south pole (Chandrayaan-3)'],
    imageHint: 'rocket launch india flag',
    learnMoreUrl: 'https://www.isro.gov.in/',
    logoIcon: <Rocket className="w-6 h-6 text-primary" />
  },
  {
    id: 'huawei',
    name: 'Huawei',
    category: 'Company',
    domain: ['5G & Next-Gen Connectivity', 'AI', 'Smart Devices'],
    country: 'China',
    impactArea: ['Telecommunications Infrastructure', 'Consumer Electronics', 'Cloud Computing'],
    description: 'A global leader in telecommunications equipment and consumer electronics, particularly influential in 5G network development.',
    keyAchievements: ['Major contributor to 5G standards and infrastructure', 'Significant R&D in AI and cloud computing', 'Global smartphone manufacturer'],
    imageHint: '5g tower abstract',
    learnMoreUrl: 'https://www.huawei.com/',
    logoIcon: <Building className="w-6 h-6 text-primary" />
  },
  {
    id: 'mit-csail',
    name: 'MIT CSAIL',
    category: 'Research Institution',
    domain: ['AI', 'Robotics', 'Computer Science'],
    country: 'USA',
    impactArea: ['Fundamental CS Research', 'Robotics Innovation', 'AI Algorithms'],
    description: 'The Computer Science and Artificial Intelligence Laboratory at MIT, one ofПоказать ещё