import Vue from 'vue'

/**
 * Generate the mutations for the module in the store.
 */
export default () => {
  /**
   * Set the given DOMRect instance in the given key.
   *
   * @param {Object} state
   * @param {Object} payload
   * @param {String} payload.key of the element to set it in the store.
   * @param {DOMRect} payload.rect to set as value for the given key.
   */
  function setKeyedRect (state, { key, rect }) {
    Vue.set(state.keyedRects, key, rect)
  }

  return { setKeyedRect }
}
