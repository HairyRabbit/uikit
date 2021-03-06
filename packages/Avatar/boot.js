/**
 * bootstrapper
 */

import * as React from 'react'
import ReactDOM from 'react-dom'
import Avatar from './'

ReactDOM.render(
  <div>
    <div>
      <Avatar>
        foo bar
      </Avatar>

      <Avatar shape="round" size="small">
        海
      </Avatar>

      <Avatar shape="circle" size="large">
        e m
      </Avatar>

      <Avatar shape="round" size="huge">
        梁一
      </Avatar>
    </div>

    <div>
      <Avatar size="small" src="https://avatars2.githubusercontent.com/u/6831019?s=460&v=4" />
      <Avatar src="https://avatars2.githubusercontent.com/u/6831019?s=460&v=4" />
      <Avatar size="large" shape="round" src="https://avatars2.githubusercontent.com/u/6831019?s=460&v=4" />
      <Avatar size="huge" shape="round" src="https://avatars2.githubusercontent.com/u/6831019?s=460&v=4" />
    </div>

    <div>
      <Avatar size="huge" shape="round" src="https://foo">
        a b
      </Avatar>
    </div>
  </div>,
  document.getElementById('app')
)
