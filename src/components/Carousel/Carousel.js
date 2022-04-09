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
    <Carousel
      fade
      className="carrousel"
      nextIcon
      prevIcon
      indicators={false}
      style={{ height: "120vh", overflowY: "hidden" }}
    >
      <Carousel.Item>
        <Image
          className="d-block w-100 fluid"
          src={image}
          alt="Imagen carrousel uno"
          style={{
            overflowY: "hidden",
            maxWidth: "100%",
            maxHeight: "100%",
            marginTop: "-100px",
          }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100 fluid"
          src={imageTwo}
          alt="Imagen carrousel dos"
          style={{
            overflowY: "hidden",
            maxWidth: "100%",
            maxHeight: "100%",
            marginTop: "-100px",
          }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100 fluid"
          src={imageThree}
          alt="Imagen carrousel dos"
          style={{
            overflowY: "hidden",
            maxWidth: "100%",
            maxHeight: "100%",
            marginTop: "-100px",
          }}
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Carrousel;
