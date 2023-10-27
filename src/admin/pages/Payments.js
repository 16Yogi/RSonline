import React from 'react'
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'
export default function Payments() {
  return (
    <>
    <Header />
    <Sidebar />
    <div className="page-wrapper">
            <div className="content">
                <div className="row">
                    <div className="col-sm-12">
                        <h4 className="page-title">Payments</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="table-responsive">
                            <table className="table table-striped custom-table datatable mb-0">
                                <thead>
                                    <tr>
                                        <th>Invoice ID</th>
                                        <th>Patient</th>
                                        <th>Payment Type</th>
                                        <th>Paid Date</th>
                                        <th>Paid Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><a href="invoice-view.html">#INV-0001</a></td>
                                        <td>
                                            <h2><a href="#">Sanjay</a></h2>
                                        </td>
                                        <td>PhonePay</td>
                                        <td>8 Aug 2023</td>
                                        <td>Rs. 8000</td>
                                    </tr>
                                    <tr>
                                        <td><a href="invoice-view.html">#INV-0002</a></td>
                                        <td>
                                            <h2><a href="#">Sachin</a></h2>
                                        </td>
                                        <td>PhonePay</td>
                                        <td>8 Aug 2023</td>
                                        <td>Rs. 8000</td>
                                    </tr>
                                    <tr>
                                        <td><a href="invoice-view.html">#INV-0003</a></td>
                                        <td>
                                            <h2><a href="#">Nawaz</a></h2>
                                        </td>
                                        <td>PhonePay</td>
                                        <td>8 Aug 2023</td>
                                        <td>Rs. 8000</td>
                                    </tr>
                                </tbody>
                            </table>
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
                                            <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
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
                                            <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
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
                                            <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
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
  )
}
