/**
 * @jest
 */

import * as React from 'react'
import { configure, mount } from 'enzyme'
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

jest.mock('randomcolor', () => {
  return () => '#fff'
})


/**
 * render
 */

test('should render image', () => {
  const Avatar = require('../view').default
  const wrapper = mount(<Avatar src="foo" />)
  expect(wrapper.find('img').prop('src')).toEqual('foo')
})

test('should render text', () => {
  const Avatar = require('../view').default
  const wrapper = mount(<Avatar>foo</Avatar>)
  expect(wrapper.text()).toEqual('F')
})

/**
 * failed state test
 */

test('should render text failback from image', () => {
  const Avatar = require('../view').default
  const wrapper = mount(<Avatar src="foo">bar</Avatar>)
  expect(wrapper.find('img').prop('src')).toEqual('foo')
  expect(wrapper.text()).not.toEqual('B')
  wrapper.setState({ failed: true })
  expect(wrapper.text()).toEqual('B')
})


/**
 * onError prop test
 */

test('should call when provide onError', () => {
  const mockfn = jest.fn(() => true)
  const Avatar = require('../view').default
  const wrapper = mount(<Avatar src="foo" onError={mockfn}>bar</Avatar>)
  expect(wrapper.find('img').prop('src')).toEqual('foo')
  expect(wrapper.text()).not.toEqual('B')
  wrapper.find('img').simulate('error')
  expect(mockfn).toHaveBeenCalled()
  expect(wrapper.text()).toEqual('B')
})

test('should not change state when onError return false', () => {
  const mockfn = jest.fn(() => false)
  const Avatar = require('../view').default
  const wrapper = mount(<Avatar src="foo" onError={mockfn}>bar</Avatar>)
  expect(wrapper.find('img').prop('src')).toEqual('foo')
  expect(wrapper.text()).not.toEqual('B')
  wrapper.find('img').simulate('error')
  expect(mockfn).toHaveBeenCalled()
  expect(wrapper.text()).not.toEqual('B')
})

test('should ignore error handler when onError not a function', () => {
  const Avatar = require('../view').default
  const wrapper = mount(<Avatar src="foo" onError={42}>bar</Avatar>)
  expect(wrapper.find('img').prop('src')).toEqual('foo')
  expect(wrapper.text()).not.toEqual('B')
  wrapper.find('img').simulate('error')
  expect(wrapper.text()).toEqual('B')
})


/**
 * snapshots test
 */

test('should match snapshot', () => {
  const Avatar = require('../view').default
  const tree = renderer
        .create(<Avatar src="foo">bar</Avatar>)
        .toJSON()

  expect(tree).toMatchSnapshot()
})

test('should match snapshot when not provide image', () => {
  const Avatar = require('../view').default
  const tree = renderer
        .create(<Avatar>foo</Avatar>)
        .toJSON()

  expect(tree).toMatchSnapshot()
})
