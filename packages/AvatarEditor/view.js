/**
 * <AvatarEditor />
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
  value: string
}

export default class AvatarEditor extends React.Component<Props, State> {
  state: State
  reader: FileReader
  image: HTMLImageElement
  editor: HTMLDivElement
  field: HTMLInputElement
  offsetX: number
  offsetY: number

  constructor(props: Props) {
    super(props)

    this.state = {
      preview: '',
      zoom: 1,
      drawing: false,
      begX: 0,
      begY: 0,
      endX: 0,
      endY: 0
    }
  }

  componentDidMount() {
    const reader = new FileReader()
    reader.addEventListener('load', this.setImageSrc.bind(this))
    this.reader = reader
  }

  setImageSrc(evt) {
    this.setState({
      preview: evt.target.result
    }, () => {
      this.offsetX = this.editor.offsetLeft
      this.offsetY = this.editor.offsetTop
    })
  }

  handleUploadFile(evt) {
    const file = evt.target.files[0]
    console.log(file)
    /**
     * lastModified : 1520072640503
     lastModifiedDate: Sat Mar 03 2018 18:24:00 GMT+0800 (中国标准时间)
     name: "20160603163807_U5fQ2.jpeg"
     size: 55763
     type: "image/jpeg"
     */
    this.reader.readAsDataURL(file)
  }

  handleResizeImage(evt) {
    /**
     * up   - evt.deltaY > 0
     * down - evt.deltaY < 0
     */
    const dir = evt.deltaY > 0 ? 1 : -1
    this.setState(prev => ({
      zoom: prev.zoom + dir * 0.025
    }))
  }

  setAreaPoint(evt): void {
    const { pageX: x, pageY: y } = evt
    this.setState({
      drawing: true,
      begX: x,
      begY: y,
      endX: x,
      endY: y
    })
  }

  setArea(evt): void {
    const { pageX: x, pageY: y } = evt
    this.setState({
      drawing: false
    })
  }

  drawArea(evt): void {
    if(this.state.drawing) {
      const { pageX: x, pageY: y } = evt
      this.setState({
        endX: x,
        endY: y
      })
    }
  }

  render(): React.Node {
    const {
      className = null,
      children,
      ...rest
    } = this.props

    const classNames = [
      style.container,
      classNames
    ].join(' ')

    const editorStyle = {
      // backgroundImage: `url(${this.state.preview})`
    }

    const imageStyle = {
      transform: `scale3d(${this.state.zoom}, ${this.state.zoom}, 1)`
    }

    const areaStyle = {
      top: this.state.begY,
      left: this.state.begX,
      width: this.state.endX - this.state.begX,
      height: this.state.endY - this.state.begY
    }

    const handleFile = this.handleUploadFile.bind(this)
    const handleResize = this.handleResizeImage.bind(this)
    const setAreaPoint = this.setAreaPoint.bind(this)
    const drawArea = this.drawArea.bind(this)
    const setArea = this.setArea.bind(this)

    return (
      <div className={style.container} ref={el => this.editor = el}>
        <div className={style.main}>
          <input type="file" accept="image/*"
                 onChange={handleFile}
                 ref={el => this.field = el} />
            <div className={style.editor} style={editorStyle}>
              <div className={style.area}style={areaStyle}></div>
              <div className={style.overlay}
                   onMouseDown={setAreaPoint}
                   onMouseMove={drawArea}
                   onMouseUp={setArea}></div>
              <img src={this.state.preview}
                   style={imageStyle}
                   className={style.background}
                   onWheel={handleResize} />
            </div>
        </div>
        <div className={style.preview}>
          <Avatar size="huge" src={this.state.preview} />
        </div>
      </div>
    )
  }
}
