import React from "react";
import { Carousel } from "react-bootstrap";
import { carouselArray } from "../Carousel";
import { CarouselImg, CarouselCaption } from "./CarouselItem";

const CarouselCard = () => {
  return (
    <div className="carousel">
      <Carousel>
        {carouselArray.map((carousal) => {
          return (
            <Carousel.Item>
              <CarouselImg img={carousal.img} />
              <Carousel.Caption>
                <CarouselCaption
                  title={carousal.title}
                  detail={carousal.detail}
                />
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselCard;
