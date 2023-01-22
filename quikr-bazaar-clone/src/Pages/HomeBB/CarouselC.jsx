import React from "react";
import cslcss from "./Carousel.module.css";
import Slider from "react-slick";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
//
let slides = [
  {
    img: "https://teja10.kuikr.com/i5/20230121/iPhone-SE-White-64-Gb-Updated-to-iOS-15-VB201705171774173-ak_WBP1791268228-1674314325.png",
    text: "iPhone-SE",
  },
  {
    img: "https://teja9.kuikr.com/i6/20230121/IPhone-14pro-max-5gDubai-aaa-high-productcod-available-VB201705171774173-ak_WBP1441459943-1674312901.png",
    text: "IPhone-14pro",
  },
  {
    img: "https://teja8.kuikr.com/i5/20230119/IPhone-14pro-max-5gDubai-aaa-high-productcod-available------Apple-Others-VB201705171774173-ak_WBP126365647-1674075753.pngg",
    text: "IPhone-",
  },
  {
    img: "https://teja10.kuikr.com/i6/20230119/IPhone-14pro-max-5gDubai-aaa-high-productcod-available------Apple-Others-VB201705171774173-ak_WBP1457931968-1674075820.png",
    text: "IPhone",
  },
  {
    img: "https://teja9.kuikr.com/i5/20230121/VAPORESSO-SWAG-PX80-brand-new-two-weeks-used-VB201705171774173-ak_LWBP1769809309-1674312211.jpeg",
    text: "VAPORESSO-SWAG",
  },
  {
    img: "https://teja9.kuikr.com/i5/20230121/VAPORESSO-SWAG-PX80-brand-new-two-weeks-used-VB201705171774173-ak_LWBP1769809309-1674312211.jpegg",
    text: "VAPORESSO-SWAG-PX80",
  },
  {
    img: "https://teja9.kuikr.com/i4/20230119/IPhone-14pro-max-5gDubai-aaa-high-productcod-available------Apple-Others-VB201705171774173-ak_WBP2084091969-1674075626.png",
    text: "Iphone",
  },
  {
    img: "https://teja9.kuikr.com/i4/20230119/IPhone-14pro-max-5gDubai-aaa-high-productcod-available------Apple-Others-VB201705171774173-ak_WBP367502103-1674073128.png",
    text: "Iphone",
  },
  {
    img: "https://teja10.kuikr.com/i5/20230119/IPhone-14pro-max-5gDubai-aaa-high-productcod-available5999rs-----Apple-Others-VB201705171774173-ak_WBP1262699008-1674072555.pngg",
    text: "14 pro",
  },
];

const CarouselC = () => {
  const slider = React.useRef(null);
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1164,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 724,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className={cslcss.carousel_main_div_c}>
      <button
        className={cslcss.slide_prev_btn}
        onClick={() => slider?.current?.slickPrev()}
      >
        <BiChevronLeft />
      </button>
      <Slider ref={slider} {...settings} className={cslcss.carousel_comp_main}>
        {slides.map((slide, index) => (
          <div key={index} className={cslcss.slides_card_c}>
            <div className={cslcss.image_card}>
              <img style={{ width: "60%" }} src={slide.img} alt="alt" />
            </div>
            <p>{slide.text}</p>
            <button
              style={{
                color: "white",
                border: "none",
                backgroundColor: "#0083ca",
              }}
            >
              VIEW
            </button>
          </div>
        ))}
      </Slider>
      <button
        className={cslcss.slide_next_btn}
        onClick={() => slider?.current?.slickNext()}
      >
        <BiChevronRight />
      </button>
    </div>
  );
};

export default CarouselC;
