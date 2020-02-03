import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
// import AwesomeSliderStyles from "react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss";
import AwesomeSliderStyles from "react-awesome-slider/dist/styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";


import image_1 from "../images/image5.jpg";
import image_2 from "../images/image1.jpg";
import image_3 from "../images/image2.jpg";
import image_4 from "../images/image3.jpg";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = () => {

  return (
    <div className="slider">
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false}
        interval={3000}
        animation="cubeAnimation"
        cssModule={AwesomeSliderStyles}
      >
        <div data-src={image_1} />
        <div data-src={image_2} />
        <div data-src={image_3} />
        <div data-src={image_4} />
        {/* <div data-src="/path/to/image-1.png" />
    <div data-src="/path/to/image-2.jpg" /> */}
      </AutoplaySlider>
    </div>
  );
};

export default Slider;
