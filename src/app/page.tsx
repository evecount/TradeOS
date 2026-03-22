import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, LayoutDashboard, Truck } from "lucide-react";

export default function TradeOSHome() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-background">
      <div className="w-full max-w-4xl space-y-12">
        <header className="text-center space-y-4">
          <div className="flex justify-center mb-6">
            <div className="bg-primary p-3 rounded-2xl shadow-lg">
              <Wrench className="w-12 h-12 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight text-primary font-headline">TradeOS</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The white-label platform for reliability and efficiency in the trades.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-2 hover:border-primary transition-all group overflow-hidden shadow-sm">
            <CardHeader className="bg-secondary/30">
              <div className="flex items-center gap-3">
                <LayoutDashboard className="w-6 h-6 text-primary" />
                <CardTitle className="font-headline">Dispatcher Dashboard</CardTitle>
              </div>
              <CardDescription>Manage jobs, customers, and technicians from the office.</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3 mb-8 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">• Drag-and-drop daily calendar</li>
                <li className="flex items-center gap-2">• Customer CRM & history</li>
                <li className="flex items-center gap-2">• Real-time status tracking</li>
              </ul>
              <Button asChild className="w-full h-12 text-md">
                <Link href="/dispatcher">Enter Dispatcher Portal</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-accent transition-all group overflow-hidden shadow-sm">
            <CardHeader className="bg-accent/10">
              <div className="flex items-center gap-3">
                <Truck className="w-6 h-6 text-accent" />
                <CardTitle className="font-headline">Technician View</CardTitle>
              </div>
              <CardDescription>Frictionless, mobile-first experience for workers in the field.</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3 mb-8 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">• "My Jobs Today" focus</li>
                <li className="flex items-center gap-2">• Massive touch-friendly UI</li>
                <li className="flex items-center gap-2">• Offline-first job details</li>
              </ul>
              <Button asChild variant="default" className="w-full h-12 text-md bg-accent hover:bg-accent/90">
                <Link href="/technician">Go to Field App</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <footer className="text-center text-muted-foreground text-sm">
          &copy; 2024 TradeOS. Professional service management.
        </footer>
      </div>
    </div>
  );
}