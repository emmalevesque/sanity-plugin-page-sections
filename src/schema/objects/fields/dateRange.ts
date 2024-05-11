import {defineField, defineType} from 'sanity'

export const dateRange = defineType({
  name: 'dateRange',
  title: 'Date Range',
  description: 'A start and finish date for a project',
  type: 'object',
  fields: [
    defineField({
      name: 'dateStart',
      type: 'date',
    }),
    defineField({
      name: 'dateEnd',
      type: 'date',
    }),
  ],
  // make the fields render next to each other
  options: {columns: 2},
})