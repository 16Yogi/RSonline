import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
export default function Invoices() {
  const [cname, setCname] = useState("");
  const [cdepart, setCdepart] = useState("");
  const [cemail, setCemail] = useState("");
  const [ctax, setCtax] = useState("");
  const [cfulladd, setCfulladd] = useState("");
  const [cbilladd, setCbilladd] = useState("");
  const [cinvoicedate, setCinvoicedate] = useState("");
  const [cduedate, setCduedate] = useState("");
  const [citem1, setCitem1] = useState("");
  const [citemdes1, setCitemdes1] = useState("");
  const [citemunit1, setCitemunit1] = useState("");
  const [citemqty1, setCitemqty1] = useState("");
  const [citem2, setCitem2] = useState("");
  const [citemdes2, setCitemdes2] = useState("");
  const [citemunit2, setCitemunit2] = useState("");
  const [citemqty2, setCitemqty2] = useState("");
  const [cdiscound, setCdiscound] = useState("");
  const [cotherinfo, setCotherinfo] = useState("");

  const sendData = async () => {
    try {
      const invo = {
        cname: cname,
        cdepart: cdepart,
        cemail: cemail,
        ctax: ctax,
        cfulladd: cfulladd,
        cbilladd: cbilladd,
        cinvoicedate: cinvoicedate,
        cduedate: cduedate,
        citem1: citem1,
        citemdes1: citemdes1,
        citemunit1: citemunit1,
        citemqty1: citemqty1,
        citem2: citem2,
        citemdes2: citemdes2,
        citemunit2: citemunit2,
        citemqty2: citemqty2,
        cdiscound: cdiscound,
        cotherinfo: cotherinfo,
      };
      const data = await fetch("http://localhost:8000/api/user/invoice", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(invo),
      });
    } catch {}
  };

  const cname1 = (e) => {
    const value = e.target.value;
    setCname(value);
  };

  const cdepart1 = (e) => {
    const value = e.target.value;
    setCdepart(value);
  };

  const cemail1 = (e) => {
    const value = e.target.value;
    setCemail(value);
  };

  const ctax1 = (e) => {
    const value = e.target.value;
    setCtax(value);
  };

  const cfulladd1 = (e) => {
    const value = e.target.value;
    setCfulladd(value);
  };

  const cbilladd1 = (e) => {
    const value = e.target.value;
    setCbilladd(value);
  };

  const cinvoicedate1 = (e) => {
    const value = e.target.value;
    setCinvoicedate(value);
  };

  const cduedate1 = (e) => {
    const value = e.target.value;
    setCduedate(value);
  };

  const citem1first = (e) => {
    const value = e.target.value;
    setCitem1(value);
  };

  const citemdes1first = (e) => {
    const value = e.target.value;
    setCitemdes1(value);
  };

  const citemunit1first = (e) => {
    const value = e.target.value;
    setCitemunit1(value);
  };

  const citemqty1first = (e) => {
    const value = e.target.value;
    setCitemqty1(value);
  };

  const citem2sec = (e) => {
    const value = e.target.value;
    setCitem2(value);
  };

  const citemdes2sec = (e) => {
    const value = e.target.value;
    setCitemdes2(value);
  };

  const citemunit2sec = (e) => {
    const value = e.target.value;
    setCitemunit2(value);
  };

  const citemqty2sec = (e) => {
    const value = e.target.value;
    setCitemqty2(value);
  };

  const cdiscound1 = (e) => {
    const value = e.target.value;
    setCdiscound(value);
  };

  const cotherinfo1 = (e) => {
    const value = e.target.value;
    setCotherinfo(value);
  };

  // fetch data
    
  const [data,setData] = useState([]);
  const datafetch = async () =>{
    try{
      const response = await fetch("http://localhost:8000/api/user/allinvoic");
      const firstdata = await response.json();
      setData(firstdata);
    }catch(error){
      console.error("Error fetching data",error)
    }
  }
  
  useEffect(()=>{
    datafetch();
  },[]);

  return (
    <>
      <Header />
      <Sidebar />
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-sm-5 col-4">
              <h4 className="page-title">Invoices</h4>
            </div>
            <div className="col-sm-7 col-8 text-right m-b-30">
              <a
                data-toggle="modal"
                href="#"
                data-target="#AddInvoiceModalLong"
                className="btn btn-success text-white btn-rounded"
              >
                <i className="fa fa-plus"></i> Create New Invoice
              </a>
            </div>
          </div>
          <div className="row filter-row">
            <div className="col-sm-6 col-md-3">
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
            <div className="col-sm-6 col-md-3">
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
            <div className="col-sm-6 col-md-3">
              <div className="form-group form-focus select-focus">
                <label className="focus-label">Status</label>
                <select className="select floating form-control">
                  <option>Select Status</option>
                  <option>Pending</option>
                  <option>Paid</option>
                  <option>Partially Paid</option>
                </select>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <a href="#" className="btn btn-success btn-block">
                {" "}
                Search{" "}
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <table className="table table-striped custom-table mb-0">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Invoice Number</th>
                      <th>Employee</th>
                      <th>Joining Date</th>
                      <th>Payment Date</th>
                      <th>Amount</th>
                      <th>Status</th>
                      <th className="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((topic, index) => (
                      <tr key={index}>
                        <td>1</td>
                        <td>
                          <a
                            data-toggle="modal"
                            data-target="#ViewInvoiceModalLong"
                            href="#"
                          >
                            #INV-0001
                          </a>
                        </td>
                        <td>{topic.cname}</td>
                        <td>1 Aug 2023</td>
                        <td>7 Aug 2023</td>
                        <td>Rs. 6000</td>
                        <td>
                          <span className="custom-badge status-green">
                            Paid
                          </span>
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
                                href="edit-invoice.html"
                                data-toggle="modal"
                                data-target="#EditInvoiceModalLong"
                              >
                                <i className="fa fa-pencil m-r-5"></i> Edit
                              </a>
                              <a
                                className="dropdown-item"
                                href="invoice-view.html"
                                data-toggle="modal"
                                data-target="#ViewInvoiceModalLong"
                              >
                                <i className="fa fa-eye m-r-5"></i>
                                View
                              </a>
                              {/* <a className="dropdown-item" href="invoice-view.html"><i className="fa fa-eye m-r-5"></i> View</a> */}
                              <a className="dropdown-item" href="#">
                                <i className="fa fa-file-pdf-o m-r-5"></i>{" "}
                                Download
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-toggle="modal"
                                data-target="#delete_invoice"
                              >
                                <i className="fa fa-trash-o m-r-5"></i> Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                    <tr>
                      <td>2</td>
                      <td>
                        <a
                          data-toggle="modal"
                          data-target="#ViewInvoiceModalLong"
                          href="#"
                        >
                          #INV-0002
                        </a>
                      </td>
                      <td>Sanjay</td>
                      <td>24 Aug 2023</td>
                      <td>24 Aug 2023</td>
                      <td>Rs. 7000</td>
                      <td>
                        <span className="custom-badge status-blue">Sent</span>
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
                              href="edit-invoice.html"
                              data-toggle="modal"
                              data-target="#EditInvoiceModalLong"
                            >
                              <i className="fa fa-pencil m-r-5"></i> Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="invoice-view.html"
                              data-toggle="modal"
                              data-target="#ViewInvoiceModalLong"
                            >
                              <i className="fa fa-eye m-r-5"></i> View
                            </a>
                            {/* <a className="dropdown-item" href="invoice-view.html"><i className="fa fa-eye m-r-5"></i> View</a> */}
                            <a className="dropdown-item" href="#">
                              <i className="fa fa-file-pdf-o m-r-5"></i>{" "}
                              Download
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              data-toggle="modal"
                              data-target="#delete_invoice"
                            >
                              <i className="fa fa-trash-o m-r-5"></i> Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        <a
                          data-toggle="modal"
                          data-target="#ViewInvoiceModalLong"
                          href="#"
                        >
                          #INV-0003
                        </a>
                      </td>
                      <td>Nawaz</td>
                      <td>1 Sep 2023</td>
                      <td>7 Sep 2023</td>
                      <td>Rs. 8000</td>
                      <td>
                        <span className="custom-badge status-orange">
                          Partially Paid
                        </span>
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
                              href="edit-invoice.html"
                              data-toggle="modal"
                              data-target="#EditInvoiceModalLong"
                            >
                              <i className="fa fa-pencil m-r-5"></i> Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="invoice-view.html"
                              data-toggle="modal"
                              data-target="#ViewInvoiceModalLong"
                            >
                              <i className="fa fa-eye m-r-5"></i> View
                            </a>
                            {/* <a className="dropdown-item" href="invoice-view.html"><i className="fa fa-eye m-r-5"></i> View</a> */}
                            <a className="dropdown-item" href="#">
                              <i className="fa fa-file-pdf-o m-r-5"></i>{" "}
                              Download
                            </a>
                            {/* <a className="dropdown-item" href="#"><i className="fa fa-trash-o m-r-5"></i> Delete</a> */}
                            <a
                              className="dropdown-item"
                              href="#"
                              data-toggle="modal"
                              data-target="#delete_invoice"
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
            <div className="drop-scroll msg-list-scroll" id="msg_list">
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

      <form>
        <div
          className="modal fade"
          id="AddInvoiceModalLong"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLongTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Create Invoice
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
                    <div className="col-sm-12">
                        <h4 className="page-title">Create Invoice</h4>
                    </div>
                </div> */}
                  {/* -------------------------- start 1 --------------------- */}
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="row">
                        <div className="col-sm-6 col-md-3">
                          <div className="form-group">
                            <label>
                              Customer <span className="text-danger">*</span>
                            </label>
                            <select
                              className="select form-control"
                              onChange={cname1}
                              value={cname}
                            >
                              <option>Please Select</option>
                              <option>Charles Ortega</option>
                              <option>Denise Stevens</option>
                              <option>Jennifer Robinson</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                          <div className="form-group">
                            <label>
                              Department <span className="text-danger">*</span>
                            </label>
                            <select
                              className="select form-control"
                              onChange={cdepart1}
                              value={cdepart}
                            >
                              <option>Select Department</option>
                              <option>Employee</option>
                              <option>Retailers</option>
                              <option>Customers</option>
                            </select>
                          </div>
                        </div>

                        <div className="col-sm-6 col-md-3">
                          <div className="form-group">
                            <label>Email</label>
                            <input
                              className="form-control"
                              type="email"
                              onChange={cemail1}
                              value={cemail}
                            />
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                          <div className="form-group">
                            <label>Tax</label>
                            <select
                              className="select form-control"
                              onChange={ctax1}
                              value={ctax}
                            >
                              <option>Select Tax</option>
                              <option>VAT</option>
                              <option>GST</option>
                              <option>No Tax</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                          <div className="form-group">
                            <label>Full Address</label>
                            <textarea
                              className="form-control"
                              rows="3"
                              onChange={cfulladd1}
                              value={cfulladd}
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                          <div className="form-group">
                            <label>Billing Address</label>
                            <textarea
                              className="form-control"
                              rows="3"
                              onChange={cbilladd1}
                              value={cbilladd}
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                          <div className="form-group">
                            <label>
                              Invoice date{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <div className="cal-icon">
                              <input
                                className="form-control datetimepicker"
                                type="text"
                                onChange={cinvoicedate1}
                                value={cinvoicedate}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                          <div className="form-group">
                            <label>
                              Due Date <span className="text-danger">*</span>
                            </label>
                            <div className="cal-icon">
                              <input
                                className="form-control datetimepicker"
                                type="text"
                                onChange={cduedate1}
                                value={cduedate}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 col-sm-12">
                          <div className="table-responsive">
                            <table className="table table-hover table-white">
                              <thead>
                                <tr>
                                  <th style={{ width: "20px" }}>#</th>
                                  <th className="col-sm-2">Item</th>
                                  <th className="col-md-6">Description</th>
                                  <th style={{ width: "100px" }}>Unit Cost</th>
                                  <th style={{ width: "80px" }}>Qty</th>
                                  <th>Amount</th>
                                  <th> </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td>
                                    <input
                                      className="form-control"
                                      type="text"
                                      style={{ minwidth: "150px" }}
                                      onChange={citem1first}
                                      value={citem1}
                                    />
                                  </td>
                                  <td>
                                    <input
                                      className="form-control"
                                      type="text"
                                      style={{ minwidth: "150px" }}
                                      onChange={citemdes1first}
                                      value={citemdes1}
                                    />
                                  </td>
                                  <td>
                                    <input
                                      className="form-control"
                                      style={{ width: "100px" }}
                                      type="text"
                                      onChange={citemunit1first}
                                      value={citemunit1}
                                    />
                                  </td>
                                  <td>
                                    <input
                                      className="form-control"
                                      style={{ width: "80px" }}
                                      type="text"
                                      onChange={citemqty1first}
                                      value={citemqty1}
                                    />
                                  </td>
                                  <td>
                                    <input
                                      className="form-control form-amt"
                                      readonly=""
                                      style={{ width: "120px" }}
                                      type="text"
                                    />
                                  </td>
                                  <td>
                                    <a
                                      href="javascript:void(0)"
                                      class="text-success font-18"
                                      title="Add"
                                    >
                                      <i className="fa fa-plus"></i>
                                    </a>
                                    <a
                                      href="javascript:void(0)"
                                      class="text-danger font-18"
                                      title="Remove"
                                    >
                                      <i className="fa fa-trash-o"></i>
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>2</td>
                                  <td>
                                    <input
                                      className="form-control"
                                      type="text"
                                      style={{ minwidth: "150px" }}
                                      onChange={citem2sec}
                                      value={citem2}
                                    />
                                  </td>
                                  <td>
                                    <input
                                      className="form-control"
                                      type="text"
                                      style={{ minwidth: "150px" }}
                                      onChange={citemdes2sec}
                                      value={citemdes2}
                                    />
                                  </td>
                                  <td>
                                    <input
                                      className="form-control"
                                      style={{ width: "100px" }}
                                      type="text"
                                      onChange={citemunit2sec}
                                      value={citemunit2}
                                    />
                                  </td>
                                  <td>
                                    <input
                                      className="form-control"
                                      style={{ width: "80px" }}
                                      type="text"
                                      onChange={citemqty2sec}
                                      value={citemqty2}
                                    />
                                  </td>
                                  <td>
                                    <input
                                      className="form-control form-amt"
                                      readonly=""
                                      style={{ width: "120px" }}
                                      type="text"
                                    />
                                  </td>
                                  <td>
                                    <a
                                      href="javascript:void(0)"
                                      class="text-success font-18"
                                      title="Add"
                                    >
                                      <i className="fa fa-plus"></i>
                                    </a>
                                    <a
                                      href="javascript:void(0)"
                                      className="text-danger font-18"
                                      title="Remove"
                                    >
                                      <i className="fa fa-trash-o"></i>
                                    </a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="table-responsive">
                            <table className="table table-hover table-white">
                              <tbody>
                                <tr>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td className="text-right">Total</td>
                                  <td
                                    style={{
                                      textAlign: "right",
                                      paddingRight: "30px",
                                      width: "230px",
                                    }}
                                  >
                                    0
                                  </td>
                                </tr>
                                <tr>
                                  <td colSpan="5" className="text-right">
                                    Tax
                                  </td>
                                  <td
                                    style={{
                                      textAlign: "right",
                                      paddingRight: "30px",
                                      width: "230px",
                                    }}
                                  >
                                    <input
                                      className="form-control text-right form-amt"
                                      value="0"
                                      readonly=""
                                      type="text"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td colSpan="5" className="text-right">
                                    Discount %
                                  </td>
                                  <td
                                    style={{
                                      textAlign: "right",
                                      paddingRight: "30px",
                                      width: "230px",
                                    }}
                                  >
                                    <input
                                      className="form-control text-right"
                                      type="text"
                                      onChange={cdiscound1}
                                      value={cdiscound}
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    colspan="5"
                                    style={{
                                      textAlign: "right",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    Grand TotR
                                  </td>
                                  <td
                                    style={{
                                      textAlign: "right",
                                      paddingRight: "30px",
                                      fontWeight: "bold",
                                      fontSize: "16px",
                                      width: "230px",
                                    }}
                                  >
                                    Rs 0.00"
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group">
                                <label>Other Information</label>
                                <textarea
                                  className="form-control"
                                  onChange={cotherinfo1}
                                  value={cotherinfo}
                                ></textarea>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div className="text-center m-t-20">
                                <button className="btn btn-grey submit-btn m-r-10">Save & Send</button>
                                <button className="btn btn-primary submit-btn">Save</button>
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
                <button className="btn btn-success " onClick={sendData}>
                  Save & Send
                </button>

                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={sendData}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      {/* --------------------------------------- 1 close ----------------------------- */}

      <div
        className="modal fade"
        id="ViewInvoiceModalLong"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Invoice
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
                    <div className="col-sm-5 col-4">
                        <h4 className="page-title">Invoice</h4>
                    </div>
                    <div className="col-sm-7 col-8 text-right m-b-30">
                        <div className="btn-group btn-group-sm">
                            <button className="btn btn-white">CSV</button>
                            <button className="btn btn-white">PDF</button>
                            <button className="btn btn-white"><i class="fa fa-print fa-lg"></i> Print</button>
                        </div>
                    </div>
                </div> */}
                <div className="row">
                  <div className="col-md-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="row custom-invoice">
                          <div className="col-6 col-sm-6 m-b-20">
                            <img
                              src="assets/img/logo-dark.png"
                              class="inv-logo"
                              alt=""
                            />
                            <ul className="list-unstyled">
                              <li>Infront Of Piplani, Petrol Pump </li>
                              <li>Bhopal</li>
                              <li>GST No:</li>
                            </ul>
                          </div>
                          <div className="col-6 col-sm-6 m-b-20">
                            <div className="invoice-details">
                              <h3 className="text-uppercase">
                                Invoice #INV-0001
                              </h3>
                              <ul className="list-unstyled">
                                <li>
                                  Date: <span>October 12, 2022</span>
                                </li>
                                <li>
                                  Due date: <span>November 25, 2022</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-6 col-lg-6 m-b-20">
                            <h5>Invoice to:</h5>
                            <ul className="list-unstyled">
                              <li>
                                <h5>
                                  <strong>xyz Person</strong>
                                </h5>
                              </li>
                              <li>
                                <span>IT Technologies</span>
                              </li>
                              <li>Infront Of Piplani, </li>
                              <li>Petrol Pump</li>
                              <li>India</li>
                              <li>Pin: 000000</li>
                              <li>
                                <a href="#">xyz@example.com</a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-sm-6 col-lg-6 m-b-20">
                            <div className="invoices-view">
                              <span className="text-muted">
                                Payment Details:
                              </span>
                              <ul className="list-unstyled invoice-payment-details">
                                <li>
                                  <h5>
                                    Total Due:{" "}
                                    <span className="text-right">Rs 288.2</span>
                                  </h5>
                                </li>
                                <li>
                                  Bank name: <span>xyz Bank india</span>
                                </li>
                                <li>
                                  Country: <span>india</span>
                                </li>
                                <li>
                                  City: <span>Bhopal</span>
                                </li>
                                <li>
                                  Address: <span>Piplani, Petrol Pump</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="table-responsive">
                          <table className="table table-striped table-hover">
                            <thead>
                              <tr>
                                <th>#</th>
                                <th>ITEM</th>
                                <th>DESCRIPTION</th>
                                <th>UNIT COST</th>
                                <th>QUANTITY</th>
                                <th>TOTAL</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>Xyz Product</td>
                                <td>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit
                                </td>
                                <td>Rs 150</td>
                                <td>1</td>
                                <td>Rs 150</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>xyz Prod.</td>
                                <td>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit
                                </td>
                                <td>Rs 12</td>
                                <td>1</td>
                                <td>Rs 12</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>General Product</td>
                                <td>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit
                                </td>
                                <td>Rs 100</td>
                                <td>1</td>
                                <td>Rs 100</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div>
                          <div className="row invoice-payment">
                            <div className="col-sm-7"></div>
                            <div className="col-sm-5">
                              <div className="m-b-20">
                                <h6>Total due</h6>
                                <div className="table-responsive no-border">
                                  <table className="table mb-0">
                                    <tbody>
                                      <tr>
                                        <th>Subtotal:</th>
                                        <td className="text-right">Rs 262</td>
                                      </tr>
                                      <tr>
                                        <th>
                                          Tax:{" "}
                                          <span className="text-regular">
                                            (10%)
                                          </span>
                                        </th>
                                        <td className="text-right">Rs 26.2</td>
                                      </tr>
                                      <tr>
                                        <th>Total:</th>
                                        <td className="text-right text-primary">
                                          <h5>Rs 288.2</h5>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="invoice-info">
                            <h5>Other information</h5>
                            <p className="text-muted">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Vivamus sed dictum ligula, cursus blandit
                              risus. Maecenas eget metus non tellus dignissim
                              aliquam ut a ex. Maecenas sed vehicula dui, ac
                              suscipit lacus. Sed finibus leo vitae lorem
                              interdum, eu scelerisque tellus fermentum.
                              Curabitur sit amet lacinia lorem. Nullam finibus
                              pellentesque libero, eu finibus sapien interdum
                              vel
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
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
              <button className="btn btn-success ">Save & Send</button>

              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* form */}
      <form>
        <div
          className="modal fade"
          id="EditInvoiceModalLong"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLongTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Edit Invoice
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
                    <div className="col-sm-12">
                        <h4 className="page-title">Edit Invoice</h4>
                    </div>
                </div> */}
                  <div className="row">
                    <div className="col-md-12">
                      <div className="row">
                        {/* <!-- <div className="col-sm-6 col-md-3">
                                    <div className="form-group">
                                        <label>Client <span className="text-danger">*</span></label>
                                        <select className="select">
                                            <option>Please Select</option>
                                            <option selected>Charles Ortega</option>
                                            <option>Denise Stevens</option>
                                            <option>Jennifer Robinson</option>
                                        </select>
                                    </div>
                                </div> --> */}
                        <div className="col-sm-12 col-md-6">
                          <div className="form-group">
                            <label>
                              Department <span className="text-danger">*</span>
                            </label>
                            <select className="select form-control">
                              <option>Select Department</option>
                              <option>Employee</option>
                              <option>Retailers</option>
                              <option>Customers</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                          <div className="form-group">
                            <label>Email</label>
                            <input
                              class="form-control"
                              type="email"
                              value=""
                              placeHolder="xyz@gmail.com"
                            />
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                          <div className="form-group">
                            <label>Tax</label>
                            <select className="select form-control">
                              <option>Select Tax</option>
                              <option>VAT</option>
                              <option selected>GST</option>
                              <option>No Tax</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                          <div className="form-group">
                            <label>Full Address</label>
                            <textarea
                              class="form-control"
                              rows="3"
                              placeHolder="Enter Full Address"
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                          <div className="form-group">
                            <label>Billing Address</label>
                            <textarea
                              class="form-control"
                              rows="3"
                              placeHolder="Enter Full Address"
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                          <div className="form-group">
                            <label>
                              Invoice date{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <div className="cal-icon">
                              <input
                                class="form-control datetimepicker"
                                type="text"
                                value=""
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                          <div className="form-group">
                            <label>
                              Due Date <span className="text-danger">*</span>
                            </label>
                            <div className="cal-icon">
                              <input
                                class="form-control datetimepicker"
                                type="text"
                                value=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 col-sm-12">
                          <div className="table-responsive">
                            <table className="table table-hover table-white">
                              <thead>
                                <tr>
                                  <th style={{ width: "20px" }}>#</th>
                                  <th className="col-sm-2">Item</th>
                                  <th className="col-md-6">Description</th>
                                  <th style={{ width: "100px" }}>Unit Cost</th>
                                  <th style={{ width: "80px" }}>Qty</th>
                                  <th>Amount</th>
                                  <th></th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td>
                                    <input
                                      class="form-control"
                                      type="text"
                                      value=""
                                      style={{ minWidth: "150px" }}
                                      placeHolder="edit items"
                                    />
                                  </td>
                                  <td>
                                    <input
                                      class="form-control"
                                      type="text"
                                      value="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                                      style={{ minWidth: "150px" }}
                                    />
                                  </td>
                                  <td>
                                    <input
                                      class="form-control"
                                      style={{ width: "100px" }}
                                      type="text"
                                      value="150"
                                    />
                                  </td>
                                  <td>
                                    <input
                                      class="form-control"
                                      style={{ width: "80px" }}
                                      type="text"
                                      value="1"
                                    />
                                  </td>
                                  <td>
                                    <input
                                      class="form-control form-amt"
                                      readonly=""
                                      style={{ width: "120px" }}
                                      type="text"
                                      value="150"
                                    />
                                  </td>
                                  <td>
                                    <a
                                      href="javascript:void(0)"
                                      className="text-success font-18"
                                      title="Add"
                                    >
                                      <i class="fa fa-plus"></i>
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>2</td>
                                  <td>
                                    <input
                                      class="form-control"
                                      type="text"
                                      value=""
                                      placeholder="edit items"
                                      style={{ minWidth: "150px" }}
                                    />
                                  </td>
                                  <td>
                                    <input
                                      class="form-control"
                                      type="text"
                                      value="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                                      style={{ minWidth: "150px" }}
                                    />
                                  </td>
                                  <td>
                                    <input
                                      class="form-control"
                                      style={{ width: "100px" }}
                                      type="text"
                                      value="12"
                                    />
                                  </td>
                                  <td>
                                    <input
                                      class="form-control"
                                      style={{ width: "80px" }}
                                      type="text"
                                      value="1"
                                    />
                                  </td>
                                  <td>
                                    <input
                                      class="form-control form-amt"
                                      readonly=""
                                      style={{ width: "120px" }}
                                      type="text"
                                      value="12"
                                    />
                                  </td>
                                  <td>
                                    <a
                                      href="javascript:void(0)"
                                      className="text-danger font-18"
                                      title="Remove"
                                    >
                                      <i class="fa fa-trash-o"></i>
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>3</td>
                                  <td>
                                    <input
                                      class="form-control"
                                      type="text"
                                      value=""
                                      placeholder="edit items"
                                      style={{ minWidth: "150px" }}
                                    />
                                  </td>
                                  <td>
                                    <input
                                      class="form-control"
                                      type="text"
                                      value="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                                      style={{ minWidth: "150px" }}
                                    />
                                  </td>
                                  <td>
                                    <input
                                      class="form-control"
                                      style={{ width: "100px" }}
                                      type="text"
                                      value="100"
                                    />
                                  </td>
                                  <td>
                                    <input
                                      class="form-control"
                                      style={{ width: "80px" }}
                                      type="text"
                                      value="1"
                                    />
                                  </td>
                                  <td>
                                    <input
                                      class="form-control form-amt"
                                      readonly=""
                                      style={{ width: "120px" }}
                                      type="text"
                                      value="100"
                                    />
                                  </td>
                                  <td>
                                    <a
                                      href="javascript:void(0)"
                                      className="text-danger font-18"
                                      title="Remove"
                                    >
                                      <i class="fa fa-trash-o"></i>
                                    </a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="table-responsive">
                            <table className="table table-hover table-white">
                              <tbody>
                                <tr>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td className="text-right">Total</td>
                                  <td
                                    style={{
                                      textAlign: "right",
                                      width: " 230px",
                                    }}
                                  >
                                    262
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    colspan="5"
                                    style={{ textAlign: "right" }}
                                  >
                                    Tax
                                  </td>
                                  <td
                                    style={{
                                      textAlign: "right",
                                      width: " 230px",
                                    }}
                                  >
                                    <input
                                      class="form-control text-right form-amt"
                                      value="0"
                                      readonly=""
                                      type="text"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td colspan="5" style={{ textlign: "right" }}>
                                    Discount %
                                  </td>
                                  <td
                                    style={{
                                      textAlign: "right",
                                      width: " 230px",
                                    }}
                                  >
                                    <input
                                      class="form-control text-right"
                                      value="26.2"
                                      type="text"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    colspan="5"
                                    style={{
                                      textAlign: "right",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    Grand Total
                                  </td>
                                  <td
                                    style={{
                                      textAlign: "right",
                                      fontWeight: "bold",
                                      fontSize: "16px",
                                      width: "230px",
                                    }}
                                  >
                                    Rs 288.2
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group">
                                <label>Other Information</label>
                                <textarea
                                  class="form-control"
                                  rows="4"
                                ></textarea>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div className="text-center m-t-20">
                                <button className="btn btn-primary submit-btn">Save Invoice</button>
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

                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
