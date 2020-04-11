import React from "react";
import "./Layout.scss";

//Notifications
import ReactNotification from "react-notifications-component";

//Routes
import { BrowserRouter } from "react-router-dom";
import appRoutes from "../../routes/app.routes";
import AppRouter from "../../AppRouter";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Layout = (props) => {
  return (
    <div className="layout__container">
      <BrowserRouter>
        <Header></Header>
        <AppRouter routes={appRoutes} />
        <Footer></Footer>
      </BrowserRouter>
      <ReactNotification />
    </div>
  );
};

export default Layout;