import * as React from "react";

import "./Offer_div.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
const offer1 = require("../../../assets/offers/home-Sx24-1_130820.jpg");
const offer2 = require("../../../assets/offers/home-Sx24-2_130820.jpg");
const offer3 = require("../../../assets/offers/home-Sx24-3_130820.jpg");

const Offer_Div = () => {
  return (
    <div className="offer_div">
      <div className="offer_nav">
        <div className="nav_red">
          <h3 className="red_text">solo x 24 horas</h3>
        </div>
        <div className="offer_text_box">
          <h3 className="offer_text">¡apurate!</h3>
          <h3 className="offer_text no_right">¡estas ofertas acaban en:</h3>
        </div>
        <div className="offer_watch"></div>
      </div>
      <div className="offer_item_box">
        <LazyLoadImage
          src={offer1.default}
          alt="offer"
          className="offer_img"
          effect="blur"
        />
        <LazyLoadImage
          src={offer2.default}
          alt="offer"
          className="offer_img"
          effect="blur"
        />
        <LazyLoadImage
          src={offer3.default}
          alt="offer"
          className="offer_img"
          effect="blur"
        />
      </div>
    </div>
  );
};

export default Offer_Div;
