/**
 * Services structured around the core capability areas for LogicLayer Solutions.
 * Default content is kept as a fallback while the CMS is the source of truth.
 */

import { client } from '@/sanity/lib/client';
import type { Service } from '@/types';

export interface ServiceDetail {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  hero: string;
  overview: string;
  capabilities: string[];
  benefits: string[];
  approach: string[];
  technologies: string[];
  techStack?: { category: string; tools: string[] }[];
  deliverables?: string[];
  engagementModels?: string[];
  processDetails?: { title: string; description: string }[];
  relatedServices: string[];
  faqs: { question: string; answer: string }[];
  icon: string;
  metadataDescription: string;
}

export const DEFAULT_SERVICES: Service[] = [
  {
    id: 'software-development',
    title: 'Custom Software Development',
    slug: 'software-development',
    description: 'Build scalable applications and digital products tailored to your business.',
    longDescription:
      'Design and deliver custom software for internal operations, customer experiences, and product growth with clear architecture, dependable quality, and measurable business value.',
    category: 'build',
    order: 1,
    features: [
      'Custom software development',
      'Enterprise applications',
      'SaaS product development',
      'API development and integration',
      'MVP development',
      'Application enhancement',
    ],
  },
  {
    id: 'web-digital-solutions',
    title: 'Website & Web Application Development',
    slug: 'web-development',
    description: 'Create modern websites, portals, and web applications that deliver exceptional digital experiences.',
    longDescription:
      'Build responsive websites, customer portals, ecommerce experiences, and digital platforms that are easier to use, easier to maintain, and built for conversion and trust.',
    category: 'build',
    order: 2,
    features: [
      'Corporate websites',
      'Customer portals',
      'Web applications',
      'E-commerce development',
      'CMS development',
      'Website redesign and maintenance',
    ],
  },
  {
    id: 'qa-test-automation',
    title: 'QA & Quality Engineering',
    slug: 'qa-quality-engineering',
    description: 'Improve quality, gain release confidence, and reduce production defects through modern quality engineering.',
    longDescription:
      'Combine manual quality practices with automated test strategies to catch issues earlier, improve release confidence, and keep product changes safer at scale.',
    category: 'assure',
    order: 3,
    features: [
      'Manual and functional testing',
      'Regression and integration testing',
      'API and UI automation',
      'End-to-end testing',
      'Performance and accessibility testing',
      'CI/CD test integration',
    ],
  },
  {
    id: 'ai-automation',
    title: 'AI & Intelligent Automation',
    slug: 'ai-automation',
    description: 'Use AI and intelligent automation to eliminate manual work and improve productivity.',
    longDescription:
      'Apply AI-driven workflows, chat experiences, document intelligence, and process automation to improve decision-making, reduce operational friction, and scale team output.',
    category: 'transform',
    order: 4,
    features: [
      'Generative AI solutions',
      'AI-powered applications',
      'Knowledge assistants and chatbots',
      'RAG and document intelligence',
      'Workflow automation',
      'Business process optimization',
    ],
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    slug: 'cloud-devops',
    description: 'Modernize infrastructure, automate delivery, and build reliable cloud environments.',
    longDescription:
      'Create scalable cloud architectures, simplify deployments, and improve reliability with automated pipelines, infrastructure as code, and production monitoring designed for growth.',
    category: 'transform',
    order: 5,
    features: [
      'AWS and cloud architecture',
      'Cloud migration',
      'CI/CD pipeline development',
      'Infrastructure as code',
      'Terraform and deployment automation',
      'Monitoring and logging',
    ],
  },
  {
    id: 'data-analytics',
    title: 'Data & Analytics',
    slug: 'data-analytics',
    description: 'Turn complex data into actionable insights through modern data and analytics solutions.',
    longDescription:
      'Unify data sources, improve visibility, and surface operational insights with pipelines, dashboards, and analytics that support better decisions across the business.',
    category: 'transform',
    order: 6,
    features: [
      'Data engineering and integration',
      'Business intelligence dashboards',
      'Data pipelines',
      'Automated reporting',
      'Data modernization',
      'AI and analytics enablement',
    ],
  },
  {
    id: 'application-modernization',
    title: 'Application Modernization',
    slug: 'application-modernization',
    description: 'Transform legacy applications into scalable, secure, and maintainable platforms.',
    longDescription:
      'Modernize costly or outdated systems to reduce risk, improve user experience, and support future growth with architecture updates, technical debt reduction, and phased delivery.',
    category: 'transform',
    order: 7,
    features: [
      'Legacy application assessment',
      'Platform and architecture modernization',
      'Performance optimization',
      'Security updates',
      'Database and integration modernization',
      'Roadmap-driven transformation',
    ],
  },
  {
    id: 'managed-technology-services',
    title: 'Managed Technology Services',
    slug: 'managed-services',
    description: 'Get ongoing development, maintenance, QA, and technical support from a technology partner.',
    longDescription:
      'Partner with LogicLayer for long-term maintenance, production support, feature enhancements, and reliability operations that keep your technology moving without interruption.',
    category: 'transform',
    order: 8,
    features: [
      'Application maintenance',
      'Production support',
      'Bug fixes and feature enhancements',
      'Monitoring and performance tuning',
      'Security update management',
      'Technical consulting and support',
    ],
  },
  {
    id: 'staffing',
    title: 'Staffing',
    slug: 'staffing',
    description: 'Access experienced technical professionals to support delivery, bridge capacity gaps, and accelerate critical initiatives.',
    longDescription:
      'We provide flexible staffing solutions for software, QA, cloud, data, and business teams so companies can scale quickly without the delays of traditional hiring. Our talent model is designed to fit project urgency, specialized expertise, and delivery constraints.',
    category: 'transform',
    order: 9,
    features: [
      'Contract developers',
      'QA and automation engineers',
      'Cloud and DevOps specialists',
      'Data and analytics talent',
      'Product and business analysts',
      'Interim technical leadership',
    ],
  },
];

