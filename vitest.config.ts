import { getViteConfig } from 'astro/config'
import { configDefaults } from 'vitest/config'

export default getViteConfig({
  test: {
    exclude: [...configDefaults.exclude, 'test/e2e/**/*']
  }
})
