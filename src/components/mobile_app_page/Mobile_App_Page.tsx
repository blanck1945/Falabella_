import * as React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Mobile_Dis from "./mobile_dis/Mobile_Dis";

import "./Mobile_App_Page.scss";
import Mobile_Card from "./mobile_card/Mobile_Card";

const falabella_app = require("../../assets/Mobile_app_page/App-Falabella-hero.png");
const delivery = require("../../assets/Mobile_app_page/App_delivey_gif.gif");
const app_gif = require("../../assets/Mobile_app_page/App_gif.gif");

const Mobile_App_Page = () => {
  return (
    <div className="mobile_app">
      <div className="mobile_box_1">
        <LazyLoadImage
          src={falabella_app.default}
          alt="falabella_app"
          className="img_1"
        />
        <Mobile_Dis
          label_up={"comprar ahoras es más"}
          header={"simple y rápido"}
          label_down_1={
            "Descubrí todo lo que Falabella tiene para vos desde tu celular. "
          }
          label_down_2={
            "Cómodo, rápido y seguro: lo que buscás a una descarga de distancia."
          }
          mobile_btn={true}
          QR_code={true}
        />
      </div>
      <div className="mobile_box_2">
        <Mobile_Card
          card_label={"mis órdenes"}
          card_header={"Seguí tu compra"}
          card_para={
            "¿Tu compra ya está lista para ser retirada o en camino? Recibí notificaciones del estado de tu compra."
          }
        />
        <LazyLoadImage
          src={delivery.default}
          alt="delivery"
          className="delivery_img"
        />
      </div>
      <div className="mobile_box_1">
        <LazyLoadImage src={app_gif.default} alt="gif" className="img_1" />
        <Mobile_Dis
          label_up={"enterate primero de todas"}
          header={"nuestras promociones"}
          label_down_1={
            "Promociones bancarias,descuentos online y ofertas de último"
          }
          label_down_2={
            "momento.Recibí notificaiones y no te pierdas de nada!."
          }
        />
      </div>
    </div>
  );
};

export default Mobile_App_Page;
