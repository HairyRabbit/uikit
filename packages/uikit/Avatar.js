/**
 * <Avatar />
 *
 * @flow
 */

import * as React from 'react'
import Avatar from '@rabbitcc/uikit-avatar'

export default function() {
  return (
    <div>
      <h2>
        Avatar by text
      </h2>
      <Avatar>
        foo bar
      </Avatar>
      <h2>
        Avatar by image
      </h2>
      <Avatar src="https://avatars2.githubusercontent.com/u/5752902?s=460&v=4" />

      <h2>
        Avatar size
      </h2>
      <div>
        <Avatar size="small">
          foo bar
        </Avatar>
        <Avatar size="normal">
          foo bar
        </Avatar>
        <Avatar size="large">
          foo bar
        </Avatar>
        <Avatar size="huge">
          foo bar
        </Avatar>
      </div>
      <div>
        <Avatar size="small" src="https://avatars2.githubusercontent.com/u/5752902?s=460&v=4" />
        <Avatar size="normal" src="https://avatars2.githubusercontent.com/u/5752902?s=460&v=4" />
        <Avatar size="large" src="https://avatars2.githubusercontent.com/u/5752902?s=460&v=4" />
        <Avatar size="huge" src="https://avatars2.githubusercontent.com/u/5752902?s=460&v=4" />
      </div>

      <h3>custom size</h3>
      <div>
        <Avatar size="10rem" src="https://avatars2.githubusercontent.com/u/5752902?s=460&v=4" />
      </div>

      <h2>
        Avatar shape
      </h2>
      <div>
        <Avatar shape="circle">
          foo bar
        </Avatar>
        <Avatar shape="round">
          foo bar
        </Avatar>
        <Avatar shape="rect">
          foo bar
        </Avatar>
      </div>

      <div>
        <Avatar shape="circle" src="https://avatars2.githubusercontent.com/u/5752902?s=460&v=4" />
        <Avatar shape="round" src="https://avatars2.githubusercontent.com/u/5752902?s=460&v=4" />
        <Avatar shape="rect" src="https://avatars2.githubusercontent.com/u/5752902?s=460&v=4" />
      </div>

      <h2>
        Avatar color
      </h2>
      <div>
        <Avatar color="#222">
          foo bar
        </Avatar>
      </div>

      <h2>
        Avatar text shadow
      </h2>
      <div>
        <Avatar shadow size="huge">
          foo bar
        </Avatar>
      </div>

      <h2>
        format text
      </h2>
      <div>
        <Avatar format={str => str[0]}>
          凉凉
        </Avatar>
      </div>

      <h2>
        Avatar by image failback to text
      </h2>

      <Avatar src="foo" >
        foo bar
      </Avatar>
    </div>
  )
}
