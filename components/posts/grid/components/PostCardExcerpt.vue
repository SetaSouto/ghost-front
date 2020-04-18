<template>
  <v-container>
    <p class="mb-0 font-weight-light">
      {{ post.excerpt }}
    </p>
  </v-container>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>
