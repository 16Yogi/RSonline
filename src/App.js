import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import BootomHeader from "./components/Header/Bottomheader/BottomHeader";
import MiddleHeader from "./components/Header/MiddileHeader/MiddleHeader";
import TopHeader from "./components/Header/Topheader/TopHeader";
import Wallet from "./components/Wallet/Wallet";
import Blog from "./pages/Blog";
import Cart from "./pages/Cart";
import Catagory from "./pages/Catagory";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Myoder from "./pages/Myoder";
import ProductDetails from "./pages/ProductDetails";
import Register from "./pages/Register";
import Trackingoder from "./pages/Trackingoder";
import Wish from "./pages/Wish";
import UserProfile from "./pages/UserProfile";
import {
  loadBrand,
  loadCategory,
  loadProduct,
} from "./reduxconfig/MasterSlice";
import webService from "./services/WebService";
import webUrls from "./services/WebUrls";
import TestCart from "./pages/TestCart";
import Admin from "./admin/Admin";
import Forgetpass from "./admin/components/Foreget/Forgetpass";

import Dashboard from "./admin/pages/Dashboard";
import Electronics from "./admin/pages/Electronics";
import Accessories from "./admin/pages/Accessories";
import Retailers from "./admin/pages/Retailers";
import Customers from "./admin/pages/Customers";
import Employees from "./admin/pages/Employees";
import Leaves from "./admin/pages/Leaves";
import Holidays from "./admin/pages/Holidays";
import Attendance from "./admin/pages/Attendance"
import Invoices from "./admin/pages/Invoices"
import Payments from "./admin/pages/Payments"
import Expenses from "./admin/pages/Expenses"
import Taxes from "./admin/pages/Taxes"
import Empsalary from "./admin/pages/Empsalary"
import Payslip from "./admin/pages/Payslip"
import AddElec from "./admin/pages/AddElec";
import Profile from "./admin/pages/Profile";
import UserDashboard from "./pages/UserDashboard";
import UserAddress from "./pages/UserAddress";
import UserPay from "./pages/UserPay";

 


export default function App() {
 
 


  const dispatch = useDispatch();
  const addressroutes = useLocation();
  console.log(addressroutes.pathname);
  useEffect(async () => {
    var cateData = await webService.getApiCall(webUrls.CATEGORY_LOAD);
    dispatch(loadCategory(cateData.data));

    var brandData = await webService.getApiCall(webUrls.BRAND_LOAD);
    dispatch(loadBrand(brandData.data));

    var prodData = await webService.getApiCall(webUrls.PRPODUCT_LOAD);
    dispatch(loadProduct(prodData.data));
  }, []);
  let condition = window.location.href;
  const [Address, setAddress] = useState(addressroutes.pathname);
  // console.log(Address)

  if (
    Address === "/authentication-Login.html" ||
    Address === "/authentication-register.html"
  ) {
    return (
      <Routes>
        <Route path="/authentication-register.html" element={<Register />} />
        <Route path="/authentication-Login.html" element={<Login />} />
      </Routes>
    );
  } else if (Address === "/admin-page" ) {
    return (

      <div className="main-wrapper">

      
      <Routes>
        <Route path="/admin-page" element={<Admin />} />
        <Route path="/admin-page/Profile" element={<Profile />} />


        <Route path="/admin-page/reset-pass" element={<Forgetpass />} />
        {/* <Route path="/admin-page/Dashbord" element={<Menubar />} /> */}
        <Route path="/admin-page/Dashbord"  element={<Dashboard/>} />
        <Route path="/admin-page/Electronics"  element={<Electronics/>} />
        <Route path="/admin-page/Accessories"  element={<Accessories/>} />
        <Route path="/admin-page/Retailers"  element={<Retailers/>} />
        <Route path="/admin-page/Customers"  element={<Customers/>} />
        <Route path="/admin-page/Employees"  element={<Employees/>} />
        <Route path="/admin-page/Leaves"  element={<Leaves/>} />
        <Route path="/admin-page/Holidays"  element={<Holidays/>} />
        <Route path="/admin-page/Attendance"  element={<Attendance/>} />
        <Route path="/admin-page/Invoices"  element={<Invoices/>} />
        <Route path="/admin-page/Payments"  element={<Payments/>} />
        <Route path="/admin-page/Expenses"  element={<Expenses/>} />
        <Route path="/admin-page/Taxes"  element={<Taxes/>} />
        <Route path="/admin-page/EmployeeSalary"  element={<Empsalary/>} />
        <Route path="/admin-page/Payslip"  element={<Payslip/>} />
        <Route path="/admin-page/AddElectronics"  element={<AddElec/>} />



        
      </Routes>
      </div>
    );
  } else {
    return (
      <div>
        <TopHeader />
        <MiddleHeader login={false} />
        <BootomHeader />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/account-user-profile.html" element={<UserProfile />} />
          <Route path="/account-dashboard.html" element={<UserDashboard />} />
          <Route path="/account-addresses.html" element={<UserAddress />} />
          <Route path="/account-payment-methods.html" element={<UserPay />} />



          <Route path="/Trackingoder" element={<Trackingoder />} />
          <Route path="/Blogs" element={<Blog />} />
          {/* <Route path='/Cart' element={<Cart />} /> */}
          <Route path="/Cart" element={<TestCart />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/details" element={<ProductDetails />} />
          <Route path="/account-orders.html" element={<Myoder />} />
          <Route path="/wish" element={<Wish />} />
          <Route path="/cat" element={<Catagory />} />
          <Route path="/authentication-wallet.html" element={<Wallet />} />
          <Route path="/authentication-Login.html" element={<Login />} />
          <Route path="/authentication-register.html" element={<Register />} />
        </Routes>

        <Footer />
      </div>
    );
  }
}