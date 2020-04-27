import Vue from 'vue'

export const state = () => ({
  // Mark as ready the pages already loaded once
  ready: {
    index: false
  }
})

export const mutations = {
  /**
   * Set as ready the given page.
   *
   * This can be useful for transitions that must be executed only once.
   *
   * @param {Object} state
   * @param {String} page the page to set as ready.
   */
  setReady (state, page) {
    Vue.set(state.ready, page, true)
  }
}
