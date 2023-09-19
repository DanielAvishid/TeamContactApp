const { Route, Routes } = ReactRouterDOM
const Router = ReactRouterDOM.HashRouter
const { Provider } = ReactRedux

import { ContactIndex } from './views/ContactIndex.jsx'
import { Home } from './views/Home.jsx'

export function App() {
    return (
        <Router>
            <section className="app">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/" element={<ContactIndex />} />
                </Routes>
            </section>
        </Router>
    )
}
