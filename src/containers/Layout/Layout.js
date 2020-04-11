import React from "react";
import "./Layout.scss";

//Notifications
import ReactNotification from "react-notifications-component";

//Routes
import { HashRouter } from "react-router-dom";
import appRoutes from "../../routes/app.routes";
import AppRouter from "../../AppRouter";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Layout = (props) => {
  return (
    <div className="layout__container">
      <HashRouter basename="/">
        <Header></Header>
        <AppRouter routes={appRoutes} />
        <Footer></Footer>
      </HashRouter>
      <ReactNotification />
    </div>
  );
};

export default Layout;
