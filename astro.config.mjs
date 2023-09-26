import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    // Ref: https://ui.shadcn.com/docs/installation/astro#update-astro-tailwind-config
    tailwind({
      applyBaseStyles: false,
    }),
  ],
})
