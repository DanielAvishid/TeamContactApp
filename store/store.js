// import { userService } from '../services/user.service.js'

const { createStore, compose } = Redux

const initialState = {
  count: 101,
}

function appReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 }
    case 'DECREMENT':
      return { ...state, count: state.count - 1 }
    case 'CHANGE_BY':
      return { ...state, count: state.count + action.diff }
    default:
      return state
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(appReducer, composeEnhancers())

window.gStore = store