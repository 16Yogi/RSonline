import React from 'react'

export default function Editprofile() {
  return (
    <>
    <div className="main-wrapper">
        <div className="header ">
			<div className="header-left">
				<a href="index.html" className="logo">
					<img src="assets/img/logo-dark.png" width="45" height="45" className="" alt="" /> <span></span>
				</a>
			</div>
			<a id="toggle_btn" href="javascript:void(0);"><i className="fa fa-bars"></i></a>
            <a id="mobile_btn" className="mobile_btn float-left" href="/sidebar"><i className="fa fa-bars"></i></a>
            <ul className="nav user-menu float-right">
                <li className="nav-item dropdown d-none d-sm-block">
                    <a href="/" className="dropdown-toggle nav-link" data-toggle="dropdown"><i className="fa fa-bell-o"></i> <span className="badge badge-pill bg-danger float-right">2</span></a>
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
												<img alt="John Doe" src="assets/img/user.jpg" className="img-fluid" />
											</span>
											<div className="media-body">
												<p className="noti-details"><span className="noti-title">Sanjay</span> added new task <span className="noti-title"> appointment booking</span></p>
												<p className="noti-time"><span className="notification-time">4 mins ago</span></p>
											</div>
                                        </div>
                                    </a>
                                </li>
                                <li className="notification-message">
                                    <a href="activities.html">
                                        <div className="media">
											<span className="avatar">V</span>
											<div className="media-body">
												<p className="noti-details"><span className="noti-title">Nawaz</span> changed the task name <span className="noti-title">Appointment booking with payment gateway</span></p>
												<p className="noti-time"><span className="notification-time">6 mins ago</span></p>
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
                    <a href="javascript:void(0);" id="open_msg_box" className="hasnotifications nav-link"><i className="fa fa-comment-o"></i> <span className="badge badge-pill bg-danger float-right">3</span></a>
                </li>
                <li className="nav-item dropdown has-arrow">
                    <a href="/" className="dropdown-toggle nav-link user-link" data-toggle="dropdown">
                        <span className="user-img">
							<img className="rounded-circle" src="assets/img/user.jpg" width="24" alt="Admin" />
							<span className="status online"></span>
						</span>
						<span>Admin</span>
                    </a>
					<div className="dropdown-menu">
						<a className="dropdown-item" href="profile.html">My Profile</a>
						<a className="dropdown-item" href="edit-profile.html">Edit Profile</a>
						<a className="dropdown-item" href="settings.html">Settings</a>
						<a className="dropdown-item" href="login.html">Logout</a>
					</div>
                </li>
            </ul>
            <div className="dropdown mobile-user-menu float-right">
                <a href="/" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v"></i></a>
                <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="profile.html">My Profile</a>
                    <a className="dropdown-item" href="edit-profile.html">Edit Profile</a>
                    <a className="dropdown-item" href="settings.html">Settings</a>
                    <a className="dropdown-item" href="login.html">Logout</a>
                </div>
            </div>
        </div>
        <div className="sidebar" id="sidebar">
            <div className="sidebar-inner slimscroll ">
                <div id="sidebar-menu" className="sidebar-menu">
                    <ul>
                        <li className="menu-title">Main </li>
                        <li className="active">
                            <a href="index.html"><i className="fa fa-dashboard"></i> <span>Dashboard</span></a>
                        </li>
                        <li className="submenu">
							<a href="/"><i className="fa-solid fa-cart-shopping"></i> <span> Products </span> <span className="menu-arrow"></span></a>
							<ul style="display: none;">
                                <li><a className=""  href="Electronics.html">Electronics</a></li>
                                <li><a className=""  href="Accessories.html">Accessories</a></li>
                                
							</ul>
						</li>
						<li>
                            <a href="Retailers.html"><i className="fa-solid fa-store"></i> <span>Retailers</span></a>
                        </li>
                        <li>
                            <a href="Customers.html"><i className="fa fa-user"></i> <span>Customers</span></a>
                        </li>
                        
						<li className="submenu">
							<a href="/"><i className="fa-solid fa-user-tie"></i> <span> Employees </span> <span className="menu-arrow"></span></a>
							<ul style="display: none;">
								<li><a href="employees.html">Employees List</a></li>
								<li><a href="leaves.html">Leaves</a></li>
								<li><a href="holidays.html">Holidays</a></li>
								<li><a href="attendance.html">Attendance</a></li>
							</ul>
						</li>
                        
						<li className="submenu">
							<a href="/"><i className="fa fa-money"></i> <span> Accounts </span> <span className="menu-arrow"></span></a>
							<ul style="display: none;">
								<li><a href="invoices.html">Invoices</a></li>
								<li><a href="payments.html">Payments</a></li>
								<li><a href="expenses.html">Expenses</a></li>
								<li><a href="taxes.html">Taxes</a></li>
								
							</ul>
						</li>
						<li className="submenu">
							<a href="/"><i className="fa fa-book"></i> <span> Payroll </span> <span className="menu-arrow"></span></a>
							<ul style="display: none;">
								<li><a href="salary.html"> Employee Salary </a></li>
								<li><a href="salary-view.html"> Payslip </a></li>
							</ul>
						</li>
                        
						<li className="submenu">
							<a href="/"><i className="fa fa-flag-o"></i> <span> Reports </span> <span className="menu-arrow"></span></a>
							<ul style="display: none;">
								{/* <!-- <li><a href="expense-reports.html"> Expense Report </a></li> */}
								{/* <li><a href="invoice-reports.html"> Invoice Report </a></li> --> */}
                                <li><a href="invoices.html">Invoices Report</a></li>
								<li><a href="expenses.html">Expenses Report</a></li>
							</ul>
						</li>
                        <li>
                            <a href="settings.html"><i className="fa fa-cog"></i> <span>Settings</span></a>
                        </li>
                        
                        <li className="menu-title">Extras</li>
                        <li className="submenu">
                            <a href="/"><i className="fa fa-columns"></i> <span>Pages</span> <span className="menu-arrow"></span></a>
                            <ul style="display: none;">
                                <li><a href="login.html"> Login </a></li>
                                <li><a href="register.html"> Register </a></li>
                                <li><a href="forgot-password.html"> Forgot Password </a></li>
                                <li><a href="change-password2.html"> Change Password </a></li>
                                <li><a href="profile.html"> Profile </a></li>
                                <li><a href="gallery.html"> Gallery </a></li>
                                <li><a href="error-404.html">404 Error </a></li>
                            </ul>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
        <div className="page-wrapper">
            <div className="content">
                <div className="row">
                    <div className="col-sm-12">
                        <h4 className="page-title">Edit Profile</h4>
                    </div>
                </div>
                <form>
                    <div className="card-box">
                        <h3 className="card-title">Basic Informations</h3>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="profile-img-wrap">
                                    <img className="inline-block" src="assets/img/user.jpg" alt="user"/>
                                    <div className="fileupload btn">
                                        <span className="btn-text">edit</span>
                                        <input className="upload" type="file"/>
                                    </div>
                                </div>
                                <div className="profile-basic">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group form-focus">
                                                <label className="focus-label">First Name</label>
                                                <input type="text" className="form-control floating" value=""/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group form-focus">
                                                <label className="focus-label">Last Name</label>
                                                <input type="text" className="form-control floating" value=""/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group form-focus">
                                                <label className="focus-label">Birth Date</label>
                                                <div className="cal-icon">
                                                    <input className="form-control floating datetimepicker" type="text" value=""/>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="col-md-6">
                                            <div className="form-group form-focus select-focus">
                                                <label className="focus-label">Gendar</label>
                                                <select className="select form-control floating"> 
                                                    <option value="male selected">Male</option>
                                                    <option value="female">Female</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-box">
                        <h3 className="card-title">Contact Informations</h3>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group form-focus">
                                    <label className="focus-label">Address</label>
                                    <input type="text" className="form-control floating" value="74 Bunglows"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group form-focus">
                                    <label className="focus-label">State</label>
                                    <input type="text" className="form-control floating" value="M.P."/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group form-focus">
                                    <label className="focus-label">Country</label>
                                    <input type="text" className="form-control floating" value="India"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group form-focus">
                                    <label className="focus-label">Pin Code</label>
                                    <input type="text" className="form-control floating" value="462003"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group form-focus">
                                    <label className="focus-label">Phone Number</label>
                                    <input type="text" className="form-control floating" value="014785236"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-box">
                        <h3 className="card-title">Education Informations (Highest Qualification)</h3>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group form-focus">
                                    <label className="focus-label">Institution</label>
                                    <input type="text" className="form-control floating" value=""/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group form-focus">
                                    <label className="focus-label">Subject</label>
                                    <input type="text" className="form-control floating" value="Computer Science"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group form-focus">
                                    <label className="focus-label">Starting Date</label>
									<div className="cal-icon">
										<input type="text" className="form-control floating datetimepicker" value="01/06/2020"/>
									</div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group form-focus">
                                    <label className="focus-label">Complete Date</label>
									<div className="cal-icon">
										<input type="text" className="form-control floating datetimepicker" value="31/05/2023"/>
									</div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group form-focus">
                                    <label className="focus-label">Degree</label>
                                    <input type="text" className="form-control floating" value="BE Computer Science"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group form-focus">
                                    <label className="focus-label">Grade</label>
                                    <input type="text" className="form-control floating" value="Grade A"/>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="card-box">
                        <h3 className="card-title">Experience Informations</h3>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group form-focus">
                                    <label className="focus-label">Company Name</label>
                                    <input type="text" className="form-control floating" value="BeanGate IT Solution"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group form-focus">
                                    <label className="focus-label">Location</label>
                                    <input type="text" className="form-control floating" value="Bhopal"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group form-focus">
                                    <label className="focus-label">Job Position</label>
                                    <input type="text" className="form-control floating" value="Web Developer"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group form-focus">
                                    <label className="focus-label">Period From</label>
									<div className="cal-icon">
										<input type="text" className="form-control floating datetimepicker" value="01/07/2022"/>
									</div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group form-focus">
                                    <label className="focus-label">Period To</label>
									<div className="cal-icon">
										<input type="text" className="form-control floating datetimepicker" value="08/06/2023"/>
									</div>
                                </div>
                            </div>
                        </div>
                        <div className="add-more">
                            <a href="/" className="btn btn-primary"><i className="fa fa-plus"></i> Add More Experience</a>
                        </div>
                    </div>
                    <div className="text-center m-t-20">
                        <button className="btn btn-primary submit-btn" type="button">Save</button>
                    </div>
                </form>
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
    </div>
    </>
  )
}
