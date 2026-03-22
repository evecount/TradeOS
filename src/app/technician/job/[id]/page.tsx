"use client";

import { use, useState, useEffect } from "react";
import { MOCK_JOBS, MOCK_CUSTOMERS } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Camera, CheckCircle2, ChevronLeft, Navigation, AlertCircle, Wand2, User, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { generateWorkSummary } from "@/ai/flows/generate-work-summary";

export default function TechnicianJobDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { toast } = useToast();
  const [job, setJob] = useState(MOCK_JOBS.find(j => j.id === id));
  const [customer, setCustomer] = useState(MOCK_CUSTOMERS.find(c => c.id === job?.customerId));
  const [completed, setCompleted] = useState(job?.status === 'completed');
  const [photos, setPhotos] = useState<string[]>([]);
  const [summary, setSummary] = useState("");
  const [verification, setVerification] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [rawNotes, setRawNotes] = useState("");
  const [loadingAI, setLoadingAI] = useState(false);

  if (!job || !customer) return <div>Job not found</div>;

  const handleComplete = async () => {
    if (!summary) {
      toast({ variant: "destructive", title: "Summary Required", description: "Please add a work summary before completing." });
      return;
    }
    setCompleted(true);
    toast({ 
      title: "Job Completed", 
      description: "Invoicing workflow triggered. Customer will receive a payment link shortly." 
    });
  };

  const handlePhotoUpload = () => {
    const newPhoto = `https://picsum.photos/seed/${Math.random()}/600/400`;
    setPhotos([...photos, newPhoto]);
    toast({ title: "Evidence Captured", description: "Site photo saved for veracity check." });
  };

  const handleSummarize = async () => {
    if (!rawNotes) return;
    setLoadingAI(true);
    try {
      const evidencePhotoUri = photos.length > 0 ? photos[photos.length - 1] : undefined;
      const result = await generateWorkSummary({ rawNotes, evidencePhotoUri });
      setSummary(result.summary);
      setVerification(result.verificationLabel);
      setIsVerified(result.isVerified);
      
      if (result.isVerified) {
        toast({ title: "Veracity Verified", description: `AI Confirmed: ${result.verificationLabel}` });
      } else {
        toast({ variant: "destructive", title: "Veracity Check Failed", description: "AI could not confirm notes from photo." });
      }
    } catch (e) {
      toast({ variant: "destructive", title: "AI Error", description: "Could not perform veracity check." });
    } finally {
      setLoadingAI(false);
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="p-4 flex items-center gap-4 bg-white sticky top-0 z-10 border-b shadow-sm">
        <Button asChild variant="ghost" size="icon" className="rounded-full">
          <Link href="/technician"><ChevronLeft className="w-6 h-6" /></Link>
        </Button>
        <div>
          <h1 className="font-bold text-lg leading-tight">{job.title}</h1>
          <div className="flex items-center gap-2">
            <Badge variant={completed ? "default" : "secondary"} className="text-[10px] h-4">
              {completed ? "Completed" : "Active"}
            </Badge>
          </div>
        </div>
      </header>

      <div className="p-4 space-y-6">
        <Card className="rounded-2xl border-none shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-md flex items-center gap-2 text-primary">
              <User className="w-4 h-4" /> Customer
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-xl font-extrabold">{customer.name}</p>
              <div className="flex items-center gap-1 text-muted-foreground mt-1">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-medium">{customer.address}</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Button asChild className="btn-massive bg-accent hover:bg-accent/90">
                <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(customer.address)}`} target="_blank">
                  <Navigation className="w-6 h-6 mb-1" /> Navigate
                </a>
              </Button>
              <Button asChild variant="outline" className="btn-massive border-2 border-primary text-primary hover:bg-primary/5">
                <a href={`tel:${customer.phone}`}>
                  <Phone className="w-6 h-6 mb-1" /> Call
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <h3 className="font-bold text-lg px-1 text-primary flex items-center gap-2">
            <ShieldCheck className="w-5 h-5" /> Veracity Check
          </h3>
          
          <div className="grid grid-cols-1 gap-4">
            <Button 
              variant="outline" 
              className="btn-massive border-2 border-primary text-primary h-32 text-xl"
              onClick={handlePhotoUpload}
            >
              <Camera className="w-10 h-10 mb-2" /> Capture Evidence
            </Button>

            {photos.length > 0 && (
              <div className="grid grid-cols-3 gap-2 py-2 px-1">
                {photos.map((p, i) => (
                  <img key={i} src={p} alt="Job evidence" className="w-full aspect-square object-cover rounded-xl border-2 border-white shadow-sm" />
                ))}
              </div>
            )}
            
            <Card className="rounded-2xl border-none shadow-sm p-4">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-bold text-primary uppercase tracking-tight">Work Notes</label>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-7 text-xs gap-1 text-accent hover:bg-accent/10 font-bold"
                    onClick={handleSummarize}
                    disabled={loadingAI || !rawNotes}
                  >
                    <Wand2 className="w-3 h-3" /> {loadingAI ? "Auditing..." : "Veracity Audit"}
                  </Button>
                </div>
                <Textarea 
                  placeholder="Describe what you did..." 
                  className="bg-secondary/20 border-none min-h-[100px] rounded-xl text-lg p-4 focus-visible:ring-primary"
                  value={rawNotes}
                  onChange={(e) => setRawNotes(e.target.value)}
                />
                
                {summary && (
                  <div className={`p-4 rounded-xl border ${isVerified ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                    <div className="flex items-center justify-between mb-2">
                      <p className={`text-xs font-bold uppercase tracking-wider ${isVerified ? 'text-green-700' : 'text-red-700'}`}>
                        {isVerified ? 'Verified Work Record' : 'Evidence Mismatch'}
                      </p>
                      {verification && (
                        <Badge variant={isVerified ? "default" : "destructive"} className="text-[10px]">
                          {verification}
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm italic text-foreground leading-relaxed">{summary}</p>
                  </div>
                )}
              </div>
            </Card>

            <Button 
              className={`btn-massive h-32 text-2xl ${completed ? 'bg-green-600' : 'bg-primary shadow-xl shadow-primary/20'}`}
              onClick={handleComplete}
              disabled={completed || !isVerified}
            >
              <CheckCircle2 className="w-12 h-12 mb-2" /> 
              {completed ? "Invoice Dispatched" : isVerified ? "Finalize Job" : "Verify to Finalize"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}