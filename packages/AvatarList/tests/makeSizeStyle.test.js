/**
 * @jest
 */

beforeEach(() => {
  jest.resetModules()
})

test('should make size styles', () => {
  jest.doMock('../style.css', () => {
    return {
      ratio: 2.25
    }
  })
  const makeSizeStyle = require('../makeSizeStyle').default
  expect(makeSizeStyle('1rem')).toEqual({
    width: '1rem',
    height: '1rem',
    lineHeight: '1rem',
    fontSize: 'calc(1rem / 2.25)'
  })
})
