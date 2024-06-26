import {LayoutProps, definePlugin} from 'sanity'

import types from './schema'

import {extendPage} from './schema/generators/extend-page'
import {PageSectionsConfig} from './types'
import {ConfigProvider} from './components/ConfigContext'

import {singletonTools} from 'sanity-plugin-singleton-tools'

const pageSections = definePlugin<PageSectionsConfig | void>(
  (
    config = {
      videoType: 'mux.video',
      listTypes: [],
    },
  ) => {
    return {
      name: 'sanity-plugin-page-sections',
      schema: {
        types: types({config}),
      },
      studio: {
        components: {
          layout: (
            props: LayoutProps & {
              children: React.ReactNode
            },
          ) =>
            ConfigProvider({
              ...props,
              value: config,
              children: props.children,
            }),
        },
      },
      plugins: [singletonTools()],
    }
  },
)

export {pageSections, extendPage}
