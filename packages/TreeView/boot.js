/**
 * bootstrapper
 *
 * @flow
 */

import * as React from 'react'
import ReactDOM from 'react-dom'
import TreeView from './'

const datas = {
  name: 'foo',
  children: [{
    name: 'foo-bar'
  },{
    name: 'foo-baz',
    children: [{
      name: 'foo-baz-qux'
    },{
      name: 'foo-baz-quxx',
      children: [{
        name: 'foo-baz-quexx-quxxx'
      }]
    },{
      name: 'foo-baz-qux'
    }]
  },{
    name: 'foo-qux'
  }]
}

ReactDOM.render(
  <TreeView>
    {datas}
  </TreeView>,
  document.getElementById('app')
)
