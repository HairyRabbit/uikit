/**
 * <TreeView /> views
 *
 * @flow
 */

import * as React from 'react'
import TreeItemView from './item'
import type { Node, Style } from './'
import style from './style.css'

type Props = {
  depth?: number,
  indent?: null | string | number => Style,
  icon?: boolean => React.Node,
  collapsable?: true,
  expanded: boolean | Node => boolean,
  component?: React.Node,
  render?: Node => React.Node,
  keyed: 'string',
  children: Node
}

export default function TreeView(props: Props): React.Node {
  const {
    depth = 0,
    children = {},
    expanded,
    icon,
    component,
    render,
    indent = '0.5rem',
    ...rest
  } = props

  const {
    name = '',
    expand,
    children: nodes = [],
  } = children

  /**
   * child view
   */
  const hasChildren = Boolean(nodes.length)
  const childViews = hasChildren && nodes.map(createChildTreeView(depth))

  /**
   * init expand
   */
  const isExpand = undefined === expand
        ? ('function' !== typeof expanded ? expanded : expanded(children))
        : expand
  const iconView = icon ? icon(isExpand) : (isExpand ? <span>+</span> : <span>-</span>)

  /**
   * custom component name render
   */
  let Component
  if(component) {
    Component = component
  } else if(render) {
    Component = render(children)
  } else {
    Component = TreeItemView
  }

  /**
   * setup item indent
   */
  let indentStyle
  if(null === indent) {
    indentStyle = null
  } else if('function' === typeof indent) {
    indentStyle = {
      style: indent(depth)
    }
  } else {
    indentStyle = {
      style: pad(depth, indent)
    }
  }

  return (
    <div {...rest}>
      <Component hasChildren={hasChildren} icon={iconView} {...indentStyle}>
        {name}
      </Component>
      <ul className={style.list}>
        {childViews}
      </ul>
    </div>
  )
}

export function createChildTreeView(depth: number) {
  const dp = depth + 1
  return function ChildTreeView(child: Node, index: number): React.Node {
    return (
      <li key={`TreeView-${dp}-${index}`}>
        <TreeView depth={dp}>
          {child}
        </TreeView>
      </li>
    )
  }
}

export function pad(depth: number, value: string): Style {
  return {
    paddingLeft: `calc(${depth} * ${value})`
  }
}
