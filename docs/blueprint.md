# **App Name**: TradeOS

## Core Features:

- Dispatcher Dashboard & Job Management: An authenticated web portal for office managers to create and schedule new jobs on a daily calendar, assign them to technicians, and link them to customer contact details and addresses.
- Technician Daily Job List (PWA): A hyper-simplified, mobile-first Progressive Web App (PWA) view for field technicians, showing only their assigned jobs for the current day upon login.
- Frictionless Technician Job Workflow: Within a job view, technicians can access massive buttons to 'Navigate' (opens Google Maps), upload job-specific 'Photos' to Firebase Storage, and 'Mark Complete'.
- Automated Driveway Invoicing & Payments: When a job is marked complete, a Python Flask backend function instantly generates a detailed invoice from job specifics and sends an SMS/Email to the customer with a secure 'Pay Now' link (integrated with Stripe).
- Offline Job Detail Access: Implement basic client-side caching on the technician frontend to ensure job details can be viewed even without active cell service.
- AI-powered Work Description Helper: A generative AI tool assists technicians by suggesting concise, professional summaries of work performed or issues found, based on their raw notes, to streamline invoicing descriptions and customer communication.

## Style Guidelines:

- Light color scheme to enhance clarity and readability, ideal for use in various lighting conditions for field personnel and office staff.
- Primary brand color: A grounded and professional blue (#457AA1) chosen for its association with reliability and trust, serving as the dominant color for interactive elements and branding.
- Background color: A subtly desaturated and very light blue-gray (#F0F3F4) to provide a clean and unobtrusive canvas for content, maintaining visual harmony with the primary color.
- Accent color: A vibrant, darker violet-blue (#5762DB) used strategically for call-to-action buttons, key highlights, and to draw attention to critical information.
- Headline and Body font: 'Inter' (sans-serif), selected for its modern, neutral, and highly readable characteristics, optimizing accessibility and legibility across all screen sizes and ensuring clarity for non-technical users.
- Use bold, clear, and easily recognizable line icons (e.g., wrench, calendar, map pin, camera) that visually communicate actions and statuses, consistent with large UI elements for touch-based interactions.
- Mobile-first layout design for technicians, featuring spacious interfaces, ample whitespace, and generously sized, finger-friendly buttons and touch targets to minimize errors in the field. The dispatcher dashboard will maintain a clear, functional web layout.
- Subtle and functional animations will provide immediate feedback for user actions such as button presses, job status updates, and successful photo uploads, improving perceived responsiveness without distraction.