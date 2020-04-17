<template>
  <v-app dark>
    <!-- The principal toolbar of the app -->
    <v-layouts-default-app-bar />
    <!-- The content to show -->
    <v-content>
      <nuxt />
    </v-content>
    <!-- The footer of the layout -->
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import VLayoutsDefaultAppBar from '~/components/layouts/default/AppBar'

export default {
  components: {
    VLayoutsDefaultAppBar
  }
}
</script>
