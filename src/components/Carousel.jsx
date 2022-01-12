import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../img/slide-img-1.jpg";

const CarouselComp = () => {
  return (
    <div className="carousel">
      <Carousel>
        <Carousel.Item>
          <img className="slider" src={img1} alt="First slide" />
          <Carousel.Caption>
            <h1>First Slide</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ecommerce
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="slider" src={img1} alt="Second slide" />

          <Carousel.Caption>
            <h1>Second Slide</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ecommerce
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="slider" src={img1} alt="Third slide" />

          <Carousel.Caption>
            <h1>Third Slide</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ecommerce
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComp;
