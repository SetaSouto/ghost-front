<template>
  <v-container>
    <v-row>
      <!-- A column for the image. Only show in big screens. -->
      <v-col v-if="$vuetify.breakpoint.smAndUp" cols="4" sm="3">
        <v-author-info-image />
      </v-col>
      <!-- A column for the information -->
      <v-col>
        <!-- A pre title and social networks -->
        <v-row class="align-center">
          <v-col
            class="font-weight-light"
            :class="$vuetify.breakpoint.xs ? 'body-2' : 'body-1'"
          >
            Written by
          </v-col>
          <!-- Social networks -->
          <v-col class="d-flex justify-end">
            <v-linkedin class="social-network-icon" />
            <v-medium class="social-network-icon" />
            <v-github class="social-network-icon" />
          </v-col>
        </v-row>
        <!-- The row with the name -->
        <v-row class="align-center">
          <!-- A small image to show in smaller screens -->
          <v-col v-if="$vuetify.breakpoint.xs" cols="4">
            <v-author-info-image />
          </v-col>
          <!-- The name of the author -->
          <v-col
            class="font-weight-bold py-0"
            :class="$vuetify.breakpoint.xs ? 'title' : 'headline'"
          >
            Fabián Souto
          </v-col>
        </v-row>
        <!-- The description of the author -->
        <v-row class="font-weight-light">
          <v-col>Data Scientist and Full Stack developer. Computer vision and natural language processing enthusiast.</v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VAuthorInfoImage from './AuthorInfoImage'
import VGithub from '~/components/networks/Github'
import VLinkedin from '~/components/networks/Linkedin'
import VMedium from '~/components/networks/Medium'

export default {
  components: {
    VAuthorInfoImage,
    VGithub,
    VLinkedin,
    VMedium
  }
}
</script>

<style scoped>
.social-network-icon {
  margin: 2px 5px;
  height: 24px;
}
</style>
