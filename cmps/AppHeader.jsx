import { userService } from '../services/user.service.js'
import { SET_USER } from '../store/store.js'
import { LoginSignup } from './LoginSignup.jsx'

const { Link, NavLink } = ReactRouterDOM
const { useSelector, useDispatch } = ReactRedux

export function AppHeader() {
    const dispatch = useDispatch()
    const user = useSelector(storeState => storeState.loggedinUser)

    function onSetUser(user) {
        dispatch({ type: SET_USER, user })
    }

    function onLogout() {
        userService.logout()
            .then(() => {
                dispatch({ type: SET_USER, user: null })
            })
    }

    return (
        <header className="app-header">
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/todo">Todo</NavLink>
            </nav>
            {user && <section className="user-info">
                <p>{user.fullname}</p>
                <button onClick={onLogout}>Logout</button>
            </section>}
            {!user && <section className="user-info">
                <LoginSignup onSetUser={onSetUser} />
            </section>}
        </header>
    )
}
