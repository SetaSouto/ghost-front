import axios from 'axios'

if (process.env.NODE_ENV === 'test') { require('dotenv').config() }

const client = axios.create({
  baseURL: `${process.env.API_HOST || 'https://api.blog.fabiansouto.com'}/ghost/api/v3/content`
})

client.interceptors.request.use((config) => {
  config.params.key = process.env.API_KEY || 'e549f81ba651f72b68a95d0971'
  return config
})

export default client
