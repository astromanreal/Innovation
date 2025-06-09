
'use client';

import { useState } from 'react';
import { Section } from '@/components/Section';
import { Mail, MapPin, Phone, Send, Building, Twitter, Instagram, Github, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';

export default function ContactPageClient() {
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const socialLinks = [
    { name: 'Twitter / X', handle: '@Sathyamsarthak', url: 'https://twitter.com/Sathyamsarthak', icon: <Twitter className="w-5 h-5 text-primary" /> },
    { name: 'Instagram', handle: '@srishikharji', url: 'https://instagram.com/srishikharji', icon: <Instagram className="w-5 h-5 text-primary" /> },
    { name: 'GitHub', handle: 'astromanreal', url: 'https://github.com/astromanreal', icon: <Github className="w-5 h-5 text-primary" /> },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) {
      toast({
        title: "Missing Information",
        description: "Please fill out all fields before sending.",
        variant: "destructive",
      });
      return;
    }

    const mailtoSubject = `Inquiry from Innovation Hub: ${subject}`;
    const mailtoBody = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailtoLink = `mailto:astroman6569@gmail.com?subject=${encodeURIComponent(mailtoSubject)}&body=${encodeURIComponent(mailtoBody)}`;
    
    window.location.href = mailtoLink;

    toast({
        title: "Email Client Opened",
        description: "Your email client should open with the message details pre-filled. Please review and send.",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 space-y-12 md:space-y-16">
      <header className="text-center mb-12 md:mb-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-primary flex items-center justify-center gap-3">
          <Mail className="w-10 h-10" /> Get in Touch
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          We'd love to hear from you. Whether you have a question, feedback, or just want to connect, feel free to reach out through any of the channels below.
        </p>
      </header>

      <Section title="Direct Contact & Online Presence" description="Use the form below or reach out via our contact details and social media.">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
             <Card className="border-border shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl"><Send className="w-5 h-5 text-primary"/>Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                                <Label htmlFor="name">Full Name</Label>
                                <Input id="name" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="space-y-1.5">
                                <Label htmlFor="email">Email Address</Label>
                                <Input id="email" type="email" placeholder="your.email@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                        </div>
                         <div className="space-y-1.5">
                            <Label htmlFor="subject">Subject</Label>
                            <Input id="subject" placeholder="Inquiry Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
                        </div>
                        <div className="space-y-1.5">
                            <Label htmlFor="message">Message</Label>
                            <Textarea id="message" placeholder="Your detailed message..." rows={5} value={message} onChange={(e) => setMessage(e.target.value)} />
                        </div>
                         <Button type="submit" className="w-full sm:w-auto">Send Message via Email Client</Button>
                         <p className="text-xs text-muted-foreground text-center sm:text-left pt-2">Clicking "Send Message" will open your default email application with the details pre-filled.</p>
                    </form>
                </CardContent>
            </Card>

            <div className="space-y-8">
                <Card className="border-border shadow-md">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-lg"><Building className="w-5 h-5 text-primary"/>Direct Contact</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-start gap-3">
                            <Mail className="w-5 h-5 text-muted-foreground mt-1 flex-shrink-0"/>
                            <div>
                                <h4 className="font-semibold">Email</h4>
                                <a href="mailto:astroman6569@gmail.com" className="text-sm text-primary hover:underline">astroman6569@gmail.com</a>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <Phone className="w-5 h-5 text-muted-foreground mt-1 flex-shrink-0"/>
                             <div>
                                <h4 className="font-semibold">Phone</h4>
                                <p className="text-sm text-muted-foreground">+91 8102116569</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-border shadow-md">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-lg"><ExternalLink className="w-5 h-5 text-primary"/>Connect Online</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {socialLinks.map((social) => (
                            <div key={social.name} className="flex items-center justify-between gap-3">
                                <div className="flex items-center gap-3">
                                    {social.icon}
                                    <div>
                                        <h4 className="font-semibold">{social.name}</h4>
                                        <p className="text-sm text-muted-foreground">{social.handle}</p>
                                    </div>
                                </div>
                                <Link href={social.url} target="_blank" rel="noopener noreferrer" passHref legacyBehavior>
                                 <a>
                                    <Button variant="outline" size="sm">
                                        Follow <ExternalLink className="ml-2 h-3 w-3"/>
                                    </Button>
                                 </a>
                                </Link>
                            </div>
                        ))}
                    </CardContent>
                </Card>
                
            </div>
        </div>
      </Section>
    </div>
  );
}
