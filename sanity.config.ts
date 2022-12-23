import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {singletonPlugin} from './plugins'

export default defineConfig({
  name: 'default',
  title: 'Typescript Test Project',

  projectId: 'xxjkn31l',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), singletonPlugin(['siteSettings'])],

  schema: {
    types: schemaTypes,
  },
})
