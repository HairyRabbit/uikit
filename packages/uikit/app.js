/**
 * <App />
 *
 * @flow
 */

import * as React from 'react'
import Route from '@rabbitcc/react-router-async'
import { NavLink } from 'react-router-dom'

export default function App(props: Props): React.Node {
  return (
    <div>
      <ul>
        <li><NavLink to="/avatar">avatar</NavLink></li>
        <li><NavLink to="/avatar-list">avatar list</NavLink></li>
        <li><NavLink to="/avatar-editor">avatar editor</NavLink></li>
      </ul>
      <Route path="/avatar" component={import(/* webpackChunkName: avatar */'./Avatar')} />
      <Route path="/avatar-list" component={import(/* webpackChunkName: avatar-list */'./AvatarList')} />
      <Route path="/avatar-editor" component={import(/* webpackChunkName: avatar-editor */'./AvatarEditor')} />
    </div>
  )
}
