import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import First from './First'
// import { Test } from './Test'
// import TestNav from './TestNav'
import Layout from './components/Layout'
import Home from './pages/Home'
import LogIn from './pages/LogIn'
import ProductDetail from './pages/ProductDetail'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Register from './pages/Register'
import Show from './context/Show'
import TestCart from './redux/TestCart'

const MyRoute = () => {
  return (
    <Router>
        <Routes>
            {/* <Route path='/' element={<TestNav/>}/>
            <Route path='/first' element={<First/>}/>
            <Route path='/test' element={<Test/>}/> */}

            <Route path='' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path='login' element={<LogIn/>}/>
                <Route path='register' element={<Register/>}/>
                <Route path='productdetail/:product_id' element={<ProductDetail/>}/>
                <Route path='products' element={<Products/>}/>
                <Route path='cart' element={<Cart/>}/>
            </Route>
            <Route path='context' element={<Show/>}/>
            <Route path='redux/cart' element={<TestCart/>}/>
            
        </Routes>
    </Router>
  )
}

export default MyRoute