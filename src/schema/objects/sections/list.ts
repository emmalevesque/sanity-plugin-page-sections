import { defineType } from 'sanity';

import { EllipsisVerticalIcon } from '@sanity/icons'

// TODO: add custom component that accesses
// config context
export default defineType({
  icon: EllipsisVerticalIcon,
  name: 'section.list',
  title: 'List',
  type: 'object',
  fields: [
    {
      name: 'items',
      title: 'Items',
      type :'array' ,
      of: [{type :'string'}]
    },
  ],
})