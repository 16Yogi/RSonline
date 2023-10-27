import React from 'react'
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'
export default function Customers() {
	return (
		<>
			<Header />
			<Sidebar />
			<div className="page-wrapper">
				<div className="content">
					<div className="row">
						<div className="col-sm-4 col-3">
							<h4 className="page-title">All Customers</h4>
						</div>
						{/* <div className="col-sm-8 col-9 text-right m-b-20">
                        <a href="add-patient.html" classNameName="btn  float-right"><i class="fa fa-plus"></i> Add Customers</a>
                    </div> */}
					</div>
					<div className="row">
						<div className="col-md-12">
							<div className="table-responsive">
								<table className="table table-border table-striped custom-table datatable mb-0">
									<thead>
										<tr>
											<th>Name</th>
											<th>Age</th>
											<th>Address</th>
											<th>Phone</th>
											<th>Product </th>
											<th className="text-right">Action</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td><img width="28" height="28" src="../assets/img/user.jpg" class="rounded-circle m-r-5" alt="" /> Jennifer Robinson</td>
											<td>35</td>
											<td>M.P. Nagar , Bhopal</td>
											<td>11 22 00 33 44</td>
											<td>Online Service sachin</td>
											<td className="text-center">
											<div className="dropdown dropdown-action">
												<a href="#" className="action-icon dropdown-toggle"	data-toggle="dropdown" aria-expanded="false">
													<i className="fa fa-ellipsis-v"></i>
												</a>
												<div className="dropdown-menu dropdown-menu-right">
													<a className="dropdown-item" data-toggle="modal" data-target="#EditCustomerModalLong"  >                           
														<i className="fa fa-pencil m-r-5"></i> Edit
													</a>
													<a className="dropdown-item" href="#" data-toggle="modal"data-target="#delete_employee"	>
													<i className="fa fa-trash-o m-r-5"></i> Delete
													</a>
												</div>
											</div>
											</td>
										</tr>
										<tr>
											<td><img width="28" height="28" src="../assets/img/user.jpg" class="rounded-circle m-r-5" alt="" /> Terry Baker</td>
											<td>63</td>
											<td>Hoshangabad Road , Bhopal</td>
											<td>(376) 150 6975</td>
											<td>pan Card</td>
											<td className="text-center">
												<div className="dropdown dropdown-action">
												<a href="#" className="action-icon dropdown-toggle"	data-toggle="dropdown" aria-expanded="false">
													<i className="fa fa-ellipsis-v"></i>
												</a>
												<div className="dropdown-menu dropdown-menu-right">
													<a className="dropdown-item" data-toggle="modal" data-target="#EditCustomerModalLong"  >                           
														<i className="fa fa-pencil m-r-5"></i> Edit
													</a>
													<a className="dropdown-item" href="#" data-toggle="modal"data-target="#delete_employee"	>
													<i className="fa fa-trash-o m-r-5"></i> Delete
													</a>
												</div>
											</div>
											</td>
										</tr>
										<tr>
											<td><img width="28" height="28" src="../assets/img/user.jpg" class="rounded-circle m-r-5" alt="" /> Kyle Bowman</td>
											<td>27</td>
											<td>M.P. Bhopal</td>
											<td>11 22 00 33 44</td>
											<td>Electronics</td>
											<td className="text-center">
												<div className="dropdown dropdown-action">
												<a href="#" className="action-icon dropdown-toggle"	data-toggle="dropdown" aria-expanded="false">
													<i className="fa fa-ellipsis-v"></i>
												</a>
												<div className="dropdown-menu dropdown-menu-right">
													<a className="dropdown-item" data-toggle="modal" data-target="#EditCustomerModalLong"  >                           
														<i className="fa fa-pencil m-r-5"></i> Edit
													</a>
													<a className="dropdown-item" href="#" data-toggle="modal"data-target="#delete_employee"	>
													<i className="fa fa-trash-o m-r-5"></i> Delete
													</a>
												</div>
											</div>
											</td>
										</tr>
										<tr>
											<td><img width="28" height="28" src="../assets/img/user.jpg" class="rounded-circle m-r-5" alt="" /> Marie Howard</td>
											<td>22</td>
											<td>Hoshangabad Road , Bhopal</td>
											<td>11 22 00 33 44</td>
											<td>Online Service</td>
											<td className="text-center">
												<div className="dropdown dropdown-action">
												<a href="#" className="action-icon dropdown-toggle"	data-toggle="dropdown" aria-expanded="false">
													<i className="fa fa-ellipsis-v"></i>
												</a>
												<div className="dropdown-menu dropdown-menu-right">
													<a className="dropdown-item" data-toggle="modal" data-target="#EditCustomerModalLong"  >                           
														<i className="fa fa-pencil m-r-5"></i> Edit
													</a>
													<a className="dropdown-item" href="#" data-toggle="modal"data-target="#delete_employee"	>
													<i className="fa fa-trash-o m-r-5"></i> Delete
													</a>
												</div>
											</div>
											</td>
										</tr>
										<tr>
											<td><img width="28" height="28" src="../assets/img/user.jpg" class="rounded-circle m-r-5" alt="" /> Joshua Guzman</td>
											<td>34</td>
											<td>Hoshangabad Road , Bhopal</td>
											<td>00 00 00 00 00</td>
											<td>pan Card</td>
											<td className="text-center">
												<div className="dropdown dropdown-action">
												<a href="#" className="action-icon dropdown-toggle"	data-toggle="dropdown" aria-expanded="false">
													<i className="fa fa-ellipsis-v"></i>
												</a>
												<div className="dropdown-menu dropdown-menu-right">
													<a className="dropdown-item" data-toggle="modal" data-target="#EditCustomerModalLong"  >                           
														<i className="fa fa-pencil m-r-5"></i> Edit
													</a>
													<a className="dropdown-item" href="#" data-toggle="modal"data-target="#delete_employee"	>
													<i className="fa fa-trash-o m-r-5"></i> Delete
													</a>
												</div>
											</div>
											</td>
										</tr>
										<tr>
											<td><img width="28" height="28" src="../assets/img/user.jpg" class="rounded-circle m-r-5" alt="" /> Julia Sims</td>
											<td>27</td>
											<td>Piplani , Bhopal</td>
											<td>00 00 00 00 00</td>
											<td>Electronics</td>
											<td className="text-center">
												<div className="dropdown dropdown-action">
												<a href="#" className="action-icon dropdown-toggle"	data-toggle="dropdown" aria-expanded="false">
													<i className="fa fa-ellipsis-v"></i>
												</a>
												<div className="dropdown-menu dropdown-menu-right">
													<a className="dropdown-item" data-toggle="modal" data-target="#EditCustomerModalLong"  >                           
														<i className="fa fa-pencil m-r-5"></i> Edit
													</a>
													<a className="dropdown-item" href="#" data-toggle="modal"data-target="#delete_employee"	>
													<i className="fa fa-trash-o m-r-5"></i> Delete
													</a>
												</div>
											</div>
											</td>
										</tr>
										<tr>
											<td><img width="28" height="28" src="../assets/img/user.jpg" class="rounded-circle m-r-5" alt="" /> Linda Carpenter</td>
											<td>24</td>
											<td>New Market, Bhopal</td>
											<td>05 85 45 45 75 </td>
											<td>Online Service</td>
											<td className="text-center">
												<div className="dropdown dropdown-action">
												<a href="#" className="action-icon dropdown-toggle"	data-toggle="dropdown" aria-expanded="false">
													<i className="fa fa-ellipsis-v"></i>
												</a>
												<div className="dropdown-menu dropdown-menu-right">
													<a className="dropdown-item" data-toggle="modal" data-target="#EditCustomerModalLong"  >                           
														<i className="fa fa-pencil m-r-5"></i> Edit
													</a>
													<a className="dropdown-item" href="#" data-toggle="modal"data-target="#delete_employee"	>
													<i className="fa fa-trash-o m-r-5"></i> Delete
													</a>
												</div>
											</div>
											</td>
										</tr>
										<tr>
											<td><img width="28" height="28" src="../assets/img/user.jpg" class="rounded-circle m-r-5" alt="" /> Melissa Burton</td>
											<td>35</td>
											<td>3321 N 26th St, Milwaukee, WI, 53206</td>
											<td>(192) 494 8073</td>
											<td>Electronics</td>
											<td className="text-center">
												<div className="dropdown dropdown-action">
												<a href="#" className="action-icon dropdown-toggle"	data-toggle="dropdown" aria-expanded="false">
													<i className="fa fa-ellipsis-v"></i>
												</a>
												<div className="dropdown-menu dropdown-menu-right">
													<a className="dropdown-item" data-toggle="modal" data-target="#EditCustomerModalLong"  >                           
														<i className="fa fa-pencil m-r-5"></i> Edit
													</a>
													<a className="dropdown-item" href="#" data-toggle="modal"data-target="#delete_employee"	>
													<i className="fa fa-trash-o m-r-5"></i> Delete
													</a>
												</div>
											</div>
											</td>
										</tr>
										<tr>
											<td><img width="28" height="28" src="../assets/img/user.jpg" class="rounded-circle m-r-5" alt="" /> Patrick Knight</td>
											<td>21</td>
											<td>Piplani , Bhopal</td>
											<td>(785) 580 4514</td>
											<td>pan Card</td>
											<td className="text-center">
												<div className="dropdown dropdown-action">
												<a href="#" className="action-icon dropdown-toggle"	data-toggle="dropdown" aria-expanded="false">
													<i className="fa fa-ellipsis-v"></i>
												</a>
												<div className="dropdown-menu dropdown-menu-right">
													<a className="dropdown-item" data-toggle="modal" data-target="#EditCustomerModalLong"  >                           
														<i className="fa fa-pencil m-r-5"></i> Edit
													</a>
													<a className="dropdown-item" href="#" data-toggle="modal"data-target="#delete_employee"	>
													<i className="fa fa-trash-o m-r-5"></i> Delete
													</a>
												</div>
											</div>
											</td>
										</tr>
										<tr>
											<td><img width="28" height="28" src="../assets/img/user.jpg" class="rounded-circle m-r-5" alt="" /> Denise Stevens</td>
											<td>37</td>
											<td>Ayodhya Nagar , Bhopal</td>
											<td>11 22 00 33 44</td>
											<td>Electronics</td>
											<td className="text-center">
												<div className="dropdown dropdown-action">
												<a href="#" className="action-icon dropdown-toggle"	data-toggle="dropdown" aria-expanded="false">
													<i className="fa fa-ellipsis-v"></i>
												</a>
												<div className="dropdown-menu dropdown-menu-right">
													<a className="dropdown-item" data-toggle="modal" data-target="#EditCustomerModalLong"  >                           
														<i className="fa fa-pencil m-r-5"></i> Edit
													</a>
													<a className="dropdown-item" href="#" data-toggle="modal"data-target="#delete_employee"	>
													<i className="fa fa-trash-o m-r-5"></i> Delete
													</a>
												</div>
											</div>
											</td>
										</tr>
										<tr>
											<td><img width="28" height="28" src="../assets/img/user.jpg" class="rounded-circle m-r-5" alt="" /> Judy Clark</td>
											<td>22</td>
											<td>New Market Bhopal</td>
											<td>05 85 45 45 75 </td>
											<td>Online Service</td>
											<td className="text-center">
												<div className="dropdown dropdown-action">
												<a href="#" className="action-icon dropdown-toggle"	data-toggle="dropdown" aria-expanded="false">
													<i className="fa fa-ellipsis-v"></i>
												</a>
												<div className="dropdown-menu dropdown-menu-right">
													<a className="dropdown-item" data-toggle="modal" data-target="#EditCustomerModalLong"  >                           
														<i className="fa fa-pencil m-r-5"></i> Edit
													</a>
													<a className="dropdown-item" href="#" data-toggle="modal"data-target="#delete_employee"	>
													<i className="fa fa-trash-o m-r-5"></i> Delete
													</a>
												</div>
											</div>
											</td>
										</tr>
										<tr>
											<td><img width="28" height="28" src="../assets/img/user.jpg" class="rounded-circle m-r-5" alt="" /> Dennis Salazar</td>
											<td>34</td>
											<td>Ayodhya Nagar , Bhopal</td>
											<td>05 85 45 45 75 </td>
											<td>pan Card</td>
											<td className="text-center">
												<div className="dropdown dropdown-action">
												<a href="#" className="action-icon dropdown-toggle"	data-toggle="dropdown" aria-expanded="false">
													<i className="fa fa-ellipsis-v"></i>
												</a>
												<div className="dropdown-menu dropdown-menu-right">
													<a className="dropdown-item" data-toggle="modal" data-target="#EditCustomerModalLong"  >                           
														<i className="fa fa-pencil m-r-5"></i> Edit
													</a>
													<a className="dropdown-item" href="#" data-toggle="modal"data-target="#delete_employee"	>
													<i className="fa fa-trash-o m-r-5"></i> Delete
													</a>
												</div>
											</div>
											</td>
										</tr>
										<tr>
											<td><img width="28" height="28" src="../assets/img/user.jpg" class="rounded-circle m-r-5" alt="" /> Charles Ortega</td>
											<td>32</td>
											<td>New Market, Bhopal</td>
											<td>05 85 45 45 75 </td>
											<td>Electronics</td>
											<td className="text-center">
												<div className="dropdown dropdown-action">
												<a href="#" className="action-icon dropdown-toggle"	data-toggle="dropdown" aria-expanded="false">
													<i className="fa fa-ellipsis-v"></i>
												</a>
												<div className="dropdown-menu dropdown-menu-right">
													<a className="dropdown-item" data-toggle="modal" data-target="#EditCustomerModalLong"  >                           
														<i className="fa fa-pencil m-r-5"></i> Edit
													</a>
													<a className="dropdown-item" href="#" data-toggle="modal"data-target="#delete_employee"	>
													<i className="fa fa-trash-o m-r-5"></i> Delete
													</a>
												</div>
											</div>
											</td>
										</tr>
										<tr>
											<td><img width="28" height="28" src="../assets/img/user.jpg" class="rounded-circle m-r-5" alt="" /> Sandra Mendez</td>
											<td>24</td>
											<td>Ayodhya Nagar , Bhopal</td>
											<td>(797) 506 1265</td>
											<td>pan Card</td>
											<td className="text-center">
												<div className="dropdown dropdown-action">
												<a href="#" className="action-icon dropdown-toggle"	data-toggle="dropdown" aria-expanded="false">
													<i className="fa fa-ellipsis-v"></i>
												</a>
												<div className="dropdown-menu dropdown-menu-right">
													<a className="dropdown-item" data-toggle="modal" data-target="#EditCustomerModalLong"  >                           
														<i className="fa fa-pencil m-r-5"></i> Edit
													</a>
													<a className="dropdown-item" href="#" data-toggle="modal"data-target="#delete_employee"	>
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
			<div class="modal fade" id="EditCustomerModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
				<div className="modal-dialog modal-xl" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 class="modal-title" id="exampleModalLongTitle">Edit Customer</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<div className="content">
								{/* <div className="row">
									<div className="col-lg-8 offset-lg-2">
										<h4 className="page-title">Edit Customer</h4>
									</div>
								</div> */}
								<div className="row">
									<div className="col-lg-8 offset-lg-2">
										<form>
											<div className="row">
												<div className="col-sm-6">
													<div className="form-group">
														<label>First Name <span className="text-danger">*</span></label>
														<input class="form-control" type="text" value="" placeHolder="First Name" />
													</div>
												</div>
												<div className="col-sm-6">
													<div className="form-group">
														<label>Last Name</label>
														<input class="form-control" type="text" value="" placeHolder="last Name" />
													</div>
												</div>
												<div className="col-sm-6">
													<div className="form-group">
														<label>Age <span className="text-danger">*</span></label>
														<input class="form-control" type="text" value="" placeHolder="Age" />
													</div>
												</div>
												<div className="col-sm-6">
													<div className="form-group">
														<label>Email <span className="text-danger">*</span></label>
														<input class="form-control" type="email" value="" placeHolder="xyz@gmail.com" />
													</div>
												</div>

												<div className="col-sm-6">
													<div className="form-group">
														<label>Date of Birth</label>
														<div className="cal-icon">
															<input type="text" className="form-control datetimepicker" />
														</div>
													</div>
												</div>
												<div className="col-sm-6">
													<div className="form-group gender-select">
														<label className="gen-label">Gender:</label>
														<div className="form-check-inline">
															<label className="form-check-label">
																<input type="radio" name="gender" className="form-check-input" checked />Male
															</label>
														</div>
														<div className="form-check-inline">
															<label className="form-check-label">
																<input type="radio" name="gender" className="form-check-input" />Female
															</label>
														</div>
													</div>
												</div>
												<div className="col-sm-12">
													<div className="row">
														<div className="col-sm-12">
															<div className="form-group">
																<label>Address</label>
																<input type="text" class="form-control" value="" placeHolder="Enter Addresss" />
															</div>
														</div>
														<div className="col-sm-6 col-md-6 col-lg-3">
															<div className="form-group">
																<label>Country</label>
																<select className="form-control">
																	<option selected>India</option>
																	{/* <!-- <option>United Kingdom</option> --> */}
																</select>
															</div>
														</div>
														<div className="col-sm-6 col-md-6 col-lg-3">
															<div className="form-group">
																<label>City</label>
																<input type="text" className="form-control" />
															</div>
														</div>
														<div className="col-sm-6 col-md-6 col-lg-3">
															<div className="form-group">
																<label>State/Province</label>
																<select className="form-control ">
																	<option>Madhya Pradesh</option>
																	<option>Utter Pradesh</option>
																	<option>Maharastra</option>
																	<option>Gujrat</option>
																	<option>Chhatisgarh</option>
																	<option>Goa</option>
																	<option>Delhi</option>
																	<option>Hariyana</option>
																	<option>Jammu & Kashmir</option>
																	<option>Himachal Pradesh</option>
																	<option>Andhra Pradesh</option>
																	<option>Manipur</option>
																	<option>Sikkim</option>
																	<option>Tamil Nadu</option>
																	<option>Meghalaya</option>
																	<option>Arunachal Pradesh</option>
																	<option>Assam</option>
																	<option>Jharkhand</option>
																	<option>Mizoram</option>
																	<option>Telangana</option>
																	<option>Tripura</option>
																	<option>Nagaland</option>
																	<option>Karnataka</option>
																	<option>Bihar</option>
																	<option>Punjab</option>
																	<option>Odisha</option>
																	<option>Uttarakhand</option>
																	<option>Rajasthan</option>
																	<option>West Bengal</option>
																	<option>Andaman and Nicobar Islands</option>
																	<option>Dadra and Nagar Haveli and Daman & Diu</option>
																	<option>Lakshadweep</option>
																	<option>Puducherry</option>
																	<option>Ladakh</option>
																	<option>Chandigarh</option>
																</select>
															</div>
														</div>
														<div className="col-sm-6 col-md-6 col-lg-3">
															<div className="form-group">
																<label>Postal Code</label>
																<input type="text" class="form-control" value="" placeHolder="Enter Pin Code" />
															</div>
														</div>
													</div>
												</div>
												<div className="col-sm-6">
													<div className="form-group">
														<label>Phone </label>
														<input class="form-control" type="text" value="" placeHolder="Enter Mobile No." />
													</div>
												</div>
												<div className="col-sm-6">
													<div className="form-group">
														<label>Image</label>
														<div className="profile-upload">
															<div className="upload-img">
																<img alt="" src="assets/img/user.jpg" />
															</div>
															<div className="upload-input">
																<input type="file" className="form-control" />
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="form-group">
												<label className="display-block">Status</label>
												<div className="form-check form-check-inline">
													<input class="form-check-input" type="radio" name="status" id="product_active" value="option1" checked />
													<label class="htmlForm-check-label" for="product_active">
														Active
													</label>
												</div>
												<div className="form-check form-check-inline">
													<input class="form-check-input" type="radio" name="status" id="product_inactive" value="option2" />
													<label class="htmlForm-check-label" for="product_inactive">
														Inactive
													</label>
												</div>
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
							<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
							<button className="btn btn-primary submit-btn">Save</button>

						</div>
					</div>
				</div>
			</div>
		</>
	)
}
