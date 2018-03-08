/**
 * <Avatar /> text avatar
 *
 * @flow
 */

import * as React from 'react'
import randomColor from 'randomcolor'
import { isValidSize, defaultSize, type Size } from './size'
import selectChars from './selectChars'
import makeSizeStyle from './makeSizeStyle'
import makeShadow from './makeShadow'
import style from './style.css'

export type Props = {
  className?: string,
  size?: Size | string,
  style?: any,
  color?: 'random' | string,
  shape?: 'circle' | 'round' | 'rect',
  shadow?: boolean,
  randomColorOptions?: any,
  format?: string => string,
  children?: string
}

export default function Avatar(props: Props): React.Node {
  const {
    children = '',
    className = null,
    style: componentStyle = {},
    size = defaultSize,
    color = 'random',
    shape = 'circle',
    shadow = false,
    format = selectChars,
    randomColorOptions = {
      luminosity: 'dark'
    },
    ...rest
  } = props

  /**
   * classnames
   */
  const classNameBySize = isValidSize(size) ? style[size] : null
  const classNameByShape = style[shape]
  const classNames = [
    style.container,
    style.text,
    classNameBySize,
    classNameByShape,
    className
  ].join(' ')

  /**
   * styles
   */
  const sizeStyle = !classNameBySize ? makeSizeStyle(size) : {}
  const colour = 'random' === color
      ? randomColor(randomColorOptions)
      : color
  const colorStyle = {
    backgroundColor: colour
  }
  const shadowStyle = shadow ? {
    textShadow: makeShadow(colour)
  } : {}
  const styles = {
    ...colorStyle,
    ...sizeStyle,
    ...shadowStyle,
    ...componentStyle
  }

  return (
    <div className={classNames}
         style={styles}
         {...rest}>
      <span>
        {format(children)}
      </span>
    </div>
  )
}
