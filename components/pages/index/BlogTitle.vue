<template>
  <div class="d-flex align-center justify-center white--text">
    <h1 class="display-2 font-weight-light text-shadow blog-title">
      Latest posts
    </h1>
    <v-fade-transition mode="out-in">
      <v-icon
        :key="showIcon"
        class="pl-2 bounce"
        large
        :style="{ visibility: showIcon ? 'inherit' : 'hidden' }"
      >
        keyboard_arrow_down
      </v-icon>
    </v-fade-transition>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup (props, context) {
    const showIcon = ref(false)

    setTimeout(() => (showIcon.value = true), 1)

    return {
      showIcon
    }
  }
}
</script>

<style scoped>
.blog-title {
  z-index: 1;
}

.bounce {
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-name: bounce-2;
  animation-timing-function: ease;
}

@keyframes bounce-2 {
  0% {
    transform: translateY(-5px);
  }
  50% {
    transform: translateY(7px);
  }
  100% {
    transform: translateY(-5px);
  }
}
</style>
