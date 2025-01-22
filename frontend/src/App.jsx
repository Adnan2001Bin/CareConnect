import './App.css'
import {createBrowserRouter} from "react-router-dom"
import Home from './pages/user-view/Home'
import Cart from './pages/user-view/Cart'
import Collection from './pages/user-view/Collection'
import Contact from './pages/user-view/Contact'
import Product from './pages/user-view/Product'
import Login from './pages/auth/Login'
import PlaceOrder from './pages/user-view/PlaceOrder'
import Orders from './pages/user-view/Orders'
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Home />
    },
    {
      path: "/collection",
      element:<Collection />
    },
    {
      path: "/contact",
      element:<Contact />
    },
    {
      path: "/contact",
      element:<Contact />
    },
    {
      path: "/product/:productId",
      element: <Product />,
    },
    {
      path: "/cart",
      element:<Cart />
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/place-Order",
      element: <PlaceOrder />,
    },
    {
      path: "/orders",
      element:<Orders />
    },
  ])

  return (
    <div>
      dd
    </div>
  )
}

export default App
