<template>
  <div
    ref="postImage"
    class="d-flex align-end"
    :style="{
      background: `url('${post.feature_image}') no-repeat center`,
      backgroundSize: 'cover',
      width: '100%',
      height: 'calc(100vh - 64px)'
    }"
  />
</template>

<script>
import useFLIPTransition from '~/compositions/useFLIPTransition'

/**
 * The post's image its a simple div that will use the post's image
 * as background to use the 'cover' property and make it more responsive.
 *
 * It also uses a FLIP transition to show it up.
 */
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
  }
}
</script>
