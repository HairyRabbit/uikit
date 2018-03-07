/**
 * make size style
 *
 * @example
 *
 * ```js
 * makeSizeStyle('1.5rem')
 *
 * // output:
 * {
 *  width: 1.5rem,
 *  height: 1.5rem,
 *  lineHeight: 1.5rem,
 *  fontSize: calc(1.5rem / 2.25)
 * }
 * ```
 *
 * @flow
 */

import style from './style.css'

type SizeStyle = {
  width: string,
  height: string,
  lineHeight: string,
  fontSize: string
}

export default function makeSizeStyle(size: string): SizeStyle {
  const ratio = style.ratio
  return {
    width: size,
    height: size,
    lineHeight: size,
    fontSize: `calc(${size} / ${ratio})`
  }
}
