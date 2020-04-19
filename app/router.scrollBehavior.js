/**
 * We had to customize the scroll behavior to work with dynamic
 * transitions between the pages. Now we return a promise that resolves
 * with the savedPosition of the page 10 milliseconds after.
 *
 * For more information please read:
 * https://nuxtjs.org/api/configuration-router#scrollbehavior
 * https://router.vuejs.org/guide/advanced/scroll-behavior.html
 */
export default function (to, from, savedPosition) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(savedPosition || { x: 0, y: 0 }), 10)
  })
}
