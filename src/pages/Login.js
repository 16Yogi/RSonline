import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
    
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
  
    const sendData = async() =>{
      try{
        const user = {
          email:email,
          password:password
        };
        const data = await fetch("http://localhost:8000/api/user/userlogin",{
          method:"get",
          headers:{
            "Content-Type":"application/json",
          },
          body:JSON.stringify(user),
        });
      }catch{}
    };
  
    const email1 = (e) =>{
      const value = e.target.value;
      setEmail(value)
    };
    
    const password1 = (e) =>{
      const value = e.target.value;
      setPassword(value)
    };
   

    return (
    <div>
      <div class="page-wrapper">
        <div class="page-content">
          {/* <!--start breadcrumb--> */}
          <section class="py-3 border-bottom border-top d-none d-md-flex bg-light">
            <div class="container">
              <div class="page-breadcrumb d-flex align-items-center">
                <h3 class="breadcrumb-title pe-3">Sign In</h3>
                <div class="ms-auto">
                  <nav aria-label="breadcrumb">
                    <ol class="breadcrumb mb-0 p-0">
                      <li class="breadcrumb-item">
                        <a href="javascript:;">
                          <i class="bx bx-home-alt"></i> Home
                        </a>
                      </li>
                      <li class="breadcrumb-item">
                        <a href="javascript:;">Authentication</a>
                      </li>
                      <li class="breadcrumb-item active" aria-current="page">
                        Sign In
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </section>
          {/* <!--end breadcrumb-->
                    <!--start shop cart--> */}
          <section class="py-0 py-lg-5">
            <div class="container">
              <div class="section-authentication-signin d-flex align-items-center justify-content-center my-5">
                <div class="row row-cols-1 row-cols-lg-1 row-cols-xl-2">
                  <div class="col mx-auto">
                    <div class="card mb-0">
                      <div class="card-body">
                        <div class="border p-4 rounded">
                          <div class="text-center">
                            <h3 class="">Sign In</h3>
                            <p>
                              Don't have an account?{" "}
                              <Link to="/authentication-register.html">
                                Sign up here
                              </Link>
                            </p>
                          </div>
                          {/* <div class="d-grid">
                                                        <a class="btn my-4 shadow-sm btn-white" href="javascript:;">
                                                            <span
                                                                class="d-flex justify-content-center align-items-center">
                                                                <img class="me-2" src="./images/icons/google.svg"
                                                                    width="16" alt="Image Description" />
                                                                    <span>Sign in with Google</span>
                                                            </span>
                                                        </a>
                                                        <a class="btn shadow-sm btn-white" href="javascript:;"> <span
                                                            class="d-flex justify-content-center align-items-center">
                                                            <img class="me-2" src="./images/icons/facebook.svg"
                                                                width="16" alt="Image Description" />
                                                                <span>Sign in with Facebook</span>
                                                        </span>
                                                        </a>
                                                        <!-- <a href="javascript:;" class="btn btn-white"><i class="bx bxl-facebook"></i>Sign in with Facebook</a> -->
                                                    </div> */}
                          <div class="login-separater text-center mb-4">
                            {" "}
                            <span>OR Sign In WITH EMAIL</span>
                            <hr />
                          </div>
                          <div class="form-body">
                            <form class="row g-3">
                              <div class="col-12">
                                <label
                                  for="inputEmailAddress"
                                  class="form-label"
                                >
                                  Email Address
                                </label>
                                <input
                                  type="email"
                                  class="form-control"
                                  id="inputEmailAddress"
                                  placeholder="example@user.com"
                                  onChange={email1}
                                  value={email}
                                  
                                />
                              </div>
                              <div class="col-12">
                                <label
                                  for="inputChoosePassword"
                                  class="form-label"
                                >
                                  Password
                                </label>
                                <div
                                  class="input-group"
                                  id="show_hide_password"
                                >
                                  <input
                                    type="password"
                                    class="form-control border-end-0"
                                    id="inputChoosePassword"
                                    placeholder="Enter Password"
                                    onChange={password1}
                                    value={password}
                                  
                                  />{" "}
                                  <a
                                    href="javascript:;"
                                    class="input-group-text bg-transparent"
                                  >
                                    <i class="bx bx-hide"></i>
                                  </a>
                                </div>
                              </div>

                              <div class="col-12">
                                <div class="form-check form-switch">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="flexSwitchCheckChecked"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="flexSwitchCheckChecked"
                                  >
                                    I read and agree to Terms & Conditions
                                  </label>
                                </div>
                              </div>
                              <div class="col-12">
                                <div class="d-grid">
                                  <button type="submit" class="btn btn-dark" onClick={sendData}>
                                    <i class="bx bx-user"></i>Sign In
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!--end row--> */}
              </div>
            </div>
          </section>
          {/* <!--end shop cart--> */}
        </div>
      </div>
      {/* <!--end page wrapper --> */}
    </div>
  );
}
