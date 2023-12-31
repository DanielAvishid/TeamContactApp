const { Route, Routes } = ReactRouterDOM
const Router = ReactRouterDOM.HashRouter
const { Provider } = ReactRedux

import { ContactDetails } from './views/ContactDetails.jsx'
import { ContactIndex } from './views/ContactIndex.jsx'
import { Home } from './views/Home.jsx'

export function App() {
    return (
        <Router>
            <section className="app">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact/:contactId" element={<ContactDetails />} />
                    <Route path="/contact" element={<ContactIndex />} />
                </Routes>
            </section>
        </Router>
    )
}
