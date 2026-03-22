import { Job, Customer } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, MoreVertical } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function JobCard({ job, customer }: { job: Job; customer: Customer }) {
  return (
    <Card className="hover:shadow-md transition-shadow cursor-pointer group border-l-4 border-l-primary">
      <CardContent className="p-4 space-y-3">
        <div className="flex justify-between items-start">
          <h4 className="font-bold text-primary group-hover:underline">{job.title}</h4>
          <Button variant="ghost" size="icon" className="h-6 w-6">
            <MoreVertical className="w-4 h-4" />
          </Button>
        </div>

        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-accent" />
            <span className="font-medium text-foreground">{job.time}</span>
          </div>
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{customer.address}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 shrink-0" />
            <span>{customer.phone}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <span className="text-xs font-bold text-foreground">{customer.name}</span>
          <Badge variant={job.status === 'completed' ? 'default' : 'secondary'} className="capitalize text-[10px] h-5">
            {job.status.replace('_', ' ')}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}