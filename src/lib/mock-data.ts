import { Business, Customer, Technician, Job } from './types';

export const MOCK_BUSINESS: Business = {
  id: 'biz_1',
  name: 'TradePro Solutions'
};

export const MOCK_CUSTOMERS: Customer[] = [
  { id: 'c_1', name: 'John Miller', phone: '555-0123', address: '123 Oak St, Springfield', email: 'john@example.com' },
  { id: 'c_2', name: 'Sarah Wilson', phone: '555-0456', address: '456 Maple Ave, Riverside', email: 'sarah@example.com' },
  { id: 'c_3', name: 'David Brown', phone: '555-0789', address: '789 Pine Rd, Hill Valley', email: 'david@example.com' },
];

export const MOCK_TECHNICIANS: Technician[] = [
  { id: 't_1', name: 'Alex Rivera', specialty: 'Plumbing', avatar: 'https://picsum.photos/seed/1/100/100' },
  { id: 't_2', name: 'Chris Evans', specialty: 'Electrical', avatar: 'https://picsum.photos/seed/2/100/100' },
  { id: 't_3', name: 'Jordan Lee', specialty: 'Landscaping', avatar: 'https://picsum.photos/seed/3/100/100' },
];

export const MOCK_JOBS: Job[] = [
  {
    id: 'j_1',
    businessId: 'biz_1',
    customerId: 'c_1',
    technicianId: 't_1',
    title: 'Leaky Faucet Repair',
    description: 'Kitchen sink dripping constantly. Needs assessment and fixing.',
    status: 'scheduled',
    date: new Date().toISOString().split('T')[0],
    time: '09:00 AM',
    photos: []
  },
  {
    id: 'j_2',
    businessId: 'biz_1',
    customerId: 'c_2',
    technicianId: 't_1',
    title: 'Toilet Installation',
    description: 'Install new low-flow toilet in the master bathroom.',
    status: 'scheduled',
    date: new Date().toISOString().split('T')[0],
    time: '01:00 PM',
    photos: []
  },
  {
    id: 'j_3',
    businessId: 'biz_1',
    customerId: 'c_3',
    technicianId: 't_2',
    title: 'Faulty Breaker',
    description: 'Main breaker keeps tripping during laundry cycles.',
    status: 'scheduled',
    date: new Date().toISOString().split('T')[0],
    time: '10:30 AM',
    photos: []
  }
];