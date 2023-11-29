import style from "./Footer.module.scss";
import React from "react";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <p className={style.copyright}>© 2023 For bars s.r.o.</p>
    </footer>
  );
};

export default Footer;
