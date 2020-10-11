import * as React from "react";
import Falabella_Title from "../../../layouts/Falabella_Title/Falabella_Title";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "./Cirlce_dis.scss";

//Cirlce Img
const circle1 = require("../../../assets/circle_offer/RH1_Gaming_070820.jpg");
const circle2 = require("../../../assets/circle_offer/RH2_Accesorios_070820.jpg");
const circle3 = require("../../../assets/circle_offer/RH3_Salud_070820.jpg");
const circle4 = require("../../../assets/circle_offer/RH4_Herramientas_070820.jpg");
const circle5 = require("../../../assets/circle_offer/RH5_Movilidad_070820.jpg");
const circle6 = require("../../../assets/circle_offer/RH6_Tapabocas_070820.jpg");

const Circle_Dis = () => {
  return (
    <div className="circle_dis_box">
      <Falabella_Title label={"Todo lo que buscás está en Falabella.com"} />
      <div className="circle_dis">
        <div className="circle_img_box">
          <LazyLoadImage
            src={circle1.default}
            alt="circle_img"
            className="circle_img"
          />
          <h3 className="circle_text">Videojuegos</h3>
        </div>
        <div className="circle_img_box">
          <LazyLoadImage
            src={circle2.default}
            alt="circle_img"
            className="circle_img"
          />
          <h3 className="circle_text">Joyas y bijouterie</h3>
        </div>
        <div className="circle_img_box">
          <LazyLoadImage
            src={circle3.default}
            alt="circle_img"
            className="circle_img"
          />
          <h3 className="circle_text">Tensiómetro</h3>
        </div>
        <div className="circle_img_box">
          <LazyLoadImage
            src={circle4.default}
            alt="circle_img"
            className="circle_img"
          />
          <h3 className="circle_text">Herramientas</h3>
        </div>
        <div className="circle_img_box">
          <LazyLoadImage
            src={circle5.default}
            alt="circle_img"
            className="circle_img"
          />
          <h3 className="circle_text">Movilidad eléctrica</h3>
        </div>
        <div className="circle_img_box">
          <LazyLoadImage
            src={circle6.default}
            alt="circle_img"
            className="circle_img"
          />
          <h3 className="circle_text">Tapabocas</h3>
        </div>
      </div>
    </div>
  );
};

export default Circle_Dis;
