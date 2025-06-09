import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Using Inter as a modern font example
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Toaster } from "@/components/ui/toaster"; // Import Toaster
import { ThemeProvider } from "@/components/ThemeProvider"; // Import ThemeProvider

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:9002'), // Add this line
  title: {
    default: 'Innovation Hub Explorer',
    template: '%s | Innovation Hub Explorer',
  },
  description: 'Explore the evolution of human ingenuity, technological breakthroughs, startup ecosystems, Nobel insights, and the ethics of innovation.',
  keywords: ['innovation', 'technology', 'startups', 'science', 'AI', 'ethics', 'future tech', 'research'],
  openGraph: {
    title: 'Innovation Hub Explorer',
    description: 'A dynamic platform to explore global technological advancements and innovative ideas.',
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:9002',
    siteName: 'Innovation Hub Explorer',
    images: [
      {
        url: '/og-image.png', // Replace with your actual OG image path
        width: 1200,
        height: 630,
        alt: 'Innovation Hub Explorer - Exploring Human Ingenuity',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Innovation Hub Explorer',
    description: 'Explore the evolution of human ingenuity and technological breakthroughs.',
    images: ['/twitter-image.png'], // Replace with your actual Twitter image path
    // site: '@yourtwitterhandle', // Optional: add your Twitter handle
    // creator: '@yourtwitterhandle', // Optional: add your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // verification: { // Add verification tags if needed
  //   google: 'your-google-site-verification-code',
  //   yandex: 'your-yandex-verification-code',
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
    <head>
    <meta name="google-site-verification" content="mac7aLjz9hgBPOeatEJp8fZ6RL2GRi8PeWQfgcITzFU" />
    </head>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster /> {/* Add Toaster here */}
        </ThemeProvider>
      </body>
    </html>
  );
}
