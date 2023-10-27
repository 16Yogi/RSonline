import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
export default function SpecialOffer() {
    const options = {
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 5,
                nav: true,
                loop: false
            }
        }
    }
    return (
        <div>
            {/* <!--start Advertise banners--> */}
            <section class="py-4 bg-dark">
                <div class="container">
                    <div class="separator pb-4">
                        <div class="line"></div>
                        <h5 class="mb-0 fw-bold separator-title text-light">Special Offers</h5>
                        <div class="line"></div>
                    </div>

                    <OwlCarousel margin={5} items={"4"} loop={true} mouseDrag={true} dots={false} autoplay={true}
                        {...options} nav className='owl-theme text-center special-offers owl-carousel owl-theme position-relative'>
                        <div class="col d-flex" style={{ height: "80vh" }}>
                            <div class="card rounded-0 w-100 h-100 border-0 shadow-none">
                                <img src="./images/promo/04.png" class="img-fluid" alt="..." />
                                <div class="position-absolute top-0 end-0 m-3 product-discount"><span
                                    class="">-10%</span>
                                </div>
                                <div class="card-body text-center">
                                    <h5 class="card-title">Sunglasses Sale</h5>
                                    <p class="card-text">See all Sunglasses and get 10% off at all
                                        Sunglasses</p> <a href="javascript:;"
                                            class="btn btn-dark btn-ecomm">SHOP BY GLASSES</a>
                                </div>
                            </div>
                        </div>
                        <div class="col d-flex" style={{ height: "80vh" }}>
                            <div class="card rounded-0 w-100 h-100 border-0 shadow-none">
                                <img src="./images/promo/08.png" class="img-fluid" alt="..." />
                                <div class="position-absolute top-0 end-0 m-3 product-discount"><span
                                    class="">-80%</span>
                                </div>
                                <div class="card-body text-center">
                                    <h5 class="card-title">Cosmetics Sales</h5>
                                    <p class="card-text">Buy Cosmetics products and get 30% off at all
                                        Cosmetics</p> <a href="javascript:;"
                                            class="btn btn-dark btn-ecomm">SHOP
                                        BY COSMETICS</a>
                                </div>
                            </div>
                        </div>
                        <div class="col d-flex" style={{ height: "80vh" }}>
                            <div class="card rounded-0 w-100 h-100 border-0 shadow-none">
                                <img src="./images/promo/06.png" class="img-fluid h-100" alt="..." />
                                <div class="card-img-overlay text-center top-20">
                                    <div class="border border-white border-2 py-3 bg-dark-3">
                                        <h5 class="card-title text-white">Fashion Summer Sale</h5>
                                        <p class="card-text text-uppercase fs-1 lh-1 mt-3 mb-2 text-white">
                                            Up to 80% off</p>
                                        <p class="card-text fs-5 text-white">On Top Fashion Brands</p> <a
                                            href="javascript:;" class="btn btn-white btn-ecomm">SHOP BY
                                            FASHION</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col d-flex" style={{ height: "80vh" }}>
                            <div class="card rounded-0 w-100 h-100 border-0 shadow-none">
                                <div class="position-absolute top-0 end-0 m-3 product-discount"><span
                                    class="">-50%</span>
                                </div>
                                <img src="./images/promo/07.png" class="img-fluid" alt="..." />
                                <div class="card-body text-center">
                                    <h5 class="card-title fs-2 fw-bold text-uppercase">Super Sale</h5>
                                    <p class="card-text text-uppercase fs-5 lh-1 mb-2">Up to 50% off</p>
                                    <p class="card-text">On All Electronic</p> <a href="javascript:;"
                                        class="btn btn-dark btn-ecomm">HURRY UP!</a>
                                </div>
                            </div>
                        </div>
                        <div class="col d-flex" style={{ height: "80vh" }}>
                            <div class="card rounded-0 w-100 h-100 border-0 shadow-none">
                                <img src="./images/promo/04.png" class="img-fluid" alt="..." />
                                <div class="position-absolute top-0 end-0 m-3 product-discount"><span
                                    class="">-10%</span>
                                </div>
                                <div class="card-body text-center">
                                    <h5 class="card-title">Sunglasses Sale</h5>
                                    <p class="card-text">See all Sunglasses and get 10% off at all
                                        Sunglasses</p> <a href="javascript:;"
                                            class="btn btn-dark btn-ecomm">SHOP BY GLASSES</a>
                                </div>
                            </div>
                        </div>
                        <div class="col d-flex" style={{ height: "80vh" }}>
                            <div class="card rounded-0 w-100 h-100 border-0 shadow-none">
                                <img src="./images/promo/08.png" class="img-fluid" alt="..." />
                                <div class="position-absolute top-0 end-0 m-3 product-discount"><span
                                    class="">-80%</span>
                                </div>
                                <div class="card-body text-center">
                                    <h5 class="card-title">Cosmetics Sales</h5>
                                    <p class="card-text">Buy Cosmetics products and get 30% off at all
                                        Cosmetics</p> <a href="javascript:;"
                                            class="btn btn-dark btn-ecomm">SHOP
                                        BY COSMETICS</a>
                                </div>
                            </div>
                        </div>
                        <div class="col d-flex" style={{ height: "80vh" }}>
                            <div class="card rounded-0 w-100 h-100 border-0 shadow-none">
                                <img src="./images/promo/06.png" class="img-fluid h-100" alt="..." />
                                <div class="card-img-overlay text-center top-20">
                                    <div class="border border-white border-2 py-3 bg-dark-3">
                                        <h5 class="card-title text-white">Fashion Summer Sale</h5>
                                        <p class="card-text text-uppercase fs-1 lh-1 mt-3 mb-2 text-white">
                                            Up to 80% off</p>
                                        <p class="card-text fs-5 text-white">On Top Fashion Brands</p> <a
                                            href="javascript:;" class="btn btn-white btn-ecomm">SHOP BY
                                            FASHION</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col d-flex" style={{ height: "80vh" }}>
                            <div class="card rounded-0 w-100 h-100 border-0 shadow-none">
                                <div class="position-absolute top-0 end-0 m-3 product-discount"><span
                                    class="">-50%</span>
                                </div>
                                <img src="./images/promo/07.png" class="img-fluid" alt="..." />
                                <div class="card-body text-center">
                                    <h5 class="card-title fs-2 fw-bold text-uppercase">Super Sale</h5>
                                    <p class="card-text text-uppercase fs-5 lh-1 mb-2">Up to 50% off</p>
                                    <p class="card-text">On All Electronic</p> <a href="javascript:;"
                                        class="btn btn-dark btn-ecomm">HURRY UP!</a>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </section>
            {/* <!--end Advertise banners--> */}
        </div>
    )
}
