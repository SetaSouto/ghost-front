<template>
  <v-btn :color="$vuetify.theme.currentTheme.secondary" outlined small>
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
