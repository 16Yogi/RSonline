import React, { useState } from "react";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
export default function Expenses() {

    const [eitemname,setEitemname] =useState("") 
    const [efrom,setEfrom] =useState("") 
    const [epurdate,setEpurdate] =useState("") 
    const [epurby,setEpurby] =useState("") 
    const [eamount,setEamount] =useState("")
    const [epaid,setEpaid] =useState("")
    const [estatus,setEstatus] =useState("")
    const [efile,setEfile] =useState("")

    const sendData = async () =>{
      try{
        const expen = {
          eitemname:eitemname, 
          efrom:efrom, 
          epurdate:epurdate, 
          epurby:epurby, 
          eamount:eamount,
          epaid:epaid,
          estatus:estatus,
          efile:efile,
        };
        const data = await fetch("http://localhost:8000/api/user/expesesitem",{
          method:"post",
          headers:{
            "Content-Type":"application/json",
          },
          body:JSON.stringify(expen)
        })
      }catch{}
    }

    const eitemname1 = (e) =>{
      const value = e.target.value;
      setEitemname(value)
    };

    const efrom1 = (e) =>{
      const value = e.target.value;
      setEfrom(value)
    };

    const epurdate1 = (e) =>{
      const value = e.target.value;
      setEpurdate(value)
    };

    const epurby1 = (e) =>{
      const value = e.target.value;
      setEpurby(value)
    };

    const eamount1 = (e) =>{
      const value = e.target.value;
      setEamount(value)
    };

    const epaid1 = (e) =>{
      const value = e.target.value;
      setEpaid(value)
    };

    const estatus1 = (e) =>{
      const value = e.target.value;
      setEstatus(value)
    };

    const efile1 = (e) =>{
      const value = e.target.value;
      setEfile(value)
    };


  return (
    <>
      <Header />
      <Sidebar />
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-sm-8 col-5">
              <h4 className="page-title">Expenses</h4>
            </div>
            <div className="col-sm-4 col-7 text-right m-b-30">
              <a
                href="add-expense.html"
                className="btn btn-success btn-rounded float-right"
                data-toggle="modal"
                data-target="#AddExpensesModalLong"
              >
                <i className="fa fa-plus"></i> Add Expense
              </a>
            </div>
          </div>
          <div className="row filter-row">
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
              <div className="form-group form-focus">
                <label className="focus-label">Item Name</label>
                <input type="text" className="form-control floating" />
              </div>
            </div>
            {/* <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                        <div className="form-group form-focus select-focus">
                            <label className="focus-label">Purchased By</label>
                            <select className="select floating">
                                <option> -- Select -- </option>
                                <option>Loren Gatlin</option>
                                <option>Tarah Shropshire</option>
                            </select>
                        </div>
                    </div>  */}
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
              <div className="form-group form-focus select-focus">
                <label className="focus-label">Paid By</label>
                <select className="select floating form-control">
                  <option> -- Select -- </option>
                  <option> Cash </option>
                  <option> Cheque </option>
                </select>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
              <div className="form-group form-focus">
                <label className="focus-label">From</label>
                <div className="cal-icon">
                  <input
                    className="form-control floating datetimepicker"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
              <div className="form-group form-focus">
                <label className="focus-label">To</label>
                <div className="cal-icon">
                  <input
                    className="form-control floating datetimepicker"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
              <a href="#" className="btn btn-success btn-block">
                {" "}
                Search{" "}
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <table className="table table-striped custom-table mb-0 datatable">
                  <thead>
                    <tr>
                      <th>Item Name</th>
                      <th>Purchase From</th>
                      <th>Purchase Date</th>
                      <th>Purchased By</th>
                      <th>Amount</th>
                      <th>Paid By</th>
                      <th className="text-center">Status</th>
                      <th className="text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <strong>Desktop</strong>
                      </td>
                      <td>M.p. Nagar </td>
                      <td>17 Aug 2018</td>
                      <td>Sandeep</td>
                      <td>10,000</td>
                      <td>Online UPI</td>
                      <td className="text-center">
                        <div className="dropdown action-label">
                          <a
                            className="custom-badge status-red dropdown-toggle"
                            href="#"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Pending
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#">
                              Pending
                            </a>
                            <a class="dropdown-item" href="#">
                              Approved
                            </a>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">
                        <div className="dropdown dropdown-action">
                          <a
                            href="#"
                            classNameName="action-icon dropdown-toggle"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="fa fa-ellipsis-v"></i>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a
                              className="dropdown-item"
                              href="edit-expense.html"
                              data-toggle="modal"
                              data-target="#EditExpensesModalLong"
                            >
                              <i className="fa fa-pencil m-r-5"></i> Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="edit-expense.html"
                              data-toggle="modal"
                              data-target="#delete_expense"
                            >
                              <i className="fa fa-trash-o m-r-5"></i> Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Printer Machine</strong>
                      </td>
                      <td>Indore</td>
                      <td>22 Jun 2018</td>
                      <td>sanjay</td>
                      <td>12000</td>
                      <td>Cash</td>
                      <td className="text-center">
                        <div className="dropdown action-label">
                          <a
                            className="custom-badge status-green dropdown-toggle"
                            href="#"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Approved
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#">
                              Pending
                            </a>
                            <a class="dropdown-item" href="#">
                              Approved
                            </a>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">
                        <div className="dropdown dropdown-action">
                          <a
                            href="#"
                            classNameName="action-icon dropdown-toggle"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="fa fa-ellipsis-v"></i>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a
                              className="dropdown-item"
                              href="edit-expense.html"
                              data-toggle="modal"
                              data-target="#EditExpensesModalLong"
                            >
                              <i className="fa fa-pencil m-r-5"></i> Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="edit-expense.html"
                              data-toggle="modal"
                              data-target="#delete_expense"
                            >
                              <i className="fa fa-trash-o m-r-5"></i> Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Laptop</strong>
                      </td>
                      <td>Bhopal Store</td>
                      <td>24 Jul 2018</td>
                      <td>Sachin</td>
                      <td>53,000</td>
                      <td>Cheque</td>
                      <td className="text-center">
                        <div className="dropdown action-label">
                          <a
                            className="custom-badge status-green dropdown-toggle"
                            href="#"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Approved
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#">
                              Pending
                            </a>
                            <a class="dropdown-item" href="#">
                              Approved
                            </a>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">
                        <div className="dropdown dropdown-action">
                          <a
                            href="#"
                            classNameName="action-icon dropdown-toggle"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="fa fa-ellipsis-v"></i>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a
                              className="dropdown-item"
                              href="edit-expense.html"
                              data-toggle="modal"
                              data-target="#EditExpensesModalLong"
                            >
                              <i className="fa fa-pencil m-r-5"></i> Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="edit-expense.html"
                              data-toggle="modal"
                              data-target="#delete_expense"
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
{/* start form */}
      <form>
      <div
        className="modal fade"
        id="AddExpensesModalLong"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Add Expenses
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
                    <h4 className="page-title">New Expense</h4>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-8 offset-lg-2">
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label>Item Name</label>
                            <input class="form-control" type="text" onChange={eitemname1} value={eitemname}/>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label>Purchase From</label>
                            <input class="form-control" type="text" onChange={efrom1} value={efrom}/>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label>Purchase Date</label>
                            <div className="cal-icon">
                              <input
                                className="form-control datetimepicker"
                                type="text"
                                onChange={epurdate1}
                                value={epurdate}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label>Purchased By </label>
                            <select className="select form-control" onChange={epurby1} value={epurby}>
                              <option>Team Management</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label>Amount</label>
                            <input
                              placeHolder="Rs."
                              className="form-control"
                              type="text"
                              onChange={eamount1}
                              value={eamount}
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label>Paid By</label>
                            <select className="select form-control" onChange={epaid1} value={epaid}>
                              <option>Cash</option>
                              <option>Cheque</option>
                              <option>UPI</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label>Status</label>
                            <select className="select form-control" onChange={estatus1} value={estatus}>
                              <option>Pending</option>
                              <option>Approved</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label>Attachments</label>
                            <input class="form-control" type="file" onChange={efile1} value={efile}/>
                          </div>
                        </div>
                      </div>
                      {/* <div className="attach-files">
                                <ul>
                                    <li>
                                        <img src="assets/img/user.jpg" alt=""/>
                                        <a href="#" className="fa fa-close file-remove"></a>
                                    </li>
                                    <li>/
                                        <img src="assets/img/user.jpg" alt=""/>
                                        <a href="#" className="fa fa-close file-remove"></a>
                                    </li>
                                </ul>
                            </div> */}
                      {/* <div className="m-t-20 text-center">
                                <button className="btn btn-primary submit-btn">Create Expense</button>
                            </div> */}
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
              {/* <button className="btn btn-success ">Save & Send</button> */}

              <button type="button" className="btn btn-primary" onClick={sendData}>
                Create Expense
              </button>
            </div>
          </div>
        </div>
      </div>
      </form>
{/* end from */}
      <div
        className="modal fade"
        id="EditExpensesModalLong"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Edit Expenses
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
                        <h4 className="page-title">Edit Expense</h4>
                    </div>
                </div> */}
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <form>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Item Name</label>
                                        <input class="form-control" value="" type="text" placeHolder="Type Here"/>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Purchase From</label>
                                        <input class="form-control" value="" type="text" placeHolder="Type Here"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Purchase Date</label>
                                        <div className="cal-icon">
                                            <input class="form-control datetimepicker" type="text" value="" placeHolder=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Purchased By </label>
                                        <select className="select form-control">
                                            <option>Team Management</option>
                                            <option>Admin</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Amount</label>
                                        <input class="form-control" value="" type="text" placeHolder="Enter Amount"/>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Paid By</label>
                                        <select className="select form-control">
                                            <option>Cash</option>
                                            <option>UPI</option>
                                            <option selected>Cheque</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Status</label>
                                        <select className="select form-control">
                                            <option>Pending</option>
                                            <option selected>Approved</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Attachments</label>
                                        <input class="form-control" type="file"/>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="attach-files">
                                <ul>
                                    <li>
                                        <img src="assets/img/user.jpg" alt=""/>
                                        <a href="#" className="fa fa-close file-remove"></a>
                                    </li>
                                    <li>
                                        <img src="assets/img/user.jpg" alt=""/>
                                        <a href="#" className="fa fa-close file-remove"></a>
                                    </li>
                                </ul>
                            </div> */}
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
  );
}
