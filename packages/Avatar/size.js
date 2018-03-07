/**
 * build in size
 *
 * @flow
 */

export type Size =
  | 'small'
  | 'normal'
  | 'large'
  | 'huge'

export const sizes = ['small', 'normal', 'large', 'huge']

export const defaultSize = 'normal'

export function isValidSize(size: string): boolean %checks {
  return Boolean(~sizes.indexOf(size))
}

export default sizes
