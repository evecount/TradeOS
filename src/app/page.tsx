import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, LayoutDashboard, Truck, ShieldCheck, Zap, Globe } from "lucide-react";

export default function TradeOSHome() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
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
        <section className="py-20 px-6 text-center max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-bold border border-accent/20">
            <Zap className="w-4 h-4" /> Now with AI-Powered Dispatching
          </div>
          <h1 className="text-6xl font-extrabold tracking-tight text-foreground font-headline leading-[1.1]">
            The Operating System for <span className="text-primary">Modern Trades.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            TradeOS is a multi-tenant platform that gives handymen, plumbers, and electricians their own professional portal for bookings, dispatch, and mobile execution.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Button size="lg" className="h-14 px-8 text-lg font-bold shadow-xl" asChild>
              <Link href="/dispatcher">Create Your Business Portal</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-bold" asChild>
              <Link href="/technician">Demo Field App</Link>
            </Button>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="max-w-7xl mx-auto px-6 py-20 border-t">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="bg-primary/10 w-12 h-12 rounded-2xl flex items-center justify-center text-primary">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-headline">Multi-Tenant Portals</h3>
              <p className="text-muted-foreground">Every business gets a fully isolated database, custom branding, and private dashboard.</p>
            </div>
            <div className="space-y-4">
              <div className="bg-accent/10 w-12 h-12 rounded-2xl flex items-center justify-center text-accent">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-headline">AI Orchestration</h3>
              <p className="text-muted-foreground">Messy phone notes are automatically expanded into professional job descriptions for your team.</p>
            </div>
            <div className="space-y-4">
              <div className="bg-green-500/10 w-12 h-12 rounded-2xl flex items-center justify-center text-green-600">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-headline">Frictionless Billing</h3>
              <p className="text-muted-foreground">Complete a job in the field and automatically trigger a Stripe invoice to your customer.</p>
            </div>
          </div>
        </section>

        {/* Persona Split */}
        <section className="bg-secondary/30 py-24 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
            <Card className="border-none shadow-2xl rounded-3xl overflow-hidden">
              <CardHeader className="bg-primary p-8 text-primary-foreground">
                <LayoutDashboard className="w-10 h-10 mb-4 opacity-80" />
                <CardTitle className="text-3xl font-headline">For the Dispatcher</CardTitle>
                <CardDescription className="text-primary-foreground/80 text-lg">Manage your entire empire from the office.</CardDescription>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <ul className="space-y-4 text-muted-foreground font-medium">
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Drag-and-drop daily calendar
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Automated customer CRM
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Real-time field technician tracking
                  </li>
                </ul>
                <Button asChild className="w-full h-12 rounded-xl">
                  <Link href="/dispatcher">Enter Admin Dashboard</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-2xl rounded-3xl overflow-hidden">
              <CardHeader className="bg-accent p-8 text-accent-foreground">
                <Truck className="w-10 h-10 mb-4 opacity-80" />
                <CardTitle className="text-3xl font-headline">For the Technician</CardTitle>
                <CardDescription className="text-accent-foreground/80 text-lg">Focus on the work, not the paperwork.</CardDescription>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <ul className="space-y-4 text-muted-foreground font-medium">
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" /> Massive, glove-friendly UI
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" /> Offline-first job details & evidence
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" /> AI-generated work summaries
                  </li>
                </ul>
                <Button asChild className="w-full h-12 rounded-xl bg-accent hover:bg-accent/90">
                  <Link href="/technician">Open Field Companion</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t py-12 px-6 bg-card">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 opacity-50">
            <Wrench className="w-5 h-5" />
            <span className="font-bold tracking-tight font-headline">TradeOS</span>
          </div>
          <div className="flex gap-8 text-sm font-medium text-muted-foreground">
            <a href="#" className="hover:text-primary">Privacy</a>
            <a href="#" className="hover:text-primary">Terms</a>
            <a href="#" className="hover:text-primary">Support</a>
          </div>
          <p className="text-sm text-muted-foreground">&copy; 2024 TradeOS. Built for the trades.</p>
        </div>
      </footer>
    </div>
  );
}
