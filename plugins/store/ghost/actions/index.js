import apis from '~/api'

/**
 * Generate the actions for the module.
 */
export default (resource) => {
  const api = apis[resource]

  /**
   * Perform a get to retrieve instances from the backend.
   *
   * To know all the params that you can use please see:
   * https://ghost.org/docs/api/v3/content/#parameters
   *
   * @param {Object} context
   * @param {Object} params
   * @param {Number} [params.id] to get a single instance from the store.
   * @param {String} [params.page] indicates the page to retrieve.
   * @param {Boolean} [params.force] force the api call even if we already
   * have the page.
   */
  async function get ({ commit, state }, params = {}) {
    const { id } = params

    if (id) { return getInstance({ commit, state }, params) }

    // If no id is given get a page of instances
    const page = params.page || 1

    // If the page already exists in the store, do not perform the api call
    // if there is no `force` param.
    if (state.pages[page] && !params.force) { return }

    commit('setPending', 'get')
    await api.get(params)
      .then((data) => {
        const instances = data[resource]
        const ids = instances.map(({ id }) => id)
        const { page, pages, total } = data.meta.pagination

        commit('setKeyedById', instances)
        commit('setPage', { page, ids })
        commit('setTotal', total)
        commit('setTotalPages', pages)
      })
      .catch(error => commit('setError', { method: 'get', error }))
    commit('unsetPending', 'get')
  }

  /**
   * Get a single instance of the resource from the backend.
   *
   * For more information about the params that you can use please see:
   * https://ghost.org/docs/api/v3/content/#parameters
   *
   * @param {Object} context
   * @param {Object} params
   * @param {Number} params.id the id of the instance to get.
   * @param {Boolean} [params.force] set to true to force the api call even if we
   * already have the instance in the store.
   */
  async function getInstance ({ commit, state }, params) {
    if (!params.id) { throw new Error('Please provide the "id" of the instance to get') }

    // Do not perform the api call if we already have the item.
    // Only can be forced to do this.
    const { id, force } = params
    if (state.keyedById[id] && !force) { return }

    // Perform the api call
    commit('setPending', 'get')
    await api.get(params)
      .then(data => commit('setKeyedById', data[resource][0]))
      .catch(error => commit('setError', { method: 'get', error }))
    commit('unsetPending', 'get')
  }

  return { get }
}
