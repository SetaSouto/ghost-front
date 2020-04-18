<template>
  <v-switch
    v-model="$vuetify.theme.dark"
    append-icon="brightness_2"
    class="dark-mode-switch"
    hide-details
  />
</template>

<style scoped>
/* Change the color of the icon */
.dark-mode-switch >>> i {
  color: rgba(255, 255, 255, 0.7) !important;
}

/* Change the color of the track */
.dark-mode-switch >>> .v-input--switch__track {
  color: rgba(255, 255, 255, 0.3);
}
</style>
