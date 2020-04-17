/**
 * Get the current theme object from the $vuetify instance present
 * in the `context.root` property of the `context` argument of the
 * setup method of the component.
 *
 * See: https://composition-api.vuejs.org/api.html#setup
 * See: https://vuetifyjs.com/en/customization/theme/
 *
 * Example:
 *
 * ```javascript
 * export default {
 *   setup (props, context) {
 *     const theme = useVuetifyTheme(context)
 *
 *     // Use the primary color
 *     const primary = theme.primary.base
 *     const primaryLighten = theme.primary.lighten2
 *   }
 * }
 * ```
 *
 * @param {Object} context provided in the setup method of the component.
 *
 * @returns {Object} with the parsed theme of the $vuetify object that should
 *  contain all the theme properties (primary, secondary, accent, etc) but
 *  with the base, lighten1, darken1, etc.
 */
export default function useVuetifyTheme (context) {
  return context.root.$vuetify.theme.parsedTheme
}
