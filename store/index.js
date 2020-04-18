import createGhostModule from '../plugins/store/ghost'

export const plugins = [
  createGhostModule('authors'),
  createGhostModule('posts')
]
