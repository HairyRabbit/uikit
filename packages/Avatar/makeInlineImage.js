/**
 * make inline image
 *
 * Process:
 *   1. wrap svg tags
 *   2. encode to base64 string
 *   3. prepand inline src prefix
 *
 * @example
 *
 * ```js
 * makeInlineImage('AB') //=> data:image/svg+xml;base64,...
 * ```
 *
 * @TODO: support shapes
 *
 * @flow
 */

import style from './style.css'

export default function makeInlineImage(text: string, size: string, background: string): string {
  const tag = `\
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" \
style="width: ${size}; height: ${size}; background-color: ${background};">
  <text text-anchor="middle" x="50%" y="50%" dy="0.375em" fill="#fff" \
style="font-size: calc(${size} / ${style.ratio});font-weight: lighter;">
    ${text}
  </text>
</svg>`

  const encode = s => window.btoa(unescape(encodeURIComponent(s)))
  return 'data:image/svg+xml;base64,' + encode(tag)
}
