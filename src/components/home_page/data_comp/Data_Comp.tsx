import * as React from "react";
import Data_item from "./Data_Item/Data_item";
import { data_arr, DataArr } from "./Data_arr";

import "./Data_Comp.scss";
import Discount_Comp from "../Discount_Comp/Discount_Comp";
const bank = require("../../../assets/gif/BLH1_Bancos_130820.gif");
const falabella_card = require("../../../assets/gif/falabella_gif.jpg");

const Data_Comp = () => {
  return (
    <>
      <div className="data_comp_box">
        {data_arr.map((el: DataArr) => (
          <Data_item key={el.icon} data={el} />
        ))}
      </div>
      <Discount_Comp />
      <div className="data_comp_box_down">
        <a
          href="https://www.falabella.com.ar/falabella-ar/page/Promociones-bancarias?staticPageId=2200001&sid=home_BLH1_Bancos_130820"
          className="link"
        >
          <img src={bank.default} alt="bank" className="bank_gif" />
        </a>
        <a
          href="https://www.falabella.com.ar/falabella-ar/page/App-Falabella?staticPageId=6800001&redirect=true&sid=home_BLH2_App_030820"
          className="link"
        >
          <img
            src={falabella_card.default}
            alt="falabella_bank"
            className="bank_gif"
          />
        </a>
      </div>
    </>
  );
};

export default Data_Comp;
