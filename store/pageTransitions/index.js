export const state = () => ({
  alreadyLoadedHome: false
})

export const mutations = {
  /**
   * Set as true the `alreadyLoadedHome` flag to indicate
   * tha the home page was already loaded once.
   *
   * @param {Object} state
   */
  setAlreadyLoadedHome (state) {
    state.alreadyLoadedHome = true
  }
}
