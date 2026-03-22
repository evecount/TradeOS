"use client";

import { use, useState, useEffect } from "react";
import { MOCK_JOBS, MOCK_CUSTOMERS } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Camera, CheckCircle2, ChevronLeft, Navigation, AlertCircle, Wand2, User } from "lucide-react";
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
  const [rawNotes, setRawNotes] = useState("");
  const [loadingAI, setLoadingAI] = useState(false);

  useEffect(() => {
    const cached = localStorage.getItem(`job_${id}`);
    if (cached) {
      const parsed = JSON.parse(cached);
      setJob(parsed.job);
      setCustomer(parsed.customer);
    }
  }, [id]);

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
    // In a real app, this would use the camera. For now, a placeholder.
    const newPhoto = `https://picsum.photos/seed/${Math.random()}/600/400`;
    setPhotos([...photos, newPhoto]);
    toast({ title: "Photo Uploaded", description: "Job evidence saved for AI verification." });
  };

  const handleSummarize = async () => {
    if (!rawNotes) return;
    setLoadingAI(true);
    try {
      // Use the last photo as site evidence for multimodal AI labeling
      const evidencePhotoUri = photos.length > 0 ? photos[photos.length - 1] : undefined;
      const result = await generateWorkSummary({ rawNotes, evidencePhotoUri });
      setSummary(result.summary);
      setVerification(result.verificationLabel);
      toast({ title: "Summary Generated", description: `AI Verified: ${result.verificationLabel}` });
    } catch (e) {
      toast({ variant: "destructive", title: "AI Error", description: "Could not generate summary." });
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
              <User className="w-4 h-4" /> Customer Information
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

        <Card className="rounded-2xl border-none shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-md flex items-center gap-2 text-primary">
              <AlertCircle className="w-4 h-4" /> Job Details
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground font-medium leading-relaxed">
              {job.description}
            </p>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <h3 className="font-bold text-lg px-1 text-primary">Job Execution</h3>
          
          <div className="grid grid-cols-1 gap-4">
            <Button 
              variant="outline" 
              className="btn-massive border-2 border-primary text-primary h-32 text-xl"
              onClick={handlePhotoUpload}
            >
              <Camera className="w-10 h-10 mb-2" /> Add Site Evidence
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
                  <label className="text-sm font-bold text-primary">Field Notes</label>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-7 text-xs gap-1 text-accent hover:bg-accent/10"
                    onClick={handleSummarize}
                    disabled={loadingAI || !rawNotes}
                  >
                    <Wand2 className="w-3 h-3" /> {loadingAI ? "Verifying..." : "AI Summarize"}
                  </Button>
                </div>
                <Textarea 
                  placeholder="Notes for the summary/invoice..." 
                  className="bg-secondary/20 border-none min-h-[80px] rounded-xl text-lg p-4"
                  value={rawNotes}
                  onChange={(e) => setRawNotes(e.target.value)}
                />
                {summary && (
                  <div className="bg-accent/5 p-4 rounded-xl border border-accent/20">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-xs font-bold text-accent uppercase tracking-wider">Work Summary</p>
                      {verification && <Badge variant="outline" className="text-[10px] bg-white">{verification}</Badge>}
                    </div>
                    <p className="text-sm italic text-foreground">{summary}</p>
                  </div>
                )}
              </div>
            </Card>

            <Button 
              className={`btn-massive h-32 text-2xl ${completed ? 'bg-green-600' : 'bg-primary shadow-xl shadow-primary/20'}`}
              onClick={handleComplete}
              disabled={completed}
            >
              <CheckCircle2 className="w-12 h-12 mb-2" /> 
              {completed ? "Invoice Ready" : "Mark Complete"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
