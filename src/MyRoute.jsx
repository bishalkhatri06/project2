import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import First from './First'
// import { Test } from './Test'
// import TestNav from './TestNav'
import Layout from "./components/Layout";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import EmailVerify from "./auth/EmailVerify"
import Show from "./context/Show";
import TestCart from "./redux/TestCart";
import Profile from "./pages/Profile";
import ForgetPassword from "./pages/ForgetPassword";
import ResetPassword from "./pages/ResetPassword";
import AdminRoute from "./auth/AdminRoute";
import Dashboard from "./Admin/Dashboard";
import AddCategory from "./Admin/AddCategory";
import ShowCategory from "./Admin/ShowCategory";

const MyRoute = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path='/' element={<TestNav/>}/>
            <Route path='/first' element={<First/>}/>
            <Route path='/test' element={<Test/>}/> */}

        <Route path="" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<LogIn />} />
          <Route path="forgetpassword" element={<ForgetPassword/>}/>
          <Route path="reset/password/:token" element={<ResetPassword/>}/>
          <Route path="profile" element={<Profile/>}/>
          <Route path="register" element={<Register />} />
          <Route path="email/confirmation/:token" element={<EmailVerify/>}/>
          <Route path="productdetail/:product_id" element={<ProductDetail />} />
          <Route path="products" element={<Products />} />
          <Route path="cart" element={<Cart />} />
        </Route>
        <Route path="context" element={<Show />} />
        <Route path="redux/cart" element={<TestCart />} />

        <Route path="admin/" element={<AdminRoute/>}>
          <Route path="dashboard" element={<Dashboard/>}/>
          <Route path="addcategory" element={<AddCategory/>}/>
          <Route path="showcategories" element={<ShowCategory/>}/>
        </Route>
      </Routes>
    </Router>
  );
};

export default MyRoute;
