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
import makeInlineImage from './makeInlineImage'
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
  inline: boolean,
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
    inline = false,
    randomColorOptions = {
      luminosity: 'dark'
    },
    ...rest
  } = props

  /**
   * classnames
   */
  const classNameBySize = isValidSize(size) ? style['size-' + size] : null
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

  /**
   * @TODO: use buildin colors
   * ["#1abc9c", "#16a085", "#f1c40f", "#f39c12", "#2ecc71", "#27ae60", "#e67e22", "#d35400", "#3498db", "#2980b9", "#e74c3c", "#c0392b", "#9b59b6", "#8e44ad", "#bdc3c7", "#34495e", "#2c3e50", "#95a5a6", "#7f8c8d", "#ec87bf", "#d870ad", "#f69785", "#9ba37e", "#b49255", "#b49255", "#a94136"]
   */
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

  const text = format(children)
  const childView = !inline
        ? (<span>{text}</span>)
        : (<img className={classNameByShape}
           src={makeInlineImage(text, style[size], colour)} />)

  return (
    <div className={classNames} style={styles} {...rest}>
      {childView}
    </div>
  )
}
