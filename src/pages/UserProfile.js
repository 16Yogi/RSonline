import React from 'react'
import ProSidebar from '../components/ProfileSideBar.js/ProSidebar'

export default function Profile() {
  return (
    
		<div className="page-wrapper">
			<div className="page-content">
				{/* <!--start breadcrumb--> */}
				<section className="py-3 border-bottom border-top d-none d-md-flex bg-light">
					<div className="container">
						<div className="page-breadcrumb d-flex align-items-center">
							<h3 className="breadcrumb-title pe-3">Profile</h3>
							<div className="ms-auto">
								<nav aria-label="breadcrumb">
									<ol className="breadcrumb mb-0 p-0">
										<li className="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i> Home</a>
										</li>
										<li class="breadcrumb-item"><a href="javascript:;">Account</a>
										</li>
										<li className="breadcrumb-item active" aria-current="page">Profile</li>
									</ol>
								</nav>
							</div>
						</div>
					</div>
				</section>
				{/* <!--end breadcrumb-->
				<!--start shop cart--> */}
				<section className="py-4">
					<div className="container">
						<h3 className="d-none">Account</h3>
						<div className="card">
							<div className="card-body">
								<div className="row">
									<ProSidebar/>
									<div className="col-lg-8">
										<div className="card shadow-none mb-0 border">
											<div className="card-body">
												<form className="row g-3">
													<div className="col-md-6">
														<label className="form-label">First Name</label>
														<input type="text" class="form-control" value="Madison"/>
													</div>
													<div className="col-md-6">
														<label className="form-label">Last Name</label>
														<input type="text" class="form-control" value="Ruiz"/>
													</div>
													<div className="col-12">
														<label className="form-label">Display Name</label>
														<input type="text" class="form-control" value="Madison Ruiz"/>
													</div>
													<div className="col-12">
														<label className="form-label">Email address</label>
														<input type="text" class="form-control" value="madison.ruiz@gmail.com"/>
													</div>
													<div className="col-12">
														<label className="form-label">Current Password</label>
														<input type="text" class="form-control" value="................."/>
													</div>
													<div className="col-12">
														<label className="form-label">New Password</label>
														<input type="text" class="form-control" value="................."/>
													</div>
													<div className="col-12">
														<label className="form-label">Confirm New Password</label>
														<input type="text" class="form-control" value="................."/>
													</div>
													<div className="col-12">
														<button type="button" className="btn btn-dark btn-ecomm">Save Changes</button>
													</div>
												</form>
											</div>
										</div>
									</div>
								</div>
								{/* <!--end row--> */}
							</div>
						</div>
					</div>
				</section>
				{/* <!--end shop cart--> */}
			</div>
		</div>
		
  )
}
