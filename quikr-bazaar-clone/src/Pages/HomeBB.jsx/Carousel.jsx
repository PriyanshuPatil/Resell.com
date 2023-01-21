import React from "react";
import cslcss from "./Carousel.module.css";
import Slider from "react-slick";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
//
let slides = [
  {
    img: "https://teja8.kuikr.com/escrow/assets/image/certified_landing_page/other-furnitures.png",
    text: "All Furnitures",
  },
  {
    img: "https://teja10.kuikr.com/escrow/assets/image/assured_landing_page/all_electonics_desktop.png",
    text: "All Electronics",
  },
  {
    img: "https://teja10.kuikr.com/escrow/assets/image/assured_landing_page/sofa_sets_desktop.png",
    text: "Sofa sets",
  },
  {
    img: "https://teja10.kuikr.com/escrow/assets/image/certified_landing_page/bed.png",
    text: "Bed Sets",
  },
  {
    img: "https://teja10.kuikr.com/escrow/assets/image/assured_landing_page/Wardrobes_desktop.png",
    text: "Wardrobs",
  },
  {
    img: "https://teja10.kuikr.com/escrow/assets/image/certified_landing_page/led-tv.png",
    text: "TVs",
  },
  {
    img: "https://teja10.kuikr.com/escrow/assets/image/certified_landing_page/laptops.png",
    text: "Laptops",
  },
  {
    img: "https://teja10.kuikr.com/escrow/assets/image/certified_landing_page/electronics/refrigerator.png",
    text: "Refrigerators",
  },
  {
    img: "https://teja10.kuikr.com/escrow/assets/image/assured_landing_page/Recliners_desktop.png",
    text: "Recliners",
  },
];

const Carousel = () => {
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
      <Slider
        ref={slider}
        {...settings}
        style={{ padding: "2rem 0" }}
        className={cslcss.carousel_comp_main}
      >
        {slides.map((slide, index) => (
          <div key={index} className={cslcss.slides_card}>
            <div className={cslcss.image_card}>
              <img style={{ width: "50%" }} src={slide.img} alt="alt" />
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

export default Carousel;
