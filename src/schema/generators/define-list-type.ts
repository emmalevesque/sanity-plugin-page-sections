import {SchemaTypeDefinition} from 'sanity'
import page from '../documents/page'
import {PageSectionsConfig} from '../../types'

export function defineListType(
  schema: Partial<SchemaTypeDefinition>,
  config: void | PageSectionsConfig,
) {
  const { fields = [] } = schema as {fields: any[]} ?? {}
  const { listTypes = [] } = config ?? {}
  return {
    ...schema,
    fields: fields.map((field) => {
      if (field.name === 'items') {
        return {
          ...field,
          of: [
            {
              type: 'reference',
              to: listTypes.map((listType) => ({
                type: listType,
              })),
            },
          ],
        }
      }
      return field
    }),
  } as SchemaTypeDefinition
}
