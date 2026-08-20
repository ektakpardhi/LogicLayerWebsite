import { client } from './lib/client';

export const homepageQuery = `*[_type == "siteSettings"][0]{
  title,
  tagline,
  description
}`;

export const servicesQuery = `*[_type == "service"] | order(order asc) {
  _id,
  title,
  slug,
  description,
  longDescription,
  category,
  order,
  features,
  image,
  ctaLabel,
  ctaLink
}`;

export const caseStudiesQuery = `*[_type == "caseStudy"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  client,
  summary,
  challenge,
  solution,
  results,
  industry->{_id, title, slug},
  services[]->{_id, title, slug},
  image,
  testimonial->{_id, author, role, company, quote}
}`;

export const industriesQuery = `*[_type == "industry"] | order(title asc) {
  _id,
  title,
  slug,
  description,
  icon,
  solutions,
  services[]->{_id, title, slug}
}`;

export const testimonialsQuery = `*[_type == "testimonial"] | order(featured desc, _createdAt desc) {
  _id,
  author,
  role,
  company,
  quote,
  featured,
  image
}`;

export const blogQuery = `*[_type == "blog"] | order(publishedAt desc, _createdAt desc) {
  _id,
  title,
  slug,
  excerpt,
  body,
  author,
  publishedAt,
  categories,
  featured,
  coverImage
}`;

export const faqsQuery = `*[_type == "faq"] | order(order asc, _createdAt asc) {
  _id,
  question,
  answer,
  category,
  order
}`;

export const getSanityData = async () => {
  const [siteSettings, services, caseStudies, industries, testimonials, blog, faqs] = await Promise.all([
    client.fetch(homepageQuery),
    client.fetch(servicesQuery),
    client.fetch(caseStudiesQuery),
    client.fetch(industriesQuery),
    client.fetch(testimonialsQuery),
    client.fetch(blogQuery),
    client.fetch(faqsQuery),
  ]);

  return { siteSettings, services, caseStudies, industries, testimonials, blog, faqs };
};
