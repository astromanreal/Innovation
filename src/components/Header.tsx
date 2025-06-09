
'use client'; 

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import {
  BrainCircuit, Menu, Info, Settings, User, Mail, X, Home, Cpu, Globe, Award, ShieldCheck, MapPin,
  Brain as BrainIcon, BookOpen, HelpCircle as PollIcon, Wrench, FileText, TrendingUp, ExternalLink, MoreHorizontal, ChevronDown
} from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetFooter, SheetClose } from './ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";
import { ThemeToggle } from './ThemeToggle';
import { Separator } from './ui/separator';
import { cn } from '@/lib/utils';
import { ScrollArea } from './ui/scroll-area';
import { usePathname } from 'next/navigation';

export function Header() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const mainNavItems = [
    { name: 'Home', href: '/', icon: <Home className="w-5 h-5" /> },
    { name: 'Domains', href: '/domains', icon: <Cpu className="w-5 h-5" /> },
    { name: 'Tools & Platforms', href: '/tools', icon: <Wrench className="w-5 h-5" /> },
    { name: 'Startup Hubs', href: '/startup', icon: <Globe className="w-5 h-5" /> },
    { name: 'Nobel Insights', href: '/nobel', icon: <Award className="w-5 h-5" /> },
    { name: 'Tech Ethics', href: '/technology', icon: <ShieldCheck className="w-5 h-5" /> },
    { name: 'Innovation Tracker', href: '/innovation', icon: <MapPin className="w-5 h-5" /> },
    { name: 'AI Consciousness', href: '/consciousness', icon: <BrainIcon className="w-5 h-5" /> },
    { name: 'Future Forecasts', href: '/future-forecasts', icon: <TrendingUp className="w-5 h-5" /> },
    { name: 'Research Library', href: '/research', icon: <BookOpen className="w-5 h-5" /> },
    { name: 'Quick Polls', href: '/poll', icon: <PollIcon className="w-5 h-5" /> },
  ];

  const desktopQuickAccessLinkNames = [
    'Domains',
    'Startup Hubs',
    'Tech Ethics',
    'Research Library',
    'Tools & Platforms',
  ];

  const desktopVisibleLinks = mainNavItems.filter(item => desktopQuickAccessLinkNames.includes(item.name));
  const moreDropdownItems = mainNavItems.filter(item => !desktopQuickAccessLinkNames.includes(item.name));

  const utilityIconNavItems = [
    { name: 'Contact', href: '/contact', icon: <Mail className="w-5 h-5" /> },
    { name: 'Profile', href: '/profile', icon: <User className="w-5 h-5" /> },
    { name: 'Settings', href: '/settings', icon: <Settings className="w-5 h-5" /> },
  ];

  const mobileSheetSecondaryNavItems = [
      { name: 'Profile', href: '/profile', icon: <User className="w-5 h-5" /> },
      { name: 'About / Vision', href: '/about', icon: <Info className="w-5 h-5" /> },
      { name: 'Contact', href: '/contact', icon: <Mail className="w-5 h-5" /> },
      { name: 'Settings', href: '/settings', icon: <Settings className="w-5 h-5" /> },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="mr-4 flex items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <BrainCircuit className="h-7 w-7 text-primary group-hover:animate-pulse" />
            <span className="font-bold text-lg hidden sm:inline-block group-hover:text-primary transition-colors">
              Innovation Hub
            </span>
             <span className="font-bold text-lg sm:hidden group-hover:text-primary transition-colors">
              IHE
            </span>
          </Link>
        </div>

        <nav className="hidden lg:flex items-center space-x-1 text-sm font-medium">
          {desktopVisibleLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "transition-colors hover:text-primary px-3 py-2 rounded-md text-foreground/80",
                mounted && pathname === item.href && "text-primary font-semibold bg-accent/50"
              )}
            >
             {item.name}
            </Link>
          ))}
          {moreDropdownItems.length > 0 && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="px-3 py-2 text-foreground/80 hover:text-primary">
                  More <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                {moreDropdownItems.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-2 w-full",
                        mounted && pathname === item.href && "text-primary font-semibold"
                      )}
                    >
                      {React.cloneElement(item.icon, { className: "w-4 h-4" })}
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </nav>

         <div className="flex items-center space-x-2">
             <div className="hidden lg:flex items-center space-x-1">
                 {utilityIconNavItems.map((item) => (
                    <Link key={item.name} href={item.href}>
                        <Button
                          variant="ghost"
                          size="icon"
                          aria-label={item.name}
                          className={cn(
                            "text-muted-foreground hover:text-primary",
                            mounted && pathname === item.href && "text-primary bg-accent"
                          )}
                        >
                            {item.icon}
                        </Button>
                    </Link>
                ))}
             </div>
            <ThemeToggle />
            <div className="lg:hidden">
                 <Sheet>
                     <SheetTrigger asChild>
                        <Button variant="outline" size="icon">
                             <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle Menu</span>
                        </Button>
                     </SheetTrigger>
                     <SheetContent side="left" className="flex flex-col w-[300px] sm:w-[350px] p-0">
                        <SheetHeader className="p-4 border-b">
                            <SheetTitle className="flex items-center gap-2 text-lg">
                                 <BrainCircuit className="h-6 w-6 text-primary" />
                                 Innovation Hub Explorer
                             </SheetTitle>
                        </SheetHeader>
                        <ScrollArea className="flex-grow">
                         <nav className="flex flex-col p-4 space-y-1">
                            {mainNavItems.map((item) => (
                               <SheetClose key={item.name} asChild>
                                    <Link
                                        href={item.href}
                                        className={cn(
                                            "text-base font-medium transition-colors hover:text-primary flex items-center gap-3 py-2.5 px-3 rounded-md text-foreground/90 hover:bg-accent/50",
                                            mounted && pathname === item.href && "text-primary bg-accent font-semibold"
                                        )}
                                    >
                                        {item.icon}
                                        {item.name}
                                    </Link>
                                </SheetClose>
                             ))}
                             <Separator className="my-3" />
                              <p className="px-3 py-2 text-sm font-semibold text-muted-foreground">Account & More</p>
                              {mobileSheetSecondaryNavItems.map((item) => (
                                <SheetClose key={item.name} asChild>
                                    <Link
                                        href={item.href}
                                        className={cn(
                                            "text-base font-medium transition-colors hover:text-primary flex items-center gap-3 py-2.5 px-3 rounded-md text-foreground/90 hover:bg-accent/50",
                                             mounted && pathname === item.href && "text-primary bg-accent font-semibold"
                                        )}
                                    >
                                        {item.icon} {item.name}
                                    </Link>
                                </SheetClose>
                             ))}
                        </nav>
                        </ScrollArea>
                         <SheetFooter className="p-4 border-t">
                            <div className="flex justify-between items-center w-full">
                                 <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} IHE</p>
                            </div>
                        </SheetFooter>
                     </SheetContent>
                </Sheet>
            </div>
         </div>
      </div>
    </header>
  );
}
    