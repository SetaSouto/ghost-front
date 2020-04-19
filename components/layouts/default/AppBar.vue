<template>
  <v-app-bar v-scroll="setColorOnScroll" app :color="color" elevate-on-scroll>
    <!-- The title of the app bar -->
    <v-app-bar-title />
    <v-spacer />
    <v-app-bar-dark-mode />
  </v-app-bar>
</template>

<script>
import VAppBarDarkMode from './AppBarDarkMode'
import VAppBarTitle from './AppBarTitle'
import useSetColorOnScroll from '~/compositions/useSetColorOnScroll.js'
import useVuetifyTheme from '~/compositions/useVuetifyTheme'

export default {
  components: {
    VAppBarDarkMode,
    VAppBarTitle
  },
  setup (props, context) {
    // Show it transparent only in the home page
    const theme = useVuetifyTheme(context)
    const end = theme.primary.darken1
    const start = context.root.$route.name === 'index' ? 'transparent' : end

    return {
      ...useSetColorOnScroll({ start, end })
    }
  }
}
</script>