export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    slug: 'software-development', title: 'Custom Software Development', shortTitle: 'Software Development', icon: 'code',
    hero: 'Build Software That Moves Your Business Forward',
    description: 'We design and develop scalable software solutions that align technology with your business goals—from new digital products and SaaS platforms to enterprise applications and integrations.',
    overview: 'Build the right product foundation with a team that connects product thinking, engineering discipline, and delivery momentum.',
    capabilities: ['Custom Software Development', 'Enterprise Applications', 'SaaS Development', 'MVP Development', 'Product Engineering', 'API Development', 'System Integration', 'Application Enhancement', 'Backend Development', 'Frontend Development'],
    benefits: ['Scalable Architecture', 'Better User Experience', 'Faster Delivery', 'Maintainable Code', 'Integration with Existing Systems', 'Long-Term Flexibility'],
    approach: ['Understand the business outcome and users', 'Shape the smallest useful product path', 'Build in visible, testable increments', 'Strengthen the platform for what comes next'],
    technologies: ['TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'PostgreSQL', 'REST and GraphQL APIs'],
    relatedServices: ['web-development', 'qa-quality-engineering', 'application-modernization'],
    faqs: [{ question: 'Can you work with an existing engineering team?', answer: 'Yes. We can extend your team, own a delivery stream, or provide focused product and engineering expertise.' }, { question: 'Do you support MVPs as well as enterprise systems?', answer: 'Yes. Our approach adapts to the stage, risk profile, and scale of the product.' }],
    metadataDescription: 'LogicLayer Solutions builds scalable custom software, SaaS platforms, enterprise applications, APIs, and digital products designed around your business goals.',
  },
  {
    slug: 'web-development', title: 'Website & Web Application Development', shortTitle: 'Web Development', icon: 'globe',
    hero: 'Digital Experiences Built for Performance and Growth',
    description: 'We create modern, responsive websites and web applications that combine thoughtful UX, strong engineering, performance, and scalability.',
    overview: 'Give customers, employees, and partners a digital experience that is clear, fast, accessible, and easy to evolve.',
    capabilities: ['Corporate Websites', 'Business Websites', 'Web Applications', 'Customer Portals', 'Employee Portals', 'CMS Websites', 'Website Redesign', 'Responsive Development', 'API Integrations', 'Third-Party Integrations'],
    benefits: ['Clearer customer journeys', 'Faster page performance', 'Accessible experiences', 'Flexible content management', 'Reliable integrations', 'A platform that can grow'],
    approach: ['Map the experience and content model', 'Design for clarity across screen sizes', 'Build reusable, maintainable interfaces', 'Measure performance and improve continuously'],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Sanity', 'Supabase', 'Cloud platforms'],
    relatedServices: ['software-development', 'qa-quality-engineering', 'ai-automation'],
    faqs: [{ question: 'Can you redesign an existing website?', answer: 'Yes. We can preserve what works, resolve structural issues, and create a clearer path for future growth.' }, { question: 'Do you build content-managed websites?', answer: 'Yes. We design content models and editorial workflows around the teams who will maintain the site.' }],
    metadataDescription: 'LogicLayer Solutions creates modern websites and web applications with strong UX, performance, integrations, and scalability.',
  },
  {
    slug: 'qa-quality-engineering', title: 'QA & Quality Engineering', shortTitle: 'QA & Quality Engineering', icon: 'shield',
    hero: 'Build With Confidence. Release With Confidence.',
    description: 'We help organizations improve software quality, reduce production risk, and accelerate delivery through modern quality engineering practices.',
    overview: 'Make quality a shared engineering practice, with the right coverage and feedback at every stage of delivery.',
    capabilities: ['Functional Testing', 'Regression Testing', 'API Testing', 'UI Testing', 'Integration Testing', 'Performance Testing', 'UAT', 'Mobile Testing', 'Accessibility Testing', 'Test Strategy'],
    benefits: ['Lower production risk', 'Earlier defect discovery', 'More predictable releases', 'Better coverage of critical paths', 'Clearer quality signals', 'Faster delivery feedback'],
    approach: ['Assess risk, users, and existing coverage', 'Prioritize the tests that protect the business', 'Embed quality checks into delivery workflows', 'Use evidence to continuously refine coverage'],
    technologies: ['Playwright', 'Cypress', 'Jest', 'Postman', 'k6', 'BrowserStack', 'CI/CD platforms'],
    relatedServices: ['test-automation', 'software-development', 'managed-services'],
    faqs: [{ question: 'Do you provide both manual and automated testing?', answer: 'Yes. We combine exploratory, functional, and automated testing based on the risk and product context.' }, { question: 'Can you improve an existing QA process?', answer: 'Yes. We assess current practices and create a practical roadmap for stronger quality signals.' }],
    metadataDescription: 'LogicLayer Solutions improves software quality, reduces production risk, and accelerates delivery through modern quality engineering.',
  },
  {
    slug: 'test-automation', title: 'Test Automation', shortTitle: 'Test Automation', icon: 'bot',
    hero: 'Automate Testing. Accelerate Delivery.',
    description: 'Build scalable automated testing frameworks that improve coverage, reduce repetitive testing, and provide faster feedback throughout the development lifecycle.',
    overview: 'Turn repeatable quality checks into dependable delivery signals so teams can move quickly without guessing.',
    capabilities: ['UI Automation', 'API Automation', 'End-to-End Testing', 'Regression Automation', 'Smoke Testing', 'CI/CD Testing', 'Cross-Browser Testing', 'Automated Reporting', 'Test Data Management', 'Continuous Testing'],
    benefits: ['Faster feedback', 'Reduced repetitive effort', 'Consistent regression coverage', 'Earlier release confidence', 'Better test visibility', 'Scalable quality practices'],
    approach: ['Identify high-value automation candidates', 'Create stable, maintainable test architecture', 'Connect tests to delivery pipelines', 'Track signal quality and keep suites healthy'],
    technologies: ['Playwright', 'Cypress', 'Selenium', 'Jest', 'Postman', 'GitHub Actions', 'Azure DevOps'],
    relatedServices: ['qa-quality-engineering', 'software-development', 'cloud-devops'],
    faqs: [{ question: 'What should be automated first?', answer: 'We start with stable, business-critical workflows where repeatable feedback will reduce the most risk or effort.' }, { question: 'Will you maintain the automation suite?', answer: 'Yes. We can help establish ownership, maintenance practices, and ongoing improvements.' }],
    metadataDescription: 'LogicLayer Solutions builds scalable test automation frameworks for faster feedback, better coverage, and safer delivery.',
  },
  {
    slug: 'ai-automation', title: 'AI & Intelligent Automation', shortTitle: 'AI & Automation', icon: 'sparkles',
    hero: 'Make Your Business Smarter',
    description: 'We help organizations identify practical opportunities to use AI and automation to reduce manual work, improve decision-making, and create better digital experiences.',
    overview: 'Move from AI curiosity to useful systems that fit your workflows, data, risk profile, and customer experience.',
    capabilities: ['Generative AI', 'AI Applications', 'Enterprise AI Assistants', 'RAG Solutions', 'Document Intelligence', 'Workflow Automation', 'Business Process Automation', 'AI Analytics', 'AI Integration', 'Intelligent Search'],
    benefits: ['Less manual work', 'Faster access to knowledge', 'More consistent operations', 'Better decision support', 'Improved customer experiences', 'Responsible adoption of AI'],
    approach: ['Find high-value, feasible opportunities', 'Design guardrails around data and risk', 'Prototype with real workflow context', 'Measure usefulness and scale what works'],
    technologies: ['OpenAI', 'Azure AI', 'Python', 'TypeScript', 'Vector search', 'RAG architectures', 'Workflow platforms'],
    relatedServices: ['software-development', 'data-analytics', 'managed-services'],
    faqs: [{ question: 'Do you help identify the right AI use cases?', answer: 'Yes. We connect opportunities to business value, data readiness, implementation effort, and responsible-use considerations.' }, { question: 'Can AI solutions integrate with existing systems?', answer: 'Yes. We design integrations around the systems, permissions, and workflows your teams already use.' }],
    metadataDescription: 'LogicLayer Solutions applies generative AI, intelligent search, document intelligence, and workflow automation to practical business problems.',
  },
  {
    slug: 'cloud-devops', title: 'Cloud & DevOps', shortTitle: 'Cloud & DevOps', icon: 'cloud',
    hero: 'Modern Infrastructure. Faster Delivery. Greater Reliability.',
    description: 'We help organizations modernize infrastructure, automate software delivery, and build scalable cloud environments.',
    overview: 'Create an infrastructure foundation that helps teams ship with confidence, operate clearly, and scale responsibly.',
    capabilities: ['Cloud Architecture', 'Cloud Migration', 'AWS Solutions', 'DevOps', 'CI/CD', 'Infrastructure as Code', 'Terraform', 'Deployment Automation', 'Monitoring', 'Logging', 'Cloud Optimization'],
    benefits: ['More reliable releases', 'Faster deployment cycles', 'Improved visibility', 'Scalable infrastructure', 'Reduced operational friction', 'Better cost awareness'],
    approach: ['Assess architecture, workloads, and constraints', 'Define a pragmatic modernization path', 'Automate repeatable infrastructure and delivery', 'Instrument systems for reliable operations'],
    technologies: ['AWS', 'Azure', 'Terraform', 'Docker', 'Kubernetes', 'GitHub Actions', 'OpenTelemetry'],
    relatedServices: ['application-modernization', 'software-development', 'managed-services'],
    faqs: [{ question: 'Can you work with a multi-cloud environment?', answer: 'Yes. We focus on clear ownership, repeatable patterns, and the right platform choices for each workload.' }, { question: 'Do you support infrastructure after migration?', answer: 'Yes. We can provide monitoring, optimization, and ongoing operational support.' }],
    metadataDescription: 'LogicLayer Solutions modernizes infrastructure, automates delivery, and builds scalable cloud environments with DevOps practices.',
  },
  {
    slug: 'data-analytics', title: 'Data & Analytics', shortTitle: 'Data & Analytics', icon: 'chart',
    hero: 'Turn Data Into Better Decisions',
    description: 'We help organizations connect, manage, analyze, and visualize data to create actionable business insights.',
    overview: 'Connect trusted data to the decisions your teams make every day, from operational reporting to strategic planning.',
    capabilities: ['Data Engineering', 'Data Pipelines', 'Data Integration', 'Business Intelligence', 'Analytics Dashboards', 'Automated Reporting', 'Cloud Data Platforms', 'Data Modernization', 'AI Analytics'],
    benefits: ['Trusted reporting', 'Faster decisions', 'Less manual analysis', 'Connected data sources', 'Clearer operational visibility', 'A foundation for AI'],
    approach: ['Clarify the decisions and measures that matter', 'Assess data quality, ownership, and access', 'Build reliable pipelines and usable views', 'Create a feedback loop for continuous improvement'],
    technologies: ['SQL', 'Python', 'Power BI', 'dbt', 'Snowflake', 'BigQuery', 'Cloud data platforms'],
    relatedServices: ['ai-automation', 'application-modernization', 'cloud-devops'],
    faqs: [{ question: 'Can you help with data quality?', answer: 'Yes. We address quality through profiling, ownership, validation, and monitoring built into the data workflow.' }, { question: 'Do you build executive and operational dashboards?', answer: 'Yes. We design dashboards around the decisions and audiences they need to serve.' }],
    metadataDescription: 'LogicLayer Solutions connects, manages, analyzes, and visualizes data to create actionable business insights.',
  },
  {
    slug: 'application-modernization', title: 'Application Modernization', shortTitle: 'Application Modernization', icon: 'refresh',
    hero: "Modernize What You Have. Prepare for What's Next.",
    description: 'We help organizations modernize legacy applications while reducing disruption and creating a stronger foundation for future growth.',
    overview: 'Reduce the cost and risk of legacy constraints through a staged modernization path tied to business priorities.',
    capabilities: ['Legacy Application Assessment', 'Application Modernization', 'Refactoring', 'Cloud Migration', 'API Enablement', 'Database Modernization', 'UI Modernization', 'Performance Optimization', 'Security Improvements'],
    benefits: ['Lower technical risk', 'Improved performance', 'More flexible architecture', 'Better user experience', 'Safer incremental change', 'Stronger growth foundation'],
    approach: ['Understand the system and business dependencies', 'Prioritize modernization by value and risk', 'Refactor or replace in manageable increments', 'Measure outcomes and prepare the next stage'],
    technologies: ['Java', '.NET', 'Node.js', 'React', 'APIs', 'Cloud platforms', 'PostgreSQL'],
    relatedServices: ['cloud-devops', 'software-development', 'data-analytics'],
    faqs: [{ question: 'Do you replace legacy systems all at once?', answer: 'Usually not. We prefer phased modernization that reduces disruption and creates value along the way.' }, { question: 'Can modernization include the user interface?', answer: 'Yes. We can modernize presentation layers, integrations, data, and underlying architecture.' }],
    metadataDescription: 'LogicLayer Solutions modernizes legacy applications through refactoring, cloud migration, API enablement, and phased delivery.',
  },
  {
    slug: 'managed-services', title: 'Managed Technology Services', shortTitle: 'Managed Services', icon: 'wrench',
    hero: 'Keep Your Technology Moving Forward',
    description: 'We provide ongoing technology support, application maintenance, enhancements, QA, monitoring, and optimization so your teams can focus on the business.',
    overview: 'Keep critical systems healthy and improving with an experienced partner who understands the context behind the work.',
    capabilities: ['Application Maintenance', 'Production Support', 'Bug Fixes', 'Feature Enhancements', 'Performance Optimization', 'Security Updates', 'Monitoring', 'Database Support', 'Integration Support', 'Version Upgrades'],
    benefits: ['More dependable operations', 'Faster issue resolution', 'Predictable support capacity', 'Continuous improvement', 'Reduced maintenance burden', 'More focus for internal teams'],
    approach: ['Learn the systems, users, and service expectations', 'Create clear support and escalation paths', 'Resolve immediate issues while reducing repeat work', 'Plan improvements around business priorities'],
    technologies: ['Cloud platforms', 'TypeScript', 'React', 'Node.js', 'SQL', 'Observability tools', 'CI/CD platforms'],
    relatedServices: ['software-development', 'qa-quality-engineering', 'cloud-devops'],
    faqs: [{ question: 'Can managed services include new feature work?', answer: 'Yes. We can balance maintenance, support, quality, and roadmap enhancements within one delivery model.' }, { question: 'How do you work with internal IT teams?', answer: 'We establish transparent ownership, communication, and escalation practices that complement your existing team.' }],
    metadataDescription: 'LogicLayer Solutions provides ongoing application support, maintenance, QA, monitoring, and optimization for growing businesses.',
  },
];

