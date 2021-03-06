/**
 * Demos bootstrap
 *
 * @flow
 */

import * as React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './app'

ReactDOM.render(
  <Router basename="/uikit">
    <App />
  </Router>,
  document.getElementById('app')
)
