import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Cart from "./page/component/Cart"
import Category from "./page/component/Category"
import Order from "./page/component/Order"
import Orderitem from "./page/component/Orderitem"
import Product from "./page/component/Product"
import Review from "./page/component/Review"
import Shipping from "./page/component/Shipping"
import User from "./page/component/User"
import Login from './page/auth/Login'
import Register from './page/auth/Register'
import Mainlayout from './page/layout/Mainlayout'



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes >
          <Route path='' element={<Mainlayout/>}>
            <Route path='cart' element={<Cart/>} />
            <Route path='category' element={<Category />}/>
            <Route path='order' element={<Order/>}/>
            <Route path='orderitem' element={<Orderitem/>}/>
            <Route path='product' element={<Product/>}/>
            <Route path='review' element={<Review/>}/>
            <Route path='shipping' element={<Shipping/>}/>
            <Route path='user' element={<User/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='register' element={<Register/>}/>
          </Route>
       </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
