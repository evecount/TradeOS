export type Business = {
  id: string;
  name: string;
};

export type Customer = {
  id: string;
  name: string;
  phone: string;
  address: string;
  email: string;
};

export type Technician = {
  id: string;
  name: string;
  specialty: string;
  avatar?: string;
};

export type JobStatus = 'scheduled' | 'in_progress' | 'completed' | 'cancelled';

export type Job = {
  id: string;
  businessId: string;
  customerId: string;
  technicianId: string;
  title: string;
  description: string;
  status: JobStatus;
  date: string;
  time: string;
  photos: string[];
  workSummary?: string;
};

export type Invoice = {
  id: string;
  jobId: string;
  amount: number;
  status: 'pending' | 'paid';
  link: string;
};