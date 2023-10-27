import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";



export default function MiddleHeader(props) {
  const wishLength = useSelector((state) => state.wishes.value.length);
  const cartLength = useSelector((state) => state.carts.value.length);
  const [Input, setInput] = useState("");
  // console.log(wishLength);

  return (
    <div className="header-content">
      <div className="container">
        <div className="row align-items-center gx-4">
          <div className="col-auto">
            <div className="d-flex align-items-center gap-3">
              <div
                className="mobile-toggle-menu d-inline d-xl-none"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
              >
                <i className="bx bx-menu"></i>
              </div>
              <div className="logo">
                <Link to="index.html">
                  <img src="./images/logo-icon.png" className="logo-icon" alt="" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl order-4 order-xl-0">
            <div className="input-group flex-nowrap pb-3 pb-xl-0">
              <input
                type="text"
                className="form-control w-100 border-warning border border-3"
                placeholder="Search for Products"
                onChange={(e) => setInput(e.target.value)}
              />
              <button
                className="btn btn-warning btn-ecomm border-3 text-green"
                type="button"
              >
                <Link to={"search/" + Input} style={{ textDecoration: "none" }}>
                  Search
                </Link>
              </button>
            </div>
          </div>
          <div className="col-auto d-none d-xl-flex ">
            <div className="d-flex align-items-center gap-3">
              <div className="fs-1 text-content">
                <i className="bx bx-headphone text-green"></i>
              </div>
              <div className="text-center ">
                <p className="mb-0 text-content text-green">CALL US NOW</p>
                <h5 className="mb-0 text-green">+011 5827918</h5>
              </div>
            </div>
          </div>
          <div className="col-auto ms-auto">
            <div className="top-cart-icons">
              <nav className="navbar navbar-expand">
                <ul className="navbar-nav">
                  <li className="nav-item dropdown dropdown-large">
                    <Link to="/Cart" className="nav-link   fs-1 cart-link">
                      {" "}
                      <span className="alert-count">{cartLength}</span>
                      <i className="bx bx-shopping-bag"></i>
                    </Link>
                  </li>

                  <li className="nav-item dropdown dropdown-large">
                    <Link to="/wish" className="nav-link   fs-1 cart-link">
                      {" "}
                      <span className="alert-count">{wishLength}</span>
                      <i className="bx bx-heart"></i>
                    </Link>
                  </li>

                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link  dropdown-toggle-nocaret fs-1 text-green"
                      to="javascript:;"
                      data-bs-toggle="dropdown"
                    >
                      <i className="bx bx-user-circle"></i>
                    </Link>
                    <ul className="dropdown-menu">
                    <li>
                        <Link
                          className="dropdown-item"
                          to="/account-user-profile.html"
                        >
                          Profile
                        </Link>
                      </li>
                      {/* <li>
                        <Link className="dropdown-item" to="account-dashboard.html">
                          Dashboard
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="account-downloads.html">
                          Downloads
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="authentication-Wallet.html">
                          Wallet
                        </Link>
                      </li> 
                      <li>
                        <Link className="dropdown-item" to="account-orders.html">
                          My Orders
                        </Link>
                      </li> */}
                      <li>
                        <Link className="dropdown-item" to="admin-page ">
                          Admin
                        </Link>
                      </li>
                     
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                    

                      

                      <li>
                        <Link
                          className="dropdown-item"
                          to={props.login ? "/" : "/authentication-Login.html"}
                        // onClick={()=>{
                        //   // process.env.REACT_APP_LOGIN="false"
                        //   console.log(process.env.REACT_APP_LOGIN)
                        // }}
                        >
                          {props.login ? "Logout" : "Login/Register"}
                        </Link>
                      </li>
                      {/* <li>
                        <Link
                          className="dropdown-item"
                          to="authentication-register.html"
                        >
                          Register
                        </Link>
                      </li> */}
                      {/* <li>
                        <Link
                          className="dropdown-item"
                          to="authentication-reset-password.html"
                        >
                          Password
                        </Link>
                      </li>

                      <li>
                        <Link
                          className="dropdown-item"
                          to="authentication-reset-password.html"
                        >
                          LogOut
                        </Link>
                      </li> */}
                    </ul>
                  </li>
                  {/* <!-- <li className="nav-item"><Link to="wishlist.html" className="nav-link cart-link"><i
                                        className='bx bx-heart'></i></Link>
                            </li> --> */}
                </ul>
              </nav>
            </div>
          </div>
        </div>
        {/* <!--end row--> */}
      </div>
    </div>
  );
}
