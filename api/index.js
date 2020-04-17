import generate from './generate'

export const authors = generate('authors')
export const pages = generate('pages')
export const posts = generate('posts')
export const tags = generate('tags')

export default {
  authors,
  pages,
  posts,
  tags
}