const SERVICE_PAGE_ENRICHMENTS: Record<string, Pick<ServiceDetail, 'techStack' | 'deliverables' | 'engagementModels' | 'processDetails'>> = {
  'software-development': {
    techStack: [{ category: 'Frontend', tools: ['React', 'Next.js', 'TypeScript'] }, { category: 'Backend', tools: ['Node.js', 'Python', 'REST APIs'] }, { category: 'Data', tools: ['PostgreSQL', 'Supabase', 'Cloud storage'] }],
    deliverables: ['Product and technical requirements', 'Architecture and API designs', 'Working software in production-ready increments', 'Automated quality checks and handoff documentation'],
    engagementModels: ['New product build', 'Dedicated product team', 'Extension of an internal engineering team', 'Modernization and enhancement work'],
    processDetails: [{ title: 'Discover', description: 'Align on users, business goals, constraints, risks, and the smallest valuable outcome.' }, { title: 'Design', description: 'Turn the context into an experience, architecture, delivery plan, and clear technical decisions.' }, { title: 'Build', description: 'Deliver in short, reviewable increments with quality checks and visible progress.' }, { title: 'Improve', description: 'Use feedback, usage data, and operational insight to strengthen the product over time.' }],
  },
  'web-development': {
    techStack: [{ category: 'Experience', tools: ['React', 'Next.js', 'TypeScript'] }, { category: 'Content', tools: ['Sanity', 'CMS integrations', 'Structured content'] }, { category: 'Platform', tools: ['Vercel', 'Supabase', 'Third-party APIs'] }],
    deliverables: ['Information architecture and content model', 'Responsive page and component system', 'CMS and third-party integrations', 'Performance, accessibility, and launch readiness checks'],
    engagementModels: ['Website redesign', 'New marketing or corporate website', 'Customer or employee portal', 'Ongoing web product partnership'],
    processDetails: [{ title: 'Frame', description: 'Understand audiences, journeys, content needs, business goals, and measurement priorities.' }, { title: 'Shape', description: 'Create a clear structure and visual direction that works across devices and user contexts.' }, { title: 'Develop', description: 'Build reusable components, integrations, and content workflows for a maintainable experience.' }, { title: 'Launch', description: 'Validate performance and accessibility, then support iteration after real users engage.' }],
  },
  'qa-quality-engineering': {
    techStack: [{ category: 'Web testing', tools: ['Playwright', 'Cypress', 'BrowserStack'] }, { category: 'API and performance', tools: ['Postman', 'REST clients', 'k6'] }, { category: 'Delivery', tools: ['Jest', 'GitHub Actions', 'Azure DevOps'] }],
    deliverables: ['Quality risk assessment', 'Test strategy and coverage map', 'Functional and exploratory test evidence', 'Defect reports with reproduction context and release recommendations'],
    engagementModels: ['Quality assessment', 'Embedded quality engineering team', 'Release-specific testing', 'Ongoing QA partnership'],
    processDetails: [{ title: 'Assess', description: 'Map critical workflows, current coverage, environments, risks, and quality bottlenecks.' }, { title: 'Prioritize', description: 'Focus effort on the scenarios where defects would create the greatest business or user impact.' }, { title: 'Validate', description: 'Combine exploratory, functional, integration, accessibility, and performance checks.' }, { title: 'Learn', description: 'Turn release evidence into better practices, automation opportunities, and prevention.' }],
  },
  'test-automation': {
    techStack: [{ category: 'Frameworks', tools: ['Playwright', 'Cypress', 'Selenium'] }, { category: 'Services', tools: ['Postman', 'Jest', 'API test clients'] }, { category: 'Automation', tools: ['GitHub Actions', 'CI/CD pipelines', 'Automated reporting'] }],
    deliverables: ['Automation framework architecture', 'Prioritized automated regression suite', 'CI/CD test integration', 'Test data, reporting, and maintenance guidance'],
    engagementModels: ['Framework creation', 'Automation acceleration', 'Legacy suite stabilization', 'Continuous testing partnership'],
    processDetails: [{ title: 'Select', description: 'Choose stable, repeatable, high-value scenarios where automation will reduce risk or effort.' }, { title: 'Architect', description: 'Create maintainable patterns for selectors, test data, environments, reporting, and ownership.' }, { title: 'Integrate', description: 'Run the right checks at the right points in the delivery pipeline for fast feedback.' }, { title: 'Maintain', description: 'Monitor flaky tests, update coverage, and keep the suite aligned with product change.' }],
  },
  'ai-automation': {
    techStack: [{ category: 'AI platforms', tools: ['OpenAI', 'Azure AI', 'Model APIs'] }, { category: 'Application', tools: ['Python', 'TypeScript', 'Workflow automation'] }, { category: 'Knowledge', tools: ['Vector search', 'RAG architectures', 'Document processing'] }],
    deliverables: ['AI opportunity assessment', 'Working proof of concept', 'Prompt, retrieval, and evaluation approach', 'Guardrails, integration plan, and rollout recommendations'],
    engagementModels: ['AI discovery workshop', 'Proof-of-concept sprint', 'Production AI application', 'Workflow automation partnership'],
    processDetails: [{ title: 'Identify', description: 'Connect AI opportunities to real user pain, business value, available data, and operational risk.' }, { title: 'Prototype', description: 'Test the workflow with representative information and measurable evaluation criteria.' }, { title: 'Govern', description: 'Design permissions, human review, privacy, reliability, and responsible-use guardrails.' }, { title: 'Scale', description: 'Integrate the useful solution into daily work and continuously measure its value.' }],
  },
  'cloud-devops': {
    techStack: [{ category: 'Cloud', tools: ['AWS', 'Azure', 'Cloud architecture'] }, { category: 'Infrastructure', tools: ['Terraform', 'Docker', 'Kubernetes'] }, { category: 'Operations', tools: ['CI/CD', 'Monitoring', 'OpenTelemetry'] }],
    deliverables: ['Cloud architecture assessment', 'Migration or modernization roadmap', 'Infrastructure as code', 'Deployment, monitoring, and runbook setup'],
    engagementModels: ['Cloud readiness assessment', 'Migration delivery', 'Platform engineering support', 'DevOps transformation partnership'],
    processDetails: [{ title: 'Assess', description: 'Understand workloads, dependencies, security needs, operating costs, and delivery friction.' }, { title: 'Plan', description: 'Choose a migration or platform path that balances speed, risk, reliability, and cost.' }, { title: 'Automate', description: 'Make infrastructure, deployments, testing, and environment setup repeatable.' }, { title: 'Operate', description: 'Use observability and clear ownership to improve reliability and optimize continuously.' }],
  },
  'data-analytics': {
    techStack: [{ category: 'Data', tools: ['SQL', 'Python', 'Data pipelines'] }, { category: 'Platforms', tools: ['Snowflake', 'BigQuery', 'Cloud data platforms'] }, { category: 'Insights', tools: ['Power BI', 'dbt', 'Automated reporting'] }],
    deliverables: ['Data discovery and quality assessment', 'Pipeline and integration design', 'Analytics dashboard or reporting layer', 'Data ownership, governance, and adoption guidance'],
    engagementModels: ['Analytics discovery', 'Data platform build', 'Dashboard modernization', 'Ongoing data product partnership'],
    processDetails: [{ title: 'Question', description: 'Start with the decisions, audiences, measures, and actions the data should support.' }, { title: 'Connect', description: 'Find the source systems, ownership gaps, quality issues, and integration requirements.' }, { title: 'Model', description: 'Create reliable pipelines and understandable models that make trusted analysis possible.' }, { title: 'Activate', description: 'Put insight into the flow of work through dashboards, alerts, and repeatable reporting.' }],
  },
  'application-modernization': {
    techStack: [{ category: 'Application', tools: ['Java', '.NET', 'Node.js', 'React'] }, { category: 'Integration', tools: ['REST APIs', 'Event-driven services', 'API gateways'] }, { category: 'Platform', tools: ['Cloud migration', 'PostgreSQL', 'Containerization'] }],
    deliverables: ['Legacy system assessment', 'Target architecture and modernization roadmap', 'Incremental refactoring or replacement', 'Migration, testing, and cutover support'],
    engagementModels: ['Modernization assessment', 'Phased application transformation', 'Cloud migration program', 'Legacy support plus roadmap delivery'],
    processDetails: [{ title: 'Understand', description: 'Map system behavior, dependencies, business criticality, technical debt, and change constraints.' }, { title: 'Prioritize', description: 'Sequence improvements around risk reduction, user value, operational cost, and feasibility.' }, { title: 'Modernize', description: 'Refactor, replace, or expose capabilities in increments that reduce disruption.' }, { title: 'Transition', description: 'Validate the new path, support adoption, and create a foundation for continued improvement.' }],
  },
  'managed-services': {
    techStack: [{ category: 'Applications', tools: ['TypeScript', 'React', 'Node.js'] }, { category: 'Data', tools: ['SQL', 'PostgreSQL', 'Integration support'] }, { category: 'Operations', tools: ['Cloud platforms', 'Monitoring', 'CI/CD'] }],
    deliverables: ['Service onboarding and system documentation', 'Support and escalation model', 'Maintenance and release backlog', 'Operational reporting and improvement recommendations'],
    engagementModels: ['Application support retainer', 'Dedicated managed team', 'Shared support model', 'Maintenance plus enhancement partnership'],
    processDetails: [{ title: 'Onboard', description: 'Learn the architecture, users, service expectations, risks, and existing ways of working.' }, { title: 'Stabilize', description: 'Create clear triage, ownership, monitoring, and communication practices for dependable support.' }, { title: 'Improve', description: 'Resolve root causes and reduce repeat incidents while delivering priority enhancements.' }, { title: 'Plan', description: 'Keep maintenance connected to a forward-looking roadmap, upgrades, and business priorities.' }],
  },
};

