/**
 * avatar component
 *
 * @flow
 */

import * as React from 'react'
import randomColor from 'randomcolor'
import style from './style.css'

type Props = {
  className?: string,
  size?: 'large' | 'normal' | 'small' | 'huge' | 'string',
  color?: 'random' | string,
  shape?: 'circle' | 'round' | 'rect',
  randomColorOptions?: any,
  format?: string => string,
  children?: string
}

export default function Avatar(props: Props): React.Node {
  const {
    children,
    className,
    size = 'normal',
    color = 'random',
    shape = 'circle',
    format,
    randomColorOptions = {
      luminosity: 'dark'
    },
    ...rest
  } = props

  const classNameBySize = isBuildinSize(size) ? style[size] : null
  const classNameByShape = style[shape]
  const classNames = [
    style.container,
    style.text,
    classNameBySize,
    classNameByShape,
    className
  ]
  const colorStyle = {
    backgroundColor: 'random' === color
      ? randomColor(randomColorOptions)
      : color
  }

  return (
    <div className={classNames.join(' ')}
         style={colorStyle}
         {...rest}>
      <span>
        {children.split(' ').map(s => s[0].toUpperCase()).slice(0, 2).join('')}
      </span>
    </div>
  )
}
