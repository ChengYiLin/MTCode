import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { markdownSchema } from 'sanity-plugin-markdown';

import { schemaTypes } from './schemas';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export default defineConfig({
  basePath: '/studio',
  name: 'Martin_Code',
  title: 'Martin Code',
  projectId,
  dataset,
  plugins: [deskTool(), visionTool(), markdownSchema()],
  schema: {
    types: schemaTypes,
  },
});
