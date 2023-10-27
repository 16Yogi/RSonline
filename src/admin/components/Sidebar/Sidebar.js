import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
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
    <div class="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll ">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
              {/* <li className="menu-title">Main </li> */}
              <li className="active">
                <Link className='text-decoration-none' to="/admin-page/Dashbord">
                  <i className="fa fa-dashboard"></i> <span>Dashboard</span>
                </Link>
              </li>
              <li className="submenu">
                <a onClick={handleClick0}>
                  <i className="fa-solid fa-cart-shopping"></i>{" "}
                  <span> Products </span> <span class="menu-arrow"></span>
                </a>
                <ul className="d-none" id="drop-menu0">
                  <li>
                    <Link className='text-decoration-none' class="" to="/admin-page/Electronics">
                      Electronics
                    </Link>
                  </li>
                  <li>
                    <Link className='text-decoration-none' class="" to="/admin-page/Accessories">
                      Accessories
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link className='text-decoration-none' to="/admin-page/Retailers">
                  <i className="fa-solid fa-store"></i> <span>Retailers</span>
                </Link>
              </li>
              <li>
                <Link className='text-decoration-none' to="/admin-page/Customers">
                  <i className="fa fa-user"></i> <span>Customers</span>
                </Link>
              </li>

              <li className="submenu">
                <a  onClick={handleClick1}>
                  <i className="fa-solid fa-user-tie"></i>{" "}
                  <span> Employees </span> <span class="menu-arrow"></span>
                </a>
                <ul className="" id="drop-menu1">
                  <li>
                    <Link className='text-decoration-none' to="/admin-page/Employees">Employees List</Link>
                  </li>
                  <li>
                    <Link className='text-decoration-none' to="/admin-page/Leaves">Leaves</Link>
                  </li>
                  <li>
                    <Link className='text-decoration-none' to="/admin-page/Holidays">Holidays</Link>
                  </li>
                  <li>
                    <Link className='text-decoration-none' to="/admin-page/Attendance">Attendance</Link>
                  </li>
                </ul>
              </li>

              <li className="submenu">
                <a  onClick={handleClick2}>
                  <i className="fa fa-money"></i> <span> Accounts </span>{" "}
                  <span class="menu-arrow"></span>
                </a>
                <ul className="" id="drop-menu2">
                  
                  <li>
                    <Link className='text-decoration-none'  to="/admin-page/Payments">Payments</Link>
                  </li>
                  
                  <li>
                    <Link className='text-decoration-none' to="/admin-page/Taxes">Taxes</Link>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a  onClick={handleClick3}>
                  <i className="fa fa-book"></i> <span> Payroll </span>{" "}
                  <span class="menu-arrow"></span>
                </a>
                <ul className="" id="drop-menu3">
                  <li>
                  <Link className='text-decoration-none' to="/admin-page/EmployeeSalary"> Employee Salary </Link>
                  </li>
                  <li>
                  <Link className='text-decoration-none' to="/admin-page/Payslip"> Payslip </Link>
                  </li>
                </ul>
              </li>

              <li className="submenu">
                <a  onClick={handleClick4}>
                  <i className="fa fa-flag-o"></i> <span> Reports </span>{" "}
                  <span class="menu-arrow"></span>
                </a>
                <ul className="" id="drop-menu4">
                  {/* <!-- <li><a href="expense-reports.html"> Expense Report </a></li> */}
                  {/* <li><a href="invoice-reports.html"> Invoice Report </a></li> --> */}
                  <li>
                  <Link className='text-decoration-none' to="/admin-page/Invoices">Invoices Report</Link>
                  </li>
                  <li>
                  <Link className='text-decoration-none' to="/admin-page/Expenses">Expenses Report</Link>
                  </li>
                </ul>
              </li>
              {/* <li>
                <a href="settings.html">
                  <i className="fa fa-cog"></i> <span>Settings</span>
                </a>
              </li> */}

              {/* <li className="menu-title">Extras</li> */}
              {/* <li className="submenu">
                <a>
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
              </li> */}

              <li>
                <Link className='text-decoration-none' to="/admin-page"><i class="fa-solid fa-right-from-bracket fa-rotate-180 ml-0"></i> <span>Log Out</span></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
  )
}
