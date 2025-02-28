import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'lorenzoricci',
  title: 'Sanity Next.js Site',

  projectId: 'yd28xq2m',
  dataset: 'production',

  basePath: "/studio",

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
})
