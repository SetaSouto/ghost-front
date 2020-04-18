/**
 * Get the `breakpoint` object of the `$vuetify` plugin.
 * See: https://vuetifyjs.com/en/customization/breakpoints/
 *
 * @param {Object} context provided in the setup method of the component
 */
export default (context) => {
  return { breakpoint: context.root.$vuetify.breakpoint }
}
