import axios from 'axios'
import { store } from '../store'

export function login () {
  return axios.post('/mock/login').then((res) => {
    const token = res?.data
    token && store.commit('setToken', token)
  })
}