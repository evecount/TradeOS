import { MOCK_JOBS, MOCK_TECHNICIANS, MOCK_CUSTOMERS } from "@/lib/mock-data";
import { JobCard } from "./components/JobCard";
import { CreateJobModal } from "./components/CreateJobModal";
import { Calendar as CalendarIcon, Users, Settings, LogOut, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function DispatcherPage() {
  const jobs = MOCK_JOBS;
  const technicians = MOCK_TECHNICIANS;
  const customers = MOCK_CUSTOMERS;

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-card border-r flex flex-col hidden md:flex">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-primary flex items-center gap-2 font-headline">
            TradeOS
          </h2>
          <p className="text-xs text-muted-foreground">Office Management</p>
        </div>
        
        <nav className="flex-1 px-4 space-y-1">
          <Button variant="ghost" className="w-full justify-start gap-3 bg-secondary text-primary font-medium">
            <CalendarIcon className="w-5 h-5" /> Schedule
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3 text-muted-foreground hover:text-foreground">
            <Users className="w-5 h-5" /> Team
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3 text-muted-foreground hover:text-foreground">
            <Settings className="w-5 h-5" /> Settings
          </Button>
        </nav>

        <div className="p-4 border-t">
          <Button variant="ghost" className="w-full justify-start gap-3 text-muted-foreground">
            <LogOut className="w-5 h-5" /> Logout
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 border-b bg-card flex items-center justify-between px-8">
          <div className="flex items-center gap-4 flex-1 max-w-md">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search jobs, customers..." className="pl-10 h-10" />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="gap-2">
              <Filter className="w-4 h-4" /> Filter
            </Button>
            <CreateJobModal technicians={technicians} customers={customers} />
          </div>
        </header>

        <div className="flex-1 overflow-auto p-8 space-y-8">
          <div>
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl font-bold font-headline">Daily Schedule</h1>
              <div className="text-lg text-muted-foreground font-medium">
                {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {technicians.map(tech => (
                <div key={tech.id} className="space-y-4">
                  <div className="flex items-center gap-3 bg-card p-3 rounded-xl border shadow-sm">
                    <img src={tech.avatar} alt={tech.name} className="w-10 h-10 rounded-full bg-secondary" />
                    <div>
                      <p className="font-bold text-sm leading-tight">{tech.name}</p>
                      <p className="text-xs text-muted-foreground">{tech.specialty}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {jobs.filter(j => j.technicianId === tech.id).map(job => (
                      <JobCard key={job.id} job={job} customer={customers.find(c => c.id === job.customerId)!} />
                    ))}
                    {jobs.filter(j => j.technicianId === tech.id).length === 0 && (
                      <div className="border-2 border-dashed border-muted rounded-xl p-8 text-center text-muted-foreground text-sm">
                        No jobs assigned
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}