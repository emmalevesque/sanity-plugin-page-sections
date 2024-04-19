import { defineField, defineType } from 'sanity';

import { CubeIcon } from '@sanity/icons'

export default defineType({
  name: 'section.card',
  title: 'Card',
  type: 'object',
  icon: CubeIcon,
  preview: {
    select: {
      title: 'body.0.children.0.text',
      media: 'image',
    },
    prepare({ title, media }) {
      return {
        title: 'Card',
        subtitle: title,
        media: media,
      }
    }
  },
  fields: [
    defineField({
      name: 'body',
      title: 'Body',
      type: 'body',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
        storeOriginalFilename: false,
      },
    })
  ],
})