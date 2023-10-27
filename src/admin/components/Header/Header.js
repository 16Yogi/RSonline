import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
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
            <Link class="dropdown-item" to="/admin-page/Profile">
              My Profile
            </Link>
              <a class="dropdown-item" href="edit-profile.html">
                Edit Profile
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
            <Link class="dropdown-item" to="/admin-page/Profile">
              My Profile
            </Link>
            <a class="dropdown-item" href="edit-profile.html">
              Edit Profile
            </a>
            
            
          </div>
        </div>
      </div>
  )
}
