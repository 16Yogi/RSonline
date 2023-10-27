import React from "react";
import {Link} from "react-router-dom";

export default function ProSidebar() {

  var header = document.getElementById("list-group")
  console.log(header)
  // var btns = header.getElementsByClassName("list-group-item");


  // for (var i = 0; i < btns.length; i++) {
  //   btns[i].addEventListener("click", function() {
  //   var current = document.getElementsByClassName("badge-success");
  //   current[0].className = current[0].className.replace(" badge-success", "");
  //   this.className += " badge-success";
  //   });
  // }



  return (
    <div className="col-lg-4">
      <div className="card shadow-none mb-3 mb-lg-0 border">
        <div className="card-body">
          <div className="list-group list-group-flush " id="list-group">
            {" "}
            <Link
              to="/account-user-profile.html"
              className="list-group-item d-flex justify-content-between align-items-center  badge-success ">
              Profile <i className="bx bx-user-circle fs-5"></i>
            </Link>
            <Link
              to="/authentication-wallet.html"
              className="list-group-item d-flex justify-content-between align-items-center bg-transparent">
              Wallet <i className="bx bx-wallet fs-5"></i>
            </Link>
            <Link
              to="/account-dashboard.html"
              className="list-group-item d-flex justify-content-between align-items-center bg-transparent">
              Dashboard <i className="bx bx-tachometer fs-5"></i>
            </Link>
            <Link
              to="/account-orders.html"
              className="list-group-item  d-flex justify-content-between align-items-center bg-transparent">
              Orders <i className="bx bx-cart-alt fs-5"></i>
            </Link>
            {/* <Link
              to="/account-downloads.html"
              className="list-group-item d-flex justify-content-between align-items-center bg-transparent">
              Downloads <i className="bx bx-download fs-5"></i>
            </Link> */}
            <Link


              to="/account-addresses.html"
              className="list-group-item d-flex justify-content-between align-items-center bg-transparent">
              Addresses <i className="bx bx-home-smile fs-5"></i>
            </Link>
            <Link
              to="/account-payment-methods.html"
              className="list-group-item d-flex justify-content-between align-items-center bg-transparent">
              Payment Methods <i className="bx bx-credit-card fs-5"></i>
            </Link>
            <Link
              to="/"
              className="list-group-item d-flex justify-content-between align-items-center bg-transparent">
              Logout <i className="bx bx-log-out fs-5"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
