export default [
  {
    url: '/mock/login',
    method: 'post',
    response: () => {
      return 'this is the token string'
    }
  },
  {
    url: '/mock/test',
    method: 'post',
    response: () => {
      return 'success'
    }
  }
]