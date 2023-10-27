import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
       <>
        <footer>
                <section class="py-5 border-top bg-light">
                    <div class="container">
                        <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-4">
                            <div class="col">
                                <div class="footer-section1">
                                    <h5 class="mb-4 text-uppercase fw-bold">Contact Info</h5>
                                    <div class="address mb-3">
                                        <h6 class="mb-0 text-uppercase fw-bold">Address</h6>
                                        <p class="mb-0">123 Street Name, City, Australia</p>
                                    </div>
                                    <div class="phone mb-3">
                                        <h6 class="mb-0 text-uppercase fw-bold">Phone</h6>
                                        <p class="mb-0">Toll Free (123) 472-796</p>
                                        <p class="mb-0">Mobile : +91-9910XXXX</p>
                                    </div>
                                    <div class="email mb-3">
                                        <h6 class="mb-0 text-uppercase fw-bold">Email</h6>
                                        <p class="mb-0">mail@example.com</p>
                                    </div>
                                    <div class="working-days mb-3">
                                        <h6 class="mb-0 text-uppercase fw-bold">WORKING DAYS</h6>
                                        <p class="mb-0">Mon - FRI / 9:30 AM - 6:30 PM</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="footer-section2">
                                    <h5 class="mb-4 text-uppercase fw-bold">Categories</h5>
                                    <ul class="list-unstyled" >
                                        <li class="mb-1"><Link to="" style={{textDecoration:"none"}}><i class='bx bx-chevron-right'></i>
                                                Jeans</Link>
                                        </li>
                                        <li class="mb-1"><Link to="" style={{textDecoration:"none"}}><i class='bx bx-chevron-right'></i>
                                                T-Shirts</Link>
                                        </li>
                                        <li class="mb-1"><Link to="" style={{textDecoration:"none"}}><i class='bx bx-chevron-right'></i>
                                                Sports</Link>
                                        </li>
                                        <li class="mb-1"><Link to="" style={{textDecoration:"none"}}><i class='bx bx-chevron-right'></i>
                                                Shirts & Tops</Link>
                                        </li>
                                        <li class="mb-1"><Link to="" style={{textDecoration:"none"}}><i class='bx bx-chevron-right'></i>
                                                Clogs & Mules</Link>
                                        </li>
                                        <li class="mb-1"><Link to="" style={{textDecoration:"none"}}><i class='bx bx-chevron-right'></i>
                                                Sunglasses</Link>
                                        </li>
                                        <li class="mb-1"><Link to="" style={{textDecoration:"none"}}><i class='bx bx-chevron-right'></i> Bags
                                                & Wallets</Link>
                                        </li>
                                        <li class="mb-1"><Link to="" style={{textDecoration:"none"}}><i class='bx bx-chevron-right'></i>
                                                Sneakers & Athletic</Link>
                                        </li>
                                        <li class="mb-1"><Link to="" style={{textDecoration:"none"}}><i class='bx bx-chevron-right'></i>
                                                Electronis</Link>
                                        </li>
                                        <li class="mb-1"><Link to="" style={{textDecoration:"none"}}><i class='bx bx-chevron-right'></i>
                                                Furniture</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col">
                                <div class="footer-section3">
                                    <h5 class="mb-4 text-uppercase fw-bold">Popular Tags</h5>
                                    <div class="tags-box d-flex flex-wrap gap-2">
                                        <Link to="" class="btn btn-ecomm btn-outline-dark" >Cloths</Link>
                                        <Link to="" class="btn btn-ecomm btn-outline-dark">Electronis</Link>
                                        <Link to="" class="btn btn-ecomm btn-outline-dark">Furniture</Link>
                                        <Link to="" class="btn btn-ecomm btn-outline-dark">Sports</Link>
                                        <Link to="" class="btn btn-ecomm btn-outline-dark">Men Wear</Link>
                                        <Link to="" class="btn btn-ecomm btn-outline-dark">Women Wear</Link>
                                        <Link to="" class="btn btn-ecomm btn-outline-dark">Laptops</Link>
                                        <Link to="" class="btn btn-ecomm btn-outline-dark">Formal Shirts</Link>
                                        <Link to="" class="btn btn-ecomm btn-outline-dark">Topwear</Link>
                                        <Link to="" class="btn btn-ecomm btn-outline-dark">Headphones</Link>
                                        <Link to="" class="btn btn-ecomm btn-outline-dark">Bottom Wear</Link>
                                        <Link to="" class="btn btn-ecomm btn-outline-dark">Bags</Link>
                                        <Link to="" class="btn btn-ecomm btn-outline-dark">Sofa</Link>
                                        <Link to="" class="btn btn-ecomm btn-outline-dark">Shoes</Link>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="footer-section4">
                                    <h5 class="mb-4 text-uppercase fw-bold">Stay informed</h5>
                                    <div class="subscribe">
                                        <input type="text" class="form-control" placeholder="Enter Your Email" />
                                        <div class="mt-3 d-grid">
                                            <Link to="" class="btn btn-dark btn-ecomm">Subscribe</Link>
                                        </div>
                                        <p class="mt-3 mb-0">Subscribe to our newsletter to receive early discount
                                            offers, updates and new products info.</p>
                                    </div>
                                    <div class="download-app mt-3">
                                        <h6 class="mb-3 text-uppercase fw-bold">Download our app</h6>
                                        <div class="d-flex align-items-center gap-2">
                                            <Link to="">
                                                <img src="/images/icons/apple-store.png" class="" width="140"
                                                    alt="" />
                                            </Link>
                                            <Link to="">
                                                <img src="/images/icons/play-store.png" class="" width="140"
                                                    alt="" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!--end row--> */}
                    </div>
                </section>

                <section class="footer-strip text-center py-3 border-top positon-absolute bottom-0">
                    <div class="container">
                        <div class="d-flex flex-column flex-lg-row align-items-center gap-3 justify-content-between">
                            <p class="mb-0">Copyright © 2022. All right reserved.</p>
                            <div class="payment-icon">
                                <div class="row row-cols-auto g-2 justify-content-end">
                                    <div class="col">
                                        <img src="/images/icons/visa.png" alt="" />
                                    </div>
                                    <div class="col">
                                        <img src="/images/icons/paypal.png" alt="" />
                                    </div>
                                    <div class="col">
                                        <img src="/images/icons/mastercard.png" alt="" />
                                    </div>
                                    <div class="col">
                                        <img src="/images/icons/american-express.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </footer>
       </>
    );
}

export default Footer;
