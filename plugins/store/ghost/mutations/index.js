import Vue from 'vue'

/**
 * Generate the mutations for the module.
 */
export default () => {
  /**
   * Set the error object of the given method if the action encounters any error.
   *
   * @param {Object} state
   * @param {Object} payload
   * @param {String} method
   * @param {Error} error
   */
  function setError (state, { method = 'get', error }) {
    Vue.set(
      state,
      `errorOn${method.charAt(0).toUpperCase() + method.slice(1)}`,
      error
    )
  }

  /**
   * Set the instances of the resource in the store keyed by id.
   *
   * @param {Object} state
   * @param {Object[]} instances
   */
  function setKeyedById (state, instances) {
    state.keyedById = {
      ...state.keyedById,
      ...instances.reduce((keyed, instance) => {
        keyed[instance.id] = instance
        return keyed
      }, {})
    }
  }

  /**
   * Set the page in the `pages` object with the ids that this page contains.
   * @param {Object} state
   * @param {Object} payload
   * @param {Number} payload.page the number of the page.
   * @param {Number[]} payload.ids of the instances present in this page.
   */
  function setPage (state, { page, ids }) {
    Vue.set(state.pages, page, ids)
  }

  /**
   * Set as pending some async method of the resource.
   *
   * @param {Object} state
   * @param {String} [method] the method to set as pending. Default to `get`.
   */
  function setPending (state, method = 'get') {
    Vue.set(
      state,
      `pending${method.charAt(0).toUpperCase() + method.slice(1)}`,
      true
    )
  }

  /**
   * Set the total number of instances present in the backend that we can get.
   *
   * @param {Object} state
   * @param {Number} total
   */
  function setTotal (state, total) {
    state.total = total
  }

  /**
   * Set the total number of pages that we can get from the backend.
   *
   * @param {Object} state
   * @param {Number} total
   */
  function setTotalPages (state, total) {
    state.totalPages = total
  }

  /**
   * Unset the pending state of the given method.
   *
   * @param {Object} state
   * @param {String} [method] to unset its pending state. Default to `get`.
   */
  function unsetPending (state, method = 'get') {
    Vue.set(
      state,
      `pending${method.charAt(0).toUpperCase() + method.slice(1)}`,
      false
    )
  }

  return {
    setError,
    setKeyedById,
    setPage,
    setPending,
    setTotal,
    setTotalPages,
    unsetPending
  }
}
