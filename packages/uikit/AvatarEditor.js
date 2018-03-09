/**
 * <AvatarEditor />
 *
 * @flow
 */

import * as React from 'react'
import Avatar from '@rabbitcc/uikit-avatar'
import AvatarList from '@rabbitcc/uikit-avatar-list'

const AvatarView = [1,2,3,4].map((s, i) => (
  <Avatar key={i}>{s.toString()}</Avatar>
))

export default function(): React.Node {
  return (
    <div>
      <header>Avatar List</header>

      <AvatarList>
        {AvatarView}
      </AvatarList>

      <header>Disable expand</header>

      <AvatarList disable>
        {AvatarView}
      </AvatarList>

      <header>From right</header>

      <AvatarList reverse>
        {AvatarView}
      </AvatarList>

      <header>Custom space</header>

      <AvatarList space={75}>
        {AvatarView}
      </AvatarList>


      <header>Custom expand space</header>

      <AvatarList expand={-25}>
        {AvatarView}
      </AvatarList>
    </div>
  )
}
