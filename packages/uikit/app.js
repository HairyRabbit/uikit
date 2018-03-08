/**
 * <App />
 *
 * @flow
 */

import * as React from 'react'
import { NavLink, Route } from 'react-router-dom'

export default function App(props: Props): React.Node {
  return (
    <div>
      <ul>
        <li><NavLink to="/avatar">avatar</NavLink></li>
        <li><NavLink to="/avatar-list">avatar list</NavLink></li>
      </ul>
      <Route path="/avatar" component={require('./Avatar').default} />
      <Route path="/avatar-list" component={require('./AvatarList').default} />
    </div>
  )
}
