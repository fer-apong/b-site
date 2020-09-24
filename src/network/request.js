import axios from 'axios'

export function localRequest (config) {
  const localData = axios.create({
    baseURL: "/API",
    timeout: 5000
  })

  localData.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err)
  })

  localData.interceptors.response.use(result => {
    return result.data
  }, err => {
    console.log(err)
  })

  return localData(config)
}