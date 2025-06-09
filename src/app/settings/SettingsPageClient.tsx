
'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useToast } from '@/hooks/use-toast';
import { Settings, Palette, UserCircle, Shield, Bell, TestTubeDiagonal, Wand2, Save, RotateCcw, CheckCircle, Sun, Moon, Laptop, AlertCircle, PlusCircle, Trash2, Accessibility } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const presetThemes = [
  { name: 'System', value: 'system', icon: <Laptop className="w-4 h-4" />, description: "Matches your OS preference." },
  { name: 'Light', value: 'light', icon: <Sun className="w-4 h-4" />, description: "Classic light interface." },
  { name: 'Dark', value: 'dark', icon: <Moon className="w-4 h-4" />, description: "Easy on the eyes." },
  { name: 'Cosmic Blue', value: 'theme-cosmic-blue', colors: ['bg-[#0D1B2A]', 'bg-[#1B263B]', 'bg-[#415A77]', 'bg-[#778DA9]', 'bg-[#E0E1DD]'], description: "Deep navy & cyan accents." },
  { name: 'Eco Green', value: 'theme-eco-green', colors: ['bg-[#F0F4EF]', 'bg-[#A9B4A2]', 'bg-[#6A7B53]', 'bg-[#4E5A37]', 'bg-[#3B422B]'], description: "Earthy greens & beige." },
  { name: 'Solar Flare', value: 'theme-solar-flare', colors: ['bg-[#221C1A]', 'bg-[#4A3B31]', 'bg-[#E85D04]', 'bg-[#F48C06]', 'bg-[#FAA307]'], description: "Gold, deep red & charcoal." },
  { name: 'Quantum Purple', value: 'theme-quantum-purple', colors: ['bg-[#1A101F]', 'bg-[#3C2A4D]', 'bg-[#6D2F9C]', 'bg-[#A040A8]', 'bg-[#D7BDE2]'], description: "Violet & dark gray." },
  { name: 'Minimalist White', value: 'theme-minimalist-white', colors: ['bg-[#FFFFFF]', 'bg-[#F8F9FA]', 'bg-[#E9ECEF]', 'bg-[#DEE2E6]', 'bg-[#CED4DA]'], description: "Soft white & muted grays." },
];

