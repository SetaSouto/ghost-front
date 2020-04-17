import client from './client'

/**
 * Generate the `get` function for the given resource.
 *
 * Example:
 *
 * ```javascript
 * const api = generateApi('posts')
 *
 * const post = await api.get({ id: 'id' })
 * const posts = await api.get({ page: 2 })
 * ```
 *
 * For more information about the api please see:
 * https://ghost.org/docs/api/v3/content/
 *
 * @param {String} resource to what we want to generate the functions
 *  to perform api calls.
 */
export default function (resource) {
  /**
   * Get a single resource by id or a page of resources with the given params.
   *
   * @param {Object} params
   * @param {Object} [params.id] of the instance to get if you want to get
   * a single one.
   *
   * For the rest of the params please see:
   * https://ghost.org/docs/api/v3/content/#parameters
   */
  function get (params = {}) {
    const { id } = params
    let endpoint = `/${resource}/`

    if (id) {
      endpoint += `${id}/`
      delete params.id
    }

    return client.get(endpoint, { params }).then(({ data }) => data)
  }

  return { get }
}
