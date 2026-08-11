import { defineConfig } from 'vite'
import { resolve } from 'node:path'

export default defineConfig({
  resolve: {
    alias: {
      '@oas-isui/ui': resolve(import.meta.dirname, 'packages/ui/src/index.ts'),
      '@oas-isui/core': resolve(import.meta.dirname, 'packages/core/src/index.ts'),
      '@oas-isui/theme': resolve(import.meta.dirname, 'packages/theme/index.css'),
      '@oas-isui/icons': resolve(import.meta.dirname, 'packages/icons/src/index.ts'),
    },
  },
})
