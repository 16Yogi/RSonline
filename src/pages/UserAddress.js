import React from 'react'
import ProSidebar from '../components/ProfileSideBar.js/ProSidebar'

export default function UserAddress() {
  return (
    <div className="page-wrapper">
			<div className="page-content">
				
				<section className="py-3 border-bottom border-top d-none d-md-flex bg-light">
					<div className="container">
						<div className="page-breadcrumb d-flex align-items-center">
							<h3 className="breadcrumb-title pe-3">Addresses</h3>
							<div className="ms-auto">
								<nav aria-label="breadcrumb">
									<ol className="breadcrumb mb-0 p-0">
										<li className="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i> Home</a>
										</li>
										<li class="breadcrumb-item"><a href="javascript:;">Account</a>
										</li>
										<li className="breadcrumb-item active" aria-current="page">Addresses</li>
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
												<h6 className="mb-4">The following addresses will be used on the checkuot page by default.</h6>
												<div className="row">
													<div className="col-12 col-lg-6">
														<h5 className="mb-3">Billing Addresses</h5>
												   <address>
													  Madison Riiz<br/>
													  123 Happy Street<br/>
													  Cape Town<br/>
													  Western Cape<br/>
													  8001<br/>
													  South Africa
												  </address>
													</div>
													<div className="col-12 col-lg-6">
														<h5 className="mb-3">Shipping Addresses</h5>
														<address>
														Madison Riiz<br/>
														123 Happy Street<br/>
														Cape Town<br/>
														Western Cape<br/>
														8001<br/>
														South Africa
													</address>
													</div>
												</div>
												
											</div>
										</div>
									</div>
								</div>
								
							</div>
						</div>
					</div>
				</section>
				
			</div>
		</div>
  )
}
