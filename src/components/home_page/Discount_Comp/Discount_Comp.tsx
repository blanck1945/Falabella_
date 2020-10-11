import * as React from "react";
import Falabella_Title from "../../../layouts/Falabella_Title/Falabella_Title";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "./Discout_Comp.scss";

const discount1 = require("../../../assets/discount_div/BH1_Liquidacion-Moda_140820.jpg");
const discount2 = require("../../../assets/discount_div/BH2_Liquidacion-Moda_140820.jpg");
const discount3 = require("../../../assets/discount_div/BH3_Liquidacion-Calzado_140820.jpg");
const discount4 = require("../../../assets/discount_div/BH4_Liquidacion-Bazar_140820.jpg");

const Discount_Comp = () => {
  return (
    <div className="discount_comp">
      <Falabella_Title label={"Liquidación para vos"} />
      <a
        href="https://www.falabella.com.ar/falabella-ar/collection/todo-moda?&f.product.attribute.Tipo=Buzos%3A%3ACardigans%3A%3AFull+Zipper%3A%3APonchos%3A%3ARuanas%3A%3ASweaters&r.derived.price.search=1490%3A%3A0&sid=home_BH2_Liquidacion-Moda_140820"
        className="liquid_box"
      >
        <LazyLoadImage
          src={discount1.default}
          alt="discount_img"
          className="discount_img"
        />
        <LazyLoadImage
          src={discount2.default}
          alt="discount_img"
          className="discount_img"
        />
        <LazyLoadImage
          src={discount3.default}
          alt="discount_img"
          className="discount_img"
        />
        <LazyLoadImage
          src={discount4.default}
          alt="discount_img"
          className="discount_img"
        />
      </a>
    </div>
  );
};

export default Discount_Comp;
