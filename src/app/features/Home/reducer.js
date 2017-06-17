// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  'TIME_PENDING': (state, action) => {
    return {
      ...state,
      status: 'PENDING'
    }
  },
  'TIME_FULFILLED': (state, action) => {
    return {
      ...state,
      status: 'FULFILLED',
      time: action.payload
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {

}
export default function homeReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
