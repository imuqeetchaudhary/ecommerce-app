import React from "react";
import { Carousel } from "react-bootstrap";
import img from "../img/slide-img-1.jpg";
import { CarouselImg, CarouselCaption } from "./CarouselItem";

const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit ecommerce";

const CarouselCard = () => {
  return (
    <div className="carousel">
      <Carousel>
        <Carousel.Item>
          <CarouselImg img={img} />
          <Carousel.Caption>
            <CarouselCaption caption={"First Slide"} text={text} />
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <CarouselImg img={img} />
          <Carousel.Caption>
            <CarouselCaption caption={"Second Slide"} text={text} />
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <CarouselImg img={img} />
          <Carousel.Caption>
            <CarouselCaption caption={"Third Slide"} text={text} />
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselCard;
