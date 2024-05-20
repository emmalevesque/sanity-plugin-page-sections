import caption from './objects/fields/caption'
import link from './objects/fields/link'
import sections from './objects/sections'

import sectionText from './objects/sections/text'
import sectionImage from './objects/sections/image'
import sectionCarousel from './objects/sections/carousel'
import sectionVideo from './objects/sections/video'
import sectionCard from './objects/sections/card'
import sectionCta from './objects/sections/cta'
import sectionToc from './objects/sections/toc'
import sectionGrid from './objects/sections/grid'
import sectionList from './objects/sections/list'
import sectionHero from './objects/sections/hero'
import body from './objects/fields/body'
import page from './documents/page'
import layout from './documents/layout'
import settings from './documents/settings'
import {PageSectionsConfig} from '../types'
import { defineListType } from './generators/define-list-type'
import { dateRange } from './objects/fields/dateRange'
import navigation from './documents/navigation'

const types = ({config}: {config: void | PageSectionsConfig}) => {
  const {listTypes = [], videoType = 'mux.video'} = config ?? {}
  return [
    // documents
    page,
    layout,
    settings,
    navigation,
    // objects
    sectionHero,
    sectionText,
    sectionImage,
    sectionCarousel,
    sectionVideo,
    sectionCard,
    sectionCta,
    sectionToc,
    sectionGrid,
    defineListType(sectionList, {listTypes, videoType}),
    // fields
    body,
    link,
    caption,
    sections,
    dateRange,
  ]
}

export default types
