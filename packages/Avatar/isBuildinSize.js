/**
 * test given size is build in size
 *
 * @flow
 */

export default function isBuildinSize(size: string): boolean %checks {
  return Boolean(~['normal', 'large', 'small', 'huge'].indexOf(size))
}
