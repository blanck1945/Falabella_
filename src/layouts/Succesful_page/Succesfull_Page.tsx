import * as React from "react";

import "./Succesfull_Page.scss";
import { useHistory } from "react-router-dom";

interface SuccesfullPageProps {
  label: string;
}

const Succesfull_Page = ({ label }: SuccesfullPageProps) => {
  const [time, setTime] = React.useState<number>(10);
  const history = useHistory();

  React.useEffect(() => {
    if (time !== 0) {
      setTimeout(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    } else {
      history.push("/");
    }
  }, [time]);

  return (
    <div className="succ_box">
      <div className="user_box">
        <h3 className="timer_text">
          Ya formas parte de la comunidad de
          <span className="fala_col">Falabella</span>
        </h3>
        <h3 className="timer_text">Ingresa para compara lo que quieras</h3>
        <div className="timer_box">
          <h4 className="timer_text">Reedireccionado a Home en </h4>
          <h4 className="timer">{time}</h4>
        </div>
      </div>
    </div>
  );
};

export default Succesfull_Page;
