import React from 'react'
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'

export default function Leaves() {
  return (
    <>
    <Header />
    <Sidebar />
    <div className="page-wrapper">
            <div className="content">
                <div className="row">
                    <div className="col-sm-8 col-6">
                        <h4 className="page-title">Leave Request</h4>
                    </div>
                    {/* <div className="col-sm-4 col-6 text-right m-b-30">
                        <a href="add-leave.html" classNameName="btn btn-primary btn-rounded float-right"><i class="fa fa-plus"></i> Add Leave</a>
                    </div> */}
                </div>
                <div className="row filter-row">
                    <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                        <div className="form-group form-focus">
                            <label className="focus-label">Employee Name</label>
                            <input type="text" className="form-control floating"/>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                        <div className="form-group form-focus select-focus">
                            <label className="focus-label">Leave Type</label>
                            <select className="select floating form-control ">
                                <option> -- Select -- </option>
                                <option>Casual Leave</option>
                                <option>Medical Leave</option>
                                <option>Loss of Pay</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                        <div className="form-group form-focus select-focus">
                            <label className="focus-label">Leave Status</label>
                            <select className="select floating form-control">
                                <option> -- Select -- </option>
                                <option> Pending </option>
                                <option> Approved </option>
                                <option> Rejected </option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                        <div className="form-group form-focus">
                            <label className="focus-label">From</label>
                            <input class="form-control  floating " type="date"/>
                            
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                        <div className="form-group form-focus">
                            <label className="focus-label">To</label>
                            <input class="form-control  floating" type="date"/>
                            
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                        <a href="#" className="btn btn-success btn-block"> Search </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="table-responsive">
                            <table className="table table-striped custom-table mb-0 datatable">
                                <thead>
                                    <tr>
                                        <th>Employee</th>
                                        <th>Leave Type</th>
                                        <th>From</th>
                                        <th>To</th>
                                        <th>No of Days</th>
                                        <th>Reason</th>
                                        <th className="text-center">Status</th>
                                        <th className="text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <a href="profile.html" className="avatar">R</a>
                                            <h2><a href="#">Albina Simonis <span>Team Leader 2</span></a></h2>
                                        </td>
                                        <td>Casual Leave</td>
                                        <td>8 July2023</td>
                                        <td>8 July2023</td>
                                        <td>2 days</td>
                                        <td>Family Function</td>
                                        <td className="text-center">
                                            <div className="dropdown action-label">
                                                <a class="custom-badge status-purple dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                                                    New
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a class="dropdown-item" href="#">New</a>
                                                    <a class="dropdown-item" href="#">Pending</a>
                                                    <a class="dropdown-item" href="#">Approved</a>
                                                    <a class="dropdown-item" href="#">Declined</a>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-center">
                                        <div className="dropdown dropdown-action">
                          <a
                            href="#"
                            className="action-icon dropdown-toggle"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="fa fa-ellipsis-v"></i>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a
                              className="dropdown-item"
                              data-toggle="modal"
                              data-target="#EditLeaveModalLong"
                            >
                              <i className="fa fa-pencil m-r-5"></i> Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              data-toggle="modal"
                              data-target="#delete_employee"
                            >
                              <i className="fa fa-trash-o m-r-5"></i> Delete
                            </a>
                          </div>
                        </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a href="profile.html" className="avatar">J</a>
                                            <h2><a>	Cristina Groves  <span>Team leader</span></a></h2>
                                        </td>
                                        <td>Medical Leave</td>
                                        <td>13 Jul 2023</td>
                                        <td>15 Jul 2023</td>
                                        <td>3 days</td>
                                        <td>Going to Vacation</td>
                                        <td className="text-center">
                                            <div className="dropdown action-label">
                                                <a class="custom-badge status-green dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                                                    Approved
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a class="dropdown-item" href="#">New</a>
                                                    <a class="dropdown-item" href="#">Pending</a>
                                                    <a class="dropdown-item" href="#">Approved</a>
                                                    <a class="dropdown-item" href="#">Declined</a>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-center">
                                        <div className="dropdown dropdown-action">
                          <a
                            href="#"
                            className="action-icon dropdown-toggle"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="fa fa-ellipsis-v"></i>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a
                              className="dropdown-item"
                              data-toggle="modal"
                              data-target="#EditLeaveModalLong"
                            >
                              <i className="fa fa-pencil m-r-5"></i> Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              data-toggle="modal"
                              data-target="#delete_employee"
                            >
                              <i className="fa fa-trash-o m-r-5"></i> Delete
                            </a>
                          </div>
                        </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a href="profile.html" className="avatar">J</a>
                                            <h2><a>Mary Mericle <span>Accountant</span></a></h2>
                                        </td>
                                        <td>Casual Leave</td>
                                        <td>27 Jun 2023</td>
                                        <td>28 Jun 2023</td>
                                        <td>2 days</td>
                                        <td>Going to Native Place</td>
                                        <td className="text-center">
                                            <div className="dropdown action-label">
                                                <a class="custom-badge status-green dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                                                    Approved
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a class="dropdown-item" href="#">New</a>
                                                    <a class="dropdown-item" href="#">Pending</a>
                                                    <a class="dropdown-item" href="#">Approved</a>
                                                    <a class="dropdown-item" href="#">Declined</a>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-center">
                                        <div className="dropdown dropdown-action">
                          <a
                            href="#"
                            className="action-icon dropdown-toggle"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="fa fa-ellipsis-v"></i>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a
                              className="dropdown-item"
                              data-toggle="modal"
                              data-target="#EditLeaveModalLong"
                            >
                              <i className="fa fa-pencil m-r-5"></i> Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              data-toggle="modal"
                              data-target="#delete_employee"
                            >
                              <i className="fa fa-trash-o m-r-5"></i> Delete
                            </a>
                          </div>
                        </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a href="profile.html" className="avatar">H</a>
                                            <h2><a>Haylie Feeney  <span>Receptionist</span></a></h2>
                                        </td>
                                        <td>Casual Leave</td>
                                        <td>13 May 2023</td>
                                        <td>13 May 2023</td>
                                        <td>2 days</td>
                                        <td>Not feeling well</td>
                                        <td className="text-center">
                                            <div className="dropdown action-label">
                                                <a class="custom-badge status-red dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                                                    Declined
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a class="dropdown-item" href="#">New</a>
                                                    <a class="dropdown-item" href="#">Pending</a>
                                                    <a class="dropdown-item" href="#">Approved</a>
                                                    <a class="dropdown-item" href="#">Declined</a>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-center">
                                        <div className="dropdown dropdown-action">
                          <a
                            href="#"
                            className="action-icon dropdown-toggle"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="fa fa-ellipsis-v"></i>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a
                              className="dropdown-item"
                              data-toggle="modal"
                              data-target="#EditLeaveModalLong"
                            >
                              <i className="fa fa-pencil m-r-5"></i> Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              data-toggle="modal"
                              data-target="#delete_employee"
                            >
                              <i className="fa fa-trash-o m-r-5"></i> Delete
                            </a>
                          </div>
                        </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a href="profile.html" className="avatar">R</a>
                                            <h2><a>Zoe Butler <span>Manager</span></a></h2>
                                        </td>
                                        <td>Casual Leave</td>
                                        <td>31 Mar 2023</td>
                                        <td>31 Mar 2023</td>
                                        <td>2 days</td>
                                        <td>Birthday Function</td>
                                        <td className="text-center">
                                            <div className="dropdown action-label">
                                                <a class="custom-badge status-purple dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                                                    New
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a class="dropdown-item" href="#">New</a>
                                                    <a class="dropdown-item" href="#">Pending</a>
                                                    <a class="dropdown-item" href="#">Approved</a>
                                                    <a class="dropdown-item" href="#">Declined</a>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-center">
                                        <div className="dropdown dropdown-action">
                          <a
                            href="#"
                            className="action-icon dropdown-toggle"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="fa fa-ellipsis-v"></i>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a
                              className="dropdown-item"
                              data-toggle="modal"
                              data-target="#EditLeaveModalLong"
                            >
                              <i className="fa fa-pencil m-r-5"></i> Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              data-toggle="modal"
                              data-target="#delete_employee"
                            >
                              <i className="fa fa-trash-o m-r-5"></i> Delete
                            </a>
                          </div>
                        </div>
                                        </td>
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

        <div
          className="modal fade"
          id="EditLeaveModalLong"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLongTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">
                  Add Employee
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
              <div className="content">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <h4 className="page-title">Edit Leave</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <form>
                            <div className="form-group">
                                <label>Leave Type <span className="text-danger">*</span></label>
                                <select className="select form-control">
                                    <option>Select Leave Type</option>
                                    <option>Casual Leave </option>
                                    <option>Medicine</option>
                                    <option>Loss Of Pay</option>
                                </select>
                            </div>
							<div className="row">
								<div className="col-md-6">
									<div className="form-group">
										<label>From <span className="text-danger">*</span></label>
										<div className="cal-icon">
											<input class="form-control datetimepicker" value="01-01-2017" type="text"/>
										</div>
									</div>
								</div>
								<div className="col-md-6">
									<div className="form-group">
										<label>To <span className="text-danger">*</span></label>
										<div className="cal-icon">
											<input class="form-control datetimepicker" value="01-01-2017" type="text"/>
										</div>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-md-6">
									<div className="form-group">
										<label>Number of days <span className="text-danger">*</span></label>
										<input class="form-control" type="text" />
									</div>
								</div>
								<div className="col-md-6">
									<div className="form-group">
										<label>Remaining Leaves <span className="text-danger">*</span></label>
										<input class="form-control"  value="" type="text"/>
									</div>
								</div>
							</div>
                            <div className="form-group">
                                <label>Leave Reason <span className="text-danger">*</span></label>
                                <textarea rows="4" cols="5" className="form-control">Going to hospital</textarea>
                            </div>
                            {/* <div className="m-t-20 text-center">
                                <button className="btn btn-primary submit-btn">Save</button>
                            </div> */}
                        </form>
                    </div>
                </div>
            </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                Save
                </button>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
