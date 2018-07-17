import { combineReducers } from 'redux'
import { playListReducer } from './player.redux'
import { userReducer } from './user.redux'

export default combineReducers({ playListReducer, userReducer })
