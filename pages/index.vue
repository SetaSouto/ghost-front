<template>
  <div>
    <v-page-title @ready="showPosts = true" />
    <v-slide-y-reverse-transition>
      <v-posts-grid v-show="showPosts" class="posts-grid" />
    </v-slide-y-reverse-transition>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
import VPageTitle from '~/components/pages/index/title/Layout'
import VPostsGrid from '~/components/posts/grid/Layout'

export default {
  components: {
    VPageTitle,
    VPostsGrid
  },
  setup () {
    return {
      showPosts: ref(false)
    }
  }
}
</script>

<style scoped>
.posts-grid {
  margin-top: -75px;
}
</style>
