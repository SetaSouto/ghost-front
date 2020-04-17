import axios from 'axios'

if (process.env.NODE_ENV === 'test') { require('dotenv').config() }

const { API_HOST, API_KEY } = process.env
if (!API_HOST) { throw new Error('Please provide the API_HOST env variable.') }
if (!API_KEY) { throw new Error('Please provide the API_KEY env variable.') }

const client = axios.create({ baseURL: `${API_HOST}/ghost/api/v3/content` })
client.interceptors.request.use((config) => {
  config.params.key = API_KEY
  return config
})

export default client
