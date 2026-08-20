import type { MetadataRoute } from 'next';

const routes = [
  '/', '/about', '/services', '/solutions', '/industries', '/case-studies', '/staffing', '/jobs', '/contact', '/schedule',
  '/services/software-development', '/services/web-development', '/services/qa-quality-engineering', '/services/test-automation',
  '/services/ai-automation', '/services/cloud-devops', '/services/data-analytics', '/services/application-modernization', '/services/managed-services',
  '/services/web-digital-solutions', '/services/qa-test-automation', '/services/managed-technology-services',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({ url: path, changeFrequency: 'monthly', priority: path === '/' ? 1 : 0.7 }));
}