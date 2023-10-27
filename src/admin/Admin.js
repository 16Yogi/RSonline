import React from 'react'
import { Link } from 'react-router-dom'

let adminIsLogedin = false

export default function Admin() {




  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh',backgroundImage: "linear-gradient(to left top, #051937, #004d7a, #008793, #00bf72, #a8eb12)"}}>
   <div className="main-wrapper account-wrapper rounded-2 ">
        <div className="account-page ">
			<div className="account-center  ">
				<div className="account-box rounded-3 shadow-lg ">
                    <form action="#" className="form-signin">
						<div className="account-logo">
                            <a href="index-2.html"><img src="assets/img/logo-dark.png" style={{filter:"drop-shadow(green 0.02rem 0.02rem 0.05rem",}} alt=""/></a>
                        </div>
                        <div className="form-group">
                            <label className='fw-bold'>Username or Email</label>
                            <input type="text" autofocus="" className="form-control shadow-sm border border-success rounded-pill"/>
                        </div>
                        <div className="form-group">
                            <label className='fw-bold'>Password</label>
                            <input type="password" className="form-control shadow-sm border border-success rounded-pill"/>
                        </div>
                        <div className="form-group text-right">
                            <Link to="/admin-page/reset-pass">Forgot your password?</Link>
                        </div>
                        <div className="form-group text-center">
                            <Link  to="/admin-page/Dashbord" className="btn btn-success text-white account-btn w-100 ">Login</Link>
                                {/* <!-- <button type="submit" className="btn btn-primary account-btn" >Login </button> --> */}
                        </div>
                        {/* <div className="text-center register-link">
                            Don’t have an account? <a href="register.html">Register Now</a>
                        </div> */}
                    </form>
                </div>
			</div>
        </div>
    </div>
    </div>
  )
}
