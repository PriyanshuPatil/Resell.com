import React from "react";
import cslcss from "./Carousel.module.css";
import Slider from "react-slick";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
//
let slides = [
  {
    img: "https://teja10.kuikr.com/i6/20230120/Rare--antiques-5-rupees-10-rupees-coin-VB201705171774173-ak_LWBP336714152-1674210356.png",
    text: "Rare",
  },
  {
    img: "https://teja9.kuikr.com/i5/20230121/Fastrack-analog-watch-for-men-and-boys-VB201705171774173-ak_WBP471138058-1674304031.png",
    text: "analog",
  },
  {
    img: "https://teja10.kuikr.com/i6/20230121/baby-cot-with-mosquito-net-in-very-good-working-condition-VB201705171774173-ak_LWBP834146552-1674303739.jpeg",
    text: "cot",
  },
  {
    img: "https://teja8.kuikr.com/i5/20230121/baby-pram-in-very-good-working-condition-VB201705171774173-ak_LWBP1441687642-1674303623.jpegg",
    text: "pram",
  },
  {
    img: "https://teja8.kuikr.com/i5/20230121/baby-pram-in-very-good-working-condition-VB201705171774173-ak_LWBP1441687642-1674303623.jpegg",
    text: "pram",
  },
  {
    img: "https://teja8.kuikr.com/i5/20230121/Fastrack-analog-watch-for-men-and-boys-VB201705171774173-ak_WBP471138058-1674304031.png",
    text: "watch",
  },
  {
    img: "https://www.quikr.com/home-lifestyle/single-bed-for-sell-jaipur/p/363722496g",
    text: "single bed",
  },
  {
    img: "https://teja10.kuikr.com/i6/20230121/gown-sale--Rs1500-VB201705171774173-ak_LWBP270693596-1674294319.jpeg",
    text: "dress",
  },
  {
    img: "https://teja10.kuikr.com/i5/20230121/Table-Tennis-table-VB201705171774173-ak_WBP848230870-1674304767.png",
    text: "table",
  },
];

const CarouselD = () => {
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
    <div className={cslcss.carousel_main_div}>
      <button
        className={cslcss.slide_prev_btn}
        onClick={() => slider?.current?.slickPrev()}
      >
        <BiChevronLeft />
      </button>
      <Slider ref={slider} {...settings} className={cslcss.carousel_comp_main}>
        {slides.map((slide, index) => (
          <div key={index} className={cslcss.slides_card}>
            <div className={cslcss.image_card}>
              <img style={{ width: "90%" }} src={slide.img} alt="alt" />
            </div>
            <p>{slide.text}</p>
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

export default CarouselD;
