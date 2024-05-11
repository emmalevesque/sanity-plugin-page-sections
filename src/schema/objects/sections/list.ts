import {defineType} from 'sanity'

import {EllipsisVerticalIcon} from '@sanity/icons'
import ListComponent from '../../../components/ListComponent'

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
      components: {
        input: ListComponent,
      }
    },
  ],
  preview: {
    select: {
      items: 'items',
      listType: 'listType',
    },
    prepare({items, listType}) {
      return {
        title: 'List',
        subtitle: listType ? `${listType} List` : items?.length === 0 ? 'Empty' : items?.length === 1 ? '1 item' : `${items?.length} items`,
      }
    },
  },
})
