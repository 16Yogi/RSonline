import React from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";

import Dashboard from "../../pages/Dashboard";

export default function Menubar() {
  function handleClick0() {
    document.getElementById("drop-menu0").classList.toggle("d-block");
  }

  function handleClick1() {
    document.getElementById("drop-menu1").classList.toggle("d-block");
  }
  function handleClick2() {
    document.getElementById("drop-menu2").classList.toggle("d-block");
  }
  function handleClick3() {
    document.getElementById("drop-menu3").classList.toggle("d-block");
  }
  function handleClick4() {
    document.getElementById("drop-menu4").classList.toggle("d-block");
  }

  return (   
    <>
    <div class="main-wrapper">
      <div className="header ">
        <div className="header-left">
          <a href="index.html" className="logo">
            <img
              src="../assets/img/logo-dark.png"
              width="45"
              height="45"
              className=""
              alt=""
            />{" "}
            <span></span>
          </a>
        </div>
        <a id="toggle_btn" href="javascript:void(0);">
          <i className="fa fa-bars"></i>
        </a>
        <a id="mobile_btn" className="mobile_btn float-left" href="#sidebar">
          <i className="fa fa-bars"></i>
        </a>
        <ul className="nav user-menu float-right">
          <li className="nav-item dropdown d-none d-sm-block">
            <a
              href="#"
              className="dropdown-toggle nav-link"
              data-toggle="dropdown"
            >
              <i className="fa fa-bell-o"></i>{" "}
              <span className="badge badge-pill bg-danger float-right">2</span>
            </a>
            <div className="dropdown-menu notifications">
              <div className="topnav-dropdown-header">
                <span>Notifications</span>
              </div>
              <div className="drop-scroll">
                <ul className="notification-list">
                  <li className="notification-message">
                    <a href="activities.html">
                      <div className="media">
                        <span className="avatar">
                          <img
                            alt="John Doe"
                            src="../assets/img/user.jpg"
                            className="img-fluid"
                          />
                        </span>
                        <div className="media-body">
                          <p className="noti-details">
                            <span className="noti-title">Sanjay</span> added new
                            task{" "}
                            <span className="noti-title">
                              {" "}
                              appointment booking
                            </span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">
                              4 mins ago
                            </span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="activities.html">
                      <div className="media">
                        <span className="avatar">V</span>
                        <div className="media-body">
                          <p className="noti-details">
                            <span className="noti-title">Nawaz</span> changed
                            the task name{" "}
                            <span className="noti-title">
                              Appointment booking with payment gateway
                            </span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">
                              6 mins ago
                            </span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="topnav-dropdown-footer">
                <a href="activities.html">View all Notifications</a>
              </div>
            </div>
          </li>
          <li className="nav-item dropdown d-none d-sm-block">
            <a
              href="javascript:void(0);"
              id="open_msg_box"
              className="hasnotifications nav-link"
            >
              <i className="fa fa-comment-o"></i>{" "}
              <span className="badge badge-pill bg-danger float-right">3</span>
            </a>
          </li>
          <li className="nav-item dropdown has-arrow">
            <a
              href="#"
              className="dropdown-toggle nav-link user-link"
              data-toggle="dropdown"
            >
              <span className="user-img">
                <img
                  className="rounded-circle"
                  src="../assets/img/user.jpg"
                  width="24"
                  alt="Admin"
                />
                <span className="status online"></span>
              </span>
              <span>Admin</span>
            </a>
            <div className="dropdown-menu">
              <a class="dropdown-item" href="profile.html">
                My Profile
              </a>
              <a class="dropdown-item" href="edit-profile.html">
                Edit Profile
              </a>
              <a class="dropdown-item" href="settings.html">
                Settings
              </a>
              <a class="dropdown-item" href="login.html">
                Logout
              </a>
            </div>
          </li>
        </ul>
        <div className="dropdown mobile-user-menu float-right">
          <a
            href="#"
            className="dropdown-toggle"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fa fa-ellipsis-v"></i>
          </a>
          <div className="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item" href="profile.html">
              My Profile
            </a>
            <a class="dropdown-item" href="edit-profile.html">
              Edit Profile
            </a>
            <a class="dropdown-item" href="settings.html">
              Settings
            </a>
            <a class="dropdown-item" href="login.html">
              Logout
            </a>
          </div>
        </div>
      </div>
      <div class="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll ">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
              {/* <li className="menu-title">Main </li> */}
              <li className="active">
                <Link to="admin-page/Dashbord/main">
                  <i className="fa fa-dashboard"></i> <span>Dashboard</span>
                </Link>
              </li>
              <li className="submenu">
                <a href="#" onClick={handleClick0}>
                  <i className="fa-solid fa-cart-shopping"></i>{" "}
                  <span> Products </span> <span class="menu-arrow"></span>
                </a>
                <ul className="d-none" id="drop-menu0">
                  <li>
                    <a class="" href="Electronics.html">
                      Electronics
                    </a>
                  </li>
                  <li>
                    <a class="" href="Accessories.html">
                      Accessories
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="Retailers.html">
                  <i className="fa-solid fa-store"></i> <span>Retailers</span>
                </a>
              </li>
              <li>
                <a href="Customers.html">
                  <i className="fa fa-user"></i> <span>Customers</span>
                </a>
              </li>

              <li className="submenu">
                <a href="#" onClick={handleClick1}>
                  <i className="fa-solid fa-user-tie"></i>{" "}
                  <span> Employees </span> <span class="menu-arrow"></span>
                </a>
                <ul className="" id="drop-menu1">
                  <li>
                    <a href="employees.html">Employees List</a>
                  </li>
                  <li>
                    <a href="leaves.html">Leaves</a>
                  </li>
                  <li>
                    <a href="holidays.html">Holidays</a>
                  </li>
                  <li>
                    <a href="attendance.html">Attendance</a>
                  </li>
                </ul>
              </li>

              <li className="submenu">
                <a href="#" onClick={handleClick2}>
                  <i className="fa fa-money"></i> <span> Accounts </span>{" "}
                  <span class="menu-arrow"></span>
                </a>
                <ul className="" id="drop-menu2">
                  <li>
                    <a href="invoices.html">Invoices</a>
                  </li>
                  <li>
                    <a href="payments.html">Payments</a>
                  </li>
                  <li>
                    <a href="expenses.html">Expenses</a>
                  </li>
                  <li>
                    <a href="taxes.html">Taxes</a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#" onClick={handleClick3}>
                  <i className="fa fa-book"></i> <span> Payroll </span>{" "}
                  <span class="menu-arrow"></span>
                </a>
                <ul className="" id="drop-menu3">
                  <li>
                    <a href="salary.html"> Employee Salary </a>
                  </li>
                  <li>
                    <a href="salary-view.html"> Payslip </a>
                  </li>
                </ul>
              </li>

              <li className="submenu">
                <a href="#" onClick={handleClick4}>
                  <i className="fa fa-flag-o"></i> <span> Reports </span>{" "}
                  <span class="menu-arrow"></span>
                </a>
                <ul className="" id="drop-menu4">
                  {/* <!-- <li><a href="expense-reports.html"> Expense Report </a></li> */}
                  {/* <li><a href="invoice-reports.html"> Invoice Report </a></li> --> */}
                  <li>
                    <a href="invoices.html">Invoices Report</a>
                  </li>
                  <li>
                    <a href="expenses.html">Expenses Report</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="settings.html">
                  <i className="fa fa-cog"></i> <span>Settings</span>
                </a>
              </li>

              <li className="menu-title">Extras</li>
              <li className="submenu">
                <a href="#">
                  <i className="fa fa-columns"></i> <span>Pages</span>{" "}
                  <span class="menu-arrow"></span>
                </a>
                <ul className="" id="drop-menu">
                  <li>
                    <a href="login.html"> Login </a>
                  </li>
                  <li>
                    <a href="register.html"> Register </a>
                  </li>
                  <li>
                    <a href="forgot-password.html"> Forgot Password </a>
                  </li>
                  <li>
                    <a href="change-password2.html"> Change Password </a>
                  </li>
                  <li>
                    <a href="profile.html"> Profile </a>
                  </li>
                  <li>
                    <a href="gallery.html"> Gallery </a>
                  </li>
                  <li>
                    <a href="error-404.html">404 Error </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="page-wrapper">
   

      
            

  
        </div>
    </div>
    
  </>
  );
}
