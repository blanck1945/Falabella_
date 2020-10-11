import * as React from "react";
import { BsFillDiamondFill } from "react-icons/bs";
import "./Mobile_Card.scss";

interface MobileCardProps {
  card_label: string;
  card_header: string;
  card_para: string;
}

const Mobile_Card = ({
  card_label,
  card_header,
  card_para,
}: MobileCardProps) => {
  return (
    <div className="mobile_card">
      <div className="card_header">
        <BsFillDiamondFill className="green_icon" />
        <h3 className="card_header_text">{card_label}</h3>
      </div>
      <div className="card_body">
        <h2 className="body_header">{card_header}</h2>
        <h3 className="body_para">{card_para}</h3>
      </div>
    </div>
  );
};

export default Mobile_Card;
