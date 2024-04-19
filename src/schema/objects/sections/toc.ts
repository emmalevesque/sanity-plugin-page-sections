import { defineType } from 'sanity';

import { UlistIcon } from '@sanity/icons'

export default defineType({
  icon: UlistIcon,
  name: 'section.toc',
  title: 'Anchors',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
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
            },
            {
              name: 'anchor',
              title: 'Anchor',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
})