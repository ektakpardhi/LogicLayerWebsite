import { NavItem, SocialLink } from '@/types';

export const MAIN_NAVIGATION: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Industries', href: '/industries' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Jobs', href: '/jobs' },
];

export const SERVICES_MENU = [
  { id: 'services-overview', label: 'Services Overview', href: '/services', description: 'Browse the full set of LogicLayer capabilities.' },
  { id: 'software-development', label: 'Software Development', href: '/services/software-development', description: 'Custom applications, APIs, platforms, and digital products.' },
  { id: 'web-development', label: 'Web & Digital Solutions', href: '/services/web-development', description: 'High-performing websites and web applications.' },
  { id: 'qa-quality-engineering', label: 'QA & Quality Engineering', href: '/services/qa-quality-engineering', description: 'Modern quality practices for safer releases.' },
  { id: 'test-automation', label: 'Test Automation', href: '/services/test-automation', description: 'Scalable automation for faster feedback.' },
  { id: 'ai-automation', label: 'AI & Intelligent Automation', href: '/services/ai-automation', description: 'Useful intelligence for real operational workflows.' },
  { id: 'cloud-devops', label: 'Cloud & DevOps', href: '/services/cloud-devops', description: 'Scalable infrastructure, CI/CD, and observability.' },
  { id: 'data-analytics', label: 'Data & Analytics', href: '/services/data-analytics', description: 'Clearer decisions from connected, trusted data.' },
  { id: 'application-modernization', label: 'Application Modernization', href: '/services/application-modernization', description: 'Turn legacy constraints into a platform for growth.' },
  { id: 'managed-services', label: 'Managed Technology Services', href: '/services/managed-services', description: 'Long-term support, enhancements, and technology partnership.' },
];

export const siteConfig = {
  company: {
    name: 'LogicLayer Solutions',
    logo: 'LOGICLAYER',
    logoSubtitle: 'SOLUTIONS',
    tagline: 'Technology that turns complexity into opportunity.',
    description: 'LogicLayer Solutions helps businesses build dependable digital products, improve software quality, and automate the work that matters.',
    website: 'TODO: ADD WEBSITE URL',
  },
  contact: {
    email: 'hello@logiclayersolutions.com',
    phone: 'TODO: ADD BUSINESS PHONE',
    address: 'Washington, DC',
  },
  navigation: MAIN_NAVIGATION,
  cta: { label: 'Schedule With Us', href: '/schedule' },
  secondaryCta: { label: 'Explore Our Services', href: '/services' },
  defaultTimezone: 'America/New_York',
  socialLinks: [] as SocialLink[],
  seo: {
    title: 'LogicLayer Solutions | Technology Consulting & Engineering',
    description: 'Software engineering, quality engineering, AI automation, cloud, data, and modernization for ambitious teams.',
    keywords: ['software development', 'technology consulting', 'AI automation', 'quality engineering', 'cloud DevOps'],
  },
  theme: {
    colors: {
      background: '#f6f6f1',
      foreground: '#11152b',
      primary: '#1838d4',
      primaryForeground: '#ffffff',
      secondary: '#f8e96b',
      accent: '#ff6947',
      muted: '#596078',
      border: 'rgba(17, 21, 43, 0.2)',
      card: '#ffffff',
    },
  },
};

export default siteConfig;
