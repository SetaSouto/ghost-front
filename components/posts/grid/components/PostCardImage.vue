<template>
  <div>
    <v-img
      class="elevation-5 title-image"
      contain
      gradient="to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)"
      :src="post.feature_image"
    >
      <v-container fill-height>
        <component
          :is="titleComponent"
          class="px-2 bottom font-weight-light text-shadow white--text"
        >
          {{ post.title }}
        </component>
      </v-container>
    </v-img>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
import useVuetifyBreakpoint from '~/compositions/useVuetifyBreakpoint'

function useResponsiveTitle (context) {
  const { breakpoint } = useVuetifyBreakpoint(context)
  const titleComponent = ref(null)

  switch (breakpoint.name) {
    case 'xs':
      titleComponent.value = 'h3'
      break
    case 'sm':
    case 'md':
    case 'lg':
      titleComponent.value = 'h2'
      break
    case 'xl':
    default:
      titleComponent.value = 'h1'
  }

  return { titleComponent }
}

export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  setup (props, context) {
    return {
      ...useResponsiveTitle(context)
    }
  }
}
</script>

<style>
.bottom {
  position: absolute;
  bottom: 5px;
}

.title-image {
  border-radius: 20px;
  margin-top: -40px;
}
</style>
