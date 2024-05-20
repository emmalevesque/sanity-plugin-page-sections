import { SplitHorizontalIcon } from '@sanity/icons';
import { defineType } from 'sanity';

export default defineType({
  name: 'section.carousel',
  title: 'Carousel',
  type: 'object',
  icon: SplitHorizontalIcon,
  preview: {
    select: {
      slides: 'slides',
    },
    prepare: ({ slides }: { slides: any }) => ({
      title: `Carousel with ${slides.length} slides`,
    }),
  },
  fields: [
    {
      name: 'slides',
      title: 'Slides',
      type: 'array',
      of: [
        {
          type: 'image', 
          fields: [
            {
              name: 'alt',
              title: 'Alternative text',
              type: 'string',
              description: 'Important for SEO and accessibility.',
              options: {
                hotspot: true,
                storeOriginalFilename: false,
                // @ts-ignore
                aiAssist: {
                  imageDescriptionField: "alt",
                },
              },
            }
          ]          
      },
      // TODO: support videos
      ],
    },
  ],  
})