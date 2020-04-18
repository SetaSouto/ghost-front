/**
 * Get the `state` object and the `commit` and `dispatch` functions for the
 * module with the given namespace from the store.
 *
 * @param {String} namespace of the module of the store.
 * @param {Object} context of the setup method of the component.
 * See: https://composition-api.vuejs.org/api.html#setup
 */
export default (namespace, context) => {
  const store = context.root.$store
  const state = store.state[namespace]
  const commit = (mutation, payload) => store.commit(`${namespace}/${mutation}`, payload)
  const dispatch = (action, payload) => store.dispatch(`${namespace}/${action}`, payload)
  const getters = getter => store.getters[`${namespace}/${getter}`]

  return { commit, dispatch, getters, state }
}
