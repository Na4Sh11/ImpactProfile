import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./carousel.css";
import { Carousel } from "react-responsive-carousel";
import image1 from "../../assets/image/image1.jpg";
import image2 from "../../assets/image/image2.jpg";
import image3 from "../../assets/image/image3.jpg";
export default function CarouselComponent() {
  return (
    <div className="carousel-wrapper">
      <Carousel className="carousal1" infiniteLoop useKeyboardArrows autoPlay>
        <div>
          <img className="image1" src={image1} />
        </div>
        <div>
          <img className="image1" src={image2} />
        </div>
        <div>
          <img className="image1" src={image3} />
        </div>
      </Carousel>
    </div>
  );
}
