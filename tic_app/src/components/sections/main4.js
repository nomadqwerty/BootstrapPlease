import React from "react";
import {} from "swiper/react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../../css/carousel.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

const Carousel = () => {
  return (
    <div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            alt="carouselImage"
            src="https://swiperjs.com/demos/images/nature-1.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="carouselImage"
            src="https://swiperjs.com/demos/images/nature-2.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="carouselImage"
            src="https://swiperjs.com/demos/images/nature-3.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="carouselImage"
            src="https://swiperjs.com/demos/images/nature-4.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="carouselImage"
            src="https://swiperjs.com/demos/images/nature-5.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="carouselImage"
            src="https://swiperjs.com/demos/images/nature-6.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="carouselImage"
            src="https://swiperjs.com/demos/images/nature-7.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="carouselImage"
            src="https://swiperjs.com/demos/images/nature-8.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="carouselImage"
            src="https://swiperjs.com/demos/images/nature-9.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

const Main4 = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="row">
          <div className="col-lg-12 col-sm-12 col-12">
            <div className="main5">
              <Carousel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main4;
