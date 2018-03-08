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

jest.mock('randomcolor', () => {
  return () => '#fff'
})


/**
 * format prop test
 */

test('should render children one word', () => {
  const Avatar = require('../text.view').default
  const wrapper = shallow(<Avatar>foo</Avatar>)
  expect(wrapper.text()).toEqual('F')
})

test('should render children two words', () => {
  const Avatar = require('../text.view').default
  const wrapper = shallow(<Avatar>foo bar</Avatar>)
  expect(wrapper.text()).toEqual('FB')
})

test('should render children three words', () => {
  const Avatar = require('../text.view').default
  const wrapper = shallow(<Avatar>foo bar qux</Avatar>)
  expect(wrapper.text()).toEqual('FB')
})

test('should render blank string', () => {
  const Avatar = require('../text.view').default
  const wrapper = shallow(<Avatar />)
  expect(wrapper.text()).toEqual('')
})

test('should use custom format', () => {
  const Avatar = require('../text.view').default
  const wrapper = shallow(<Avatar format={str => 'foo'}/>)
  expect(wrapper.text()).toEqual('foo')
})


/**
 * size prop test
 */

test('should use default size', () => {
  const Avatar = require('../text.view').default
  const wrapper = shallow(<Avatar>foo</Avatar>)
  expect(wrapper.hasClass('normal')).toEqual(true)
})

test('should use build in size', () => {
  const Avatar = require('../text.view').default
  const wrapper = shallow(<Avatar size="small">foo</Avatar>)
  expect(wrapper.hasClass('small')).toEqual(true)
})

test('should custom size', () => {
  const Avatar = require('../text.view').default
  const wrapper = shallow(<Avatar size="1rem">foo</Avatar>)
  expect(wrapper.hasClass('normal')).not.toEqual(true)
  expect(wrapper.prop('style')).toEqual({
    backgroundColor: '#fff',
    width: '1rem',
    height: '1rem',
    lineHeight: '1rem',
    fontSize: 'calc(1rem / 2.25)'
  })
})


/**
 * shape prop test
 */

test('should use default shape', () => {
  const Avatar = require('../text.view').default
  const wrapper = shallow(<Avatar>foo</Avatar>)
  expect(wrapper.hasClass('circle')).toEqual(true)
})

test('should use round shape', () => {
  const Avatar = require('../text.view').default
  const wrapper = shallow(<Avatar shape="round">foo</Avatar>)
  expect(wrapper.hasClass('round')).toEqual(true)
})


/**
 * color prop test
 */

test('should use random color', () => {
  const Avatar = require('../text.view').default
  const wrapper = shallow(<Avatar>foo</Avatar>)
  expect(wrapper.prop('style')).toEqual({
    backgroundColor: '#fff'
  })
})

test('should use round shape', () => {
  const Avatar = require('../text.view').default
  const wrapper = shallow(<Avatar color="#000">foo</Avatar>)
  expect(wrapper.prop('style')).toEqual({
    backgroundColor: '#000'
  })
})


/**
 * snapshots test
 */

test('should match snapshot', () => {
  const Avatar = require('../text.view').default
  const tree = renderer
        .create(<Avatar>foo bar</Avatar>)
        .toJSON()

  expect(tree).toMatchSnapshot()
})
