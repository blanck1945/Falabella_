import * as React from "react";
import "./Footer.scss";
import Footer_Up_List from "./Footer_up_list/Footer_Up_List";
import { data1, data2, data3 } from "./Footer_up_list/footer_data";
import { GrMail } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";

const Footer: React.FunctionComponent = () => {
  return (
    <div className="footer">
      <div className="footer_up">
        <div className="falabella_news">
          <h3 className="news_header">suscribite a nuestro newsletter</h3>
          <h4 className="news_text">
            Informate de los último de Falabella. Nuestras ofertas y novedades
            directamente en tu mail
          </h4>
          <div className="news_input">
            <input
              type="text"
              placeholder="Ingresa tu dirección de e-mail"
              name="news_mail"
              className="footer_inp"
            />
            <span>
              <GrMail className="news_icon" />
            </span>
          </div>
          <div className="social_box">
            <a href="https://www.facebook.com/FalabellaArgentina/">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com/Falabella_ar">
              <AiOutlineTwitter />
            </a>
          </div>
        </div>
        <Footer_Up_List up_label={"servicio al cliente"} data={data1} />
        <Footer_Up_List up_label={"más falabella"} data={data2} />
        <Footer_Up_List up_label={"empresas falabella"} data={data3} />
      </div>
      <div className="footer_down">
        <div className="down_box">
          <h3 className="down_header">Â© Todos los derechos reservados.</h3>
          <h4 className="down_text">
            Falabella S.A. | Florida 343 PISO 4Â°, Ciudad Autónoma de Buenos
            Aires.
          </h4>
          <h4 className="down_text">Teléfono: 0810-333-7784.</h4>
        </div>
        <div className="down_box">
          <div className="norton_box"></div>
          <div className="afip_box"></div>
          <select name="currency">
            <option value="peso_argentino">pesos argentinos($)</option>
            <option value="peso_argentino">euro(€)</option>
            <option value="peso_argentino">us($)</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Footer;
