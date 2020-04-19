import createFLIPModule from '../plugins/store/flip'
import createGhostModule from '../plugins/store/ghost'

export const plugins = [
  createGhostModule('authors'),
  createGhostModule('posts'),
  createFLIPModule('FLIP')
]
