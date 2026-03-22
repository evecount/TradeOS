"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Wand2 } from "lucide-react";
import { Technician, Customer } from "@/lib/types";
import { generateJobDescription } from "@/ai/flows/generate-job-description";
import { useToast } from "@/hooks/use-toast";

export function CreateJobModal({ technicians, customers }: { technicians: Technician[], customers: Customer[] }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [notes, setNotes] = useState("");
  const [description, setDescription] = useState("");
  const { toast } = useToast();

  async function handleEnhance() {
    if (!notes) return;
    setLoading(true);
    try {
      const result = await generateJobDescription({ briefNotes: notes });
      setDescription(result.detailedDescription);
      toast({ title: "Description Enhanced", description: "AI has expanded your notes into a full job description." });
    } catch (e) {
      toast({ variant: "destructive", title: "AI Error", description: "Could not enhance notes." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2 h-10">
          <Plus className="w-4 h-4" /> New Job
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Schedule New Job</DialogTitle>
        </DialogHeader>
        
        <div className="grid gap-6 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="customer">Customer</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select customer" />
                </SelectTrigger>
                <SelectContent>
                  {customers.map(c => <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="tech">Technician</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Assign technician" />
                </SelectTrigger>
                <SelectContent>
                  {technicians.map(t => <SelectItem key={t.id} value={t.id}>{t.name} ({t.specialty})</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Date</Label>
              <Input type="date" defaultValue={new Date().toISOString().split('T')[0]} />
            </div>
            <div className="space-y-2">
              <Label>Time</Label>
              <Input type="time" defaultValue="09:00" />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Job Title</Label>
            <Input placeholder="e.g. Toilet Leak Repair" />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label>Brief Issue Notes</Label>
              <Button 
                variant="outline" 
                size="sm" 
                className="h-7 text-xs gap-1 border-accent text-accent hover:bg-accent hover:text-white"
                onClick={handleEnhance}
                disabled={loading || !notes}
              >
                <Wand2 className="w-3 h-3" /> {loading ? "Thinking..." : "AI Enhance"}
              </Button>
            </div>
            <Input 
              placeholder="e.g. Kitchen faucet is leaking after new installation" 
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label>Full Description</Label>
            <Textarea 
              placeholder="Full details for the technician..." 
              className="min-h-[100px]"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={() => setOpen(false)}>Create Job</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}