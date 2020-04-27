<template>
  <v-container class="d-flex align-center accent--text flex-column flex-wrap justify-center">
    <!-- The date and reading time -->
    <div class="d-flex align-center flex-wrap justify-center mb-3">
      <div class="px-2">
        {{ new Date(post.created_at).toDateString() }}
      </div>
      <div v-if="$vuetify.breakpoint.width > 350" class="px-2">
        ·
      </div>
      <div class="px-2">
        {{ readingTime }}
      </div>
    </div>
    <!-- The tags of the post -->
    <div class="d-flex flex-wrap justify-center">
      <v-post-tag v-for="tag in post.tags" :key="tag.id" :tag="tag" />
    </div>
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
