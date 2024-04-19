import {defineType} from 'sanity'

export default defineType({
  name: 'link',
  title: 'Link',
  type: 'object',
  fields: [
    {
      name: 'href',
      title: 'Href',
      type: 'string',
    },

  ],
  preview: {
    select: {
      url: 'url',
      pageTitle: 'page.title',
      publicationTitle: 'publication.title',
      projectTitle: 'project.title',
    },
    prepare(selection) {
      const {url, pageTitle, publicationTitle, projectTitle} = selection
      return {
        title: url || pageTitle || publicationTitle || projectTitle || 'No title',
      }
    }
  }
})
