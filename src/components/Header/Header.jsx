import style from "./Header.module.scss";
import logo from "../../assets/logo.png";
import React from "react";

const Header = () => {
  return (
    <header className={style.header}>
      <img src={logo} alt="logo" className={style.logo} />
      <p className={style.subtitle}>realizace barů a eventů</p>
    </header>
  );
};

export default Header;
