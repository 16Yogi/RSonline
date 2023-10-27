import React from 'react'
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'
export default function Taxes() {
  return (
    <>
    <Header />
    <Sidebar />
    <div className="page-wrapper">
            <div className="content">
                <div className="row">
                    <div className="col-sm-8 col-6">
                        <h4 className="page-title">Taxes</h4>
                    </div>
                    <div className="col-sm-4 col-6 text-right m-b-30">
                        <a type="button"
                className="btn btn-success text-light float-right btn-rounded p-"
                data-toggle="modal"
                data-target="#AddTaxModalLong"><i className="fa fa-plus"></i> Add Tax</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="table-responsive">
                            <table className="table table-striped custom-table mb-0">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Tax Name </th>
                                        <th>Tax Percentage (%) </th>
                                        <th>Status</th>
                                        <th className="text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>VAT</td>
                                        <td>14%</td>
                                        <td>
                                            <div className="dropdown action-label">
                                                <a class="custom-badge status-red dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
													Inactive
												</a>
                                                <div className="dropdown-menu">
                                                    <a class="dropdown-item" href="#">Active</a>
                                                    <a class="dropdown-item" href="#">Inactive</a>
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
                              data-target="#EditTaxModalLong"
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
                                        <td>2</td>
                                        <td>GST</td>
                                        <td>30%</td>
                                        <td>
                                            <div className="dropdown action-label">
                                                <a class="custom-badge status-green dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
													Active
												</a>
                                                <div className="dropdown-menu">
                                                    <a class="dropdown-item" href="#">Active</a>
                                                    <a class="dropdown-item" href="#">Inactive</a>
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
                              data-target="#EditTaxModalLong"
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
          id="AddTaxModalLong"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLongTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">
                  Add Tax
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
                        <h4 className="page-title">Add Tax</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <form>
                            <div className="form-group">
                                <label>Tax Name <span className="text-danger">*</span></label>
                                <input class="form-control" type="text"/>
                            </div>
                            <div className="form-group">
                                <label>Tax Percentage (%) <span className="text-danger">*</span></label>
                                <input class="form-control" type="text"/>
                            </div>
                            <div className="form-group">
                                <label>Status <span className="text-danger">*</span></label>
                                <select className="select form-control">
                                    <option>Pending</option>
                                    <option>Approved</option>
                                </select>
                            </div>
                            {/* <div className="m-t-20 text-center">
                                <button className="btn btn-primary submit-btn">Create Tax</button>
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
                  Add Tax
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="EditTaxModalLong"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLongTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">
                 Edit Tax
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
                        <h4 className="page-title">Edit Tax</h4>
                    </div>
                </div> */}
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <form>
                            <div className="form-group">
                                <label>Tax Name <span className="text-danger">*</span></label>
                                <input class="form-control" value="VAT" type="text"/>
                            </div>
                            <div className="form-group">
                                <label>Tax Percentage (%) <span className="text-danger">*</span></label>
                                <input class="form-control" value="14%" type="text"/>
                            </div>
                            <div className="form-group">
                                <label>Status <span className="text-danger">*</span></label>
                                <select className="select form-control">
                                    <option>Active</option>
                                    <option>Inactive</option>
                                </select>
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
