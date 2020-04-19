<template>
  <v-card class="post-content-card">
    <v-container class="post-content">
      <!-- The title of the post -->
      <h1 class="post-title">
        {{ post.title }}
      </h1>
      <!-- Some useful info below the title -->
      <v-post-content-card-sub-title :post="post" />
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-html="post.html" />
    </v-container>
  </v-card>
</template>

<script>
import VPostContentCardSubTitle from './PostContentCardSubTitle'
import usePrism from '~/compositions/usePrism'

/**
 * A component that renders the html of the post inside a card.
 */
export default {
  components: {
    VPostContentCardSubTitle
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  setup () {
    usePrism()
  }
}
</script>

<style scoped>
.post-content-card {
  border-radius: 20px !important;
  padding: 25px 50px;
}

@media screen and (max-width: 600px) {
  .post-content-card {
    padding: 25px 25px;
  }
}

.post-title {
  font-size: 3.75rem;
  font-weight: 300;
  line-height: 3.75rem;
  letter-spacing: -0.0083333333em;
  margin-bottom: 10px;
  /* offset-x | offset-y | blur-radius | color */
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
}

@media screen and (max-width: 600px) {
  .post-title {
    font-size: 2.75rem !important;
    line-height: 2.75rem;
  }
}

.post-content {
  max-width: 680px;
  margin: auto;
}

.post-content >>> h2 {
  font-size: 2rem;
  font-weight: 400;
  margin: 15px 0;
}

.post-content >>> figure.kg-image-card {
  width: 100%;
  margin: 15px 0;
  text-align: center;
}

.post-content >>> figure.kg-image-card.kg-width-wide {
  width: 120%;
  position: relative;
  left: -10%;
}

.post-content >>> img {
  max-width: 100%;
  max-height: 100%;
}

.post-content >>> pre {
  background: rgba(125, 125, 125, 0.1);
  padding: 0;
  border: 1px solid rgba(100, 100, 100, 0.2);
  border-radius: 5px;
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.19);
  margin-bottom: 20px;
}

.post-content >>> code {
  min-width: 100%;
  padding: 10px;
}

.post-content-card >>> code::before {
  content: "";
}
</style>
