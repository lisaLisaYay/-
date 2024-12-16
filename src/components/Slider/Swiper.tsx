import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { gsap } from "gsap";

import { YearInfo, YearTitle } from "./Slider.styles";
import "./swipe.css";
import arrowImg from "../../assets/images/swiperArrow.svg"

import { Stamp } from "../../types/data.types";

import "swiper/css";
import "swiper/css/navigation";

interface SwiperProps {
  slides: Stamp[];
}

function DateSwiper({ slides }: SwiperProps) {
  const swiperRef = useRef(null);

  useEffect(() => {
    const slidesElements = document.querySelectorAll(".swiper-slide");
    gsap.killTweensOf(slidesElements);

    gsap.fromTo(
      slidesElements,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.8,
        delay: 0.4,
        stagger: 0.02,
      }
    );
  }, [slides]);

  return (
    <div className="swiperContainer">
      <Swiper
        spaceBetween={15}
        slidesPerView="auto"
        style={{
          width: "90%",
          cursor: "grab",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        breakpoints={{
          1324: {
            spaceBetween: 80,
            loop: false,
          },
          768: {
            spaceBetween: 25,
            loop: false,
          },
          0: {
            spaceBetween: 25,
            loop: true,
          },
        }}
        navigation={{
          prevEl: ".custom-swiper-button-prev",
          nextEl: ".custom-swiper-button-next",
          disabledClass: "swiper-button-disabled",
        }}
        modules={[Navigation]}
        ref={swiperRef}
      >
        {slides.map((item) => {
          return (
            <SwiperSlide
              key={item.id}
              style={{
                height: "fit-content",
                gap: "15px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <YearTitle>{item.year}</YearTitle>
              <YearInfo>{item.info}</YearInfo>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="custom-swiper-button-prev"><img src={arrowImg} alt="previous" style={{ transform: 'scaleX(-1)' }} /></div>
      <div className="custom-swiper-button-next"><img src={arrowImg} alt="next" /></div>
    </div>
  );
}

export default DateSwiper;
