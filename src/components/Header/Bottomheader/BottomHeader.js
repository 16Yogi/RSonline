import React from "react";
import { Link } from "react-router-dom";
// import "./bottom.css";
export default function BottomHeader() {
  return (
    <div style={{position:"sticky",top:"-1px", zIndex:"9999",}}>
      
        <div id="post" className="primary-menu ">
          <nav className="navbar navbar-expand-xl w-100 navbar-dark container mb-0 p-0">
            <div
              className="offcanvas offcanvas-start"
              tabIndex="-1"
              id="offcanvasNavbar"
            >
              <div className="offcanvas-header">
                <div className="offcanvas-logo">
                  <img src="assets/images/logo-icon.png" width="100" alt="" />
                </div>
                <button
                  type="button"
                  className="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body primary-menu">
                <ul className="navbar-nav justify-content-start flex-grow-1 gap-1">
                  <li className="nav-item">
                    <Link className="nav-link" to="index">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link  dropdown-toggle-nocaret"
                      to="tv-shows"
                      data-bs-toggle="dropdown"
                    >
                      Srevices <i className="bx bx-chevron-down ms-1"></i>
                    </Link>
                    <div className="dropdown-menu dropdown-large-menu">
                      <div className="row">
                        <div className="col-6">
                          <h6 className="large-menu-title">Online Services</h6>
                          <ul className="list-unstyled">
                            <li>
                              <Link to="javascript:;">PAN Card</Link>
                            </li>
                            <li>
                              <Link to="https://uidai.gov.in/en/" target="_blank">Aadhar Card</Link>
                            </li>
                            <li>
                              <Link to="https://parivahan.gov.in/parivahan/" target="_blank">Driving Licence</Link>
                            </li>
                            <li>
                              <Link to="http://mpedistrict.gov.in/MPL/Login.aspx?param=RPHRgd%20Li7SZ0odQdPFH65e%20iRG20XlCxnPxcTXgMZSXESXt4CA3COaZ38kSVzt45%20v656Nzl6w=&Page=2rIJ2kku8a8=" target="_blank">Income Certificate</Link>
                            </li>
                            <li>
                              <Link to="http://mpedistrict.gov.in/MPL/Login.aspx?param=3Dsf31RQXOO1Oysa3kAYN2WvYTFQlGKrXjsw/BnC7ooxpF%20N6vZOzz4xcQtXWuzdbKCaLWJ50ik=&Page=2rIJ2kku8a8=" target="_blank">Domecile Certificate</Link>
                            </li>
                            <li>
                              <Link to="http://mpedistrict.gov.in/MPL/Login.aspx?param=MkCOP227zgGN43bnfdFLGhX%206uIn50eKd5T/e8jQKY3Lug8l5bgjLYbb4rHRuY4XRZit1EcZqLEHSg75haZQbS41G4l/g/3bKz6NxNS7SLI=&Page=2rIJ2kku8a8=" target="_blank">Birth Certificatr</Link>
                            </li>
                            <li>
                              <Link to="http://mpedistrict.gov.in/MPL/Login.aspx?param=MkCOP227zgGN43bnfdFLGhX%206uIn50eKd5T/e8jQKY3Lug8l5bgjLYbb4rHRuY4XRZit1EcZqLEHSg75haZQbS41G4l/g/3bKz6NxNS7SLI=&Page=2rIJ2kku8a8=" target="_blank">Death Certificate</Link>
                            </li>
                            <li>
                              <Link to="https://samagra.gov.in/" target="_blank">Samagra ID</Link>
                            </li>
                          </ul>
                        </div>
                        {/* <!-- end col-3 --> */}
                        <div className="col-6">
                          <h6 className="large-menu-title">Result</h6>
                          <ul className="list-unstyled">
                            <li>
                              <Link to="https://mpresults.nic.in/mpbse/hsc10_2023/X_class_23.htm" target="_blank">
                                10<sup>th</sup>Result
                              </Link>
                            </li>
                            <li>
                              <Link to="https://mpresults.nic.in/mpbse/HSSC12_23/HSSC_2023-XII.htm" target="_blank">
                                12<sup>th</sup>Result
                              </Link>
                            </li>
                            <li>
                              <Link to="javascript:;" target="_blank">RRB Result</Link>
                            </li>
                            <li>
                              <Link to="https://mppsc.mp.gov.in/Results" target="_blank">MPPSC Result</Link>
                            </li>
                            <li>
                              <Link to="https://ssc.nic.in/portal/results" target="_blank">SSC Result</Link>
                            </li>
                            <li>
                              <Link to="https://ntaresults.nic.in/resultservices/NEET-2023-auth" target="_blank">NEET Result</Link>
                            </li>
                            <li>
                              <Link to="https://esb.mp.gov.in/Hindi/h_default.html" target="_blank">MPPEB Result</Link>
                            </li>
                            <li>
                              <Link to="javascript:;" target="_blank">IBPS Result</Link>
                            </li>
                          </ul>
                        </div>
                        {/* <!-- end col-3 --> */}
                        {/* <!-- <div className="col-12 col-xl-3">
                                    <h6 className="large-menu-title">Groceries</h6>
                                    <ul className="list-unstyled">
                                        <li><Link to="javascript:;">Bakery and Bread</Link>
                                        </li>
                                        <li><Link to="javascript:;">Meat and Seafood</Link>
                                        </li>
                                        <li><Link to="javascript:;">asta and Rice</Link>
                                        </li>
                                        <li><Link to="javascript:;">Fruit & Vegetables</Link>
                                        </li>
                                        <li><Link to="javascript:;">Condiments</Link>
                                        </li>
                                        <li><Link to="javascript:;">Cereals</Link>
                                        </li>
                                        <li><Link to="javascript:;">Soups</Link>
                                        </li>
                                        <li><Link to="javascript:;">Dairy and Eggs</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-12 col-xl-3">
                                    <h6 className="large-menu-title">Groceries</h6>
                                    <ul className="list-unstyled">
                                        <li><Link to="javascript:;">Bakery and Bread</Link>
                                        </li>
                                        <li><Link to="javascript:;">Meat and Seafood</Link>
                                        </li>
                                        <li><Link to="javascript:;">asta and Rice</Link>
                                        </li>
                                        <li><Link to="javascript:;">Fruit & Vegetables</Link>
                                        </li>
                                        <li><Link to="javascript:;">Condiments</Link>
                                        </li>
                                        <li><Link to="javascript:;">Cereals</Link>
                                        </li>
                                        <li><Link to="javascript:;">Soups</Link>
                                        </li>
                                        <li><Link to="javascript:;">Dairy and Eggs</Link>
                                        </li>
                                    </ul>
                                </div> --> */}
                        {/* <!-- end col-3 --> */}
                      </div>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link  dropdown-toggle-nocaret"
                      to="tv-shows"
                      data-bs-toggle="dropdown"
                    >
                      Products <i className="bx bx-chevron-down ms-1"></i>
                    </Link>
                    <div className="dropdown-menu dropdown-large-menu">
                      <div className="row">
                        <div className="col-6">
                          <h6 className="large-menu-title">Electronics</h6>
                          <ul className="list-unstyled">
                            <li>
                              <Link to="javascript:;">Moniters</Link>
                            </li>
                            <li>
                              <Link to="javascript:;">Laptops</Link>
                            </li>
                            <li>
                              <Link to="javascript:;">Printers</Link>
                            </li>
                            <li>
                              <Link to="javascript:;">Ratina Scanner</Link>
                            </li>
                            <li>
                              <Link to="javascript:;">Lamination Machine</Link>
                            </li>
                            <li>
                              <Link to="javascript:;">Biometric Scanner</Link>
                            </li>
                            <li>
                              <Link to="javascript:;">Xerox Machine</Link>
                            </li>
                            <li>
                              <Link to="javascript:;">PC Monitors</Link>
                            </li>
                          </ul>
                        </div>
                        {/* <!-- end col-3 --> */}
                        <div className="col-6">
                          <h6 className="large-menu-title">Accessories</h6>
                          <ul className="list-unstyled">
                            <li>
                              <Link to="javascript:;">Mouse</Link>
                            </li>
                            <li>
                              <Link to="javascript:;">Keyboard</Link>
                            </li>
                            <li>
                              <Link to="javascript:;">Headphones</Link>
                            </li>
                            <li>
                              <Link to="javascript:;">earphones</Link>
                            </li>
                            <li>
                              <Link to="javascript:;">Printer-ink</Link>
                            </li>
                            <li>
                              <Link to="javascript:;">Copier-Paper</Link>
                            </li>
                            <li>
                              <Link to="javascript:;">Cables</Link>
                            </li>
                            <li>
                              <Link to="javascript:;">PVC-Card</Link>
                            </li>
                          </ul>
                        </div>
                        {/* <!-- end col-3 -->
                                
                                <!-- end col-3 -->
                                <!-- <div className="col-12 col-xl-4">
                                    <h6 className="large-menu-title">Groceries</h6>
                                    <ul className="list-unstyled">
                                        <li><Link to="javascript:;">Bakery and Bread</Link>
                                        </li>
                                        <li><Link to="javascript:;">Meat and Seafood</Link>
                                        </li>
                                        <li><Link to="javascript:;">asta and Rice</Link>
                                        </li>
                                        <li><Link to="javascript:;">Fruit & Vegetables</Link>
                                        </li>
                                        <li><Link to="javascript:;">Condiments</Link>
                                        </li>
                                        <li><Link to="javascript:;">Cereals</Link>
                                        </li>
                                        <li><Link to="javascript:;">Soups</Link>
                                        </li>
                                        <li><Link to="javascript:;">Dairy and Eggs</Link>
                                        </li>
                                        <li className="nav-item dropdown"><Link
                                                className="dropdown-item dropdown-toggle dropdown-toggle-nocaret"
                                                to="#">Shop Layouts <i
                                                    className='bx bx-chevron-right float-end'></i></Link>
                                            <ul className="submenu dropdown-menu">
                                                <li><Link className="dropdown-item"
                                                        to="shop-grid-left-sidebar">Shop
                                                        Grid - Left Sidebar</Link>
                                                </li>
                                                <li><Link className="dropdown-item"
                                                        to="shop-grid-right-sidebar">Shop Grid -
                                                        Right
                                                        Sidebar</Link>
                                                </li>
                                                <li><Link className="dropdown-item"
                                                        to="shop-list-left-sidebar">Shop
                                                        List - Left Sidebar</Link>
                                                </li>
                                                <li><Link className="dropdown-item"
                                                        to="shop-list-right-sidebar">Shop List -
                                                        Right
                                                        Sidebar</Link>
                                                </li>
                                                <li><Link className="dropdown-item"
                                                        to="shop-grid-filter-on-top">Shop Grid -
                                                        Top
                                                        Filter</Link>
                                                </li>
                                                <li><Link className="dropdown-item"
                                                        to="shop-list-filter-on-top">Shop List -
                                                        Top
                                                        Filter</Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div> --> */}
                        {/* <!-- end col-3 --> */}
                      </div>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link  dropdown-toggle-nocaret"
                      to="javascript:;"
                      data-bs-toggle="dropdown"
                    >
                      Shop <i className="bx bx-chevron-down ms-1"></i>
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item dropdown">
                        <Link
                          className="dropdown-item dropdown-toggle dropdown-toggle-nocaret"
                          to="#"
                        >
                          Shop Layouts{" "}
                          <i className="bx bx-chevron-right float-end"></i>
                        </Link>
                        <ul className="submenu dropdown-menu">
                          <li>
                            <Link
                              className="dropdown-item"
                              to="shop-grid-left-sidebar"
                            >
                              Shop Grid - Left Sidebar
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="shop-grid-right-sidebar"
                            >
                              Shop Grid - Right Sidebar
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="shop-list-left-sidebar"
                            >
                              Shop List - Left Sidebar
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="shop-list-right-sidebar"
                            >
                              Shop List - Right Sidebar
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="shop-grid-filter-on-top"
                            >
                              Shop Grid - Top Filter
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="shop-list-filter-on-top"
                            >
                              Shop List - Top Filter
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="product-details">
                          Product Details
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="shop-cart">
                          Shop Cart
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="shop-categories">
                          Shop Categories
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="checkout-details">
                          Billing Details
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="checkout-shipping">
                          Checkout Shipping
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="checkout-payment">
                          Payment Method
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="checkout-review">
                          Order Review
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="checkout-complete">
                          Checkout Complete
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="order-tracking">
                          Order Tracking
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="product-comparison">
                          Product Comparison
                        </Link>
                      </li>
                    </ul>
                  </li>
                  {/* <li className="nav-item dropdown">
                    <Link
                      className="nav-link  dropdown-toggle-nocaret"
                      to="javascript:;"
                      data-bs-toggle="dropdown"
                    >
                      Retailers <i className="bx bx-chevron-down ms-1"></i>
                    </Link>
                    <ul className="dropdown-menu">
                      {/* <!-- <li className="nav-item dropdown"><Link
                                    className="dropdown-item dropdown-toggle dropdown-toggle-nocaret"
                                    to="#">Shop
                                    Layouts <i className='bx bx-chevron-right float-end'></i></Link>
                                <ul className="submenu dropdown-menu">
                                    <li><Link className="dropdown-item" to="shop-grid-left-sidebar">Shop
                                            Grid
                                            -
                                            Left
                                            Sidebar</Link>
                                    </li>
                                    <li><Link className="dropdown-item"
                                            to="shop-grid-right-sidebar">Shop
                                            Grid
                                            -
                                            Right
                                            Sidebar</Link>
                                    </li>
                                    <li><Link className="dropdown-item" to="shop-list-left-sidebar">Shop
                                            List
                                            -
                                            Left
                                            Sidebar</Link>
                                    </li>
                                    <li><Link className="dropdown-item"
                                            to="shop-list-right-sidebar">Shop
                                            List
                                            -
                                            Right
                                            Sidebar</Link>
                                    </li>
                                    <li><Link className="dropdown-item"
                                            to="shop-grid-filter-on-top">Shop
                                            Grid
                                            -
                                            Top
                                            Filter</Link>
                                    </li>
                                    <li><Link className="dropdown-item"
                                            to="shop-list-filter-on-top">Shop
                                            List
                                            -
                                            Top
                                            Filter</Link>
                                    </li>
                                </ul>
                            </li> --> */}
                    {/*  <li>
                        <Link className="dropdown-item" to="product-details">
                          Retailer-1
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="shop-cart">
                          Retailer-2
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="shop-categories">
                          Retailer-3
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="checkout-details">
                          Retailer-4
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="checkout-shipping">
                          Retailer-5
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="checkout-payment">
                          Retailer-6
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="checkout-review">
                          Retailer-7
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="checkout-complete">
                          Retailer-8
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="order-tracking">
                          Retailer-9
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="product-comparison">
                          Retailer-10
                        </Link>
                      </li>
                    </ul>
                  </li> */}
                  {/* <!-- <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle dropdown-toggle-nocaret" to="javascript:;"
                            data-bs-toggle="dropdown">
                            Account <i className='bx bx-chevron-down ms-1'></i>
                        </Link>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="account-dashboard">Dashboard</Link>
                            </li>
                            <li><Link className="dropdown-item" to="account-downloads">Downloads</Link>
                            </li>
                            <li><Link className="dropdown-item" to="account-orders">My Orders</Link>
                            </li>
                            <li><Link className="dropdown-item" to="account-user-details">User
                                    Details</Link>
                            </li>
                            <li>
                                <hr className="dropdown-divider">
                            </li>
                            <li><Link className="dropdown-item" to="authentication-login">Login</Link></li>
                            <li><Link className="dropdown-item"
                                    to="authentication-register">Register</Link></li>
                            <li><Link className="dropdown-item"
                                    to="authentication-reset-password">Password</Link></li>
                        </ul>
                    </li> -->
                    <!-- <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle dropdown-toggle-nocaret" to="javascript:;"
                            data-bs-toggle="dropdown">
                            Payments <i className='bx bx-chevron-down ms-1'></i>
                        </Link>
                        <ul className="dropdown-menu">
                            <li className="nav-item dropdown"><Link
                                    className="dropdown-item dropdown-toggle dropdown-toggle-nocaret"
                                    to="#">Shop
                                    Layouts <i className='bx bx-chevron-right float-end'></i></Link>
                                <ul className="submenu dropdown-menu">
                                    <li><Link className="dropdown-item" to="shop-grid-left-sidebar">Shop
                                            Grid
                                            -
                                            Left
                                            Sidebar</Link>
                                    </li>
                                    <li><Link className="dropdown-item"
                                            to="shop-grid-right-sidebar">Shop
                                            Grid
                                            -
                                            Right
                                            Sidebar</Link>
                                    </li>
                                    <li><Link className="dropdown-item" to="shop-list-left-sidebar">Shop
                                            List
                                            -
                                            Left
                                            Sidebar</Link>
                                    </li>
                                    <li><Link className="dropdown-item"
                                            to="shop-list-right-sidebar">Shop
                                            List
                                            -
                                            Right
                                            Sidebar</Link>
                                    </li>
                                    <li><Link className="dropdown-item"
                                            to="shop-grid-filter-on-top">Shop
                                            Grid
                                            -
                                            Top
                                            Filter</Link>
                                    </li>
                                    <li><Link className="dropdown-item"
                                            to="shop-list-filter-on-top">Shop
                                            List
                                            -
                                            Top
                                            Filter</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown"><Link
                                    className="dropdown-item dropdown-toggle dropdown-toggle-nocaret"
                                    to="#">Product
                                    Details <i className='bx bx-chevron-right float-end'></i></Link>
                                <ul className="submenu dropdown-menu">
                                    <li><Link className="dropdown-item" to="shop-grid-left-sidebar">Shop
                                            Grid
                                            -
                                            Left
                                            Sidebar</Link>
                                    </li>
                                    <li><Link className="dropdown-item"
                                            to="shop-grid-right-sidebar">Shop
                                            Grid
                                            -
                                            Right
                                            Sidebar</Link>
                                    </li>
                                    <li><Link className="dropdown-item" to="shop-list-left-sidebar">Shop
                                            List
                                            -
                                            Left
                                            Sidebar</Link>
                                    </li>
                                    <li><Link className="dropdown-item"
                                            to="shop-list-right-sidebar">Shop
                                            List
                                            -
                                            Right
                                            Sidebar</Link>
                                    </li>
                                    <li><Link className="dropdown-item"
                                            to="shop-grid-filter-on-top">Shop
                                            Grid
                                            -
                                            Top
                                            Filter</Link>
                                    </li>
                                    <li><Link className="dropdown-item"
                                            to="shop-list-filter-on-top">Shop
                                            List
                                            -
                                            Top
                                            Filter</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown"><Link
                                    className="dropdown-item dropdown-toggle dropdown-toggle-nocaret"
                                    to="#">Shop
                                    Cart <i className='bx bx-chevron-right float-end'></i></Link>
                                <ul className="submenu dropdown-menu">
                                    <li><Link className="dropdown-item" to="shop-grid-left-sidebar">Shop
                                            Grid
                                            -
                                            Left
                                            Sidebar</Link>
                                    </li>
                                    <li><Link className="dropdown-item"
                                            to="shop-grid-right-sidebar">Shop
                                            Grid
                                            -
                                            Right
                                            Sidebar</Link>
                                    </li>
                                    <li><Link className="dropdown-item" to="shop-list-left-sidebar">Shop
                                            List
                                            -
                                            Left
                                            Sidebar</Link>
                                    </li>
                                    <li><Link className="dropdown-item"
                                            to="shop-list-right-sidebar">Shop
                                            List
                                            -
                                            Right
                                            Sidebar</Link>
                                    </li>
                                    <li><Link className="dropdown-item"
                                            to="shop-grid-filter-on-top">Shop
                                            Grid
                                            -
                                            Top
                                            Filter</Link>
                                    </li>
                                    <li><Link className="dropdown-item"
                                            to="shop-list-filter-on-top">Shop
                                            List
                                            -
                                            Top
                                            Filter</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown"><Link
                                    className="dropdown-item dropdown-toggle dropdown-toggle-nocaret"
                                    to="#">Shop
                                    Categories <i className='bx bx-chevron-right float-end'></i></Link>
                                <ul className="submenu dropdown-menu">
                                    <li><Link className="dropdown-item" to="shop-grid-left-sidebar">Shop
                                            Grid
                                            -
                                            Left
                                            Sidebar</Link>
                                    </li>
                                    <li><Link className="dropdown-item"
                                            to="shop-grid-right-sidebar">Shop
                                            Grid
                                            -
                                            Right
                                            Sidebar</Link>
                                    </li>
                                    <li><Link className="dropdown-item" to="shop-list-left-sidebar">Shop
                                            List
                                            -
                                            Left
                                            Sidebar</Link>
                                    </li>
                                    <li><Link className="dropdown-item"
                                            to="shop-list-right-sidebar">Shop
                                            List
                                            -
                                            Right
                                            Sidebar</Link>
                                    </li>
                                    <li><Link className="dropdown-item"
                                            to="shop-grid-filter-on-top">Shop
                                            Grid
                                            -
                                            Top
                                            Filter</Link>
                                    </li>
                                    <li><Link className="dropdown-item"
                                            to="shop-list-filter-on-top">Shop
                                            List
                                            -
                                            Top
                                            Filter</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown"><Link
                                    className="dropdown-item dropdown-toggle dropdown-toggle-nocaret"
                                    to="#">Billing
                                    Details <i className='bx bx-chevron-right float-end'></i></Link>
                                <ul className="submenu dropdown-menu">
                                    <li><Link className="dropdown-item" to="shop-grid-left-sidebar">Shop
                                            Grid
                                            -
                                            Left
                                            Sidebar</Link>
                                    </li>
                                    <li><Link className="dropdown-item"
                                            to="shop-grid-right-sidebar">Shop
                                            Grid
                                            -
                                            Right
                                            Sidebar</Link>
                                    </li>
                                    <li><Link className="dropdown-item" to="shop-list-left-sidebar">Shop
                                            List
                                            -
                                            Left
                                            Sidebar</Link>
                                    </li>
                                    <li><Link className="dropdown-item"
                                            to="shop-list-right-sidebar">Shop
                                            List
                                            -
                                            Right
                                            Sidebar</Link>
                                    </li>
                                    <li><Link className="dropdown-item"
                                            to="shop-grid-filter-on-top">Shop
                                            Grid
                                            -
                                            Top
                                            Filter</Link>
                                    </li>
                                    <li><Link className="dropdown-item"
                                            to="shop-list-filter-on-top">Shop
                                            List
                                            -
                                            Top
                                            Filter</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown"><Link
                                    className="dropdown-item dropdown-toggle dropdown-toggle-nocaret"
                                    to="#">Checkout
                                    Shipping <i className='bx bx-chevron-right float-end'></i></Link>
                                <ul className="submenu dropdown-menu">
                                    <li><Link className="dropdown-item" to="shop-grid-left-sidebar">Shop
                                            Grid
                                            -
                                            Left
                                            Sidebar</Link>
                                    </li>
                                    <li><Link className="dropdown-item"
                                            to="shop-grid-right-sidebar">Shop
                                            Grid
                                            -
                                            Right
                                            Sidebar</Link>
                                    </li>
                                    <li><Link className="dropdown-item" to="shop-list-left-sidebar">Shop
                                            List
                                            -
                                            Left
                                            Sidebar</Link>
                                    </li>
                                    <li><Link className="dropdown-item"
                                            to="shop-list-right-sidebar">Shop
                                            List
                                            -
                                            Right
                                            Sidebar</Link>
                                    </li>
                                    <li><Link className="dropdown-item"
                                            to="shop-grid-filter-on-top">Shop
                                            Grid
                                            -
                                            Top
                                            Filter</Link>
                                    </li>
                                    <li><Link className="dropdown-item"
                                            to="shop-list-filter-on-top">Shop
                                            List
                                            -
                                            Top
                                            Filter</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown"><Link
                                    className="dropdown-item dropdown-toggle dropdown-toggle-nocaret"
                                    to="#">Payment
                                    Method<i className='bx bx-chevron-right float-end'></i></Link>
                                <ul className="submenu dropdown-menu">
                                    <li><Link className="dropdown-item" to="shop-grid-left-sidebar">Shop
                                            Grid
                                            -
                                            Left
                                            Sidebar</Link>
                                    </li>
                                    <li><Link className="dropdown-item"
                                            to="shop-grid-right-sidebar">Shop
                                            Grid
                                            -
                                            Right
                                            Sidebar</Link>
                                    </li>
                                    <li><Link className="dropdown-item" to="shop-list-left-sidebar">Shop
                                            List
                                            -
                                            Left
                                            Sidebar</Link>
                                    </li>
                                    <li><Link className="dropdown-item"
                                            to="shop-list-right-sidebar">Shop
                                            List
                                            -
                                            Right
                                            Sidebar</Link>
                                    </li>
                                    <li><Link className="dropdown-item"
                                            to="shop-grid-filter-on-top">Shop
                                            Grid
                                            -
                                            Top
                                            Filter</Link>
                                    </li>
                                    <li><Link className="dropdown-item"
                                            to="shop-list-filter-on-top">Shop
                                            List
                                            -
                                            Top
                                            Filter</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown"><Link
                                    className="dropdown-item dropdown-toggle dropdown-toggle-nocaret"
                                    to="#">Order
                                    Review <i className='bx bx-chevron-right float-end'></i></Link>
                                <ul className="submenu dropdown-menu">
                                    <li><Link className="dropdown-item" to="shop-grid-left-sidebar">Shop
                                            Grid
                                            -
                                            Left
                                            Sidebar</Link>
                                    </li>
                                    <li><Link className="dropdown-item"
                                            to="shop-grid-right-sidebar">Shop
                                            Grid
                                            -
                                            Right
                                            Sidebar</Link>
                                    </li>
                                    <li><Link className="dropdown-item" to="shop-list-left-sidebar">Shop
                                            List
                                            -
                                            Left
                                            Sidebar</Link>
                                    </li>
                                    <li><Link className="dropdown-item"
                                            to="shop-list-right-sidebar">Shop
                                            List
                                            -
                                            Right
                                            Sidebar</Link>
                                    </li>
                                    <li><Link className="dropdown-item"
                                            to="shop-grid-filter-on-top">Shop
                                            Grid
                                            -
                                            Top
                                            Filter</Link>
                                    </li>
                                    <li><Link className="dropdown-item"
                                            to="shop-list-filter-on-top">Shop
                                            List
                                            -
                                            Top
                                            Filter</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown"><Link
                                    className="dropdown-item dropdown-toggle dropdown-toggle-nocaret"
                                    to="#">Checkout
                                    Complete <i className='bx bx-chevron-right float-end'></i></Link>
                                <ul className="submenu dropdown-menu">
                                    <li><Link className="dropdown-item" to="shop-grid-left-sidebar">Shop
                                            Grid
                                            -
                                            Left
                                            Sidebar</Link>
                                    </li>
                                    <li><Link className="dropdown-item"
                                            to="shop-grid-right-sidebar">Shop
                                            Grid
                                            -
                                            Right
                                            Sidebar</Link>
                                    </li>
                                    <li><Link className="dropdown-item" to="shop-list-left-sidebar">Shop
                                            List
                                            -
                                            Left
                                            Sidebar</Link>
                                    </li>
                                    <li><Link className="dropdown-item"
                                            to="shop-list-right-sidebar">Shop
                                            List
                                            -
                                            Right
                                            Sidebar</Link>
                                    </li>
                                    <li><Link className="dropdown-item"
                                            to="shop-grid-filter-on-top">Shop
                                            Grid
                                            -
                                            Top
                                            Filter</Link>
                                    </li>
                                    <li><Link className="dropdown-item"
                                            to="shop-list-filter-on-top">Shop
                                            List
                                            -
                                            Top
                                            Filter</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown"><Link
                                    className="dropdown-item dropdown-toggle dropdown-toggle-nocaret"
                                    to="#">Order
                                    Tracking <i className='bx bx-chevron-right float-end'></i></Link>
                                <ul className="submenu dropdown-menu">
                                    <li><Link className="dropdown-item" to="shop-grid-left-sidebar">Shop
                                            Grid
                                            -
                                            Left
                                            Sidebar</Link>
                                    </li>
                                    <li><Link className="dropdown-item"
                                            to="shop-grid-right-sidebar">Shop
                                            Grid
                                            -
                                            Right
                                            Sidebar</Link>
                                    </li>
                                    <li><Link className="dropdown-item" to="shop-list-left-sidebar">Shop
                                            List
                                            -
                                            Left
                                            Sidebar</Link>
                                    </li>
                                    <li><Link className="dropdown-item"
                                            to="shop-list-right-sidebar">Shop
                                            List
                                            -
                                            Right
                                            Sidebar</Link>
                                    </li>
                                    <li><Link className="dropdown-item"
                                            to="shop-grid-filter-on-top">Shop
                                            Grid
                                            -
                                            Top
                                            Filter</Link>
                                    </li>
                                    <li><Link className="dropdown-item"
                                            to="shop-list-filter-on-top">Shop
                                            List
                                            -
                                            Top
                                            Filter</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown"><Link
                                    className="dropdown-item dropdown-toggle dropdown-toggle-nocaret"
                                    to="#">Product
                                    Compairison <i className='bx bx-chevron-right float-end'></i></Link>
                                <ul className="submenu dropdown-menu">
                                    <li><Link className="dropdown-item" to="shop-grid-left-sidebar">Shop
                                            Grid
                                            -
                                            Left
                                            Sidebar</Link>
                                    </li>
                                    <li><Link className="dropdown-item"
                                            to="shop-grid-right-sidebar">Shop
                                            Grid
                                            -
                                            Right
                                            Sidebar</Link>
                                    </li>
                                    <li><Link className="dropdown-item" to="shop-list-left-sidebar">Shop
                                            List
                                            -
                                            Left
                                            Sidebar</Link>
                                    </li>
                                    <li><Link className="dropdown-item"
                                            to="shop-list-right-sidebar">Shop
                                            List
                                            -
                                            Right
                                            Sidebar</Link>
                                    </li>
                                    <li><Link className="dropdown-item"
                                            to="shop-grid-filter-on-top">Shop
                                            Grid
                                            -
                                            Top
                                            Filter</Link>
                                    </li>
                                    <li><Link className="dropdown-item"
                                            to="shop-list-filter-on-top">Shop
                                            List
                                            -
                                            Top
                                            Filter</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li> --> */}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      
    </div>
  );
}
