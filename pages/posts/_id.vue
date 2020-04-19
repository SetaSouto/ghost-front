<template>
  <div v-if="post">
    <div
      ref="postImage"
      :style="{
        background: `linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url('${post.feature_image}') no-repeat center`,
        backgroundSize: 'cover',
        width: '100%',
        height: '90vh'
      }"
    />
  </div>
</template>

<script>
import { computed } from '@vue/composition-api'
import useFLIPTransition from '~/compositions/useFLIPTransition'
import useStore from '~/compositions/useStore'

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
  dispatch('get', { id })

  return { id, post }
}

export default {
  setup (props, context) {
    const { id, post } = usePost(context)

    useFLIPTransition(context, {
      key: `post-image-${id}`,
      ref: 'postImage',
      delay: 15
    })

    return { post }
  }
}
</script>