export const SERVICE_PAGE_DETAILS: ServiceDetail[] = SERVICE_DETAILS.map((service) => ({
  ...service,
  ...SERVICE_PAGE_ENRICHMENTS[service.slug],
}));

export function getServiceDetail(slug: string): ServiceDetail | undefined {
  return SERVICE_PAGE_DETAILS.find((service) => service.slug === slug);
}

const normalizeService = (item: any): Service => ({
  id: item._id ?? item.id ?? item.slug?.current ?? item.title,
  title: item.title ?? 'Untitled service',
  slug: item.slug?.current ?? item.slug ?? '',
  description: item.description ?? '',
  longDescription: item.longDescription ?? item.description ?? '',
  category: item.category ?? 'transform',
  order: Number(item.order ?? 999),
  features: Array.isArray(item.features) ? item.features : [],
});

export async function getServices(): Promise<Service[]> {
  try {
    const services = await client.fetch(`*[_type == "service"] | order(order asc, _createdAt asc) {
      _id,
      title,
      slug,
      description,
      longDescription,
      category,
      order,
      features
    }`);

    if (Array.isArray(services) && services.length > 0) {
      return services.map(normalizeService);
    }
  } catch (error) {
    console.warn('Sanity services fetch failed, falling back to default service set.', error);
  }

  return DEFAULT_SERVICES;
}

export const PRIMARY_SERVICES: Service[] = DEFAULT_SERVICES.filter((service) => service.slug !== 'staffing');
export const BUILD_SERVICES: Service[] = PRIMARY_SERVICES.filter((service) => service.category === 'build');
export const ASSURE_SERVICES: Service[] = PRIMARY_SERVICES.filter((service) => service.category === 'assure');
export const TRANSFORM_SERVICES: Service[] = PRIMARY_SERVICES.filter((service) => service.category === 'transform');
export const ALL_SERVICES: Service[] = [...PRIMARY_SERVICES];

export async function getServiceBySlug(slug: string): Promise<Service | undefined> {
  const services = await getServices();
  return services.find((service) => service.slug === slug);
}

export async function getServiceById(id: string): Promise<Service | undefined> {
  const services = await getServices();
  return services.find((service) => service.id === id);
}

export async function getServicesByCategory(category: string): Promise<Service[]> {
  const services = await getServices();
  return services.filter((service) => service.category === category);
}
