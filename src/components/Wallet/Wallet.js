import React from "react";
import ProSidebar from "../ProfileSideBar.js/ProSidebar";
import {useState} from "react";

const d = new Date();
let day = d.getDate();
let month = d.getMonth();
let year = d.getFullYear();

export default function Wallet() {
  const [Money, setMoney] = useState(100);

  function moneySet() {}
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
                    <li className="breadcrumb-item">
                      <a href="javascript:;">
                        <i class="bx bx-home-alt"></i> Home
                      </a>
                    </li>
                    <li class="breadcrumb-item">
                      <a href="javascript:;">Account</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Dashboard
                    </li>
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
                  <ProSidebar />
                  <div className="col-lg-8">
                    <div className="card shadow-none mb-0">
                      <div className="card-body">
                        <div className=" border border-6 rounded-2 bg-light py-3 px-4">
                          <div className="row">
                            <div className="col-md-12">
                              <h5 className="fw-bold">Total Wallet Balance</h5>
                            </div>
                          </div>
                          <div className="row  ">
                            <div className="col-11 fw-bold ">
                              &#8377; 500.00
                            </div>
                            <div className="col-1">
                              <i className="bx bx-wallet text-warning fs-4 shadow-lg  rounded "></i>
                            </div>
                          </div>
                          <div className="row my-3 px-0">
                            <div className="col-12">
                              <h6 className="fw-bold"> Add Mony to Wallet</h6>
                            </div>
                            <div className="col-12 my-3">
                              <div class="input-group flex-nowrap">
                                <span
                                  class="input-group-text"
                                  id="addon-wrapping">
                                  {" "}
                                  &#8377;
                                </span>
                                <input
                                  type="number"
                                  className="form-control"
                                  placeholder={Money}
                                  aria-label="Username"
                                  aria-describedby="addon-wrapping"
                                  onChange={(e) => setMoney(e.target.value)}
                                />
                              </div>
                              <div className="col-12 my-4 p-0 ">
                                <a
                                  href="javascript:;"
                                  class=" btn services btn-block text-white w-100 badge-success rounded-3 ">
                                  Proceed To add {Money}
                                </a>
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-12">
                              <div class="accordion" id="accordionExample">
                                <div class="accordion-item">
                                  <h6 class="accordion-header  h-25 ">
                                    <button
                                      class="accordion-button  bg-opacity-75 bg-transparent text-green"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#collapseOne"
                                      aria-expanded="true"
                                      aria-controls="collapseOne">
                                      View History
                                    </button>
                                  </h6>
                                  <div
                                    id="collapseOne"
                                    class="accordion-collapse collapse "
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                      <div className="row g-3">
                                        <div className="col-7 text-green fw-bold">
                                          +500
                                        </div>
                                        <div className="col-3 text-green text-right">
                                          {day}/{month}/{year}{" "}
                                        </div>
                                        <div className="col-7 text-danger fw-bold">
                                          -250
                                        </div>
                                        <div className="col-3 text-green text-right">
                                          {day}/{month}/{year}{" "}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
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
  );
}
