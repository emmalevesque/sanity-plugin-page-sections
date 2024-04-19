import { defineField, defineType } from 'sanity';

import { PlayIcon } from '@sanity/icons'

export default defineType({
  name: 'section.video',
  icon: PlayIcon,
  title: 'Video',
  type: 'object',
  fields: [
    defineField({
      name: 'video',
      title: 'Video File',
      type : 'url',
    }) 
  ],
})