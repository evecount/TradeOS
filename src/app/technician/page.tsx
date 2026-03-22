import { MOCK_JOBS, MOCK_CUSTOMERS } from "@/lib/mock-data";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, ChevronRight, User } from "lucide-react";

export default function TechnicianDashboard() {
  // Simulate fetching only Alex Rivera's (t_1) jobs for today
  const myJobs = MOCK_JOBS.filter(j => j.technicianId === 't_1');
  const customers = MOCK_CUSTOMERS;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="bg-primary text-primary-foreground p-6 pt-12 pb-8 sticky top-0 z-10 shadow-lg rounded-b-3xl">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-extrabold font-headline">My Jobs</h1>
            <p className="opacity-90 font-medium">Alex Rivera</p>
          </div>
          <div className="bg-white/20 p-3 rounded-full">
            <User className="w-6 h-6" />
          </div>
        </div>
        <div className="flex items-center justify-between text-sm">
          <div className="bg-white/10 px-4 py-2 rounded-full font-bold">
            {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
          </div>
          <Badge variant="secondary" className="bg-white text-primary px-3 py-1 font-bold">
            {myJobs.length} Assigned
          </Badge>
        </div>
      </header>

      <main className="flex-1 p-5 space-y-4">
        <h2 className="text-lg font-bold text-primary/80 px-1">Today's Schedule</h2>
        
        {myJobs.length === 0 ? (
          <div className="flex flex-col items-center justify-center pt-20 text-muted-foreground">
            <p>No jobs scheduled for today.</p>
            <p>Enjoy your break!</p>
          </div>
        ) : (
          myJobs.map(job => {
            const customer = customers.find(c => c.id === job.customerId)!;
            return (
              <Link key={job.id} href={`/technician/job/${job.id}`}>
                <Card className="active:scale-95 transition-transform mb-4 border-none shadow-md rounded-2xl overflow-hidden group">
                  <CardContent className="p-0">
                    <div className="flex">
                      <div className="w-2 bg-accent" />
                      <div className="flex-1 p-5 flex items-center justify-between">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-accent font-bold">
                            <Clock className="w-4 h-4" />
                            <span>{job.time}</span>
                          </div>
                          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{job.title}</h3>
                          <div className="flex items-start gap-2 text-muted-foreground text-sm font-medium">
                            <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                            <span>{customer.address}</span>
                          </div>
                        </div>
                        <ChevronRight className="w-8 h-8 text-muted/50" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })
        )}
      </main>
      
      <footer className="p-6 text-center text-xs text-muted-foreground">
        TradeOS Field Companion v1.0. Offline Ready.
      </footer>
    </div>
  );
}