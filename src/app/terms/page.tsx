
import { Section } from '@/components/Section';
import { ScrollText } from 'lucide-react'; 
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Read the Terms of Service for using the Innovation Hub Explorer platform.',
  keywords: ['terms of service', 'user agreement', 'legal terms', 'platform rules'],
  openGraph: {
    title: 'Terms of Service | Innovation Hub Explorer',
    description: 'Our terms and conditions for use.',
    url: '/terms',
  },
  twitter: {
    title: 'Terms of Service | Innovation Hub Explorer',
    description: 'Understand your rights and responsibilities.',
  },
  robots: { 
    index: true, 
    follow: true,
  },
  alternates: {
    canonical: '/terms',
  },
};

export default function TermsOfServicePage() {
  const lastUpdatedDate = "2024-07-30"; // Example date, update as needed

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 space-y-12">
      <header className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-3 flex items-center justify-center gap-2">
          <ScrollText className="w-8 h-8" /> Terms of Service
        </h1>
        <p className="text-sm text-muted-foreground">Last Updated: {new Date(lastUpdatedDate).toLocaleDateString()}</p>
      </header>

      <Section title="1. Acceptance of Terms" description="By using our platform, you agree to these terms.">
        <p className="text-muted-foreground">
          Welcome to Innovation Hub Explorer (the "Platform"). These Terms of Service ("Terms") govern your access to and use of the Platform and its content, features, and services (collectively, the "Services") offered by Innovation Hub Explorer ("we", "us", or "our"). Please read these Terms carefully before using the Services.
        </p>
        <p className="text-muted-foreground mt-2">
          By accessing or using the Services, you agree to be bound by these Terms and our <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>, which is incorporated herein by reference. If you do not agree to all of these Terms, then you may not access or use the Services.
        </p>
        <p className="text-muted-foreground mt-2">
          We reserve the right to update or modify these Terms at any time without prior notice. Your continued use of the Platform after any such changes constitutes your acceptance of the new Terms.
        </p>
      </Section>

      <Section title="2. Use of the Platform" description="Guidelines for using our services.">
        <h3 className="text-lg font-semibold text-foreground mb-2">2.1 Permitted Use</h3>
        <p className="text-muted-foreground mb-2">
          You agree to use the Platform only for lawful purposes, for your personal, non-commercial informational and educational use, and in accordance with these Terms. You are granted a limited, non-exclusive, non-transferable, revocable license to access and use the Platform strictly in accordance with these Terms.
        </p>
        <h3 className="text-lg font-semibold text-foreground mb-2 mt-4">2.2 Prohibited Uses</h3>
        <p className="text-muted-foreground mb-1">You agree not to use the Platform:</p>
        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
          <li>In any way that violates any applicable national or international law or regulation.</li>
          <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way.</li>
          <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter", "spam", or any other similar solicitation.</li>
          <li>To impersonate or attempt to impersonate Innovation Hub Explorer, an Innovation Hub Explorer employee, another user, or any other person or entity.</li>
          <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Platform, or which, as determined by us, may harm Innovation Hub Explorer or users of the Platform or expose them to liability.</li>
          <li>To engage in any data mining, data harvesting, data extracting or any other similar activity in relation to this Platform, or while using this Platform.</li>
          <li>To interfere with or disrupt the servers or networks connected to the Platform, or disobey any requirements, procedures, policies or regulations of networks connected to the Platform.</li>
        </ul>
         <h3 className="text-lg font-semibold text-foreground mb-2 mt-4">2.3 User Contributions (Future Feature)</h3>
         <p className="text-muted-foreground">
            The Platform may contain interactive features (such as polls or suggestion forms) that allow users to post, submit, publish, display, or transmit to other users or other persons content or materials (collectively, "User Contributions") on or through the Platform. All User Contributions must comply with the Content Standards set out in these Terms. Any User Contribution you post will be considered non-confidential and non-proprietary.
            (This section will be expanded if user accounts and extensive contribution features are added).
        </p>
      </Section>

      <Section title="3. Intellectual Property Rights" description="Our rights regarding platform content.">
        <p className="text-muted-foreground">
          The Platform and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by Innovation Hub Explorer, its licensors, or other providers of such material and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
        </p>
        <p className="text-muted-foreground mt-2">
          These Terms permit you to use the Platform for your personal, non-commercial use only. You must not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Platform, except as generally permitted by the Platform's functionality.
        </p>
        <p className="text-muted-foreground mt-2">
          Content curated from external sources (e.g., Nobel Prize summaries, links to research institutions) is presented for educational and informational purposes. Such content remains the intellectual property of its original creators and is subject to their respective licensing terms. We endeavor to provide appropriate attribution. If you believe any content infringes upon your copyright, please contact us.
        </p>
      </Section>

      <Section title="4. Disclaimers" description="Limitations of our liability.">
        <p className="text-muted-foreground">
          The information presented on or through the Platform is made available solely for general information and educational purposes. We do not warrant the accuracy, completeness, or usefulness of this information. Any reliance you place on such information is strictly at your own risk. We disclaim all liability and responsibility arising from any reliance placed on such materials by you or any other visitor to the Platform, or by anyone who may be informed of any ofits contents.
        </p>
        <p className="text-muted-foreground mt-2">
          The Platform is provided on an "AS IS" and "AS AVAILABLE" basis, without any warranties of any kind, either express or implied. Neither Innovation Hub Explorer nor any person associated with Innovation Hub Explorer makes any warranty or representation with respect to the completeness, security, reliability, quality, accuracy, or availability of the Platform.
        </p>
        <p className="text-muted-foreground mt-2">
           Without limiting the foregoing, neither Innovation Hub Explorer nor anyone associated with Innovation Hub Explorer represents or warrants that the Platform, its content, or any services or items obtained through the Platform will be accurate, reliable, error-free, or uninterrupted, that defects will be corrected, that our Platform or the server that makes it available are free of viruses or other harmful components, or that the Platform or any services or items obtained through the Platform will otherwise meet your needs or expectations.
        </p>
         <p className="text-muted-foreground mt-2">
          To the fullest extent provided by law, Innovation Hub Explorer hereby disclaims all warranties of any kind, whether express or implied, statutory, or otherwise, including but not limited to any warranties of merchantability, non-infringement, and fitness for particular purpose.
        </p>
      </Section>
      
      <Section title="5. Limitation of Liability" description="Our responsibility for damages.">
         <p className="text-muted-foreground">
          To the fullest extent provided by law, in no event will Innovation Hub Explorer, its affiliates, or their licensors, service providers, employees, agents, officers, or directors be liable for damages of any kind, under any legal theory, arising out of or in connection with your use, or inability to use, the Platform, any websites linked to it, any content on the Platform or such other websites, including any direct, indirect, special, incidental, consequential, or punitive damages, including but not limited to, personal injury, pain and suffering, emotional distress, loss of revenue, loss of profits, loss of business or anticipated savings, loss of use, loss of goodwill, loss of data, and whether caused by tort (including negligence), breach of contract, or otherwise, even if foreseeable.
        </p>
      </Section>

       <Section title="6. Indemnification" description="Your agreement to protect us from claims.">
        <p className="text-muted-foreground">
          You agree to defend, indemnify, and hold harmless Innovation Hub Explorer, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the Platform, including, but not limited to, your User Contributions (if applicable), any use of the Platform's content, services, and products other than as expressly authorized in these Terms.
        </p>
      </Section>

      <Section title="7. Governing Law and Jurisdiction" description="Legal framework for these terms.">
        <p className="text-muted-foreground">
          All matters relating to the Platform and these Terms and any dispute or claim arising therefrom or related thereto (in each case, including non-contractual disputes or claims), shall be governed by and construed in accordance with the internal laws of [Specify Jurisdiction, e.g., the State of California, USA] without giving effect to any choice or conflict of law provision or rule.
        </p>
        <p className="text-muted-foreground mt-2">
            Any legal suit, action, or proceeding arising out of, or related to, these Terms or the Platform shall be instituted exclusively in the federal courts of [Specify Jurisdiction] or the courts of [Specify Jurisdiction]. You waive any and all objections to the exercise of jurisdiction over you by such courts and to venue in such courts.
        </p>
         <p className="mt-4 text-sm text-muted-foreground italic">
           (Note: The jurisdiction should be determined based on the legal location/registration of the entity operating the Platform. This is a placeholder.)
        </p>
      </Section>

      <Section title="8. Termination" description="Our right to suspend or terminate access.">
        <p className="text-muted-foreground">
            We may terminate or suspend your access to all or part of the Platform immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms. All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
        </p>
      </Section>

      <Section title="9. Severability and Waiver" description="How invalidity of parts of the terms affects the rest.">
         <p className="text-muted-foreground">
            If any provision of these Terms is held by a court or other tribunal of competent jurisdiction to be invalid, illegal, or unenforceable for any reason, such provision shall be eliminated or limited to the minimum extent such that the remaining provisions of the Terms will continue in full force and effect.
        </p>
        <p className="text-muted-foreground mt-2">
            No waiver by Innovation Hub Explorer of any term or condition set out in these Terms shall be deemed a further or continuing waiver of such term or condition or a waiver of any other term or condition, and any failure of Innovation Hub Explorer to assert a right or provision under these Terms shall not constitute a waiver of such right or provision.
        </p>
      </Section>


      <Section title="10. Changes to Terms of Service" description="How we update these terms.">
        <p className="text-muted-foreground">
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
        </p>
        <p className="text-muted-foreground mt-2">
            By continuing to access or use our Platform after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, in whole or in part, please stop using the website and the Services.
        </p>
      </Section>

      <Section title="11. Contact Us" description="How to reach us regarding these terms.">
        <p className="text-muted-foreground">
          If you have any questions about these Terms of Service, please <Link href="/contact" className="text-primary hover:underline">contact us</Link>.
        </p>
      </Section>
    </div>
  );
}
