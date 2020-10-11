import * as React from "react";
import { MdArrowBack } from "react-icons/md";

import "./Commercer_page.scss";
import Side_Nav from "./side_nav/Side_Nav";
import Center_Page from "./center_page/Center_Page";
import { useSelector } from "react-redux";
import { GlobalState } from "../../Redux_Store/data_interfaces/state_interfaces";

const Commerce_Page = () => {
  const productState = useSelector(
    (state: GlobalState) => state.product_reducer
  );
  const serverState = useSelector((state: GlobalState) => state.server_reducer);

  return (
    <div className="commerce_page">
      <div className="info_nav">
        <div className="info_box">
          <MdArrowBack />
          <h4>{serverState.server_res.page}</h4>
        </div>
      </div>
      <div className="commerce_central">
        <Side_Nav />
        <Center_Page />
        <div className="central_container"></div>
      </div>
    </div>
  );
};

export default Commerce_Page;
