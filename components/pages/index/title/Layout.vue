<template>
  <div class="background">
    <div class="background-overlay" />
    <v-container class="container text-shadow" fill-height>
      <!-- Encapsulate all the content in a responsive col -->
      <v-slide-y-reverse-transition>
        <v-col cols="12" md="6" lg="4" offset-lg="1">
          <!-- The title with a Hi! and my name -->
          <v-row>
            <v-col>
              <h1 class="text-center text-md-left">
                <v-slide-x-transition mode="out-in">
                  <div
                    :key="show.hi"
                    class="d-inline-block"
                    :style="{ visibility: show.hi ? 'inherit' : 'hidden' }"
                  >
                    Hi there!
                  </div>
                </v-slide-x-transition>
                <v-slide-x-reverse-transition mode="out-in">
                  <div
                    :key="show.name"
                    class="d-inline-block font-weight-regular"
                    :style="{ visibility: show.name ? 'inherit' : 'hidden' }"
                  >
                    I'm Fabián Souto
                  </div>
                </v-slide-x-reverse-transition>
              </h1>
            </v-col>
          </v-row>
          <!-- A paragraph explaining who I am -->
          <v-row>
            <v-slide-y-reverse-transition>
              <v-col class="font-weight-light">
                <v-slide-y-reverse-transition mode="out-in">
                  <p :key="show.p1" :style="{ visibility: show.p1 ? 'inherit' : 'hidden' }">
                    Data Scientist and Full Stack developer with years of hands-on software and machine
                    learning development. Computer vision and natural language processing expert.
                  </p>
                </v-slide-y-reverse-transition>
                <v-slide-y-reverse-transition mode="out-in">
                  <p :key="show.p2" :style="{ visibility: show.p2 ? 'inherit' : 'hidden' }">
                    Extensive knowledge about Artificial Intelligence, Cloud computing, Web development and Cognitive applications.
                    Master's in Computer Science, Universidad de Chile.
                  </p>
                </v-slide-y-reverse-transition>
              </v-col>
            </v-slide-y-reverse-transition>
          </v-row>
        </v-col>
      </v-slide-y-reverse-transition>
    </v-container>
  </div>
</template>

<script>
import { reactive } from '@vue/composition-api'

/**
 * A composition function that provides the `show` object
 * to show the different parts of the component.
 *
 * It will generate different timeouts to show all the components
 * in different orders to manage the attention of the user.
 */
function useDynamicShow () {
  const show = reactive({
    hi: false,
    name: false,
    p1: false,
    p2: false
  })

  setTimeout(() => (show.hi = true), 500)
  setTimeout(() => (show.name = true), 1500)
  setTimeout(() => (show.p1 = true), 2500)
  setTimeout(() => (show.p2 = true), 2700)

  return { show }
}

export default {
  setup () {
    return {
      ...useDynamicShow()
    }
  }
}
</script>

<style scoped>
.background {
  background: url("~assets/img/backgrounds/index.jpg") center center;
  background-size: cover;
  margin-top: -64px;
  height: 100vh;
  position: relative;
}

.background-overlay {
  background: rgba(0, 0, 0, 0.6);
  height: 100%;
  width: 100%;
  position: absolute;
}

.container {
  padding-top: 64px;
  position: relative;
}

.text-shadow {
  /* offset-x | offset-y | blur-radius | color */
  text-shadow: 1px 1px 2px black;
}
</style>
