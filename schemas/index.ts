// document schemas
import category from './documents/category'
import post from './documents/post'
import siteSettings from './documents/siteSettings'
import page from './documents/page'
import author from './documents/author'

// Object types

import objects, {localizeObjects} from './objects'
import {translateFields} from './fieldTranslation'

// Then we give our schema to the builder and provide the result to Sanity
export const schemaTypes = [
  // The following are document types which will appear
  // in the studio.
  siteSettings,
  post,
  category,
  // page,
  author,
  // When added to this list, object types can be used as
  // { type: 'typename' } in other document schemas
]
  .concat([...objects])
  .concat(translateFields([...localizeObjects]))
