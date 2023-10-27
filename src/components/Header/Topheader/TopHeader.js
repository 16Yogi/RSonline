import React from 'react'
import { Link } from 'react-router-dom'
export default function TopHeader() {
  return (
    <div className="top-menu bg-dark text-white">
    <div className="container">
        <nav className="navbar navbar-expand text-white">
            <div className="shiping-title d-none d-sm-flex">Welcome To RS Online Service!</div>
            <ul className="navbar-nav ms-auto d-none d-lg-flex">
                <li className="nav-item"><Link className="nav-link text-white" to="/Trackingoder">Track Order</Link>
                </li>
                {/* <li className="nav-item"><Link className="nav-link text-white" to="about-usrequired/>">About</Link>
                </li> */}
                {/* <li className="nav-item"><Link className="nav-link text-white" to="shop-categoriesrequired/>">Our Stores</Link>
                </li> */}
                <li className="nav-item"><Link className="nav-link text-white" to="/Blogs">Blog</Link>
                </li>
                <li className="nav-item"><Link className="nav-link text-white" to="contact-us">Contact</Link>
                </li>
                <li className="nav-item"><Link className="nav-link text-white" to="#">Become Retailer</Link>
                </li>
            </ul>
            {/* <!-- <ul className="navbar-nav">
                <li className="nav-item dropdown"> <Link className="nav-link dropdown-toggle" to="#"
                        data-bs-toggle="dropdown">INR</Link>
                    <ul className="dropdown-menu dropdown-menu-lg-end">
                        <li><Link className="dropdown-item" to="#">USD</Link>
                        </li>
                        <li><Link className="dropdown-item" to="#">EUR</Link>
                        </li>
                    </ul>
                </li>
                <li className="nav-item dropdown"> <Link className="nav-link dropdown-toggle" to="#"
                        data-bs-toggle="dropdown">ENG</Link>
                    <div className="dropdown-menu dropdown-menu-lg-end">
                        <Link className="dropdown-item d-flex allign-items-center" to="#"> <i
                                className="flag-icon flag-icon-de me-2"></i><span>German</span>
                        </Link> <Link className="dropdown-item d-flex allign-items-center" to="#"><i
                                className="flag-icon flag-icon-fr me-2"></i><span>French</span></Link>
                        <Link className="dropdown-item d-flex allign-items-center" to="#"><i
                                className="flag-icon flag-icon-um me-2"></i><span>English</span></Link>
                        <Link className="dropdown-item d-flex allign-items-center" to="#"><i
                                className="flag-icon flag-icon-in me-2"></i><span>Hindi</span></Link>
                        <Link className="dropdown-item d-flex allign-items-center" to="#"><i
                                className="flag-icon flag-icon-cn me-2"></i><span>Chinese</span></Link>
                        <Link className="dropdown-item d-flex allign-items-center" to="#"><i
                                className="flag-icon flag-icon-ae me-2"></i><span>Arabic</span></Link>
                    </div>
                </li>
            </ul> --> */}
            <ul className="navbar-nav social-link ms-lg-2 ms-auto">
                <li className="nav-item"> <Link className="nav-link text-white" to="#"><i
                            className='bx bxl-facebook'></i></Link>
                </li>
                <li className="nav-item"> <Link className="nav-link text-white" to="#"><i
                            className='bx bxl-twitter'></i></Link>
                </li>
                <li className="nav-item"> <Link className="nav-link text-white" to="#"><i
                            className='bx bxl-linkedin'></i></Link>
                </li>
            </ul>
        </nav>
    </div>
</div>
  )
}
