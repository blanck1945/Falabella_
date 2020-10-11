import * as React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Photo } from "../../../utils/photoArr";

interface DownNavProps {
  text?: boolean;
  header: string;
  label_1: string;
  label_2: string;
  img: Photo;
}

const Down_Navbar = ({ text, header, label_1, label_2, img }: DownNavProps) => {
  return (
    <div className="down_navbar">
      <div className="cmr_box">
        {text ? null : (
          <img src={img.default} alt="cmr_logo" className="cmr_img small" />
        )}
        {text ? (
          <img src={img.default} alt="cmr_logo" className="cmr_img" />
        ) : header === "offer1" ? (
          <div className="offer_box">
            <h3 className="offer_green">20% ¡extra!</h3>
            <h3 className="offer_black">{label_1}</h3>
          </div>
        ) : (
          <div className="offer_box">
            <h3 className="offer_green">25% ¡extra!</h3>
            <h3 className="offer_black">{label_2}</h3>
          </div>
        )}
        {text ? null : (
          <div className="ver_box">
            <a
              href="https://www.falabella.com.ar/falabella-ar/page/CMR-Mastercard?staticPageId=2500001&sid=home_BTH_CMR_110820"
              className="ver_text"
            >
              ver info
            </a>
            <MdKeyboardArrowRight className="ver_arrow" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Down_Navbar;
