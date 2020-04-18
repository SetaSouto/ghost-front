import apis from '~/api'

/**
 * Generate the actions for the module.
 */
export default (resource) => {
  const api = apis[resource]

  /**
   * Perform a get to retrieve instances from the backend.
   *
   * @param {Object} context
   * @param {Object} params
   * @param {String} [params.page] indicates the page to retrieve.
   * @param {Boolean} [params.force] force the api call even if we already
   * have the page.
   */
  async function get ({ commit, state }, params = {}) {
    const { page } = params.page || 1

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

  return { get }
}
