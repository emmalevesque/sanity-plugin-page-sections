import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'section.hero',
  title: 'Hero',
  type: 'object',
  fields: [
    defineField({
      name: 'body',
      title: 'Body',
      type: 'body',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        }),
      ],
      options: {
        hotspot: true,
        storeOriginalFilename: false,
        // @ts-ignore
        aiAssist: {
          imageDescriptionField: "alt",
        },
      },
    })
  ]
})