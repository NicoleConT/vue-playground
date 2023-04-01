import { createStore } from 'vuex'

export const store = createStore({
  state () {
    return {
      token: ''
    }
  },
  mutations: {
    setToken (state, token: string) {
      state.token = token
    },
    clearToken (state) {
      state.token = ''
    }
  }
})