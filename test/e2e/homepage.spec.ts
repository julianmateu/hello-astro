import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test.describe('Homepage', () => {
  test('has title', async ({ page }) => {
    await expect(page).toHaveTitle(/Astro/)
  })

  test('has heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Astro' })).toBeVisible()
  })

  test('has greeting', async ({ page }) => {
    await expect(page.getByText('Hello, Astro!')).toBeVisible()
  })
})
