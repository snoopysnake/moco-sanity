import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'MoCo CrossFit',

  projectId: '8gdwo19p',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },

  document: {
    newDocumentOptions: (prev, { currentUser, creationContext }) => {
      const { type, schemaType } = creationContext;
      if (type === 'structure' && schemaType == 'schedule') {
        return [];
      }
      return prev;
    },
  },
})
