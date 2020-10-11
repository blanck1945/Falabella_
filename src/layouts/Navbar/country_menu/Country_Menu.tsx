import * as React from "react";

const argentina_flag = require("../../../assets/flags/argentina-flag-round-icon-16.png");
const colombia_flag = require("../../../assets/flags/colombia-flag-round-icon-16.png");
const chile_flag = require("../../../assets/flags/chile-flag-round-icon-16.png");
const peru_flag = require("../../../assets/flags/peru-flag-round-icon-16.png");
const Falabella = require("../../../assets/falabella_icon.jpg");
import "./Country_Menu.scss";
import Falabella_Title from "../../Falabella_Title/Falabella_Title";

interface CountryMenuProps {
  country: string;
  setCountry: React.Dispatch<React.SetStateAction<string>>;
}

const Country_Menu = ({ country, setCountry }: CountryMenuProps) => {
  return (
    <div className="country_menu">
      <div className="country_div" onClick={() => setCountry("Argentina")}>
        <img src={argentina_flag.default} alt="flag" />
        <h3
          className={
            country === "Argentina" ? "country_text fala" : "country_text"
          }
        >
          Argentina
        </h3>
      </div>
      <div className="country_div" onClick={() => setCountry("Colombia")}>
        <img src={colombia_flag.default} alt="flag" />
        <h3
          className={
            country === "Colombia" ? "country_text fala" : "country_text"
          }
        >
          Colombia
        </h3>
      </div>
      <div className="country_div" onClick={() => setCountry("Chile")}>
        <img src={chile_flag.default} alt="img" />
        <h3
          className={country === "Chile" ? "country_text fala" : "country_text"}
        >
          Chile
        </h3>
      </div>
      <div className="country_div" onClick={() => setCountry("Peru")}>
        <img src={peru_flag.default} alt="img" />
        <h3
          className={country === "Peru" ? "country_text fala" : "country_text"}
        >
          Perú
        </h3>
      </div>
      <div className="country_div" onClick={() => setCountry("Home")}>
        <img src={Falabella.default} alt="fala_logo" className="fala_resize" />
        <h3
          className={country === "Home" ? "country_text fala " : "country_text"}
        >
          Home Corporativo
        </h3>
      </div>
    </div>
  );
};

export default Country_Menu;
