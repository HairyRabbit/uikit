/**
 * <Avatar /> image avatar
 *
 * @flow
 */

import * as React from 'react'
import randomColor from 'randomcolor'
import { isValidSize, defaultSize, type Size } from './size'
import selectChars from './selectChars'
import makeSizeStyle from './makeSizeStyle'
import style from './style.css'

export type Props = {
  className?: string,
  size?: Size | string,
  color?: 'random' | string,
  shape?: 'circle' | 'round' | 'rect',
  randomColorOptions?: any,
  format?: string => string,
  children?: string
}

export default function Avatar(props: Props): React.Node {
  const {
    children = '',
    className = null,
    size = defaultSize,
    color = 'random',
    shape = 'circle',
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
  const colorStyle = {
    backgroundColor: 'random' === color
      ? randomColor(randomColorOptions)
      : color
  }
  const styles = {
    ...colorStyle,
    ...sizeStyle
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
