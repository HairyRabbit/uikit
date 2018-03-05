/**
 * avatar component
 *
 * @flow
 */

import * as React from 'react'
import randomColor from 'randomcolor'
import style from './style.css'

type Props = {
  src?: string,
  className?: string,
  size?: 'large' | 'normal' | 'small',
  color?: 'random' | string,
  randomColorOptions?: any,
  children?: string
}

export default function Avatar(props: Props): React.Node {
  const {
    src,
    children,
    size = 'normal',
    className = '',
    color,
    randomColorOptions = {
      luminosity: 'dark'
    },
    ...rest
  } = props

  const classNameBySize = style[size]

  /**
   * image avatar
   */
  if(!children) {
    return (
      <div className={`${style.container} ${classNameBySize} ${className}`}
           {...rest}>
        <img className={style.image} src={src} />
      </div>
    )
  }

  /**
   * text avatar
   */
  const colorStyle = {
    backgroundColor: color || randomColor(randomColorOptions)
  }

  return (
    <div className={`${style.container} ${style.text} ${classNameBySize} ${className}`}
         {...rest} style={colorStyle}>
      <span className={style.image}>
        {children.split(' ').map(s => s[0].toUpperCase()).slice(0, 2).join('')}
      </span>
    </div>
  )
}
