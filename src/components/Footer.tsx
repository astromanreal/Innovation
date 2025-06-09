
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { Github, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 md:py-10 border-t bg-background/80">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left: Site Name & Short Copyright */}
          <div className="text-center sm:text-left">
            <Link href="/" className="font-semibold text-lg text-primary hover:text-primary/80 transition-colors">
              Innovation Hub Explorer
            </Link>
            <p className="text-xs text-muted-foreground mt-1">&copy; {currentYear} All rights reserved.</p>
          </div>

          {/* Right: Essential Nav Links & Social Icons */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <nav className="flex flex-wrap justify-center md:justify-end gap-x-4 sm:gap-x-5 gap-y-2 text-sm">
              <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy</Link>
              <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms</Link>
              <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link>
              <Link href="/sitemap-page" className="text-muted-foreground hover:text-primary transition-colors">Sitemap</Link>
            </nav>
            <div className="flex space-x-4">
              <a href="https://twitter.com/Sathyamsarthak" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5"/>
              </a>
              <a href="https://instagram.com/srishikharji" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5"/>
              </a>
              <a href="https://github.com/astromanreal" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5"/>
              </a>
            </div>
          </div>
        </div>
        {/* Separator is kept if there's content below it, otherwise it can be removed or conditional */}
        {/* If no text is below separator, we can remove it for a cleaner look */}
        {/* <Separator className="my-6" /> */}
        {/* The conceptualized and developed text was here and is now removed. */}
      </div>
    </footer>
  );
}
