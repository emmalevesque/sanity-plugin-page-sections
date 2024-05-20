import {defineType} from 'sanity'
import {DisplayComponent} from '../../../components/schema/display'

export default defineType({
  name: 'body',
  title: 'Body',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'Display', value: 'display', component: DisplayComponent as React.FC},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
      ],
    },
    {
      type: 'link',
      name: 'link',
      title: 'link',
    },
  ],
})
