import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';

const NewArrivel = () => {
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
        <>
            <div className='container'>
                <div class="separator pb-4">
                    <div class="line"></div>
                    <h5 class="mb-0 fw-bold separator-title">New Arrivals</h5>
                    <div class="line"></div>
                </div>
                <OwlCarousel className='owl-theme ' margin={5} items={"4"} loop={true} mouseDrag={true} dots={false} autoplay={true}
                    {...options} nav>
                    
                    <div class='item'>
                        <div class="card">
                            <div class="position-relative overflow-hidden">
                                <div class="add-cart position-absolute top-0 end-0 mt-3 me-3">
                                    <a href="javascript:;"><i class='bx bx-cart-add'></i></a>
                                </div>
                                <div class="quick-view position-absolute start-0 bottom-0 end-0">
                                    <a href="javascript:;" data-bs-toggle="modal"
                                        data-bs-target="#QuickViewProduct">Quick View</a>
                                </div>
                                <a href="javascript:;">
                                    <img src="./images/products/13.png" class="img-fluid"
                                        alt="..." />
                                </a>
                            </div>
                            <div class="card-body">
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="">
                                        <p class="mb-1 product-short-name">ACCESSORIES</p>
                                        <h6 class="mb-0 fw-bold product-short-title">White Polo Shirt
                                        </h6>
                                    </div>
                                    <div class="icon-wishlist">
                                        <a href="javascript:;"><i class="bx bx-heart"></i></a>
                                    </div>
                                </div>
                                <div class="cursor-pointer text-start  rating mt-2">
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                </div>
                                <div
                                    class="product-price d-flex align-items-center justify-content-start gap-2 mt-2">
                                    <div
                                        class="h6 fw-light fw-bold text-secondary text-decoration-line-through">
                                        &#x20B9; 59.00</div>
                                    <div class="h6 fw-bold">&#x20B9; 48.00</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class='item'>
                        <div class="card">
                            <div class="position-relative overflow-hidden">
                                <div class="add-cart position-absolute top-0 end-0 mt-3 me-3">
                                    <a href="javascript:;"><i class='bx bx-cart-add'></i></a>
                                </div>
                                <div class="quick-view position-absolute start-0 bottom-0 end-0">
                                    <a href="javascript:;" data-bs-toggle="modal"
                                        data-bs-target="#QuickViewProduct">Quick View</a>
                                </div>
                                <a href="javascript:;">
                                    <img src="./images/products/14.png" class="img-fluid"
                                        alt="..." />
                                </a>
                            </div>
                            <div class="card-body ">
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="">
                                        <p class="mb-1 product-short-name">ACCESSORIES</p>
                                        <h6 class="mb-0 fw-bold product-short-title">White Polo Shirt
                                        </h6>
                                    </div>
                                    <div class="icon-wishlist">
                                        <a href="javascript:;"><i class="bx bx-heart"></i></a>
                                    </div>
                                </div>
                                <div class="cursor-pointer rating mt-2">
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                </div>
                                <div
                                    class="product-price d-flex align-items-center justify-content-start gap-2 mt-2">
                                    <div
                                        class="h6 fw-light fw-bold text-secondary text-decoration-line-through">
                                        &#x20B9; 59.00</div>
                                    <div class="h6 fw-bold">&#x20B9; 48.00</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class='item'>
                        <div class="card">
                            <div class="position-relative overflow-hidden">
                                <div class="add-cart position-absolute top-0 end-0 mt-3 me-3">
                                    <a href="javascript:;"><i class='bx bx-cart-add'></i></a>
                                </div>
                                <div class="quick-view position-absolute start-0 bottom-0 end-0">
                                    <a href="javascript:;" data-bs-toggle="modal"
                                        data-bs-target="#QuickViewProduct">Quick View</a>
                                </div>
                                <a href="javascript:;">
                                    <img src="./images/products/13.png" class="img-fluid"
                                        alt="..." />
                                </a>
                            </div>
                            <div class="card-body ">
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="">
                                        <p class="mb-1 product-short-name">ACCESSORIES</p>
                                        <h6 class="mb-0 fw-bold product-short-title">White Polo Shirt
                                        </h6>
                                    </div>
                                    <div class="icon-wishlist">
                                        <a href="javascript:;"><i class="bx bx-heart"></i></a>
                                    </div>
                                </div>
                                <div class="cursor-pointer text-start rating mt-2">
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                </div>
                                <div
                                    class="product-price d-flex align-items-center justify-content-start gap-2 mt-2">
                                    <div
                                        class="h6 fw-light fw-bold text-secondary text-decoration-line-through">
                                        &#x20B9; 59.00</div>
                                    <div class="h6 fw-bold">&#x20B9; 48.00</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class='item'>
                        <div class="card">
                            <div class="position-relative overflow-hidden">
                                <div class="add-cart position-absolute top-0 end-0 mt-3 me-3">
                                    <a href="javascript:;"><i class='bx bx-cart-add'></i></a>
                                </div>
                                <div class="quick-view position-absolute start-0 bottom-0 end-0">
                                    <a href="javascript:;" data-bs-toggle="modal"
                                        data-bs-target="#QuickViewProduct">Quick View</a>
                                </div>
                                <a href="javascript:;">
                                    <img src="./images/products/14.png" class="img-fluid"
                                        alt="..." />
                                </a>
                            </div>
                            <div class="card-body ">
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="">
                                        <p class="mb-1 product-short-name">ACCESSORIES</p>
                                        <h6 class="mb-0 fw-bold product-short-title">White Polo Shirt
                                        </h6>
                                    </div>
                                    <div class="icon-wishlist">
                                        <a href="javascript:;"><i class="bx bx-heart"></i></a>
                                    </div>
                                </div>
                                <div class="cursor-pointer text-start rating mt-2">
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                </div>
                                <div
                                    class="product-price d-flex align-items-center justify-content-start gap-2 mt-2">
                                    <div
                                        class="h6 fw-light fw-bold text-secondary text-decoration-line-through">
                                        &#x20B9; 59.00</div>
                                    <div class="h6 fw-bold">&#x20B9; 48.00</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class='item'>
                        <div class="card">
                            <div class="position-relative overflow-hidden">
                                <div class="add-cart position-absolute top-0 end-0 mt-3 me-3">
                                    <a href="javascript:;"><i class='bx bx-cart-add'></i></a>
                                </div>
                                <div class="quick-view position-absolute start-0 bottom-0 end-0">
                                    <a href="javascript:;" data-bs-toggle="modal"
                                        data-bs-target="#QuickViewProduct">Quick View</a>
                                </div>
                                <a href="javascript:;">
                                    <img src="./images/products/15.png" class="img-fluid"
                                        alt="..." />
                                </a>
                            </div>
                            <div class="card-body ">
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="">
                                        <p class="mb-1 product-short-name">ACCESSORIES</p>
                                        <h6 class="mb-0 fw-bold product-short-title">White Polo Shirt
                                        </h6>
                                    </div>
                                    <div class="icon-wishlist">
                                        <a href="javascript:;"><i class="bx bx-heart"></i></a>
                                    </div>
                                </div>
                                <div class="cursor-pointer text-start rating mt-2">
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                </div>
                                <div
                                    class="product-price d-flex align-items-center justify-content-start gap-2 mt-2">
                                    <div
                                        class="h6 fw-light fw-bold text-secondary text-decoration-line-through">
                                        &#x20B9; 59.00</div>
                                    <div class="h6 fw-bold">&#x20B9; 48.00</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class='item'>
                        <div class="card">
                            <div class="position-relative overflow-hidden">
                                <div class="add-cart position-absolute top-0 end-0 mt-3 me-3">
                                    <a href="javascript:;"><i class='bx bx-cart-add'></i></a>
                                </div>
                                <div class="quick-view position-absolute start-0 bottom-0 end-0">
                                    <a href="javascript:;" data-bs-toggle="modal"
                                        data-bs-target="#QuickViewProduct">Quick View</a>
                                </div>
                                <a href="javascript:;">
                                    <img src="./images/products/16.png" class="img-fluid"
                                        alt="..." />
                                </a>
                            </div>
                            <div class="card-body ">
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="">
                                        <p class="mb-1 product-short-name">ACCESSORIES</p>
                                        <h6 class="mb-0 fw-bold product-short-title">White Polo Shirt
                                        </h6>
                                    </div>
                                    <div class="icon-wishlist">
                                        <a href="javascript:;"><i class="bx bx-heart"></i></a>
                                    </div>
                                </div>
                                <div class="cursor-pointer text-start rating mt-2">
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                </div>
                                <div
                                    class="product-price d-flex align-items-center justify-content-start gap-2 mt-2">
                                    <div
                                        class="h6 fw-light fw-bold text-secondary text-decoration-line-through">
                                        &#x20B9; 59.00</div>
                                    <div class="h6 fw-bold">&#x20B9; 48.00</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class='item'>
                        <div class="card">
                            <div class="position-relative overflow-hidden">
                                <div class="add-cart position-absolute top-0 end-0 mt-3 me-3">
                                    <a href="javascript:;"><i class='bx bx-cart-add'></i></a>
                                </div>
                                <div class="quick-view position-absolute start-0 bottom-0 end-0">
                                    <a href="javascript:;" data-bs-toggle="modal"
                                        data-bs-target="#QuickViewProduct">Quick View</a>
                                </div>
                                <a href="javascript:;">
                                    <img src="./images/products/17.png" class="img-fluid"
                                        alt="..." />
                                </a>
                            </div>
                            <div class="card-body ">
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="">
                                        <p class="mb-1 product-short-name">ACCESSORIES</p>
                                        <h6 class="mb-0 fw-bold product-short-title">White Polo Shirt
                                        </h6>
                                    </div>
                                    <div class="icon-wishlist">
                                        <a href="javascript:;"><i class="bx bx-heart"></i></a>
                                    </div>
                                </div>
                                <div class="cursor-pointer text-start rating mt-2">
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                </div>
                                <div
                                    class="product-price d-flex align-items-center justify-content-start gap-2 mt-2">
                                    <div
                                        class="h6 fw-light fw-bold text-secondary text-decoration-line-through">
                                        &#x20B9; 59.00</div>
                                    <div class="h6 fw-bold">&#x20B9; 48.00</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class='item'>
                        <div class="card">
                            <div class="position-relative overflow-hidden">
                                <div class="add-cart position-absolute top-0 end-0 mt-3 me-3">
                                    <a href="javascript:;"><i class='bx bx-cart-add'></i></a>
                                </div>
                                <div class="quick-view position-absolute start-0 bottom-0 end-0">
                                    <a href="javascript:;" data-bs-toggle="modal"
                                        data-bs-target="#QuickViewProduct">Quick View</a>
                                </div>
                                <a href="javascript:;">
                                    <img src="./images/products/18.png" class="img-fluid"
                                        alt="..." />
                                </a>
                            </div>
                            <div class="card-body ">
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="">
                                        <p class="mb-1 product-short-name">ACCESSORIES</p>
                                        <h6 class="mb-0 fw-bold product-short-title">White Polo Shirt
                                        </h6>
                                    </div>
                                    <div class="icon-wishlist">
                                        <a href="javascript:;"><i class="bx bx-heart"></i></a>
                                    </div>
                                </div>
                                <div class="cursor-pointer text-start rating mt-2">
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                </div>
                                <div
                                    class="product-price d-flex align-items-center justify-content-start gap-2 mt-2">
                                    <div
                                        class="h6 fw-light fw-bold text-secondary text-decoration-line-through">
                                        &#x20B9; 59.00</div>
                                    <div class="h6 fw-bold">&#x20B9; 48.00</div>
                                </div>
                            </div>
                        </div>
                    </div>


                </OwlCarousel>
            </div>
        </>
    );
}

export default NewArrivel;
