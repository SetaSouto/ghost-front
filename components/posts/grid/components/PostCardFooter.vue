<template>
  <div class="d-flex justify-end body-2 font-weight-light">
    <span>{{ readingTime }}</span>
    <span class="mx-2">&middot;</span>
    <span>{{ createdAt }}</span>
  </div>
</template>

<script>
import { readingTime } from '@tryghost/helpers'

export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  setup (props) {
    return {
      createdAt: new Date(props.post.created_at).toLocaleDateString(),
      readingTime: readingTime(props.post)
    }
  }
}
</script>
