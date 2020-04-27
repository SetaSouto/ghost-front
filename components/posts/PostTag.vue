<template>
  <v-btn :color="$vuetify.theme.currentTheme.secondary" class="mx-1 mb-2" outlined x-small>
    {{ tag.name }}
  </v-btn>
</template>

<script>
export default {
  props: {
    tag: {
      type: Object,
      required: true
    }
  }
}
</script>
