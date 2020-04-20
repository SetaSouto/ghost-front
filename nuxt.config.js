import colors from 'vuetify/es5/util/colors'
import { posts } from './api'

require('dotenv').config()

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s',
    title: 'Fabián Souto',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Data scientist and full stack developer, personal blog.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/textShadow.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/composition-api.js',
    '~/plugins/prism.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    defaultAssets: {
      icons: 'md'
    },
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.grey.darken4,
          secondary: colors.amber.base,
          accent: colors.grey.base,
          anchor: colors.amber.lighten1,
          error: colors.deepOrange.accent4,
          info: colors.teal.lighten1,
          success: colors.green.accent3,
          warning: colors.amber.base
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  /**
   * Avoid 404 errors in production because dynamic routes does not exists.
   *
   * See: https://nuxtjs.org/api/configuration-generate/#routes
   */
  generate: {
    routes () {
      return posts.get({ limit: 'all' })
        .then(({ posts }) => posts
          .map(post => ({
            route: `/posts/${post.id}`,
            payload: post
          }))
        )
    }
  }
}
