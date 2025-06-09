
import { Section } from '@/components/Section';
import { FileLock } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link'; 

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Review the Privacy Policy for the Innovation Hub Explorer platform.',
  keywords: ['privacy policy', 'data protection', 'user privacy', 'terms'],
  openGraph: {
    title: 'Privacy Policy | Innovation Hub Explorer',
    description: 'Our commitment to your privacy.',
    url: '/privacy',
  },
  twitter: {
    title: 'Privacy Policy | Innovation Hub Explorer',
    description: 'How we handle your data.',
  },
  robots: { 
    index: true, 
    follow: true,
  },
  alternates: {
    canonical: '/privacy',
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdatedDate = "2024-07-30"; // Example date, update as needed

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 space-y-12">
      <header className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-3 flex items-center justify-center gap-2">
          <FileLock className="w-8 h-8" /> Privacy Policy
        </h1>
        <p className="text-sm text-muted-foreground">Last Updated: {new Date(lastUpdatedDate).toLocaleDateString()}</p>
      </header>

      <Section title="1. Introduction" description="Welcome to the Innovation Hub Explorer Privacy Policy.">
        <p className="text-muted-foreground">
          This privacy policy ("Policy") describes how Innovation Hub Explorer ("we", "us", or "our") collects, uses, shares, and protects your personal information when you visit our website (the "Platform") and use our services. We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. By using the Platform, you agree to the collection and use of information in accordance with this Policy.
        </p>
      </Section>

      <Section title="2. Information We Collect" description="Details about the data we gather.">
        <p className="text-muted-foreground mb-2">We may collect the following types of information:</p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>
            <strong>Personal Information:</strong> This is information that can be used to identify you directly or indirectly. If you choose to provide it (e.g., through a contact form or future account creation), this may include your name, email address, and any messages or feedback you submit.
          </li>
          <li>
            <strong>Usage Data:</strong> We automatically collect certain information when you visit, use, or navigate the Platform. This Usage Data may include information such as your computer's Internet Protocol (IP) address, browser type, browser version, the pages of our Platform that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers, and other diagnostic data. This is generally collected through cookies and similar tracking technologies if implemented.
          </li>
          <li>
            <strong>Poll Responses:</strong> If you participate in polls on our Platform, your responses are collected. These responses are typically aggregated and anonymized for displaying community trends and are not linked to identifiable personal information unless explicitly stated otherwise at the time of collection.
          </li>
          <li>
            <strong>Cookies and Tracking Technologies:</strong> (If applicable) We may use cookies and similar tracking technologies to track activity on our Platform and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Platform.
          </li>
        </ul>
         <p className="mt-4 text-sm text-muted-foreground italic">
            Note: This Platform is primarily a prototype and demonstration. Current data collection is minimal. This section will be updated comprehensively if features involving more extensive data collection (like user accounts or personalized services) are implemented.
        </p>
      </Section>

      <Section title="3. How We Use Your Information" description="Purposes for which we use the collected data.">
         <p className="text-muted-foreground mb-2">We use the information we collect for various purposes, including:</p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>To provide, operate, and maintain our Platform.</li>
          <li>To improve, personalize, and expand our Platform and its features.</li>
          <li>To understand and analyze how you use our Platform to enhance user experience.</li>
          <li>To develop new content, services, features, and functionality.</li>
          <li>To communicate with you, such as responding to your inquiries via the contact form or providing updates if you subscribe to them (feature planned).</li>
          <li>To process your suggestions and feedback (e.g., for poll ideas).</li>
          <li>To aggregate poll data for displaying community insights.</li>
          <li>To monitor the usage of our Platform and detect, prevent, and address technical issues or potential fraud.</li>
        </ul>
      </Section>
      
      <Section title="4. Sharing Your Information" description="Circumstances under which your data might be shared.">
        <p className="text-muted-foreground mb-2">
            We value your privacy and do not sell your personal information. We may share your information in the following limited circumstances:
        </p>
         <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-2">
            <li><strong>With Service Providers:</strong> We may employ third-party companies and individuals to facilitate our Platform ("Service Providers"), provide the Platform on our behalf, perform Platform-related services, or assist us in analyzing how our Platform is used (e.g., website hosting, data analytics). These third parties have access to your Personal Information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</li>
            <li><strong>For Legal Requirements:</strong> We may disclose your Personal Information if required to do so by law or in response to valid requests by public authorities (e.g., a court or a government agency), or if we believe in good faith that such action is necessary to comply with a legal obligation, protect and defend our rights or property, prevent or investigate possible wrongdoing in connection with the Platform, protect the personal safety of users of the Platform or the public, or protect against legal liability.</li>
            <li><strong>Aggregated or Anonymized Data:</strong> We may share aggregated or anonymized information, which cannot reasonably be used to identify you, for various purposes including research, analysis, and improving our services. For example, aggregated poll results.</li>
        </ul>
        <p className="mt-4 text-sm text-muted-foreground italic">
            Currently, as a prototype, third-party sharing is minimal. This will be updated if more integrations are added.
        </p>
      </Section>

      <Section title="5. Data Security" description="Measures we take to protect your information.">
        <p className="text-muted-foreground">
          The security of your data is important to us. We strive to use commercially acceptable means to protect your Personal Information, including standard security protocols and measures. However, remember that no method of transmission over the Internet or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security. We will continue to enhance our security procedures as new technology becomes available.
        </p>
      </Section>
      
      <Section title="6. Your Privacy Rights" description="Your rights regarding your personal data.">
        <p className="text-muted-foreground mb-2">
          Depending on your jurisdiction (e.g., if you are in the European Economic Area (EEA) under GDPR or California under CCPA/CPRA), you may have certain data protection rights. These may include:
        </p>
         <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-2">
            <li>The right to access, update, or delete the information we have on you.</li>
            <li>The right of rectification if that information is inaccurate or incomplete.</li>
            <li>The right to object to our processing of your Personal Information.</li>
            <li>The right to request that we restrict the processing of your Personal Information.</li>
            <li>The right to data portability for the information you provide to us.</li>
            <li>The right to withdraw consent at any time where we relied on your consent to process your personal information.</li>
        </ul>
         <p className="mt-3 text-muted-foreground">
            If you wish to exercise any of these rights, please <Link href="/contact" className="text-primary hover:underline">contact us</Link>. Please note that we may ask you to verify your identity before responding to such requests. As this Platform is currently a prototype with limited personal data collection, the practical application of these rights will evolve with the Platform's features.
        </p>
      </Section>

      <Section title="7. Children's Privacy" description="Our policy regarding children's data.">
        <p className="text-muted-foreground">
            Our Platform does not address anyone under the age of 13 ("Children"). We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you are aware that your Child has provided us with Personal Information, please contact us. If we become aware that we have collected Personal Information from a child under age 13 without verification of parental consent, we will take steps to remove that information from our servers.
        </p>
      </Section>

      <Section title="8. Links to Other Sites" description="Third-party links and their privacy policies.">
        <p className="text-muted-foreground">
            Our Platform may contain links to other sites that are not operated by us (e.g., links in the "Explore Further" sections). If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
        </p>
      </Section>


      <Section title="9. Changes to This Privacy Policy" description="How we notify you of updates.">
        <p className="text-muted-foreground">
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
        </p>
      </Section>

      <Section title="10. Contact Us" description="How to reach us with privacy concerns.">
        <p className="text-muted-foreground">
          If you have any questions about this Privacy Policy, please <Link href="/contact" className="text-primary hover:underline">contact us</Link>.
        </p>
      </Section>
    </div>
  );
}
