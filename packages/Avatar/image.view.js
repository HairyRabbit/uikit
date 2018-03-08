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
import style from './style.css'

export type Props = {
  src: string,
  className?: string,
  style?: any,
  size?: Size | string,
  shape?: 'circle' | 'round' | 'rect',
  onError: Function
}

export default function Avatar(props: Props): React.Node {
  const {
    src,
    className = null,
    style: componentStyle = {},
    size = 'normal',
    shape = 'circle',
    onError,
    ...rest
  } = props

  if(!src) {
    console.error(`<Avatar /> src was required`)
    return null
  }

  /**
   * classnames
   */
  const classNameBySize = isValidSize(size) ? style[size] : null
  const classNameByShape = style[shape]
  const classNames = [
    style.container,
    classNameBySize,
    classNameByShape,
    className
  ].join(' ')

  /**
   * styles
   */
  const sizeStyle = !classNameBySize ? makeSizeStyle(size) : {}
  const styles = {
    ...sizeStyle,
    ...componentStyle
  }

  return (
    <div className={classNames}
         style={styles}
         {...rest}>
      <img className={style.image}
           src={src}
           onError={onError} />
    </div>
  )
}
