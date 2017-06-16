import {COUNTER_INCREMENT} from './actions'

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [COUNTER_INCREMENT]: (state, action) => {
    state = Object.assign({}, state, {
      counter: state.counter + action.payload
    })
    return state
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  counter: 0
}
export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
