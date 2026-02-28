import React from "react";
import SideBar from "../sideBar/SideBar";
import css from "./Layout.module.css";
import Header from "../header/Header";
const Layout = ({ children }) => {
  return (
    <div className={css.app}>
      <Header />
      <div className={css.layout}>
        <SideBar />
        <main className={`${css.content} container`}>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
