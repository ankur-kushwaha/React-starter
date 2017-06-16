import { combineReducers } from 'redux'
// import { routerReducer as routing } from 'react-router-redux'

import friends, { NAME as friendsName } from './features/friends'
import counterReducer from './features/Counter/reducer.js'

export default combineReducers({
  [friendsName]: friends,
  counterReducer
})
