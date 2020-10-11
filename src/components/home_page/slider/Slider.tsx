import * as React from "react";
import Falabella_Title from "../../../layouts/Falabella_Title/Falabella_Title";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "./Slider.scss";

//slider1
const slider1 = require("../../../assets/sider/slider_1/NH1_Xiaomi_130820.jpg");
const slider2 = require("../../../assets/sider/slider_1/NH2_Parrilla_070820.jpg");
const slider3 = require("../../../assets/sider/slider_1/NH3_Deportes_040820.jpg");

//slider2
const slider2_1 = require("../../../assets/sider/slider_2/NH4_Seguridad_070820.jpg");
const slider2_2 = require("../../../assets/sider/slider_2/NH5_Instrumentos_070820.jpg");
const slider2_3 = require("../../../assets/sider/slider_2/NH6_Sillones_070820.jpg");

const Slider = () => {
  const [translate, setTranslate] = React.useState<boolean>(false);

  React.useEffect(() => {
    changeValue();
  }, [translate]);

  const changeValue = () => {
    setTimeout(() => {
      setTranslate(!translate);
    }, 3000);
  };

  return (
    <div className="slider_box">
      <Falabella_Title label={"Lo nuevo en Falabella"} />
      <div className={translate ? "moved" : "slider"}>
        <div className="slider_1">
          <LazyLoadImage
            src={slider1.default}
            alt="slider_img"
            className="slider_img"
          />
          <LazyLoadImage
            src={slider2.default}
            alt="slider_img"
            className="slider_img"
          />
          <LazyLoadImage
            src={slider3.default}
            alt="slider_img"
            className="slider_img"
          />
        </div>
        <div className="slider_1">
          <LazyLoadImage
            src={slider2_1.default}
            alt="slider_img"
            className="slider_img"
          />
          <LazyLoadImage
            src={slider2_2.default}
            alt="slider_img"
            className="slider_img"
          />
          <LazyLoadImage
            src={slider2_3.default}
            alt="slider_img"
            className="slider_img"
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
