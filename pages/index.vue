<template>
  <div>
    <v-page-title @ready="titleReady = true" />
    <v-slide-x-transition>
      <v-blog-title v-if="show.title" class="blog-title" />
    </v-slide-x-transition>
    <v-slide-y-reverse-transition>
      <v-posts-grid v-show="show.grid" class="posts-grid" />
    </v-slide-y-reverse-transition>
  </div>
</template>

<script>
import { reactive, ref, watch } from '@vue/composition-api'
import VBlogTitle from '~/components/pages/index/BlogTitle'
import VPageTitle from '~/components/pages/index/Title'
import VPostsGrid from '~/components/posts/grid/Layout'
import useStore from '~/compositions/useStore'

/**
 * Make the blog animations synchronize after the title's
 * animations are ready.
 *
 * @param {Object} context provided in the setup method to get the store.
 */
function useDynamicShow (context) {
  const titleReady = ref(false)
  const show = reactive({ title: false, grid: false })
  const { commit, state } = useStore('pageTransitions', context)

  if (state.alreadyLoadedHome) {
    show.title = true
    show.grid = true
  } else {
    // Do not commit in the server side to avoid conflicts with different
    // components from server and client
    if (!context.isServer) {
      // Give some time to the other components to render
      setTimeout(() => commit('setAlreadyLoadedHome'), 1000)
    }

    watch(titleReady, () => {
      if (titleReady.value) {
        setTimeout(() => (show.title = true), 100)
        setTimeout(() => (show.grid = true), 300)
      }
    })
  }

  return { show, titleReady }
}

export default {
  components: {
    VBlogTitle,
    VPageTitle,
    VPostsGrid
  },
  scrollToTop: false,
  setup (props, context) {
    return {
      ...useDynamicShow(context)
    }
  }
}
</script>

<style scoped>
.blog-title {
  margin-top: -150px;
  margin-bottom: 75px;
}

.posts-grid {
  margin-top: -75px;
}

@media screen and (max-height: 700px) {
  .blog-title {
    margin-top: -65px;
    margin-bottom: 75px;
  }

  .posts-grid {
    margin-top: -75px;
  }
}
</style>
