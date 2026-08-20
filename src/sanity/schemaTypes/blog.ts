import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'blog',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: 'excerpt', type: 'text', rows: 4 }),
    defineField({
      name: 'body',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({ name: 'author', type: 'string' }),
    defineField({ name: 'publishedAt', type: 'datetime' }),
    defineField({
      name: 'categories',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({ name: 'featured', type: 'boolean', initialValue: false }),
    defineField({ name: 'coverImage', type: 'image', options: { hotspot: true } }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'author', media: 'coverImage' },
  },
});
