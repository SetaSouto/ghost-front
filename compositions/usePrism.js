import { onMounted } from '@vue/composition-api'
import Prism from '~/plugins/prism'

/**
 * Use prism in the component to highlight code blocks.
 *
 * See: https://prismjs.com/index.html
 */
export default () => {
  onMounted(() => {
    Prism.highlightAll()
  })
}
