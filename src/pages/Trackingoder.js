import React, { useState } from 'react'

export default function Trackingoder() {
    const [state, setstate] = useState("bhopal");
       return <>
       <div className="page-wrapper">
           <div className="page-content">
               {/* <!--start breadcrumb--> */}
               <section className="py-3 border-bottom border-top d-none d-md-flex bg-light">
                   <div className="container">
                       <div className="page-breadcrumb d-flex align-items-center">
                           <h3 className="breadcrumb-title pe-3">Tracking</h3>
                           <div className="ms-auto">
                               <nav aria-label="breadcrumb">
                                   <ol className="breadcrumb mb-0 p-0">
                                       <li className="breadcrumb-item"><a href="javascript:;"><i className="bx bx-home-alt"></i> Home</a>
                                       </li>
                                       <li className="breadcrumb-item"><a href="javascript:;">Shop</a>
                                       </li>
                                       <li className="breadcrumb-item active" aria-current="page">Order Tracking</li>
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
                       <h6 className="mb-0">Order ID: OD45345345435</h6>
                       <hr />
                       <div className="row row-cols-1 row-cols-lg-4 rounded-4 gx-3 m-0 border">
                           <div className="col p-4 text-center border-end">
                               <h6 className="mb-1">Estimated Delivery time:</h6>
                               <p className="mb-0">24 Apr 2021</p>
                           </div>
                           <div className="col p-4 text-center border-end">
                               <h6 className="mb-1">Shipping BY:</h6>
                               <p className="mb-0">BLUEDART | +91-9910XXXX</p>
                           </div>
                           <div className="col p-4 text-center border-end">
                               <h6 className="mb-1">Status:</h6>
                               <p className="mb-0">Picked by the courier</p>
                           </div>
                           <div className="col p-4 text-center">
                               <h6 className="mb-1">Tracking #:</h6>
                               <p className="mb-0">BD045903594059</p>
                           </div>
                       </div>
                       {/* <!--end row--> */}
                       <div className="mt-3"></div>
                       <div className="checkout-payment">
                           <div className="card bg-transparent rounded-0 shadow-none">
                               <div className="card-body">
                                   <div className="steps steps-light">
                                       <a className="step-item active" href="javascript:;">
                                           <div className="step-progress"><span className="step-count"><i className='bx bx-check'></i></span>
                                           </div>
                                           <div className="step-label">Order confirmed</div>
                                       </a>
                                       <a className="step-item active" href="javascript:;">
                                           <div className="step-progress"><span className="step-count"><i className='bx bx-user-circle' ></i></span>
                                           </div>
                                           <div className="step-label">Picked by courier</div>
                                       </a>
                                       <a className="step-item" href="javascript:;">
                                           <div className="step-progress"><span className="step-count"><i className='bx bx-car'></i></span>
                                           </div>
                                           <div className="step-label">On the way</div>
                                       </a>
                                       <a className="step-item" href="javascript:;">
                                           <div className="step-progress"><span className="step-count"><i className='bx bx-planet'></i></span>
                                           </div>
                                           <div className="step-label">Ready for pickup</div>
                                       </a>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </section>
               {/* <!--end shop cart--> */}
           </div>
       </div>
       {/* <!--end page wrapper --> */}
   </>
    
}
