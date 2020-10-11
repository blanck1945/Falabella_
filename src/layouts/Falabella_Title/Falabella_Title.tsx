import * as React from "react";
import { BsFillDiamondFill } from "react-icons/bs";

import "./Falabella_Title.scss";

interface FalabellaTitleProps {
  label: string;
}

const Falabella_Title = ({ label }: FalabellaTitleProps) => {
  return (
    <div className="falabella_title">
      <BsFillDiamondFill className="diamond_icon" />
      <h3 className="falabella_text">{label}</h3>
    </div>
  );
};

export default Falabella_Title;
