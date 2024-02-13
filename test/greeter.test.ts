import { Greeter } from 'src/lib/Greeter'
import { describe, it, expect } from 'vitest'

describe('Greeter', () => {
  it('should display the name', () => {
    expect(Greeter('Astro')).toBe('Hello, Astro!')
  })
})
