/**
 * <TreeView />
 *
 * @flow
 */

import * as React from 'react'

export type Node = {
  name: string,
  children: Array<Node>,
  expand: boolean
}

export type Style = {
  [prop: string]: string
}

export { default as default } from './view'
