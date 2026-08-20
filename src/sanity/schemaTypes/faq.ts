import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    defineField({ name: 'question', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'answer', type: 'text', rows: 5, validation: (Rule) => Rule.required() }),
    defineField({ name: 'category', type: 'string' }),
    defineField({ name: 'order', type: 'number', initialValue: 100 }),
  ],
  preview: {
    select: { title: 'question', subtitle: 'category' },
  },
});