export default function SettingsPageClient() {
  const { theme, setTheme } = useTheme();
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);

  // User Preferences State
  const [interests, setInterests] = useState<string[]>(['AI', 'Bioethics', 'Quantum Computing']);
  const [newInterest, setNewInterest] = useState('');
  const [defaultLandingPage, setDefaultLandingPage] = useState('/home');
  const [contentLanguage, setContentLanguage] = useState('en');

  // Privacy & Data State
  const [allowDataCollection, setAllowDataCollection] = useState(true);

  // Notifications State
  const [newContentNotifications, setNewContentNotifications] = useState(true);
  const [weeklyDigest, setWeeklyDigest] = useState(false);
  const [pollAlerts, setPollAlerts] = useState(true);

  // Experimental State
  const [enableBetaFeatures, setEnableBetaFeatures] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleAddInterest = () => {
    if (newInterest.trim() && !interests.includes(newInterest.trim())) {
      setInterests([...interests, newInterest.trim()]);
      setNewInterest('');
      toast({ title: "Interest Added", description: `"${newInterest.trim()}" added to your interests.` });
    } else if (interests.includes(newInterest.trim())) {
      toast({ title: "Interest Exists", description: `"${newInterest.trim()}" is already in your interests.`, variant: "destructive" });
    }
  };

  const handleRemoveInterest = (interestToRemove: string) => {
    setInterests(interests.filter(interest => interest !== interestToRemove));
    toast({ title: "Interest Removed", description: `"${interestToRemove}" removed from your interests.` });
  };

  const handleSaveSettings = () => {
    toast({ title: "Settings Saved (Conceptual)", description: "Your preferences have been noted. Full saving functionality is planned." });
  };

  const handleResetSettings = () => {
    setInterests(['AI', 'Bioethics', 'Quantum Computing']);
    setDefaultLandingPage('/home');
    setContentLanguage('en');
    setAllowDataCollection(true);
    setNewContentNotifications(true);
    setWeeklyDigest(false);
    setPollAlerts(true);
    setEnableBetaFeatures(false);
    setTheme('system');
    toast({ title: "Settings Reset (Conceptual)", description: "Preferences have been reset to their defaults. Full reset functionality is planned." });
  };
  
  const currentThemeObject = presetThemes.find(pt => pt.value === theme) || presetThemes.find(pt => pt.value === 'system');

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 space-y-12">
      <header className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-3 flex items-center justify-center gap-2">
          <Settings className="w-8 h-8" /> Application Settings
        </h1>
        <p className="text-lg text-muted-foreground">Personalize and control your Innovation Hub Explorer experience.</p>
      </header>

      <Tabs defaultValue="theme" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mb-8">
          <TabsTrigger value="theme" className="text-xs sm:text-sm"><Palette className="w-4 h-4 mr-1.5 sm:mr-2" />Theme &amp; Display</TabsTrigger>
          <TabsTrigger value="preferences" className="text-xs sm:text-sm"><UserCircle className="w-4 h-4 mr-1.5 sm:mr-2" />Preferences</TabsTrigger>
          <TabsTrigger value="privacy" className="text-xs sm:text-sm"><Shield className="w-4 h-4 mr-1.5 sm:mr-2" />Privacy</TabsTrigger>
          <TabsTrigger value="notifications" className="text-xs sm:text-sm"><Bell className="w-4 h-4 mr-1.5 sm:mr-2" />Notifications</TabsTrigger>
          <TabsTrigger value="advanced" className="text-xs sm:text-sm"><TestTubeDiagonal className="w-4 h-4 mr-1.5 sm:mr-2" />Advanced</TabsTrigger>
        </TabsList>

        {/* Theme & Display Tab */}
        <TabsContent value="theme">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Palette className="w-5 h-5 text-primary"/>Theme &amp; Display Settings</CardTitle>
              <CardDescription>Customize the appearance of the application. Changes are applied instantly.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label className="text-base font-semibold">Mode</Label>
                <div className="mt-2 flex items-center gap-4 p-4 border rounded-lg bg-muted/50">
                  <p className="text-sm text-muted-foreground flex-1">Select your preferred interface mode. "System" will match your operating system's settings.</p>
                  {mounted && <ThemeToggle />}
                </div>
              </div>
              <div>
                <Label className="text-base font-semibold">Preset Color Themes</Label>
                <p className="text-sm text-muted-foreground mt-1 mb-3">Choose from our curated color palettes. Applied site-wide.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {presetThemes.filter(pt => !['light', 'dark', 'system'].includes(pt.value)).map((pt) => (
                    <Button
                      key={pt.value}
                      variant="outline"
                      onClick={() => setTheme(pt.value)}
                      className={cn(
                        "h-auto p-4 flex flex-col items-start justify-between hover:shadow-md transition-shadow relative",
                        mounted && theme === pt.value && "ring-2 ring-primary ring-offset-2 ring-offset-background"
                      )}
                      disabled={!mounted}
                    >
                      <div className="flex items-center justify-between w-full mb-2">
                        <span className="font-semibold text-sm">{pt.name}</span>
                        {mounted && theme === pt.value && <CheckCircle className="w-5 h-5 text-primary" />}
                      </div>
                      <div className="flex space-x-1 w-full h-3 mb-2">
                        {pt.colors?.map((color, index) => (
                          <div key={index} className={`flex-1 h-full rounded-sm ${color}`} />
                        ))}
                      </div>
                      <p className="text-xs text-muted-foreground text-left w-full">{pt.description}</p>
                    </Button>
                  ))}
                </div>
              </div>
               <Card className="mt-4 bg-secondary/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium flex items-center gap-1.5">
                    <Wand2 className="w-4 h-4 text-accent"/> Current Theme Preview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {mounted ? (
                    <>
                      <p className="text-sm">
                        You are currently viewing the <strong className="text-primary">{currentThemeObject?.name || "System Default"}</strong> theme.
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">{currentThemeObject?.description}</p>
                    </>
                  ) : (
                    <p className="text-sm text-muted-foreground">Loading theme preview...</p>
                  )}
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </TabsContent>

        {/* User Preferences Tab */}
        <TabsContent value="preferences">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><UserCircle className="w-5 h-5 text-primary"/>User Preferences</CardTitle>
              <CardDescription>Tailor content and navigation to your interests.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="interests" className="text-base font-semibold">Personalized Interests</Label>
                <p className="text-sm text-muted-foreground mt-1 mb-2">Help us recommend relevant content by adding your key areas of interest.</p>
                <div className="flex gap-2 mb-3">
                  <Input
                    id="interests"
                    value={newInterest}
                    onChange={(e) => setNewInterest(e.target.value)}
                    placeholder="e.g., AI Ethics, Quantum Entanglement"
                    className="flex-grow"
                  />
                  <Button onClick={handleAddInterest}><PlusCircle className="w-4 h-4 mr-1.5"/>Add</Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {interests.map(interest => (
                    <Badge key={interest} variant="secondary" className="py-1 px-2 text-sm">
                      {interest}
                      <Button variant="ghost" size="icon" className="ml-1.5 h-4 w-4 p-0" onClick={() => handleRemoveInterest(interest)}>
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </Badge>
                  ))}
                </div>
              </div>
              <Separator/>
              <div>
                <Label htmlFor="landing-page" className="text-base font-semibold">Default Landing Page</Label>
                <p className="text-sm text-muted-foreground mt-1 mb-2">Choose which page you see first when you visit.</p>
                <Select value={defaultLandingPage} onValueChange={setDefaultLandingPage}>
                  <SelectTrigger id="landing-page" className="w-full sm:w-[280px]">
                    <SelectValue placeholder="Select default page" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="/">Homepage</SelectItem>
                    <SelectItem value="/research">Research Library</SelectItem>
                    <SelectItem value="/domains">Technology Domains</SelectItem>
                    <SelectItem value="/consciousness">AI Consciousness</SelectItem>
                    <SelectItem value="/future-forecasts">Future Forecasts</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Separator/>
              <div>
                <Label htmlFor="language-select" className="text-base font-semibold">Content Language</Label>
                 <p className="text-sm text-muted-foreground mt-1 mb-2">Select your preferred language for UI and content.</p>
                <Select value={contentLanguage} onValueChange={setContentLanguage} disabled>
                  <SelectTrigger id="language-select" className="w-full sm:w-[280px]">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English (US)</SelectItem>
                    <SelectItem value="es" disabled>Español (Planned)</SelectItem>
                    <SelectItem value="fr" disabled>Français (Planned)</SelectItem>
                  </SelectContent>
                </Select>
                 <p className="text-xs text-muted-foreground mt-2 italic">Multilingual support is planned for future updates.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Privacy & Data Controls Tab */}
        <TabsContent value="privacy">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Shield className="w-5 h-5 text-primary"/>Privacy &amp; Data Controls</CardTitle>
              <CardDescription>Manage your data and privacy settings.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between p-4 border rounded-lg bg-muted/50">
                <div>
                  <Label htmlFor="data-collection" className="text-base font-semibold">Allow Data Collection &amp; Analytics</Label>
                  <p className="text-sm text-muted-foreground">Help us improve by allowing anonymous usage analytics.</p>
                </div>
                <Switch id="data-collection" checked={allowDataCollection} onCheckedChange={setAllowDataCollection} />
              </div>
              <Button variant="outline" onClick={() => toast({ title: "Action Not Implemented", description: "Clearing browsing history functionality is planned." })}>Clear Browsing History (Conceptual)</Button>
              <Button variant="outline" onClick={() => toast({ title: "Action Not Implemented", description: "Data export functionality is planned." })}>Export Personal Data (Conceptual)</Button>
              <p className="text-sm text-muted-foreground">For more details, please see our <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.</p>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications & Updates Tab */}
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Bell className="w-5 h-5 text-primary"/>Notifications &amp; Updates</CardTitle>
              <CardDescription>Manage how you receive updates from us.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between p-4 border rounded-lg bg-muted/50">
                <div>
                  <Label htmlFor="new-content-notifications" className="text-base font-semibold">New Content Notifications</Label>
                  <p className="text-sm text-muted-foreground">Get notified about major new articles or features.</p>
                </div>
                <Switch id="new-content-notifications" checked={newContentNotifications} onCheckedChange={setNewContentNotifications} />
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg bg-muted/50">
                <div>
                  <Label htmlFor="weekly-digest" className="text-base font-semibold">Weekly Digest Email</Label>
                  <p className="text-sm text-muted-foreground">Receive a summary of top content and updates.</p>
                </div>
                <Switch id="weekly-digest" checked={weeklyDigest} onCheckedChange={setWeeklyDigest} />
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg bg-muted/50">
                <div>
                  <Label htmlFor="poll-alerts" className="text-base font-semibold">Poll &amp; Quiz Alerts</Label>
                  <p className="text-sm text-muted-foreground">Be informed when new interactive polls or quizzes are available.</p>
                </div>
                <Switch id="poll-alerts" checked={pollAlerts} onCheckedChange={setPollAlerts} />
              </div>
              <p className="text-xs text-muted-foreground italic">Email notification functionalities require backend setup and are currently conceptual.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Advanced Tab */}
        <TabsContent value="advanced">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><TestTubeDiagonal className="w-5 h-5 text-primary"/>Advanced Settings</CardTitle>
              <CardDescription>Access experimental features and accessibility options.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <Card className="bg-secondary/50">
                    <CardHeader>
                        <CardTitle className="text-lg font-semibold flex items-center gap-2"><Wand2 className="w-5 h-5 text-accent"/>Experimental &amp; Beta Features</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center justify-between p-3 border rounded-lg bg-background">
                            <div>
                            <Label htmlFor="beta-features" className="text-base font-medium">Enable Beta Features</Label>
                            <p className="text-sm text-muted-foreground">Try out new features before they are widely released. May be unstable.</p>
                            </div>
                            <Switch id="beta-features" checked={enableBetaFeatures} onCheckedChange={setEnableBetaFeatures} />
                        </div>
                        <p className="text-xs text-muted-foreground mt-3 italic">Specific beta features will be listed here when available.</p>
                    </CardContent>
                </Card>

                <Card className="bg-secondary/50">
                    <CardHeader>
                        <CardTitle className="text-lg font-semibold flex items-center gap-2"><Accessibility className="w-5 h-5 text-accent"/>Accessibility &amp; UX Tweaks</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="p-3 border rounded-lg bg-background">
                            <Label className="text-base font-medium">Font Size Adjustment</Label>
                            <p className="text-sm text-muted-foreground">Customize text size for readability. (Planned Feature)</p>
                        </div>
                        <div className="p-3 border rounded-lg bg-background">
                            <Label className="text-base font-medium">Reduced Motion Toggle</Label>
                            <p className="text-sm text-muted-foreground">Minimize animations and transitions. (Planned Feature)</p>
                        </div>
                        <div className="p-3 border rounded-lg bg-background">
                            <Label className="text-base font-medium">High Contrast Mode</Label>
                            <p className="text-sm text-muted-foreground">Improve visibility for low-vision users. (Planned Feature)</p>
                        </div>
                    </CardContent>
                </Card>
                
                <Card className="bg-destructive/10 border-destructive">
                    <CardHeader>
                         <CardTitle className="text-lg font-semibold flex items-center gap-2 text-destructive-foreground"><AlertCircle className="w-5 h-5"/>Developer Options</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-destructive-foreground/80 mb-3">These options are for development and testing purposes. Modifying them may impact application stability.</p>
                        <Button variant="destructive" onClick={() => toast({ title: "Developer Action", description: "Conceptual developer action triggered.", variant: "destructive"})}>Trigger Test Error (Conceptual)</Button>
                    </CardContent>
                </Card>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-12 flex flex-col sm:flex-row justify-end gap-4">
        <Button variant="outline" onClick={handleResetSettings} className="w-full sm:w-auto">
          <RotateCcw className="w-4 h-4 mr-2"/>Reset to Defaults
        </Button>
        <Button onClick={handleSaveSettings} className="w-full sm:w-auto">
          <Save className="w-4 h-4 mr-2"/>Save All Settings
        </Button>
      </div>
    </div>
  );
}
