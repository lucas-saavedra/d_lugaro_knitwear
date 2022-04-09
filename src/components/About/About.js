import React from "react";

// CSS
import "./About.css";

// Components
import Dlugaro from "../Icons/Dlugaro/Dlugaro";
import AboutButton from "./AboutButton/AboutButton";

const About = () => {
  return (
    <div className="aboutContainer">
      <Dlugaro />
      <p className="textAbout">
        The company is the fruit of the experience of three generations who work
        with high-quality peruvian fibres with dedication. The company was born
        from the creativity and need of its founder, Lucía, to make clothing for
        her daughters, Gabriela and Roxana who grew up surrounded by machines
        and fabrics and saw the need to do it in an organised way, hence
        registering their company in 1999 as D'Lugaro, which is the union of
        their three names.
      </p>
      <AboutButton />
    </div>
  );
};

export default About;
