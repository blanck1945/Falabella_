import * as React from "react";

import "./Single_Product_Dis.scss";
import Falabella_Title from "../../../layouts/Falabella_Title/Falabella_Title";

const Single_Product_Dis = () => {
  return (
    <div className="single_product_box">
      <Falabella_Title label={"No lo pienses más"} />
      <div className="product_box"></div>
    </div>
  );
};

export default Single_Product_Dis;
