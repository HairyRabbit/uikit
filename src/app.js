/**
 * <App />
 *
 * @flow
 */

import * as React from 'react'
import { Route } from 'react-router-dom'

export default function App(props: Props): React.Node {
  return (
    <div>
      <Route path="avatar" component={require('./Avatar')} />
    </div>
  )
}
