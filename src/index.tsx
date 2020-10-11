import * as React from "react";
import * as reactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar/Navbar";
import Footer from "./layouts/Footer/Footer";
import { Provider } from "react-redux";
import { store as Redux_Store } from "./Redux_Store/store";
import Home_Page from "./components/home_page/Home_Page";
import Commerce_Page from "./components/commerce_page/Commerce_Page";
import Product_Page from "./components/product_page/Product_Page";

import "react-lazy-load-image-component/src/effects/blur.css";
import "./main.scss";
import Register_Page from "./components/register_page/Register_Page";
import Succesfull_Page from "./layouts/Succesful_page/Succesfull_Page";
import Mobile_App_Page from "./components/mobile_app_page/Mobile_App_Page";

const App: React.FunctionComponent = () => {
  return (
    <div className="container">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home_Page} />
        <Route path="/category" component={Commerce_Page} />
        <Route path="/product_page" component={Product_Page} />
        <Route path="/register_user" component={Register_Page} />
        <Route path="/succesfull_page" component={Succesfull_Page} />
        <Route path="/mobile_app" component={Mobile_App_Page} />
      </Switch>
      <Footer />
    </div>
  );
};

reactDOM.render(
  <Provider store={Redux_Store}>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </Provider>,
  document.getElementById("root")
);
