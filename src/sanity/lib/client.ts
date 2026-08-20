import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId } from '../env';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

export async function getServices() {
  return client.fetch(`*[_type == "service"] | order(order asc, _createdAt asc){
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
  }`);
}

export async function getServiceBySlug(slug: string) {
  return client.fetch(`*[_type == "service" && slug.current == $slug][0]{
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
  }`, { slug });
}

export async function getCaseStudies() {
  return client.fetch(`*[_type == "caseStudy"] | order(publishedAt desc){
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
  }`);
}

export async function getIndustries() {
  return client.fetch(`*[_type == "industry"] | order(title asc){
    _id,
    title,
    slug,
    description,
    icon,
    solutions,
    services[]->{_id, title, slug}
  }`);
}

export async function getTestimonials() {
  return client.fetch(`*[_type == "testimonial"] | order(featured desc, _createdAt desc){
    _id,
    author,
    role,
    company,
    quote,
    featured,
    image
  }`);
}

export async function getBlogPosts() {
  return client.fetch(`*[_type == "blog"] | order(publishedAt desc, _createdAt desc){
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
  }`);
}

export async function getFaqs() {
  return client.fetch(`*[_type == "faq"] | order(order asc, _createdAt asc){
    _id,
    question,
    answer,
    category,
    order
  }`);
}

export async function getSiteSettings() {
  return client.fetch(`*[_type == "siteSettings"][0]{
    _id,
    title,
    tagline,
    description,
    primaryColor,
    primaryPhone,
    primaryEmail,
    address,
    socialLinks
  }`);
}
