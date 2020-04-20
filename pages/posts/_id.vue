<template>
  <div v-if="post">
    <!-- The image of the post that covers a big part of the screen -->
    <v-post-image :post="post" />
    <!-- The content of the page inside a container -->
    <v-container>
      <!-- A card with the content of the post -->
      <v-slide-y-reverse-transition>
        <v-post-content-card v-if="show.contentCard" :post="post" style="margin-top: -250px" />
      </v-slide-y-reverse-transition>
    </v-container>
  </div>
</template>

<script>
import { onBeforeUnmount, reactive } from '@vue/composition-api'
import VPostContentCard from '~/components/pages/posts/_id/PostContentCard'
import VPostImage from '~/components/pages/posts/_id/PostImage'

/**
 * Perform a dynamic show of the elements of the page.
 *
 * @returns {Object} with the `show` reactive object with the flags
 * to show the components of the page.
 */
function useDynamicShow () {
  const show = reactive({ contentCard: false })

  setTimeout(() => (show.contentCard = true), 300)

  onBeforeUnmount(() => (show.contentCard = false))

  return { show }
}

export default {
  components: {
    VPostContentCard,
    VPostImage
  },
  /**
   * We can receive a `payload` because is generated in the `npm run generate`
   * command, on build time. See `~/nuxt.config.js` the `generate.routes` function.
   *
   * See: https://nuxtjs.org/api
   * See: https://nuxtjs.org/api/configuration-generate#speeding-up-dynamic-route-generation-with-code-payload-code-
   */
  async asyncData ({ params, payload, store }) {
    if (payload) {
      store.commit('posts/setKeyedById', payload)
      return { post: payload }
    } else {
      await store.dispatch('posts/get', { id: params.id, include: 'tags' })
      return { post: store.state.posts.keyedById[params.id] }
    }
  },
  /**
   * Set the correct tags in the head of the page.
   *
   * We are going to change the default title and description of the page
   * to use the post's title and its excerpt.
   *
   * See: https://nuxtjs.org/api/pages-head/
   * See: https://medium.com/vue-mastery/best-practices-for-nuxt-js-seo-32399c49b2e5
   */
  head () {
    return {
      title: `${this.post.title} - Fabián Souto`,
      meta: [
        { hid: 'description', name: 'description', content: this.post.excerpt }
      ]
    }
  },
  setup (props, context) {
    return {
      ...useDynamicShow()
    }
  }
}
</script>
