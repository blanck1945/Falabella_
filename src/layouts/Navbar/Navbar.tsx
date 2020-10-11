import * as React from "react";
import { MdArrowDropDown } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { BsBagFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import Category_Menu from "./category_menu/Category_Menu";
import Login_Modal from "../../components/home_page/login_modal/Login_Modal";
import Country_Menu from "./country_menu/Country_Menu";
import Down_Navbar from "./down_navbar/Down_Navbar";
import { Link } from "react-router-dom";

const argentinaFlag = require("../../assets/flags/argentina-flag-round-icon-16.png");
const falabella_logo = require("../../assets/falabella_icon.jpg");
//const down_nav_img = require("../../assets/down_navbar/BTH_App-week_180820.jpg");
const down_nav_img = require("../../assets/cmr_falabella/CMR_Falabella.svg.png");

import "./navbar.scss";
const Navbar: React.FunctionComponent = () => {
  const [header, setHeader] = React.useState<string>("offer1");
  const [openLogin, setOpenLogin] = React.useState<boolean>(false);
  const [openCategory, setOpenCategory] = React.useState<boolean>(false);
  const [openCountry, setOpenCountry] = React.useState<boolean>(false);
  const [country, setCountry] = React.useState<string>("Argentina");

  React.useEffect(() => {
    if (header === "offer1") {
      setTimeout(() => {
        setHeader("offer2");
      }, 4000);
    } else {
      setTimeout(() => {
        setHeader("offer1");
      }, 4000);
    }
  }, [header]);

  return (
    <div className="navbar">
      {openLogin ? (
        <Login_Modal openLogin={openLogin} setOpenLogin={setOpenLogin} />
      ) : null}
      <div className="up_navbar">
        <Link to="/" className="link_box">
          <img
            src={falabella_logo.default}
            alt="falabella_logo"
            className="falabella_logo"
          />
        </Link>
        <h3 className="venta_phone">VENTA TELEFÓNICA 0810 666 6685</h3>
        <div className="up_links">
          <a href="http://falabellacorporativa.com.ar/">Venta Corporativa</a>
          <a href="https://www.viajesfalabella.com.ar/paquetes/">Viajes</a>
          <a href="https://web.segurosfalabella.com/ar/?utm_source=Header&utm_medium=Falabella">
            Seguros
          </a>
          <a href="https://www.sodimac.com.ar/sodimac-ar/">Sodimac</a>
          <a href="https://www.linio.com.ar" className="right_bor">
            Linio
          </a>
          <div
            className="select_region"
            onClick={() => setOpenCountry(!openCountry)}
          >
            <img
              src={argentinaFlag.default}
              alt="argentina"
              className="flag_icon"
            />
            <MdArrowDropDown />
            {openCountry ? (
              <Country_Menu country={country} setCountry={setCountry} />
            ) : null}
          </div>
        </div>
      </div>
      <div className="center_navbar">
        {openCategory ? <div className="page_overlay"></div> : null}
        <Category_Menu open={openCategory} />
        <div
          className="category_burger"
          onClick={() => setOpenCategory(!openCategory)}
        >
          <GiHamburgerMenu className="burger_icon" />
          <h4 className="burger_text">categorias</h4>
        </div>
        <input
          type="search"
          placeholder="¿Qué buscas?"
          name="buscar"
          className="search_bar"
        />
        <div className="user_box" onClick={() => setOpenLogin(!openLogin)}>
          <div className="user_box_item flex">
            <FaUserAlt />
            <div className="user_log">
              <h4 className="user_session">Iniciar Sesión</h4>
              <h4 className="user_account">mi cuenta</h4>
            </div>
          </div>
          <div className="user_box_item border_hov">
            <FaClipboardList className="icon_green" />
            <h4 className="text_green">mis ordenes</h4>
          </div>
          <div className="user_box_item border_hov right_bor">
            <BsBagFill className="icon_green" />
            <h4 className="text_green">bolsa</h4>
          </div>
        </div>
      </div>
      <div className="center_down_navbar">
        <div className="down_nav_box">
          <a href="" className="down_nav_link">
            nuestras tiendas
          </a>
          <a href="" className="down_nav_link">
            eventos online
          </a>
          <a href="" className="down_nav_link">
            servicio al cliente
          </a>
          <a href="" className="down_nav_link">
            marketplace
          </a>
          <a href="" className="down_nav_link">
            novios
          </a>
          <a href="" className="down_nav_link">
            cmr
          </a>
        </div>
      </div>
      <Down_Navbar
        img={down_nav_img}
        text={false}
        header={header}
        label_1={
          "+3 coutas sin interés* en moda,calzado,deco,bazar,organización y muebles"
        }
        label_2={
          " +3 coutas sin interés* en jugueteria seleccionada,moda y calzado de niños"
        }
      />
    </div>
  );
};

export default Navbar;
