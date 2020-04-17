import { ref } from '@vue/composition-api'

/**
 * A composition function to change the color of the app bar
 * when the user scroll down the app.
 *
 * It must be used with the `v-scroll` directive of vuetify.
 * See: https://vuetifyjs.com/en/directives/scrolling/
 *
 * Example:
 *
 * ```javascript
 * <template>
 *   <div v-scroll="setColorOnScroll">{{ color }}</div>
 * </template>
 *
 * <script>
 * export default {
 *   setup() {
 *     return {
 *       ...useSetColorOnScroll({ start: 'transparent', end: 'blue' })
 *     }
 *   }
 * }
 * <//script>
 * ```
 *
 * @param {Object} [options]
 * @param {String} [options.start] color, when the app is at the top.
 * @param {String} [options.end] color to set when the user scroll downs.
 *
 * @returns {Object} with the `color` to use in the app and a callback to
 *  change the color called `setColor` that receives the event generated
 *  by the `v-scroll` directive.
 */
export default function useSetColorOnScroll ({ start = 'transparent', end = 'blue' } = {}) {
  const color = ref(start)

  /**
   * Set the color according to the `scrollTop` property of the target
   * present in the scroll event.
   *
   * @param {Event} event triggered by the scroll action.
   * See: https://vuetifyjs.com/en/directives/scrolling/
   */
  function setColorOnScroll (event) {
    color.value = !event.target.documentElement.scrollTop ? start : end
  }

  return { color, setColorOnScroll }
}
