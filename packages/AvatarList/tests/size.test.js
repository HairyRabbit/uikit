/**
 * @jest
 */

test('should return true when member of buildin size', () => {
  const isValidSize = require('../size').isValidSize
  expect(isValidSize('small')).toBe(true)
})

test('should return false when not member of buildin size', () => {
  const isValidSize = require('../size').isValidSize
  expect(isValidSize('foo')).toBe(false)
})
