import caption from './objects/fields/caption'
import link from './objects/fields/link'
import sections from './objects/sections'

import sectionText from './objects/sections/text'
import sectionImage from './objects/sections/image'
import sectionVideo from './objects/sections/video'
import sectionCard from './objects/sections/card'
import sectionCta from './objects/sections/cta'
import sectionToc from './objects/sections/toc'
import sectionGrid from './objects/sections/grid'
import sectionList from './objects/sections/list'
import body from './objects/fields/body'
import page from './documents/page'
import layout from './documents/layout'
import settings from './documents/settings'
import {PageSectionsConfig} from '../types'
import { defineListType } from './generators/define-list-type'
import { dateRange } from './objects/fields/dateRange'

const types = ({config}: {config: void | PageSectionsConfig}) => {
  const {listTypes = [], videoType = 'mux.video'} = config ?? {}
  return [
    // documents
    page,
    layout,
    settings,
    // objects
    sectionText,
    sectionImage,
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
