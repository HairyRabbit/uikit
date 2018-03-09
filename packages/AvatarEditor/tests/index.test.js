/**
 * @jest
 */

import * as React from 'react'

jest.doMock('../style.css', () => {
  return {}
})

test('should default export <Avatar />', () => {
  const Avatar = require('../').default
  expect(React.isValidElement(<Avatar />)).toBe(true)
})

test('should export <TextAvatar />', () => {
  const TextAvatar = require('../').TextAvatar
  expect(React.isValidElement(<TextAvatar />)).toBe(true)
})

test('should export <ImageAvatar />', () => {
  const ImageAvatar = require('../').ImageAvatar
  expect(React.isValidElement(<ImageAvatar />)).toBe(true)
})
