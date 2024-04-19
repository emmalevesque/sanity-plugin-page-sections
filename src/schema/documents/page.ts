import {SanityDocument, defineField, defineType} from 'sanity'

/**
 * This file is the schema definition for a project.
 *
 * Here you'll be able to edit the different fields that appear when you 
 * create or edit a project in the studio.
 * 
 * Here you can see the different schema types that are available:

  https://www.sanity.io/docs/schema-types

 */

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fieldsets: [
    {
      name: 'hierarchy',
      title: 'Page Hierarchy',
      options: {
        columns: 2,
        collapsed: true,
      },
    },
    {
      name: 'meta',
      title: 'Meta',
      options: {
        collapsed: true,
      },
    },
  ],
  fields: [
    /***
     * Page hierarchy
     */
    defineField({
      fieldset: 'hierarchy',
      name: 'children',
      title: 'Children',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'page'}]}],
    }),
    defineField({
      fieldset: 'hierarchy',
      name: 'parent',
      title: 'Parent Page',
      type: 'reference',
      to: [{type: 'page'}],
      options: {
        filter: `_id != ^._id`,
      },
    }),
    /***
     * Meta
     */
    defineField({
      fieldset: 'meta',
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
        // @ts-ignore
        aiAssist: {
          imageDescriptionField: 'alt',
        },
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessiblity.',
          validation: (rule) => {
            return rule.custom((alt, context) => {
              // TODO: re-enable this for go-live
              // if ((context.document?.coverImage as any)?.asset?._ref && !alt) {
              //   return "Required";
              // }
              return true
            })
          },
        },
      ],
      // validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'array',
      of: [{type: 'block'}],
      fieldset: 'meta',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'hasSlug',
      title: 'Has Page Route',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'slug',
      title: 'Page Route',
      type: 'slug',
      readOnly: ({parent}) => !parent?.hasSlug,
      description: 'A slug is required for the project to show up in the preview',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) =>
        rule.custom((value, context) =>
          !value && (context?.parent as SanityDocument)?.hasSlug ? 'Required' : true,
        ),
    }),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'sections',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'coverImage',
      slug: 'slug.current',
      excerpt: 'exceprt',
    },
    prepare({title, media, slug, excerpt}) {
      const subtitles = [slug && `/${slug}`, excerpt && excerpt].filter(Boolean)

      return {title, media, subtitle: subtitles.join(' ')}
    },
  },
})
