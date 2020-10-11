import * as React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "./Si_img.scss";

const si_img = require("../../../assets/falabella_si/BLH2_Fundacion_150420.jpg");

const Si_Img = () => {
  return (
    <div className="si_box">
      <a href="https://fundacionsi.org.ar/super-si/?utm_source=Falabella&utm_medium=banner&utm_campaign=covid-19">
        <LazyLoadImage src={si_img.default} alt="si_img" className="si_img" />
      </a>
    </div>
  );
};

export default Si_Img;
