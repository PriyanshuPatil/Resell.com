import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import csl from "./Carousel.module.css";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export default function CarouselA({ img1, img2, img3, img4 } = []) {
  return (
    <CarouselProvider
      className={csl.carousel_main}
      naturalSlideWidth={100}
      naturalSlideHeight={67}
      totalSlides={4}
      infinite={true}
      visibleSlides={1}
    >
      <Slider>
        <Slide index={0}>
          <img
            style={{
              width: "100%",
              borderRadius: "5px",
            }}
            src={img1}
            alt="img"
          />
        </Slide>
        <Slide index={1}>
          <img
            style={{
              width: "100%",
              borderRadius: "5px",
            }}
            src={img2}
            alt="img"
          />
        </Slide>
        <Slide index={2}>
          <img
            style={{
              width: "100%",
              borderRadius: "5px",
            }}
            src={img3}
            alt="img"
          />
        </Slide>
        <Slide index={3}>
          <img
            style={{
              width: "100%",
              borderRadius: "5px",
            }}
            src={img4}
            alt="img"
          />
        </Slide>
      </Slider>
      <ButtonBack className={csl.carousel_prev_btn}>
        <BsChevronLeft />
      </ButtonBack>
      <ButtonNext className={csl.carousel_next_btn}>
        <BsChevronRight />
      </ButtonNext>
    </CarouselProvider>
  );
}
