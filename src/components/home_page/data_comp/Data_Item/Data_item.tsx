import * as React from "react";
import { DataArr } from "../Data_arr";

import "./Data_item.scss";

interface DataItemProps {
  data: DataArr;
}

const Data_item = ({ data }: DataItemProps) => {
  return (
    <div className="data_item">
      <img src={data.icon} alt="data_icon" className="data_icon" />
      <div className="data_item_box">
        <h3 className="data_item_label">{data.label}</h3>
        <p className="data_para"> {data.data_para}</p>
        <a href={data.link} className="data_link">
          ver mas
        </a>
      </div>
    </div>
  );
};

export default Data_item;
