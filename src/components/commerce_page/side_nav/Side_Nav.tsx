import * as React from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { FiSmile } from "react-icons/fi";

import "./Side_Nav.scss";

const Side_Nav = () => {
  return (
    <div className="side_nav">
      <div className="side_nav_box">
        <div className="side_header">
          <h4 className="header_text">Colchones</h4>
          <h4 className="header_sub_text">Colchones king y súper king</h4>
        </div>
        <h4>Resultados (49)</h4>
        <div className="side_menu"></div>
        <div className="side_para">
          <h4 className="para_header">descanso y salud</h4>
          <p className="para_text">
            Un colchón con resortes se caracteriza por su larga vida útil.
            Además, la flexibilidad de los resortes produce una mejor adaptación
            al peso y su firmeza ayuda a evitar deformaciones, lo que suele
            suceder más rápidamente en un colchón de espuma. Elegí entre
            colchones de resortes poquet o colchones de resortes bonell y
            disfrutá del mejor sueño.
          </p>
        </div>
        <div className="side_help">
          <FiSmile />
          <h3>Ayúdamos a mejorar tu experiencia</h3>
          <IoMdArrowRoundForward />
        </div>
      </div>
    </div>
  );
};

export default Side_Nav;
