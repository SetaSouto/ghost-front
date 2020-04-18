import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state from './state'

/**
 * Generate a plugin that register a module in the store
 * for the given resource.
 *
 * @param {String} resource
 */
export default resource => (store) => {
  return store.registerModule(resource, {
    actions: actions(resource),
    getters: getters(resource),
    mutations: mutations(resource),
    namespaced: true,
    state: state(resource)
  })
}
