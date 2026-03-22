import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, LayoutDashboard, Truck, ShieldCheck, Zap, BellRing, CalendarCheck2, Banknote, MessageSquareText, FileText, UserPlus } from "lucide-react";
import { Button as ShadButton } from "@/components/ui/button";

export default function TradeOSHome() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="border-b bg-card/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-primary p-1.5 rounded-lg">
              <Wrench className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold tracking-tight font-headline text-primary">TradeOS</span>
          </div>
          <div className="flex items-center gap-4">
            <ShadButton variant="ghost" asChild>
              <Link href="/dispatcher">Login</Link>
            </ShadButton>
            <ShadButton className="bg-primary hover:bg-primary/90">
              Launch My Hive
            </ShadButton>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 px-6 text-center max-w-5xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-bold border border-accent/20">
            <Zap className="w-4 h-4" /> Meet Your AI Business Buddy
          </div>
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight font-headline leading-[1.05]">
            No more follow-ups <br />
            <span className="text-primary">after a long day.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            TradeOS is the AI buddy that handles the paperwork while you focus on the fix. It intakes clients from WhatsApp, manages your schedule, and bills site work automatically so you can actually go home when the job is done.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
            <ShadButton size="lg" className="h-14 px-10 text-lg font-bold shadow-xl" asChild>
              <Link href="/dispatcher">Manage My Team</Link>
            </ShadButton>
            <ShadButton size="lg" variant="outline" className="h-14 px-10 text-lg font-bold" asChild>
              <Link href="/technician">Open Field Buddy</Link>
            </ShadButton>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="max-w-7xl mx-auto px-6 py-24 border-t border-b bg-secondary/10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold font-headline">Built for the Trades</h2>
            <p className="text-muted-foreground text-lg">The "AI Buddy" doesn't just manage data; it acts for you.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-card p-8 rounded-3xl border shadow-sm space-y-4">
              <div className="bg-blue-500/10 w-12 h-12 rounded-2xl flex items-center justify-center text-blue-600">
                <MessageSquareText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-headline">Automated Intake</h3>
              <p className="text-muted-foreground">Your Buddy talks to clients on WhatsApp and Telegram, booking jobs instantly without ever double-booking your crew.</p>
            </div>
            <div className="bg-card p-8 rounded-3xl border shadow-sm space-y-4">
              <div className="bg-accent/10 w-12 h-12 rounded-2xl flex items-center justify-center text-accent">
                <BellRing className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-headline">Proactive Comms</h3>
              <p className="text-muted-foreground">Buddy warns clients if a job is running late. It keeps the customer happy while you stay focused on the fix.</p>
            </div>
            <div className="bg-card p-8 rounded-3xl border shadow-sm space-y-4">
              <div className="bg-green-500/10 w-12 h-12 rounded-2xl flex items-center justify-center text-green-600">
                <Banknote className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-headline">Zero-Friction Billing</h3>
              <p className="text-muted-foreground">Once site photos verify the fix, the Buddy sends the payment link. No more manual invoicing at midnight.</p>
            </div>
          </div>
        </section>

        {/* Persona Split */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
            <Card className="border-none shadow-2xl rounded-3xl overflow-hidden group">
              <CardHeader className="bg-primary p-10 text-primary-foreground">
                <LayoutDashboard className="w-12 h-12 mb-4 opacity-80" />
                <CardTitle className="text-4xl font-headline">The Office Hub</CardTitle>
                <CardDescription className="text-primary-foreground/80 text-xl">Grow your empire with automated dispatch.</CardDescription>
              </CardHeader>
              <CardContent className="p-10 space-y-8">
                <ul className="space-y-4 text-lg font-medium">
                  <li className="flex items-center gap-3">
                    <MessageSquareText className="w-5 h-5 text-primary" /> WhatsApp & Telegram Intake
                  </li>
                  <li className="flex items-center gap-3">
                    <CalendarCheck2 className="w-5 h-5 text-primary" /> No-Conflict Scheduling
                  </li>
                  <li className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-primary" /> AI-Generated Estimates
                  </li>
                </ul>
                <ShadButton asChild className="w-full h-14 rounded-2xl text-lg font-bold">
                  <Link href="/dispatcher">Enter Admin Portal</Link>
                </ShadButton>
              </CardContent>
            </Card>

            <Card className="border-none shadow-2xl rounded-3xl overflow-hidden group">
              <CardHeader className="bg-accent p-10 text-accent-foreground">
                <Truck className="w-12 h-12 mb-4 opacity-80" />
                <CardTitle className="text-4xl font-headline">The Field Buddy</CardTitle>
                <CardDescription className="text-accent-foreground/80 text-xl">The partner that watches your back.</CardDescription>
              </CardHeader>
              <CardContent className="p-10 space-y-8">
                <ul className="space-y-4 text-lg font-medium">
                  <li className="flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-accent" /> Multimodal Fix Verification
                  </li>
                  <li className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-accent" /> No-Tap Job Summaries
                  </li>
                  <li className="flex items-center gap-3">
                    <Banknote className="w-5 h-5 text-accent" /> Proactive Client Alerts
                  </li>
                </ul>
                <ShadButton asChild className="w-full h-14 rounded-2xl text-lg font-bold bg-accent hover:bg-accent/90">
                  <Link href="/technician">Open Field App</Link>
                </ShadButton>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t py-16 px-6 bg-card mt-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 p-2 rounded-lg">
              <Wrench className="w-6 h-6 text-primary" />
            </div>
            <span className="text-2xl font-bold tracking-tight font-headline">TradeOS</span>
          </div>
          <p className="text-sm text-muted-foreground font-medium">&copy; 2024 TradeOS. Built to keep tradespeople in the field and out of the office.</p>
        </div>
      </footer>
    </div>
  );
}