import axios from 'axios'

export const useFetch = async (url: string, method: string, param = {}) => {
  if (method === 'get' || method === 'Get') {
    const response = await axios.get(url, { params: param })
    return response
  }
}
