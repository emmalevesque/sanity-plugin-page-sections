import {defineType} from 'sanity'

import {ThLargeIcon} from '@sanity/icons'

export default defineType({
  name: 'section.grid',
  title: 'Grid',
  type: 'object',
  icon: ThLargeIcon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'columns',
      title: 'Columns',
      type: 'array',
      of: [
        {type: 'section.text'},
        {type: 'section.image'},
        {type: 'section.video'},
        {type: 'section.card'},
        {type: 'section.toc'},
      ],
    },
  ],
})
