import axios from 'axios'
import { store } from '../store'
import { login } from './login'

const instance = axios.create()

instance.interceptors.request.use(async config => {
  if (store.state.token.length === 0) {
    await login()
  }
  config.data.token = store.state.token
  // test feature, remove token for next time to retry login
  store.commit('clearToken')
  return config
})

export {
  instance
}