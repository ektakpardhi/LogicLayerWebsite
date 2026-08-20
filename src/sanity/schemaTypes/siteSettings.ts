import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Website Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'primaryColor',
      title: 'Primary Brand Color',
      type: 'string',
      initialValue: '#f97316',
    }),
    defineField({
      name: 'primaryPhone',
      title: 'Primary Phone',
      type: 'string',
    }),
    defineField({
      name: 'primaryEmail',
      title: 'Primary Email',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'platform', type: 'string' },
          { name: 'url', type: 'string' },
        ],
      }],
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'tagline' },
  },
});
