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
      <header>
        Avatar by text
      </header>
      <Avatar>
        foo bar
      </Avatar>
      <header>
        Avatar by image
      </header>
      <Avatar src="https://avatars2.githubusercontent.com/u/5752902?s=460&v=4" />

      <header>
        Avatar size
      </header>
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

      <header>
        Avatar shape
      </header>
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

      <header>
        Avatar color
      </header>
      <div>
        <Avatar color="#222">
          foo bar
        </Avatar>
      </div>

      <header>
        Avatar text shadow
      </header>
      <div>
        <Avatar shadow size="huge">
          foo bar
        </Avatar>
      </div>

      <header>
        format text
      </header>
      <div>
        <Avatar format={str => str[0]}>
          凉凉
        </Avatar>
      </div>

      <header>Load image failback to text</header>

      <Avatar src="foo" >
        foo bar
      </Avatar>

      <header>Conver text to inline image</header>

      <Avatar inline>
        foo bar
      </Avatar>
    </div>
  )
}
