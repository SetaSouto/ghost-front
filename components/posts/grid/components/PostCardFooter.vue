<template>
  <v-container class="py-0 d-flex align-center body-2 font-weight-light">
    <v-btn outlined small @click="$router.push({ name: 'posts-id', params: { id: post.id }})">
      READ
    </v-btn>
    <v-spacer />
    <span>{{ readingTime }}</span>
    <span class="mx-2">&middot;</span>
    <span>{{ createdAt }}</span>
  </v-container>
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
      createdAt: new Date(props.post.created_at).toDateString(),
      readingTime: readingTime(props.post)
    }
  }
}
</script>
