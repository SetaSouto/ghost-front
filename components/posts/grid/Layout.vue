<template>
  <v-container>
    <v-row class="d-flex flex-wrap justify-center">
      <v-col
        v-for="post in posts"
        :key="post.id"
        cols="12"
        :sm="post.featured ? 12 : 6"
        :lg="post.featured ? 8 : 4"
        :xl="post.featured ? 6 : 3"
      >
        <v-post-card :post="post" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ref } from '@vue/composition-api'
import VPostCard from './components/PostCard'
import useStore from '~/compositions/useStore'

/**
 * Get the current page, the posts of that page, the total number of pages
 * and a function to change the page.
 *
 * @param {Object} context from the setup method to get the store.
 *
 * @returns {Object} with the `posts` of the page, the `page` number
 * and a function to change the page.
 */
function usePaginatedPosts (context) {
  const { dispatch, state } = useStore('posts', context)
  const page = ref(null)
  const posts = ref([])

  /**
   * Set the page number, get the posts from the backend and update
   * the ref.
   *
   * @param {Number} number of the page to set.
   */
  async function setPage (number) {
    page.value = number
    await dispatch('get', { page: page.value, include: 'tags' })
    posts.value = (state.pages[page.value] || []).map(
      id => state.keyedById[id]
    )
  }

  // Start with the first page
  setPage(1)

  return { page, posts, setPage } // , totalPages: state.totalPages }
}

export default {
  components: {
    VPostCard
  },
  setup (props, context) {
    return {
      ...usePaginatedPosts(context)
    }
  }
}
</script>
