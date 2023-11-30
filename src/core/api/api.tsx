import axios from 'axios'

export default axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL_API as string,
})
