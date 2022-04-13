import * as React from "react";

// CSS
import "./IndicadorGallery.css";

// Components
import ArrowGalleryDesktop from "../Icons/ArrowGallery/ArrowGalleryDesktop/ArrowGalleryDesktop";
import ArrowGalleryMobile from "../Icons/ArrowGallery/ArrowGalleryMobile/ArrowGalleryMobile";
import useWindowDimensions from "../../Helpers/useWindowsDimensions";

const IndicadorGallery = (props) => {
  const { width } = useWindowDimensions();

  return (
    <div className="ArrowGalleryContainer">
      {width > 1024 ? <ArrowGalleryDesktop /> : <ArrowGalleryMobile />}
    </div>
  );
};

export default IndicadorGallery;
