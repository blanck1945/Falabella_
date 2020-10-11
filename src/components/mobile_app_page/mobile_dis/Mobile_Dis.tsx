import * as React from "react";

import Btn_Div from "../btn_div/Btn_Div";
import "./Mobile_Dis.scss";

const QR_img = require("../../../assets/falabella_QR/App-Falabella-QR.png");

interface MobileDis {
  label_up: string;
  header: string;
  label_down_1: string;
  label_down_2: string;
  mobile_btn?: boolean;
  QR_code?: boolean;
}

const Mobile_Dis = ({
  label_up,
  header,
  label_down_1,
  label_down_2,
  mobile_btn,
  QR_code,
}: MobileDis) => {
  return (
    <div className="mobile_dis">
      <div className="dis_box">
        <h3 className="label_up">{label_up}</h3>
        <h2 className="green_header">{header}</h2>
        <div className="label_box">
          <h3 className="label_down">{label_down_1}</h3>
          <h3 className="label_down">{label_down_2}</h3>
        </div>
        {mobile_btn ? <Btn_Div /> : null}
        {QR_code ? (
          <div className="qr_box">
            <img src={QR_img.default} alt="code" className="qr_code" />
            <h3 className="qr_text">
              ¡Descargá la App escaneando el <span className="qr_span">QR</span>
              !
            </h3>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Mobile_Dis;
