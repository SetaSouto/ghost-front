<template>
  <div>
    <v-page-title />
    <v-posts-grid class="posts-grid" />
  </div>
</template>

<script>
import VPageTitle from '~/components/pages/index/title/Layout'
import VPostsGrid from '~/components/posts/grid/Layout'

export default {
  components: {
    VPageTitle,
    VPostsGrid
  }
}
</script>

<style scoped>
.posts-grid {
  margin-top: -75px;
}
</style>
