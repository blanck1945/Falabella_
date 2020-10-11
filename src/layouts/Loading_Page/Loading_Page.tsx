import * as React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import "./Loading_page.scss";

interface LoadingProps {
  label: string;
}

const Loading_Page = ({ label }: LoadingProps) => {
  return (
    <div className="loading_page">
      <div className="loading_msg_box">
        <h3 className="loading_label">{label}</h3>
        <Loader
          type="Puff"
          color="rgb(170, 213, 0)"
          height={100}
          width={100}
          timeout={3000}
        />
      </div>
    </div>
  );
};

export default Loading_Page;
