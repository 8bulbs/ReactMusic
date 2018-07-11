import { createStore } from 'redux'
// type
const ADD = '加'
const DEL = '减'

// 通过reducer建立状态
export function counter (state = 0, action) {
  switch (action.type) {
    case ADD:
      return state++
    case DEL:
      return state--
    default:
      return 10
  }
}

// action creater
export function add () {
  return { type: ADD}
}
export function del () {
  return { type: DEL}
}

