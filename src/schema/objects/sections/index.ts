import {defineType} from 'sanity'

export default defineType({
  name: 'sections',
  title: 'Sections',
  type: 'array',
  of: [
    {type: 'section.hero'},
    {type: 'section.text'},
    {type: 'section.image'},
    {type: 'section.carousel'},
    {type: 'section.video'},
    {type: 'section.card'},
    {type: 'section.toc'},
    {type: 'section.grid'},
    {type: 'section.list'},
    {title: 'Layout', type: 'reference', to: {type: 'layout'}},
  ],
})
