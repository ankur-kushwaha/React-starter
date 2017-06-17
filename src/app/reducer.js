import { combineReducers } from 'redux'
// import { routerReducer as routing } from 'react-router-redux'

import counterReducer from './features/Counter/reducer.js'
import homeReducer from './features/Home/reducer.js'

export default combineReducers({
  counterReducer,
  home: homeReducer
})
