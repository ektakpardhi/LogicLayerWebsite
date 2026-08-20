import type { StructureResolver } from 'sanity/structure';

export const structure: StructureResolver = (S) =>
  S.list()
    .title('LogicLayer CMS')
    .items([
      S.listItem()
        .title('Website Settings')
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
      S.divider(),
      S.documentTypeListItem('service').title('Services'),
      S.documentTypeListItem('caseStudy').title('Case Studies'),
      S.documentTypeListItem('industry').title('Industries'),
      S.documentTypeListItem('testimonial').title('Testimonials'),
      S.documentTypeListItem('blog').title('Blog'),
      S.documentTypeListItem('faq').title('FAQs'),
    ]);
