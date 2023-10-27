import React from "react";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <>
      <Header />
      <Sidebar />
      <div class="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
              <div className="dash-widget">
                <span className="dash-widget-bg1">
                  <i class="fa-solid fa-store"></i>
                </span>
                <div className="dash-widget-info text-right">
                  <h3>98</h3>
                  <span className="widget-title1">
                    Retailers<i class="fa fa-check" aria-hidden="true"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
              <div className="dash-widget">
                <span className="dash-widget-bg2">
                  <i class="fa fa-user-o"></i>
                </span>
                <div className="dash-widget-info text-right">
                  <h3>1072</h3>
                  <span className="widget-title2">
                    Customers <i class="fa fa-check" aria-hidden="true"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
              <div className="dash-widget">
                <span className="dash-widget-bg3">
                  <i class="fa-solid fa-cart-shopping" aria-hidden="true"></i>
                </span>
                <div className="dash-widget-info text-right">
                  <h3>72</h3>
                  <span className="widget-title3">
                    Products <i class="fa fa-check" aria-hidden="true"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
              <div className="dash-widget">
                <span className="dash-widget-bg4">
                  <i class="fa-solid fa-user-tie"></i>
                </span>
                <div className="dash-widget-info text-right">
                  <h3>18</h3>
                  <span className="widget-title4">
                    Employee <i class="fa fa-check" aria-hidden="true"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6 col-xl-6">
              <div className="card">
                <div className="card-body">
                  <div className="chart-title">
                    <h4>Total Sellings </h4>
                    <span className="float-right">
                      <i class="fa fa-caret-up" aria-hidden="true"></i> 15%
                      Higher than Last Month
                    </span>
                  </div>
                  <canvas id="linegraph"></canvas>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6 col-xl-6">
              <div className="card">
                <div className="card-body">
                  <div className="chart-title">
                    <h4>Customers In</h4>
                    <div className="float-right">
                      <ul className="chat-user-total">
                        <li>
                          <i
                            className="fa fa-circle current-users"
                            aria-hidden="true"
                          ></i>
                          Product
                        </li>
                        <li>
                          <i
                            className="fa fa-circle old-users"
                            aria-hidden="true"
                          ></i>{" "}
                          Sells
                        </li>
                      </ul>
                    </div>
                  </div>
                  <canvas id="bargraph"></canvas>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-8 col-xl-8">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title d-inline-block">Top Sells</h4>{" "}
                  {/* <a
                    href="appointments.html"
                    class="btn btn-primary float-right"
                  >
                    View all
                  </a> */}
                </div>
                <div className="card-body p-0">
                  <div className="table-responsive">
                    <table className="table mb-0">
                      <thead className="">
                        <tr>
                          <th>Product Name</th>
                          <th>Company Name</th>
                          {/* <!-- <th>Timing</th> --> */}
                          <th className="text-right">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style={{ minWidth: "200px" }}>
                            <a class="avatar" href="profile.html">
                              L
                            </a>
                            <h2>
                              <a href="profile.html">
                                Laptop /desktop <span></span>
                              </a>
                            </h2>
                          </td>
                          <td>
                            <h5 className="time-title p-0">Lenovo </h5>
                            <p>i5 7th gen</p>
                          </td>

                          <td className="text-right">
                            <a
                              href="appointments.html"
                              className="btn btn-outline-success take-btn"
                            >
                              Sold
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ minWidth: "200px" }}>
                            <a class="avatar" href="profile.html">
                              L
                            </a>
                            <h2>
                              <a href="profile.html">
                                Laptop /desktop <span></span>
                              </a>
                            </h2>
                          </td>
                          <td>
                            <h5 className="time-title p-0">Lenovo </h5>
                            <p>i5 7th gen</p>
                          </td>

                          <td className="text-right">
                            <a
                              href="appointments.html"
                              className="btn btn-outline-success take-btn"
                            >
                              Sold
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ minWidth: "200px" }}>
                            <a class="avatar" href="profile.html">
                              L
                            </a>
                            <h2>
                              <a href="profile.html">
                                Laptop /desktop <span></span>
                              </a>
                            </h2>
                          </td>
                          <td>
                            <h5 className="time-title p-0">Lenovo </h5>
                            <p>i5 7th gen</p>
                          </td>

                          <td className="text-right">
                            <a
                              href="appointments.html"
                              className="btn btn-outline-success take-btn"
                            >
                              Sold
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ minWidth: "200px" }}>
                            <a class="avatar" href="profile.html">
                              L
                            </a>
                            <h2>
                              <a href="profile.html">
                                Laptop /desktop <span></span>
                              </a>
                            </h2>
                          </td>
                          <td>
                            <h5 className="time-title p-0">HP </h5>
                            <p>i6 12th gen</p>
                          </td>

                          <td className="text-right">
                            <a
                              href="appointments.html"
                              className="btn btn-outline-success take-btn"
                            >
                              Sold
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ minWidth: "200px" }}>
                            <a class="avatar" href="profile.html">
                              L
                            </a>
                            <h2>
                              <a href="profile.html">
                                Laptop /desktop <span></span>
                              </a>
                            </h2>
                          </td>
                          <td>
                            <h5 className="time-title p-0">HP </h5>
                            <p>i6 12gen</p>
                          </td>

                          <td className="text-right">
                            <a
                              href="appointments.html"
                              className="btn btn-outline-success take-btn"
                            >
                              Sold
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 col-xl-4">
              <div className="card member-panel">
                <div className="card-header bg-white">
                  <h4 className="card-title mb-0">Retailers</h4>
                </div>
                <div className="card-body">
                  <ul className="contact-list">
                    <li>
                      <div className="contact-cont">
                        <div className="float-left user-img m-r-10">
                          <a href="profile.html" title="John Doe">
                            <img
                              src="../assets/img/user.jpg"
                              alt=""
                              className="w-40 rounded-circle"
                            />
                            <span class="status online"></span>
                          </a>
                        </div>
                        <div className="contact-info">
                          <span className="contact-name text-ellipsis">
                            Sachin
                          </span>
                          <span className="contact-date"> MD</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="contact-cont">
                        <div className="float-left user-img m-r-10">
                          <a href="profile.html" title="Sandeep Miles">
                            <img
                              src="../assets/img/user.jpg"
                              alt=""
                              className="w-40 rounded-circle"
                            />
                            <span class="status offline"></span>
                          </a>
                        </div>
                        <div className="contact-info">
                          <span className="contact-name text-ellipsis">
                            Sandeep{" "}
                          </span>
                          <span className="contact-date">Jr.MD</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="contact-cont">
                        <div className="float-left user-img m-r-10">
                          <a href="profile.html" title="John Doe">
                            <img
                              src="../assets/img/user.jpg"
                              alt=""
                              className="w-40 rounded-circle"
                            />
                            <span class="status away"></span>
                          </a>
                        </div>
                        <div className="contact-info">
                          <span className="contact-name text-ellipsis">
                            Nawaz
                          </span>
                          <span className="contact-date">
                            Front End Developer
                          </span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="contact-cont">
                        <div className="float-left user-img m-r-10">
                          <a href="profile.html" title="Sandeep Miles">
                            <img
                              src="../assets/img/user.jpg"
                              alt=""
                              className="w-40 rounded-circle"
                            />
                            <span class="status online"></span>
                          </a>
                        </div>
                        <div className="contact-info">
                          <span className="contact-name text-ellipsis">
                            Sanjay
                          </span>
                          <span className="contact-date">Developer</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="card-footer text-center bg-white">
                  <Link to="/admin-page/Retailers" className="text-muted">
                    View all Retailers
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-8 col-xl-8">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title d-inline-block">New Customers </h4>{" "}
                  <Link to="/admin-page/Customers" class="btn btn-primary float-right">
                    View all
                  </Link>
                </div>
                <div className="card-block">
                  <div className="table-responsive">
                    <table className="table mb-0 new-patient-table">
                      <tbody>
                        <tr>
                          <td>
                            <img
                              width="28"
                              height="28"
                              class="rounded-circle"
                              src="../assets/img/user.jpg"
                              alt=""
                            />
                            <h2>John Doe</h2>
                          </td>
                          <td>Johndoe21@gmail.com</td>
                          <td>+1-202-555-0125</td>
                          <td>
                            <button className="btn btn-primary btn-primary-one float-right">
                              New
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              width="28"
                              height="28"
                              class="rounded-circle"
                              src="../assets/img/user.jpg"
                              alt=""
                            />
                            <h2>Sandeep</h2>
                          </td>
                          <td>Sandeep123@yahoo.com</td>
                          <td>202-555-0127</td>
                          <td>
                            <button className="btn  btn-primary-two btn-primary float-right">
                              New
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              width="28"
                              height="28"
                              class="rounded-circle"
                              src="../assets/img/user.jpg"
                              alt=""
                            />
                            <h2>Villiam</h2>
                          </td>
                          <td>Sandeep123@yahoo.com</td>
                          <td>+1-202-555-0106</td>
                          <td>
                            <button className="btn btn-primary btn-primary-three float-right">
                              New
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              width="28"
                              height="28"
                              class="rounded-circle"
                              src="../assets/img/user.jpg"
                              alt=""
                            />
                            <h2>Martin</h2>
                          </td>
                          <td>Sandeep123@yahoo.com</td>
                          <td>776-2323 89562015</td>
                          <td>
                            <button className="btn btn-primary btn-primary-four float-right">
                              New
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 col-xl-4">
              <div className="hospital-barchart">
                <h4 className="card-title d-inline-block">
                  Services Management
                </h4>
              </div>
              <div className="bar-chart">
                <div className="legend">
                  <div className="item">
                    <h4>Level1</h4>
                  </div>

                  <div className="item">
                    <h4>Level2</h4>
                  </div>
                  <div className="item text-right">
                    <h4>Level3</h4>
                  </div>
                  <div className="item text-right">
                    <h4>Level4</h4>
                  </div>
                </div>
                <div className="chart clearfix">
                  <div className="item">
                    <div className="bar">
                      <span className="percent">16%</span>
                      <div className="item-progress" data-percent="16">
                        <span className="title">Online</span>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="bar">
                      <span className="percent">71%</span>
                      <div className="item-progress" data-percent="71">
                        <span className="title">Electronics</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="notification-box">
          <div className="msg-sidebar notifications msg-noti">
            <div className="topnav-dropdown-header">
              <span>Messages</span>
            </div>
            <div class="drop-scroll msg-list-scroll" id="msg_list">
              <ul className="list-box">
                <li>
                  <a href="chat.html">
                    <div className="list-item">
                      <div className="list-left">
                        <span className="avatar">R</span>
                      </div>
                      <div className="list-body">
                        <span className="message-author">Sandeep Miles </span>
                        <span className="message-time">12:28 AM</span>
                        <div className="clearfix"></div>
                        <span className="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="chat.html">
                    <div className="list-item new-message">
                      <div className="list-left">
                        <span className="avatar">J</span>
                      </div>
                      <div className="list-body">
                        <span className="message-author">Abcd</span>
                        <span className="message-time">1 Aug</span>
                        <div className="clearfix"></div>
                        <span className="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="chat.html">
                    <div className="list-item">
                      <div className="list-left">
                        <span className="avatar">T</span>
                      </div>
                      <div className="list-body">
                        <span className="message-author"> Taran </span>
                        <span className="message-time">12:28 AM</span>
                        <div className="clearfix"></div>
                        <span className="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="topnav-dropdown-footer">
              <a href="chat.html">See all messages</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
