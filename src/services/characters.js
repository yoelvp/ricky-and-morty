import axios from 'axios'
import { apiUrl } from '../config'

export const getCharacters = (page) => {
  const apiBaseUrl = apiUrl + '/characters'

  return axios.get(apiBaseUrl).then(response => response.data)
}
