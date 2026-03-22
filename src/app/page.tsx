import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, LayoutDashboard, Truck, ShieldCheck, Zap, Globe, BrainCircuit, FileText, Banknote } from "lucide-react";

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
            <Button variant="ghost" asChild>
              <Link href="/dispatcher">Login</Link>
            </Button>
            <Button className="bg-primary hover:bg-primary/90">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 px-6 text-center max-w-5xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-bold border border-accent/20">
            <Zap className="w-4 h-4" /> Stop the Paperwork. Start the Growth.
          </div>
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight font-headline leading-[1.05]">
            Kill the Paperwork. <br />
            <span className="text-primary">Master Your Trade.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            TradeOS is the only platform where you fix it, and our AI bills it. Automated invoicing, professional CRM, and a portal that belongs entirely to your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
            <Button size="lg" className="h-14 px-10 text-lg font-bold shadow-xl" asChild>
              <Link href="/dispatcher">Launch My Business Portal</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-10 text-lg font-bold" asChild>
              <Link href="/technician">Try the Field App</Link>
            </Button>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="max-w-7xl mx-auto px-6 py-24 border-t border-b bg-secondary/10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold font-headline">Built for Action, Not Admin</h2>
            <p className="text-muted-foreground text-lg">We use Hive Intelligence to turn field evidence into paid invoices instantly.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-card p-8 rounded-3xl border shadow-sm space-y-4">
              <div className="bg-primary/10 w-12 h-12 rounded-2xl flex items-center justify-center text-primary">
                <Banknote className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-headline">Instant Invoicing</h3>
              <p className="text-muted-foreground">Stop chasing checks. Every completed job triggers a Stripe payment link to the customer automatically.</p>
            </div>
            <div className="bg-card p-8 rounded-3xl border shadow-sm space-y-4">
              <div className="bg-accent/10 w-12 h-12 rounded-2xl flex items-center justify-center text-accent">
                <BrainCircuit className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-headline">The Veracity Agent</h3>
              <p className="text-muted-foreground">Our AI audits every job via site photos. It labels the work, verifies the fix, and builds the technical summary for you.</p>
            </div>
            <div className="bg-card p-8 rounded-3xl border shadow-sm space-y-4">
              <div className="bg-green-500/10 w-12 h-12 rounded-2xl flex items-center justify-center text-green-600">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-headline">Zero Manual Notes</h3>
              <p className="text-muted-foreground">Talk to the app, show it the fix. We turn messy field observations into professional client-facing records in seconds.</p>
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
                <CardDescription className="text-primary-foreground/80 text-xl">Dispatch, schedule, and automate your back-office.</CardDescription>
              </CardHeader>
              <CardContent className="p-10 space-y-8">
                <ul className="space-y-4 text-lg font-medium">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" /> Drag-and-drop daily dispatch
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" /> AI-generated professional quotes
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" /> Multi-tenant customer CRM
                  </li>
                </ul>
                <Button asChild className="w-full h-14 rounded-2xl text-lg font-bold">
                  <Link href="/dispatcher">Enter Admin Portal</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-2xl rounded-3xl overflow-hidden group">
              <CardHeader className="bg-accent p-10 text-accent-foreground">
                <Truck className="w-12 h-12 mb-4 opacity-80" />
                <CardTitle className="text-4xl font-headline">The Field App</CardTitle>
                <CardDescription className="text-accent-foreground/80 text-xl">Massive UI for gloves-on productivity.</CardDescription>
              </CardHeader>
              <CardContent className="p-10 space-y-8">
                <ul className="space-y-4 text-lg font-medium">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent" /> Glove-friendly "Massive UI"
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent" /> AI Veracity work auditing
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent" /> Automated site evidence capture
                  </li>
                </ul>
                <Button asChild className="w-full h-14 rounded-2xl text-lg font-bold bg-accent hover:bg-accent/90">
                  <Link href="/technician">Open Field App</Link>
                </Button>
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
          <div className="flex gap-12 text-sm font-bold text-muted-foreground uppercase tracking-widest">
            <a href="#" className="hover:text-primary transition-colors">Documentation</a>
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Hive Intelligence</a>
          </div>
          <p className="text-sm text-muted-foreground font-medium">&copy; 2024 TradeOS Platform. The Hive is thinking.</p>
        </div>
      </footer>
    </div>
  );
}
