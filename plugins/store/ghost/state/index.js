/**
 * Generate the state for the module.
 */
export default () => {
  return {
    errorOnGet: null, // The error object if we encounter any error
    keyedById: {}, // All the retrieved instances keyed by id
    pages: {}, // To avoid getting them again. It will contain the page number and the ids of the items.
    total: null, // The total number of instances present in the backend
    totalPages: null, // The total number of pages that we can get
    pendingGet: false // Indicates that the get action is pending
  }
}
