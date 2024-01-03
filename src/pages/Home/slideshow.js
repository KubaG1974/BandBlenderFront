import React from "react";
import Slider from "react-slick";


const Slideshow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="/images/ovfl,jpg" alt="Slide 1" />
      </div>
      <div>
        <img src="/images/Metallica.jpg" alt="Slide 2" />
      </div>
      <div>
        <img src="/images/taim.jpg" alt="Slide 2" />
      </div>
    </Slider>
  );
};

export default Slideshow;
