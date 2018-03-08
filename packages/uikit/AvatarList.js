/**
 * <Avatar />
 *
 * @flow
 */

import * as React from 'react'
import Avatar from '@rabbitcc/uikit-avatar'
import AvatarList from '@rabbitcc/uikit-avatar-list'

const AvatarView = [1,2,3,4].map((s, i) => (
  <Avatar key={i}>{s.toString()}</Avatar>
))

export default function() {
  return (
    <div>
      <h2>
        Avatar List
      </h2>
      <AvatarList>
        {AvatarView}
      </AvatarList>

      <h2>
        Disable expand
      </h2>
      <AvatarList disable>
        {AvatarView}
      </AvatarList>

      <h2>
        From right
      </h2>
      <AvatarList reverse>
        {AvatarView}
      </AvatarList>

      <h2>
        Custom space
      </h2>
      <AvatarList space={75}>
        {AvatarView}
      </AvatarList>

      <h2>
        Custom expand space
      </h2>
      <AvatarList expand={-25}>
        {AvatarView}
      </AvatarList>
    </div>
  )
}
