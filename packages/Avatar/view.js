/**
 * avatar component
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
    onError: SyntheticEvent<HTMLImageElement> => boolean
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
    const handleError = this.props.onError
    let result = true

    if(handleError && 'function' === typeof handleError) {
      result = handleError(event)
    }

    if(result) {
      this.setState({ failed: true })
    }
  }

  render(): React.Node {
    const {
      src,
      onError,
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
