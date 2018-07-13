import $ from 'api/axios.config'

export function loginByPhone () {
  return $.get('/login/cellphone', {
    'phone': 17612260765,
    'password': 'lxm135579'
  })
}

export function loginRefresh () {
  return $.get('/login/refresh')
}
