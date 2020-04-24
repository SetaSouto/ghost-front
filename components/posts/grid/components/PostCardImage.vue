<template>
  <div
    class="title-container d-flex align-end"
    @click="$router.push({ name: 'posts-id', params: { id: post.id } })"
  >
    <!-- The background image of the container with the post's image -->
    <div ref="postImage" class="post-image" :style="postImageStyle" />
    <!-- The title of the post -->
    <v-container>
      <component
        :is="titleComponent"
        class="px-2 font-weight-light text-shadow white--text"
        style="position: relative"
      >
        {{ post.title }}
      </component>
    </v-container>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
import useFLIPTransition from '~/compositions/useFLIPTransition'
import useVuetifyBreakpoint from '~/compositions/useVuetifyBreakpoint'

/**
 * Set the component for the title based on the breakpoint
 * that the app have to have responsive titles.
 *
 * @returns {Object} with the `titleComponent` string.
 */
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

/**
 * Generate the style for the background image of the post.
 *
 * @param {Object} post to get its image.
 */
function usePostImageStyle (post) {
  return {
    postImageStyle: {
      background: `linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url('${post.feature_image}') no-repeat center`,
      backgroundSize: 'cover'
    }
  }
}

export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  setup (props, context) {
    useFLIPTransition(context, {
      key: `post-image-${props.post.id}`,
      ref: 'postImage',
      delay: 15
    })

    return {
      ...useResponsiveTitle(context),
      ...usePostImageStyle(props.post)
    }
  }
}
</script>

<style scoped>
.title-container {
  cursor: pointer;
  margin-top: -40px;
  min-height: 200px;
  position: relative;
  transition: all 0.2s;
}

.post-image {
  border-radius: 20px;
  width: 100%;
  height: 100%;
  position: absolute;
  transition: all 0.2s;
}

.title-container:hover > .post-image {
  transform: scale(1.03);
  transition: all 0.2s;
}
</style>
