/**
 * make text long shadows
 *
 * @flow
 */

import Color from 'color'

export default function makeShadow(color: string): string {
  const str = []
  const darken = Color(color).darken(0.35).toString()

  for(let i = 1; i <= 30; i++) {
    str.push(`${i}px ${i}px ${darken}`)
  }

  return str.join(',')
}
