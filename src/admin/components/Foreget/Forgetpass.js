import React from 'react'
import { Link } from 'react-router-dom'
export default function Forgetpass() {
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh',backgroundImage: "linear-gradient(to left top, #051937, #004d7a, #008793, #00bf72, #a8eb12)"}}>

      {/* <div className="main-wrapper account-wrapper">
        <div className="account-page">
			<div className="account-center">
                <div className="account-box">
                    <form class="form-signin" action="#">
						<div className="account-logo">
                            <a href="index-2.html"><img src="assets/img/logo-dark.png" alt=""/></a>
                        </div>
                        <div className="form-group">
                            <label>Current Password</label>
                            <input type="text" className="form-control" autofocus/>
                        </div>
                        <div className="form-group text-center">
                            <button class="btn btn-primary account-btn" type="submit">Reset Password</button>
                        </div>
                        <div className="text-center register-link">
                            <a href="login.html">Back to Login</a>
                        </div>
                    </form>
                </div>
			</div>
        </div>
    </div> */}
    <div className="main-wrapper">
        <div className="account-page">
            <div className="container">
                <div className="account-box">
                <h3 className="account-title mb-0">Change Password</h3>
                    <div className="account-wrapper">
                        
                        <form action="http://dreamguys.co.in/preclinic/template/index.html">
                        <div className="form-group">
                            <label className='fw-bold'>Registerd Email</label>
                            <input type="text" autofocus="" className="form-control shadow-sm border border-success rounded-pill"/>
                        </div>
                        <div className="form-group mb-0 text-center">
                                <button class="btn btn-success btn-block account-btn" type="submit">Send OTP</button>
                            </div>
                        
                        <div className="form-group">
                            <label className='fw-bold'>OTP</label>
                            <input type="password" className="form-control shadow-sm border border-success rounded-pill"/>
                        </div>
                        <div className="form-group">
                            <label className='fw-bold'>New Password</label>
                            <input type="password" className="form-control shadow-sm border border-success rounded-pill"/>
                        </div>
                        <div className="form-group">
                            <label className='fw-bold'>Confirm Password</label>
                            <input type="password" className="form-control shadow-sm border border-success rounded-pill"/>
                        </div>
                        
                            <div className="form-group mb-0 text-center">
                                <button class="btn btn-success btn-block account-btn" type="submit">Change Password</button>
                            </div>

                            <div className="form-group text-center mb-0 ">
                            <Link to="/admin-page">Back To Login</Link>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </div>
  )
}
