/**
 * select char for avatar
 *
 * @example
 *
 * ```js
 * selectChars('foo bar') //=> 'FB'
 * ```
 *
 * ```js
 * selectChars('foo') //=> 'F'
 * ```
 *
 * ```js
 * selectChars('世界') //=> '世'
 * ```
 *
 * @flow
 */

export default function selectChars(input: string): string {
  const str = input.trim()
  if('' === str) {
    return ''
  }

  const splited = str.split(' ')

  if(1 === splited.length) {
    return str[0].toUpperCase()
  }

  return splited
    .map(s => s[0].toUpperCase())
    .slice(0, 2)
    .join('')
}
