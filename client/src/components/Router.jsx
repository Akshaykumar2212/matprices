import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import VisitAsSeller from '../pages/VisitAsSeller'

const Router = createBrowserRouter([
    { path : '/', element : <Home/> },
    { path : '/visit-as-seller', element : <VisitAsSeller/> },
])

export default Router