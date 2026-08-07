import { defineConfig } from 'vitest/config'
import { resolve } from 'node:path'

export default defineConfig({
  resolve: {
    alias: {
      '@oas-isui/core': resolve(__dirname, 'packages/core/src'),
      '@oas-isui/theme': resolve(__dirname, 'packages/theme/src'),
    },
  },
  test: {
    environment: 'happy-dom',
    include: ['packages/**/*.test.ts'],
    globals: true,
  },
})
