/**
 * @jest
 */

test('should be blank string', () => {
  const selectChars = require('../selectChars').default
  expect(selectChars('')).toBe('')
})

test('should upper case first char', () => {
  const selectChars = require('../selectChars').default
  expect(selectChars('foo')).toBe('F')
  expect(selectChars('世界')).toBe('世')
})

test('should upper case first char by two words', () => {
  const selectChars = require('../selectChars').default
  expect(selectChars('foo bar')).toBe('FB')
})

test('should upper case first char and split the first two word by multi words', () => {
  const selectChars = require('../selectChars').default
  expect(selectChars('foo bar baz')).toBe('FB')
})
