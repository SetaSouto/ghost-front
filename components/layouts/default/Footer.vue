<template>
  <v-slide-y-reverse-transition>
    <v-footer v-if="show" absolute app>
      <v-row class="d-flex align-center justify-center flex-wrap">
        <v-flex shrink>
          Made with ❤️ by Fabián Souto
        </v-flex>
        <v-flex shrink>
          <v-icon class="mx-2" small>
            mail
          </v-icon>
          <a href="mailto:fab.souto@gmail.com" target="_blank">fab.souto@gmail.com</a>
        </v-flex>
      </v-row>
    </v-footer>
  </v-slide-y-reverse-transition>
</template>

<script>
import { ref, watchEffect } from '@vue/composition-api'
import useStore from '~/compositions/useStore'

/**
 * Show or hide the footer based on the app's state.
 *
 * As the different pages could have different transitions this
 * composition function handle this for this component.
 */
function useDynamicShow (context) {
  const { state } = useStore('pageTransitions', context)
  const show = ref(false)
  const route = context.root.$route

  if (route.name === 'index') {
    watchEffect(() => {
      if (state.ready.index) {
        setTimeout(() => (show.value = true), 3000)
      }
    })
  } else {
    show.value = true
  }

  return { show }
}

export default {
  setup (props, context) {
    return {
      ...useDynamicShow(context)
    }
  }
}
</script>
