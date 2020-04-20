import { authors, posts } from '../api'

describe('API', () => {
  describe('authors', () => {
    it('should get a page of authors', () => authors.get()
      .then((response) => {
        expect(response).toHaveProperty('authors')
      })
    )

    it('should get a single author', async () => {
      const id = await authors.get().then(res => res.authors[0].id)
      const res = await authors.get({ id })
      expect(res).toHaveProperty('authors')
      expect(res.authors.length).toBe(1)
      expect(res.authors[0].id).toBe(id)
    })
  })

  describe('posts', () => {
    it('should get a page of posts', () => posts.get().then(res => expect(res).toHaveProperty('posts')))

    it('should get a single post', async () => {
      const id = await posts.get().then(res => res.posts[0].id)
      const res = await posts.get({ id })
      expect(res).toHaveProperty('posts')
      expect(res.posts.length).toBe(1)
      expect(res.posts[0].id).toBe(id)
    })

    it('should get all the posts', () => posts.get({ limit: 'all' }).then((res) => {
      expect(res).toHaveProperty('posts')
      expect(res.posts.length).toBeGreaterThan(0)
    }))
  })
})
