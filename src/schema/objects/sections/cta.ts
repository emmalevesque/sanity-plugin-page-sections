import { defineType } from 'sanity';

export default defineType({
  name: 'section.cta',
  title: 'Call to Action',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'body',
    }
  ],
})