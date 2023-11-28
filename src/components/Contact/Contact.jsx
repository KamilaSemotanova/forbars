import style from "./Contact.module.scss";
import React from "react";

const Contact = () => {
  return (
    <div className={style.contact}>
      <div className={style.contact__container}>
        <h2 className={style.contact__title}>Kontakt</h2>
        <div className={style.card__box}>
          <div className={style.contact__card}>
            <img
              src="src/components/Contact/img/Josef portret.jpeg"
              alt="Josef photo"
              className={style.card__img}
            />
            <h3 className={style.card__title}>Josef Tajovský</h3>
            <p className={style.card__phone}>+420 602 852 856</p>
            <p className={style.card__email}>josef.tajovsky@forbars.cz</p>
          </div>
          <div className={style.contact__card}>
            <img
              src="src/components/Contact/img/Josef portret.jpeg"
              alt="Vilém photo"
              className={style.card__img}
            />
            <h3 className={style.card__title}>Vilém Sarvaš</h3>
            <p className={style.card__phone}>+420 608 677 468</p>
            <p className={style.card__email}>vilem.sarvas@forbars.cz</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
