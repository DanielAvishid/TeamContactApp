import { userService } from "../services/user.service.js"

const { createStore, compose } = Redux

export const SET_USER = 'SET_USER'

const initialState = {
    loggedinUser: userService.getLoggedInUser()
}

function appReducer(state = initialState, action) {
    switch (action.type) {
        // User
        case SET_USER:
            return { ...state, loggedinUser: action.user }

        default:
            return state
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(appReducer, composeEnhancers())