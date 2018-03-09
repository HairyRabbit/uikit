/**
 * <AvatarList />
 *
 * Avatar list
 *
 * @flow
 */

import * as React from 'react'
import Avatar from '@rabbitcc/uikit-avatar'
import style from './style.css'

type Props = {
  className?: string,
  disable?: boolean,
  reverse?: boolean,
  space?: number,
  expand?: number
}

type State = {
  hover: boolean
}

export default class AvatarEditor extends React.Component<Props, State> {
  state: State

  constructor(props: Props) {
    super(props)

    this.state = {
      hover: false
    }
  }

  setHover(value): () => void {
    return () => {
      if(!this.props.disable) {
        this.setState({ hover: value })
      }
    }
  }

  render(): React.Node {
    const {
      disable = false,
      reverse = false,
      className = null,
      space = 50,
      expand = 25,
      children,
      ...rest
    } = this.props

    const len = children.length

    const classNames = [
      style.container,
      classNames
    ].join(' ')

    return (
      <div className={style.container}>
        <div className={style.editor}>

        </div>
        <div className={style.preview}>

        </div>
      </div>
    )
  }
}
