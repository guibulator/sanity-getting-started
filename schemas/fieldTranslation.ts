import {languages, baseLanguage} from './languages'
import {cloneDeep} from 'lodash'
// This is the basis for all fields that should have translations.
// Its used to fill out more complete field definitions in
// 'translateDocs' below
const languageField = {
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: {collapsible: true, collapsed: false},
    },
  ],
}

// We need to figure out which language to map the preview
// of this document to. Use the 'localizedPreview' object
// to point to the base language properties. This does not
// support custom previews, only the build in 'title', 'subtitle'
// and 'media' properties.
const localizePreview = (preview) => {
  if (!preview) return null
  const {select} = preview
  if (!select) return null
  if (preview.localize === false) return
  return {
    select: {
      ...(select.title && {title: `${select.title}.${baseLanguage.name}`}),
      ...(select.subtitle && {
        subtitle: `${select.subtitle}.${baseLanguage.name}`,
      }),
      ...(select.media && {media: `${select.media}.${baseLanguage.name}`}),
    },
  }
}

export const translateFields = (docs) => {
  const documents = docs.map((doc) => {
    // Change all the fields to object versions with properties for each
    // language, if either the document has localize: true or individual fields
    const fields = doc.fields.map((field) => visitAndTranslateFields(doc, field))

    return {
      ...doc,
      preview: localizePreview(doc.preview) || doc.preview,
      fields,
    }
  })
  console.log(documents)
  return documents
}

function visitAndTranslateFields(doc, field, fromObject) {
  const shouldNotLocalize = field.type === 'reference'
  if (shouldNotLocalize) return field

  if (field.type === 'object') {
    const translatedObjectFields = field.fields.map((objectField) => {
      if (!objectField.localize) return objectField
      return visitAndTranslateFields(doc, objectField, true)
    })
    return {
      ...field,
      name: field.name,
      type: 'object',
      fields: translatedObjectFields,
    }
  }
  // Use the field defined as-is if its not to be translated
  if (!field.localize) return field
  if (fromObject) {
    delete field.group
  }
  let fieldOptionsSource
  if (field.type == 'slug') {
    // The slug type has options:{source:''}
    // We need to take the source and source it from all languages
    // because we want translated urls
    fieldOptionsSource = field.options.source
  }
  return {
    ...languageField,
    name: field.name,
    group: field.group,
    fields: languages.map((language, i) => {
      const translatedField = {
        ...cloneDeep(field),
        title: language.title,
        name: language.name,
        // All other languages except the first one is collapsed by default
        fieldset: i === 0 ? null : 'translations',
      }
      if (field.type == 'slug') {
        translatedField.options.source = fieldOptionsSource + `.${language.name}`
      }
      delete translatedField.group
      return translatedField
    }),
  }
}
