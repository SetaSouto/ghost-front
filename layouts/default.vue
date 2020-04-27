<template>
  <v-app dark>
    <!-- The principal toolbar of the app -->
    <v-layouts-default-app-bar />
    <!-- The content to show -->
    <v-content>
      <nuxt />
    </v-content>
    <!-- The footer of the app -->
    <v-layouts-default-footer />
  </v-app>
</template>

<script>
import VLayoutsDefaultAppBar from '~/components/layouts/default/AppBar'
import VLayoutsDefaultFooter from '~/components/layouts/default/Footer'

export default {
  components: {
    VLayoutsDefaultAppBar,
    VLayoutsDefaultFooter
  }
}
</script>
