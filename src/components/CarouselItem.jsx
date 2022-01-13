import React from "react";

const CarouselImg = ({ img }) => {
  return (
    <>
      <img className="slider" src={img} alt="First slide" />
    </>
  );
};

const CarouselCaption = ({ title, detail }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{detail}</p>
    </>
  );
};

export { CarouselImg, CarouselCaption };
