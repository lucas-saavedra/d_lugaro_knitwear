import React, { useState } from "react";

// CSS
import "./AboutButton.css";

// Components
import Dlugaro from "../../Icons/Dlugaro/Dlugaro";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import Mision from "../../Icons/Mision/Mision";
import Vision from "../../Icons/Vision/Vision";
import Value from "../../Icons/Value/Value";
import Back from "../../Icons/Back/Back";
import useWindowDimensions from "../../../hooks/useWindowsDimensions";

const AboutButton = ({ ...props }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { width } = useWindowDimensions;

  return (
    <div className="containerCanvas d-flex justify-content-center">
      <Button onClick={handleShow} className="buttonAbout">
        About D ´ Lugaro
      </Button>
      <Offcanvas
        show={show}
        onHide={handleClose}
        {...props}
        placement="end"
        style={width > 1024 ? { width: "100%" } : { width: "694px" }}
      >
        <Offcanvas.Header className="d-flex justify-content-center">
          <div className="dlugaroTitleContainer">
            <Dlugaro />
          </div>
        </Offcanvas.Header>
        <Offcanvas.Body className="d-flex justify-content-between containerCanvasBody">
          <div className="misionContainer">
            <Mision />
            <h3 className="titleBody">MISSION</h3>
            <p>
              We are a Peruvian company dedicated to the design and manufacture
              of luxury knitwear with fibre native to Peru, such as alpaca, baby
              alpaca, Pima cotton and their mixtures.
            </p>
          </div>
          <div className="visionContainer">
            <Vision />
            <h3 className="titleBody">VISION</h3>
            <p>
              To be a leader in the textile industry, achieving not only the
              satisfaction of our clients but also positioning the quality of
              Peruvian fibre in international fashion industry
            </p>
          </div>
          <div className="valueContainer">
            <Value />
            <h3 className="titleBody">VALUES</h3>
            <div className="textContainer">
              <p>Creativity</p>
              <p>Commitment</p>
              <p>Inclusion</p>
              <p> Union</p>
            </div>
          </div>
          <button type="button" className="backContainer" onClick={handleClose}>
            <Back className="iconBack" />
          </button>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default AboutButton;
