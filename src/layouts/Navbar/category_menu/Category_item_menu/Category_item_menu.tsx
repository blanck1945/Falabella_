import * as React from "react";

import "./Category_item_menu.scss";
import { useSelector } from "react-redux";
import { GlobalState } from "../../../../Redux_Store/data_interfaces/state_interfaces";

interface OpenItemMenuProps {
  openItemMenu: boolean;
  data: any;
  num: number;
}

const Category_item_menu = ({ openItemMenu, data, num }: OpenItemMenuProps) => {
  const arr = data && data[num];
  const roof = arr && arr.map((filter: string) => filter.split(","));
  return (
    <>
      {openItemMenu ? (
        <div className="category_item_menu">
          <div className="category_div">
            {data &&
              roof.map((filter: string[]) =>
                filter.map((el: string, index: number) => (
                  <h3
                    className={
                      index === 0
                        ? "green_header"
                        : el === "ver todo"
                        ? "black_header"
                        : "header"
                    }
                  >
                    {el}
                  </h3>
                ))
              )}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Category_item_menu;

//   {<h3 className="header">{filter}</h3>;}
