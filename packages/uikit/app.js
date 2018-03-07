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
        <NavLink to="/avatar">avatar</NavLink>
      </ul>
      <Route path="/avatar" component={require('./Avatar').default} />
    </div>
  )
}
