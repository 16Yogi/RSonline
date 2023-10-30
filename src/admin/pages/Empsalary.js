import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
export default function Empsalary() {
  const [stfname, setStfname] = useState("");
  const [netsalry, setNetsalary] = useState("");
  const [basic, setBasic] = useState("");
  const [tds, setTds] = useState("");
  const [da, setDa] = useState("");
  const [esi, setEsi] = useState("");
  const [hra, sethra] = useState("");
  const [pf, setPf] = useState("");
  const [conveyance, setConveyance] = useState("");
  const [leave, setLeave] = useState("");
  const [allowance, setAllowance] = useState("");
  const [proftax, setProftax] = useState("");
  const [medicalallowance, setMedicalallowance] = useState("");
  const [labourwelfare, setLabourwelfare] = useState("");
  const [other, setOther] = useState("");
  const [fund, setFund] = useState("");

  const sendData = async () => {
    try {
      const addSalary = {
        stfname: stfname,
        netsalry: netsalry,
        basic: basic,
        tds: tds,
        da: da,
        esi: esi,
        hra: hra,
        pf: pf,
        conveyance: conveyance,
        leave: leave,
        allowance: allowance,
        proftax: proftax,
        medicalallowance: medicalallowance,
        labourwelfare: labourwelfare,
        other: other,
        fund: fund,
      };
      const data = await fetch("http://localhost:8000/api/user/addempsalary", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(addSalary),
      });
    } catch {}
  };

  const stfname1 = (e) => {
    const value = e.target.value;
    setStfname(value);
  };

  const netsalry1 = (e) => {
    const value = e.target.value;
    setNetsalary(value);
  };

  const basic1 = (e) => {
    const value = e.target.value;
    setBasic(value);
  };

  const tds1 = (e) => {
    const value = e.target.value;
    setTds(value);
  };

  const da1 = (e) => {
    const value = e.target.value;
    setDa(value);
  };

  const esi1 = (e) => {
    const value = e.target.value;
    setEsi(value);
  };

  const hra1 = (e) => {
    const value = e.target.value;
    sethra(value);
  };

  const pf1 = (e) => {
    const value = e.target.value;
    setPf(value);
  };

  const conveyance1 = (e) => {
    const value = e.target.value;
    setConveyance(value);
  };

  const leave1 = (e) => {
    const value = e.target.value;
    setLeave(value);
  };

  const allowance1 = (e) => {
    const value = e.target.value;
    setAllowance(value);
  };

  const proftax1 = (e) => {
    const value = e.target.value;
    setProftax(value);
  };

  const medicalallowance1 = (e) => {
    const value = e.target.value;
    setMedicalallowance(value);
  };

  const labourwelfare1 = (e) => {
    const value = e.target.value;
    setLabourwelfare(value);
  };

  const other1 = (e) => {
    const value = e.target.value;
    setOther(value);
  };

  const fund1 = (e) => {
    const value = e.target.value;
    setFund(value);
  };

  //fetch data

  
  const [data,setData] = useState([]);
  const datafetch = async () =>{
    try{
      const response = await fetch("http://localhost:8000/api/user/empsalarydata");
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
            <div className="col-sm-4 col-5">
              <h4 className="page-title">Employee Salary</h4>
            </div>
            <div className="col-sm-8 col-7 text-right m-b-30">
              <a
                data-toggle="modal"
                data-target="#AddEmpSalaryModalLong"
                className="btn btn-success btn-rounded text-white float-right"
              >
                <i className="fa fa-plus"></i> Add Salary
              </a>
            </div>
          </div>
          <div className="row filter-row">
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
              <div className="form-group form-focus">
                <label className="focus-label">Employee Name</label>
                <input type="text" className="form-control floating" />
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
              <div className="form-group form-focus select-focus">
                <label className="focus-label">Role</label>
                <select className="select form-control floating">
                  <option> -- Select -- </option>
                  <option>Employee</option>
                  <option>Employee-2</option>
                  <option>Manager</option>
                  <option>Team leader</option>
                </select>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
              <div className="form-group form-focus select-focus">
                <label className="focus-label">Leave Status</label>
                <select className="select form-control floating">
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
                <table className="table table-striped custom-table datatable">
                  <thead>
                    <tr>
                      <th style={{ width: "25%" }}>Employee</th>
                      <th>Employee ID</th>
                      <th>Email</th>
                      <th>Joining Date</th>
                      <th>Role</th>
                      <th>Salary</th>
                      <th>Payslip</th>
                      <th className="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                  {data.map((topic,index)=>(
                    <tr key={index}>
                      <td>
                        <img
                          className="rounded-circle"
                          src="../assets/img/user.jpg"
                          height="28"
                          width="28"
                          alt=""
                        />{" "}
                        {topic.stfname}
                      </td>
                      <td>B-0001</td>
                      <td>xyz@example.com</td>
                      <td>1 june 2023</td>
                      <td>
                        <div className="dropdown">
                          <a
                            href="#"
                            className="custom-badge status-grey dropdown-toggle"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Team leader
                          </a>
                          <div className="dropdown-menu">
                            <a class="dropdown-item" href="#">
                              Team Leader
                            </a>
                            <a class="dropdown-item" href="#">
                              Manager
                            </a>
                            <a class="dropdown-item" href="#">
                              Employee
                            </a>
                            <a class="dropdown-item" href="#">
                              Employee-2
                            </a>
                          </div>
                        </div>
                      </td>
                      <td>Rs. 59698</td>
                      <td>
                        <a
                          className="btn btn-sm btn-primary"
                          href="salary-view.html"
                          data-toggle="modal"
                          data-target="#ViewSlipModalLong"
                        >
                          Generate Slip
                        </a>
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
                              data-target="#EditEmpSalaryModalLong"
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
                    ))}
                    {/* <tr>
                      <td>
                        <img
                          className="rounded-circle"
                          src="../assets/img/user.jpg"
                          height="28"
                          width="28"
                          alt=""
                        />{" "}
                        Sanjay
                      </td>
                      <td>B-0001</td>
                      <td>xyz@example.com</td>
                      <td>1 june 2023</td>
                      <td>
                        <div className="dropdown">
                          <a
                            href="#"
                            className="custom-badge status-grey dropdown-toggle"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Team leader
                          </a>
                          <div className="dropdown-menu">
                            <a class="dropdown-item" href="#">
                              Team Leader
                            </a>
                            <a class="dropdown-item" href="#">
                              Manager
                            </a>
                            <a class="dropdown-item" href="#">
                              Employee
                            </a>
                            <a class="dropdown-item" href="#">
                              Employee-2
                            </a>
                          </div>
                        </div>
                      </td>
                      <td>Rs. 59690</td>
                      <td>
                        <a
                          className="btn btn-sm btn-primary"
                          href="salary-view.html"
                          data-toggle="modal"
                          data-target="#ViewSlipModalLong"
                        >
                          Generate Slip
                        </a>
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
                              data-target="#EditEmpSalaryModalLong"
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
                        <img
                          className="rounded-circle"
                          src="../assets/img/user.jpg"
                          height="28"
                          width="28"
                          alt=""
                        />{" "}
                        Sanjay
                      </td>
                      <td>B-0001</td>
                      <td>xyz@example.com</td>
                      <td>1 june 2023</td>
                      <td>
                        <div className="dropdown">
                          <a
                            href="#"
                            className="custom-badge status-grey dropdown-toggle"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            manager
                          </a>
                          <div className="dropdown-menu">
                            <a class="dropdown-item" href="#">
                              Team Leader
                            </a>
                            <a class="dropdown-item" href="#">
                              Manager
                            </a>
                            <a class="dropdown-item" href="#">
                              Employee
                            </a>
                            <a class="dropdown-item" href="#">
                              Employee-2
                            </a>
                          </div>
                        </div>
                      </td>
                      <td>Rs. 59698</td>
                      <td>
                        <a
                          className="btn btn-sm btn-primary"
                          href="salary-view.html"
                          data-toggle="modal"
                          data-target="#ViewSlipModalLong"
                        >
                          Generate Slip
                        </a>
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
                              data-target="#EditEmpSalaryModalLong"
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
                    </tr> */}
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
        <div
          className="modal fade"
          id="EditEmpSalaryModalLong"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLongTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">
                  Edit Employee
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
                    {/* <div className="col-lg-8 offset-lg-2">
                                <h4 className="page-title">Edit Employee</h4>
                            </div> */}
                  </div>
                  <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                      <form>
                        <div className="row">
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>
                                First Name{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <input class="form-control" type="text" />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>Last Name</label>
                              <input class="form-control" type="text" />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>
                                Age <span className="text-danger">*</span>
                              </label>
                              <input class="form-control" type="text" />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>
                                Email <span className="text-danger">*</span>
                              </label>
                              <input class="form-control" type="email" />
                            </div>
                          </div>

                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>
                                Employee ID{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>
                                Joining Date{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <div className="cal-icon">
                                <input
                                  className="form-control datetimepicker"
                                  type="text"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>Phone </label>
                              <input class="form-control" type="text" />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>Role</label>
                              <select className="select form-control">
                                <option>Admin</option>
                                <option>General Manager</option>
                                <option>Team Leader</option>
                                <option>Team Member</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="display-block">Status</label>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="status"
                              id="employee_active"
                              value="option1"
                              checked
                            />
                            <label
                              className="htmlForm-check-label"
                              htmlFor="employee_active"
                            >
                              Active
                            </label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="status"
                              id="employee_inactive"
                              value="option2"
                            />
                            <label
                              className="htmlForm-check-label"
                              htmlFor="employee_inactive"
                            >
                              Inactive
                            </label>
                          </div>
                        </div>
                        {/* <div className="m-t-20 text-center">
                                        <button className="btn btn-primary submit-btn">Create Employee</button>
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
                  Edit Details
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* --------------------------- Salary add Form ------------------------ */}

        <form action="">
          <div
            className="modal fade"
            id="AddEmpSalaryModalLong"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLongTitle"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-xl" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle">
                    Add Staff Salary
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
                        <h4 className="page-title">Add Staff Salary</h4>
                    </div>
                </div> */}
                    <div className="row">
                      <div className="col-lg-8 offset-lg-2">
                        {/* <form> */}
                        <div className="row">
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>Staff Name</label>
                              <input class="form-control" type="text" onChange={stfname1} value={stfname}/>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>Net Salary</label>
                              <input class="form-control" type="text" onChange={netsalry1} value={netsalry}/>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-6">
                            <h4 className="text-primary">Earnings</h4>
                            <div className="form-group">
                              <label>Basic</label>
                              <input class="form-control" type="text" onChange={basic1} value={basic}/>
                            </div>
                            <div className="form-group">
                              <label>DA(40%)</label>
                              <input class="form-control" type="text" onChange={da1} value={da}/>
                            </div>
                            <div className="form-group">
                              <label>HRA(15%)</label>
                              <input class="form-control" type="text" onChange={hra1} value={hra}/>
                            </div>
                            <div className="form-group">
                              <label>Conveyance</label>
                              <input class="form-control" type="text" onChange={conveyance1} value={conveyance}/>
                            </div>
                            <div className="form-group">
                              <label>Allowance</label>
                              <input class="form-control" type="text" onChange={allowance1} value={allowance}/>
                            </div>
                            <div className="form-group">
                              <label>Medical Allowance</label>
                              <input class="form-control" type="text" onChange={medicalallowance1} value={medicalallowance}/>
                            </div>
                            <div className="form-group">
                              <label>Others</label>
                              <input class="form-control" type="text" onChange={other1} value={other}/>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <h4 className="text-primary">Deductions</h4>
                            <div className="form-group">
                              <label>TDS</label>
                              <input class="form-control" type="text" onChange={tds1} value={tds}/>
                            </div>
                            <div className="form-group">
                              <label>ESI</label>
                              <input class="form-control" type="text" onChange={esi1} value={esi}/>
                            </div>
                            <div className="form-group">
                              <label>PF</label>
                              <input class="form-control" type="text" onChange={pf1} value={pf}/>
                            </div>
                            <div className="form-group">
                              <label>Leave</label>
                              <input class="form-control" type="text" onChange={leave1} value={leave}/>
                            </div>
                            <div className="form-group">
                              <label>Prof. Tax</label>
                              <input class="form-control" type="text" onChange={proftax1} value={proftax}/>
                            </div>
                            <div className="form-group">
                              <label>Labour Welfare</label>
                              <input class="form-control" type="text" onChange={labourwelfare1} value={labourwelfare}/>
                            </div>
                            <div className="form-group">
                              <label>Fund</label>
                              <input class="form-control" type="text" onChange={fund1} value={fund}/>
                            </div>
                            {/* <div className="form-group">
                              <label>Others</label>
                              <input class="form-control" type="text" onChange={other1} value={other}/>
                            </div> */}
                          </div>
                        </div>
                        {/* <div className="m-t-20 text-center">
                                <button className="btn btn-primary submit-btn">Create Salary</button>
                            </div> */}
                        {/* </form> */}
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
                  <button type="button" className="btn btn-primary" onClick={sendData}>
                    Create Salary
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
        {/* --------------------------- Salary add Form ------------------------ */}
        <div
          className="modal fade"
          id="ViewSlipModalLong"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLongTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">
                  Payslip
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
                <div class="content">
                  {/* <div class="row">
                    <div class="col-sm-5 col-4">
                        <h4 class="page-title">Payslip</h4>
                    </div>
                    <div class="col-sm-7 col-8 text-right m-b-30">
                        <div class="btn-group btn-group-sm">
                            <button class="btn btn-white">CSV</button>
                            <button class="btn btn-white">PDF</button>
                            <button class="btn btn-white"><i class="fa fa-print fa-lg"></i> Print</button>
                        </div>
                    </div>
                </div> */}
                  <div class="row">
                    <div class="col-md-12">
                      <div class="card-box">
                        <h4 class="payslip-title">
                          Payslip for the month of July 2023
                        </h4>
                        <div class="row">
                          <div class="col-sm-6 m-b-20">
                            <img
                              src="assets/img/logo-dark.png"
                              class="inv-logo"
                              alt=""
                            />
                            <ul class="list-unstyled mb-0">
                              <li>RS Services</li>
                              <li>Piplani Petrol Pump,</li>
                              <li>Bhopal , India</li>
                            </ul>
                          </div>
                          <div class="col-sm-6 m-b-20">
                            <div class="invoice-details">
                              <h3 class="text-uppercase">Payslip #49029</h3>
                              <ul class="list-unstyled">
                                <li>
                                  Salary Month: <span>July, 2023</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-lg-12 m-b-20">
                            <ul class="list-unstyled">
                              <li>
                                <h5 class="mb-0">
                                  <strong>Sandeep</strong>
                                </h5>
                              </li>
                              <li>
                                <span>Front End Developer</span>
                              </li>
                              <li>Employee ID: NS-0001</li>
                              <li>Joining Date: 7 sep 2022</li>
                            </ul>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-sm-6">
                            <div>
                              <h4 class="m-b-10">
                                <strong>Earnings</strong>
                              </h4>
                              <table class="table table-bordered">
                                <tbody>
                                  <tr>
                                    <td>
                                      <strong>Basic Salary</strong>{" "}
                                      <span class="float-right">Rs 16500</span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <strong>Conveyance</strong>{" "}
                                      <span class="float-right">Rs 155</span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <strong>Other Allowance</strong>{" "}
                                      <span class="float-right">Rs 155</span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <strong>Total Earnings</strong>{" "}
                                      <span class="float-right">
                                        <strong>Rs 155</strong>
                                      </span>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div class="col-sm-6">
                            <div>
                              <h4 class="m-b-10">
                                <strong>Deductions</strong>
                              </h4>
                              <table class="table table-bordered">
                                <tbody>
                                  <tr>
                                    <td>
                                      <strong>
                                        Tax Deducted at Source (T.D.S.)
                                      </strong>{" "}
                                      <span class="float-right">Rs 10</span>
                                    </td>
                                  </tr>

                                  <tr>
                                    <td>
                                      <strong>ESI</strong>{" "}
                                      <span class="float-right">Rs 10</span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <strong>Loan</strong>{" "}
                                      <span class="float-right">Rs 1300</span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <strong>Total Deductions</strong>{" "}
                                      <span class="float-right">
                                        <strong>Rs 159698</strong>
                                      </span>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div class="col-sm-12">
                            <p>
                              <strong>Net Salary: Rs 159698</strong> (Fifty nine
                              thousand six hundred and ninety eight only.)
                            </p>
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
                {/* <button class="btn btn-primary">CSV</button> */}
                <button class="btn btn-success">Download PDF</button>
                <button class="btn btn-warning">
                  <i class="fa fa-print fa-lg"></i> Print
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
