import React from 'react'
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'
export default function Holidays() {
  return (
    <>
    <Header />
    <Sidebar />
      <div className="page-wrapper">
            <div className="content">
                <div className="row">
                    <div className="col-sm-5 col-5">
                        <h4 className="page-title">Holidays 2023</h4>
                    </div>
                    <div className="col-sm-7 col-7 text-right m-b-30">
                        <a  className="btn btn-primary text-white btn-rounded" type="button" data-toggle="modal"
                data-target="#AddHolidayModalLong"><i className="fa fa-plus"></i> Add Holiday</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="table-responsive">
                            <table className="table table-striped custom-table mb-0">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Title </th>
                                        <th>Holiday Date</th>
                                        <th>Day</th>
                                        <th className="text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="holiday-completed">
                                        <td>1</td>
                                        <td>New Year</td>
                                        <td>1 Jan 2023</td>
                                        <td>Monday</td>
                                        <td></td>
                                    </tr>
                                    <tr className="holiday-completed">
                                        <td>2</td>
                                        <td>Good Friday</td>
                                        <td>13 Apr 2023</td>
                                        <td>Friday</td>
                                        <td></td>
                                    </tr>
                                    <tr className="holiday-completed">
                                        <td>3</td>
                                        <td>May Day</td>
                                        <td>1 May 2023</td>
                                        <td>Tuesday</td>
                                        <td className="text-center">
                                        </td>
                                    </tr>
                                    <tr className="holiday-completed">
                                        <td>4</td>
                                        <td>Memorial Day</td>
                                        <td>28 May 2023</td>
                                        <td>Monday</td>
                                        <td className="text-center">
                                        </td>
                                    </tr>
                                    <tr className="holiday-completed">
                                        <td>5</td>
                                        <td>Ramzon</td>
                                        <td>26 Jun 2023</td>
                                        <td>Monday</td>
                                        <td></td>
                                    </tr>
                                    <tr className="holiday-upcoming">
                                        <td>6</td>
                                        <td>Bakrid</td>
                                        <td>23 Aug 2023</td>
                                        <td>Wednesday</td>
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
                              data-target="#EditHolidayModalLong"
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
                                    <tr className="holiday-upcoming">
                                        <td>7</td>
                                        <td>Deepavali</td>
                                        <td>18 Oct 2023</td>
                                        <td>Wednesday</td>
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
                              data-target="#EditHolidayModalLong"
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
                                    <tr className="holiday-upcoming">
                                        <td>8</td>
                                        <td>Christmas</td>
                                        <td>25 Dec 2023</td>
                                        <td>Tuesday</td>
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
                              data-target="#EditHolidayModalLong"
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
          id="AddHolidayModalLong"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLongTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg
          " role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">
                  Add Holiday
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
                {/* <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <h4 className="page-title">Add Holiday</h4>
                    </div>
                </div> */}
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <form>
                            <div className="form-group">
                                <label>Holiday Name <span className="text-danger">*</span></label>
                                <input class="form-control" type="text"/>
                            </div>
                            <div className="form-group">
                                <label>Holiday Date <span className="text-danger">*</span></label>
                                <div className="cal-icon">
                                    <input class="form-control datetimepicker" type="text"/>
                                </div>
                            </div>
                            {/* <div className="m-t-20 text-center">
                                <button className="btn btn-primary submit-btn">Create Holiday</button>
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
                  Add Holiday
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="EditHolidayModalLong"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLongTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg
          " role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">
                  Edit Holiday
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
                {/* <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <h4 className="page-title">Edit Holiday</h4>
                    </div>
                </div> */}
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <form>
                            <div className="form-group">
                                <label>Holiday Name <span className="text-danger">*</span></label>
                                <input class="form-control" value="New Year" type="text"/>
                            </div>
                            <div className="form-group">
                                <label>Holiday Date <span className="text-danger">*</span></label>
                                <div className="cal-icon">
                                    <input class="form-control datetimepicker" value="01-01-2018" type="text"/>
                                </div>
                            </div>
                            {/* <div className="m-t-20 text-center">
                                <button className="btn btn-primary submit-btn">Edit Holiday</button>
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
                  Edit Holiday
                </button>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
