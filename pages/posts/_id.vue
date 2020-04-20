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
import { computed, onBeforeUnmount, reactive } from '@vue/composition-api'
import useStore from '~/compositions/useStore'
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

/**
 * Get the post to use from the store.
 *
 * @param {Object} context provided in the setup method
 * to get the store.
 * @returns {Object} with the `post` instance (probably undefined in the first
 * return becuase it didn't wait for the action to finis) and the `id`
 * of the post.
 */
function usePost (context) {
  const id = context.root.$route.params.id
  const { state, dispatch } = useStore('posts', context)
  const post = computed(() => state.keyedById[id])

  // Dispatch the get actions. The action is smart and will not trigger
  // the api call if the item is already in the store.
  dispatch('get', { id, include: 'tags' })

  return { id, post }
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
  asyncData ({ params, payload, store }) {
    if (payload) {
      store.commit('posts/setKeyedById', payload)
    } else {
      store.dispatch('posts/get', { id: params.id, include: 'tags' })
    }
  },
  setup (props, context) {
    return {
      ...usePost(context),
      ...useDynamicShow()
    }
  }
}
</script>
