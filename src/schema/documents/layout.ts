import { defineField, defineType } from 'sanity'

import {MasterDetailIcon} from '@sanity/icons'

export default defineType({
  name: 'layout',
  title: 'Layout',
  type: 'document',
  icon: MasterDetailIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'hasColumns',
      title: 'Has Columns?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      hidden: ({parent}) => !parent?.hasColumns,
      readOnly: ({parent}) => !parent?.hasColumns,
      name: 'columns',
      title: 'Columns',
      type: 'string',
      options: {
        list: [
          { title: 'Auto', value: 'flex-auto' },
          { title: '1', value: '1' },
          { title: '2', value: '2' },
          { title: '3', value: '3' },
          { title: '4', value: '4' },
        ]
      }
    }),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'sections',
    })
  ]
})