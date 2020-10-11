import * as React from "react";
import Carrousel_Page from "./carrousel_page/Carrousel_Page";
import Data_Comp from "./data_comp/Data_Comp";
import Offer_Div from "./offer_div/Offer_Div";
import Img_Row from "./img_row/Img_Row";
import { IoIosArrowUp } from "react-icons/io";
import Slider from "./slider/Slider";
import Circle_Dis from "./circle_dis/Circle_Dis";
import Si_Img from "./si_img/Si_Img";
import Costo_Financiero from "./costo_financiero/Costo_Financiero";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "./Home_Page.scss";
import Login_Modal from "./login_modal/Login_Modal";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { GlobalState } from "../../Redux_Store/data_interfaces/state_interfaces";
import {
  fetchAllProducts,
  fetchAllCategories,
} from "../../Redux_Store/axios/fetch_smartTV";
import Single_Product_Dis from "./single_product_dis/Single_Product_Dis";

const img1 = require("../../assets/center_offers/row1/DH1_Calzado-Ninos_070820.jpg");
const img2 = require("../../assets/center_offers/row1/DH2_Moda-Ninos_100820.jpg");
const img3 = require("../../assets/center_offers/row1/DH3_Movilidad_120820.jpg");

const imgRow1 = require("../../assets/center_offers/row2/DH4_Tecnologia_070820.jpg");
const imgRow2 = require("../../assets/center_offers/row2/DH5_Pequenos_070820.jpg");
const imgRow3 = require("../../assets/center_offers/row2/DH6_Menaje_100820.jpg");

const imgRow2_1 = require("../../assets/center_offers/row3/DH7_Linea-blanca_120820.jpg");
const imgRow2_2 = require("../../assets/center_offers/row3/DH8_Ropa-de-cama_110820.jpg");
const imgRow2_3 = require("../../assets/center_offers/row3/DH9_Muebles_070820.jpg");

const imgRow3_1 = require("../../assets/center_offers/row4/DH10_Rodados_120820.jpg");
const imgRow3_2 = require("../../assets/center_offers/row4/DH11_Maquillaje_070820.jpg");
const imgRow3_3 = require("../../assets/center_offers/row4/DH12_Decoracion_070820.jpg");

const boot = require("../../assets/chat_boot/Lucia-faar.png");

const Home_Page = () => {
  const [offset, setOffset] = React.useState<number>(0);
  const dispatch = useDispatch();

  React.useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };

    dispatch(fetchAllCategories());
  }, []);

  return (
    <div className="home_page">
      <div className="absolute_div">
        <LazyLoadImage src={boot.default} alt="boot" className="boot" />
        <IoIosArrowUp
          className={offset !== 0 ? "arrow_up" : "arrow_up no_show"}
          onClick={() => window.scrollTo(0, 0)}
        />
      </div>
      <Carrousel_Page />
      <Data_Comp />
      <Offer_Div />
      <Img_Row img1={img1.default} img2={img2.default} img3={img3.default} />
      <Img_Row
        img1={imgRow1.default}
        img2={imgRow2.default}
        img3={imgRow3.default}
      />
      <Img_Row
        img1={imgRow2_1.default}
        img2={imgRow2_2.default}
        img3={imgRow2_3.default}
      />
      <Img_Row
        img1={imgRow3_1.default}
        img2={imgRow3_2.default}
        img3={imgRow3_3.default}
      />
      <Single_Product_Dis />
      <Slider />
      <Circle_Dis />
      <Si_Img />
      <Costo_Financiero />
    </div>
  );
};

export default Home_Page;
