import {FieldDefinition, SchemaTypeDefinition} from 'sanity'
import page from '../documents/page'

type RestFields = {
  prepend?: FieldDefinition[]
  append?: FieldDefinition[]
} | null

export function extendPage(schema: Partial<SchemaTypeDefinition>, rest?: RestFields | null) {
  return {
    ...page,
    ...schema,
    fields: rest
      ? [...(rest.prepend ?? []), ...page.fields, ...(rest.append ?? [])]
      : (page.fields as FieldDefinition[]),
  } as SchemaTypeDefinition
}
