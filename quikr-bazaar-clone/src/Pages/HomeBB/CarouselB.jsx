import React from "react";
import cslcss from "./Carousel.module.css";
import Slider from "react-slick";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
//
let slides = [
  {
    img: "https://teja9.kuikr.com/i4/20220707/Feather-lite-all-leather-3-2-sofa-VB201705171774173-ak_LWBP1658209956-1657193742.jpeg",
    text: "Feather lite all...",
  },
  {
    img: "https://teja9.kuikr.com/i6/20220704/Original-sale-Sony-Alpha-a7R-IV-Mirrorless-Digital-Camera-With-SEL85F14GM-Lens-VB201705171774173-ak_LWBP306714731-1656914222.jpeg",
    text: "Original sale Sony",
  },
  {
    img: "https://teja10.kuikr.com/i4/20220702/Canon-EOS-200D-with-1-year-warranty-7-days-replacement-guarantee-VB201705171774173-ak_WBP912168807-1656737246.png",
    text: "Canon",
  },
  {
    img: "https://teja8.kuikr.com/escrow/assets/https://teja10.kuikr.com/i6/20220708/AC-on-Rent-in-Delhi-and-NCR-VB201705171774173-ak_WBP4276370-1657280720.png/certified_landing_page/other-furnitures.png",
    text: "AC on rent",
  },
  {
    img: "https://teja8.kuikr.com/i4/20221227/Airtel-prepaid-fancy-numbers-VB201705171774173-ak_WBP550117632-1672109282.png",
    text: "Airtel prepaid fancy",
  },
  {
    img: "https://teja10.kuikr.com/i6/20220727/Cudlycoo-Swing-with-Stand-in-excellent-condition-for-sale-VB201705171774173-ak_LWBP446060804-1658941367.png",
    text: "Cudicoo Swing",
  },
  {
    img: "https://teja8.kuikr.com/escrow/assets/image/certified_landing_page/other-furnitures.png",
    text: "Blah",
  },
  {
    img: "https://teja9.kuikr.com/i4/20220623/Apple-iPad-5th-Generation---Mint-condition-used--very-clean-and-neat-have-two-iPad-price-is-fixed-VB201705171774173-ak_LWBP296323035-1655938331.jpeg",
    text: "Apple Ipad",
  },
  {
    img: "https://teja8.kuikr.com/i5/20220923/premium-lucky-all-tipe-golden-fancy-vip-number-in-prepaid-VB201705171774173-ak_LWBP590116402-1663939308.jpeg",
    text: "Premium lucky all...",
  },
];

const CarouselB = () => {
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
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
              }}
              className={cslcss.image_card}
            >
              <img
                style={{ width: "70%", objectFit: "scale-down" }}
                src={slide.img}
                alt="alt"
              />
              <p>{slide.text}</p>
            </div>
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

export default CarouselB;
