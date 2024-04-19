import { defineType } from 'sanity';

export default defineType({
  name: 'caption',
  title: 'Caption',
  type: 'array',
  of: [{
    type: 'block', styles: [
      { title: 'Normal', value: 'normal' },
    ],
    marks: {
      decorators: [
        { title: 'Strong', value: 'strong' },
        { title: 'Emphasis', value: 'em' },
        { title: 'Underline', value: 'underline' },
      ],
    },
  }],
})