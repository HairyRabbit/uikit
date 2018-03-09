/**
 * <Avatar />
 *
 * Avatar
 *
 * @flow
 */

import * as React from 'react'
import randomColor from 'randomcolor'
import TextAvatar, { type Props as TextAvatarProps } from './text.view'
import ImageAvatar, { type Props as ImageAvatarProps }from './image.view'
import { type Shape } from './'
import style from './style.css'

type Props =
  & TextAvatarProps
  & ImageAvatarProps
  & {
    onBeforeError: SyntheticEvent<HTMLImageElement> => boolean,
    onAfterError: Function
  }

type State = {
  failed: boolean
}

export default class Avatar extends React.Component<Props, State> {
  state: State

  constructor(props: Props) {
    super(props)

    this.state = {
      failed: false
    }
  }

  handleLoadFailed(event: SyntheticEvent<HTMLImageElement>): void {
    const preProcess = this.props.onBeforeError
    const postProcess = this.props.onAfterError
    let result = true

    if(preProcess && 'function' === typeof preProcess) {
      result = preProcess(event)
    }

    if(result) {
      this.setState({ failed: true }, () => {
        if(postProcess && 'function' === typeof postProcess) {
          postProcess.bind(this)()
        }
      })
    }
  }

  render(): React.Node {
    const {
      src,
      onBeforeError,
      onAfterError,
      children,
      ...rest
    } = this.props

    if(src && !this.state.failed) {
      return (
        <ImageAvatar src={src}
                     onError={this.handleLoadFailed.bind(this)}
                     {...rest} />
      )
    }

    return (
      <TextAvatar {...rest}>
        {children}
      </TextAvatar>
    )
  }
}
