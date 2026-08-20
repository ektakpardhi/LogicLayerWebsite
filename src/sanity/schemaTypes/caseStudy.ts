import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: 'client', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'summary', type: 'text', rows: 4 }),
    defineField({ name: 'challenge', type: 'text', rows: 6 }),
    defineField({ name: 'solution', type: 'text', rows: 6 }),
    defineField({ name: 'results', type: 'array', of: [{ type: 'string' }] }),
    defineField({
      name: 'industry',
      type: 'reference',
      to: [{ type: 'industry' }],
    }),
    defineField({
      name: 'services',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'service' }] }],
    }),
    defineField({
      name: 'testimonial',
      type: 'reference',
      to: [{ type: 'testimonial' }],
    }),
    defineField({ name: 'publishedAt', type: 'datetime' }),
    defineField({ name: 'image', type: 'image', options: { hotspot: true } }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'client', media: 'image' },
  },
});
