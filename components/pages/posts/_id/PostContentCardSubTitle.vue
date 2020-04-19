<template>
  <v-container class="d-flex align-center accent--text">
    <v-post-tag v-for="tag in post.tags" :key="tag.id" :tag="tag" />
    <v-spacer />
    <div>{{ new Date(post.created_at).toDateString() }}</div>
    <div class="px-2">
      ·
    </div>
    <div>{{ readingTime }}</div>
  </v-container>
</template>

<script>
import { readingTime } from '@tryghost/helpers'
import VPostTag from '~/components/posts/PostTag'

export default {
  components: {
    VPostTag
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  setup (props) {
    return {
      readingTime: readingTime(props.post)
    }
  }
}
</script>

<style scoped>
</style>
