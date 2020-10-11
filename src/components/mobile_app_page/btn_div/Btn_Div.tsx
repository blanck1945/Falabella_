import * as React from "react";

import "./Btn_Div.scss";
const google = require("../../../assets/mobile_store_headers/App-Falabella-android.png");
const apple = require("../../../assets/mobile_store_headers/App-Falabella-ios.png");

interface BtnDivProps {
  resize?: boolean;
}

const Btn_Div = ({ resize }: BtnDivProps) => {
  return (
    <div className="btn_div">
      <button className={resize ? "mobile_btn small" : "mobile_btn"}>
        <a href="https://play.google.com/store/apps/details?id=com.falabella.falabellaApp&hl=es_AR">
          <img src={google.default} alt="google" />
        </a>
      </button>
      <button className={resize ? "mobile_btn small" : "mobile_btn"}>
        <a href="https://apps.apple.com/ar/app/falabella/id947145705">
          <img src={apple.default} alt="apple" />
        </a>
      </button>
    </div>
  );
};

export default Btn_Div;
