import { LinkIcon } from '@sanity/icons';
import { defineType } from 'sanity';

export default defineType({
  name: 'navigation',
  title: 'Navigation',
  icon: LinkIcon,
  type: 'document',
  options: {
    singleton: true,
  },
  fields: [
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'page',
              title: 'Link to Page',
              type: 'reference',
              to: [{ type: 'page' }],
              validation: (Rule) => Rule.required(),
              hidden: ({ parent }) => Boolean(parent?.external)
            },
            {
              name: 'external',
              title: 'External Link',
              type: 'string',
            }
          ],
        },
      ],
    },
  ],
})