import {defineType} from 'sanity'

import {EllipsisVerticalIcon} from '@sanity/icons'

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
      type: 'array',
      of: [{type: 'string'}],
    },
  ],
  preview: {
    select: {
      items: 'items',
    },
    prepare({items}) {
      return {
        title: 'List',
        subtitle: items?.length === 0 ? 'Empty' : items?.length === 1 ? '1 item' : `${items?.length} items`,
      }
    },
  },
})
