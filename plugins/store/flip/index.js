import mutations from './mutations'
import state from './state'

/**
 * Generate a plugin that register a module in the store
 * to keep the `BoundingClientRect` of the keyed elements.
 *
 * What is this for? We want to animate the transitions between
 * the different pages but with fluid connected components.
 *
 * Take for example a grid of cards with images. If we click an image
 * we are going to expand the card and want to make the image full width
 * but in another page, with other components, to see more info/data of
 * the item that the card is holding.
 *
 * So we need to "connect" these two components, the one of the image in
 * the card and the other image in the details view.
 *
 * Let's see a simple example in this awesome post from css-tricks:
 * https://css-tricks.com/animating-layouts-with-the-flip-technique/
 *
 * So, to use this "FLIP" animations we need to keep the state of the
 * "first" element and the "last" element. But if we have these components
 * in different pages they are not going to share layout at the same time.
 * We can fix this by keeping the state of the "first" element in the store.
 *
 * Now, when the view changes and the "last" component is rendered we can get
 * its state and animate it using the recorded state of the "first" element and
 * the FLIP technique.
 *
 * That's this plugin for.
 *
 * @param {String} [namespace] of the module in the store that will contains
 * the state of the elements. Default to `FLIP`.
 */
export default (namespace = 'FLIP') => (store) => {
  return store.registerModule(namespace, {
    mutations: mutations(),
    namespaced: true,
    state: state()
  })
}
