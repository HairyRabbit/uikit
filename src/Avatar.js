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
    </div>
  )
}
