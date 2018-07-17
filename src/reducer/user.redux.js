const INIT_STATE = {
  isLogin: false,
  name: '',
  avatar: '',
  phone: ''
}

const LOGIN = 'longin'
const LOGOUT = 'logout'

export function userReducer (state = INIT_STATE, action) {
  switch (action.type) {
    case LOGIN:
      return {...state, isLogin: true}
    case LOGOUT:
      return {...state, isLogin: false}
    default:
      return state
  }
}

export function login (payload) {
  return {type: LOGIN, payload}
}

export function logout (payload) {
  return {type: LOGOUT, payload}
}

