import React from "react";

// CSS
import "./Carousel.css";

// Components
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";

const Carrousel = () => {
  return (
    <Carousel fade className="carrousel" nextIcon prevIcon indicators={false}>
      <Carousel.Item>
        <Image
          className="d-block w-100 fluid image"
          src="./assets/img/_1.jpg"
          alt="Imagen carrousel uno"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100 fluid image"
          src="./assets/img/_2.jpg"
          alt="Imagen carrousel dos"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100 fluid image"
          src="./assets/img/_3.jpg"
          alt="Imagen carrousel tres"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Carrousel;
