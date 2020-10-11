import * as React from "react";

import "./Footer_Up_List.scss";

interface FooterUpListProps {
  up_label: string;
  data: string[];
}

const Footer_Up_List = ({ up_label, data }: FooterUpListProps) => {
  return (
    <div className="up_list">
      <h2 className="list_header">{up_label}</h2>
      {data.map((el: string) => (
        <h3 className="list_text" key={el}>
          {el}
        </h3>
      ))}
    </div>
  );
};

export default Footer_Up_List;
