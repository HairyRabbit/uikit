/**
 * <AvatarGroup> views
 *
 * @flow
 */

import * as React from 'react'
import randomColor from 'randomcolor'
import Avatar from '@rabbitcc/uikit-avatar'
import style from './style.css'

type Props = {
  order?: 'next' | 'prev' | 'both' | 'random',
  children?: string
}

type State = {
  index: number
}

export default class AvatarGroup<Props, State> extends React.Component {
  state: State

  constructor(props: Props) {
    super(props)

    this.state = {
      index: 0
    }
  }

  changeIndexHandle() {

  }

  /**
   * render image avatar
   */
  renderImage(): React.Node {
    const {
      src,
      className,
      size = 'normal',
      shape = 'circle',
      ...rest
    } = this.props

    const classNameByShape = style[shape]
    const classNameBySize = isBuildinSize(size) ? style[size] : null
    const classNames = [
      style.container,
      classNameBySize,
      classNameByShape,
      className
    ]

    return (
      <div className={classNames.join(' ')} {...rest}>
        <img className={style.image}
             src={src}
             onError={this.imageLoadFailedHandle.bind(this)} />
      </div>
    )
  }

  renderText(): React.Node {
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
    } = this.props

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

  render(): React.Node {
    const {
      src,
      children
    } = this.props

    if(this.state.failed) {
      return this.renderText()
    } else {
      if(src) {
        return this.renderImage()
      } else {
        return this.renderText()
      }
    }
  }
}

export function isBuildinSize(size: string): boolean %checks {
  return Boolean(~['normal', 'large', 'small', 'huge'].indexOf(size))
}
