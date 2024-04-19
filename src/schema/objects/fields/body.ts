import {defineType} from 'sanity'

export default defineType({
  name: 'body',
  title: 'Body',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
      ],
    },
    {
      type: 'link',
      name: 'link',
      title: 'link',
    }
  ],
})
