import { Business, Customer, Technician, Job } from './types';

export const MOCK_BUSINESS: Business = {
  id: 'biz_1',
  name: 'TradePro Solutions'
};

export const MOCK_CUSTOMERS: Customer[] = [
  { 
    id: 'c_1', 
    serviceBusinessId: 'biz_1',
    firstName: 'John',
    lastName: 'Miller',
    name: 'John Miller', 
    phone: '555-0123', 
    address: '123 Oak St, Springfield', 
    email: 'john@example.com' 
  },
  { 
    id: 'c_2', 
    serviceBusinessId: 'biz_1',
    firstName: 'Sarah',
    lastName: 'Wilson',
    name: 'Sarah Wilson', 
    phone: '555-0456', 
    address: '456 Maple Ave, Riverside', 
    email: 'sarah@example.com' 
  },
  { 
    id: 'c_3', 
    serviceBusinessId: 'biz_1',
    firstName: 'David',
    lastName: 'Brown',
    name: 'David Brown', 
    phone: '555-0789', 
    address: '789 Pine Rd, Hill Valley', 
    email: 'david@example.com' 
  },
];

export const MOCK_TECHNICIANS: Technician[] = [
  { 
    id: 't_1', 
    serviceBusinessId: 'biz_1',
    firstName: 'Alex',
    lastName: 'Rivera',
    name: 'Alex Rivera', 
    specialty: 'Plumbing', 
    avatar: 'https://picsum.photos/seed/1/100/100',
    isActive: true,
    isDispatcher: false
  },
  { 
    id: 't_2', 
    serviceBusinessId: 'biz_1',
    firstName: 'Chris',
    lastName: 'Evans',
    name: 'Chris Evans', 
    specialty: 'Electrical', 
    avatar: 'https://picsum.photos/seed/2/100/100',
    isActive: true,
    isDispatcher: true
  },
  { 
    id: 't_3', 
    serviceBusinessId: 'biz_1',
    firstName: 'Jordan',
    lastName: 'Lee',
    name: 'Jordan Lee', 
    specialty: 'Landscaping', 
    avatar: 'https://picsum.photos/seed/3/100/100',
    isActive: true,
    isDispatcher: false
  },
];

export const MOCK_JOBS: Job[] = [
  {
    id: 'j_1',
    serviceBusinessId: 'biz_1',
    customerId: 'c_1',
    technicianId: 't_1',
    title: 'Leaky Faucet Repair',
    description: 'Kitchen sink dripping constantly. Needs assessment and fixing.',
    status: 'scheduled',
    date: new Date().toISOString().split('T')[0],
    time: '09:00 AM',
    photos: [],
    serviceAddress: '123 Oak St, Springfield'
  },
  {
    id: 'j_2',
    serviceBusinessId: 'biz_1',
    customerId: 'c_2',
    technicianId: 't_1',
    title: 'Toilet Installation',
    description: 'Install new low-flow toilet in the master bathroom.',
    status: 'scheduled',
    date: new Date().toISOString().split('T')[0],
    time: '01:00 PM',
    photos: [],
    serviceAddress: '456 Maple Ave, Riverside'
  },
  {
    id: 'j_3',
    serviceBusinessId: 'biz_1',
    customerId: 'c_3',
    technicianId: 't_2',
    title: 'Faulty Breaker',
    description: 'Main breaker keeps tripping during laundry cycles.',
    status: 'scheduled',
    date: new Date().toISOString().split('T')[0],
    time: '10:30 AM',
    photos: [],
    serviceAddress: '789 Pine Rd, Hill Valley'
  }
];
