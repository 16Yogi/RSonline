import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
      >
        <SwiperSlide>
          <div class="position-relative">
            <div class="position-absolute top-50 slider-content translate-middle">
              <h3 class="h3 fw-bold d-none d-md-block">digital payment</h3>
              <h1 class="h1 fw-bold">Cashless Transactions</h1>
              <p class="fw-bold text-dark d-none d-md-block">
                <i>Last call for upto 15%</i>
              </p>
              <div class="">
                <a class="btn btn-dark btn-ecomm px-4" href="shop-grid.html">
                  Go For It
                </a>
              </div>
            </div>
            <a href="javascript:;">
              <img src="./images/banners/01.jpg" class="img-fluid" alt="..." />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="position-relative">
            <div class="position-absolute top-50 slider-content translate-middle">
              <h3 class="h3 fw-bold d-none d-md-block">money transfer</h3>
              <h1 class="h1 fw-bold">Anywhere You Want</h1>
              <p class="fw-bold text-dark d-none d-md-block">
                <i>Last call for upto 15%</i>
              </p>
              <div class="">
                <a class="btn btn-dark btn-ecomm px-4" href="shop-grid.html">
                  Transfer Now
                </a>
              </div>
            </div>
            <a href="javascript:;">
              <img src="./images/banners/02.jpg" class="img-fluid" alt="..." />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="position-relative">
            <div class="position-absolute top-50 slider-content translate-middle">
              <h3 class="h3 fw-bold d-none d-md-block">recharge Mobile</h3>
              <h1 class="h1 fw-bold">With Convenience</h1>
              <p class="fw-bold text-dark d-none d-md-block">
                <i>Last call for upto 15%</i>
              </p>
              <div class="">
                <a class="btn btn-dark btn-ecomm px-4" href="shop-grid.html">
                  Recharge Now
                </a>
              </div>
            </div>
            <a href="javascript:;">
              <img src="./images/banners/03.jpg" class="img-fluid" alt="..." />
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
