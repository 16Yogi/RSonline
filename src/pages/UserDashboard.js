import React from 'react'
import ProSidebar from '../components/ProfileSideBar.js/ProSidebar'

export default function UserDashboard() {
  return (
    <div className="page-wrapper">
			<div className="page-content">
				
				<section className="py-3 border-bottom border-top d-none d-md-flex bg-light">
					<div className="container">
						<div className="page-breadcrumb d-flex align-items-center">
							<h3 className="breadcrumb-title pe-3">Dashboard</h3>
							<div className="ms-auto">
								<nav aria-label="breadcrumb">
									<ol className="breadcrumb mb-0 p-0">
										<li className="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i> Home</a>
										</li>
										<li class="breadcrumb-item"><a href="javascript:;">Account</a>
										</li>
										<li className="breadcrumb-item active" aria-current="page">Dashboard</li>
									</ol>
								</nav>
							</div>
						</div>
					</div>
				</section>
				
				<section className="py-4">
					<div className="container">
						<h3 className="d-none">Account</h3>
						<div className="card">
							<div className="card-body">
								<div className="row">
									<ProSidebar/>
									<div className="col-lg-8">
										<div className="card shadow-none mb-0">
											<div className="card-body">
												<p>Hello <strong>Madison Ruiz</strong> (not <strong>Madison Ruiz?</strong>  <a href="javascript:;">Logout</a>)</p>
												<p>From your account dashboard you can view your Recent Orders, manage your shipping and billing addesses and edit your password and account details</p>
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
