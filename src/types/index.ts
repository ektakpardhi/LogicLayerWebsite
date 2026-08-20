/**
 * TypeScript Types for LogicLayer Solutions
 * Central type definitions used across the application
 */

// Service Type
export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription?: string;
  icon?: string;
  features?: string[];
  category?: string;
  order: number;
}

// Case Study Type
export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  client: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  industry: string;
  services: string[];
  imageUrl?: string;
  testimonial?: Testimonial;
  order: number;
}

// Industry Type
export interface Industry {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon?: string;
  solutions?: string[];
  order: number;
}

// Solution Type
export interface Solution {
  id: string;
  title: string;
  slug: string;
  description: string;
  benefits: string[];
  features: string[];
  relatedServices?: string[];
  order: number;
}

// Testimonial Type
export interface Testimonial {
  id: string;
  author: string;
  position: string;
  company: string;
  quote: string;
  imageUrl?: string;
}

// FAQ Type
export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
  order: number;
}

// Team Member Type
export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio?: string;
  imageUrl?: string;
  social?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

// Contact Form Type
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  subject?: string;
}

// Navigation Item Type
export interface NavItem {
  label: string;
  href: string;
  target?: '_blank' | '_self';
}

// Social Link Type
export interface SocialLink {
  platform: 'linkedin' | 'twitter' | 'facebook' | 'instagram' | 'github';
  url: string;
  label: string;
}

export interface MeetingType {
  id: string;
  name: string;
  description: string;
  duration: number;
  category: 'consultation' | 'discovery' | 'support';
  order: number;
}

export interface Appointment {
  id: string;
  created_at: Date;
  meeting_type_id: string;
  meeting_duration: number;
  date: string;
  start_time: string;
  end_time: string;
  timezone: string;
  first_name: string;
  last_name: string;
  email: string;
  company?: string;
  phone?: string;
  website?: string;
  job_title?: string;
  service?: string;
  project_description?: string;
  budget?: string;
  timeline?: string;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed' | 'rescheduled';
  calendar_event_id?: string;
  notes?: string;
}

export interface ServicePillar {
  id: string;
  title: string;
  description: string;
  icon?: string;
  services: Service[];
  order: number;
}
