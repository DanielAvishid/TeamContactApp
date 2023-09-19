const { Route, Routes } = ReactRouterDOM
const Router = ReactRouterDOM.HashRouter
const { Provider } = ReactRedux

import { ContactDetails } from './views/ContactDetails.jsx'
import { Home } from './views/Home.jsx'

export function App() {
    return (
        <Router>
            <section className="app">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/" element={<ContactDetails />} />
                </Routes>
            </section>
        </Router>
    )
}
