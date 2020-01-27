import React from "react";
import AwesomeSlider from "react-awesome-slider";
import { styles } from "react-awesome-slider/dist/styles.css";

import image_1 from "../images/image4.png";
import image_2 from "../images/image1.jpg";
import image_3 from "../images/image2.jpg";
import image_4 from "../images/image3.jpg";

const Slider = () => {

  return (
    <div className="slider">
      <AwesomeSlider cssModule={styles}>
        <div data-src={image_1} />
        <div data-src={image_2} />
        <div data-src={image_3} />
        <div data-src={image_4} />
        {/* <div data-src="/path/to/image-1.png" />
    <div data-src="/path/to/image-2.jpg" /> */}
      </AwesomeSlider>
    </div>
  );
};

export default Slider;
