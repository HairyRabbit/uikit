/**
 * @jest
 */

import * as React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer'

/**
 * setup
 */

configure({ adapter: new Adapter() })

jest.mock('../style.css', () => {
  return {
    small: 'small',
    normal: 'normal',
    large: 'large',
    huge: 'huge',
    circle: 'circle',
    round: 'round',
    ratio: 2.25
  }
})


/**
 * src prop test
 */

test('should render image', () => {
  const Avatar = require('../image.view').default
  const wrapper = shallow(<Avatar src="foo" />)
  expect(wrapper.find('img').prop('src')).toEqual('foo')
})

test('should report error when not given src', () => {
  const mockfn = jest.fn()
  console.error = mockfn
  const Avatar = require('../image.view').default
  const wrapper = shallow(<Avatar />)
  expect(mockfn).toHaveBeenCalled()
})


/**
 * size prop test
 */

test('should use default size', () => {
  const Avatar = require('../image.view').default
  const wrapper = shallow(<Avatar src="foo" />)
  expect(wrapper.hasClass('normal')).toEqual(true)
})

test('should use build in size', () => {
  const Avatar = require('../image.view').default
  const wrapper = shallow(<Avatar size="small" src="foo" />)
  expect(wrapper.hasClass('small')).toEqual(true)
})

test('should custom size', () => {
  const Avatar = require('../image.view').default
  const wrapper = shallow(<Avatar size="1rem" src="foo" />)
  expect(wrapper.hasClass('normal')).not.toEqual(true)
  expect(wrapper.prop('style')).toEqual({
    width: '1rem',
    height: '1rem',
    lineHeight: '1rem',
    fontSize: 'calc(1rem / 2.25)'
  })
})

/**
 * snapshots test
 */

test('should match snapshot', () => {
  const Avatar = require('../image.view').default
  const tree = renderer
        .create(<Avatar src="foo" />)
        .toJSON()

  expect(tree).toMatchSnapshot()
})
