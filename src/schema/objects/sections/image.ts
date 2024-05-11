import { defineField, defineType } from 'sanity';

import { ImageIcon } from '@sanity/icons'

export default defineType({
  name: 'section.image',
  icon: ImageIcon,
  title: 'Image',
  type: 'object',
  preview: {
    select: {
      title: 'caption',
      media: 'image',
    },
  },
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
        storeOriginalFilename: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
          description: 'Important for SEO and accessibility.',
          options: {
            hotspot: true,
            storeOriginalFilename: false,
            // @ts-ignore
            aiAssist: {
              imageDescriptionField: "alt",
            },
          },
        }
      ]
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'caption',
    },
  ],
})