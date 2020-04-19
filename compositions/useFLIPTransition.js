import { onBeforeUnmount, onMounted } from '@vue/composition-api'
import useStore from './useStore'

/**
 * Use a FLIP transition in the component.
 *
 * If the component has in the store other DOMRect it will apply the
 * transform and scale from that DOMRect to its new state.
 *
 * If there is no DOMRect to apply the transition it won't apply it.
 *
 * Before unmount it will set its own DOMRect at the given key in the FLIP
 * module of the store to save its last position.
 *
 * @param {Object} context the context provided for the setup method of the
 * component to access the store.
 * @param {Object} params
 * @param {String} params.key the key to use in the store to save the DOMRect of
 * the element of the component.
 * @param {String} [params.namespace] the namespace of the FLIP module in the store.
 * Default to `FLIP`.
 * @param {String} [params.ref] to use another element instead of the root element
 * of the component. You should use the `ref` directive in the component to have
 * is reference.
 * @param {Number} [params.delay] an optional delay in milliseconds to apply the
 * transition after the component is mounted. Useful for situations when the element
 * have a delay on the mount.
 * @param {Function} [params.callback] an optional callback that will be called after
 * the animation finishes. To perform other side effects.
 */
export default function (context, { key, namespace = 'FLIP', ref, delay, callback }) {
  if (!key) { throw new Error('Please provide a "key" to use the FLIP transition.') }

  // Get the first DOMRect from the store that records the last position
  // of an element with the same key
  const { commit, state } = useStore(namespace, context)
  const first = state.keyedRects[key]

  /**
   * Perform the FLIP animation ON the DOM element.
   *
   * @param {Element} element to perform the animation.
   * See: https://developer.mozilla.org/en-US/docs/Web/API/Element
   *
   * @returns {Animation} created in the element.
   * See: https://developer.mozilla.org/en-US/docs/Web/API/Animation
   * See: https://developer.mozilla.org/en-US/docs/Web/API/Element/animate
   */
  function animate (element) {
    const last = element.getBoundingClientRect()
    const deltaX = first.left - last.left
    const deltaY = first.top - last.top
    const deltaW = first.width / Math.max(last.width, 1) // Avoid dividing by zero
    const deltaH = first.height / Math.max(last.height, 1)
    const keyFrames = [
      {
        transformOrigin: 'top left',
        transform: `
            translate(${deltaX}px, ${deltaY}px)
            scale(${deltaW}, ${deltaH})
          `,
        opacity: 1
      },
      {
        transformOrigin: 'top left',
        transform: 'none',
        opacity: 1
      }
    ]

    return element.animate(keyFrames, { duration: 300, easing: 'ease-in-out', fill: 'both' })
  }

  onMounted(function () {
    const element = ref ? this.$refs[ref] : this.$el

    if (ref && !element) {
      let message = `[useFLIPTransition] Ref "${ref}" not present in $refs. `
      message += 'Did you register the ref in the component? '
      message += 'Or probably the element is shown after the mounting, are you using a v-if?'
      /* eslint-disable no-console */
      return console.warn(message)
    }

    // Only animate if there is a "first" DOMRect in the store
    if (!first) { return }

    // Apply the animation if there is no delay
    if (!delay) {
      const animation = animate(element)
      if (callback) { animation.onfinish = callback }
    }

    // If we have a delay we are going to hide the element at the beginning
    // to avoid dummy frames, wait for the delay, apply the animation and
    // then restore the opacity
    element.style.opacity = 0
    setTimeout(() => {
      const animation = animate(element)
      animation.onfinish = () => {
        element.style.opacity = 1
        if (callback) { callback() }
      }
    }, delay)
  })

  // Set the last position of the $el in the store before removing it
  onBeforeUnmount(function () {
    const element = ref ? this.$refs[ref] : this.$el
    commit('setKeyedRect', { key, rect: element.getBoundingClientRect() })
  })
}
