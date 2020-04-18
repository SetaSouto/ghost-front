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

/**
 * Make the blog animations synchronize after the title's
 * animations are ready.
 */
function useDynamicShow () {
  const titleReady = ref(false)
  const show = reactive({ title: false, grid: false })

  watch(titleReady, () => {
    if (titleReady.value) {
      setTimeout(() => (show.title = true), 100)
      setTimeout(() => (show.grid = true), 300)
    }
  })

  return { show, titleReady }
}

export default {
  components: {
    VBlogTitle,
    VPageTitle,
    VPostsGrid
  },
  setup () {
    return {
      ...useDynamicShow()
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
