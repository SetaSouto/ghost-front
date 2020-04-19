<template>
  <v-toolbar-title class="cursor-pointer white--text">
    <v-slide-x-transition mode="out-in">
      <div
        v-if="expanded"
        key="full"
        class="font-weight-light"
        @click="$router.push({ name: 'index' })"
      >
        <span class="font-weight-medium">F</span>abián
        <span class="font-weight-medium">S</span>outo
      </div>
      <div v-else key="short" class="font-weight-black" @click="expand">
        FS
      </div>
    </v-slide-x-transition>
  </v-toolbar-title>
</template>

<script>
import { ref } from '@vue/composition-api'

/**
 * Get an `expanded` ref with a callback to set it as true
 * for the given time.
 *
 * @param {Object} [options]
 * @param {Number} [options.ttl] (time to live) of the expanded ref in miliseconds.
 *
 * @returns {Object} with the `expanded` ref and the `expand` callback
 *  to set `expanded` as `true` for the given `ttl` miliseconds.
 */
function useTemporalExpanded ({ ttl = 3000 } = {}) {
  const expanded = ref(false)

  function expand () {
    expanded.value = true
    setTimeout(() => {
      expanded.value = false
    }, ttl)
  }

  return { expanded, expand }
}

export default {
  setup () {
    return {
      ...useTemporalExpanded({ ttl: 3000 })
    }
  }
}
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>
