import React from "react";

// CSS
import "./Carousel.css";

// Components
import image from "../../assets/img/_1.jpg";
import imageTwo from "../../assets/img/_2.jpg";
import imageThree from "../../assets/img/_3.jpg";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";

const Carrousel = () => {
  return (
    <Carousel fade className="carrousel" nextIcon prevIcon indicators={false}>
      <Carousel.Item>
        <Image
          className="d-block w-100 fluid image"
          src={image}
          alt="Imagen carrousel uno"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100 fluid image"
          src={imageTwo}
          alt="Imagen carrousel dos"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100 fluid image"
          src={imageThree}
          alt="Imagen carrousel tres"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Carrousel;
