<template>
  <v-card class="post-card" :dark="dark" :light="light">
    <v-container>
      <v-post-card-image :post="post" />
      <v-post-card-excerpt :post="post" />
      <v-post-card-footer :post="post" />
    </v-container>
  </v-card>
</template>

<script>
import VPostCardExcerpt from './PostCardExcerpt'
import VPostCardFooter from './PostCardFooter'
import VPostCardImage from './PostCardImage'

export default {
  components: {
    VPostCardExcerpt,
    VPostCardFooter,
    VPostCardImage
  },
  props: {
    dark: {
      type: Boolean,
      default: false
    },
    light: {
      type: Boolean,
      default: false
    },
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.post-card {
  border-radius: 10px !important;
  margin-top: 40px;
}
</style>
