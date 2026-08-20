/**
 * Meeting Types for Scheduling System
 * These can be easily changed or pulled from a CMS later
 */

import { MeetingType } from '@/types';

export const MEETING_TYPES: MeetingType[] = [
  {
    id: 'technology-consultation',
    name: 'Technology Consultation',
    description: 'Discuss your technology challenges, roadmap, architecture, or modernization plans.',
    duration: 30,
    category: 'consultation',
    order: 1,
  },
  {
    id: 'software-development-consultation',
    name: 'Software Development Consultation',
    description: 'Discuss a new application, SaaS product, website, portal, API, or software platform.',
    duration: 30,
    category: 'consultation',
    order: 2,
  },
  {
    id: 'ai-automation-consultation',
    name: 'AI & Automation Consultation',
    description: 'Explore opportunities to use AI and automation to improve business processes.',
    duration: 30,
    category: 'consultation',
    order: 3,
  },
  {
    id: 'qa-test-automation-consultation',
    name: 'QA & Test Automation Consultation',
    description: 'Discuss software quality, testing strategy, automation, and release confidence.',
    duration: 30,
    category: 'consultation',
    order: 4,
  },
  {
    id: 'cloud-devops-consultation',
    name: 'Cloud & DevOps Consultation',
    description: 'Discuss cloud migration, DevOps, CI/CD, infrastructure, or application modernization.',
    duration: 30,
    category: 'consultation',
    order: 5,
  },
  {
    id: 'managed-technology-services-consultation',
    name: 'Managed Technology Services',
    description: 'Discuss ongoing application maintenance, enhancements, QA, and technology support.',
    duration: 30,
    category: 'support',
    order: 6,
  },
];

export const getMeetingType = (id: string): MeetingType | undefined => {
  return MEETING_TYPES.find((type) => type.id === id);
};

export const getMeetingTypeById = (id: string): MeetingType | null => {
  return MEETING_TYPES.find((type) => type.id === id) || null;
};
