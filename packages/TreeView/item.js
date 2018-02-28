/**
 * <TreeItemView />
 *
 * @flow
 */

import * as React from 'react'
import type { Node, Style } from './'

type Props = {
  hasChildren: boolean,
  depth: number,
  icon: React.Node,
  children: string
}

export default function TreeItemView(props: Props): React.Node {
  const { hasChildren, icon, children, ...rest } = props

  return (
    <header {...rest}>
      {hasChildren && icon}
      {children}
    </header>
  )
}
