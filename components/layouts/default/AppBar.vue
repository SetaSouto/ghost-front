<template>
  <v-app-bar v-scroll="setColorOnScroll" app :color="color" elevate-on-scroll>
    <!-- The title of the app bar -->
    <v-app-bar-title />
  </v-app-bar>
</template>

<script>
import VAppBarTitle from './AppBarTitle'
import useSetColorOnScroll from '~/compositions/useSetColorOnScroll.js'
import useVuetifyTheme from '~/compositions/useVuetifyTheme'

export default {
  components: {
    VAppBarTitle
  },
  setup (props, context) {
    const theme = useVuetifyTheme(context)

    return {
      ...useSetColorOnScroll({ end: theme.primary.darken1 })
    }
  }
}
</script>
