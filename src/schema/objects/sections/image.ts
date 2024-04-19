import { defineType } from 'sanity';

import { ImageIcon } from '@sanity/icons'

export default defineType({
  name: 'section.image',
  icon: ImageIcon,
  title: 'Image',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
        storeOriginalFilename: true,
      },
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'caption',
    },
  ],
})