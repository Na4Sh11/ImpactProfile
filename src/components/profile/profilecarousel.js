import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import './profilecarousel.css'
import img2 from '../../assets/image/img2.jpg';

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="profile">
        <h2> Impactors </h2>
        <Slider {...settings}>
          <div>
            <button>
              <img src={img2} />
            </button>
          </div>
          <div>
            <button>
              <img src={img2} />
            </button>
          </div>
          <div>
            <button>
              <img src={img2} />
            </button>
          </div>
          <div>
            <button>
              <img src={img2} />
            </button>
          </div>
          <div>
            <button>
              <img src={img2} />
            </button>
          </div>
          <div>
            <button>
              <img src={img2} />
            </button>
          </div>
          <div>
            <button>
              <img src={img2} />
            </button>
          </div>
        </Slider>
      </div>
    );
  }
}
