import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import { Link } from "react-router-dom";

//==================== images
import slider from "../assets/images/slider.jpg";
import slider2 from "../assets/images/slider2.jpg";
import slider3 from "../assets/images/slider3.jpg";

//=================== styles
const swiperStyle = "w-full h-[11em] md:h-[21em]";
const swiperSlideStyle =
  "text-center py-[4em] h-[11em] bg-[image:var(--image-url)] bg-cover bg-center md:py-[7.75em] md:h-[21em]";
export const pStyle =
  "text-[13px] sm:text-base text-[#E5F2E9] font-bold md:text-3xl lg:text-4xl";
export const buttonStyle =
  "bg-[#417F56] py-1.5 px-3 text-[10px] font-medium text-white rounded-md mt-3.5 md:mt-12 xl:mt-16 md:py-2 md:px-6 md:text-base ";

const Banner = () => {
  return (
    <>
      <Swiper
        pagination={true}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 3000 }}
        className={swiperStyle}
      >
        <SwiperSlide
          style={{ "--image-url": `url(${slider})` }}
          className={swiperSlideStyle}
        >
          <p className={pStyle}>تجربه غذای سالم و گیاهی به سبک ترخینه</p>
          <Link to="/menu">
            <button className={buttonStyle}>سفارش آنلاین غذا</button>
          </Link>
        </SwiperSlide>
        <SwiperSlide
          style={{ "--image-url": `url(${slider2})` }}
          className={swiperSlideStyle}
        >
          <p className={pStyle}>طعم بی‌نظیر طبیعت!</p>
          <Link to="/menu">
            <button className={buttonStyle}>سفارش آنلاین غذا</button>
          </Link>
        </SwiperSlide>
        <SwiperSlide
          style={{ "--image-url": `url(${slider3})` }}
          className={swiperSlideStyle}
        >
          <p className={pStyle}>
            لذت غذای سالم و گیاهی را با ترخینه تجربه کنید!
          </p>
          <Link to="/menu">
            <button className={buttonStyle}>سفارش آنلاین غذا</button>
          </Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
