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

export default class AvatarList extends React.PureComponent<Props, State> {
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

    const translateStyle = index => {
      const number = !this.state.hover ? space : expand
      const xaxis = !reverse
            ? -index * number
            : (len - index) * number

      return {
        transform: `translate3d(${xaxis}%, 0, 0)`
      }
    }

    const classNames = [
      style.container,
      classNames
    ].join(' ')

    const handle = this.setHover.bind(this)

    return (
      <ul className={classNames}
          onMouseEnter={handle(true)}
          onMouseLeave={handle(false)}
          {...rest}>
        {children.map((component, index) => (
          <li className={style.item}
              style={translateStyle(index)}
              key={`ArrayListItem-${index}`}>
            {component}
          </li>
        ))}
      </ul>
    )
  }
}
