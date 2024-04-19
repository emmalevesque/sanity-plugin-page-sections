import { SchemaTypeDefinition } from 'sanity';
import page from '../documents/page';

export function extendPage (schema: Partial<SchemaTypeDefinition>) {
  return ({
    ...page,
    ...schema,
  } as SchemaTypeDefinition)
}