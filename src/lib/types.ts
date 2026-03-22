export type Business = {
  id: string;
  name: string;
};

export type Customer = {
  id: string;
  serviceBusinessId: string;
  firstName: string;
  lastName: string;
  name: string; // Helper for UI
  phone: string;
  address: string;
  email: string;
};

export type Technician = {
  id: string;
  serviceBusinessId: string;
  firstName: string;
  lastName: string;
  name: string; // Helper for UI
  specialty: string;
  avatar?: string;
  isDispatcher?: boolean;
  isActive: boolean;
};

export type JobStatus = 'scheduled' | 'in_progress' | 'completed' | 'cancelled';

export type Job = {
  id: string;
  serviceBusinessId: string;
  customerId: string;
  technicianId: string;
  title: string;
  description: string;
  status: JobStatus;
  date: string;
  time: string;
  photos: string[];
  workSummary?: string;
  serviceAddress: string;
};

export type Invoice = {
  id: string;
  serviceBusinessId: string;
  jobId: string;
  invoiceNumber: string;
  amount: number;
  status: 'pending' | 'paid';
  link: string;
};
