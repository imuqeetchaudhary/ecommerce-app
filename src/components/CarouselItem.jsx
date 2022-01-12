import React from "react";

const CarouselImg = ({ img }) => {
  return (
    <>
      <img className="slider" src={img} alt="First slide" />
    </>
  );
};

const CarouselCaption = ({ caption, text }) => {
  return (
    <>
      <h1>{caption}</h1>
      <p>{text}</p>
    </>
  );
};

export { CarouselImg, CarouselCaption };
