<template>
  <div class="d-flex mr-5">
    <v-linkedin class="network-icon" />
    <v-medium class="network-icon" />
    <v-github class="network-icon" />
  </div>
</template>

<script>
import VGithub from '~/components/networks/Github'
import VLinkedin from '~/components/networks/Linkedin'
import VMedium from '~/components/networks/Medium'

export default {
  components: {
    VGithub,
    VLinkedin,
    VMedium
  }
}
</script>

<style scoped>
.network-icon {
  height: 24px;
  margin: 0 5px;
}
</style>
