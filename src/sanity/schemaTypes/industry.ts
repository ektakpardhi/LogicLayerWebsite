import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'industry',
  title: 'Industry',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: 'description', type: 'text', rows: 5 }),
    defineField({ name: 'icon', type: 'string' }),
    defineField({
      name: 'solutions',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'services',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'service' }] }],
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'description' },
  },
});
